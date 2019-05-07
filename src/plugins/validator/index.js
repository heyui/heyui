import utils from 'hey-utils';
import typeValids from './validation/typeValids';
import baseValids from './validation/baseValids';
import combineValids from './validation/combineValids';

const extendResult = function (result1, result2) {
  let result = {};
  let keys = new Set([...Object.keys(result1), ...Object.keys(result2)]);
  for (let key of keys) {
    if (result1[key] && !result2[key]) {
      result[key] = result1[key];
    } else if (!result1[key] && result2[key]) {
      result[key] = result2[key];
    } else if (result1[key].valid === false || result2[key].valid === true) {
      result[key] = result1[key];
    } else {
      result[key] = result2[key];
    }
  }
  return result;
};

const ruleExecute = function (rule, argus) {
  if (utils.isFunction(rule)) {
    return rule.call(null, ...argus);
  } else if (utils.isObject(rule)) {
    let result = null;
    if (rule.pattern) {
      result = rule.pattern.test(String(argus[0]));
    } else if (utils.isFunction(rule.valid)) {
      result = rule.valid.apply(null, argus);
    }
    if (result === true) {
      return true;
    }
    return utils.isFunction(rule.message) ? rule.message() : rule.message;
  }
};

const returnArgs = function (prop, message, type = 'other') {
  if (message === true || message === undefined) {
    return {
      [prop]: { valid: true, message: null, type }
    };
  }
  return {
    [prop]: { valid: false, message, type }
  };
};

const DEFAULT = {
  rules: {},
  combineRules: []
};

class Validator {
  constructor(rules) {
    if (!utils.isObject(rules)) {
      console.error('[HeyUI Error] Validator: Please provide the correct validation parameters');
    }
    this.combineRuleResults = {};
    this.rules = {};
    this.combineRules = {};
    this.initRules(rules);
  }

  initRules(rules) {
    let genRules = {};
    utils.extend(true, genRules, DEFAULT, rules);
    let keys = Object.keys(typeValids);
    keys.unshift('required');

    for (let v of keys) {
      let validList = rules[v];
      if (utils.isArray(validList)) {
        for (let p of validList) {
          let rule = genRules.rules[p];
          if (!utils.isObject(rule)) {
            rule = genRules.rules[p] = {};
          }
          if (v == 'required') {
            rule.required = true;
          } else {
            rule.type = v;
          }
        }
      }
    }
    this.rules = genRules.rules;
    this.initCombineRules(genRules.combineRules);
  }

  updateRule(rules) {
    this.initRules(rules || {});
  }

  initCombineRules(rules) {
    let genRules = {};
    for (let rule of rules) {
      rule.id = utils.uuid();
      let parentRef = '';
      if (rule.parentRef) parentRef = `${rule.parentRef}.`;
      for (let ref of rule.refs) {
        let refProp = parentRef + ref;
        if (utils.isArray(genRules[refProp])) {
          genRules[refProp].push(rule);
        } else {
          genRules[refProp] = [rule];
        }
      }
    }
    this.combineRules = genRules;
  }

  valid(data, next, allNext) {
    let loadings = [];
    let uuid = utils.uuid();
    let result = this.validData(
      data, {
        uuid,
        next(r) {
          for (let key in r) {
            if (loadings.indexOf(key) > -1) {
              loadings.splice(loadings.indexOf(key), 1);
            }
          }
          utils.extend(result, r);
          if (next) {
            next.call(this, r);
          }
          if (allNext && loadings.length == 0) {
            allNext.call(this, result);
          }
        }
      });
    for (let prop in result) {
      if (result[prop].loading) {
        loadings.push(prop);
      }
    }
    if (allNext && loadings.length == 0) {
      allNext.call(this, result);
    }
    return result;
  }

