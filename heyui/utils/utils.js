import Utils from 'hey-utils';
var rclass = /[\t\r\n\f]/g;

function getClass(elem) {
  return elem.getAttribute && elem.getAttribute("class") || "";
}
var rnotwhite = (/\S+/g);
export default Utils.extend({}, Utils, {
  addClass: function(elem, value) {
    var classes, cur, curValue, clazz, j, finalValue,
      i = 0;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);
      cur = elem.nodeType === 1 &&
        (" " + curValue + " ").replace(rclass, " ");

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {
          if (cur.indexOf(" " + clazz + " ") < 0) {
            cur += clazz + " ";
          }
        }

        // Only assign if different to avoid unneeded rendering.
        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }
  },

  removeClass: function(elem, value) {
    var classes, elem, cur, curValue, clazz, j, finalValue;

    if (typeof value === "string" && value) {
      classes = value.match(rnotwhite) || [];

      curValue = getClass(elem);

      // This expression is here for better compressibility (see addClass)
      cur = elem.nodeType === 1 &&
        (" " + curValue + " ").replace(rclass, " ");

      if (cur) {
        j = 0;
        while ((clazz = classes[j++])) {

          // Remove *all* instances
          while (cur.indexOf(" " + clazz + " ") > -1) {
            cur = cur.replace(" " + clazz + " ", " ");
          }
        }

        // Only assign if different to avoid unneeded rendering.
        finalValue = cur.trim();
        if (curValue !== finalValue) {
          elem.setAttribute("class", finalValue);
        }
      }
    }

    return this;
  },

  hasClass: function(elem, selector) {
    var className;

    className = " " + selector + " ";
    if (elem.nodeType === 1 &&
      (" " + getClass(elem) + " ").replace(rclass, " ")
      .indexOf(className) > -1
    ) {
      return true;
    }

    return false;
  }
});
