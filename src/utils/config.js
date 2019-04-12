import utils from './utils';

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
      maxList: 20,
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
      console.error(`Config: There is no dictionary named ${name}`);
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
      console.error(`Config: There is no dictionary named ${key}`);
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
  }
};

export default func;
