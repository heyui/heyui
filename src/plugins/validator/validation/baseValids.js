import locale from '../../../locale';

let valids = {
  required(value) {
    let result = value !== null && value !== undefined && String(value).length > 0;
    return result === true ? true : locale.t('h.validation.base.required');
  },
  maxLen(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && String(value).length <= configValue;
    return result === true ? true : locale.t('h.validation.base.maxLen', { value: configValue });
  },
  minLen(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && String(value).length >= configValue;
    return result === true ? true : `文字长度不能少于${configValue}个字`;
  },
  max(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && Number(value) <= configValue;
    return result === true ? true : `不能大于${configValue}`;
  },
  min(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && Number(value) >= configValue;
    return result === true ? true : `不能小于${configValue}`;
  }
};
module.exports = valids;