  validData(data, { next, prop = '', sourceData, uuid } = {}) {
    let result = {};
    if (prop != '') {
      result = this.validField(prop, sourceData, { next, uuid });
    }
    if (sourceData == undefined) sourceData = data;
    if (utils.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        let nowProp = `${prop}[${i}]`;
        result = extendResult(result, this.validData(data[i], { next, prop: nowProp, sourceData, uuid }));
      }
    } else if (utils.isObject(data)) {
      for (let d in data) {
        let nowProp = prop + (prop == '' ? '' : '.') + d;
        result = extendResult(result, this.validData(data[d], { next, prop: nowProp, sourceData, uuid }));
      }
    }
    return result;
  }

  getConfig(prop) {
    let ruleKey = prop;
    if (prop.indexOf('[') > -1 && !this.rules[prop]) {
      ruleKey = prop.replace(/\[\w+\]/, '[]');
    }
    return this.rules[ruleKey];
  }

  setConfig(prop, options) {
    let ruleKey = prop;
    this.rules[ruleKey] = utils.extend(true, this.rules[ruleKey], options);
  }

  validFieldBase({ rule, value, parent }) {
    if (rule && Object.keys(rule).length > 0) {
      let result = ruleExecute(baseValids.required, [value]);

      if (rule.required && result !== true) {
        return result;
      }
      if (result === true) {
        if (rule.type) {
          result = ruleExecute(typeValids[rule.type], [value]);
          if (result !== true) return result;
        }

        let baseValidKeys = Object.keys(baseValids);
        baseValidKeys.shift();
        for (let key of baseValidKeys) {
          if (!utils.isNull(rule[key])) {
            let result = ruleExecute(baseValids[key], [value, rule[key]]);
            if (result !== true) return result;
          }
        }

        if (!utils.isNull(rule.valid)) {
          result = ruleExecute(rule.valid, [value, parent]);
          if (result !== true) return result;
        }
      } else {
        if (!utils.isNull(rule.validAnyway)) {
          result = ruleExecute(rule.validAnyway, [value, parent]);
          if (result !== true) return result;
        }
      }
    }
    return true;
  }

  validField(prop, data, { next, uuid } = {}) {
    if (utils.isNull(prop)) {
      return returnArgs(prop);
    }

    let value = utils.getKeyValue(data, prop);
    let rule = this.rules[prop] || {};

    let combineRules = this.combineRules[prop] || [];
    if (prop.indexOf('[') > -1) {
      let arrayRuleKey = prop.replace(/\[\w+\]/, '[]');
      rule = utils.extend({}, rule, this.rules[arrayRuleKey]);
      combineRules = utils.extend([], combineRules, this.combineRules[arrayRuleKey]);
    }

    let parent = data;
    let parentProp = '';
    if (prop.lastIndexOf('.') > -1) {
      parentProp = prop.substr(0, prop.lastIndexOf('.'));
      parent = utils.getKeyValue(data, parentProp);
    }

    let result = this.validFieldBase({ rule, value, parent });
    if (result !== true) {
      return returnArgs(prop, result, 'base');
    }

    result = this.combineRulesValid(combineRules, value, parent, parentProp, uuid);
    let baseResult = returnArgs(prop, undefined, 'base');
    if (result === true && utils.isFunction(next) && utils.isFunction(rule.validAsync)) {
      rule.validAsync.call(null, value, (result1) => {
        let n = returnArgs(prop, result1, 'async');
        n[prop].loading = false;
        next(n);
      }, parent, data);
      baseResult[prop].loading = true;
    }
    return utils.extend(baseResult, result);
  }

  combineRulesValid(rules, value, parent, parentProp, uuid) {
    if (!rules) return true;
    let refValids = {};
    let count = 0;
    for (let rule of rules) {
      let result = null;
      let prop = (rule.parentRef && parentProp ? (parentProp + '.') : '') + (rule.refs[rule.refs.length - 1]);
      let combineRuleResult = this.combineRuleResults[rule.id] || {};
      if (uuid && combineRuleResult.uuid == (uuid + parentProp)) {
        result = combineRuleResult.result;
      } else {
        let values = [];
        for (let ref of rule.refs) {
          let v = utils.getKeyValue(parent, ref);
          let refProp = (rule.parentRef && parentProp ? (parentProp + '.') : '') + ref;
          // When the basic parameters are not validated, it will stop validate.
          if (this.validFieldBase({ rule: this.rules[refProp], value: v, parent }) != true) {
            console.log('basic combine validation does not pass', refProp, this.rules[refProp], v);
            break;
          }
          values.push(v);
        }
        if (values.length < rule.refs.length) continue;
        let valid = rule.valid;
        if (utils.isObject(valid) && utils.isString(valid.valid)) {
          valid.valid = combineValids[valid.valid];
          if (utils.isNull(valid.valid)) {
            throw Error(`There is no validation rule named ${valid}`);
          }
        }
        result = ruleExecute(valid, values);
      }
      count += 1;
      let combineResult = returnArgs(prop, result, 'combine');

      if (uuid) {
        this.combineRuleResults[rule.id] = { uuid: (uuid + parentProp), result };
      }

      if (!refValids[prop] || refValids[prop].valid) {
        utils.extend(refValids, combineResult);
      }
    }
    if (count == 0) {
      return true;
    } else {
      return refValids;
    }
  }

  destroy() {
    this.rules = null;
    this.combineRules = null;
    this.combineRuleResults = null;
  }
}

export default Validator;
