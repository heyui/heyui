import config from 'heyui/utils/config';
import locale from 'heyui/locale';

export const dictMapping = function (value, key, connector) {
  return config.dictMapping(value, key, connector);
};
export const hlang = function (key, value, defaultValue) {
  if (defaultValue == null) {
    return locale.t(key, value);
  }
  return defaultValue;
}
;