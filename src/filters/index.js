import config from 'heyui/utils/config';
import locale from 'heyui/locale';

export default {
  dictMapping(value, key, connector) {
    return config.dictMapping(value, key, connector);
  },
  hlang(key, value, defaultValue) {
    if (defaultValue == null) {
      return locale.t(key, value);
    }
    return defaultValue;
  }
};
