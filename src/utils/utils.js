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

      cur = elem.nodeType === 1 && (` ${curValue} `).replace(rclass, " ");

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
    if (elem && elem.parentNode) {
      elem.parentNode.removeChild(elem);
    }
  },
  padLeft(str, size) {
    let s = `00000${str}`;
    return s.substr(s.length - size);
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
    if (!this.isArray(list)) return [value];
    let copyList = this.extend([], list);
    if (list.some(item => item == value)) {
      copyList.splice(list.indexOf(value), 1);
    } else {
      copyList.push(value);
    }
    return copyList;
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
  generateTree(data, param) {
    if (!this.isArray(data)) {
      log.error("generateTree：data必须为Array。");
      return null;
    }
    let result = [];
    let dataObj = this.toObject(data, param.keyName);
    for (let d of data) {
      let parentCode = d[param.parentName];
      let hasParent = false;
      if (!utils.isNull(parentCode)) {
        let parentCodes = [parentCode];
        if (utils.isArray(parentCode)) {
          parentCodes = parentCode;
        }
        for (let code of parentCodes) {
          if (!utils.isNull(dataObj[code])) {
            hasParent = true;
            let parent = dataObj[code];
            if (!utils.isArray(parent[param.childrenName])) {
              parent[param.childrenName] = [];
            }
            parent[param.childrenName].push(d);
          }
        }
      }
      if (utils.isNull(parentCode) || !hasParent) {
        result.push(d);
      }
    }
    return result;
  },
  isBlank(value) {
    return this.isNull(value) || value === '';
  },
  getValue(item, param) {
    let title = '';
    let key = null;
    if (utils.isObject(item)) {
      title = item[param.titleName];
      key = item[param.keyName];
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
  addFn(dataOne, dataTwo) {
    let dataOneInt = dataOne.toString().split(".")[0];
    let dataOneFloat = '';
    let dataTwoInt = dataTwo.toString().split(".")[0];
    let dataTwoFloat = '';
    let lengthOne = 0;
    let lengthTwo = 0;
    let maxLength = 0;

    if (dataOne.toString().split(".").length == 2) {
      dataOneFloat = dataOne.toString().split(".")[1];
      lengthOne = dataOneFloat.toString().length;
    }
    if (dataTwo.toString().split(".").length == 2) {
      dataTwoFloat = dataTwo.toString().split(".")[1];
      lengthTwo = dataTwoFloat.toString().length;
    }

    maxLength = Math.max(lengthOne, lengthTwo);
    for (let i = 0; i < maxLength - lengthOne; i++) {
      dataOneFloat += "0";
    }
    for (let i = 0; i < maxLength - lengthTwo; i++) {
      dataTwoFloat += "0";
    }

    let one = dataOneInt + "" + dataOneFloat;
    let two = dataTwoInt + "" + dataTwoFloat;

    return (Number(one) + Number(two)) / Math.pow(10, maxLength);
  }
});
