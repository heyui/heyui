let utils = require('hey-utils');
let typeValids = require('./validation/typeValids');
let baseValids = require('./validation/baseValids');
let combineValids = require('./validation/combineValids');

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
}

const combineArgs = function (prop, message, type = 'other') {
  if (message === true || message === undefined) {
    return {
      [prop]: { valid: true, message: null, type }
    };
  }
  return {
    [prop]: { valid: false, message, type }
  };
}

const DEFAULT = {
  rules: {},
  combineRules: []
}
class Validator {
  constructor(rules) {
    if (!utils.isObject(rules)) {
      console.error("validator: please pass the correct validation parameters");
    }
    this.rules = {};
    this.combineRules = {};
    this.initRules(rules);
  }

  initRules(rules) {
    let genRules = {};
    utils.extend(true, genRules, DEFAULT, rules);
    let keys = Object.keys(typeValids);
    keys.unshift('required');

    for (let key in genRules.rules) {
      let rule = genRules.rules[key];
      if (utils.isObject(rule)) {
        if (!utils.isArray(rule.valids)) {}
      } else {
        delete genRules.rules[key];
      }
    }

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
            // if (rule.valids.indexOf(v) == -1) {
            //   rule.valids.push(v);
            // }
          }
        }
      }
    }
    // console.log(genRules.rules);
    this.rules = genRules.rules;
    this.initCombineRules(genRules.combineRules);
  }

  updateRule(rules) {
    this.initRules(rules || {});
  }

  initCombineRules(rules) {
    let genRules = {};
    for (let rule of rules) {
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
    // console.log(genRules);
    this.combineRules = genRules;
  }

  valid(data, next, allNext) {
    let loadings = [];
    let result = this.validData(data, function (r) {
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

  validData(data, next, prop = "", sourceData) {
    let result = {};
    if (prop != '') {
      // log(prop);
      utils.extend(result, this.validField(prop, sourceData, next));
    }
    if (sourceData == undefined) sourceData = data;
    if (utils.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        let nowProp = `${prop}[${i}]`;
        utils.extend(result, this.validData(data[i], next, nowProp, sourceData));
      }
    } else if (utils.isObject(data)) {
      for (let d in data) {
        let nowProp = prop + (prop == "" ? "" : ".") + d;
        utils.extend(result, this.validData(data[d], next, nowProp, sourceData));
      }
    }
    return result;
  }

  getConfig(prop) {
    let ruleKey = prop;
    if (prop.indexOf("[") > -1 && !this.rules[prop]) {
      ruleKey = prop.replace(/\[\w+\]/, "[]");
    }
    return this.rules[ruleKey];
  }

  setConfig(prop, options) {
    let ruleKey = prop;
    // if (prop.indexOf("[") > -1 && !this.rules[prop]) {
    //   ruleKey = prop.replace(/\[\w+\]/, "[]");
    // }
    this.rules[ruleKey] = utils.extend(true, this.rules[ruleKey], options);
  }

  validField(prop, data, next) {
    if (utils.isNull(prop)) {
      return combineArgs(prop);
    }

    let ruleKey = prop;
    let value = utils.getKeyValue(data, prop);
    let originalRule = this.rules[prop];
    if (prop.indexOf("[") > -1 && !this.rules[prop]) {
      ruleKey = prop.replace(/\[\w+\]/, "[]");
    }
    let parent = data;
    let parentProp = '';
    if (prop.lastIndexOf(".") > -1) {
      parentProp = prop.substr(0, prop.lastIndexOf("."));
      parent = utils.getKeyValue(data, parentProp);
    }
    let rule = utils.extend({}, originalRule || {}, this.rules[ruleKey]);
    if (rule == undefined) {
      // console.error(`Error: Not found validator property '${ruleKey}'.`)
      let genRules = this.combineRules;
      let rules = genRules[ruleKey];
      if (!rules) {
        return combineArgs(prop, true, 'base');
      }
      return this.combineRulesValid(ruleKey, value, parent, parentProp);
    }
    let result = this.validFieldBase(rule, value, parent);
    if (result !== true) {
      return combineArgs(prop, result, 'base');
    }
    result = this.combineRulesValid(ruleKey, value, parent, parentProp);
    let baseResult = combineArgs(prop, undefined, 'base');
    if (result === true && utils.isFunction(next) && utils.isFunction(rule.validAsync)) {
      rule.validAsync.call(null, value, (result1) => {
        let n = combineArgs(prop, result1, 'async');
        n[prop].loading = false;
        next(n);
      }, parent, data);
      baseResult[prop].loading = true;
    }
    return utils.extend(baseResult, result);
  }
  
  validFieldBase(rule, value, parent) {
    // console.log(rule, value, parent);
    if (rule) {
      let result = ruleExecute(baseValids.required, [value]);

      if (rule.required) {
        if (result !== true) {
          return result;
        }
      } else if (result !== true) {
        return true;
      }

      if (rule.type) {
        result = ruleExecute(typeValids[rule.type], [value]);
        if (result !== true) return result;
      }

      let baseValidKeys = Object.keys(baseValids)
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
    }
    return true;
  }

  combineRulesValid(ruleKey, value, parent, parentProp) {
    let genRules = this.combineRules;
    let rules = genRules[ruleKey];
    if (!rules) return true;
    let refValids = {};
    let count = 0;
    for (let rule of rules) {
      let values = [];
      for (let ref of rule.refs) {
        let v = utils.getKeyValue(parent, ref);
        let prop = (rule.parentRef && parentProp ? (parentProp + ".") : "") + ref;
        //When the basic parameters are not validated, it will stop validate.
        if (this.validFieldBase(this.rules[prop], v, parent) != true) {
          console.log('basic combine validation does not pass', prop, this.rules[prop], v);
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
      // console.log(valid);
      // console.log(parentProp);
      let result = ruleExecute(valid, values);
      // if (result !== true) {
      count++;
      let prop = (rule.parentRef && parentProp ? (parentProp + ".") : "") + (rule.refs[rule.refs.length - 1]);
      let combineResult = combineArgs(prop, result, 'combine');
      if (!refValids[prop] || refValids[prop].valid) {
        utils.extend(refValids, combineResult);
      }
      // }
    }
    if (count == 0) {
      return true;
    } else {
      return refValids;
    }
  }
}

module.exports = Validator;
