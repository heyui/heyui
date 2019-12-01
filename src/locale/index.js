import zhLang from 'heyui/src/locale/lang/zh-CN';
import enLang from 'heyui/src/locale/lang/en-US';
import utils from 'heyui/src/utils/utils';
import Format from 'heyui/src/utils/format';

const format = Format();
let lang = zhLang;
const langs = {
  zh: zhLang,
  en: enLang
};
let nowLang = null;
let merged = {};
let vuei18n = null;
let i18nHandler = function () {
  vuei18n = this.$i18n || vuei18n;
  if (vuei18n && vuei18n.locale) {
    if (!merged[vuei18n.locale] || nowLang != vuei18n.locale) {
      merged[vuei18n.locale] = true;
      let localMessage = vuei18n.getLocaleMessage(vuei18n.locale) || {};
      let newLocalMessage = {};
      utils.extend(true, newLocalMessage, langs[vuei18n.locale], localMessage);
      lang = newLocalMessage;
      vuei18n.setLocaleMessage(vuei18n.locale, newLocalMessage);
      nowLang = vuei18n.locale;
    }
    return vuei18n.t(...arguments);
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

const i18n = function (initI18n) {
  vuei18n = initI18n;
};

export default {
  use,
  t,
  i18n
};
