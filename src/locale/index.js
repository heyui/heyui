import Vue from 'vue';

import defaultLang from './lang/zh-CN';
import utils from '../utils/utils';
import Format from '../utils/format';

const format = Format(Vue);
let lang = defaultLang;
let merged = false;
let i18nHandler = function () {
  const vuei18n = Object.getPrototypeOf(this || Vue).$i18n;
  if (typeof vuei18n === 'function' && !!Vue.locale) {
    if (!merged) {
      merged = true;
      Vue.locale(
        Vue.config.lang,
        utils.copy(true, {}, lang, Vue.locale(Vue.config.lang) || {})
      );
    }
    return vuei18n.apply(this, arguments);
  }
};

const t = function (path, options) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;

  const array = path.split('.');
  let current = lang;

  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }
  return '';
};

const use = function (l) {
  lang = l || lang;
};

const i18n = function (fn) {
  i18nHandler = fn || i18nHandler;
};

export default {
  use,
  t,
  i18n
};
