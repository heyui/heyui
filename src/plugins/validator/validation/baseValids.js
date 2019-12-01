import locale from 'heyui/src/locale';

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
    return result === true ? true : locale.t('h.validation.base.minLen', { value: configValue });
  },
  max(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && Number(value) <= configValue;
    return result === true ? true : locale.t('h.validation.base.max', { value: configValue });
  },
  min(value, configValue) {
    if (configValue === null || configValue === undefined) {
      return true;
    }
    let result = value !== null && value !== undefined && Number(value) >= configValue;
    return result === true ? true : locale.t('h.validation.base.min', { value: configValue });
  }
};
export default valids;
