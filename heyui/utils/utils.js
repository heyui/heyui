import utils from 'hey-utils';
import config from './config';

const rclass = /[\t\r\n\f]/g;
const rnotwhite = (/\S+/g);

function getClass(elem) {
  return elem.getAttribute && elem.getAttribute("class") || "";
}
export default utils.extend({}, utils, {
  addClass(elem, value) {
    let classes;
    let cur;
    let curValue;
    let clazz;
    let j;
    let finalValue;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);
      cur = elem.nodeType === 1 &&
        (` ${curValue} `).replace(rclass, " ");

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          if (cur.indexOf(` ${clazz} `) < 0) {
            cur += `${clazz} `;
          }
        }
        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }
  },

  removeClass(elem, value) {
    let classes;
    let cur;
    let curValue;
    let clazz;
    let j;
    let finalValue;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);

      // This expression is here for better compressibility (see addClass)
      cur = elem.nodeType === 1 &&
        (` ${curValue} `).replace(rclass, " ");

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          while (cur.indexOf(` ${clazz} `) > -1) {
            cur = cur.replace(` ${clazz} `, ' ');
          }
        }

        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }

    return this;
  },
  removeDom(elem) {
    if (elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  },
  hasClass(elem, selector) {
    let className;
    className = ` ${selector} `;
    if (elem.nodeType === 1 &&
      (` ${getClass(elem)} `).replace(rclass, " ")
      .indexOf(className) > -1
    ) {
      return true;
    }

    return false;
  },
  initParam(param, paramFrom, array) {
    if (this.isArray(array) && this.isObject(param) && this.isObject(param)) {
      for (let a of array) {
        if (paramFrom[a]) param[a] = paramFrom[a];
      }
    }
    return param;
  },
  toggleValue(list, value) {
    if (!this.isArray(list)) return;
    if (list.includes(value)) {
      list.splice(list.indexOf(value), 1);
    } else {
      list.push(value);
    }
  },
  padLeft(str, size) {
    var s = "00000" + str;
    return s.substr(s.length - size);
  },
  toggleValueByKey(list, key, value) {
    if (!this.isArray(list)) return;
    let index = -1;
    for (let l of list) {
      if (this.isNull(l[key])) {
        continue;
      }
      index = list.indexOf(l);
      break;
    }
    if (index > -1) {
      list.splice(index, 1);
    } else {
      list.push(value);
    }
  },
  getArray(array, keyName = 'id') {
    const list = [];
    for (let a of array) {
      list.push(a[keyName])
    }
    return list;
  },
  numList(start, end, step) {
    let data = [];
    for (let i = start; i < end; i = i + step) {
      data.push(i);
    }
    return data;
  },
  initOptions(datas, param) {
    let key = config.getOption('dict.keyName');
    let title = config.getOption('dict.titleName');
    let options = [];
    if (this.isObject(datas)) {
      options = this.toArray(datas, key, title);
    } else if (this.isArray(datas)) {
      if (datas.length == 0) {
        options = [];
      } else {
        let data0 = datas[0];
        if (this.isObject(data0)) {
          options = this.copy(datas);
        } else {
          options = datas.map((item) => {
            return {
              [`${key}`]: item,
              [`${title}`]: item
            };
          })
        }
      }
    }
    if (param.render) {
      options.forEach((item) => {
        item[param.html] = param.render.call(null, item);
      })
    }
    return options;
  },
  toSimpleArray(data, key) {
    let r = [];
    if (this.isObject(data)) {
      for (let d of Object.keys(data)) {
        r.push(data[d][key]);
      }
    }
    if (this.isArray(data)) {
      for (let d of data) {
        r.push(d[key]);
      }
    }
    return r;
  },
  generateTree(data, param) {
    if (!this.isArray(data)) {
      log.error("generateTree：data必须为Array。");
      return null;
    }
    let result = [];
    let dataObj = this.toObject(data, param.keyName);
    let parentObj = this.toObject(data, param.parentName);
    for (let d of data) {
      let parentCode = d[param.parentName];
      if (!utils.isNull(d[param.parentName]) && dataObj[parentCode]) {
        let parent = dataObj[parentCode];
        if (!utils.isArray(parent[param.childrenName])) {
          parent[param.childrenName] = [];
        }
        parent[param.childrenName].push(d);
      }

      if (utils.isNull(parentCode) || utils.isNull(parentObj[parentCode])) {
        result.push(d);
      }
    }
    return result;
  },
  getValue(item, param) {
    let title = '';
    let key = null;
    if (utils.isObject(item)) {
      title = item[param.title];
      key = item[param.key];
    } else {
      title = item;
      key = item;
    }
    let result = { key, title, value: item };
    if (param.render && result.key) {
      result.html = param.render.call(null, result);
    }
    return result;
  },
  getAbsPosition(elem) {

  }
});
