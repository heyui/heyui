import utils from '../utils/utils'
import config from '../utils/config'
import locale from '../locale'

export default {
  dictMapping(value, key, connector) {
    let dict = config.getDict(key);
    if (!dict || utils.isNull(value)) return '';
    if (utils.isString(value) && connector) {
      value = value.split(connector);
    }
    if (!utils.isNull(value) && value !== '' && key) {
      if (!utils.isArray(value)) {
        value = [value];
      }
    }
    if (value.length <= 0) {
      return '';
    }

    const keyField = config.getOption('dict', 'keyName');
    const titleField = config.getOption('dict', 'titleName');

    if (utils.isArray(dict)) {
      dict = utils.toObject(dict, keyField);
    }
    return value.map((ele) => {
      if (utils.isObject(ele)) {
        return ele[titleField];
      }
      const d = dict[ele];
      if (utils.isObject(d)) {
        return d[titleField];
      }
      return d;
    }).filter(ele => (ele && ele !== '')).join(connector || ', ');
  },
  hlang(key, value, defaultValue) {
    if (defaultValue == null) {
      return locale.t(key, value);
    }
    return defaultValue;
  }
}
