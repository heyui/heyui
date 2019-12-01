import utils from 'heyui/src/utils/utils';

const config = {
  dict: {
    keyName: 'key',
    titleName: 'title',
    dicts: {}
  },
  tree: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  category: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  categoryPicker: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  cascader: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  uploader: {
    urlName: 'url',
    fileName: 'name',
    thumbUrl(url) {
      return url;
    }
  },
  menu: {
    titleName: 'title',
    keyName: 'key',
    childrenName: 'children'
  },
  autocomplete: {
    configs: {},
    default: {
      maxLength: 20,
      delay: 100,
      loadData: null,
      minWord: 0,
      titleName: 'title',
      keyName: 'key',
      render: null
    }
  },
  modal: {
    hasDivider: false
  },
  page: {
    small: false,
    size: 10,
    sizes: [10, 20, 50, 100],
    layout: 'total,pager,jumper,sizes',
    onChangeSize() {
      // The need to deal with the global paging page number
    },
    init() {
      // The need to deal with the global paging page number
    },
    onChange() {}
  },
  avatar: {
    handleSrc(src) {
      return src;
    }
  },
  datepicker: {
    startWeek: 1,
    format: {
      date: 'YYYY-MM-DD',
      month: 'YYYY-MM',
      year: 'YYYY',
      time: 'HH:mm',
      datetime: 'YYYY-MM-DD HH:mm',
      datehour: 'YYYY-MM-DD HH:mm',
      datetimesecond: 'YYYY-MM-DD HH:mm:ss'
    },
    shortcuts: {
      today: {
        title: '今天',
        value() {
          return new Date();
        }
      },
      yesterday: {
        title: '昨天',
        value() {
          const date = new Date();
          date.setTime(date.getTime() - (3600 * 1000 * 24));
          return date;
        }
      }
    },
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: 'start',
        end: 'end'
      }
    }
  }
};

const func = {
  getDict(name) {
    const dict = config.dict.dicts[name];
    if (!dict) {
      console.error(`[HeyUI] Config: There is no dictionary named ${name}`);
      return [];
    }
    return dict;
  },
  getOption(type, name) {
    let key = `${type}`;
    if (!utils.isNull(name)) {
      key = `${type}.${name}`;
    }
    const value = utils.getKeyValue(config, `${key}`);
    if (utils.isNull(value)) {
      console.error(`[HeyUI] Config: There is no dictionary named ${key}`);
      return null;
    }
    return value;
  },
  config(name, value) {
    if (utils.isNull(name)) {
      return false;
    }
    let keyValue = utils.getKeyValue(config, name);
    if (utils.isObject(keyValue) && utils.isObject(value)) {
      utils.extend(keyValue, value);
    } else {
      utils.setKeyValue(config, name, value);
    }
    return true;
  },
  initDict(objects) {
    Object.assign(config.dict.dicts, objects);
  },
  addDict(name, value) {
    config.dict.dicts[name] = value;
  },
  dictMapping(value, key, connector) {
    let dict = this.getDict(key);
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

    const keyField = this.getOption('dict', 'keyName');
    const titleField = this.getOption('dict', 'titleName');

    if (utils.isArray(dict)) {
      dict = utils.toObject(dict, keyField);
    }
    let result = value.map((ele) => {
      if (utils.isObject(ele)) {
        return ele[titleField];
      }
      const d = dict[ele];
      if (utils.isObject(d)) {
        return d[titleField];
      }
      return d;
    });
    return result.filter(ele => (ele && ele !== '')).join(connector || ', ');
  },
  initOptions(datas, param) {
    let key = this.getOption('dict.keyName');
    let title = this.getOption('dict.titleName');
    let options = [];
    if (utils.isObject(datas)) {
      options = utils.toArray(datas, key, title);
    } else if (utils.isArray(datas)) {
      if (datas.length == 0) {
        options = [];
      } else {
        let data0 = datas[0];
        if (utils.isObject(data0)) {
          options = utils.copy(datas);
        } else {
          options = datas.map((item) => {
            return {
              [`${key}`]: item,
              [`${title}`]: item
            };
          });
        }
      }
    }
    if (param.render) {
      options.forEach((item) => {
        item[param.html] = param.render.call(null, item);
      });
    }
    return options;
  }
};

export default func;
