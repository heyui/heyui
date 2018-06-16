import locale from '../locale';
import utils from './utils';

const config = {
  dict: {
    keyName: "key",
    titleName: "title",
    dicts: {}
  },
  tree: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children',
    }
  },
  category: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children',
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
    childrenName: 'children',
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
  datepicker: {
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
        title: locale.t('h.date.today'),
        value() {
          return new Date();
        }
      },
      yesterday: {
        title: locale.t('h.date.yesterday'),
        value() {
          const date = new Date();
          date.setTime(date.getTime() - (3600 * 1000 * 24));
          return date;
        }
      }
    },
    weeks: [
      locale.t('h.date.weeks.monday'),
      locale.t('h.date.weeks.tuesday'),
      locale.t('h.date.weeks.wednesday'),
      locale.t('h.date.weeks.thursday'),
      locale.t('h.date.weeks.friday'),
      locale.t('h.date.weeks.saturday'),
      locale.t('h.date.weeks.sunday'),
    ],
    months: [
      locale.t('h.date.months.january'),
      locale.t('h.date.months.february'),
      locale.t('h.date.months.march'),
      locale.t('h.date.months.april'),
      locale.t('h.date.months.may'),
      locale.t('h.date.months.june'),
      locale.t('h.date.months.july'),
      locale.t('h.date.months.august'),
      locale.t('h.date.months.september'),
      locale.t('h.date.months.october'),
      locale.t('h.date.months.november'),
      locale.t('h.date.months.december'),
    ],
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: 'start',
        end: 'end'
      }
    },
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
}


export default func;
