let utils = require('hey-utils');
let typeValids = require('./validation/typeValids');
let baseValids = require('./validation/baseValids');
let combineValids = require('./validation/combineValids');

const ruleExecute = function (rule, argus) {
  if (utils.isFunction(rule)) {
    return rule.apply(null, argus);
  } else if (utils.isObject(rule)) {
    let result = null;
    if (rule.pattern) {
      result = rule.pattern.test(new String(argus[0]));
    } else if (utils.isFunction(rule.valid)) {
      result = rule.valid.apply(null, argus);
    }
    return result === true ? true : rule.message;
  }
}

const combineArgs = function (prop, message, type) {
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
      console.error("validator:请传递正确的验证参数");
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
        if (!utils.isArray(rule.valids)) {
        }
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

  valid(data, prop = "", sourceData) {
    let result = {};
    if (prop != '') {
      // log(prop);
      utils.extend(result, this.validField(prop, sourceData));
    }
    if (sourceData == undefined) sourceData = data;
    if (utils.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        let nowProp = `${prop}[${i}]`;
        utils.extend(result, this.valid(data[i], nowProp, sourceData));
      }
    } else if (utils.isObject(data)) {
      for (let d in data) {
        let nowProp = prop + (prop == "" ? "" : ".") + d;
        utils.extend(result, this.valid(data[d], nowProp, sourceData));
      }
    }
    return result;
  }

  getConfig(prop) {
    let ruleKey = prop;
    if (prop.indexOf("[") > -1) {
      ruleKey = prop.replace(/\[\w+\]/, "[]");
    }
    return this.rules[ruleKey];
  }

  validField(prop, data, next) {
    if (utils.isNull(prop)) {
      return combineArgs(prop);
    }

    let ruleKey = prop;
    let value = utils.getKeyValue(data, prop);
    if (prop.indexOf("[") > -1) {
      ruleKey = prop.replace(/\[\w+\]/, "[]");
    }
    let parent = data;
    let parentProp = '';
    if (prop.lastIndexOf(".") > -1) {
      parentProp = prop.substr(0, prop.lastIndexOf("."));
      parent = utils.getKeyValue(data, parentProp);
    }
    let rule = this.rules[ruleKey];
    if (rule == undefined) {
      log.error(`Error: Not found validator property '${ruleKey}'.`)
      return combineArgs(prop, true, 'base');
    }
    let result = this.validFieldBase(rule, value, parent);
    if (result !== true) {
      return combineArgs(prop, result, 'base');
    }
    result = this.combineRulesValid(ruleKey, value, parent, parentProp);
    let baseResult = combineArgs(prop);
    if (result === true && utils.isFunction(next) && utils.isFunction(rule.validAsync)) {
      rule.validAsync.call(null, value, (result) => {
        let n = combineArgs(prop, result);
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
        //当有基本参数验证不通过时，暂时不验证
        if (this.validFieldBase(this.rules[prop], v, parent) != true || !baseValids.required.valid(v)) {
          break;
        }
        values.push(v);
      }
      if (values.length < rule.refs.length) continue;
      let valid = rule.valid;
      if (utils.isObject(valid) && utils.isString(valid.valid)) {
        valid.valid = combineValids[valid.valid];
        if (utils.isNull(valid.valid)) {
          throw Error(`不存在命名为${valid}的验证规则`);
        }
      }
      // console.log(valid);
      // console.log(parentProp);
      let result = ruleExecute(valid, values);
      // if (result !== true) {
      count++;
      let prop = (rule.parentRef && parentProp ? (parentProp + ".") : "") + (rule.refs[rule.refs.length - 1]);
      utils.extend(refValids, combineArgs(prop, result));
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
