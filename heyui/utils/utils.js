import Utils from 'hey-utils';

const rclass = /[\t\r\n\f]/g;
const rnotwhite = (/\S+/g);

function getClass(elem) {
  return elem.getAttribute && elem.getAttribute("class") || "";
}
export default Utils.extend({}, Utils, {
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
  }
});
