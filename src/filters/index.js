import utils from '../utils/utils';
import locale from '../locale';

export default {
  dictMapping(value, key, connector) {
    return utils.dictMapping(value, key, connector);
  },
  hlang(key, value, defaultValue) {
    if (defaultValue == null) {
      return locale.t(key, value);
    }
    return defaultValue;
  }
};
