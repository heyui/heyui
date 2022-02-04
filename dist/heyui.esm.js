var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
import { openBlock, createElementBlock, createElementVNode, normalizeClass, normalizeStyle, renderSlot, toDisplayString, Fragment, renderList, createCommentVNode, resolveComponent, withModifiers, createVNode, createBlock, createTextVNode, withDirectives, vShow, withKeys, vModelText, withCtx, mergeProps, nextTick, normalizeProps, guardReactiveProps, Teleport, Transition, h, createApp, resolveDirective } from "vue";
var _export_sfc = (sfc, props) => {
  const target = sfc.__vccOpts || sfc;
  for (const [key, val] of props) {
    target[key] = val;
  }
  return target;
};
const prefix$v = "h-affix";
const _sfc_main$14 = {
  name: "HAffix",
  emits: ["change"],
  props: {
    offsetTop: Number,
    offsetBottom: Number,
    container: Function,
    fixedOffsetTop: Number,
    fixedOffsetBottom: Number,
    disabled: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isFixed: false,
      fixPosition: "top",
      containerDom: null,
      isAbsolute: !!this.container && !this.disabled,
      y: 0
    };
  },
  computed: {
    cFixedOffsetTop() {
      return this.fixedOffsetTop || this.offsetTop;
    },
    cFixedOffsetBottom() {
      return this.fixedOffsetBottom || this.offsetBottom;
    },
    affixCls() {
      return {
        [prefix$v]: this.isFixed,
        [`${prefix$v}-absolute`]: this.isAbsolute
      };
    },
    affixStyle() {
      let param = {};
      if (this.isFixed) {
        if (this.fixPosition == "top") {
          param.top = `${this.cFixedOffsetTop}px`;
        } else {
          param.bottom = `${this.cFixedOffsetBottom}px`;
        }
      }
      if (this.isAbsolute) {
        if (this.fixPosition == "top") {
          param.top = `${this.offsetTop}px`;
        } else {
          param.bottom = `${this.offsetBottom}px`;
        }
      }
      return param;
    }
  },
  watch: {
    offsetTop() {
      this.refresh();
    },
    offsetBottom() {
      this.refresh();
    },
    fixedOffsetTop() {
      this.refresh();
    },
    fixedOffsetBottom() {
      this.refresh();
    },
    disabled() {
      if (this.disabled) {
        this.isFixed = false;
        this.isAbsolute = false;
      } else {
        this.refresh();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.container) {
        this.containerDom = this.container.call();
      }
      window.addEventListener("scroll", this.trigger, true);
      window.addEventListener("resize", this.trigger);
      this.refresh();
    });
  },
  beforeUnmount() {
    window.removeEventListener("scroll", this.trigger, true);
    window.removeEventListener("resize", this.trigger);
  },
  methods: {
    refresh() {
      let evObj = document.createEvent("HTMLEvents");
      evObj.initEvent("scroll", true, true);
      document.body.dispatchEvent(evObj);
    },
    trigger(event) {
      if (this.disabled)
        return;
      let el = this.$el.firstChild;
      if (event.target == el)
        return false;
      let original = this.isFixed;
      if (this.containerDom) {
        let position = el.getBoundingClientRect();
        let containerPosition = this.containerDom.getBoundingClientRect();
        this.y = containerPosition.top;
        if (containerPosition.top <= this.cFixedOffsetTop - this.offsetTop && containerPosition.bottom >= position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = "top";
        } else {
          if (containerPosition.top > this.cFixedOffsetTop - this.offsetTop || containerPosition.height < position.height) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = "top";
          } else if (containerPosition.bottom < position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = "bottom";
          }
        }
        if (original != this.isFixed) {
          this.$emit("change", this.isFixed);
        }
      } else {
        if (!this.isFixed) {
          let position = el.getBoundingClientRect();
          if (this.offsetTop !== void 0) {
            if (position.top < this.offsetTop) {
              this.isFixed = true;
              this.fixPosition = "top";
            }
          }
          if (!this.isFixed && this.offsetBottom != void 0) {
            if (window.innerHeight < position.top + el.clientHeight + this.offsetBottom) {
              this.isFixed = true;
              this.fixPosition = "bottom";
            }
          }
        } else if (el.parentNode) {
          let position = el.parentNode.getBoundingClientRect();
          if (this.offsetTop !== void 0) {
            if (this.fixPosition == "top" && position.top > this.offsetTop) {
              this.isFixed = false;
            }
          }
          if (this.isFixed && this.offsetBottom != void 0) {
            if (this.fixPosition == "bottom" && window.innerHeight > position.top + el.clientHeight + this.offsetBottom) {
              this.isFixed = false;
            }
          }
        }
        if (original != this.isFixed) {
          this.$emit("change", this.isFixed);
        }
      }
    }
  }
};
function _sfc_render$14(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", null, [
    createElementVNode("div", {
      class: normalizeClass($options.affixCls),
      style: normalizeStyle($options.affixStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 6)
  ]);
}
var Affix = /* @__PURE__ */ _export_sfc(_sfc_main$14, [["render", _sfc_render$14]]);
function getDefaultExportFromCjs(x) {
  return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, "default") ? x["default"] : x;
}
var utils$2 = { exports: {} };
(function(module, exports) {
  !function(t, e) {
    module.exports = e();
  }(window, function() {
    return function(t) {
      var e = {};
      function n(r) {
        if (e[r])
          return e[r].exports;
        var o = e[r] = { i: r, l: false, exports: {} };
        return t[r].call(o.exports, o, o.exports, n), o.l = true, o.exports;
      }
      return n.m = t, n.c = e, n.d = function(t2, e2, r) {
        n.o(t2, e2) || Object.defineProperty(t2, e2, { enumerable: true, get: r });
      }, n.r = function(t2) {
        typeof Symbol != "undefined" && Symbol.toStringTag && Object.defineProperty(t2, Symbol.toStringTag, { value: "Module" }), Object.defineProperty(t2, "__esModule", { value: true });
      }, n.t = function(t2, e2) {
        if (1 & e2 && (t2 = n(t2)), 8 & e2)
          return t2;
        if (4 & e2 && typeof t2 == "object" && t2 && t2.__esModule)
          return t2;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", { enumerable: true, value: t2 }), 2 & e2 && typeof t2 != "string")
          for (var o in t2)
            n.d(r, o, function(e3) {
              return t2[e3];
            }.bind(null, o));
        return r;
      }, n.n = function(t2) {
        var e2 = t2 && t2.__esModule ? function() {
          return t2.default;
        } : function() {
          return t2;
        };
        return n.d(e2, "a", e2), e2;
      }, n.o = function(t2, e2) {
        return Object.prototype.hasOwnProperty.call(t2, e2);
      }, n.p = "", n(n.s = 0);
    }([function(t, e, n) {
      t.exports = n(1);
    }, function(t, e, n) {
      var r = n(2);
      Object.defineProperty(e, "__esModule", { value: true }), e.default = void 0;
      var o = r(n(3)), i = { isObject: function(t2) {
        return Object.prototype.toString.call(t2) === "[object Object]";
      }, isArray: function(t2) {
        return t2 instanceof Array || Object.prototype.toString.call(t2) === "[object Array]";
      }, isDate: function(t2) {
        return t2 instanceof Date || Object.prototype.toString.call(t2) === "[object Date]";
      }, isNumber: function(t2) {
        return t2 instanceof Number || Object.prototype.toString.call(t2) === "[object Number]";
      }, isString: function(t2) {
        return t2 instanceof String || Object.prototype.toString.call(t2) === "[object String]";
      }, isBoolean: function(t2) {
        return typeof t2 == "boolean";
      }, isFunction: function(t2) {
        return typeof t2 == "function";
      }, isNull: function(t2) {
        return t2 == null;
      }, isPlainObject: function(t2) {
        if (t2 && Object.prototype.toString.call(t2) === "[object Object]" && t2.constructor === Object && !hasOwnProperty.call(t2, "constructor")) {
          var e2;
          for (e2 in t2)
            ;
          return e2 === void 0 || hasOwnProperty.call(t2, e2);
        }
        return false;
      }, extend: function() {
        var t2, e2, n2, r2, i2, c2, u = arguments[0] || {}, a = 1, l = arguments.length, s = false;
        for (typeof u == "boolean" && (s = u, u = arguments[1] || {}, a = 2), (0, o.default)(u) === "object" || this.isFunction(u) || (u = {}), l === a && (u = this, --a); a < l; a++)
          if ((t2 = arguments[a]) != null)
            for (e2 in t2)
              (n2 = u[e2]) !== (r2 = t2[e2]) && (s && r2 && (this.isPlainObject(r2) || (i2 = this.isArray(r2))) ? (i2 ? (i2 = false, c2 = n2 && this.isArray(n2) ? n2 : []) : c2 = n2 && this.isPlainObject(n2) ? n2 : {}, u[e2] = this.extend(s, c2, r2)) : r2 !== void 0 && (u[e2] = r2));
        return u;
      }, freeze: function(t2) {
        var e2 = this, n2 = this;
        return Object.freeze(t2), Object.keys(t2).forEach(function(r2, o2) {
          n2.isObject(t2[r2]) && e2.freeze(t2[r2]);
        }), t2;
      }, copy: function(t2) {
        var e2 = null;
        if (this.isObject(t2))
          for (var n2 in e2 = {}, t2)
            e2[n2] = this.copy(t2[n2]);
        else if (this.isArray(t2)) {
          e2 = [];
          var r2 = true, o2 = false, i2 = void 0;
          try {
            for (var c2, u = t2[Symbol.iterator](); !(r2 = (c2 = u.next()).done); r2 = true) {
              var a = c2.value;
              e2.push(this.copy(a));
            }
          } catch (t3) {
            o2 = true, i2 = t3;
          } finally {
            try {
              r2 || u.return == null || u.return();
            } finally {
              if (o2)
                throw i2;
            }
          }
        } else
          e2 = t2;
        return e2;
      }, getKeyValue: function(t2, e2) {
        if (!this.isObject(t2))
          return null;
        var n2 = null;
        if (this.isArray(e2) ? n2 = e2 : this.isString(e2) && (n2 = e2.split(".")), n2 == null || n2.length == 0)
          return null;
        var r2 = null, o2 = n2.shift(), i2 = o2.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));
        if (i2) {
          o2 = i2[1];
          var c2 = i2[2];
          r2 = t2[o2], this.isArray(r2) && r2.length > c2 && (r2 = r2[c2]);
        } else
          r2 = t2[o2];
        return n2.length > 0 ? this.getKeyValue(r2, n2) : r2;
      }, setKeyValue: function(t2, e2, n2, r2) {
        if (!this.isObject(t2))
          return false;
        var o2 = null;
        if (this.isArray(e2) ? o2 = e2 : this.isString(e2) && (o2 = e2.split("."), r2 = t2), o2 == null || o2.length == 0)
          return false;
        var i2 = null, c2 = 0, u = o2.shift(), a = u.match(new RegExp("^(\\w+)\\[(\\d+)\\]$"));
        if (a) {
          if (u = a[1], c2 = a[2], i2 = t2[u], this.isArray(i2) && i2.length > c2) {
            if (o2.length > 0)
              return this.setKeyValue(i2[c2], o2, n2, r2);
            i2[c2] = n2;
          }
        } else {
          if (o2.length > 0)
            return this.setKeyValue(t2[u], o2, n2, r2);
          t2[u] = n2;
        }
        return r2;
      }, toArray: function(t2, e2, n2) {
        var r2 = "";
        if (!this.isObject(t2))
          return [];
        this.isString(n2) && (r2 = n2);
        var o2 = [];
        for (var i2 in t2) {
          var c2 = t2[i2], u = {};
          this.isObject(c2) ? u = c2 : u[r2] = c2, e2 && (u[e2] = i2), o2.push(u);
        }
        return o2;
      }, toObject: function(t2) {
        for (var e2 = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "id", n2 = arguments.length > 2 && arguments[2] !== void 0 && arguments[2], r2 = {}, o2 = 0; o2 < t2.length; o2++) {
          var i2 = t2[o2];
          this.isObject(i2) ? e2 == "count" ? r2[o2] = i2 : (r2[i2[e2]] = i2, n2 && (r2[i2[e2]].count = o2)) : r2[i2] = i2;
        }
        return r2;
      }, saveLocal: function(t2, e2) {
        return !!(window.localStorage && JSON && t2) && ((0, o.default)(e2) == "object" && (e2 = JSON.stringify(e2)), window.localStorage.setItem(t2, e2), true);
      }, getLocal: function(t2, e2) {
        if (window.localStorage && JSON && t2) {
          var n2 = window.localStorage.getItem(t2);
          if (!e2 || e2 != "json" || this.isNull(n2))
            return n2;
          try {
            return JSON.parse(n2);
          } catch (t3) {
            return console.error("\u53D6\u6570\u8F6C\u6362json\u9519\u8BEF".concat(t3)), "";
          }
        }
        return null;
      }, getLocal2Json: function(t2) {
        return this.getLocal(t2, "json");
      }, removeLocal: function(t2) {
        return window.localStorage && JSON && t2 && window.localStorage.removeItem(t2), null;
      }, saveCookie: function(t2, e2, n2, r2, i2) {
        var c2 = !!navigator.cookieEnabled;
        if (t2 && c2) {
          var u;
          r2 = r2 || "/", (0, o.default)(e2) == "object" && (e2 = JSON.stringify(e2)), i2 ? (u = new Date()).setTime(u.getTime() + 1e3 * i2) : u = new Date("9998-01-01");
          var a = "".concat(t2, "=").concat(escape(e2)).concat(i2 ? ";expires=".concat(u.toGMTString()) : "", ";path=").concat(r2, ";");
          return n2 && (a += "domain=".concat(n2, ";")), document.cookie = a, true;
        }
        return false;
      }, getCookie: function(t2) {
        var e2 = !!navigator.cookieEnabled;
        if (t2 && e2) {
          var n2 = document.cookie.match(new RegExp("(^| )".concat(t2, "=([^;]*)(;|$)")));
          if (n2 !== null)
            return unescape(n2[2]);
        }
        return null;
      }, clearCookie: function(t2, e2) {
        var n2 = document.cookie.match(/[^ =;]+(?=\=)/g);
        if (e2 = e2 || "/", n2)
          for (var r2 = n2.length; r2--; ) {
            var o2 = "".concat(n2[r2], "=0;expires=").concat(new Date(0).toUTCString(), ";path=").concat(e2, ";");
            t2 && (o2 += "domain=".concat(t2, ";")), document.cookie = o2;
          }
      }, removeCookie: function(t2, e2, n2) {
        var r2 = !!navigator.cookieEnabled;
        if (t2 && r2) {
          n2 = n2 || "/";
          var o2 = "".concat(t2, "=0;expires=").concat(new Date(0).toUTCString(), ";path=").concat(n2, ";");
          return e2 && (o2 += "domain=".concat(e2, ";")), document.cookie = o2, true;
        }
        return false;
      }, dictMapping: function(t2) {
        var e2 = this, n2 = t2.value, r2 = t2.dict, o2 = t2.connector, i2 = t2.keyField, c2 = i2 === void 0 ? "key" : i2, u = t2.titleField, a = u === void 0 ? "value" : u;
        return !r2 || this.isNull(n2) ? "" : (o2 && (n2 = n2.split(o2)), !this.isNull(n2) && n2 !== "" && r2 && (this.isArray(n2) || (n2 = [n2])), n2.length <= 0 ? "" : (this.isArray(r2) && (r2 = this.toObject(r2, c2)), n2.map(function(t3) {
          if (e2.isObject(t3))
            return t3[a];
          var n3 = r2[t3];
          return e2.isObject(n3) ? n3[a] : n3;
        }).filter(function(t3) {
          return t3 && t3 !== "";
        }).join(", ")));
      }, uuid: function() {
        var t2 = function() {
          return Math.floor(65536 * (1 + Math.random())).toString(16).substring(1);
        };
        return t2() + t2() + "-" + t2() + "-" + t2() + "-" + t2() + "-" + t2() + t2() + t2();
      }, padLeft: function(t2, e2) {
        var n2 = "00000" + t2;
        return n2.substr(n2.length - e2);
      }, toggleValue: function(t2, e2) {
        if (!this.isArray(t2))
          return [e2];
        var n2 = t2.filter(function(t3) {
          return t3 == e2;
        });
        n2.length > 0 ? t2.splice(t2.indexOf(n2[0]), 1) : t2.push(e2);
      }, toSimpleArray: function(t2, e2) {
        var n2 = [];
        if (this.isObject(t2))
          for (var r2 = 0, o2 = Object.keys(t2); r2 < o2.length; r2++) {
            var i2 = o2[r2];
            n2.push(t2[i2][e2]);
          }
        if (this.isArray(t2)) {
          var c2 = true, u = false, a = void 0;
          try {
            for (var l, s = t2[Symbol.iterator](); !(c2 = (l = s.next()).done); c2 = true) {
              var f = l.value;
              n2.push(f[e2]);
            }
          } catch (t3) {
            u = true, a = t3;
          } finally {
            try {
              c2 || s.return == null || s.return();
            } finally {
              if (u)
                throw a;
            }
          }
        }
        return n2;
      }, getURLParam: function(t2, e2) {
        return decodeURIComponent((new RegExp("[?|&]".concat(t2, "=") + "([^&;]+?)(&|#|;|$)").exec(e2 || location.search) || [true, ""])[1].replace(/\+/g, "%20")) || null;
      }, getAuthor: function() {
        var t2 = this.getURLParam("author", window.location.search) || this.getLocal("window_author");
        return t2 && this.saveLocal("window_author", t2), t2;
      }, add: function(t2, e2) {
        var n2 = t2.toString(), r2 = e2.toString(), o2 = n2.split("."), i2 = r2.split("."), c2 = o2.length == 2 ? o2[1] : "", u = i2.length == 2 ? i2[1] : "", a = Math.max(c2.length, u.length), l = Math.pow(10, a);
        return Number(((n2 * l + r2 * l) / l).toFixed(a));
      }, sub: function(t2, e2) {
        return this.add(t2, -e2);
      }, mul: function(t2, e2) {
        var n2 = 0, r2 = t2.toString(), o2 = e2.toString();
        try {
          n2 += r2.split(".")[1].length;
        } catch (t3) {
        }
        try {
          n2 += o2.split(".")[1].length;
        } catch (t3) {
        }
        return Number(r2.replace(".", "")) * Number(o2.replace(".", "")) / Math.pow(10, n2);
      }, div: function(t2, e2) {
        var n2 = 0, r2 = 0;
        try {
          n2 = t2.toString().split(".")[1].length;
        } catch (t3) {
        }
        try {
          r2 = e2.toString().split(".")[1].length;
        } catch (t3) {
        }
        var o2 = Number(t2.toString().replace(".", "")), i2 = Number(e2.toString().replace(".", ""));
        return this.mul(o2 / i2, Math.pow(10, r2 - n2));
      } };
      i.valueForKeypath = i.getKeyValue, i.setValueForKeypath = i.setKeyValue;
      var c = i;
      e.default = c;
    }, function(t, e) {
      t.exports = function(t2) {
        return t2 && t2.__esModule ? t2 : { default: t2 };
      };
    }, function(t, e) {
      function n(t2) {
        return (n = typeof Symbol == "function" && typeof Symbol.iterator == "symbol" ? function(t3) {
          return typeof t3;
        } : function(t3) {
          return t3 && typeof Symbol == "function" && t3.constructor === Symbol && t3 !== Symbol.prototype ? "symbol" : typeof t3;
        })(t2);
      }
      function r(e2) {
        return typeof Symbol == "function" && n(Symbol.iterator) === "symbol" ? t.exports = r = function(t2) {
          return n(t2);
        } : t.exports = r = function(t2) {
          return t2 && typeof Symbol == "function" && t2.constructor === Symbol && t2 !== Symbol.prototype ? "symbol" : n(t2);
        }, r(e2);
      }
      t.exports = r;
    }]).default;
  });
})(utils$2);
var utils$1 = /* @__PURE__ */ getDefaultExportFromCjs(utils$2.exports);
const rclass = /[\t\r\n\f]/g;
const rnotwhite = /\S+/g;
function getClass(elem) {
  return elem.getAttribute && elem.getAttribute("class") || "";
}
var utils = utils$1.extend({}, utils$1, {
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
      cur = elem.nodeType === 1 && ` ${curValue} `.replace(rclass, " ");
      if (cur) {
        j = 0;
        while (clazz = classes[j++]) {
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
      cur = elem.nodeType === 1 && ` ${curValue} `.replace(rclass, " ");
      if (cur) {
        j = 0;
        while (clazz = classes[j++]) {
          while (cur.indexOf(` ${clazz} `) > -1) {
            cur = cur.replace(` ${clazz} `, " ");
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
    if (elem.nodeType === 1 && ` ${getClass(elem)} `.replace(rclass, " ").indexOf(className) > -1) {
      return true;
    }
    return false;
  },
  initParam(param, paramFrom, array) {
    if (this.isArray(array) && this.isObject(param) && this.isObject(param)) {
      for (let a of array) {
        if (paramFrom[a])
          param[a] = paramFrom[a];
      }
    }
    return param;
  },
  toggleValue(list, value) {
    if (!this.isArray(list))
      return [value];
    let copyList = this.extend([], list);
    let filters2 = list.filter((item) => item == value);
    if (filters2.length > 0) {
      copyList.splice(list.indexOf(filters2[0]), 1);
    } else {
      copyList.push(value);
    }
    return copyList;
  },
  toggleValueByKey(list, key, value) {
    if (!this.isArray(list))
      return;
    let index2 = list.findIndex((item) => item[key] === value.key);
    if (index2 != -1) {
      list.splice(index2, 1);
    } else {
      list.push(value);
    }
  },
  getArray(array, keyName = "id") {
    const list = [];
    for (let a of array) {
      list.push(a[keyName]);
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
  generateTree(data, param) {
    if (!this.isArray(data)) {
      console.error("[HeyUI Error] GenerateTree Error\uFF1AData must be array\u3002");
      return null;
    }
    let result = [];
    let dataObj = this.toObject(data, param.keyName);
    for (let d of data) {
      let parentCode = d[param.parentName];
      let hasParent = false;
      if (!utils$1.isNull(parentCode)) {
        let parentCodes = [parentCode];
        if (utils$1.isArray(parentCode)) {
          parentCodes = parentCode;
        }
        for (let code of parentCodes) {
          if (!utils$1.isNull(dataObj[code])) {
            hasParent = true;
            let parent = dataObj[code];
            if (!utils$1.isArray(parent[param.childrenName])) {
              parent[param.childrenName] = [];
            }
            parent[param.childrenName].push(d);
          }
        }
      }
      if (utils$1.isNull(parentCode) || !hasParent) {
        result.push(d);
      }
    }
    return result;
  },
  isBlank(value) {
    return this.isNull(value) || value === "";
  },
  getValue(item, param) {
    let title = "";
    let key = null;
    if (utils$1.isObject(item)) {
      title = item[param.titleName];
      key = item[param.keyName];
    } else {
      title = item;
      key = item;
    }
    let result = {
      key,
      title,
      value: item
    };
    return result;
  }
});
const config = {
  dict: {
    keyName: "key",
    titleName: "title",
    dicts: {}
  },
  tree: {
    configs: {},
    default: {
      titleName: "title",
      keyName: "key",
      parentName: "parent",
      childrenName: "children"
    }
  },
  category: {
    configs: {},
    default: {
      titleName: "title",
      keyName: "key",
      parentName: "parent",
      childrenName: "children"
    }
  },
  categoryPicker: {
    configs: {},
    default: {
      titleName: "title",
      keyName: "key",
      parentName: "parent",
      childrenName: "children"
    }
  },
  cascader: {
    configs: {},
    default: {
      titleName: "title",
      keyName: "key",
      parentName: "parent",
      childrenName: "children"
    }
  },
  menu: {
    titleName: "title",
    keyName: "key",
    childrenName: "children"
  },
  autocomplete: {
    configs: {},
    default: {
      maxLength: 20,
      delay: 100,
      loadData: null,
      minWord: 0,
      titleName: "title",
      keyName: "key",
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
    layout: "total,pager,jumper,sizes",
    onChangeSize() {
    },
    init() {
    },
    onChange() {
    }
  },
  avatar: {
    handleSrc(src) {
      return src;
    }
  },
  datepicker: {
    startWeek: 1,
    format: {
      date: "YYYY-MM-DD",
      month: "YYYY-MM",
      year: "YYYY",
      time: "HH:mm",
      datetime: "YYYY-MM-DD HH:mm",
      datehour: "YYYY-MM-DD HH:mm",
      datetimesecond: "YYYY-MM-DD HH:mm:ss"
    },
    shortcuts: {
      today: {
        title: "\u4ECA\u5929",
        value() {
          return new Date();
        }
      },
      yesterday: {
        title: "\u6628\u5929",
        value() {
          const date = new Date();
          date.setTime(date.getTime() - 3600 * 1e3 * 24);
          return date;
        }
      }
    },
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: "start",
        end: "end"
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
    if (!dict || utils.isNull(value) || value === "")
      return "";
    if (utils.isString(value) && connector) {
      value = value.split(connector);
    }
    if (!utils.isArray(value)) {
      value = [value];
    }
    const keyField = this.getOption("dict", "keyName");
    const titleField = this.getOption("dict", "titleName");
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
    return result.filter((ele) => ele && ele !== "").join(connector || ", ");
  },
  initOptions(datas) {
    let key = this.getOption("dict.keyName");
    let title = this.getOption("dict.titleName");
    let options2 = [];
    if (utils.isObject(datas)) {
      options2 = utils.toArray(datas, key, title);
    } else if (utils.isArray(datas)) {
      if (datas.length == 0) {
        options2 = [];
      } else {
        let data0 = datas[0];
        if (utils.isObject(data0)) {
          options2 = utils.copy(datas);
        } else {
          options2 = datas.map((item) => {
            return {
              [`${key}`]: item,
              [`${title}`]: item
            };
          });
        }
      }
    }
    return options2;
  }
};
const _sfc_main$13 = {
  name: "HAvatar",
  emits: ["avatarClick"],
  props: {
    shape: {
      type: String,
      default: "circle"
    },
    src: String,
    width: {
      type: Number,
      default: 50
    },
    distance: {
      type: Number,
      default: 15
    },
    imageTop: Number,
    type: String,
    noInfo: {
      type: Boolean,
      default: false
    },
    fit: String
  },
  emits: ["avatarClick"],
  computed: {
    imageStyle() {
      if (this.src) {
        return {
          "background-image": `url(${func.getOption("avatar").handleSrc.call(this, this.src)})`
        };
      }
      return {};
    },
    avatarClass() {
      return {
        [`h-avatar-type-${this.type}`]: !!this.type,
        [`h-avatar-shape-${this.shape}`]: !!this.shape,
        [`h-avatar-no-info`]: this.noInfo,
        [`h-avatar-fit-${this.fit}`]: !!this.fit
      };
    },
    avatarStyle() {
      let param = {};
      if (this.noInfo) {
        param = {
          width: `${this.width}px`,
          height: `${this.width}px`
        };
      }
      return param;
    },
    avatarImageClass() {
      if (!this.imageTop) {
        return {
          "h-avatar-middle": true
        };
      }
      return {};
    },
    avatarImageStyle() {
      let s = {
        width: `${this.width}px`,
        height: `${this.width}px`
      };
      if (this.imageTop) {
        s.top = `${this.imageTop}px`;
      }
      return s;
    },
    infoStyle() {
      return {
        "padding-left": `${this.width + this.distance}px`,
        "min-height": `${this.width}px`
      };
    }
  },
  methods: {
    click(event) {
      this.$emit("avatarClick", event);
    }
  }
};
function _sfc_render$13(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-avatar", $options.avatarClass]),
    style: normalizeStyle($options.avatarStyle)
  }, [
    createElementVNode("div", {
      style: normalizeStyle($options.avatarImageStyle),
      class: normalizeClass([$options.avatarImageClass, "h-avatar-image-container"]),
      onClick: _cache[0] || (_cache[0] = (...args) => $options.click && $options.click(...args))
    }, [
      createElementVNode("div", {
        class: "h-avatar-image",
        style: normalizeStyle($options.imageStyle)
      }, null, 4)
    ], 6),
    createElementVNode("div", {
      class: "h-avatar-info",
      style: normalizeStyle($options.infoStyle)
    }, [
      renderSlot(_ctx.$slots, "default")
    ], 4)
  ], 6);
}
var Avatar = /* @__PURE__ */ _export_sfc(_sfc_main$13, [["render", _sfc_render$13]]);
const prefix$u = "h-backtop";
const _sfc_main$12 = {
  name: "HBackTop",
  emits: ["backTop"],
  props: {
    target: {
      type: Function,
      default: () => window.document
    },
    bottom: {
      type: Number,
      default: 50
    },
    right: {
      type: Number,
      default: 50
    },
    className: {
      type: String,
      default: "h-backtop-default"
    }
  },
  data() {
    return {
      show: false,
      timeout: null
    };
  },
  computed: {
    backtopCls() {
      return {
        [`${prefix$u}`]: true,
        [`${prefix$u}-show`]: this.show,
        [this.className]: !!this.className
      };
    },
    backtopStyle() {
      return {
        bottom: `${this.bottom}px`,
        right: `${this.right}px`
      };
    }
  },
  watch: {
    show() {
      this.$el.style.display = "block";
    }
  },
  mounted() {
    this.$nextTick(() => {
      let target = this.target();
      if (target) {
        target.addEventListener("scroll", () => {
          if (target.scrollTop > 300) {
            this.show = true;
          } else {
            this.show = false;
          }
        });
      }
      this.$el.addEventListener("webkitAnimationEnd", () => {
        this.$el.style.display = this.show ? "block" : "none";
      });
    });
  },
  methods: {
    backtop() {
      if (this.timeout)
        return;
      let target = this.target();
      if (target) {
        this.scrollTop(target, (target.scrollHeight - target.offsetHeight) / 10);
      }
      this.$emit("backTop");
    },
    scrollTop(target, step) {
      this.timeout = setTimeout(() => {
        if (target.scrollTop > step) {
          target.scrollTop -= step;
          this.scrollTop(target, step * 0.9);
        } else {
          target.scrollTop = 0;
          this.timeout = null;
        }
      }, 5);
    }
  }
};
const _hoisted_1$O = {
  key: 0,
  class: "h-icon-top"
};
function _sfc_render$12(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.backtopCls),
    style: normalizeStyle($options.backtopStyle)
  }, [
    createElementVNode("div", {
      class: "h-backtop-inner",
      onClick: _cache[0] || (_cache[0] = (...args) => $options.backtop && $options.backtop(...args))
    }, [
      !_ctx.$slots.default ? (openBlock(), createElementBlock("i", _hoisted_1$O)) : renderSlot(_ctx.$slots, "default", { key: 1 })
    ])
  ], 6);
}
var BackTop = /* @__PURE__ */ _export_sfc(_sfc_main$12, [["render", _sfc_render$12]]);
const prefix$t = "h-badge";
const Props$4 = {
  position: ["right", "left"]
};
const _sfc_main$11 = {
  name: "HBadge",
  props: {
    count: {
      type: Number,
      default: 0
    },
    maxCount: {
      type: Number,
      default: 100
    },
    showZero: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return Props$4.position.indexOf(value) != -1;
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    showCount() {
      return this.dot ? "" : this.count > this.maxCount ? `${this.maxCount}+` : this.count;
    },
    badgeCls() {
      return {
        [`${prefix$t}`]: true,
        [`${prefix$t}-position-right`]: this.position == "right"
      };
    },
    badgeCountCls() {
      return {
        [`${prefix$t}-count`]: true,
        [`${prefix$t}-count-show`]: this.count > 0 || this.showZero,
        [`${prefix$t}-count-dot`]: this.dot
      };
    }
  },
  methods: {}
};
function _sfc_render$11(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.badgeCls)
  }, [
    createElementVNode("sup", {
      class: normalizeClass($options.badgeCountCls)
    }, toDisplayString($options.showCount), 3),
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Badge = /* @__PURE__ */ _export_sfc(_sfc_main$11, [["render", _sfc_render$11]]);
const _sfc_main$10 = {
  name: "HBreadcrumb",
  emits: ["clickItem"],
  props: {
    datas: {
      Array,
      default: () => ({})
    },
    separator: {
      type: String,
      default: "/"
    },
    selfControl: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {
  },
  methods: {
    trigger(data) {
      if (!this.selfControl && data.route && this.$router) {
        this.$router.push(data.route);
      }
      this.$emit("clickItem", data);
    }
  }
};
const _hoisted_1$N = { class: "h-breadcrumb" };
const _hoisted_2$C = {
  key: 0,
  class: "h-breadcrumb-item-separator"
};
const _hoisted_3$w = ["onClick"];
const _hoisted_4$p = { class: "h-breadcrumb-item-word" };
function _sfc_render$10(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$N, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($props.datas, (data, index2) => {
      return openBlock(), createElementBlock("span", {
        key: data.title,
        class: "h-breadcrumb-item"
      }, [
        index2 > 0 ? (openBlock(), createElementBlock("span", _hoisted_2$C, toDisplayString($props.separator), 1)) : createCommentVNode("", true),
        createElementVNode("span", {
          class: normalizeClass(["h-breadcrumb-item-title", { "h-breadcrumb-item-link": data.route, "h-breadcrumb-item-current": index2 == $props.datas.length - 1 }]),
          onClick: ($event) => $options.trigger(data, index2)
        }, [
          data.icon ? (openBlock(), createElementBlock("i", {
            key: 0,
            class: normalizeClass([data.icon, "h-breadcrumb-item-icon"])
          }, null, 2)) : createCommentVNode("", true),
          createElementVNode("span", _hoisted_4$p, toDisplayString(data.title), 1)
        ], 10, _hoisted_3$w)
      ]);
    }), 128))
  ]);
}
var Breadcrumb = /* @__PURE__ */ _export_sfc(_sfc_main$10, [["render", _sfc_render$10]]);
const lang$2 = {
  h: {
    locale: "zh-CN",
    common: {
      cancel: "\u53D6\u6D88",
      confirm: "\u786E\u5B9A",
      clear: "\u6E05\u9664",
      placeholder: "\u8BF7\u9009\u62E9",
      empty: "\u7A7A",
      any: "\u4E0D\u9650"
    },
    confirm: {
      title: "\u63D0\u793A"
    },
    checkbox: {
      limitSize: "\u60A8\u6700\u591A\u53EF\u4EE5\u9009\u62E9{limitSize}\u4E2A\u9009\u9879"
    },
    select: {
      nullOptionText: "\u8BF7\u9009\u62E9",
      emptyContent: "\u672A\u641C\u7D22\u5230\u76F8\u5173\u6570\u636E",
      placeholder: "\u8BF7\u9009\u62E9",
      searchPlaceHolder: "\u8BF7\u8F93\u5165\u7B5B\u9009\u6587\u672C",
      limitSize: "\u60A8\u6700\u591A\u53EF\u4EE5\u9009\u62E9{limitSize}\u4E2A\u9009\u9879"
    },
    category: {
      placeholder: "\u8BF7\u9009\u62E9"
    },
    cascader: {
      placeholder: "\u8BF7\u9009\u62E9"
    },
    categoryModal: {
      limitWords: "\u60A8\u6700\u591A\u53EF\u4EE5\u9009\u62E9{size}\u6761\u6570\u636E\u3002",
      emptyContent: "\u672A\u641C\u7D22\u5230\u76F8\u5173\u6570\u636E",
      total: "\u5168\u90E8"
    },
    categoryPicker: {
      limitWords: "\u60A8\u6700\u591A\u53EF\u4EE5\u9009\u62E9{size}\u6761\u6570\u636E\u3002",
      emptyContent: "\u672A\u641C\u7D22\u5230\u76F8\u5173\u6570\u636E",
      total: "\u5168\u90E8",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    autoComplate: {
      placeholder: "\u8BF7\u8F93\u5165",
      emptyContent: "\u672A\u641C\u7D22\u5230\u76F8\u5173\u6570\u636E"
    },
    validation: {
      base: {
        required: "\u4E0D\u80FD\u4E3A\u7A7A",
        maxLen: "\u6587\u5B57\u957F\u5EA6\u4E0D\u80FD\u8D85\u8FC7{value}\u4E2A\u5B57",
        minLen: "\u6587\u5B57\u957F\u5EA6\u4E0D\u80FD\u5C11\u4E8E{value}\u4E2A\u5B57",
        max: "\u4E0D\u80FD\u5927\u4E8E{value}",
        min: "\u4E0D\u80FD\u5C0F\u4E8E{value}"
      },
      type: {
        int: "\u4E0D\u662F\u6B63\u786E\u7684\u6574\u6570\u683C\u5F0F",
        number: "\u4E0D\u662F\u6B63\u786E\u7684\u6570\u5B57\u683C\u5F0F",
        email: "\u4E0D\u662F\u6B63\u786E\u7684\u90AE\u7BB1\u683C\u5F0F",
        url: "\u4E0D\u662F\u6B63\u786E\u7684\u7F51\u5740\u683C\u5F0F",
        tel: "\u4E0D\u662F\u6B63\u786E\u7684\u7535\u8BDD\u53F7\u7801\u683C\u5F0F",
        mobile: "\u4E0D\u662F\u6B63\u786E\u7684\u624B\u673A\u53F7\u7801\u683C\u5F0F",
        globalmobile: "\u4E0D\u662F\u6B63\u786E\u7684\u56FD\u9645\u53F7\u7801\u683C\u5F0F"
      }
    },
    date: {
      today: "\u4ECA\u5929",
      yesterday: "\u6628\u5929",
      year: "\u5E74",
      month: "\u6708",
      week: "\u5468",
      quarter: "\u5B63",
      day: "\u65E5",
      header: {
        year: "\u5E74",
        month: "\u6708",
        day: "\u65E5"
      },
      show: {
        week: "{year}\u5E74 \u7B2C{weeknum}\u5468 {daystart} \u81F3 {dayend}",
        weekInput: "{year}\u5E74 \u7B2C{week}\u5468",
        quarter: "{year}\u5E74 \u7B2C{quarter}\u5B63\u5EA6"
      },
      months: {
        january: "\u4E00\u6708",
        february: "\u4E8C\u6708",
        march: "\u4E09\u6708",
        april: "\u56DB\u6708",
        may: "\u4E94\u6708",
        june: "\u516D\u6708",
        july: "\u4E03\u6708",
        august: "\u516B\u6708",
        september: "\u4E5D\u6708",
        october: "\u5341\u6708",
        november: "\u5341\u4E00",
        december: "\u5341\u4E8C"
      },
      weeks: {
        monday: "\u4E00",
        tuesday: "\u4E8C",
        wednesday: "\u4E09",
        thursday: "\u56DB",
        friday: "\u4E94",
        saturday: "\u516D",
        sunday: "\u65E5"
      }
    },
    datepicker: {
      placeholder: "\u8BF7\u9009\u62E9\u65E5\u671F",
      startTime: "\u5F00\u59CB\u65F6\u95F4",
      endTime: "\u7ED3\u675F\u65F6\u95F4",
      customize: "\u81EA\u5B9A\u4E49",
      start: "\u5F00\u59CB",
      end: "\u7ED3\u675F"
    },
    wordlimit: {
      warn: "\u60A8\u6700\u591A\u53EF\u4EE5\u8F93\u5165{0}\u4E2A\u5B57"
    },
    wordcount: {
      warn: "\u60A8\u5DF2\u8D85\u51FA{0}\u4E2A\u5B57"
    },
    treepicker: {
      selectDesc: "\u60A8\u603B\u5171\u9009\u62E9{0}\u9879",
      placeholder: "\u8BF7\u9009\u62E9"
    },
    search: {
      placeholder: "\u8BF7\u8F93\u5165\u5173\u952E\u8BCD\u67E5\u8BE2",
      searchButtonText: "\u641C\u7D22"
    },
    taginput: {
      limitWords: "\u60A8\u8F93\u5165\u7684\u5DF2\u7ECF\u8D85\u8FC7\u9650\u5236"
    },
    table: {
      empty: "\u6682\u65E0\u6570\u636E"
    },
    uploader: {
      upload: "\u4E0A\u4F20",
      reUpload: "\u91CD\u65B0\u4E0A\u4F20",
      overLimit: "\u4E0A\u4F20\u6587\u4EF6\u6570\u91CF\u8D85\u51FA\u9650\u5236"
    },
    pagination: {
      incorrectFormat: "\u60A8\u8F93\u5165\u7684\u503C\u683C\u5F0F\u4E0D\u6B63\u786E",
      overSize: "\u60A8\u8F93\u5165\u7684\u503C\u8D85\u8FC7\u8303\u56F4",
      totalBefore: "\u603B",
      totalAfter: "\u6761",
      sizeOfPage: "{size}\u6761/\u9875"
    }
  }
};
const lang$1 = {
  h: {
    locale: "en-US",
    common: {
      cancel: "Cancel",
      confirm: "Confirm",
      clear: "Clear",
      nullOptionText: "please choose",
      empty: "empty",
      any: "any"
    },
    confirm: {
      title: "Confirm"
    },
    checkbox: {
      limitSize: "You can select up to {limitSize} data."
    },
    select: {
      nullOptionText: "please choose",
      placeholder: "select",
      emptyContent: "no results found",
      searchPlaceHolder: "search",
      limitSize: "You can select up to {limitSize} data."
    },
    category: {
      placeholder: "please choose"
    },
    cascader: {
      placeholder: "please choose"
    },
    categoryModal: {
      limitWords: "You can select up to {size} data.",
      emptyContent: "No results found",
      total: "total"
    },
    categoryPicker: {
      nullOptionText: "please choose",
      placeholder: "select",
      total: "total",
      limitSize: "You can select up to {0} data."
    },
    autoComplate: {
      placeholder: "Search Input",
      emptyContent: "No results found"
    },
    validation: {
      base: {
        required: " can not be empty",
        maxLen: " text length can't exceed {value} bits",
        minLen: " text length can't be less than {value} bits",
        max: " no more than {value}",
        min: " can't be less than {value}"
      },
      type: {
        int: " is not the correct integer format",
        number: " is not the correct digital format",
        email: " is not the correct mailbox format",
        url: " is not the correct URL format",
        tel: " is not the correct phone number format",
        mobile: " is not the correct mobile number format",
        globalmobile: " is not the correct international mobile number format"
      }
    },
    date: {
      today: "Today",
      yesterday: "Yesterday",
      year: "year",
      month: "month",
      week: "week",
      quarter: "quarter",
      day: "day",
      header: {
        year: "",
        month: "",
        day: ""
      },
      show: {
        week: "{year} {weeknum}th week {daystart} - {dayend}",
        weekInput: "{year} {week}th week",
        quarter: "{year} {quarter}th quarter"
      },
      months: {
        january: "Jan",
        february: "Feb",
        march: "Mar",
        april: "Apr",
        may: "May",
        june: "Jun",
        july: "Jul",
        august: "Aug",
        september: "Sep",
        october: "Oct",
        november: "Nov",
        december: "Dec"
      },
      weeks: {
        monday: "Mon",
        tuesday: "Tue",
        wednesday: "Wed",
        thursday: "Thu",
        friday: "Fri",
        saturday: "Sat",
        sunday: "Sun"
      }
    },
    datepicker: {
      placeholder: "select date",
      startTime: "start",
      endTime: "end",
      customize: "customize",
      start: "start",
      end: "end"
    },
    wordlimit: {
      warn: "You are limited to enter {0} words"
    },
    wordcount: {
      warn: "You have exceeded {0} words"
    },
    treepicker: {
      selectDesc: "You have selected {0} items",
      placeholder: "please select"
    },
    search: {
      placeholder: "search...",
      searchButtonText: "Search"
    },
    taginput: {
      limitWords: "You have exceeded the limit"
    },
    table: {
      empty: "No results found"
    },
    uploader: {
      upload: "Upload",
      reUpload: "ReUpload",
      overLimit: "The number of uploaded files exceeds the limit"
    },
    pagination: {
      incorrectFormat: "The format of the value you entered is incorrect",
      overSize: "The value you entered exceeds the range",
      totalBefore: "Total",
      totalAfter: "items",
      sizeOfPage: "{size} items/page"
    }
  }
};
const RE_NARGS = /(%|)\{([0-9a-zA-Z_]+)\}/g;
function Format() {
  function hasOwn(obj, key) {
    return Object.prototype.hasOwnProperty.call(obj, key);
  }
  function template(string, ...args) {
    if (args.length === 1 && typeof args[0] === "object") {
      args = args[0];
    }
    if (!args || !args.hasOwnProperty) {
      args = {};
    }
    if (string === void 0) {
      return "";
    }
    return string.replace(RE_NARGS, (match, prefix2, i, index2) => {
      let result;
      if (string[index2 - 1] === "{" && string[index2 + match.length] === "}") {
        return i;
      } else {
        result = hasOwn(args, i) ? args[i] : null;
        if (result === null || result === void 0) {
          return "";
        }
        return result;
      }
    });
  }
  return template;
}
const format = Format();
let lang = lang$2;
const langs = {
  zh: lang$2,
  en: lang$1
};
let nowLang = null;
let merged = {};
let vuei18n = null;
let i18nHandler = function() {
  if (Reflect.has(this, "$t"))
    return this.$t(...arguments);
  if (vuei18n && vuei18n.locale) {
    if (!merged[vuei18n.locale] || nowLang != vuei18n.locale) {
      merged[vuei18n.locale] = true;
      let localMessage = vuei18n.getLocaleMessage(vuei18n.locale) || {};
      let newLocalMessage = {};
      utils.extend(true, newLocalMessage, langs[vuei18n.locale], localMessage);
      lang = newLocalMessage;
      vuei18n.setLocaleMessage(vuei18n.locale, newLocalMessage);
      nowLang = vuei18n.locale;
    }
    return vuei18n.hlang(...arguments);
  }
};
const hlang$1 = function(path, options2) {
  let value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== void 0)
    return value;
  const array = path.split(".");
  let current = lang;
  for (let i = 0, j = array.length; i < j; i++) {
    const property = array[i];
    value = current[property];
    if (i === j - 1)
      return format(value, options2);
    if (!value)
      return "";
    current = value;
  }
  return "";
};
const use = function(l) {
  lang = l || lang;
};
const i18n = function(initI18n) {
  vuei18n = initI18n;
};
var locale = {
  use,
  hlang: hlang$1,
  i18n
};
var Locale = {
  methods: {
    hlang(...args) {
      return locale.hlang.apply(this, args);
    }
  }
};
const _sfc_main$$ = {
  name: "HCheckbox",
  mixins: [Locale],
  emits: ["input", "change", "update:modelValue"],
  props: {
    dict: String,
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Object, Number, String],
    checked: {
      type: Boolean
    },
    modelValue: [Array, Boolean, Object, Number, String],
    indeterminate: {
      type: Boolean,
      default: false
    },
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    },
    limit: Number,
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    checkList() {
      let modelValue = this.modelValue || [];
      if ((!utils.isNull(this.value) || !this.isSingle) && !utils.isArray(modelValue)) {
        console.warn(`[HeyUI WARNING] Checkbox Component: It's not allowed to use v-model with non-array value.`);
      }
      return utils.isArray(modelValue) ? modelValue : [];
    },
    isSingle() {
      return this.arr.length == 0;
    },
    arr() {
      if (!this.datas && !this.dict) {
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      return func.initOptions(datas, this);
    },
    isSingleChecked() {
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          return this.checkList.indexOf(this.value) !== -1;
        } else if (this.checked === true) {
          return this.checked;
        } else if (this.modelValue === this.trueValue) {
          return true;
        } else if (this.modelValue === this.falseValue) {
          return false;
        } else {
          return false;
        }
      }
      return false;
    }
  },
  methods: {
    setvalue(option) {
      if (this.disabled || option && option.disabled)
        return;
      let value = null;
      if (this.isSingle) {
        if (!utils.isNull(this.value)) {
          value = utils.toggleValue(this.checkList, this.value);
        } else if (!utils.isNull(this.modelValue)) {
          value = this.isSingleChecked ? this.falseValue : this.trueValue;
        } else if (this.checked === true) {
          value = this.checked;
        } else {
          value = this.isSingleChecked ? this.falseValue : this.trueValue;
        }
      } else {
        value = utils.copy(this.modelValue);
        let key = option[this.key];
        value = utils.toggleValue(value, key);
        if (this.limit && this.limit < value.length) {
          message.error(this.hlang("h.checkbox.limitSize", { limitSize: this.limit }));
          return;
        }
      }
      this.$emit("change", value);
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    },
    check(key) {
      let value = this.checkList.map((item) => String(item));
      return value.indexOf(String(key));
    },
    isInclude(option) {
      let value = this.checkList.map((item) => String(item));
      let index2 = value.indexOf(String(option[this.key]));
      return index2 > -1;
    }
  }
};
const _hoisted_1$M = ["onClick"];
const _hoisted_2$B = /* @__PURE__ */ createElementVNode("span", { class: "h-checkbox-native" }, null, -1);
const _hoisted_3$v = {
  key: 0,
  class: "h-checkbox-text"
};
const _hoisted_4$o = /* @__PURE__ */ createElementVNode("span", { class: "h-checkbox-native" }, null, -1);
const _hoisted_5$l = {
  key: 0,
  class: "h-checkbox-text"
};
function _sfc_render$$(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-checkbox", { "h-checkbox-disabled": $props.disabled, "h-checkbox-single": $options.isSingle }])
  }, [
    !$options.isSingle ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.arr, (option) => {
      return openBlock(), createElementBlock("label", {
        key: option[$data.key],
        class: normalizeClass({
          "h-checkbox-label": true,
          "h-checkbox-checked": $options.isInclude(option),
          "h-checkbox-item-disabled": option.disabled,
          "h-checkbox-indeterminate": option.indeterminate
        }),
        onClick: ($event) => $options.setvalue(option)
      }, [
        _hoisted_2$B,
        !_ctx.$slots.item ? (openBlock(), createElementBlock("span", _hoisted_3$v, toDisplayString(option[$data.title]), 1)) : renderSlot(_ctx.$slots, "item", {
          key: 1,
          item: option
        })
      ], 10, _hoisted_1$M);
    }), 128)) : (openBlock(), createElementBlock("label", {
      key: 1,
      class: normalizeClass({ "h-checkbox-label": true, "h-checkbox-checked": $options.isSingleChecked, "h-checkbox-indeterminate": !$options.isSingleChecked && $props.indeterminate }),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.setvalue())
    }, [
      _hoisted_4$o,
      _ctx.$slots.default ? (openBlock(), createElementBlock("span", _hoisted_5$l, [
        renderSlot(_ctx.$slots, "default")
      ])) : createCommentVNode("", true)
    ], 2))
  ], 2);
}
var Checkbox = /* @__PURE__ */ _export_sfc(_sfc_main$$, [["render", _sfc_render$$]]);
const _sfc_main$_ = {
  name: "HCircle",
  props: {
    color: {
      type: String,
      default: "#3B91FF"
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 12
    },
    size: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {};
  },
  computed: {
    circleStyle() {
      return {
        height: `${this.circleSize}px`
      };
    },
    circleSize() {
      return this.size + this.strokeWidth / 2;
    },
    radius() {
      return this.circleSize - this.strokeWidth / 2;
    },
    pathString() {
      return `M ${this.circleSize},${this.circleSize} m 0,-${this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },
    len() {
      return Math.PI * 2 * this.radius;
    },
    pathStyle() {
      return {
        "stroke-dasharray": `${this.len}px ${this.len}px`,
        "stroke-dashoffset": `${(100 - Math.min(this.percent, 100)) / 100 * this.len}px`,
        transition: "stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease"
      };
    }
  }
};
const _hoisted_1$L = ["width", "height", "viewBox"];
const _hoisted_2$A = ["d", "stroke-width"];
const _hoisted_3$u = ["d", "stroke", "stroke-width"];
const _hoisted_4$n = { class: "h-circle-content" };
function _sfc_render$_(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "h-circle",
    style: normalizeStyle($options.circleStyle)
  }, [
    (openBlock(), createElementBlock("svg", {
      width: $options.circleSize,
      height: $options.circleSize,
      viewBox: `0 0 ${$options.circleSize * 2} ${$options.circleSize * 2}`
    }, [
      createElementVNode("path", {
        d: $options.pathString,
        stroke: "#f3f3f3",
        "stroke-width": $props.strokeWidth,
        "fill-opacity": "0"
      }, null, 8, _hoisted_2$A),
      createElementVNode("path", {
        d: $options.pathString,
        "stroke-linecap": "round",
        stroke: $props.color,
        "stroke-width": $props.strokeWidth,
        "fill-opacity": "0",
        style: normalizeStyle($options.pathStyle)
      }, null, 12, _hoisted_3$u)
    ], 8, _hoisted_1$L)),
    createElementVNode("div", _hoisted_4$n, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 4);
}
var Circle = /* @__PURE__ */ _export_sfc(_sfc_main$_, [["render", _sfc_render$_]]);
/** !
 * @fileOverview Kickass library to create and place poppers near their reference elements.
 * @version 1.14.1
 * @license
 * Copyright (c) 2016 Federico Zivolo and contributors
 *
 * Permission is hereby granted, free of chargrequestAnimationFramee, to any person obtaining a copy
 * of this software and associated documentation files (the "Software"), to deal
 * in the Software without restriction, including without limitation the rights
 * to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
 * copies of the Software, and to permit persons to whom the Software is
 * furnished to do so, subject to the following conditions:
 *
 * The above copyright notice and this permission notice shall be included in all
 * copies or substantial portions of the Software.
 *
 * THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
 * IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
 * FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
 * AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
 * LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
 * OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
 * SOFTWARE.
 */
var isBrowser = typeof window !== "undefined" && typeof document !== "undefined";
var longerTimeoutBrowsers = ["Edge", "Trident", "Firefox"];
var timeoutDuration = 0;
for (var i = 0; i < longerTimeoutBrowsers.length; i += 1) {
  if (isBrowser && navigator.userAgent.indexOf(longerTimeoutBrowsers[i]) >= 0) {
    timeoutDuration = 1;
    break;
  }
}
function microtaskDebounce(fn) {
  var called = false;
  return function() {
    if (called) {
      return;
    }
    called = true;
    window.Promise.resolve().then(function() {
      called = false;
      fn();
    });
  };
}
function taskDebounce(fn) {
  var scheduled = false;
  return function() {
    if (!scheduled) {
      scheduled = true;
      setTimeout(function() {
        scheduled = false;
        fn();
      }, timeoutDuration);
    }
  };
}
var supportsMicroTasks = isBrowser && window.Promise;
var debounce$1 = supportsMicroTasks ? microtaskDebounce : taskDebounce;
function isFunction(functionToCheck) {
  var getType = {};
  return functionToCheck && getType.toString.call(functionToCheck) === "[object Function]";
}
function getStyleComputedProperty(element, property) {
  if (element.nodeType !== 1) {
    return [];
  }
  var css = getComputedStyle(element, null);
  return property ? css[property] : css;
}
function getParentNode(element) {
  if (element.nodeName === "HTML") {
    return element;
  }
  return element.parentNode || element.host;
}
function getScrollParent(element) {
  if (!element) {
    return document.body;
  }
  switch (element.nodeName) {
    case "HTML":
    case "BODY":
      return element.ownerDocument.body;
    case "#document":
      return element.body;
  }
  var _getStyleComputedProp = getStyleComputedProperty(element);
  var overflow = _getStyleComputedProp.overflow;
  var overflowX = _getStyleComputedProp.overflowX;
  var overflowY = _getStyleComputedProp.overflowY;
  if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) {
    return element;
  }
  return getScrollParent(getParentNode(element));
}
var cache = {};
var isIE = function() {
  var version = arguments.length > 0 && arguments[0] !== void 0 ? arguments[0] : "all";
  version = version.toString();
  if (cache.hasOwnProperty(version)) {
    return cache[version];
  }
  switch (version) {
    case "11":
      cache[version] = navigator.userAgent.indexOf("Trident") !== -1;
      break;
    case "10":
      cache[version] = navigator.appVersion.indexOf("MSIE 10") !== -1;
      break;
    case "all":
      cache[version] = navigator.userAgent.indexOf("Trident") !== -1 || navigator.userAgent.indexOf("MSIE") !== -1;
      break;
  }
  cache.all = cache.all || Object.keys(cache).some(function(key) {
    return cache[key];
  });
  return cache[version];
};
function getOffsetParent(element) {
  if (!element) {
    return document.documentElement;
  }
  var noOffsetParent = isIE(10) ? document.body : null;
  var offsetParent = element.offsetParent;
  while (offsetParent === noOffsetParent && element.nextElementSibling) {
    offsetParent = (element = element.nextElementSibling).offsetParent;
  }
  var nodeName = offsetParent && offsetParent.nodeName;
  if (!nodeName || nodeName === "BODY" || nodeName === "HTML") {
    return element ? element.ownerDocument.documentElement : document.documentElement;
  }
  if (["TD", "TABLE"].indexOf(offsetParent.nodeName) !== -1 && getStyleComputedProperty(offsetParent, "position") === "static") {
    return getOffsetParent(offsetParent);
  }
  return offsetParent;
}
function isOffsetContainer(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY") {
    return false;
  }
  return nodeName === "HTML" || getOffsetParent(element.firstElementChild) === element;
}
function getRoot(node) {
  if (node.parentNode !== null) {
    return getRoot(node.parentNode);
  }
  return node;
}
function findCommonOffsetParent(element1, element2) {
  if (!element1 || !element1.nodeType || !element2 || !element2.nodeType) {
    return document.documentElement;
  }
  var order = element1.compareDocumentPosition(element2) & Node.DOCUMENT_POSITION_FOLLOWING;
  var start = order ? element1 : element2;
  var end = order ? element2 : element1;
  var range = document.createRange();
  range.setStart(start, 0);
  range.setEnd(end, 0);
  var commonAncestorContainer = range.commonAncestorContainer;
  if (element1 !== commonAncestorContainer && element2 !== commonAncestorContainer || start.contains(end)) {
    if (isOffsetContainer(commonAncestorContainer)) {
      return commonAncestorContainer;
    }
    return getOffsetParent(commonAncestorContainer);
  }
  var element1root = getRoot(element1);
  if (element1root.host) {
    return findCommonOffsetParent(element1root.host, element2);
  } else {
    return findCommonOffsetParent(element1, getRoot(element2).host);
  }
}
function getScroll(element) {
  var side = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : "top";
  var upperSide = side === "top" ? "scrollTop" : "scrollLeft";
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    var html = element.ownerDocument.documentElement;
    var scrollingElement = element.ownerDocument.scrollingElement || html;
    return scrollingElement[upperSide];
  }
  return element[upperSide];
}
function includeScroll(rect, element) {
  var subtract = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var scrollTop = getScroll(element, "top");
  var scrollLeft = getScroll(element, "left");
  var modifier = subtract ? -1 : 1;
  rect.top += scrollTop * modifier;
  rect.bottom += scrollTop * modifier;
  rect.left += scrollLeft * modifier;
  rect.right += scrollLeft * modifier;
  return rect;
}
function getBordersSize(styles, axis) {
  var sideA = axis === "x" ? "Left" : "Top";
  var sideB = sideA === "Left" ? "Right" : "Bottom";
  return parseFloat(styles["border" + sideA + "Width"], 10) + parseFloat(styles["border" + sideB + "Width"], 10);
}
function getSize(axis, body, html, computedStyle) {
  return Math.max(body["offset" + axis], body["scroll" + axis], html["client" + axis], html["offset" + axis], html["scroll" + axis], isIE(10) ? html["offset" + axis] + computedStyle["margin" + (axis === "Height" ? "Top" : "Left")] + computedStyle["margin" + (axis === "Height" ? "Bottom" : "Right")] : 0);
}
function getWindowSizes() {
  var body = document.body;
  var html = document.documentElement;
  var computedStyle = isIE(10) && getComputedStyle(html);
  return {
    height: getSize("Height", body, html, computedStyle),
    width: getSize("Width", body, html, computedStyle)
  };
}
var classCallCheck = function(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
};
var createClass = function() {
  function defineProperties(target, props) {
    for (var i = 0; i < props.length; i++) {
      var descriptor = props[i];
      descriptor.enumerable = descriptor.enumerable || false;
      descriptor.configurable = true;
      if ("value" in descriptor)
        descriptor.writable = true;
      Object.defineProperty(target, descriptor.key, descriptor);
    }
  }
  return function(Constructor, protoProps, staticProps) {
    if (protoProps)
      defineProperties(Constructor.prototype, protoProps);
    if (staticProps)
      defineProperties(Constructor, staticProps);
    return Constructor;
  };
}();
var defineProperty = function(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }
  return obj;
};
var _extends = Object.assign || function(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i];
    for (var key in source) {
      if (Object.prototype.hasOwnProperty.call(source, key)) {
        target[key] = source[key];
      }
    }
  }
  return target;
};
function getClientRect(offsets) {
  return _extends({}, offsets, {
    right: offsets.left + offsets.width,
    bottom: offsets.top + offsets.height
  });
}
function getBoundingClientRect(element) {
  var rect = {};
  try {
    if (isIE(10)) {
      rect = element.getBoundingClientRect();
      var scrollTop = getScroll(element, "top");
      var scrollLeft = getScroll(element, "left");
      rect.top += scrollTop;
      rect.left += scrollLeft;
      rect.bottom += scrollTop;
      rect.right += scrollLeft;
    } else {
      rect = element.getBoundingClientRect();
    }
  } catch (e) {
  }
  var result = {
    left: rect.left,
    top: rect.top,
    width: rect.right - rect.left,
    height: rect.bottom - rect.top
  };
  var sizes = element.nodeName === "HTML" ? getWindowSizes() : {};
  var width = sizes.width || element.clientWidth || result.right - result.left;
  var height = sizes.height || element.clientHeight || result.bottom - result.top;
  var horizScrollbar = element.offsetWidth - width;
  var vertScrollbar = element.offsetHeight - height;
  if (horizScrollbar || vertScrollbar) {
    var styles = getStyleComputedProperty(element);
    horizScrollbar -= getBordersSize(styles, "x");
    vertScrollbar -= getBordersSize(styles, "y");
    result.width -= horizScrollbar;
    result.height -= vertScrollbar;
  }
  return getClientRect(result);
}
function getOffsetRectRelativeToArbitraryNode(children, parent) {
  var fixedPosition = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : false;
  var isIE10 = isIE(10);
  var isHTML = parent.nodeName === "HTML";
  var childrenRect = getBoundingClientRect(children);
  var parentRect = getBoundingClientRect(parent);
  var scrollParent = getScrollParent(children);
  var styles = getStyleComputedProperty(parent);
  var borderTopWidth = parseFloat(styles.borderTopWidth, 10);
  var borderLeftWidth = parseFloat(styles.borderLeftWidth, 10);
  if (fixedPosition && parent.nodeName === "HTML") {
    parentRect.top = Math.max(parentRect.top, 0);
    parentRect.left = Math.max(parentRect.left, 0);
  }
  var offsets = getClientRect({
    top: childrenRect.top - parentRect.top - borderTopWidth,
    left: childrenRect.left - parentRect.left - borderLeftWidth,
    width: childrenRect.width,
    height: childrenRect.height
  });
  offsets.marginTop = 0;
  offsets.marginLeft = 0;
  if (!isIE10 && isHTML) {
    var marginTop = parseFloat(styles.marginTop, 10);
    var marginLeft = parseFloat(styles.marginLeft, 10);
    offsets.top -= borderTopWidth - marginTop;
    offsets.bottom -= borderTopWidth - marginTop;
    offsets.left -= borderLeftWidth - marginLeft;
    offsets.right -= borderLeftWidth - marginLeft;
    offsets.marginTop = marginTop;
    offsets.marginLeft = marginLeft;
  }
  if (isIE10 && !fixedPosition ? parent.contains(scrollParent) : (parent.contains(scrollParent) && parent.nodeName !== "HTML" || parent === scrollParent) && scrollParent.nodeName !== "BODY") {
    offsets = includeScroll(offsets, parent);
  }
  return offsets;
}
function getViewportOffsetRectRelativeToArtbitraryNode(element) {
  var excludeScroll = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var html = element.ownerDocument.documentElement;
  var relativeOffset = getOffsetRectRelativeToArbitraryNode(element, html);
  var width = Math.max(html.clientWidth, window.innerWidth || 0);
  var height = Math.max(html.clientHeight, window.innerHeight || 0);
  var scrollTop = !excludeScroll ? getScroll(html) : 0;
  var scrollLeft = !excludeScroll ? getScroll(html, "left") : 0;
  var offset2 = {
    top: scrollTop - relativeOffset.top + relativeOffset.marginTop,
    left: scrollLeft - relativeOffset.left + relativeOffset.marginLeft,
    width,
    height
  };
  return getClientRect(offset2);
}
function isFixed(element) {
  var nodeName = element.nodeName;
  if (nodeName === "BODY" || nodeName === "HTML") {
    return false;
  }
  if (getStyleComputedProperty(element, "position") === "fixed") {
    return true;
  }
  return isFixed(getParentNode(element));
}
function getFixedPositionOffsetParent(element) {
  if (!element || !element.parentElement || isIE()) {
    return document.documentElement;
  }
  var el = element.parentElement;
  while (el && getStyleComputedProperty(el, "transform") === "none") {
    el = el.parentElement;
  }
  return el || document.documentElement;
}
function getBoundaries(popper, reference, padding, boundariesElement) {
  var fixedPosition = arguments.length > 4 && arguments[4] !== void 0 ? arguments[4] : false;
  var boundaries = { top: 0, left: 0 };
  var offsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  if (boundariesElement === "viewport") {
    boundaries = getViewportOffsetRectRelativeToArtbitraryNode(offsetParent, fixedPosition);
  } else {
    var boundariesNode = void 0;
    if (boundariesElement === "scrollParent") {
      boundariesNode = getScrollParent(getParentNode(reference));
      if (boundariesNode.nodeName === "BODY") {
        boundariesNode = popper.ownerDocument.documentElement;
      }
    } else if (boundariesElement === "window") {
      boundariesNode = popper.ownerDocument.documentElement;
    } else {
      boundariesNode = boundariesElement;
    }
    var offsets = getOffsetRectRelativeToArbitraryNode(boundariesNode, offsetParent, fixedPosition);
    if (boundariesNode.nodeName === "HTML" && !isFixed(offsetParent)) {
      var _getWindowSizes = getWindowSizes();
      var height = _getWindowSizes.height;
      var width = _getWindowSizes.width;
      boundaries.top += offsets.top - offsets.marginTop;
      boundaries.bottom = height + offsets.top;
      boundaries.left += offsets.left - offsets.marginLeft;
      boundaries.right = width + offsets.left;
    } else {
      boundaries = offsets;
    }
  }
  boundaries.left += padding;
  boundaries.top += padding;
  boundaries.right -= padding;
  boundaries.bottom -= padding;
  return boundaries;
}
function getArea(_ref) {
  var width = _ref.width;
  var height = _ref.height;
  return width * height;
}
function computeAutoPlacement(placement, refRect, popper, reference, boundariesElement) {
  var padding = arguments.length > 5 && arguments[5] !== void 0 ? arguments[5] : 0;
  if (placement.indexOf("auto") === -1) {
    return placement;
  }
  var boundaries = getBoundaries(popper, reference, padding, boundariesElement);
  var rects = {
    top: {
      width: boundaries.width,
      height: refRect.top - boundaries.top
    },
    right: {
      width: boundaries.right - refRect.right,
      height: boundaries.height
    },
    bottom: {
      width: boundaries.width,
      height: boundaries.bottom - refRect.bottom
    },
    left: {
      width: refRect.left - boundaries.left,
      height: boundaries.height
    }
  };
  var sortedAreas = Object.keys(rects).map(function(key) {
    return _extends({
      key
    }, rects[key], {
      area: getArea(rects[key])
    });
  }).sort(function(a, b) {
    return b.area - a.area;
  });
  var filteredAreas = sortedAreas.filter(function(_ref2) {
    var width = _ref2.width;
    var height = _ref2.height;
    return width >= popper.clientWidth && height >= popper.clientHeight;
  });
  var computedPlacement = filteredAreas.length > 0 ? filteredAreas[0].key : sortedAreas[0].key;
  var variation = placement.split("-")[1];
  return computedPlacement + (variation ? "-" + variation : "");
}
function getReferenceOffsets(state, popper, reference) {
  var fixedPosition = arguments.length > 3 && arguments[3] !== void 0 ? arguments[3] : null;
  var commonOffsetParent = fixedPosition ? getFixedPositionOffsetParent(popper) : findCommonOffsetParent(popper, reference);
  return getOffsetRectRelativeToArbitraryNode(reference, commonOffsetParent, fixedPosition);
}
function getOuterSizes(element) {
  var styles = getComputedStyle(element);
  var x = parseFloat(styles.marginTop) + parseFloat(styles.marginBottom);
  var y = parseFloat(styles.marginLeft) + parseFloat(styles.marginRight);
  var result = {
    width: element.offsetWidth + y,
    height: element.offsetHeight + x
  };
  return result;
}
function getOppositePlacement(placement) {
  var hash = { left: "right", right: "left", bottom: "top", top: "bottom" };
  return placement.replace(/left|right|bottom|top/g, function(matched) {
    return hash[matched];
  });
}
function getPopperOffsets(popper, referenceOffsets, placement) {
  placement = placement.split("-")[0];
  var popperRect = getOuterSizes(popper);
  var popperOffsets = {
    width: popperRect.width,
    height: popperRect.height
  };
  var isHoriz = ["right", "left"].indexOf(placement) !== -1;
  var mainSide = isHoriz ? "top" : "left";
  var secondarySide = isHoriz ? "left" : "top";
  var measurement = isHoriz ? "height" : "width";
  var secondaryMeasurement = !isHoriz ? "height" : "width";
  popperOffsets[mainSide] = referenceOffsets[mainSide] + referenceOffsets[measurement] / 2 - popperRect[measurement] / 2;
  if (placement === secondarySide) {
    popperOffsets[secondarySide] = referenceOffsets[secondarySide] - popperRect[secondaryMeasurement];
  } else {
    popperOffsets[secondarySide] = referenceOffsets[getOppositePlacement(secondarySide)];
  }
  return popperOffsets;
}
function find(arr, check) {
  if (Array.prototype.find) {
    return arr.find(check);
  }
  return arr.filter(check)[0];
}
function findIndex(arr, prop, value) {
  if (Array.prototype.findIndex) {
    return arr.findIndex(function(cur) {
      return cur[prop] === value;
    });
  }
  var match = find(arr, function(obj) {
    return obj[prop] === value;
  });
  return arr.indexOf(match);
}
function runModifiers(modifiers2, data, ends) {
  var modifiersToRun = ends === void 0 ? modifiers2 : modifiers2.slice(0, findIndex(modifiers2, "name", ends));
  modifiersToRun.forEach(function(modifier) {
    if (modifier["function"]) {
      console.warn("`modifier.function` is deprecated, use `modifier.fn`!");
    }
    var fn = modifier["function"] || modifier.fn;
    if (modifier.enabled && isFunction(fn)) {
      data.offsets.popper = getClientRect(data.offsets.popper);
      data.offsets.reference = getClientRect(data.offsets.reference);
      data = fn(data, modifier);
    }
  });
  return data;
}
function updateModifiers() {
  if (this.state.isDestroyed) {
    return;
  }
  let options2 = this.defaultOptions;
  this.options.modifiers = {};
  const _this = this;
  Object.keys(_extends({}, Popper.Defaults.modifiers, options2.modifiers)).forEach(function(name) {
    _this.options.modifiers[name] = _extends({}, Popper.Defaults.modifiers[name] || {}, options2.modifiers ? options2.modifiers[name] : {});
  });
  this.modifiers = Object.keys(this.options.modifiers).map(function(name) {
    return _extends({
      name
    }, _this.options.modifiers[name]);
  }).sort(function(a, b) {
    return a.order - b.order;
  });
  this.modifiers.forEach(function(modifierOptions) {
    if (modifierOptions.enabled && isFunction(modifierOptions.onLoad)) {
      modifierOptions.onLoad(_this.reference, _this.popper, _this.options, modifierOptions, _this.state);
    }
  });
}
function update$1() {
  if (this.state.isDestroyed) {
    return;
  }
  var data = {
    instance: this,
    styles: {},
    arrowStyles: {},
    attributes: {},
    flipped: false,
    offsets: {}
  };
  data.offsets.reference = getReferenceOffsets(this.state, this.popper, this.reference, this.options.positionFixed);
  data.placement = computeAutoPlacement(this.options.placement, data.offsets.reference, this.popper, this.reference, this.options.modifiers.flip.boundariesElement, this.options.modifiers.flip.padding);
  data.originalPlacement = data.placement;
  data.positionFixed = this.options.positionFixed;
  data.offsets.popper = getPopperOffsets(this.popper, data.offsets.reference, data.placement);
  data.offsets.popper.position = this.options.positionFixed ? "fixed" : "absolute";
  data = runModifiers(this.modifiers, data);
  if (!this.state.isCreated) {
    this.state.isCreated = true;
    this.options.onCreate(data);
  } else {
    this.options.onUpdate(data);
  }
}
function isModifierEnabled(modifiers2, modifierName) {
  return modifiers2.some(function(_ref) {
    var name = _ref.name;
    var enabled = _ref.enabled;
    return enabled && name === modifierName;
  });
}
function getSupportedPropertyName(property) {
  var prefixes = [false, "ms", "Webkit", "Moz", "O"];
  var upperProp = property.charAt(0).toUpperCase() + property.slice(1);
  for (var i = 0; i < prefixes.length; i++) {
    var prefix2 = prefixes[i];
    var toCheck = prefix2 ? "" + prefix2 + upperProp : property;
    if (typeof document.body.style[toCheck] !== "undefined") {
      return toCheck;
    }
  }
  return null;
}
function destroy$1() {
  this.state.isDestroyed = true;
  if (isModifierEnabled(this.modifiers, "applyStyle")) {
    this.popper.removeAttribute("x-placement");
    this.popper.style.position = "";
    this.popper.style.top = "";
    this.popper.style.left = "";
    this.popper.style.right = "";
    this.popper.style.bottom = "";
    this.popper.style.willChange = "";
    this.popper.style[getSupportedPropertyName("transform")] = "";
  }
  this.disableEventListeners();
  if (this.options.removeOnDestroy) {
    this.popper.parentNode.removeChild(this.popper);
  }
  return this;
}
function getWindow(element) {
  var ownerDocument = element.ownerDocument;
  return ownerDocument ? ownerDocument.defaultView : window;
}
function attachToScrollParents(scrollParent, event, callback, scrollParents) {
  var isBody = scrollParent.nodeName === "BODY";
  var target = isBody ? scrollParent.ownerDocument.defaultView : scrollParent;
  target.addEventListener(event, callback, { passive: true, capture: true });
  if (!isBody) {
    attachToScrollParents(getScrollParent(target.parentNode), event, callback, scrollParents);
  }
  scrollParents.push(target);
}
function setupEventListeners(reference, options2, state, updateBound) {
  state.updateBound = updateBound;
  getWindow(reference).addEventListener("resize", state.updateBound, { passive: true });
  var scrollElement = getScrollParent(reference);
  attachToScrollParents(scrollElement, "scroll", state.updateBound, state.scrollParents);
  state.scrollElement = scrollElement;
  state.eventsEnabled = true;
  return state;
}
function enableEventListeners() {
  if (!this.state.eventsEnabled) {
    this.state = setupEventListeners(this.reference, this.options, this.state, this.scheduleUpdate);
  }
}
function removeEventListeners(reference, state) {
  getWindow(reference).removeEventListener("resize", state.updateBound);
  state.scrollParents.forEach(function(target) {
    target.removeEventListener("scroll", state.updateBound);
  });
  state.updateBound = null;
  state.scrollParents = [];
  state.scrollElement = null;
  state.eventsEnabled = false;
  return state;
}
function disableEventListeners() {
  if (this.state.eventsEnabled) {
    if (window.cancelAnimationFrame) {
      cancelAnimationFrame(this.scheduleUpdate);
    }
    this.state = removeEventListeners(this.reference, this.state);
  }
}
function isNumeric(n) {
  return n !== "" && !isNaN(parseFloat(n)) && isFinite(n);
}
function setStyles(element, styles) {
  Object.keys(styles).forEach(function(prop) {
    var unit = "";
    if (["width", "height", "top", "right", "bottom", "left"].indexOf(prop) !== -1 && isNumeric(styles[prop])) {
      unit = "px";
    }
    element.style[prop] = styles[prop] + unit;
  });
}
function setAttributes(element, attributes) {
  Object.keys(attributes).forEach(function(prop) {
    var value = attributes[prop];
    if (value !== false) {
      element.setAttribute(prop, attributes[prop]);
    } else {
      element.removeAttribute(prop);
    }
  });
}
function applyStyle(data) {
  setStyles(data.instance.popper, data.styles);
  setAttributes(data.instance.popper, data.attributes);
  if (data.arrowElement && Object.keys(data.arrowStyles).length) {
    setStyles(data.arrowElement, data.arrowStyles);
  }
  return data;
}
function applyStyleOnLoad(reference, popper, options2, modifierOptions, state) {
  var referenceOffsets = getReferenceOffsets(state, popper, reference, options2.positionFixed);
  var placement = computeAutoPlacement(options2.placement, referenceOffsets, popper, reference, options2.modifiers.flip.boundariesElement, options2.modifiers.flip.padding);
  popper.setAttribute("x-placement", placement);
  setStyles(popper, { position: options2.positionFixed ? "fixed" : "absolute" });
  return options2;
}
function computeStyle(data, options2) {
  var x = options2.x;
  var y = options2.y;
  var popper = data.offsets.popper;
  var legacyGpuAccelerationOption = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "applyStyle";
  }).gpuAcceleration;
  if (legacyGpuAccelerationOption !== void 0) {
    console.warn("WARNING: `gpuAcceleration` option moved to `computeStyle` modifier and will not be supported in future versions of Popper.js!");
  }
  var gpuAcceleration = legacyGpuAccelerationOption !== void 0 ? legacyGpuAccelerationOption : options2.gpuAcceleration;
  var offsetParent = getOffsetParent(data.instance.popper);
  var offsetParentRect = getBoundingClientRect(offsetParent);
  var styles = {
    position: popper.position
  };
  var offsets = {
    left: Math.floor(popper.left),
    top: Math.floor(popper.top),
    bottom: Math.floor(popper.bottom),
    right: Math.floor(popper.right)
  };
  var sideA = x === "bottom" ? "top" : "bottom";
  var sideB = y === "right" ? "left" : "right";
  var prefixedProperty = getSupportedPropertyName("transform");
  var left = void 0;
  var top = void 0;
  if (sideA === "bottom") {
    top = -offsetParentRect.height + offsets.bottom;
  } else {
    top = offsets.top;
  }
  if (sideB === "right") {
    left = -offsetParentRect.width + offsets.right;
  } else {
    left = offsets.left;
  }
  if (gpuAcceleration && prefixedProperty) {
    styles[prefixedProperty] = "translate3d(" + left + "px, " + top + "px, 0)";
    styles[sideA] = 0;
    styles[sideB] = 0;
    styles.willChange = "transform";
  } else {
    var invertTop = sideA === "bottom" ? -1 : 1;
    var invertLeft = sideB === "right" ? -1 : 1;
    styles[sideA] = top * invertTop;
    styles[sideB] = left * invertLeft;
    styles.willChange = sideA + ", " + sideB;
  }
  var attributes = {
    "x-placement": data.placement
  };
  data.attributes = _extends({}, attributes, data.attributes);
  data.styles = _extends({}, styles, data.styles);
  data.arrowStyles = _extends({}, data.offsets.arrow, data.arrowStyles);
  return data;
}
function isModifierRequired(modifiers2, requestingName, requestedName) {
  var requesting = find(modifiers2, function(_ref) {
    var name = _ref.name;
    return name === requestingName;
  });
  var isRequired = !!requesting && modifiers2.some(function(modifier) {
    return modifier.name === requestedName && modifier.enabled && modifier.order < requesting.order;
  });
  if (!isRequired) {
    var _requesting = "`" + requestingName + "`";
    var requested = "`" + requestedName + "`";
    console.warn(requested + " modifier is required by " + _requesting + " modifier in order to work, be sure to include it before " + _requesting + "!");
  }
  return isRequired;
}
function arrow(data, options2) {
  var _data$offsets$arrow;
  if (!isModifierRequired(data.instance.modifiers, "arrow", "keepTogether")) {
    return data;
  }
  var arrowElement = options2.element;
  if (typeof arrowElement === "string") {
    arrowElement = data.instance.popper.querySelector(arrowElement);
    if (!arrowElement) {
      return data;
    }
  } else {
    if (!data.instance.popper.contains(arrowElement)) {
      console.warn("WARNING: `arrow.element` must be child of its popper element!");
      return data;
    }
  }
  var placement = data.placement.split("-")[0];
  var _data$offsets = data.offsets;
  var popper = _data$offsets.popper;
  var reference = _data$offsets.reference;
  var isVertical = ["left", "right"].indexOf(placement) !== -1;
  var len = isVertical ? "height" : "width";
  var sideCapitalized = isVertical ? "Top" : "Left";
  var side = sideCapitalized.toLowerCase();
  var altSide = isVertical ? "left" : "top";
  var opSide = isVertical ? "bottom" : "right";
  var arrowElementSize = getOuterSizes(arrowElement)[len];
  if (reference[opSide] - arrowElementSize < popper[side]) {
    data.offsets.popper[side] -= popper[side] - (reference[opSide] - arrowElementSize);
  }
  if (reference[side] + arrowElementSize > popper[opSide]) {
    data.offsets.popper[side] += reference[side] + arrowElementSize - popper[opSide];
  }
  data.offsets.popper = getClientRect(data.offsets.popper);
  var center = reference[side] + reference[len] / 2 - arrowElementSize / 2;
  var css = getStyleComputedProperty(data.instance.popper);
  var popperMarginSide = parseFloat(css["margin" + sideCapitalized], 10);
  var popperBorderSide = parseFloat(css["border" + sideCapitalized + "Width"], 10);
  var sideValue = center - data.offsets.popper[side] - popperMarginSide - popperBorderSide;
  sideValue = Math.max(Math.min(popper[len] - arrowElementSize, sideValue), 0);
  data.arrowElement = arrowElement;
  data.offsets.arrow = (_data$offsets$arrow = {}, defineProperty(_data$offsets$arrow, side, Math.round(sideValue)), defineProperty(_data$offsets$arrow, altSide, ""), _data$offsets$arrow);
  return data;
}
function getOppositeVariation(variation) {
  if (variation === "end") {
    return "start";
  } else if (variation === "start") {
    return "end";
  }
  return variation;
}
var placements = [
  "auto-start",
  "auto",
  "auto-end",
  "top-start",
  "top",
  "top-end",
  "right-start",
  "right",
  "right-end",
  "bottom-end",
  "bottom",
  "bottom-start",
  "left-end",
  "left",
  "left-start"
];
var validPlacements = placements.slice(3);
function clockwise(placement) {
  var counter = arguments.length > 1 && arguments[1] !== void 0 ? arguments[1] : false;
  var index2 = validPlacements.indexOf(placement);
  var arr = validPlacements.slice(index2 + 1).concat(validPlacements.slice(0, index2));
  return counter ? arr.reverse() : arr;
}
var BEHAVIORS = {
  FLIP: "flip",
  CLOCKWISE: "clockwise",
  COUNTERCLOCKWISE: "counterclockwise"
};
function flip(data, options2) {
  if (isModifierEnabled(data.instance.modifiers, "inner")) {
    return data;
  }
  if (data.flipped && data.placement === data.originalPlacement) {
    return data;
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options2.padding, options2.boundariesElement);
  var placement = data.placement.split("-")[0];
  var placementOpposite = getOppositePlacement(placement);
  var variation = data.placement.split("-")[1] || "";
  var flipOrder = [];
  switch (options2.behavior) {
    case BEHAVIORS.FLIP:
      flipOrder = [placement, placementOpposite];
      break;
    case BEHAVIORS.CLOCKWISE:
      flipOrder = clockwise(placement);
      break;
    case BEHAVIORS.COUNTERCLOCKWISE:
      flipOrder = clockwise(placement, true);
      break;
    default:
      flipOrder = options2.behavior;
  }
  flipOrder.forEach(function(step, index2) {
    if (placement !== step || flipOrder.length === index2 + 1) {
      return data;
    }
    placement = data.placement.split("-")[0];
    placementOpposite = getOppositePlacement(placement);
    var popperOffsets = data.offsets.popper;
    var refOffsets = data.offsets.reference;
    var floor = Math.floor;
    var overlapsRef = placement === "left" && floor(popperOffsets.right) > floor(refOffsets.left) || placement === "right" && floor(popperOffsets.left) < floor(refOffsets.right) || placement === "top" && floor(popperOffsets.bottom) > floor(refOffsets.top) || placement === "bottom" && floor(popperOffsets.top) < floor(refOffsets.bottom);
    var overflowsLeft = floor(popperOffsets.left) < floor(boundaries.left);
    var overflowsRight = floor(popperOffsets.right) > floor(boundaries.right);
    var overflowsTop = floor(popperOffsets.top) < floor(boundaries.top);
    var overflowsBottom = floor(popperOffsets.bottom) > floor(boundaries.bottom);
    var overflowsBoundaries = placement === "left" && overflowsLeft || placement === "right" && overflowsRight || placement === "top" && overflowsTop || placement === "bottom" && overflowsBottom;
    var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
    var flippedVariation = !!options2.flipVariations && (isVertical && variation === "start" && overflowsLeft || variation === "start" && !overflowsLeft && overflowsRight || isVertical && variation === "end" && overflowsRight || !isVertical && variation === "start" && overflowsTop || !isVertical && variation === "end" && overflowsBottom);
    if (overlapsRef || overflowsBoundaries || flippedVariation) {
      data.flipped = true;
      if (overlapsRef || overflowsBoundaries) {
        placement = flipOrder[index2 + 1];
      }
      if (flippedVariation) {
        variation = getOppositeVariation(variation);
      }
      data.placement = placement + (variation ? "-" + variation : "");
      data.offsets.popper = _extends({}, data.offsets.popper, getPopperOffsets(data.instance.popper, data.offsets.reference, data.placement));
      data = runModifiers(data.instance.modifiers, data, "flip");
    }
  });
  return data;
}
function keepTogether(data) {
  var _data$offsets = data.offsets;
  var popper = _data$offsets.popper;
  var reference = _data$offsets.reference;
  var placement = data.placement.split("-")[0];
  var floor = Math.floor;
  var isVertical = ["top", "bottom"].indexOf(placement) !== -1;
  var side = isVertical ? "right" : "bottom";
  var opSide = isVertical ? "left" : "top";
  var measurement = isVertical ? "width" : "height";
  if (popper[side] < floor(reference[opSide])) {
    data.offsets.popper[opSide] = floor(reference[opSide]) - popper[measurement];
  }
  if (popper[opSide] > floor(reference[side])) {
    data.offsets.popper[opSide] = floor(reference[side]);
  }
  return data;
}
function toValue(str, measurement, popperOffsets, referenceOffsets) {
  var split = str.match(/((?:\-|\+)?\d*\.?\d*)(.*)/);
  var value = +split[1];
  var unit = split[2];
  if (!value) {
    return str;
  }
  if (unit.indexOf("%") === 0) {
    var element = void 0;
    switch (unit) {
      case "%p":
        element = popperOffsets;
        break;
      case "%":
      case "%r":
      default:
        element = referenceOffsets;
    }
    var rect = getClientRect(element);
    return rect[measurement] / 100 * value;
  } else if (unit === "vh" || unit === "vw") {
    var size = void 0;
    if (unit === "vh") {
      size = Math.max(document.documentElement.clientHeight, window.innerHeight || 0);
    } else {
      size = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
    }
    return size / 100 * value;
  } else {
    return value;
  }
}
function parseOffset(offset2, popperOffsets, referenceOffsets, basePlacement) {
  var offsets = [0, 0];
  var useHeight = ["right", "left"].indexOf(basePlacement) !== -1;
  var fragments = offset2.split(/(\+|\-)/).map(function(frag) {
    return frag.trim();
  });
  var divider = fragments.indexOf(find(fragments, function(frag) {
    return frag.search(/,|\s/) !== -1;
  }));
  if (fragments[divider] && fragments[divider].indexOf(",") === -1) {
    console.warn("Offsets separated by white space(s) are deprecated, use a comma (,) instead.");
  }
  var splitRegex = /\s*,\s*|\s+/;
  var ops = divider !== -1 ? [
    fragments.slice(0, divider).concat([fragments[divider].split(splitRegex)[0]]),
    [fragments[divider].split(splitRegex)[1]].concat(fragments.slice(divider + 1))
  ] : [fragments];
  ops = ops.map(function(op, index2) {
    var measurement = (index2 === 1 ? !useHeight : useHeight) ? "height" : "width";
    var mergeWithPrevious = false;
    return op.reduce(function(a, b) {
      if (a[a.length - 1] === "" && ["+", "-"].indexOf(b) !== -1) {
        a[a.length - 1] = b;
        mergeWithPrevious = true;
        return a;
      } else if (mergeWithPrevious) {
        a[a.length - 1] += b;
        mergeWithPrevious = false;
        return a;
      } else {
        return a.concat(b);
      }
    }, []).map(function(str) {
      return toValue(str, measurement, popperOffsets, referenceOffsets);
    });
  });
  ops.forEach(function(op, index2) {
    op.forEach(function(frag, index22) {
      if (isNumeric(frag)) {
        offsets[index2] += frag * (op[index22 - 1] === "-" ? -1 : 1);
      }
    });
  });
  return offsets;
}
function offset(data, _ref) {
  var offset2 = _ref.offset;
  var placement = data.placement;
  var _data$offsets = data.offsets;
  var popper = _data$offsets.popper;
  var reference = _data$offsets.reference;
  var basePlacement = placement.split("-")[0];
  var offsets = void 0;
  if (isNumeric(+offset2)) {
    offsets = [+offset2, 0];
  } else {
    offsets = parseOffset(offset2, popper, reference, basePlacement);
  }
  if (basePlacement === "left") {
    popper.top += offsets[0];
    popper.left -= offsets[1];
  } else if (basePlacement === "right") {
    popper.top += offsets[0];
    popper.left += offsets[1];
  } else if (basePlacement === "top") {
    popper.left += offsets[0];
    popper.top -= offsets[1];
  } else if (basePlacement === "bottom") {
    popper.left += offsets[0];
    popper.top += offsets[1];
  }
  data.popper = popper;
  return data;
}
function preventOverflow(data, options2) {
  var boundariesElement = options2.boundariesElement || getOffsetParent(data.instance.popper);
  if (data.instance.reference === boundariesElement) {
    boundariesElement = getOffsetParent(boundariesElement);
  }
  var boundaries = getBoundaries(data.instance.popper, data.instance.reference, options2.padding, boundariesElement, data.positionFixed);
  options2.boundaries = boundaries;
  var order = options2.priority;
  var popper = data.offsets.popper;
  var check = {
    primary: function primary(placement) {
      var value = popper[placement];
      if (popper[placement] < boundaries[placement] && !options2.escapeWithReference) {
        value = Math.max(popper[placement], boundaries[placement]);
      }
      return defineProperty({}, placement, value);
    },
    secondary: function secondary(placement) {
      var mainSide = placement === "right" ? "left" : "top";
      var value = popper[mainSide];
      if (popper[placement] > boundaries[placement] && !options2.escapeWithReference) {
        value = Math.min(popper[mainSide], boundaries[placement] - (placement === "right" ? popper.width : popper.height));
      }
      return defineProperty({}, mainSide, value);
    }
  };
  order.forEach(function(placement) {
    var side = ["left", "top"].indexOf(placement) !== -1 ? "primary" : "secondary";
    popper = _extends({}, popper, check[side](placement));
  });
  data.offsets.popper = popper;
  return data;
}
function shift(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var shiftvariation = placement.split("-")[1];
  if (shiftvariation) {
    var _data$offsets = data.offsets;
    var reference = _data$offsets.reference;
    var popper = _data$offsets.popper;
    var isVertical = ["bottom", "top"].indexOf(basePlacement) !== -1;
    var side = isVertical ? "left" : "top";
    var measurement = isVertical ? "width" : "height";
    var shiftOffsets = {
      start: defineProperty({}, side, reference[side]),
      end: defineProperty({}, side, reference[side] + reference[measurement] - popper[measurement])
    };
    data.offsets.popper = _extends({}, popper, shiftOffsets[shiftvariation]);
  }
  return data;
}
function hide(data) {
  if (!isModifierRequired(data.instance.modifiers, "hide", "preventOverflow")) {
    return data;
  }
  var refRect = data.offsets.reference;
  var bound = find(data.instance.modifiers, function(modifier) {
    return modifier.name === "preventOverflow";
  }).boundaries;
  if (refRect.bottom < bound.top || refRect.left > bound.right || refRect.top > bound.bottom || refRect.right < bound.left) {
    if (data.hide === true) {
      return data;
    }
    data.hide = true;
    data.attributes["x-out-of-boundaries"] = "";
  } else {
    if (data.hide === false) {
      return data;
    }
    data.hide = false;
    data.attributes["x-out-of-boundaries"] = false;
  }
  return data;
}
function inner(data) {
  var placement = data.placement;
  var basePlacement = placement.split("-")[0];
  var _data$offsets = data.offsets;
  var popper = _data$offsets.popper;
  var reference = _data$offsets.reference;
  var isHoriz = ["left", "right"].indexOf(basePlacement) !== -1;
  var subtractLength = ["top", "left"].indexOf(basePlacement) === -1;
  popper[isHoriz ? "left" : "top"] = reference[basePlacement] - (subtractLength ? popper[isHoriz ? "width" : "height"] : 0);
  data.placement = getOppositePlacement(placement);
  data.offsets.popper = getClientRect(popper);
  return data;
}
var modifiers = {
  shift: {
    order: 100,
    enabled: true,
    fn: shift
  },
  offset: {
    order: 200,
    enabled: true,
    fn: offset,
    offset: 0
  },
  preventOverflow: {
    order: 300,
    enabled: true,
    fn: preventOverflow,
    priority: ["left", "right", "top", "bottom"],
    padding: 5,
    boundariesElement: "scrollParent"
  },
  keepTogether: {
    order: 400,
    enabled: true,
    fn: keepTogether
  },
  arrow: {
    order: 500,
    enabled: true,
    fn: arrow,
    element: "[x-arrow]"
  },
  flip: {
    order: 600,
    enabled: true,
    fn: flip,
    behavior: "flip",
    padding: 5,
    boundariesElement: "viewport"
  },
  inner: {
    order: 700,
    enabled: false,
    fn: inner
  },
  hide: {
    order: 800,
    enabled: true,
    fn: hide
  },
  computeStyle: {
    order: 850,
    enabled: true,
    fn: computeStyle,
    gpuAcceleration: true,
    x: "bottom",
    y: "right"
  },
  applyStyle: {
    order: 900,
    enabled: true,
    fn: applyStyle,
    onLoad: applyStyleOnLoad,
    gpuAcceleration: void 0
  }
};
var Defaults = {
  placement: "bottom",
  positionFixed: false,
  eventsEnabled: true,
  removeOnDestroy: false,
  onCreate: function onCreate() {
  },
  onUpdate: function onUpdate() {
  },
  modifiers
};
function requestAnimation$1(task) {
  if ("requestAnimationFrame" in window) {
    return window.requestAnimationFrame(task);
  }
  setTimeout(task, 16);
}
var Popper = function() {
  function Popper2(reference, popper) {
    var _this = this;
    var options2 = arguments.length > 2 && arguments[2] !== void 0 ? arguments[2] : {};
    classCallCheck(this, Popper2);
    this.scheduleUpdate = function() {
      return requestAnimation$1(_this.update);
    };
    this.update = debounce$1(this.update.bind(this));
    this.defaultOptions = options2;
    this.options = _extends({}, Popper2.Defaults, options2);
    this.state = {
      isDestroyed: false,
      isCreated: false,
      scrollParents: []
    };
    this.reference = reference && reference.jquery ? reference[0] : reference;
    this.popper = popper && popper.jquery ? popper[0] : popper;
    this.updateModifiers();
    this.update();
    var eventsEnabled = this.options.eventsEnabled;
    if (eventsEnabled) {
      this.enableEventListeners();
    }
    this.state.eventsEnabled = eventsEnabled;
  }
  createClass(Popper2, [
    {
      key: "updateModifiers",
      value: function updateModifiers$$1() {
        return updateModifiers.call(this);
      }
    },
    {
      key: "update",
      value: function update$$1() {
        return update$1.call(this);
      }
    },
    {
      key: "destroy",
      value: function destroy$$1() {
        return destroy$1.call(this);
      }
    },
    {
      key: "enableEventListeners",
      value: function enableEventListeners$$1() {
        return enableEventListeners.call(this);
      }
    },
    {
      key: "disableEventListeners",
      value: function disableEventListeners$$1() {
        return disableEventListeners.call(this);
      }
    }
  ]);
  return Popper2;
}();
Popper.Utils = (typeof window !== "undefined" ? window : global).PopperUtils;
Popper.placements = placements;
Popper.Defaults = Defaults;
const DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: "top",
  triggerOnce: false,
  content: "",
  disabled: false,
  trigger: "hover focus",
  offset: 0,
  equalWidth: false,
  type: "dropdown",
  preventOverflow: false,
  getContainer: null,
  maxWidth: null
};
class Pop {
  constructor(reference, options2) {
    options2 = utils.extend({}, DEFAULT_OPTIONS, options2);
    this.reference = reference;
    this.options = options2;
    const triggerEvents = typeof options2.trigger === "string" ? options2.trigger.split(" ").filter((trigger) => {
      return ["click", "hover", "focus", "manual", "contextMenu"].indexOf(trigger) !== -1;
    }) : [];
    this.isOpen = false;
    this.arrowSelector = options2.arrowSelector;
    this.innerSelector = options2.innerSelector;
    this.triggerEvents = [];
    if (options2.content.nodeType === 1) {
      options2.content.style.display = "none";
    }
    this.setEventListeners(triggerEvents, options2);
  }
  create(reference, template, content) {
    const popGenerator = window.document.createElement("div");
    popGenerator.innerHTML = template;
    const popNode = popGenerator.childNodes[0];
    const allowHtml = this.options.html;
    popNode.id = `pop_${Math.random().toString(36).substr(2, 10)}`;
    const contentNode = popGenerator.querySelector(this.innerSelector);
    if (content.nodeType === 1) {
      if (allowHtml)
        contentNode.appendChild(content);
      content.style.display = "block";
    } else if (utils.isFunction(content)) {
      const contentText = content.call(reference);
      if (allowHtml) {
        contentNode.innerHTML = contentText;
      } else {
        contentNode.innerText = contentText;
      }
    } else if (allowHtml) {
      contentNode.innerHTML = content;
    } else {
      contentNode.innerText = content;
    }
    return popNode;
  }
  updateContent(content) {
    this.options.content = content;
    if (!this.popNode || content == void 0) {
      return;
    }
    const contentNode = this.popNode.querySelector(this.innerSelector);
    const allowHtml = this.options.html;
    if (content.nodeType === 1) {
      if (allowHtml)
        contentNode.replaceChild(content, contentNode.firstChild);
      content.style.display = "block";
    } else if (allowHtml) {
      contentNode.innerHTML = content;
    } else {
      contentNode.innerText = content;
    }
    this.update();
  }
  initPopNode() {
    let reference = this.reference;
    let options2 = this.options;
    const content = options2.content || reference.getAttribute("content");
    if (!content) {
      return this;
    }
    const popNode = this.create(reference, options2.template, content, options2.html);
    popNode.setAttribute("aria-describedby", popNode.id);
    this.reference.setAttribute("aria-describe", popNode.id);
    const container = this.findContainer();
    container.appendChild(popNode);
    if (options2.class) {
      utils.addClass(popNode, options2.class);
    }
    if (options2.className) {
      utils.addClass(popNode, options2.className);
    }
    const contentNode = popNode.querySelector(this.innerSelector);
    if (contentNode && options2.maxWidth) {
      contentNode.style.maxWidth = `${options2.maxWidth}px`;
    }
    this.popNode = popNode;
    this.popNode.setAttribute("aria-hidden", "true");
    if (this.options.trigger.indexOf("hover") > -1) {
      this.setPopNodeEvent();
    }
  }
  initPopper() {
    let reference = this.reference;
    let options2 = this.options;
    let popNode = this.popNode;
    const container = this.findContainer();
    let modifiers2 = {
      computeStyle: {
        gpuAcceleration: false
      },
      arrow: {
        enabled: false
      },
      inner: {
        enabled: false
      },
      preventOverflow: {
        boundariesElement: "window",
        enabled: true
      }
    };
    if (this.options.offset) {
      modifiers2.offset = {
        enabled: true,
        offset: this.options.offset
      };
    }
    if (this.options.preventOverflow && container.tagName != "BODY" && container.tagName != "HTML") {
      modifiers2.hide = {
        enabled: false
      };
      modifiers2.flip = {
        boundariesElement: container,
        enabled: true
      };
      modifiers2.preventOverflow = {
        enabled: false
      };
    }
    if (this.options.trigger == "contextMenu") {
      modifiers2.flip = {
        enabled: false
      };
    }
    let popperOptions = {
      placement: options2.placement,
      modifiers: modifiers2
    };
    this.popperOptions = popperOptions;
    this.popperInstance = new Popper(reference, popNode, popperOptions);
  }
  disabled() {
    this.options.disabled = true;
  }
  enabled() {
    this.options.disabled = false;
  }
  show(event) {
    if (this.hideTimeout)
      clearTimeout(this.hideTimeout);
    if (this.hideTimeout2)
      clearTimeout(this.hideTimeout2);
    if (this.options.events && utils.isFunction(this.options.events.show)) {
      this.options.events.show(event);
    }
    if (this.isOpen || this.options.disabled) {
      return this;
    }
    this.isOpen = true;
    if (!this.popNode) {
      this.initPopNode();
    }
    if (!this.popperInstance) {
      this.initPopper();
    }
    this.popperInstance.enableEventListeners();
    if (!this.popNode) {
      return;
    }
    if (this.options.equalWidth) {
      this.popNode.style.width = `${this.reference.clientWidth}px`;
    }
    this.popNode.style.display = "";
    utils.addClass(this.reference, "h-pop-trigger");
    this.showTimeout = setTimeout(() => {
      this.popNode.setAttribute("aria-hidden", "false");
      this.popperInstance.update();
    }, 0);
    return this;
  }
  update() {
    if (this.popperInstance) {
      this.popperInstance.update();
    }
  }
  hide() {
    if (this.showTimeout)
      clearTimeout(this.showTimeout);
    if (this.hideTimeout)
      clearTimeout(this.hideTimeout);
    if (this.isOpen === false) {
      return;
    }
    if (!document.body.contains(this.popNode)) {
      return;
    }
    if (!this.popNode)
      return this;
    if (!this.popperInstance)
      return this;
    this.hideTimeout = setTimeout(() => {
      utils.removeClass(this.reference, "h-pop-trigger");
      if (this.options.events && utils.isFunction(this.options.events.hide)) {
        this.options.events.hide.call(null);
      }
      if (this.popNode) {
        this.popNode.setAttribute("aria-hidden", "true");
      }
      this.isOpen = false;
      this.hideTimeout2 = setTimeout(() => {
        if (this.popNode) {
          this.popNode.style.display = "none";
          if (this.popperInstance) {
            this.popperInstance.disableEventListeners();
          }
        }
      }, 300);
    }, this.options.delay);
    return this;
  }
  destory() {
    if (this.documentHandler) {
      document.removeEventListener("click", this.documentHandler);
      document.removeEventListener("contextmenu", this.documentHandler);
    }
    if (this.popperInstance) {
      this.popperInstance.destroy();
    }
    this.triggerEvents.forEach(({ event, func: func2 }) => {
      this.reference.removeEventListener(event, func2, event == "focus" || event == "blur");
    });
    this.triggerEvents = [];
    if (this.popNode) {
      this.hide();
      this.popNode.parentNode.removeChild(this.popNode);
      this.popNode = null;
    }
    return this;
  }
  findContainer() {
    let container = this.options.container;
    if (typeof container === "string") {
      container = window.document.querySelector(container);
    } else if (this.options.getContainer) {
      container = this.options.getContainer(this.reference);
    } else if (container === false) {
      container = document.body;
    }
    return container;
  }
  setEventListeners(triggerEvents) {
    let reference = this.reference;
    const directtriggerEvents = [];
    const oppositetriggerEvents = [];
    triggerEvents.forEach((event) => {
      switch (event) {
        case "hover":
          directtriggerEvents.push("mouseenter");
          oppositetriggerEvents.push("mouseleave");
          break;
        case "focus":
          directtriggerEvents.push("focus");
          oppositetriggerEvents.push("blur");
          break;
        case "click":
          directtriggerEvents.push("click");
          if (!this.options.triggerOnce)
            oppositetriggerEvents.push("click");
          break;
        case "contextMenu":
          directtriggerEvents.push("contextmenu");
          oppositetriggerEvents.push("click");
          break;
      }
    });
    directtriggerEvents.forEach((event) => {
      const func2 = (evt) => {
        if (evt.type == "contextmenu") {
          evt.preventDefault();
          if (window.getSelection) {
            window.getSelection().removeAllRanges();
          } else {
            document.selection.empty();
          }
          let rect = reference.getBoundingClientRect();
          this.options.offset = `${evt.clientX - rect.x}, -${rect.bottom - evt.clientY - 10}`;
          if (this.popperInstance) {
            this.popperInstance.defaultOptions.modifiers.offset = {
              enabled: true,
              offset: this.options.offset
            };
            this.popperInstance.updateModifiers();
            this.popperInstance.update();
          }
        }
        if (event == "click" && this.isOpen === true) {
          return;
        }
        evt.usedByPop = true;
        this.show(evt);
      };
      this.triggerEvents.push({
        event,
        func: func2
      });
      reference.addEventListener(event, func2, event == "focus");
    });
    oppositetriggerEvents.forEach((event) => {
      const func2 = (evt) => {
        if (evt.usedByPop === true) {
          return;
        }
        this.hide();
      };
      this.triggerEvents.push({
        event,
        func: func2
      });
      reference.addEventListener(event, func2, event == "blur");
    });
    if (triggerEvents.indexOf("manual") == -1) {
      this.documentHandler = (e) => {
        if (!this.popNode || e.target.parentNode == null)
          return;
        if (!this.isOpen || reference.contains(e.target) || this.popNode.contains(e.target)) {
          return false;
        }
        let targetReference = e.reference;
        if (reference && this.popNode.contains(targetReference)) {
          return false;
        }
        let target = e.target;
        while (target && target.tagName != "BODY" && target.tagName != "HTML" && !target.getAttribute("aria-describedby") && target.parentNode) {
          target = target.parentNode;
        }
        if (target.tagName != "BODY" && target.tagName != "HTML") {
          let targetTrigger = document.body.querySelector(`[aria-describe="${target.getAttribute("aria-describedby")}"]`);
          if (targetTrigger && this.popNode.contains(targetTrigger)) {
            return false;
          }
        }
        this.hide();
      };
      document.addEventListener("click", this.documentHandler);
      document.addEventListener("contextmenu", this.documentHandler);
    }
  }
  setPopNodeEvent() {
    this.popNode.addEventListener("mouseenter", (event) => {
      this.show(event);
    });
    this.popNode.addEventListener("mouseout", (event) => {
      const relatedreference = event.relatedreference || event.toElement || event.relatedTarget;
      if (!this.popNode.contains(relatedreference) && relatedreference != this.reference && !this.reference.contains(relatedreference)) {
        this.hide();
      }
    });
  }
}
const Default$5 = {
  trigger: "click",
  html: true,
  placement: "bottom-start",
  template: `<div role="select" class="h-dropdown"><div class="h-dropdown-inner"></div></div>`,
  innerSelector: ".h-dropdown-inner",
  preventOverflow: true,
  type: "dropdown",
  delay: 0,
  offset: "0, 1"
};
class Dropdown extends Pop {
  constructor(el, param) {
    param = utils.extend({}, Default$5, {}, param);
    if (!param.container) {
      param.getContainer = function(el2) {
        let container = el2 || document.body;
        while (container && container.tagName != "BODY" && container.tagName != "HTML" && !utils.hasClass(container, "h-dropdown-common-container")) {
          container = container.parentNode;
        }
        return container;
      };
    }
    super(el, param);
  }
}
class Draggable {
  constructor(element, options2 = {}) {
    this.isDragging = false;
    this.options = options2;
    this.element = element;
    if (this.element) {
      this.init();
    }
    this.moveFn = (event) => {
      this.move(event);
    };
    this.upFn = (event) => {
      this.up(event);
    };
    this.clickFn = (event) => {
      this.click(event);
    };
  }
  init() {
    const element = this.element;
    element.addEventListener("mousedown", (event) => {
      this.mousedown(event);
    });
    if (this.options.container) {
      this.options.container.addEventListener("mousedown", (event) => {
        this.mousedown(event);
      });
    }
  }
  mousedown(event) {
    if (this.isDragging)
      return;
    document.onselectstart = () => {
      return false;
    };
    document.ondragstart = () => {
      return false;
    };
    document.body.addEventListener("mousemove", this.moveFn);
    document.body.addEventListener("mouseup", this.upFn);
    document.body.addEventListener("click", this.clickFn);
    this.isDragging = true;
    if (this.options.start) {
      this.options.start(event);
    }
  }
  move(event) {
    if (this.options.drag) {
      this.options.drag(event);
    }
  }
  click(event) {
    event.stopPropagation();
    event.preventDefault();
  }
  up(event) {
    document.body.removeEventListener("mousemove", this.moveFn);
    document.body.removeEventListener("mouseup", this.upFn);
    setTimeout(() => {
      document.body.removeEventListener("click", this.clickFn);
    }, 200);
    document.onselectstart = null;
    document.ondragstart = null;
    this.isDragging = false;
    if (this.options.end) {
      this.options.end(event);
    }
  }
  destroy() {
    document.removeEventListener("mousemove", this.moveFn);
    document.removeEventListener("mouseup", this.upFn);
    document.removeEventListener("click", this.clickFn);
    document.onselectstart = null;
    document.ondragstart = null;
  }
}
const Default$4 = {
  type: "dialog",
  title: "",
  content: "",
  style: null,
  class: null,
  buttons: [],
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false,
  draggable: false
};
const TYPE = {
  MODAL: "h-modal",
  MESSAGE: "h-message",
  NOTICE: "h-notice"
};
const notifyCls = "h-notify";
const notifyHasCloseCls = "h-notify-has-close";
const notifyBodyCls = "h-notify-body";
const notifyContainerCls = "h-notify-container";
const notifyWrapCls = "h-notify-wrap";
const contentWrapCls = "h-notify-content";
const notifyCloseCls = "h-notify-close";
const notifyMaskCls = "h-notify-mask";
const notifyShowCls = "h-notify-show";
const closeIcon = "h-icon-close";
class Notify {
  constructor(orignalparam) {
    const that = this;
    this.mouseoverEvent = false;
    this.closeTimeout = false;
    let param = this.param = utils.extend({}, Default$4, orignalparam, true);
    param.hasFooter = utils.isArray(param.buttons) && param.buttons.length > 0 && !param.component;
    let footerHtml = "";
    let headerHtml = "";
    let MaskHtml = "";
    let closeIconHtml = "";
    if (param.hasMask)
      MaskHtml = `<div class="${notifyMaskCls}"></div>`;
    if (param.hasCloseIcon)
      closeIconHtml = `<span class="${notifyCloseCls} ${closeIcon}"></span>`;
    if (param.title)
      headerHtml = `<header class="${param.type}-header">${param.title}</header>`;
    if (param.hasFooter) {
      const buttons = [];
      for (const button of param.buttons) {
        if (utils.isObject(button)) {
          let className = button.className || "";
          if (button.style)
            className += ` h-btn-${button.style}`;
          buttons.push(`<button type="button" class="h-btn ${className}" attr="${button.type}">${button.name}</button>`);
        }
      }
      footerHtml = `<footer class="${param.type}-footer">${buttons.join("")}</footer>`;
    }
    const elCls = param.type === TYPE.MODAL && param.hasMask ? notifyWrapCls : "";
    const html = `
    ${MaskHtml}
    <div class="${elCls}">
      <div class="${notifyContainerCls}">
        <div class="${contentWrapCls}">
          ${closeIconHtml}
          ${headerHtml}
          <div class="${notifyBodyCls}"></div>
          ${footerHtml}
        </div>
      </div>
    </div>`;
    let el = document.createElement(`div`);
    utils.addClass(el, notifyCls);
    if (param.hasMask) {
      utils.addClass(el, "h-notify-has-mask");
    } else {
      utils.addClass(el, "h-notify-no-mask");
    }
    if (param.className) {
      utils.addClass(el, param.className);
    }
    el.innerHTML = html;
    let $notifyBody = this.$notifyBody = el.querySelector(`.${notifyBodyCls}`);
    let $container = this.$container = el.querySelector(`.${notifyContainerCls}`);
    this.el = el;
    $notifyBody.innerHTML = param.content;
    if (param.hasCloseIcon) {
      utils.addClass(el, notifyHasCloseCls);
    }
    if (param.type) {
      utils.addClass(el, param.type);
    }
    if (param.height) {
      $notifyBody.style.height = `${param.height}px`;
    }
    if (param.maxheight) {
      $notifyBody.style.maxHeight = `${param.maxheight}px`;
    }
    if (param.style) {
      utils.addClass(el, param.style);
    }
    if (param.width) {
      $container.style.width = `${param.width}px`;
    }
    if (param.draggable) {
      utils.addClass(el, "h-notify-draggable");
      let x = 0;
      let y = 0;
      let rect = null;
      let header = $container.querySelector(".h-modal-header");
      if (header) {
        this.drag = new Draggable(header, {
          start(event) {
            x = event.clientX;
            y = event.clientY;
            rect = $container.getBoundingClientRect();
            $container.style.left = `${rect.left}px`;
            $container.style.top = `${rect.top}px`;
            $container.style.transform = "initial";
            $container.style.transition = "none";
          },
          drag(event) {
            let offsetX = event.clientX - x;
            let offsetY = event.clientY - y;
            $container.style.left = `${rect.left + offsetX}px`;
            $container.style.top = `${rect.top + offsetY}px`;
          }
        });
      }
    }
    let parentDom = param.parent || document.body;
    if (param.type == "h-notice" && parentDom.hasChildNodes()) {
      parentDom.insertBefore(el, parentDom.firstChild);
    } else {
      parentDom.appendChild(el);
    }
    let focusClicked = document.querySelector(":focus");
    if (focusClicked && param.type === TYPE.MODAL) {
      focusClicked.blur();
    }
    if (param.hasCloseIcon) {
      el.querySelector(`.${notifyCloseCls}`).onclick = function() {
        that.close();
      };
    }
    if (param.hasFooter) {
      let buttons = el.querySelectorAll(`.${notifyContainerCls} .${param.type}-footer>button`);
      for (let button of buttons) {
        button.onclick = function(event) {
          let attr = event.target.getAttribute("attr");
          if (attr) {
            if (attr == "cancel") {
              that.close();
            }
            that.trigger(attr);
          }
        };
      }
    }
    window.setTimeout(() => {
      utils.addClass(el, notifyShowCls);
      if (param.hasMask) {
        let body = document.documentElement;
        let scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollWidth}px`;
      }
    }, 20);
    if (param.events && utils.isFunction(param.events.$init)) {
      param.events.$init.call(null, that, $notifyBody);
    }
    if (param.timeout) {
      el.addEventListener("mouseover", () => {
        this.mouseoverEvent = true;
      });
      el.addEventListener("mouseleave", () => {
        this.mouseoverEvent = false;
        if (this.closeTimeout) {
          that.close();
        }
      });
      window.setTimeout(() => {
        this.closeTimeout = true;
        if (!this.mouseoverEvent) {
          that.close();
        }
      }, param.timeout);
    }
    if (param.closeOnMask && param.hasMask) {
      el.querySelector(`.${notifyMaskCls}`).onclick = () => {
        this.close();
      };
      let modalBody = el.querySelector(`.${notifyWrapCls}`);
      if (modalBody) {
        modalBody.onclick = (event) => {
          if (event.target == modalBody) {
            this.close();
          }
        };
      }
    }
    this.popstateEvent = () => {
      this.close();
    };
    window.addEventListener("popstate", this.popstateEvent);
  }
  trigger(event, ...data) {
    let param = this.param;
    if (param.events && utils.isFunction(param.events[event])) {
      param.events[event].call(null, this, ...data);
    }
  }
  close() {
    const el = this.el;
    if (this.drag) {
      this.drag.destroy();
    }
    let body = document.documentElement;
    body.style.overflow = "";
    body.style.paddingRight = "";
    this.trigger("$close");
    window.removeEventListener("popstate", this.popstateEvent);
    utils.removeClass(el, notifyShowCls);
    el.addEventListener("transitionend", (event) => {
      if (event.target == this.$container) {
        utils.removeDom(el);
      }
    });
    setTimeout(() => {
      utils.removeDom(el);
    }, 400);
  }
}
function Notify$1(param) {
  return new Notify(param);
}
const prefixCls$e = "h-message";
let Default$3 = {
  timeout: 3e3
};
const iconColor$1 = {
  info: "blue",
  success: "green",
  warn: "yellow",
  error: "red",
  loading: "blue"
};
let messageDom = null;
function Message(content, timeout, type, onClose) {
  if (!messageDom) {
    messageDom = document.createElement("div");
    utils.addClass(messageDom, `${prefixCls$e}-container`);
    document.body.appendChild(messageDom);
  }
  let param = {
    type: prefixCls$e,
    content: `<div><i class="h-icon-${type} ${iconColor$1[type]}-color"></i>${content}</div>`,
    event: {
      close: onClose
    },
    timeout,
    parent: messageDom
  };
  param = utils.extend({}, Default$3, param, true);
  if (param.timeout < 1)
    param.hasCloseIcon = true;
  return Notify$1(param);
}
function message(content, timeout, onClose) {
  if (utils.isObject(content)) {
    return Message(content.text, content.timeout, content.type || "info", content.onClose);
  }
  return Message(content, timeout, "info", onClose);
}
message.info = (content, timeout, onClose) => {
  return Message(content, timeout, "info", onClose);
};
message.success = (content, timeout, onClose) => {
  return Message(content, timeout, "success", onClose);
};
message.warn = (content, timeout, onClose) => {
  return Message(content, timeout, "warn", onClose);
};
message.error = (content, timeout, onClose) => {
  return Message(content, timeout, "error", onClose);
};
message.loading = (content, timeout, onClose) => {
  return Message(content, timeout, "loading", onClose);
};
message.config = (options2) => {
  if (options2.timeout != void 0) {
    Default$3.timeout = options2.timeout;
  }
};
const prefix$s = "h-categorypicker";
const topMenu = "-------";
const _sfc_main$Z = {
  name: "HCategoryPicker",
  components: { Checkbox },
  mixins: [Locale],
  emits: ["update:modelValue", "input", "update", "clear", "loadDataSuccess", "change"],
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: "key"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: true
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    showChildCount: {
      type: Boolean,
      default: false
    },
    modelValue: [Number, String, Array, Object],
    config: String,
    className: String
  },
  data() {
    return {
      dropdown: null,
      globalloading: false,
      loading: true,
      objects: [],
      object: null,
      tabs: [
        {
          title: this.hlang("h.categoryModal.total"),
          key: topMenu
        }
      ],
      tab: topMenu,
      categoryDatas: [],
      categoryObj: {},
      searchValue: null,
      tabIndex: 0,
      list: [],
      valueBak: null
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang("h.categoryPicker.placeholder");
    },
    param() {
      if (this.config) {
        return utils.extend({}, func.getOption("categoryPicker.default"), func.getOption(`categoryPicker.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, func.getOption("categoryPicker.default"), this.option);
      }
    },
    categoryCls() {
      return {
        [`${prefix$s}`]: true,
        [`${prefix$s}-input-border`]: true,
        [`${prefix$s}-no-autosize`]: true,
        [`${prefix$s}-multiple`]: this.multiple,
        [`${prefix$s}-disabled`]: this.disabled
      };
    },
    groupCls() {
      return {
        [`${prefix$s}-group`]: true,
        [`${prefix$s}-multiple`]: this.multiple,
        [`${this.className}-dropdown`]: !!this.className
      };
    }
  },
  watch: {
    disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    },
    "option.datas": function() {
      this.initCategoryDatas();
    },
    modelValue() {
      if (this.valueBak != this.modelValue) {
        this.parse();
        this.tab = topMenu;
        this.tabs = [
          {
            title: this.hlang("h.categoryModal.total"),
            key: topMenu
          }
        ];
        this.list = this.categoryDatas;
      }
    }
  },
  mounted() {
    this.init();
    this.initCategoryDatas();
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let el = this.el = this.$el.querySelector(".h-categorypicker-show");
        this.content = this.$el.querySelector(".h-categorypicker-group");
        let that = this;
        this.dropdown = new Dropdown(el, {
          trigger: "click",
          content: this.content,
          disabled: this.disabled,
          events: {
            show() {
              that.isShow = true;
            }
          }
        });
      });
    },
    refresh() {
      this.tab = topMenu;
      this.tabs = [
        {
          title: this.hlang("h.categoryModal.total"),
          key: topMenu
        }
      ];
      this.initCategoryDatas();
    },
    remove(obj) {
      this.objects.splice(this.objects.indexOf(obj), 1);
      this.setvalue("remove");
    },
    clear() {
      this.object = null;
      this.setvalue("clear");
    },
    parse() {
      if (this.multiple) {
        let os = [];
        if (utils.isArray(this.modelValue) && this.modelValue.length > 0) {
          for (let v of this.modelValue) {
            os.push(this.getValue(v));
          }
        }
        this.objects = os;
        this.object = null;
      } else {
        this.object = this.getValue(this.modelValue);
        this.objects = [];
      }
    },
    getValue(item) {
      if (utils.isNull(item)) {
        return null;
      }
      if (this.type == "key") {
        return this.categoryObj[item];
      } else {
        return utils.getValue(item, this.param);
      }
    },
    getShow(data) {
      if (this.showAllLevels) {
        data = this.categoryObj[data.key] || data;
        return this.getParentTitle(data).reverse().join("/");
      } else {
        return data.title;
      }
    },
    getParentTitle(data) {
      let list = [data.title];
      if (data.parentKey != null && this.categoryObj[data.parentKey]) {
        list.push(...this.getParentTitle(this.categoryObj[data.parentKey]));
      }
      return list;
    },
    getFullData() {
      if (this.multiple) {
        let datas = [];
        for (let o of this.objects) {
          let data = this.categoryObj[o.key] || this.object;
          datas.push(this.getParent(data));
        }
        return datas;
      } else if (this.object) {
        let data = this.categoryObj[this.object.key] || this.object;
        return this.getParent(data);
      }
      return null;
    },
    getParent(data) {
      let list = [utils.copy(data.value)];
      if (data.parentKey != null && this.categoryObj[data.parentKey]) {
        list.push(...this.getParent(this.categoryObj[data.parentKey]));
      }
      return list;
    },
    dispose() {
      if (this.multiple) {
        return this.objects.map((item) => this.type == "key" ? item.key : item.value).filter((item) => {
          return item !== void 0;
        }).map((item) => this.type == "key" ? item : this.getDisposeValue(item));
      } else if (this.object) {
        return this.type == "key" ? this.object.key : this.getDisposeValue(this.object.value);
      }
      return null;
    },
    getDisposeValue(item) {
      let obj = __spreadValues({}, item);
      delete obj[this.param.childrenName];
      return obj;
    },
    setvalue(trigger) {
      let value = this.dispose();
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.$emit("change", utils.copy(this.multiple ? this.objects : this.object));
      if (trigger != "clear") {
        this.valueBak = value;
      }
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdownUpdate();
    },
    initCategoryDatas() {
      let datas = [];
      if (utils.isArray(this.param.datas)) {
        datas = this.param.datas;
      } else if (utils.isFunction(this.param.datas)) {
        datas = this.param.datas.apply(this.param);
      }
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        let loadData = this.param.getTotalDatas || this.param.getDatas;
        let param = [
          (result) => {
            this.initDatas(utils.copy(result));
            this.globalloading = false;
            this.$emit("loadDataSuccess");
          },
          () => {
            this.globalloading = false;
          }
        ];
        if (this.param.getDatas) {
          param.unshift(null);
        }
        loadData.apply(this.param, param);
      }
      this.initDatas(datas);
    },
    initDatas(datas) {
      let list = utils.copy(datas);
      if (this.param.dataMode == "list" && datas.length > 0) {
        list = utils.generateTree(list, this.param);
      }
      let isWait = utils.isFunction(this.param.getDatas);
      this.categoryDatas = this.initTreeModeData(list, null, isWait, 0);
      this.list = this.categoryDatas;
      this.parse();
    },
    initTreeModeData(list, parentKey, isWait, level) {
      let datas = [];
      for (let data of list) {
        let obj = {
          key: data[this.param.keyName],
          title: data[this.param.titleName],
          value: data,
          parentKey,
          status: {
            level,
            loading: false,
            isWait,
            opened: false,
            selected: false,
            selectable: this.param.selectable ? this.param.selectable(data, level) : data.selectable !== false,
            checkable: this.param.checkable ? this.param.checkable(data, level) : data.checkable !== false
          }
        };
        let children = data[this.param.childrenName] || [];
        obj.children = this.initTreeModeData(children, obj.key, isWait, level + 1);
        this.categoryObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    },
    openNew(data, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (data.children && data.children.length) {
        this.tabIndex = this.tabIndex + 1;
        this.tabs.splice(this.tabIndex);
        this.tabs.push(data);
        this.tab = data.key;
        this.list = data.children;
        if (!this.multiple) {
          this.change(data);
        }
        this.dropdownUpdate();
      } else if (data.status.isWait) {
        data.status.loading = true;
        this.param.getDatas.call(this.param, data.value, (result) => {
          data.children = this.initTreeModeData(result, data.key, true, data.status.level + 1);
          data.status.isWait = false;
          data.status.loading = false;
          data.status.opened = true;
          this.openNew(data);
        }, () => {
          data.status.loading = false;
        });
      } else {
        this.change(data);
      }
    },
    focusTab(tab, index2) {
      this.tab = tab.key;
      this.tabIndex = index2;
      if (tab.key === topMenu) {
        this.list = this.categoryDatas;
      } else {
        this.list = tab.children;
      }
    },
    change(data) {
      if (!this.multiple && data.status.selectable === false) {
        return;
      }
      if (this.multiple && data.status.checkable === false) {
        return;
      }
      if (this.multiple) {
        if (this.objects.length >= this.limit && !this.param.objects.some((item) => item.key === data.key)) {
          message.error(this.hlang("h.categoryPicker.limitWords", {
            size: this.limit
          }));
          return;
        }
        utils.toggleValueByKey(this.objects, "key", data);
      } else {
        this.object = data;
      }
      if (this.multiple) {
        this.dropdownUpdate();
      } else if (!(data.children && data.children.length)) {
        this.dropdown.hide();
      }
      this.setvalue("picker");
    },
    dropdownUpdate() {
      this.$nextTick(() => {
        this.dropdown.update();
      });
    },
    isChecked(data) {
      if (this.multiple) {
        return this.objects.some((item) => item.key == data.key);
      } else {
        return this.object ? this.object.key == data.key : false;
      }
    }
  }
};
const _hoisted_1$K = ["disabled"];
const _hoisted_2$z = { class: "h-categorypicker-show" };
const _hoisted_3$t = {
  key: 0,
  class: "h-categorypicker-multiple-tags"
};
const _hoisted_4$m = ["onClick"];
const _hoisted_5$k = {
  key: 1,
  class: "h-categorypicker-value-single"
};
const _hoisted_6$k = {
  key: 2,
  class: "h-categorypicker-placeholder"
};
const _hoisted_7$e = {
  key: 0,
  class: "h-icon-loading"
};
const _hoisted_8$e = ["onClick"];
const _hoisted_9$9 = { key: 0 };
function _sfc_render$Z(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tabs = resolveComponent("Tabs");
  const _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.categoryCls),
    disabled: $props.disabled
  }, [
    createElementVNode("div", _hoisted_2$z, [
      $props.multiple && $data.objects.length ? (openBlock(), createElementBlock("div", _hoisted_3$t, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.objects, (obj, index2) => {
          return openBlock(), createElementBlock("span", {
            key: index2 + "" + obj.key
          }, [
            createElementVNode("span", null, toDisplayString($options.getShow(obj)), 1),
            !$props.disabled ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "h-icon-close-min",
              onClick: withModifiers(($event) => $options.remove(obj), ["stop"])
            }, null, 8, _hoisted_4$m)) : createCommentVNode("", true)
          ]);
        }), 128))
      ])) : !$props.multiple && $data.object ? (openBlock(), createElementBlock("div", _hoisted_5$k, [
        createElementVNode("span", null, toDisplayString($options.getShow($data.object)), 1),
        $data.object && !$props.disabled ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "h-icon-close",
          onMousedown: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
        }, null, 32)) : createCommentVNode("", true)
      ])) : (openBlock(), createElementBlock("div", _hoisted_6$k, toDisplayString($options.showPlaceholder), 1))
    ]),
    createElementVNode("div", {
      class: normalizeClass($options.groupCls)
    }, [
      createVNode(_component_Tabs, {
        modelValue: $data.tab,
        "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.tab = $event),
        datas: $data.tabs,
        class: "h-categorypicker-tabs",
        "key-name": "key",
        "title-name": "title",
        onChange: $options.focusTab
      }, null, 8, ["modelValue", "datas", "onChange"]),
      createElementVNode("div", {
        class: normalizeClass(["h-categorypicker-ul", { "h-categorypicker-single-picker": !$props.multiple }])
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.list, (data) => {
          return openBlock(), createElementBlock("div", {
            key: data.key,
            class: normalizeClass(["h-categorypicker-item", { "h-categorypicker-item-selected": $data.object && data.key == $data.object.key }])
          }, [
            data.status.loading ? (openBlock(), createElementBlock("i", _hoisted_7$e)) : data.status.checkable && $props.multiple ? (openBlock(), createBlock(_component_Checkbox, {
              key: 1,
              checked: $options.isChecked(data),
              onChange: ($event) => $options.change(data),
              onClick: _cache[2] || (_cache[2] = withModifiers(() => {
              }, ["stop"]))
            }, null, 8, ["checked", "onChange"])) : createCommentVNode("", true),
            createElementVNode("span", {
              class: "h-categorypicker-item-title",
              onClick: ($event) => $options.openNew(data, $event)
            }, [
              createTextVNode(toDisplayString(data.title), 1),
              $props.showChildCount && data.children.length ? (openBlock(), createElementBlock("span", _hoisted_9$9, "(" + toDisplayString(data.children.length) + ")", 1)) : createCommentVNode("", true)
            ], 8, _hoisted_8$e)
          ], 2);
        }), 128))
      ], 2)
    ], 2)
  ], 10, _hoisted_1$K);
}
var CategoryPicker = /* @__PURE__ */ _export_sfc(_sfc_main$Z, [["render", _sfc_render$Z]]);
var manba$1 = { exports: {} };
(function(module) {
  !function(t) {
    module.exports ? module.exports = t() : this.manba = t();
  }(function() {
    var r = { l: "YYYY-MM-DD", ll: "YYYY\u5E74MM\u6708DD\u65E5", k: "YYYY-MM-DD hh:mm", kk: "YYYY\u5E74MM\u6708DD\u65E5 hh\u70B9mm\u5206", kkk: "YYYY\u5E74MM\u6708DD\u65E5 hh\u70B9mm\u5206 q", f: "YYYY-MM-DD hh:mm:ss", ff: "YYYY\u5E74MM\u6708DD\u65E5 hh\u70B9mm\u5206ss\u79D2", fff: "YYYY\u5E74MM\u6708DD\u65E5 hh\u70B9mm\u5206ss\u79D2 \u661F\u671Fw", n: "MM-DD", nn: "MM\u6708DD\u65E5" }, a = 0, o = 36e5, s = 864e5, e = new Date(1970, 0, 1, 0, 0, 0).getTime(), n = ["\u65E5", "\u4E00", "\u4E8C", "\u4E09", "\u56DB", "\u4E94", "\u516D"], i = ["\u4E0A\u5348", "\u4E0B\u5348"];
    function u(t2, e2) {
      return c.initmanba(this, t2, e2), this;
    }
    u.prototype.format = function(t2) {
      var e2 = this.isValid();
      return e2 !== true ? e2 : c.format(this._date, r[t2 = t2 || "l"] || t2);
    }, u.prototype.UTCformat = function(t2) {
      var e2 = this.isValid();
      return e2 !== true ? e2 : c.UTCformat(this._date, r[t2 = t2 || "l"] || t2);
    }, u.prototype.toString = function() {
      var t2 = this.isValid();
      return t2 !== true ? t2 : this._date.toString();
    }, u.prototype.toISOString = function(t2) {
      var e2 = this.isValid();
      if (e2 !== true)
        return e2;
      e2 = 0, t2 = 0 <= (e2 = t2 !== void 0 ? 60 * t2 : -new Date().getTimezoneOffset()) ? "+" : "-";
      return l(this.time() + 60 * e2 * 1e3).UTCformat("yyyy-MM-ddThh:mm:ss") + t2 + c.pad(parseInt(e2 / 60)) + ":" + c.pad(e2 % 60);
    }, u.prototype.toLocalString = function() {
      var t2 = this.isValid();
      if (t2 !== true)
        return t2;
      var e2 = -new Date().getTimezoneOffset(), t2 = 0 <= e2 ? "+" : "-";
      return this.format("yyyy-MM-ddThh:mm:ss") + t2 + c.pad(parseInt(e2 / 60)) + ":" + c.pad(e2 % 60);
    }, u.prototype.distance = function(t2, e2, r2) {
      var a2 = this.isValid();
      if (a2 !== true)
        return a2;
      var n2 = this;
      if (e2 = e2 || l.DAY, (a2 = (t2 = l(t2)).isValid()) !== true)
        return a2;
      switch (e2) {
        case l.MINUTE:
          return Math.floor((n2.time() - t2.time()) / 60 / 1e3);
        case l.HOUR:
          return c.getHours(n2._date) - c.getHours(t2._date);
        case l.DAY:
          return c.getDays(n2._date) - c.getDays(t2._date);
        case l.WEEK:
          return (c.getDays(n2.startOf(l.WEEK, r2)._date) - c.getDays(t2.startOf(l.WEEK, r2)._date)) / 7;
        case l.MONTH:
          return c.getMonths(n2._date) - c.getMonths(t2._date);
        case l.YEAR:
          return n2._date.getYear() - t2._date.getYear();
      }
      return 0;
    }, u.prototype.getWeekOfYear = function(t2) {
      t2 = +(t2 || 0), (isNaN(t2) || 6 < t2) && (t2 = 0);
      var e2 = this.startOf(l.YEAR), t2 = (7 - e2.day() + t2) % 7, e2 = (this.startOf(l.DAY).time() - e2.time()) / 864e5 + 1;
      return Math.ceil((e2 - t2) / 7);
    }, u.prototype.getWeekOfMonth = function(t2) {
      t2 = +(t2 || 0), (isNaN(t2) || 6 < t2) && (t2 = 0);
      var e2 = this.day(), r2 = this.date();
      return Math.ceil((r2 - e2 - 1) / 7) + (t2 <= e2 ? 1 : 0);
    }, u.prototype.isLeapYear = function() {
      var t2 = this.isValid();
      return t2 !== true ? t2 : c.isLeapYear(this.year());
    }, u.prototype.isThisYear = function() {
      var t2 = this.isValid();
      return t2 !== true ? t2 : c.timestamp(this._date);
    }, u.prototype.isBefore = function() {
      var t2 = this.isValid();
      return t2 !== true ? t2 : c.timestamp(this._date);
    }, u.prototype.isAfter = function() {
      var t2 = this.isValid();
      return t2 !== true ? t2 : c.timestamp(this._date);
    }, u.prototype.month = function(t2) {
      var e2 = this.isValid();
      if (e2 !== true)
        return e2;
      return t2 == null ? this._date.getMonth() + 1 : (t2 = parseInt(t2), t2 = this._date.setMonth(t2 - 1), this);
    }, u.prototype.add = function(t2, e2) {
      var r2 = this.isValid();
      if (r2 !== true)
        return r2;
      var a2 = this;
      switch (t2 = parseInt(t2), e2 = e2 || l.DAY) {
        case l.DAY:
          a2.time(a2.time() + t2 * s);
          break;
        case l.MONTH:
          var n2 = a2.date(), i2 = a2.month() + t2;
          a2.month(i2), a2.date() != n2 && (a2.add(-1, l.MONTH), a2.date(a2.endOf(l.MONTH).date()));
          break;
        case l.QUARTER:
          a2.month(a2.month() + 3 * t2);
          break;
        case l.YEAR:
          a2.year(a2.year() + t2);
          break;
        case l.WEEK:
          a2.time(a2.time() + 6048e5 * t2);
          break;
        case l.HOUR:
          a2.time(a2.time() + t2 * o);
          break;
        case l.MINUTE:
          a2.time(a2.time() + 6e4 * t2);
          break;
        case l.SECOND:
          a2.time(a2.time() + 1e3 * t2);
          break;
        case l.TIME:
          a2.time(a2.time() + t2);
      }
      return a2;
    }, u.prototype.clone = function() {
      return new u(this);
    }, u.prototype.endOf = function(t2, e2) {
      var r2 = this.isValid();
      if (r2 !== true)
        return r2;
      r2 = new u(this);
      return t2 = t2 || l.DAY, (r2 = r2.startOf(t2, e2)).add(1, t2), r2.add(-1, l.SECOND), r2;
    }, u.prototype.startOf = function(t2, e2) {
      var r2 = this.isValid();
      if (r2 !== true)
        return r2;
      var a2 = new u(this);
      switch (t2 = t2 || l.DAY) {
        case l.DAY:
          a2.milliseconds(0), a2.seconds(0), a2.minutes(0), a2.hours(0);
          break;
        case l.MONTH:
          a2.date(1), a2 = a2.startOf(l.DAY);
          break;
        case l.QUARTER:
          (a2 = a2.startOf(l.MONTH)).add(-(a2.month() - 1) % 3, l.MONTH);
          break;
        case l.WEEK:
          var a2 = a2.startOf(l.DAY), n2 = (e2 = e2 || l.SUNDAY) == l.SUNDAY ? 0 : 1;
          a2.day() == 0 && n2 == 1 && (n2 = -6), a2.add(-a2.day() + n2, l.DAY);
          break;
        case l.YEAR:
          (a2 = a2.startOf(l.DAY)).month(1), a2.date(1);
          break;
        case l.HOUR:
          a2.time(Math.floor(a2.time() / o) * o);
      }
      return a2;
    }, u.prototype.isValid = function() {
      return !!c.isDate(this._date) || "Invalid Date";
    }, u.prototype.getServerTime = function() {
      return a != 0 ? this.add(a, l.TIME) : this;
    };
    var c = { initmanba: function(t2, e2, r2) {
      var a2 = new Date();
      e2 != null && (c.isNumber(e2) ? a2.setTime(e2) : c.isArray(e2) ? (c.padMonth(e2), a2 = c.initDateWithArray(e2)) : c.isDate(e2) ? a2 = e2 : c.isString(e2) ? a2 = c.parse(e2, r2) : e2 instanceof u && (a2 = new Date(e2.time()))), t2._date = a2;
    }, initDateWithArray: function(t2) {
      return 1 < t2.length ? new Date(new (Function.prototype.bind.apply(Date, [0].concat(t2)))().setFullYear(t2[0])) : new Date();
    }, pad: function(t2, e2) {
      e2 = e2 || 2;
      var r2 = "0";
      return (t2 = String(Math.abs(t2) || 0)).length >= e2 ? t2 : (e2 -= t2.length, (r2 += Array(e2 + 1).join(r2)).slice(0, e2) + String(t2));
    }, parse: function(s2, t2) {
      if (c.isString(t2)) {
        var u2 = { Y: 0, M: 1, D: 1, H: 0, m: 0, S: 0 };
        return t2.replace(/([^YyMDdHhmsS]*?)(([YyMDdHhmsS])\3*)([^YyMDdHhmsS]*?)/g, function(t3, e3, r2, a2, n2, i2, o2) {
          r2 = parseInt(s2.substr(i2 + e3.length, r2.length), 10);
          return a2.toLowerCase() == "m" ? u2[a2] = r2 : u2[a2.toUpperCase()] = r2, "";
        }), u2.M--, e2 = c.initDateWithArray([u2.Y, u2.M, u2.D, u2.H, u2.m, u2.S]);
      }
      var e2, t2 = /^(\d{4,})\-(\d{2})\-(\d{2})\s?\:?(\d{2})?\:?(\d{2})?\:?(\d{2})?$/i.exec(s2);
      if (t2 !== null)
        return t2.shift(), c.padMonth(t2), c.popUndefined(t2), c.initDateWithArray(t2);
      if ((e2 = new Date(s2)) == "Invalid Date")
        throw new Error("Invalid date parse from " + s2);
      return e2;
    }, popUndefined: function(t2) {
      return 0 < t2.length && t2[t2.length - 1] == null ? (t2.pop(), c.popUndefined(t2)) : t2;
    }, padMonth: function(t2) {
      1 < t2.length && 0 < t2[1] && --t2[1];
    }, isLeapYear: function(t2) {
      return t2 % 4 == 0 && t2 % 100 != 0 || t2 % 400 == 0;
    }, format: function(t2, e2) {
      return e2.replace(/yyyy|YYYY/, this.pad(t2.getFullYear(), 4)).replace(/yy|YY/, 8 < t2.getFullYear() % 100 ? (t2.getFullYear() % 100).toString() : "0" + t2.getFullYear() % 100).replace(/MM/, 8 < t2.getMonth() ? (t2.getMonth() + 1).toString() : "0" + (t2.getMonth() + 1)).replace(/M/g, t2.getMonth() + 1).replace(/w|W/g, n[t2.getDay()]).replace(/dd|DD/, this.pad(t2.getDate())).replace(/d|D/g, t2.getDate()).replace(/hh|HH/, this.pad(t2.getHours())).replace(/h|H/g, t2.getHours()).replace(/mm/, this.pad(t2.getMinutes())).replace(/m/g, t2.getMinutes()).replace(/ss|SS/, this.pad(t2.getSeconds())).replace(/s|S/g, t2.getSeconds()).replace(/q|Q/g, 12 < t2.getHours() ? i[1] : i[0]);
    }, UTCformat: function(t2, e2) {
      return e2.replace(/yyyy|YYYY/, this.pad(t2.getUTCFullYear(), 4)).replace(/yy|YY/, 8 < t2.getUTCFullYear() % 100 ? (t2.getUTCFullYear() % 100).toString() : "0" + t2.getUTCFullYear() % 100).replace(/MM/, 8 < t2.getUTCMonth() ? (t2.getUTCMonth() + 1).toString() : "0" + (t2.getUTCMonth() + 1)).replace(/M/g, t2.getUTCMonth() + 1).replace(/w|W/g, n[t2.getUTCDay()]).replace(/dd|DD/, this.pad(t2.getUTCDate())).replace(/d|D/g, t2.getUTCDate()).replace(/hh|HH/, this.pad(t2.getUTCHours())).replace(/h|H/g, t2.getUTCHours()).replace(/mm/, this.pad(t2.getUTCMinutes())).replace(/m/g, t2.getUTCMinutes()).replace(/ss|SS/, this.pad(t2.getUTCSeconds())).replace(/s|S/g, t2.getUTCSeconds()).replace(/q|Q/g, 12 < t2.getUTCHours() ? i[1] : i[0]);
    }, timestamp: function(t2) {
      return Math.floor(t2.getTime() / 1e3);
    }, getDays: function(t2) {
      return Math.floor((t2.getTime() - e) / s);
    }, getHours: function(t2) {
      return Math.floor((t2.getTime() - e) / o);
    }, getMonths: function(t2) {
      return 12 * t2.getYear() + t2.getMonth() + 1;
    }, isObject: function(t2) {
      return Object.prototype.toString.call(t2) === "[object Object]";
    }, isArray: function(t2) {
      return t2 instanceof Array || Object.prototype.toString.call(t2) === "[object Array]";
    }, isDate: function(t2) {
      return t2 instanceof Date || Object.prototype.toString.call(t2) === "[object Date]";
    }, isNumber: function(t2) {
      return t2 instanceof Number || Object.prototype.toString.call(t2) === "[object Number]";
    }, isString: function(t2) {
      return t2 instanceof String || Object.prototype.toString.call(t2) === "[object String]";
    }, extend: function(t2, e2) {
      for (var r2 in e2)
        d(e2, r2) && (t2[r2] = e2[r2]);
      return d(e2, "toString") && (t2.toString = e2.toString), d(e2, "valueOf") && (t2.valueOf = e2.valueOf), t2;
    }, makeGetSet: function(e2) {
      return function(t2) {
        return t2 != null ? (Date.prototype["set" + e2].call(this._date, t2), this) : Date.prototype["get" + e2].call(this._date);
      };
    } };
    function d(t2, e2) {
      return Object.prototype.hasOwnProperty.call(t2, e2);
    }
    var t, p = u.prototype, h2 = { year: "FullYear", day: "Day", date: "Date", hours: "Hours", milliseconds: "Milliseconds", seconds: "Seconds", minutes: "Minutes", time: "Time" };
    for (t in h2)
      p[t] = c.makeGetSet(h2[t]);
    var l = function(t2, e2) {
      return t2 instanceof u ? new u(t2) : c.isObject(t2) ? (t2.formatString && c.isObject(t2.formatString) && c.extend(r, t2.formatString), void (t2.now && (a = l(t2.now).time() - l().time()))) : new u(t2, e2);
    };
    return l.config = function(t2) {
      t2.formatString && c.isObject(t2.formatString) && c.extend(r, t2.formatString), t2.now && (a = l(t2.now).time() - l().time());
    }, l.SECOND = "SECOND", l.MINUTE = "MINUTE", l.HOUR = "HOUR", l.DAY = "DAY", l.MONTH = "MONTH", l.YEAR = "YEAR", l.WEEK = "WEEK", l.TIME = "TIME", l.QUARTER = "QUARTER", l.MONDAY = 1, l.TUESDAY = 2, l.WEDNESDAY = 3, l.THURSDAY = 4, l.FRIDAY = 5, l.SATURDAY = 6, l.SUNDAY = 7, l;
  });
})(manba$1);
var manba = manba$1.exports;
const dateprefix = "h-date";
const viewType = ["year", "month", "date", "hour", "minute", "second"];
const weekViewType = ["year", "month", "week"];
const quarterViewType = ["year", "quarter"];
const options$1 = func.getOption("datepicker");
const startView = {
  year: "year",
  month: "month",
  date: "date",
  week: "week",
  quarter: "quarter",
  datetime: "date",
  datehour: "date",
  time: "hour"
};
const endView = {
  year: "year",
  month: "month",
  date: "date",
  week: "week",
  quarter: "quarter",
  datetime: "minute",
  datehour: "hour",
  time: "minute"
};
const DateJudgeLength = {
  year: 10,
  month: 10,
  date: 10,
  week: 10,
  quarter: 10,
  hour: 13,
  minute: 16
};
const genData = (param) => {
  let { date, type, show, vm, isNowDays, view } = param;
  let disabled = false;
  if (utils.isObject(vm.option)) {
    if (vm.option.start)
      disabled = date.distance(vm.option.start, type) < 0;
    if (vm.option.end && !disabled)
      disabled = date.distance(vm.option.end, type) > 0;
    if (vm.option.disabled && !disabled)
      disabled = vm.option.disabled.call(null, date);
  }
  let dis = date.distance(vm.today, type);
  let isToday = dis == 0;
  if (view == "quarter") {
    isToday = dis >= -2 && dis <= 0;
  }
  return {
    date,
    show,
    string: date.format(vm.format),
    disabled,
    isToday,
    isNowDays
  };
};
const _sfc_main$Y = {
  name: "HDateBase",
  mixins: [Locale],
  emits: ["updateValue", "updateView", "updateRangeEnd", "changeValue", "changeView"],
  props: {
    type: {
      type: [String],
      default: "date"
    },
    option: Object,
    format: String,
    value: [Object, String],
    nowView: Object,
    range: String,
    rangeEnd: String,
    startWeek: {
      type: Number,
      default: () => func.getOption("datepicker.startWeek")
    }
  },
  data() {
    return {
      options: utils.extend({}, options$1.datetimeOptions, this.option),
      today: manba(),
      view: startView[this.type]
    };
  },
  computed: {
    valueTime() {
      if (!this.value) {
        return {
          start: null,
          end: null
        };
      }
      return {
        start: this.value.start ? manba(this.value.start, this.format).time() : null,
        end: this.value.end ? manba(this.value.end, this.format).time() : null
      };
    },
    rangeEndTime() {
      return this.rangeEnd ? manba(this.rangeEnd, this.format).time() : null;
    },
    dateBodyCls() {
      return {
        [`${dateprefix}-body`]: true,
        [`${dateprefix}-body-${this.view}`]: true
      };
    },
    weeks() {
      let weeks = [
        this.hlang("h.date.weeks.monday"),
        this.hlang("h.date.weeks.tuesday"),
        this.hlang("h.date.weeks.wednesday"),
        this.hlang("h.date.weeks.thursday"),
        this.hlang("h.date.weeks.friday"),
        this.hlang("h.date.weeks.saturday"),
        this.hlang("h.date.weeks.sunday")
      ];
      let days = weeks.splice(0, this.startWeek - 1);
      weeks.push(...days);
      return weeks;
    },
    months() {
      return [
        this.hlang("h.date.months.january"),
        this.hlang("h.date.months.february"),
        this.hlang("h.date.months.march"),
        this.hlang("h.date.months.april"),
        this.hlang("h.date.months.may"),
        this.hlang("h.date.months.june"),
        this.hlang("h.date.months.july"),
        this.hlang("h.date.months.august"),
        this.hlang("h.date.months.september"),
        this.hlang("h.date.months.october"),
        this.hlang("h.date.months.november"),
        this.hlang("h.date.months.december")
      ];
    },
    dates() {
      let nowDate = this.nowView;
      if (this.view == "date") {
        let lastdayofmonth = nowDate.endOf(manba.MONTH);
        let firstdayofmonth = nowDate.startOf(manba.MONTH);
        let startDay = firstdayofmonth.day();
        if (startDay == this.startWeek) {
          startDay = -1;
        } else if (this.startWeek > startDay) {
          startDay = 7 - (this.startWeek - startDay) - 1;
        } else {
          startDay = startDay - this.startWeek - 1;
        }
        let lastdayoflastmonth = firstdayofmonth.add(-1, manba.DAY);
        let dates = [];
        let lastMonthDays = lastdayoflastmonth.date() - startDay;
        for (let i = lastMonthDays; i <= lastdayoflastmonth.date(); i++) {
          dates.push(genData({
            date: manba([lastdayoflastmonth.year(), lastdayoflastmonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }
        for (let i = 1; i <= lastdayofmonth.date(); i++) {
          dates.push(genData({
            date: manba([lastdayofmonth.year(), lastdayofmonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: true
          }));
        }
        let nextMonth = lastdayofmonth.add(1, manba.DAY);
        let nextMonthDays = 7 * 6 - dates.length;
        for (let i = 1; i <= nextMonthDays; i++) {
          dates.push(genData({
            date: manba([nextMonth.year(), nextMonth.month(), i]),
            type: manba.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }
        return dates;
      } else if (this.view == "month") {
        let dates = [];
        for (let i = 1; i <= 12; i++) {
          dates.push(genData({
            date: manba([nowDate.year(), i, 1]),
            type: manba.MONTH,
            show: this.months[i - 1],
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == "year") {
        let dates = [];
        let nowYear = nowDate.year();
        for (let i = nowYear - 6; i <= nowYear + 5; i++) {
          dates.push(genData({
            date: manba([i, 1, 1]),
            type: manba.YEAR,
            show: i,
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == "hour") {
        let dates = [];
        let list = [];
        if (utils.isFunction(this.options.hours)) {
          list = this.options.hours.call(null);
        } else {
          list = utils.numList(0, 24, 1);
        }
        for (let i of list) {
          dates.push(genData({
            date: manba(nowDate.time()).hours(i).minutes(0),
            type: manba.HOUR,
            show: utils.padLeft(i, 2) + ":00",
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == "minute") {
        let dates = [];
        let hour = nowDate.hours();
        let list = [];
        if (utils.isFunction(this.options.minutes)) {
          list = this.options.minutes.call(null, hour);
        } else {
          list = utils.numList(0, 60, this.options.minuteStep);
        }
        for (let i of list) {
          dates.push(genData({
            date: manba(nowDate.time()).minutes(i),
            type: manba.MINUTE,
            show: utils.padLeft(hour, 2) + ":" + utils.padLeft(i, 2),
            vm: this,
            isNowDays: true
          }));
        }
        return dates;
      } else if (this.view == "week") {
        let dates = [];
        let date = manba(nowDate).add(-1, manba.MONTH).endOf(manba.MONTH).endOf(manba.WEEK, this.startWeek);
        let monthSpace = 0;
        if (date.month() == nowDate.month()) {
          date = date.startOf(manba.WEEK, this.startWeek);
          monthSpace = 1;
        } else {
          date = date.add(7, manba.DATE).startOf(manba.WEEK, this.startWeek);
        }
        let month = date.month();
        let nextMonth = monthSpace + month;
        nextMonth = nextMonth > 12 ? 1 : nextMonth;
        while (date.month() == month || date.month() == nextMonth) {
          dates.push(genData({
            date: manba(date.time()),
            type: manba.WEEK,
            show: this.hlang("h.date.show.week", {
              year: date.year(),
              weeknum: date.getWeekOfYear(this.startWeek),
              daystart: date.format("MM-DD"),
              dayend: manba(date).add(6).format("MM-DD")
            }),
            vm: this,
            isNowDays: true
          }));
          date = date.add(7);
        }
        return dates;
      } else if (this.view == "quarter") {
        let dates = [];
        let date = nowDate.startOf(manba.YEAR);
        for (let index2 = 1; index2 < 5; index2++) {
          dates.push(genData({
            date: manba(date.time()),
            type: manba.MONTH,
            show: this.hlang("h.date.show.quarter", {
              year: date.year(),
              quarter: index2
            }),
            vm: this,
            isNowDays: true,
            view: this.view
          }));
          date = date.add(3, manba.MONTH);
        }
        return dates;
      }
      return [];
    }
  },
  watch: {
    type() {
      this.options = utils.extend({}, options$1.datetimeOptions, this.option);
      this.view = startView[this.type];
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (this.range) {
        this.$el.addEventListener("mouseenter", (event) => {
          if (this.view == "date" && !!this.value.start && !this.value.end) {
            let target = event.target;
            if (target.tagName == "SPAN") {
              let string = target.getAttribute("string");
              if (string)
                this.$emit("updateRangeEnd", string);
            }
          }
        }, true);
        this.$el.addEventListener("mouseout", () => {
          if (this.view == "date" && !!this.value.start && !this.value.end) {
            this.$emit("updateRangeEnd", "");
          }
        }, true);
      }
    });
  },
  methods: {
    hoursString(d) {
      return `${utils.padLeft(d.hours(), 2)}:00`;
    },
    changeView(view) {
      this.view = view;
      this.$emit("changeView");
    },
    resetView() {
      this.view = startView[this.type];
    },
    updateView(typeString, num) {
      let type = manba.DAY;
      let nowView = manba(this.nowView);
      if (typeString == "month") {
        type = manba.MONTH;
        nowView = nowView.startOf(manba.MONTH);
      } else if (typeString == "hour") {
        type = manba.HOUR;
      } else {
        type = manba.YEAR;
        if (this.view == "hour") {
          type = manba.DAY;
        } else if (this.view == "minute") {
          type = manba.DAY;
        } else if (this.view == "year") {
          num = num * 12;
          type = manba.YEAR;
        }
      }
      nowView.add(num, type);
      this.$emit("updateView", nowView.time(), this.range);
    },
    getDateCls(d) {
      let isStartSelected = false;
      let isEndSelected = false;
      let isRangeSelected = false;
      let isSelected = false;
      let datetime = d.date.time();
      if (utils.isObject(this.value)) {
        isStartSelected = this.value.start == d.string;
        isEndSelected = this.value.end == d.string;
      } else {
        let length = DateJudgeLength[this.view];
        isSelected = this.value.substring(0, length) == d.string.substring(0, length);
      }
      if (this.range && utils.isObject(this.value) && !!this.value.start && !!this.rangeEnd) {
        isRangeSelected = this.valueTime.start < datetime && this.rangeEndTime > datetime || this.valueTime.start > datetime && this.rangeEndTime < datetime;
      }
      return {
        "h-date-not-now-day": !d.isNowDays,
        "h-date-today": d.isToday,
        "h-date-selected": isSelected || isStartSelected || isEndSelected,
        "h-date-range-selected": isRangeSelected,
        "h-date-start-selected": isStartSelected,
        "h-date-end-selected": isEndSelected,
        "h-date-disabled": d.disabled
      };
    },
    chooseDate(d) {
      if (this.view == endView[this.type]) {
        this.setvalue(d.date, true);
      } else {
        let date = d.date;
        if (!(this.view == "month" && this.type != "month") && !(this.view == "year" && this.type != "year")) {
          if (this.value) {
            if (this.range) {
              try {
                date = manba(this.value[this.range]);
              } catch (e) {
                date = manba(d.date);
              }
            } else {
              date = manba(this.value);
            }
            switch (this.view) {
              case "minutes":
                date.minutes(d.date.minutes());
                break;
              case "hour":
                date.hours(d.date.hours());
                break;
              case "date":
                date.year(d.date.year());
                date.month(d.date.month());
                date.date(d.date.date());
                break;
              case "month":
                date.month(d.date.month());
                if (date.month() > d.date.month()) {
                  date.date(1);
                  date = date.add(-1, manba.DAY);
                }
                break;
              case "year":
                date.year(d.date.year());
                break;
            }
          }
          if (this.options.start && manba(date).time() < manba(this.options.start).time()) {
            date = this.options.start;
          }
          if (this.options.end && manba(date).time() > manba(this.options.end).time()) {
            date = this.options.end;
          }
          if (!this.range) {
            this.setvalue(date, false);
          }
        }
        let viewTypes = viewType;
        if (this.type == "week") {
          viewTypes = weekViewType;
        } else if (this.type == "quarter") {
          viewTypes = quarterViewType;
        }
        let index2 = viewTypes.indexOf(this.view);
        this.view = viewTypes[index2 + 1];
        this.$emit("updateView", manba(date).time(), this.range);
      }
    },
    setvalue(date, isEnd = false) {
      let value = "";
      if (!utils.isNull(date)) {
        value = manba(date).format(this.format);
      }
      this.$emit("updateValue", value, isEnd, this.range);
    }
  }
};
const _hoisted_1$J = { class: "h-date-content" };
const _hoisted_2$y = {
  key: 0,
  class: "h-date-header"
};
const _hoisted_3$s = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_4$l = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_5$j = [
  _hoisted_3$s,
  _hoisted_4$l
];
const _hoisted_6$j = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_7$d = [
  _hoisted_6$j
];
const _hoisted_8$d = {
  key: 1,
  class: "h-date-header-show"
};
const _hoisted_9$8 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_10$6 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_11$4 = [
  _hoisted_9$8,
  _hoisted_10$6
];
const _hoisted_12$4 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_13$3 = [
  _hoisted_12$4
];
const _hoisted_14$3 = { class: "h-date-header" };
const _hoisted_15$3 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_16$2 = [
  _hoisted_15$3
];
const _hoisted_17$2 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_18$2 = [
  _hoisted_17$2
];
const _hoisted_19$2 = {
  key: 0,
  class: "h-date-body-weeks"
};
const _hoisted_20$2 = { class: "h-date-body-pickers" };
const _hoisted_21$2 = ["string", "onClick"];
function _sfc_render$Y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$J, [
    $props.type != "time" ? (openBlock(), createElementBlock("div", _hoisted_2$y, [
      createElementVNode("span", {
        class: "h-date-year-left-picker",
        onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.updateView("default", -1), ["stop"]))
      }, _hoisted_5$j),
      withDirectives(createElementVNode("span", {
        class: "h-date-month-left-picker",
        onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.updateView("month", -1), ["stop"]))
      }, _hoisted_7$d, 512), [
        [vShow, $data.view == "date" || $data.view == "week"]
      ]),
      $data.view != "year" ? (openBlock(), createElementBlock("span", {
        key: 0,
        class: "h-date-header-show",
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.changeView("year"), ["stop"]))
      }, toDisplayString($props.nowView.year()), 1)) : createCommentVNode("", true),
      $data.view == "year" ? (openBlock(), createElementBlock("span", _hoisted_8$d, toDisplayString($props.nowView.year() - 6) + "\xA0\xA0-\xA0\xA0" + toDisplayString($props.nowView.year() + 5), 1)) : createCommentVNode("", true),
      withDirectives(createElementVNode("span", {
        class: "h-date-header-show",
        onClick: _cache[3] || (_cache[3] = withModifiers(($event) => $options.changeView("month"), ["stop"]))
      }, toDisplayString($options.months[$props.nowView.month() - 1]), 513), [
        [vShow, $data.view != "year" && $data.view != "month" && $data.view != "quarter"]
      ]),
      withDirectives(createElementVNode("span", {
        class: "h-date-header-show",
        onClick: _cache[4] || (_cache[4] = withModifiers(($event) => $options.changeView("date"), ["stop"]))
      }, toDisplayString($props.nowView.date()), 513), [
        [vShow, $data.view == "hour" || $data.view == "minute"]
      ]),
      createElementVNode("span", {
        class: "h-date-year-right-picker",
        onClick: _cache[5] || (_cache[5] = withModifiers(($event) => $options.updateView("default", 1), ["stop"]))
      }, _hoisted_11$4),
      withDirectives(createElementVNode("span", {
        class: "h-date-month-right-picker",
        onClick: _cache[6] || (_cache[6] = withModifiers(($event) => $options.updateView("month", 1), ["stop"]))
      }, _hoisted_13$3, 512), [
        [vShow, $data.view == "date" || $data.view == "week"]
      ])
    ])) : createCommentVNode("", true),
    withDirectives(createElementVNode("div", _hoisted_14$3, [
      createElementVNode("span", {
        class: "h-date-month-left-picker",
        onClick: _cache[7] || (_cache[7] = withModifiers(($event) => $options.updateView("hour", -1), ["stop"]))
      }, _hoisted_16$2),
      createElementVNode("span", {
        class: "h-date-header-show",
        onClick: _cache[8] || (_cache[8] = withModifiers(($event) => $options.changeView("hour"), ["stop"]))
      }, toDisplayString($options.hoursString($props.nowView)), 1),
      createElementVNode("span", {
        class: "h-date-month-right-picker",
        onClick: _cache[9] || (_cache[9] = withModifiers(($event) => $options.updateView("hour", 1), ["stop"]))
      }, _hoisted_18$2)
    ], 512), [
      [vShow, $data.view == "minute"]
    ]),
    createElementVNode("div", {
      class: normalizeClass($options.dateBodyCls)
    }, [
      $data.view == "date" ? (openBlock(), createElementBlock("div", _hoisted_19$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.weeks, (w) => {
          return openBlock(), createElementBlock("span", { key: w }, toDisplayString(w), 1);
        }), 128))
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_20$2, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.dates, (d) => {
          return openBlock(), createElementBlock("span", {
            key: d.string,
            string: d.string,
            class: normalizeClass($options.getDateCls(d)),
            onClick: withModifiers(($event) => $options.chooseDate(d), ["stop"])
          }, toDisplayString(d.show), 11, _hoisted_21$2);
        }), 128))
      ])
    ], 2)
  ]);
}
var dateBase = /* @__PURE__ */ _export_sfc(_sfc_main$Y, [["render", _sfc_render$Y]]);
const prefix$r = "h-datetime";
const manbaType = {
  year: manba.YEAR,
  month: manba.MONTH,
  date: manba.DAY,
  datetime: manba.MINUTE,
  time: manba.MINUTE,
  datehour: manba.HOUR
};
const options = func.getOption("datepicker");
const _sfc_main$X = {
  name: "HDatePicker",
  components: {
    dateBase
  },
  mixins: [Locale],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: "date"
    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasSeconds: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    hasButtons: {
      type: Boolean,
      default: false
    },
    modelValue: String,
    inline: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    startWeek: {
      type: Number,
      default: () => func.getOption("datepicker.startWeek")
    },
    clearable: {
      type: Boolean,
      default: true
    }
  },
  emits: ["update:modelValue", "change", "confirm", "clear"],
  data() {
    return {
      nowDate: "",
      showDate: "",
      nowView: manba(),
      isShow: this.inline
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang("h.datepicker.placeholder");
    },
    nowFormat() {
      let format2 = this.format;
      if (!format2) {
        format2 = options.format[this.type];
        if (this.type == "datetime" && this.hasSeconds) {
          format2 = options.format.datetimesecond;
        }
      }
      return format2;
    },
    hasConfirm() {
      return this.type == "datetime" || this.type == "datehour" || this.hasButtons;
    },
    shortcuts() {
      let shortcuts = [];
      let shortcutsConfig = null;
      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }
      if (utils.isArray(shortcutsConfig)) {
        for (let s of shortcutsConfig) {
          if (utils.isString(s)) {
            shortcuts.push(options.shortcuts[s]);
          } else if (utils.isObject(s)) {
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dateCls() {
      return {
        [`${prefix$r}`]: !this.inline,
        [`${prefix$r}-inline`]: this.inline,
        [`${prefix$r}-input-border`]: !this.noBorder,
        [`${prefix$r}-disabled`]: this.disabled
      };
    },
    datePickerCls() {
      return {
        [`${prefix$r}-has-shortcut`]: this.shortcuts.length > 0
      };
    }
  },
  watch: {
    modelValue() {
      this.initShowDate(this.modelValue);
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    },
    type() {
      this.initShowDate(this.modelValue);
    }
  },
  beforeMount() {
    this.initShowDate(this.modelValue);
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      if (this.inline)
        return;
      let el = this.el = this.$el.querySelector(`.${prefix$r}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: "click",
        triggerOnce: true,
        content,
        disabled: this.disabled,
        placement: this.placement,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(() => {
              that.initShowDate(that.modelValue);
              that.$refs.datebase.resetView();
              if (that.nowDate) {
                that.nowView = manba(that.nowDate);
              }
            });
          }
        }
      });
      if (this.disabled) {
        this.dropdown.disabled();
      }
    });
  },
  methods: {
    setShortcutValue(s) {
      if (s.value && utils.isFunction(s.value)) {
        let value = s.value.call(null);
        this.initShowDate(value);
        this.setvalue(this.nowDate);
      }
      this.hide();
    },
    clear() {
      this.$emit("clear");
      this.setvalue("");
      this.hide();
    },
    confirm() {
      this.$emit("confirm");
      this.hide();
    },
    updateView(modelValue) {
      this.nowView = manba(modelValue);
      this.$nextTick(() => {
        this.updateDropdown();
      });
    },
    updateDropdown() {
      if (this.dropdown)
        this.dropdown.update();
    },
    inputEvent(event) {
      let value = event.target.value;
      try {
        manba(value);
      } catch (evt) {
        return;
      }
      this.setvalue(value);
    },
    changeEvent(event) {
      let value = event.target.value;
      this.initShowDate(value);
      if (this.nowDate && utils.isObject(this.option) && this.type != "time") {
        let nowDate = manba(this.nowDate);
        let type = manbaType[this.type];
        let reset = false;
        if (this.option.start && nowDate.distance(this.option.start, type) < 0)
          reset = true;
        if (!reset && this.option.end && nowDate.distance(this.option.end, type) > 0)
          reset = true;
        if (!reset && this.option.disabled && this.option.disabled.call(null, nowDate))
          reset = true;
        if (reset) {
          this.resetValue();
          return;
        }
      }
      this.setvalue(this.nowDate);
    },
    resetValue() {
      this.clear();
      this.initShowDate();
    },
    initShowDate(value, initShow = true) {
      if (value != "" && !utils.isNull(value)) {
        try {
          this.nowView = manba(value, this.nowFormat);
          this.nowDate = this.nowView.format("f");
          if (initShow) {
            if (this.type == "week") {
              this.showDate = this.hlang("h.date.show.weekInput", { year: this.nowView.year(), week: this.nowView.getWeekOfYear(this.startWeek) });
            } else if (this.type == "quarter") {
              this.showDate = this.hlang("h.date.show.quarter", { year: this.nowView.year(), quarter: Math.ceil(this.nowView.month() / 3) });
            } else {
              this.showDate = this.nowView.format(this.nowFormat);
            }
          }
          return;
        } catch (err) {
          console.error(err);
        }
      }
      this.nowView = manba();
      this.nowDate = "";
      if (initShow)
        this.showDate = "";
    },
    hide() {
      if (this.dropdown)
        this.dropdown.hide();
    },
    setvalue(string, isEnd = true) {
      let modelValue = string;
      if (string != "") {
        modelValue = manba(string).format(this.nowFormat);
      }
      this.$emit("update:modelValue", modelValue);
      this.$emit("change", modelValue);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, modelValue);
      this.$el.dispatchEvent(event);
      if (isEnd) {
        this.hide();
      }
      this.updateDropdown();
    }
  }
};
const _hoisted_1$I = {
  key: 0,
  class: "h-datetime-show text-hover"
};
const _hoisted_2$x = {
  key: 1,
  class: "h-input h-datetime-show"
};
const _hoisted_3$r = ["disabled", "readonly", "placeholder"];
const _hoisted_4$k = {
  key: 0,
  class: "h-icon-calendar"
};
const _hoisted_5$i = {
  key: 0,
  class: "h-date-container"
};
const _hoisted_6$i = {
  key: 0,
  class: "h-date-shortcut"
};
const _hoisted_7$c = ["onClick"];
const _hoisted_8$c = {
  key: 1,
  class: "h-date-footer"
};
function _sfc_render$X(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_date_base = resolveComponent("date-base");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.dateCls)
  }, [
    !$props.inline ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $props.noBorder ? (openBlock(), createElementBlock("div", _hoisted_1$I, toDisplayString($data.showDate || $options.showPlaceholder), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$x, [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.showDate = $event),
          class: "h-input",
          type: "text",
          disabled: $props.disabled,
          readonly: $props.readonly || $props.type == "week" || $props.type == "quarter",
          placeholder: $options.showPlaceholder,
          onChange: _cache[1] || (_cache[1] = (...args) => $options.changeEvent && $options.changeEvent(...args)),
          onKeydown: _cache[2] || (_cache[2] = withKeys((...args) => $options.changeEvent && $options.changeEvent(...args), ["enter"]))
        }, null, 40, _hoisted_3$r), [
          [vModelText, $data.showDate]
        ]),
        !$data.showDate || $props.disabled || !$props.clearable ? (openBlock(), createElementBlock("i", _hoisted_4$k)) : (openBlock(), createElementBlock("i", {
          key: 1,
          class: "h-icon-close text-hover",
          onClick: _cache[3] || (_cache[3] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
        }))
      ]))
    ], 64)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: normalizeClass([$options.datePickerCls, "h-date-picker"])
    }, [
      $data.isShow ? (openBlock(), createElementBlock("div", _hoisted_5$i, [
        $options.shortcuts.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$i, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.shortcuts, (s) => {
            return openBlock(), createElementBlock("div", {
              key: s.title,
              onClick: ($event) => $options.setShortcutValue(s)
            }, toDisplayString(s.title), 9, _hoisted_7$c);
          }), 128))
        ])) : createCommentVNode("", true),
        createVNode(_component_date_base, {
          ref: "datebase",
          value: $data.nowDate,
          option: $props.option,
          type: $props.type,
          "start-week": $props.startWeek,
          "now-view": $data.nowView,
          format: "k",
          onUpdateView: $options.updateView,
          onUpdateValue: $options.setvalue,
          onChangeView: $options.updateDropdown
        }, null, 8, ["value", "option", "type", "start-week", "now-view", "onUpdateView", "onUpdateValue", "onChangeView"])
      ])) : createCommentVNode("", true),
      $options.hasConfirm & !$props.inline ? (openBlock(), createElementBlock("div", _hoisted_8$c, [
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-text",
          onClick: _cache[4] || (_cache[4] = (...args) => $options.clear && $options.clear(...args))
        }, toDisplayString(_ctx.hlang("h.common.clear")), 1),
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-primary h-btn-s",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.hide && $options.hide(...args))
        }, toDisplayString(_ctx.hlang("h.common.confirm")), 1)
      ])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var DatePicker = /* @__PURE__ */ _export_sfc(_sfc_main$X, [["render", _sfc_render$X]]);
const prefix$q = "h-datetime";
const _sfc_main$W = {
  name: "HDateRangePicker",
  components: {
    dateBase
  },
  mixins: [Locale],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    placement: String,
    type: {
      type: [String],
      default: "date"
    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasSeconds: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    modelValue: Object,
    startWeek: {
      type: Number,
      default: () => func.getOption("datepicker.startWeek")
    },
    bothChoose: {
      type: Boolean,
      default: false
    }
  },
  emits: ["update:modelValue", "change", "confirm", "clear"],
  data() {
    return {
      paramName: func.getOption("datepicker.daterangeOptions.paramName"),
      nowDate: {
        start: "",
        end: ""
      },
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH)
      },
      rangeEnd: "",
      isShow: false
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang("h.datepicker.placeholder");
    },
    nowFormat() {
      let format2 = this.format || func.getOption("datepicker.format")[this.type];
      if (this.type == "datetime" && this.hasSeconds) {
        format2 = func.getOption("datepicker.format.datetimesecond");
      }
      return format2;
    },
    show() {
      if (!utils.isObject(this.modelValue)) {
        return "";
      }
      return `${this.modelValue.start || this.hlang("h.datepicker.start")} - ${this.modelValue.end || this.hlang("h.datepicker.end")}`;
    },
    shortcuts() {
      return this.option && this.option.shortcuts || [];
    },
    dateCls() {
      return {
        [`${prefix$q}`]: true,
        [`${prefix$q}-range`]: true,
        [`${prefix$q}-input-border`]: !this.noBorder,
        [`${prefix$q}-disabled`]: this.disabled
      };
    },
    datePickerCls() {
      return {
        [`${prefix$q}-range-picker`]: true,
        [`${prefix$q}-has-shortcut`]: this.shortcuts.length > 0
      };
    },
    startOption() {
      return this.option;
    },
    endOption() {
      return this.option;
    }
  },
  watch: {
    modelValue() {
      this.parse(this.modelValue);
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  beforeMount() {
    this.parse(this.modelValue);
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(`.${prefix$q}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: "click",
        content,
        placement: this.placement,
        disabled: this.disabled,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(() => {
              that.initNowView();
            });
          },
          hide: () => {
            this.hide();
          }
        }
      });
    });
  },
  methods: {
    updateRangeEnd(string) {
      this.rangeEnd = string;
    },
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    updateView(value, rangeType) {
      this.nowView[rangeType] = manba(value, this.nowFormat);
      if (this.nowView.start.time() >= this.nowView.end.time()) {
        if (rangeType == "end") {
          this.nowView.start = manba(value, this.nowFormat).add(-1, manba.MONTH);
        } else {
          this.nowView.end = manba(value, this.nowFormat).add(1, manba.MONTH);
        }
      }
      this.dropdown.update();
    },
    changeView() {
      this.dropdown.update();
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[this.paramName[range]]) {
        try {
          let nowValue = manba(value[this.paramName[range]], this.nowFormat);
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {
        }
      }
      this.nowDate[range] = "";
    },
    parse(value) {
      this.parseSingle(value, "start");
      this.parseSingle(value, "end");
      this.rangeEnd = this.nowDate.end;
    },
    initNowView() {
      let start = manba();
      if (this.nowDate.start) {
        start = manba(this.nowDate.start, this.nowFormat);
      }
      let endRange = 1;
      this.nowView = {
        start,
        end: manba(start, this.nowFormat).add(endRange, manba.MONTH)
      };
      this.$refs.start.resetView();
      this.$refs.end.resetView();
    },
    confirm() {
      this.$emit("confirm");
      this.hide();
    },
    hide() {
      this.dropdown.hide();
      setTimeout(() => {
        this.parseValue(this.modelValue);
      }, 400);
    },
    clear() {
      this.$emit("clear");
      this.updateValue({});
      this.initNowView();
      this.hide();
    },
    setvalue(string, isEnd = false, range) {
      string = string || "";
      let lastDate = utils.copy(this.nowDate);
      if (!isEnd) {
        if (range == "start") {
          lastDate.start = string;
        } else if (range == "end") {
          lastDate.end = string;
        }
      } else {
        if (!lastDate.start) {
          lastDate.start = string;
        } else if (!lastDate.end) {
          lastDate.end = string;
        } else {
          lastDate.start = string;
          lastDate.end = "";
        }
      }
      if (isEnd && lastDate.start && lastDate.end && manba(lastDate.start, this.nowFormat).time() > manba(lastDate.end, this.nowFormat).time()) {
        let start = lastDate.start;
        lastDate.start = lastDate.end;
        lastDate.end = start;
      }
      if (this.bothChoose && (!lastDate.start || !lastDate.end)) {
        this.parseValue(lastDate);
        return;
      }
      this.updateValue(lastDate);
    },
    parseValue(value) {
      value = {
        [this.paramName.start]: value.start,
        [this.paramName.end]: value.end
      };
      this.parse(value);
    },
    updateValue(value) {
      value = {
        [this.paramName.start]: value.start,
        [this.paramName.end]: value.end
      };
      this.parse(value);
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  }
};
const _hoisted_1$H = {
  key: 0,
  class: "h-datetime-show text-hover"
};
const _hoisted_2$w = {
  key: 1,
  class: "h-input h-datetime-show"
};
const _hoisted_3$q = ["value", "placeholder", "disabled"];
const _hoisted_4$j = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-calendar" }, null, -1);
const _hoisted_5$h = {
  key: 0,
  class: "h-date-container h-date-range-container"
};
const _hoisted_6$h = {
  key: 0,
  class: "h-date-shortcut"
};
const _hoisted_7$b = ["onClick"];
const _hoisted_8$b = { class: "h-date-footer" };
function _sfc_render$W(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_date_base = resolveComponent("date-base");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.dateCls)
  }, [
    $props.noBorder ? (openBlock(), createElementBlock("div", _hoisted_1$H, toDisplayString(_ctx.showDate || $options.showPlaceholder), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$w, [
      createElementVNode("input", {
        type: "text",
        class: "h-input",
        value: $options.show,
        readonly: "",
        placeholder: $options.showPlaceholder,
        disabled: $props.disabled
      }, null, 8, _hoisted_3$q),
      _hoisted_4$j
    ])),
    createElementVNode("div", {
      class: normalizeClass([$options.datePickerCls, "h-date-picker"])
    }, [
      $data.isShow ? (openBlock(), createElementBlock("div", _hoisted_5$h, [
        $options.shortcuts.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$h, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.shortcuts, (s) => {
            return openBlock(), createElementBlock("div", {
              key: s.title,
              onClick: ($event) => $options.setShortcutValue(s)
            }, toDisplayString(s.title), 9, _hoisted_7$b);
          }), 128))
        ])) : createCommentVNode("", true),
        createVNode(_component_date_base, {
          ref: "start",
          value: $data.nowDate,
          range: "start",
          option: $options.startOption,
          type: $props.type,
          "now-view": $data.nowView.start,
          format: $options.nowFormat,
          "start-week": $props.startWeek,
          "range-end": $data.rangeEnd,
          onUpdateView: $options.updateView,
          onUpdateValue: $options.setvalue,
          onChangeView: $options.changeView,
          onUpdateRangeEnd: $options.updateRangeEnd
        }, null, 8, ["value", "option", "type", "now-view", "format", "start-week", "range-end", "onUpdateView", "onUpdateValue", "onChangeView", "onUpdateRangeEnd"]),
        createVNode(_component_date_base, {
          ref: "end",
          value: $data.nowDate,
          range: "end",
          option: $options.endOption,
          type: $props.type,
          "now-view": $data.nowView.end,
          format: $options.nowFormat,
          "start-week": $props.startWeek,
          "range-end": $data.rangeEnd,
          onUpdateView: $options.updateView,
          onUpdateValue: $options.setvalue,
          onChangeView: $options.changeView,
          onUpdateRangeEnd: $options.updateRangeEnd
        }, null, 8, ["value", "option", "type", "now-view", "format", "start-week", "range-end", "onUpdateView", "onUpdateValue", "onChangeView", "onUpdateRangeEnd"])
      ])) : createCommentVNode("", true),
      createElementVNode("div", _hoisted_8$b, [
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-text h-btn-s",
          onClick: _cache[0] || (_cache[0] = (...args) => $options.clear && $options.clear(...args))
        }, toDisplayString(_ctx.hlang("h.common.clear")), 1),
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-primary h-btn-s",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.confirm && $options.confirm(...args))
        }, toDisplayString(_ctx.hlang("h.common.confirm")), 1)
      ])
    ], 2)
  ], 2);
}
var DateRangePicker = /* @__PURE__ */ _export_sfc(_sfc_main$W, [["render", _sfc_render$W]]);
const prefix$p = "h-datetime";
const _sfc_main$V = {
  name: "HDateFullRangePicker",
  components: {
    dateBase
  },
  emits: ["change", "update:modelValue", "confirm", "clear"],
  mixins: [Locale],
  props: {
    defaultType: {
      type: String,
      default: "week"
    },
    option: Object,
    placement: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasTime: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    modelValue: Object,
    startWeek: {
      type: Number,
      default: () => func.getOption("datepicker.startWeek")
    },
    layout: {
      type: Array,
      default: () => ["year", "quarter", "month", "week", "date", "customize"]
    }
  },
  data() {
    let format2 = func.getOption("datepicker.format");
    let defaultType = this.modelValue && this.modelValue.type ? this.modelValue.type : this.defaultType;
    return {
      allviews: {
        year: this.hlang("h.date.year"),
        quarter: this.hlang("h.date.quarter"),
        month: this.hlang("h.date.month"),
        week: this.hlang("h.date.week"),
        date: this.hlang("h.date.day"),
        customize: this.hlang("h.datepicker.customize")
      },
      nowFormat: this.hasTime ? format2.datetime : format2.date,
      paramName: func.getOption("datepicker.daterangeOptions.paramName"),
      nowDate: {
        start: "",
        end: ""
      },
      nowView: {
        start: manba(),
        end: manba().add(1, manba.MONTH)
      },
      view: defaultType,
      rangeEnd: "",
      isShow: false
    };
  },
  computed: {
    views() {
      let v = {};
      for (let l of this.layout) {
        if (!this.allviews[l]) {
          console.warn(`[HeyUI WARNING] DateFullRangePicker Component: Props ${l} for layout don't exsits.`);
        } else {
          v[l] = this.allviews[l];
        }
      }
      return v;
    },
    showPlaceholder() {
      return this.placeholder || this.hlang("h.datepicker.placeholder");
    },
    showValue() {
      if (!utils.isObject(this.modelValue)) {
        return "";
      }
      if (this.modelValue.type && this.modelValue.start) {
        let date = manba(this.modelValue.start);
        switch (this.modelValue.type) {
          case "year":
            return date.year();
          case "month":
            return date.format("YYYY-MM");
          case "quarter":
            return this.hlang("h.date.show.quarter", {
              year: date.year(),
              quarter: parseInt(date.month() / 3, 10) + 1
            });
          case "week":
            return this.hlang("h.date.show.week", {
              year: date.year(),
              weeknum: date.getWeekOfYear(this.startWeek),
              daystart: date.format("MM-DD"),
              dayend: manba(date).add(6).format("MM-DD")
            });
        }
      }
      if (!this.modelValue.start && !this.modelValue.end)
        return "";
      return `${this.modelValue.start || this.hlang("h.datepicker.start")} - ${this.modelValue.end ? manba(this.modelValue.end).add(-1).format(this.nowFormat) : this.hlang("h.datepicker.end")}`;
    },
    shortcuts() {
      let shortcuts = [];
      let shortcutsConfig = null;
      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }
      if (utils.isArray(shortcutsConfig)) {
        for (let s of shortcutsConfig) {
          if (utils.isString(s)) {
            shortcuts.push(func.getOption("datepicker.shortcuts")[s]);
          } else if (utils.isObject(s)) {
            shortcuts.push(s);
          }
        }
      }
      return shortcuts;
    },
    dateCls() {
      return {
        [`${prefix$p}`]: true,
        [`${prefix$p}-full-range`]: true,
        [`${prefix$p}-input-border`]: !this.noBorder
      };
    },
    datePickerCls() {
      return {
        [`${prefix$p}-has-shortcut`]: this.shortcuts.length > 0
      };
    },
    startOption() {
      return this.option;
    },
    endOption() {
      return this.option;
    }
  },
  watch: {
    modelValue() {
      this.parse(this.modelValue);
    }
  },
  beforeMount() {
    this.parse(this.modelValue);
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(`.${prefix$p}>.h-datetime-show`);
      let content = this.$el.querySelector(`.h-date-picker`);
      this.dropdown = new Dropdown(el, {
        trigger: "click",
        content,
        placement: this.placement,
        events: {
          show() {
            that.isShow = true;
            that.$nextTick(() => {
              that.initNowView();
            });
          }
        }
      });
    });
  },
  methods: {
    setShortcutValue(s) {
      let value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    changeView() {
      this.initNowView();
      this.updateDropdown();
    },
    updateView(value) {
      this.nowView.start = manba(value);
      this.dropdown.update();
    },
    updateDropdown() {
      this.dropdown.update();
    },
    parseSingle(value, range) {
      if (utils.isObject(value) && value[this.paramName[range]]) {
        try {
          let nowValue = manba(value[this.paramName[range]]);
          if (range == "end") {
            nowValue = nowValue.add(-1);
          }
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {
          console.error(evt);
        }
      }
      this.nowDate[range] = "";
    },
    parse(value) {
      if (this.modelValue && this.modelValue.type) {
        this.view = this.modelValue.type;
      }
      this.parseSingle(value, "start");
      this.parseSingle(value, "end");
    },
    initNowView() {
      let start = manba();
      if (this.nowDate.start) {
        start = manba(this.nowDate.start);
      }
      let end = manba();
      if (this.nowDate.end) {
        end = manba(this.nowDate.end);
      }
      this.nowView = {
        start,
        end
      };
    },
    hide() {
      this.dropdown.hide();
    },
    confirm() {
      this.$emit("confirm");
      this.hide();
    },
    clear() {
      this.$emit("clear");
      this.updateValue({});
      this.initNowView();
      this.hide();
    },
    setvalue(string, isEnd = false) {
      string = string || "";
      if (this.view == "customize") {
        let value2 = utils.copy(this.nowDate);
        if (value2.end) {
          value2.end = manba(value2.end).add(1).format(this.nowFormat);
        }
        this.updateValue(value2);
        return;
      }
      let value = {};
      let start = manba(string);
      if (this.view == "week") {
        value = {
          start: start.format(),
          end: start.add(7).format()
        };
      } else if (this.view == "year") {
        value = {
          start: start.format(),
          end: start.add(1, manba.YEAR).format()
        };
      } else if (this.view == "month") {
        value = {
          start: start.format(),
          end: start.add(1, manba.MONTH).format()
        };
      } else if (this.view == "quarter") {
        value = {
          start: start.format(),
          end: start.add(3, manba.MONTH).format()
        };
      } else if (this.view == "date") {
        value = {
          start: start.format(),
          end: start.add(1, manba.DAY).format()
        };
      }
      if (!value.start) {
        value.start = null;
      }
      if (!value.end) {
        value.end = null;
      }
      this.updateValue(value);
      if (isEnd) {
        this.hide();
      }
    },
    updateValue(value) {
      value = {
        [this.paramName.start]: value.start,
        [this.paramName.end]: value.end,
        type: this.view
      };
      this.parse(value);
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  }
};
const _hoisted_1$G = {
  key: 0,
  class: "h-datetime-show text-hover"
};
const _hoisted_2$v = {
  key: 1,
  class: "h-input h-datetime-show"
};
const _hoisted_3$p = ["value", "placeholder"];
const _hoisted_4$i = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-calendar" }, null, -1);
const _hoisted_5$g = { class: "h-date-container h-date-full-range-container" };
const _hoisted_6$g = {
  key: 0,
  class: "h-date-shortcut"
};
const _hoisted_7$a = ["onClick"];
const _hoisted_8$a = {
  key: 1,
  class: "h-date-self-defined"
};
const _hoisted_9$7 = /* @__PURE__ */ createTextVNode(" - ");
const _hoisted_10$5 = { class: "h-date-footer" };
function _sfc_render$V(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tabs = resolveComponent("Tabs");
  const _component_DatePicker = resolveComponent("DatePicker");
  const _component_date_base = resolveComponent("date-base");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.dateCls)
  }, [
    $props.noBorder ? (openBlock(), createElementBlock("div", _hoisted_1$G, toDisplayString($options.showValue || $props.placeholder), 1)) : (openBlock(), createElementBlock("div", _hoisted_2$v, [
      createElementVNode("input", {
        type: "text",
        class: "h-input",
        value: $options.showValue,
        readonly: "",
        placeholder: $options.showPlaceholder
      }, null, 8, _hoisted_3$p),
      _hoisted_4$i
    ])),
    createElementVNode("div", {
      class: normalizeClass([$options.datePickerCls, "h-date-picker"])
    }, [
      createElementVNode("div", _hoisted_5$g, [
        $options.shortcuts.length > 0 ? (openBlock(), createElementBlock("div", _hoisted_6$g, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.shortcuts, (s) => {
            return openBlock(), createElementBlock("div", {
              key: s.title,
              onClick: ($event) => $options.setShortcutValue(s)
            }, toDisplayString(s.title), 9, _hoisted_7$a);
          }), 128))
        ])) : createCommentVNode("", true),
        createElementVNode("div", null, [
          createVNode(_component_Tabs, {
            modelValue: $data.view,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.view = $event),
            datas: $options.views,
            onChange: $options.changeView
          }, null, 8, ["modelValue", "datas", "onChange"])
        ]),
        $data.view == "customize" ? (openBlock(), createElementBlock("div", _hoisted_8$a, [
          createVNode(_component_DatePicker, {
            modelValue: $data.nowDate.start,
            "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.nowDate.start = $event),
            option: { end: $data.nowDate.end },
            type: $props.hasTime ? "datetime" : "date",
            placeholder: _ctx.hlang("h.datepicker.startTime"),
            onChange: _cache[2] || (_cache[2] = ($event) => $options.setvalue("start"))
          }, null, 8, ["modelValue", "option", "type", "placeholder"]),
          _hoisted_9$7,
          createVNode(_component_DatePicker, {
            modelValue: $data.nowDate.end,
            "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.nowDate.end = $event),
            placement: "bottom-end",
            option: { start: $data.nowDate.start },
            type: $props.hasTime ? "datetime" : "date",
            placeholder: _ctx.hlang("h.datepicker.endTime"),
            onChange: _cache[4] || (_cache[4] = ($event) => $options.setvalue("end"))
          }, null, 8, ["modelValue", "option", "type", "placeholder"])
        ])) : (openBlock(), createBlock(_component_date_base, {
          key: 2,
          ref: "datebase",
          value: $data.nowDate.start,
          option: $props.option,
          type: $data.view,
          "start-week": $props.startWeek,
          "now-view": $data.nowView.start,
          format: "k",
          onUpdateView: $options.updateView,
          onUpdateValue: $options.setvalue,
          onChangeView: $options.updateDropdown
        }, null, 8, ["value", "option", "type", "start-week", "now-view", "onUpdateView", "onUpdateValue", "onChangeView"]))
      ]),
      createElementVNode("div", _hoisted_10$5, [
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-text h-btn-s",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.clear && $options.clear(...args))
        }, toDisplayString(_ctx.hlang("h.common.clear")), 1),
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-primary h-btn-s",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.confirm && $options.confirm(...args))
        }, toDisplayString(_ctx.hlang("h.common.confirm")), 1)
      ])
    ], 2)
  ], 2);
}
var DateFullRangePicker = /* @__PURE__ */ _export_sfc(_sfc_main$V, [["render", _sfc_render$V]]);
const prefix$o = "h-dropdowncustom";
const _sfc_main$U = {
  name: "HDropdownCustom",
  emits: ["show", "hide"],
  props: {
    trigger: {
      type: String,
      default: "click"
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    toggleIcon: {
      type: Boolean,
      default: true
    },
    disabled: {
      type: Boolean,
      default: false
    },
    placement: {
      type: String
    },
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: "h-dropdownmenu-default"
    },
    offset: [String, Number],
    showClass: {
      type: Object,
      default: () => {
      }
    },
    button: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      isShow: false,
      dropdown: null,
      el: null
    };
  },
  computed: {
    dropdowncustomCls() {
      return {
        [`${prefix$o}`]: true,
        "h-btn": this.button
      };
    },
    showCls() {
      return __spreadValues({
        [`${prefix$o}-show`]: true,
        [`${prefix$o}-disabled`]: !!this.disabled,
        [`${prefix$o}-show-toggle`]: !!this.toggleIcon,
        [this.className]: !!this.className,
        "h-dropdowncustom-empty": !this.$slots.default
      }, this.showClass);
    },
    groupCls() {
      return {
        [`${prefix$o}-group`]: true
      };
    }
  },
  watch: {
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(".h-dropdowncustom-show");
      let content = this.$el.querySelector(".h-dropdowncustom-group");
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        className: `${this.className}-dropdown-container`,
        offset: this.offset,
        trigger: this.trigger,
        equalWidth: this.equalWidth,
        placement: this.placement,
        disabled: this.disabled,
        delay: this.delay,
        events: {
          show(event) {
            that.isShow = true;
            that.$emit("show", event);
          },
          hide: () => {
            that.$emit("hide");
          }
        }
      });
    });
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  methods: {
    update() {
      this.dropdown.update();
    },
    hide() {
      this.dropdown.hide();
    },
    show() {
      this.dropdown.show();
    }
  }
};
const _hoisted_1$F = { class: "h-dropdowncustom-show-content" };
const _hoisted_2$u = {
  key: 0,
  class: "h-icon-down"
};
function _sfc_render$U(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.dropdowncustomCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.showCls)
    }, [
      createElementVNode("div", _hoisted_1$F, [
        renderSlot(_ctx.$slots, "default")
      ]),
      $props.toggleIcon ? (openBlock(), createElementBlock("i", _hoisted_2$u)) : createCommentVNode("", true)
    ], 2),
    createElementVNode("div", {
      class: normalizeClass($options.groupCls)
    }, [
      $data.isShow ? renderSlot(_ctx.$slots, "content", { key: 0 }) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var DropdownCustom = /* @__PURE__ */ _export_sfc(_sfc_main$U, [["render", _sfc_render$U]]);
const prefix$n = "h-dropdownmenu";
const _sfc_main$T = {
  name: "HDropdownMenu",
  components: {
    Badge,
    DropdownCustom
  },
  emits: ["show", "hide", "clickItem"],
  props: {
    dict: String,
    datas: [Array, Object],
    trigger: {
      type: String,
      default: "click"
    },
    equalWidth: {
      type: Boolean,
      default: false
    },
    width: Number,
    toggleIcon: {
      type: Boolean,
      default: true
    },
    placement: {
      type: String,
      default: "bottom-start"
    },
    showCount: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    maxCount: {
      type: Number,
      default: 99
    },
    delay: {
      type: Number,
      default: 0
    },
    className: {
      type: String,
      default: "h-dropdownmenu-default"
    },
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    },
    offset: [String, Number],
    button: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName,
      html: "dropdownmenuHtml",
      isShow: false,
      el: null
    };
  },
  computed: {
    dropdownmenuCls() {
      return {
        [`${prefix$n}`]: true
      };
    },
    groupStyle() {
      let styles = {};
      if (this.width) {
        styles.width = `${this.width}px`;
      }
      return styles;
    },
    showCls() {
      return {
        [`${prefix$n}-show`]: true,
        "h-dropdownmenu-empty": !this.$slots.default
      };
    },
    groupCls() {
      return {
        [`${this.className}-dropdown`]: !!this.className,
        "h-dropdownmenu-group": true
      };
    },
    options() {
      if (!this.datas && !this.dict) {
        console.error("[HeyUI Error] Dropdownmenu Component: Datas or dict parameters need to be defined at least.");
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      datas = func.initOptions(datas, this);
      return datas;
    }
  },
  mounted() {
  },
  beforeUnmount() {
  },
  methods: {
    click(event, option) {
      if (option.disabled)
        return;
      this.$emit("clickItem", option[this.key], option, event);
      this.$refs.dropdown.hide();
    },
    showEvent(event) {
      this.$emit("show", event);
    },
    hideEvent(event) {
      this.$emit("hide", event);
    }
  }
};
const _hoisted_1$E = ["onClick"];
function _sfc_render$T(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  const _component_DropdownCustom = resolveComponent("DropdownCustom");
  return openBlock(), createBlock(_component_DropdownCustom, {
    ref: "dropdown",
    button: $props.button,
    delay: $props.delay,
    class: normalizeClass($options.dropdownmenuCls),
    trigger: $props.trigger,
    "equal-width": $props.equalWidth,
    "toggle-icon": $props.toggleIcon,
    placement: $props.placement,
    disabled: $props.disabled,
    "class-name": $props.className,
    offset: $props.offset,
    "show-class": $options.showCls,
    onShow: $options.showEvent,
    onHide: $options.hideEvent
  }, {
    content: withCtx(() => [
      createElementVNode("ul", {
        class: normalizeClass($options.groupCls),
        style: normalizeStyle($options.groupStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.options, (option) => {
          return openBlock(), createElementBlock("li", {
            key: option[$data.key],
            class: normalizeClass(["h-dropdownmenu-item", { "h-dropdownmenu-item-divider": !!option.divider, disabled: !!option.divider || option.disabled }]),
            onClick: ($event) => $options.click($event, option)
          }, [
            option.icon ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: normalizeClass(option.icon)
            }, null, 2)) : createCommentVNode("", true),
            createElementVNode("span", null, toDisplayString(option[$data.title]), 1),
            $props.showCount && option.count ? (openBlock(), createBlock(_component_Badge, {
              key: 1,
              count: option.count,
              "max-count": $props.maxCount,
              position: "right"
            }, null, 8, ["count", "max-count"])) : createCommentVNode("", true)
          ], 10, _hoisted_1$E);
        }), 128))
      ], 6)
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["button", "delay", "class", "trigger", "equal-width", "toggle-icon", "placement", "disabled", "class-name", "offset", "show-class", "onShow", "onHide"]);
}
var DropdownMenu = /* @__PURE__ */ _export_sfc(_sfc_main$T, [["render", _sfc_render$T]]);
const genObject = function(data) {
  if (utils.isString(data)) {
    return { url: data };
  } else if (utils.isObject(data)) {
    return { url: data.thumbUrl || data.url };
  }
  return { url: null };
};
const _sfc_main$S = {
  name: "HImageList",
  emits: ["clickItem"],
  props: {
    width: {
      type: Number,
      default: 60
    },
    distance: {
      type: Number,
      default: 10
    },
    datas: {
      type: [Array, String],
      default: () => []
    },
    borderRadius: {
      type: Number,
      default: 3
    }
  },
  computed: {
    listStyles() {
      return {
        "margin-right": `-${this.distance}px`,
        "margin-bottom": `-${this.distance}px`
      };
    },
    isSingle() {
      return utils.isString(this.datas);
    },
    computedList() {
      if (this.isSingle) {
        return [genObject(this.datas)];
      } else if (utils.isArray(this.datas)) {
        return this.datas.map((item) => {
          return genObject(item);
        });
      }
      return [];
    }
  },
  methods: {
    click(index2, value) {
      if (this.isSingle) {
        this.$emit("clickItem", this.datas);
      } else {
        this.$emit("clickItem", index2, value);
      }
    },
    itemStyles(data) {
      return {
        height: `${this.width}px`,
        width: `${this.width}px`,
        "margin-right": `${this.distance}px`,
        "margin-bottom": `${this.distance}px`,
        "border-radius": `${this.borderRadius}px`,
        "background-image": `url(${data.url})`
      };
    }
  }
};
const _hoisted_1$D = ["onClick"];
function _sfc_render$S(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: "h-image-list",
    style: normalizeStyle($options.listStyles)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.computedList, (data, index2) => {
      return openBlock(), createElementBlock("div", {
        key: index2,
        style: normalizeStyle($options.itemStyles(data)),
        class: "h-image-list-item",
        onClick: ($event) => $options.click(index2, data)
      }, null, 12, _hoisted_1$D);
    }), 128))
  ], 4);
}
var ImageList = /* @__PURE__ */ _export_sfc(_sfc_main$S, [["render", _sfc_render$S]]);
const _sfc_main$R = {
  name: "HIcon",
  props: {
    type: String,
    color: String,
    size: Number,
    isLink: Boolean
  },
  data() {
    return {};
  },
  computed: {
    iconCls() {
      return {
        [`${this.type}`]: !!this.type,
        link: this.isLink
      };
    },
    iconStyle() {
      return {
        ["font-size"]: `${this.size}px`,
        color: this.color
      };
    }
  },
  methods: {}
};
function _sfc_render$R(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("i", mergeProps({
    class: $options.iconCls,
    style: $options.iconStyle
  }, _ctx.$attrs), null, 16);
}
var Icon = /* @__PURE__ */ _export_sfc(_sfc_main$R, [["render", _sfc_render$R]]);
const _sfc_main$Q = {
  name: "HInput",
  props: {
    modelValue: String
  }
};
const _hoisted_1$C = ["value"];
function _sfc_render$Q(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("input", {
    class: "h-input",
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
  }, null, 40, _hoisted_1$C);
}
var Input = /* @__PURE__ */ _export_sfc(_sfc_main$Q, [["render", _sfc_render$Q]]);
const _sfc_main$P = {
  name: "HTextarea",
  emits: ["update:modelValue"],
  props: {
    modelValue: String
  },
  data() {
    return {};
  },
  computed: {},
  methods: {}
};
const _hoisted_1$B = ["value"];
function _sfc_render$P(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("textarea", mergeProps({ class: "h-textarea" }, _ctx.$attrs, {
    value: $props.modelValue,
    onInput: _cache[0] || (_cache[0] = ($event) => _ctx.$emit("update:modelValue", $event.target.value))
  }), null, 16, _hoisted_1$B);
}
var Textarea = /* @__PURE__ */ _export_sfc(_sfc_main$P, [["render", _sfc_render$P]]);
let valids$2 = {
  int: {
    valid(value) {
      return parseInt(value, 10) == value;
    },
    message: locale.hlang("h.validation.type.int")
  },
  number: {
    valid(value) {
      return !isNaN(Number(value));
    },
    message() {
      return locale.hlang("h.validation.type.number");
    }
  },
  email: {
    pattern: /^[^\s]+@[^\s]+\.[^\s]+$/,
    message() {
      return locale.hlang("h.validation.type.email");
    }
  },
  url: {
    pattern: /^((\w+):\/\/)?([^\s]?[^\s]+\.)*[^\s]+-?[^\s]+\.[^\s]{2,}(\/.*)*\/?$/,
    message() {
      return locale.hlang("h.validation.type.url");
    }
  },
  tel: {
    pattern: /(^(\+\d{2,3}\/)?\d{3,4}(-)?\d{7,8}(\*\d{2,6})?$)|(^1\d{10}$)/,
    message() {
      return locale.hlang("h.validation.type.tel");
    }
  },
  mobile: {
    pattern: /^1\d{10}$/,
    message() {
      return locale.hlang("h.validation.type.mobile");
    }
  },
  globalmobile: {
    pattern: /^[+\-0-9a]+$/,
    message() {
      return locale.hlang("h.validation.type.globalmobile");
    }
  }
};
let valids$1 = {
  required(value) {
    let result = value !== null && value !== void 0 && String(value).length > 0;
    return result === true ? true : locale.hlang("h.validation.base.required");
  },
  maxLen(value, configValue) {
    if (configValue === null || configValue === void 0) {
      return true;
    }
    let result = value !== null && value !== void 0 && String(value).length <= configValue;
    return result === true ? true : locale.hlang("h.validation.base.maxLen", { value: configValue });
  },
  minLen(value, configValue) {
    if (configValue === null || configValue === void 0) {
      return true;
    }
    let result = value !== null && value !== void 0 && String(value).length >= configValue;
    return result === true ? true : locale.hlang("h.validation.base.minLen", { value: configValue });
  },
  max(value, configValue) {
    if (configValue === null || configValue === void 0) {
      return true;
    }
    let result = value !== null && value !== void 0 && Number(value) <= configValue;
    return result === true ? true : locale.hlang("h.validation.base.max", { value: configValue });
  },
  min(value, configValue) {
    if (configValue === null || configValue === void 0) {
      return true;
    }
    let result = value !== null && value !== void 0 && Number(value) >= configValue;
    return result === true ? true : locale.hlang("h.validation.base.min", { value: configValue });
  }
};
let valids = {
  lessThan(value1, value2) {
    return Number(value1) < Number(value2);
  },
  greaterThan(value1, value2) {
    return Number(value1) > Number(value2);
  },
  equal(value1, value2) {
    return value1 == value2;
  }
};
const extendResult = function(result1, result2) {
  let result = {};
  let keys = Object.keys(result1);
  let key2 = Object.keys(result2);
  for (let key of key2) {
    if (!result1[key])
      keys.push(key);
  }
  for (let key of keys) {
    if (result1[key] && !result2[key]) {
      result[key] = result1[key];
    } else if (!result1[key] && result2[key]) {
      result[key] = result2[key];
    } else if (result1[key].valid === false || result2[key].valid === true) {
      result[key] = result1[key];
    } else {
      result[key] = result2[key];
    }
  }
  return result;
};
const ruleExecute = function(rule, argus) {
  if (utils$1.isFunction(rule)) {
    return rule.call(null, ...argus);
  } else if (utils$1.isObject(rule)) {
    let result = null;
    if (rule.pattern) {
      result = rule.pattern.test(String(argus[0]));
    } else if (utils$1.isFunction(rule.valid)) {
      result = rule.valid.apply(null, argus);
    }
    if (result === true) {
      return true;
    }
    return utils$1.isFunction(rule.message) ? rule.message() : rule.message;
  }
};
const returnArgs = function(prop, message2, type = "other") {
  if (message2 === true || message2 === void 0) {
    return {
      [prop]: { valid: true, message: null, type }
    };
  }
  return {
    [prop]: { valid: false, message: message2, type }
  };
};
const DEFAULT = {
  rules: {},
  combineRules: []
};
class Validator {
  constructor(rules) {
    if (!utils$1.isObject(rules)) {
      console.error("[HeyUI Error] Validator: Please provide the correct validation parameters");
    }
    this.combineRuleResults = {};
    this.rules = {};
    this.combineRules = {};
    this.initRules(rules);
  }
  initRules(rules) {
    let genRules = {};
    utils$1.extend(true, genRules, DEFAULT, rules);
    let keys = Object.keys(valids$2);
    keys.unshift("required");
    for (let v of keys) {
      let validList = rules[v];
      if (utils$1.isArray(validList)) {
        for (let p of validList) {
          let rule = genRules.rules[p];
          if (!utils$1.isObject(rule)) {
            rule = genRules.rules[p] = {};
          }
          if (v == "required") {
            rule.required = true;
          } else {
            rule.type = v;
          }
        }
      }
    }
    this.rules = genRules.rules;
    this.initCombineRules(genRules.combineRules);
  }
  updateRule(rules) {
    this.initRules(rules || {});
  }
  initCombineRules(rules) {
    let genRules = {};
    for (let rule of rules) {
      rule.id = utils$1.uuid();
      let parentRef = "";
      if (rule.parentRef)
        parentRef = `${rule.parentRef}.`;
      for (let ref of rule.refs) {
        let refProp = parentRef + ref;
        if (utils$1.isArray(genRules[refProp])) {
          genRules[refProp].push(rule);
        } else {
          genRules[refProp] = [rule];
        }
      }
    }
    this.combineRules = genRules;
  }
  valid(data, next, allNext) {
    let loadings = [];
    let uuid = utils$1.uuid();
    let result = this.validData(data, {
      uuid,
      next(r) {
        for (let key in r) {
          if (loadings.indexOf(key) > -1) {
            loadings.splice(loadings.indexOf(key), 1);
          }
        }
        utils$1.extend(result, r);
        if (next) {
          next.call(this, r);
        }
        if (allNext && loadings.length == 0) {
          allNext.call(this, result);
        }
      }
    });
    for (let prop in result) {
      if (result[prop].loading) {
        loadings.push(prop);
      }
    }
    if (allNext && loadings.length == 0) {
      allNext.call(this, result);
    }
    return result;
  }
  validData(data, { prop = "", next, sourceData, uuid } = {}) {
    let result = {};
    if (prop != "") {
      result = this.validField(prop, sourceData, { next, uuid });
    }
    if (sourceData == void 0)
      sourceData = data;
    if (utils$1.isArray(data)) {
      for (let i = 0; i < data.length; i++) {
        let nowProp = `${prop}[${i}]`;
        result = extendResult(result, this.validData(data[i], { next, prop: nowProp, sourceData, uuid }));
      }
    } else if (utils$1.isObject(data)) {
      for (let d in data) {
        let nowProp = prop + (prop == "" ? "" : ".") + d;
        result = extendResult(result, this.validData(data[d], { next, prop: nowProp, sourceData, uuid }));
      }
    }
    return result;
  }
  getConfig(prop) {
    let ruleKey = prop;
    if (prop.indexOf("[") > -1 && !this.rules[prop]) {
      ruleKey = prop.replace(/\[\w+\]/, "[]");
    }
    return this.rules[ruleKey];
  }
  setConfig(prop, options2) {
    let ruleKey = prop;
    this.rules[ruleKey] = utils$1.extend(true, this.rules[ruleKey] || {}, options2);
  }
  validFieldBase({ rule, value, parent }) {
    if (rule && Object.keys(rule).length > 0) {
      let result = ruleExecute(valids$1.required, [value]);
      if (rule.required && result !== true) {
        return result;
      }
      if (result === true) {
        if (rule.type) {
          result = ruleExecute(valids$2[rule.type], [value]);
          if (result !== true)
            return result;
        }
        let baseValidKeys = Object.keys(valids$1);
        baseValidKeys.shift();
        for (let key of baseValidKeys) {
          if (!utils$1.isNull(rule[key])) {
            let result2 = ruleExecute(valids$1[key], [value, rule[key]]);
            if (result2 !== true)
              return result2;
          }
        }
        if (!utils$1.isNull(rule.valid)) {
          result = ruleExecute(rule.valid, [value, parent]);
          if (result !== true)
            return result;
        }
      } else {
        if (!utils$1.isNull(rule.validAnyway)) {
          result = ruleExecute(rule.validAnyway, [value, parent]);
          if (result !== true)
            return result;
        }
      }
    }
    return true;
  }
  validField(prop, data, { next, uuid } = {}) {
    if (utils$1.isNull(prop)) {
      return returnArgs(prop);
    }
    let value = utils$1.getKeyValue(data, prop);
    let rule = this.rules[prop] || {};
    let combineRules = this.combineRules[prop] || [];
    if (prop.indexOf("[") > -1) {
      let arrayRuleKey = prop.replace(/\[\w+\]/, "[]");
      rule = utils$1.extend({}, rule, this.rules[prop], this.rules[arrayRuleKey]);
      combineRules = utils$1.extend([], combineRules, this.combineRules[prop], this.combineRules[arrayRuleKey]);
    }
    let parent = data;
    let parentProp = "";
    if (prop.lastIndexOf(".") > -1) {
      parentProp = prop.substr(0, prop.lastIndexOf("."));
      parent = utils$1.getKeyValue(data, parentProp);
    }
    let result = this.validFieldBase({ rule, value, parent });
    if (result !== true) {
      return returnArgs(prop, result, "base");
    }
    result = this.combineRulesValid(combineRules, value, parent, parentProp, uuid);
    let baseResult = returnArgs(prop, void 0, "base");
    if (result === true && utils$1.isFunction(next) && utils$1.isFunction(rule.validAsync)) {
      rule.validAsync.call(null, value, (result1) => {
        let n = returnArgs(prop, result1, "async");
        n[prop].loading = false;
        next(n);
      }, parent, data);
      baseResult[prop].loading = true;
    }
    return utils$1.extend(baseResult, result);
  }
  combineRulesValid(rules, value, parent, parentProp, uuid) {
    if (!rules)
      return true;
    let refValids = {};
    let count = 0;
    for (let rule of rules) {
      let result = null;
      let prop = (rule.parentRef && parentProp ? parentProp + "." : "") + rule.refs[rule.refs.length - 1];
      let combineRuleResult = this.combineRuleResults[rule.id] || {};
      if (uuid && combineRuleResult.uuid == uuid + parentProp) {
        result = combineRuleResult.result;
      } else {
        let values = [];
        for (let ref of rule.refs) {
          let v = utils$1.getKeyValue(parent, ref);
          let refProp = (rule.parentRef && parentProp ? parentProp + "." : "") + ref;
          if (this.validFieldBase({ rule: this.rules[refProp], value: v, parent }) != true) {
            break;
          }
          values.push(v);
        }
        if (values.length < rule.refs.length)
          continue;
        let valid = rule.valid;
        if (utils$1.isObject(valid) && utils$1.isString(valid.valid)) {
          valid.valid = valids[valid.valid];
          if (utils$1.isNull(valid.valid)) {
            throw Error(`There is no validation rule named ${valid}`);
          }
        }
        result = ruleExecute(valid, values);
      }
      count += 1;
      let combineResult = returnArgs(prop, result, "combine");
      if (uuid) {
        this.combineRuleResults[rule.id] = { uuid: uuid + parentProp, result };
      }
      if (!refValids[prop] || refValids[prop].valid) {
        utils$1.extend(refValids, combineResult);
      }
    }
    if (count == 0) {
      return true;
    } else {
      return refValids;
    }
  }
  destroy() {
    this.rules = null;
    this.combineRules = null;
    this.combineRuleResults = null;
  }
}
const COMPLETE = "COMPLETE";
const CANCELED = "CANCELED";
function requestAnimation(task) {
  if ("requestAnimationFrame" in window) {
    return window.requestAnimationFrame(task);
  }
  setTimeout(task, 16);
}
function setElementScroll(element, x, y) {
  if (element === window) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}
function getTargetScrollLocation(target, parent, align) {
  let targetPosition = target.getBoundingClientRect();
  let parentPosition = null;
  let x = null;
  let y = null;
  let differenceX = null;
  let differenceY = null;
  let targetWidth = null;
  let targetHeight = null;
  let leftAlign = align && align.left != null ? align.left : 0.5;
  let topAlign = align && align.top != null ? align.top : 0.5;
  let leftOffset = align && align.leftOffset != null ? align.leftOffset : 0;
  let topOffset = align && align.topOffset != null ? align.topOffset : 0;
  let leftScalar = leftAlign;
  let topScalar = topAlign;
  if (parent === window) {
    targetWidth = Math.min(targetPosition.width, window.innerWidth);
    targetHeight = Math.min(targetPosition.height, window.innerHeight);
    x = targetPosition.left + window.pageXOffset - window.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + window.pageYOffset - window.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    differenceX = x - window.pageXOffset;
    differenceY = y - window.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    let offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    let offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x -= leftOffset;
    y -= topOffset;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }
  return {
    x,
    y,
    differenceX,
    differenceY
  };
}
function animate(parent) {
  requestAnimation(function() {
    let scrollSettings = parent.scrollOption;
    if (!scrollSettings) {
      return;
    }
    let location2 = getTargetScrollLocation(scrollSettings.target, parent, scrollSettings.align);
    let time = Date.now() - scrollSettings.startTime;
    let timeValue = Math.min(1 / scrollSettings.time * time, 1);
    if (time > scrollSettings.time + 20) {
      setElementScroll(parent, location2.x, location2.y);
      parent.scrollOption = null;
      return scrollSettings.end(COMPLETE);
    }
    let easeValue = 1 - scrollSettings.ease(timeValue);
    setElementScroll(parent, location2.x - location2.differenceX * easeValue, location2.y - location2.differenceY * easeValue);
    animate(parent);
  });
}
function transitionScrollTo(target, parent, settings, callback) {
  let idle = !parent.scrollOption;
  let lastSettings = parent.scrollOption;
  let now = Date.now();
  let endHandler;
  if (lastSettings) {
    lastSettings.end(CANCELED);
  }
  function end(endType) {
    parent.scrollOption = null;
    if (parent.parentElement && parent.parentElement.scrollOption) {
      parent.parentElement.scrollOption.end(endType);
    }
    callback(endType);
    parent.removeEventListener("touchstart", endHandler);
  }
  parent.scrollOption = {
    startTime: lastSettings ? lastSettings.startTime : Date.now(),
    target,
    time: settings.time + (lastSettings ? now - lastSettings.startTime : 0),
    ease: settings.ease,
    align: settings.align,
    end
  };
  endHandler = end.bind(null, CANCELED);
  parent.addEventListener("touchstart", endHandler);
  if (idle) {
    animate(parent);
  }
}
function defaultIsScrollable(element) {
  return element === window || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== "hidden";
}
function defaultValidTarget() {
  return true;
}
function ScrollIntoView(target, settings, callback) {
  if (!target) {
    return;
  }
  if (typeof settings === "function") {
    callback = settings;
    settings = null;
  }
  if (!settings) {
    settings = {};
  }
  settings.time = isNaN(settings.time) ? 1e3 : settings.time;
  settings.ease = settings.ease || function(v) {
    return 1 - Math.pow(1 - v, v / 2);
  };
  let parent = target.parentElement;
  let parents = 0;
  function done(endType) {
    parents -= 1;
    if (!parents && callback) {
      callback(endType);
    }
  }
  let validTarget = settings.validTarget || defaultValidTarget;
  let isScrollable = settings.isScrollable;
  while (parent) {
    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents += 1;
      transitionScrollTo(target, parent, settings, done);
    }
    parent = parent.parentElement;
    if (!parent) {
      return;
    }
    if (parent.tagName === "BODY") {
      parent = window;
    }
  }
}
const prefixCls$d = "h-form";
const findDomUtil = function(target, utilDom) {
  let now = target;
  while (now != utilDom) {
    if (utils.hasClass(now, "h-form-item") && now.getAttribute("prop")) {
      return now;
    }
    now = now.parentElement;
  }
  return null;
};
const _sfc_main$O = {
  name: "HForm",
  provide: function() {
    return {
      validField: this.validField,
      requireds: this.requireds,
      removeProp: this.removeProp,
      setConfig: this.setConfig,
      updateErrorMessage: this.updateErrorMessage,
      updateProp: this.updateProp,
      labelWidth: this.labelWidth,
      params: this.childParams
    };
  },
  props: {
    top: {
      type: Number
    },
    topOffset: {
      type: Number,
      default: 0
    },
    mode: {
      type: String,
      default: "single"
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: {
      type: Object,
      default: () => {
      }
    },
    labelPosition: {
      type: String,
      default: "right"
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showErrorTip: {
      type: Boolean,
      default: false
    },
    validOnChange: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      modelStash: null,
      messages: {},
      dynamicRequireds: [],
      requireds: [],
      validator: null,
      childParams: {
        mode: this.mode
      }
    };
  },
  computed: {
    formCls() {
      return {
        [`${prefixCls$d}`]: true,
        [`${prefixCls$d}-${this.mode}`]: true,
        [`${prefixCls$d}-label-${this.labelPosition}`]: !!this.labelPosition,
        [`${prefixCls$d}-readonly`]: this.readonly
      };
    }
  },
  watch: {
    model() {
      this.modelStash = utils.copy(this.model);
    },
    mode() {
      this.childParams.mode = this.mode;
    },
    rules: {
      handler() {
        if (this.validator) {
          if (this.rules)
            this.validator.updateRule(this.rules);
          this.dynamicRequireds.forEach((item) => {
            this.validator.setConfig(item, { required: true });
          });
        } else if (this.model && this.rules) {
          this.validator = new Validator(this.rules);
        }
        this.initRequires();
      },
      deep: true
    }
  },
  beforeMount() {
    if (this.model && this.rules)
      this.validator = new Validator(this.rules);
    if (this.model)
      this.modelStash = utils.copy(this.model);
  },
  unmounted() {
    if (this.validator) {
      this.validator.destroy();
    }
  },
  mounted() {
    this.initRequires();
    this.$nextTick(() => {
      this.$el.addEventListener("blur", (event) => {
        if (event.target.tagName == "INPUT" || event.target.tagName == "TEXTAREA") {
          this.trigger(event.target);
        }
      }, true);
      this.$el.addEventListener("setvalue", (event) => {
        this.trigger(event.target);
      });
    });
  },
  methods: {
    initRequires() {
      this.requireds.splice(0);
      if (this.rules) {
        let validRequiredProps = utils.toArray(this.rules.rules, "key").filter((item) => item.required === true).map((item) => item.key);
        this.requireds.push(...this.rules.required || [], ...validRequiredProps, ...this.dynamicRequireds);
      }
    },
    resetValue() {
      return this.modelStash;
    },
    resetValid() {
      for (let m in this.messages) {
        this.messages[m].valid = true;
      }
    },
    trigger(target) {
      if (!this.validOnChange) {
        return false;
      }
      let formItem = findDomUtil(target, this.$el);
      if (formItem && formItem.getAttribute("validable") == "true") {
        this.validField(formItem.getAttribute("prop"));
      }
    },
    validField(prop) {
      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }
      let returnResult = this.validator.validField(prop, this.model, {
        next: (result) => {
          utils.extend(true, this.messages, result);
        }
      });
      utils.extend(true, this.messages, returnResult);
      return utils.extend({}, this.messages[prop]);
    },
    validFieldJs(prop, next) {
      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }
      let defaultM = this.messages[prop];
      let returnResult = this.validator.validField(prop, this.model, {
        next: () => {
          next(utils.extend({}, defaultM, returnResult[prop]));
        }
      });
      return utils.extend({}, defaultM, returnResult[prop]);
    },
    setConfig(prop, options2) {
      let index2 = this.dynamicRequireds.indexOf(prop);
      if (options2.required) {
        if (index2 == -1) {
          this.dynamicRequireds.push(prop);
        }
      } else if (index2 > -1) {
        this.dynamicRequireds.splice(index2, 1);
      }
      this.initRequires();
      if (!this.validator)
        return false;
      this.validator.setConfig(prop, options2);
    },
    updateErrorMessage(prop, label) {
      let message2 = {
        valid: true,
        message: null,
        label
      };
      if (this.messages[prop]) {
        Object.assign(this.messages[prop], message2);
        return this.messages[prop];
      }
      this.messages[prop] = message2;
      return this.messages[prop];
    },
    updateProp(prop, oldProp) {
      let message2 = utils.copy(this.messages[oldProp]);
      if (utils.isNull(message2)) {
        message2 = {
          valid: true,
          message: null
        };
      }
      this.messages[prop] = message2;
      return message2;
    },
    removeProp(prop) {
      let index2 = this.dynamicRequireds.indexOf(prop);
      if (index2 > -1) {
        this.dynamicRequireds.splice(index2, 1);
      }
      this.setConfig(prop, { required: false });
    },
    renderMessage(returnResult) {
      let isSuccess = true;
      for (let r in returnResult) {
        if (!returnResult[r].valid) {
          isSuccess = false;
          break;
        }
      }
      utils.extend(true, this.messages, returnResult);
      let result = {
        result: isSuccess,
        messages: utils.toArray(this.messages, "prop").filter((item) => !item.valid)
      };
      return result;
    },
    tipError(result) {
      if (result && !result.result) {
        let m = result.messages[0];
        if (this.showErrorTip) {
          if (m.type == "base") {
            message.error(`${m.label}${m.message}`);
          } else {
            message.error(`${m.message}`);
          }
        }
        this.$nextTick(() => {
          let firstError = this.$el.querySelector(`.h-form-item-valid-error[prop='${m.prop}']`);
          if (firstError) {
            ScrollIntoView(firstError, {
              time: 500,
              align: {
                top: this.top,
                topOffset: this.topOffset
              }
            });
          }
        });
      }
    },
    validAsync() {
      return new Promise((resolve) => {
        let returnResult = this.valid((result) => {
          let asyncResult = this.renderMessage(result);
          if (returnResult && returnResult.result) {
            this.tipError(asyncResult);
          }
          resolve(asyncResult);
        });
      });
    },
    valid(next) {
      if (!this.validator || !this.model) {
        return {
          result: true,
          messages: []
        };
      }
      let returnResult = this.validator.valid(this.model, (result2) => {
        utils.extend(true, this.messages, result2);
      }, (result2) => {
        if (next) {
          next.call(null, result2);
        }
      });
      let result = this.renderMessage(returnResult);
      this.tipError(result);
      return result;
    }
  }
};
function _sfc_render$O(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.formCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Form = /* @__PURE__ */ _export_sfc(_sfc_main$O, [["render", _sfc_render$O]]);
const prefixCls$c = "h-form-item";
const _sfc_main$N = {
  name: "HFormItem",
  inject: ["validField", "removeProp", "requireds", "setConfig", "updateProp", "updateErrorMessage", "labelWidth", "params"],
  props: {
    label: String,
    prop: String,
    icon: String,
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    single: {
      type: Boolean,
      default: false
    },
    validable: {
      type: Boolean,
      default: true
    },
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      validResult: null,
      errorMessage: { valid: true }
    };
  },
  computed: {
    configRequired() {
      if (!this.prop)
        return false;
      const ruleKey = this.prop.replace(/\[\w+\]/, "[]");
      return this.requireds.indexOf(this.prop) > -1 || this.requireds.indexOf(ruleKey) > -1;
    },
    initLabelWidth() {
      let mode = this.params.mode;
      let hasWidth = !(mode == "block" || mode == "inline") || this.single && mode == "twocolumn";
      let width = hasWidth ? this.labelWidth || false : false;
      return width ? `${width}px` : "auto";
    },
    formItemCls() {
      return {
        [`${prefixCls$c}`]: true,
        [`${prefixCls$c}-single`]: this.single,
        [`${prefixCls$c}-readonly`]: !!this.readonly,
        [`${prefixCls$c}-required`]: this.required || this.configRequired,
        [`${prefixCls$c}-valid-error`]: !this.errorMessage.valid,
        [`${prefixCls$c}-no-padding`]: !!this.noPadding
      };
    },
    labelCls() {
      return {
        [`${prefixCls$c}-label`]: true
      };
    },
    labelStyleCls() {
      let param = {};
      if (this.params.mode != "block") {
        param.width = this.initLabelWidth;
      } else {
        param.width = "100%";
      }
      return param;
    },
    contentStyleCls() {
      let param = {};
      if (this.params.mode == "block" || !this.showLabel) {
        param["margin-left"] = "0px";
      } else {
        param["margin-left"] = this.initLabelWidth;
      }
      return param;
    }
  },
  watch: {
    prop(prop, oldProp) {
      if (this.prop) {
        this.errorMessage = this.updateProp(prop, oldProp);
      }
    },
    label() {
      if (this.prop) {
        this.errorMessage = this.updateErrorMessage(this.prop, this.label);
      }
    },
    required() {
      this.setConfig(this.prop, { required: this.required });
    }
  },
  beforeUnmount() {
    if (this.prop && this.required) {
      this.removeProp(this.prop);
    }
  },
  mounted() {
    if (this.prop) {
      if (this.required) {
        this.setConfig(this.prop, { required: this.required });
      }
      this.errorMessage = this.updateErrorMessage(this.prop, this.label);
    }
  },
  methods: {
    reset() {
      console.warn("[HeyUI WARNING] FormItem Component:  FormItem.reset() will be decapitated, please use method FormItem.resetValid()");
      this.errorMessage.valid = true;
    },
    resetValid() {
      this.errorMessage.valid = true;
    },
    trigger() {
      let prop = this.prop;
      if (!this.validable || utils.isNull(prop)) {
        return;
      }
      this.validField(prop);
    }
  }
};
const _hoisted_1$A = ["prop", "validable"];
const _hoisted_2$t = { key: 1 };
const _hoisted_3$o = { class: "h-form-item-wrap" };
const _hoisted_4$h = {
  key: 0,
  class: "h-form-item-error"
};
const _hoisted_5$f = {
  key: 0,
  class: "h-form-item-error-label"
};
const _hoisted_6$f = { class: "h-form-item-error-message" };
function _sfc_render$N(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.formItemCls),
    prop: $props.prop,
    validable: $props.validable
  }, [
    $props.showLabel ? (openBlock(), createElementBlock("label", {
      key: 0,
      style: normalizeStyle($options.labelStyleCls),
      class: "h-form-item-label"
    }, [
      $props.icon ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass({ [$props.icon]: true, "h-form-item-label-icon": true })
      }, null, 2)) : createCommentVNode("", true),
      !_ctx.$slots.label ? (openBlock(), createElementBlock("span", _hoisted_2$t, toDisplayString($props.label), 1)) : renderSlot(_ctx.$slots, "label", {
        key: 2,
        label: $props.label
      })
    ], 4)) : createCommentVNode("", true),
    createElementVNode("div", {
      class: "h-form-item-content",
      style: normalizeStyle($options.contentStyleCls)
    }, [
      createElementVNode("div", _hoisted_3$o, [
        renderSlot(_ctx.$slots, "default")
      ]),
      !$data.errorMessage.valid ? (openBlock(), createElementBlock("div", _hoisted_4$h, [
        $data.errorMessage.type == "base" ? (openBlock(), createElementBlock("span", _hoisted_5$f, toDisplayString($props.label), 1)) : createCommentVNode("", true),
        createElementVNode("span", _hoisted_6$f, toDisplayString($data.errorMessage.message), 1),
        renderSlot(_ctx.$slots, "error", {
          type: $data.errorMessage.type
        })
      ])) : createCommentVNode("", true)
    ], 4)
  ], 10, _hoisted_1$A);
}
var FormItem = /* @__PURE__ */ _export_sfc(_sfc_main$N, [["render", _sfc_render$N]]);
class Tooltip$1 extends Pop {
  constructor(el, param) {
    param.template = `<div class="h-tooltip" role="tooltip"><div class="h-tooltip-arrow"></div><div class="h-tooltip-inner"></div></div>`;
    param.arrowSelector = ".h-tooltip-arrow";
    param.innerSelector = ".h-tooltip-inner";
    let classes = [];
    if (param.theme) {
      classes.push(`h-tooltip-${param.theme}`);
    }
    if (param.editable) {
      classes.push(`h-tooltip-editable`);
    }
    param.class = classes.join(" ");
    param.type = "tooltip";
    param.trigger = param.trigger || "hover focus";
    super(el, param);
  }
  updateTemplate(content, html) {
    utils.extend(this.options, { content, html });
    this.updateContent(content, html);
  }
}
const getContent = function(el, vnode) {
  let param = {};
  let attrs = vnode.props || {};
  if (attrs.content === "")
    return false;
  if (attrs.content) {
    param.content = attrs.content;
  }
  if (attrs.className) {
    param.className = attrs.className;
  }
  if (attrs.maxWidth) {
    param.maxWidth = attrs.maxWidth;
  }
  if (!vnode.el.querySelector) {
    return false;
  }
  if (param.content) {
    param.content = `<div class="h-tooltip-inner-content">${param.content}</div>`;
    param.html = true;
  } else if (el.innerText) {
    param.content = `<div class="h-tooltip-inner-content">${el.innerText}</div>`;
    param.html = true;
  }
  return param;
};
const init = function(el, binding, vnode) {
  if (binding.value === false) {
    return;
  }
  let param = getContent(el, vnode);
  if (param == false)
    return;
  let attrs = vnode.props || {};
  param.container = document.body;
  param = utils.initParam(param, attrs, ["placement", "theme", "delay", "trigger"]);
  el.tooltip = new Tooltip$1(el, param);
};
var tooltip = {
  mounted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  beforeUpdate(el, binding, vnode) {
    if (el.tooltip) {
      nextTick(() => {
        if (binding.value === false) {
          el.tooltip.destory();
          el.tooltip = null;
          return;
        }
        let param = getContent(el, vnode);
        if (param == false) {
          el.tooltip.destory();
        } else {
          el.tooltip.updateTemplate(param.content, param.html);
        }
      });
    } else {
      init(el, binding, vnode);
    }
  },
  beforeUnmount(el) {
    if (el.tooltip) {
      el.tooltip.destory();
      delete el.tooltip;
    }
  }
};
const _sfc_main$M = {
  name: "HMenuItemShow",
  directives: { tooltip },
  emits: ["clickItem"],
  props: {
    data: Object,
    param: Object,
    status: Object,
    mode: String
  },
  data() {
    return {};
  },
  methods: {
    togglemenu(data) {
      this.$emit("clickItem", { type: "togglemenuEvent", data });
    }
  }
};
const _hoisted_1$z = { class: "h-menu-show-icon" };
const _hoisted_2$s = { class: "h-menu-show-desc" };
const _hoisted_3$n = {
  key: 0,
  class: "h-menu-show-count"
};
const _hoisted_4$g = {
  key: 1,
  class: "h-menu-show-expand"
};
const _hoisted_5$e = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-angle-down" }, null, -1);
const _hoisted_6$e = [
  _hoisted_5$e
];
function _sfc_render$M(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Badge = resolveComponent("Badge");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-menu-show", { "h-menu-show-disabled": $props.data.status.disabled, "h-menu-li-selected": $props.data.key && $props.status.selected == $props.data.key }]),
    onClick: _cache[0] || (_cache[0] = ($event) => $options.togglemenu($props.data))
  }, [
    withDirectives(createElementVNode("span", _hoisted_1$z, [
      createElementVNode("i", {
        class: normalizeClass($props.data.icon)
      }, null, 2)
    ], 512), [
      [vShow, $props.data.icon]
    ]),
    createElementVNode("span", _hoisted_2$s, toDisplayString($props.data.title), 1),
    $props.data.count ? (openBlock(), createElementBlock("span", _hoisted_3$n, [
      createVNode(_component_Badge, {
        count: $props.data.count,
        "max-count": 99
      }, null, 8, ["count"])
    ])) : createCommentVNode("", true),
    $props.mode != "horizontal" && $props.data.children && $props.data.children.length > 0 ? (openBlock(), createElementBlock("span", _hoisted_4$g, _hoisted_6$e)) : createCommentVNode("", true)
  ], 2);
}
var MenuItemShow = /* @__PURE__ */ _export_sfc(_sfc_main$M, [["render", _sfc_render$M]]);
const prefix$m = "h-tooltip";
const _sfc_main$L = {
  name: "HTooltip",
  emits: ["show", "hide"],
  props: {
    trigger: {
      type: String,
      default: "hover"
    },
    content: [String, Number],
    placement: {
      type: String,
      default: "top"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    editable: {
      type: Boolean,
      default: false
    },
    className: {
      type: String
    },
    theme: String,
    delay: {
      type: Number,
      default: 0
    },
    maxWidth: Number
  },
  computed: {
    tooltipCls() {
      return {
        [`${prefix$m}`]: true
      };
    },
    showCls() {
      return {
        [`${prefix$m}-show`]: true
      };
    },
    groupCls() {
      return {
        [`${prefix$m}`]: true
      };
    }
  },
  watch: {
    disabled() {
      if (!this.tooltip)
        return;
      if (!this.disabled) {
        this.tooltip.enabled();
      } else {
        this.tooltip.disabled();
      }
    },
    content() {
      if (!this.tooltip)
        return;
      this.tooltip.update();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    show() {
      if (this.tooltip) {
        this.tooltip.show();
      }
    },
    hide() {
      if (this.tooltip) {
        this.tooltip.hide();
      }
    },
    update() {
      if (this.tooltip) {
        this.tooltip.update();
      }
    },
    init() {
      this.$nextTick(() => {
        let el = this.$el.nextElementSibling;
        let content = this.$refs.content;
        this.tooltip = new Tooltip$1(el, {
          content,
          theme: this.theme,
          html: true,
          trigger: this.trigger,
          editable: this.editable,
          className: this.className,
          container: document.body,
          placement: this.placement,
          disabled: this.disabled,
          maxWidth: this.maxWidth,
          delay: this.delay,
          events: {
            show: () => {
              this.$emit("show");
            },
            hide: () => {
              this.$emit("hide");
            }
          }
        });
      });
    }
  }
};
const _hoisted_1$y = {
  class: "h-tooltip-inner-content",
  ref: "content"
};
function _sfc_render$L(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock(Fragment, null, [
    renderSlot(_ctx.$slots, "default", normalizeProps(guardReactiveProps(_ctx.$attrs))),
    (openBlock(), createBlock(Teleport, { to: "body" }, [
      createElementVNode("div", _hoisted_1$y, [
        createTextVNode(toDisplayString($props.content), 1),
        renderSlot(_ctx.$slots, "content")
      ], 512)
    ]))
  ], 64);
}
var Tooltip = /* @__PURE__ */ _export_sfc(_sfc_main$L, [["render", _sfc_render$L]]);
const _sfc_main$K = {
  name: "HMenuItem",
  components: {
    MenuItemShow,
    Tooltip
  },
  emits: ["trigger"],
  props: {
    data: Object,
    param: Object,
    status: Object,
    mode: String
  },
  data() {
    return {};
  },
  computed: {
    href() {
      let href = this.data.value.href;
      if (href) {
        if (utils.isString(href)) {
          return href;
        } else if (this.$router) {
          return this.$router.resolve(href).href;
        }
      }
      return null;
    }
  },
  methods: {
    clickItem(data) {
      this.$emit("trigger", data);
    },
    triggerClick(event) {
      if (this.data.value.nativeLink !== true && !(event.altKey || event.ctrlKey || event.shiftKey || event.metaKey)) {
        event.preventDefault();
      }
    }
  }
};
const _hoisted_1$x = ["target", "href"];
const _hoisted_2$r = {
  key: 3,
  class: "h-menu-other-levels"
};
function _sfc_render$K(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_MenuItemShow = resolveComponent("MenuItemShow");
  const _component_Tooltip = resolveComponent("Tooltip");
  const _component_hMenuItem = resolveComponent("hMenuItem");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["h-menu-li", { "h-menu-li-opened": $props.status.opened.indexOf($props.data.key) != -1 }])
  }, [
    $props.data.value.href ? (openBlock(), createElementBlock("a", {
      key: 0,
      target: $props.data.value.target,
      class: "h-menu-link",
      href: $options.href,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.triggerClick && $options.triggerClick(...args))
    }, [
      createVNode(_component_MenuItemShow, mergeProps(_ctx.$props, { onClickItem: $options.clickItem }), null, 16, ["onClickItem"])
    ], 8, _hoisted_1$x)) : $props.mode === "collapse" && !$props.data.children.length ? (openBlock(), createBlock(_component_Tooltip, {
      key: 1,
      content: $props.data.title,
      placement: "right"
    }, {
      default: withCtx(() => [
        createVNode(_component_MenuItemShow, mergeProps(_ctx.$props, { onClickItem: $options.clickItem }), null, 16, ["onClickItem"])
      ]),
      _: 1
    }, 8, ["content"])) : (openBlock(), createBlock(_component_MenuItemShow, mergeProps({ key: 2 }, _ctx.$props, { onClickItem: $options.clickItem }), null, 16, ["onClickItem"])),
    $props.data.children && $props.data.children.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_2$r, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.data.children, (child) => {
        return openBlock(), createBlock(_component_hMenuItem, {
          key: child.key,
          data: child,
          param: $props.param,
          status: $props.status,
          onTrigger: $options.clickItem
        }, null, 8, ["data", "param", "status", "onTrigger"]);
      }), 128))
    ])) : createCommentVNode("", true)
  ], 2);
}
var hMenuItem = /* @__PURE__ */ _export_sfc(_sfc_main$K, [["render", _sfc_render$K]]);
const prefix$l = "h-menu";
const initStatus = (list = [], param, parent) => {
  let datas = [];
  for (let data of list) {
    let obj = {
      key: data[param.keyName],
      title: data[param.titleName],
      icon: data.icon,
      count: data.count,
      value: data,
      status: { opened: false, disabled: !!data.disabled },
      parent
    };
    let children = data[param.childrenName] || [];
    obj.children = initStatus(children, param, obj);
    datas.push(obj);
  }
  return datas;
};
const getObj = (list = [], param) => {
  let obj = {};
  for (let data of list) {
    let key = data.key;
    if (key) {
      obj[key] = data;
    }
    let children = data.children;
    if (children && children.length) {
      utils.extend(obj, getObj(children));
    }
  }
  return obj;
};
const updateOpened = (obj) => {
  let openedList = [];
  if (obj.parent) {
    openedList.push(obj.parent.key);
    openedList.push(...updateOpened(obj.parent));
  }
  return openedList;
};
const Props$3 = {
  mode: ["vertical", "horizontal", "collapse", "half-collapse"]
};
const _sfc_main$J = {
  name: "HMenu",
  components: {
    hMenuItem
  },
  emits: ["clickItem", "select"],
  props: {
    option: Object,
    datas: {
      type: Array,
      default: () => []
    },
    className: {
      type: String,
      default: "h-menu-dark"
    },
    accordion: {
      type: Boolean,
      default: false
    },
    mode: {
      type: String,
      validator(value) {
        return Props$3.mode.indexOf(value) > -1;
      },
      default: "vertical"
    },
    activeAll: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let param = {};
    param = utils.extend({}, func.getOption("menu"), this.option);
    return {
      param,
      status: {
        selected: null,
        opened: []
      }
    };
  },
  computed: {
    classes() {
      return {
        [`${prefix$l}`]: true,
        [this.className]: true,
        [`${prefix$l}-mode-${this.mode}`]: this.mode
      };
    },
    menuobj() {
      return getObj(this.menuDatas);
    },
    menuDatas() {
      return initStatus(this.datas, this.param);
    }
  },
  methods: {
    select(key) {
      let selected = this.menuobj[key];
      if (selected) {
        this.status.selected = key;
        this.status.opened = updateOpened(selected);
      } else {
        this.status.selected = null;
        this.status.opened = [];
      }
    },
    trigger(data) {
      if (data.type == "togglemenuEvent") {
        let menu = data.data;
        this.status.opened = utils.toggleValue(this.status.opened, menu.key);
        if (this.accordion && this.status.opened.indexOf(menu.key) > -1) {
          for (let key in this.menuobj) {
            let mo = this.menuobj[key];
            if (mo.parent === menu.parent && menu.key != key && this.status.opened.indexOf(mo.key) > -1) {
              this.status.opened.splice(this.status.opened.indexOf(mo.key), 1);
            }
          }
        }
        this.$emit("clickItem", menu);
        let isParent = menu.children && menu.children.length > 0;
        if (isParent && (!this.activeAll || this.status.selected == menu.key)) {
          return;
        }
        this.status.selected = menu.key;
        this.$emit("select", menu.value);
      }
    }
  }
};
function _sfc_render$J(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_hMenuItem = resolveComponent("hMenuItem");
  return openBlock(), createElementBlock("ul", {
    class: normalizeClass($options.classes)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.menuDatas, (menu) => {
      return openBlock(), createBlock(_component_hMenuItem, {
        key: menu.key,
        class: "h-menu-first-level",
        data: menu,
        param: $data.param,
        status: $data.status,
        mode: $props.mode,
        onTrigger: $options.trigger
      }, null, 8, ["data", "param", "status", "mode", "onTrigger"]);
    }), 128))
  ], 2);
}
var Menu = /* @__PURE__ */ _export_sfc(_sfc_main$J, [["render", _sfc_render$J]]);
const prefix$k = "h-modal";
const notifyprefix$1 = "h-notify";
const _sfc_main$I = {
  name: "HModal",
  emits: ["open", "close", "update:modelValue"],
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: false
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: () => func.getOption("modal", "hasDivider")
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    draggable: {
      type: Boolean,
      default: false
    },
    transparent: {
      type: Boolean,
      default: false
    },
    className: String,
    type: String,
    title: String
  },
  data() {
    return {
      isOpened: this.modelValue,
      isShow: this.modelValue,
      el: null
    };
  },
  computed: {
    noticeCls() {
      return {
        [prefix$k]: true,
        [notifyprefix$1]: true,
        [`${prefix$k}-type-default`]: !this.type,
        [`${notifyprefix$1}-show`]: this.isOpened,
        [`${notifyprefix$1}-has-mask`]: this.hasMask,
        [`${notifyprefix$1}-no-mask`]: !this.hasMask,
        [`${notifyprefix$1}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix$1}-draggable`]: this.draggable,
        [`${prefix$k}-has-divider`]: this.hasDivider,
        [`${prefix$k}-container-center`]: !!this.middle,
        [`${prefix$k}-type-${this.type}`]: this.type,
        [`${prefix$k}-transparent`]: this.transparent,
        [`${prefix$k}-full-screen`]: this.fullScreen,
        [this.className]: !!this.className
      };
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    }
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        this.show();
      } else {
        this.hide();
      }
    },
    draggable() {
      this.doDraggable();
    }
  },
  mounted() {
    let el = this.$refs.modal;
    this.modelElement = el;
    this.$nextTick(() => {
      if (!this.modelValue) {
        el.style.display = "none";
      }
      this.doDraggable();
    });
  },
  beforeUnmount() {
    let el = this.modelElement;
    if (el) {
      el.style.display = "none";
      this.removeDraggable();
    }
  },
  methods: {
    removeDraggable() {
      if (this.drag)
        this.drag.destroy();
    },
    doDraggable() {
      if (this.drag)
        this.drag.destroy();
      if (!this.draggable)
        return;
      const $container = this.modelElement.querySelector(`.h-notify-container`);
      if (!$container)
        return;
      let x = 0;
      let y = 0;
      let rect = null;
      let header = $container.querySelector(".h-modal-header");
      if (header) {
        this.drag = new Draggable(header, {
          start(event) {
            x = event.clientX;
            y = event.clientY;
            rect = $container.getBoundingClientRect();
            $container.style.left = `${rect.left}px`;
            $container.style.top = `${rect.top}px`;
            $container.style.transform = "initial";
            $container.style.transition = "none";
          },
          drag(event) {
            let offsetX = event.clientX - x;
            let offsetY = event.clientY - y;
            $container.style.left = `${rect.left + offsetX}px`;
            $container.style.top = `${rect.top + offsetY}px`;
          }
        });
      }
    },
    show() {
      let el = this.modelElement;
      el.style.display = "block";
      this.isShow = true;
      if (this.hasMask) {
        let body = document.documentElement;
        let scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = "hidden";
        body.style.paddingRight = `${scrollWidth}px`;
      }
      setTimeout(() => {
        this.isOpened = true;
        this.doDraggable();
        this.$emit("open");
      }, 100);
    },
    hide() {
      let el = this.modelElement;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = "none";
        this.isShow = false;
        this.removeDraggable();
        this.$emit("close");
      }, 200);
      let body = document.documentElement;
      body.style.overflow = "";
      body.style.paddingRight = "";
    },
    setvalue(fromMask) {
      if (!fromMask || fromMask && this.hasMask && this.closeOnMask) {
        this.$emit("update:modelValue", false);
      }
    }
  }
};
const _hoisted_1$w = {
  key: 0,
  class: "h-notify-container"
};
const _hoisted_2$q = { class: "h-notify-content" };
const _hoisted_3$m = {
  key: 1,
  class: "h-modal-header"
};
const _hoisted_4$f = {
  key: 0,
  class: "h-modal-title"
};
const _hoisted_5$d = { class: "h-notify-body" };
const _hoisted_6$d = {
  key: 2,
  class: "h-modal-footer"
};
function _sfc_render$I(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: "body" }, [
    createElementVNode("div", {
      ref: "modal",
      class: normalizeClass($options.noticeCls)
    }, [
      $props.hasMask ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "h-notify-mask",
        onClick: _cache[0] || (_cache[0] = ($event) => $options.setvalue(true))
      })) : createCommentVNode("", true),
      createElementVNode("div", {
        class: "h-notify-wrap",
        onClick: _cache[2] || (_cache[2] = withModifiers(($event) => $options.setvalue(true), ["self"]))
      }, [
        createVNode(Transition, {
          name: $props.type,
          persisted: false
        }, {
          default: withCtx(() => [
            $data.isShow ? (openBlock(), createElementBlock("div", _hoisted_1$w, [
              createElementVNode("div", _hoisted_2$q, [
                $props.hasCloseIcon ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "h-notify-close h-icon-close",
                  onClick: _cache[1] || (_cache[1] = ($event) => $options.setvalue(false))
                })) : createCommentVNode("", true),
                $options.hasHeader || $props.title ? (openBlock(), createElementBlock("header", _hoisted_3$m, [
                  $props.title ? (openBlock(), createElementBlock("span", _hoisted_4$f, toDisplayString($props.title), 1)) : createCommentVNode("", true),
                  renderSlot(_ctx.$slots, "header")
                ])) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_5$d, [
                  renderSlot(_ctx.$slots, "default")
                ]),
                $options.hasFooter ? (openBlock(), createElementBlock("footer", _hoisted_6$d, [
                  renderSlot(_ctx.$slots, "footer")
                ])) : createCommentVNode("", true)
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        }, 8, ["name"])
      ])
    ], 2)
  ]);
}
var Modal$1 = /* @__PURE__ */ _export_sfc(_sfc_main$I, [["render", _sfc_render$I]]);
const prefix$j = "h-notice";
const notifyprefix = "h-notify";
let noticeDom = document.querySelector(`.${prefix$j}-container`);
if (!noticeDom) {
  noticeDom = document.createElement("div");
  utils.addClass(noticeDom, `${prefix$j}-container`);
  document.body.appendChild(noticeDom);
}
const _sfc_main$H = {
  name: "HNotice",
  emits: ["update:modelValue"],
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    modelValue: {
      type: Boolean,
      default: false
    },
    fullScreen: {
      type: Boolean,
      default: false
    },
    className: String,
    timeout: {
      type: Number,
      default: 4e3
    }
  },
  data() {
    return {
      isOpened: this.modelValue,
      isShow: this.modelValue,
      el: null
    };
  },
  computed: {
    noticeCls() {
      return {
        [prefix$j]: true,
        [notifyprefix]: true,
        [`${notifyprefix}-no-mask`]: true,
        [`${notifyprefix}-has-close`]: this.hasCloseIcon,
        [`${notifyprefix}-has-icon`]: true,
        [`${notifyprefix}-show`]: this.isOpened,
        [this.className]: !!this.className
      };
    },
    hasHeader() {
      return !!this.$slots.header;
    },
    hasFooter() {
      return !!this.$slots.footer;
    }
  },
  watch: {
    modelValue() {
      if (this.modelValue) {
        this.show();
      } else {
        this.hide();
      }
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$refs.notice;
      if (!this.modelValue) {
        el.style.display = "none";
      } else {
        this.show();
      }
    });
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
    }
  },
  methods: {
    show() {
      let el = this.el;
      el.style.display = "block";
      this.isShow = true;
      setTimeout(() => {
        this.isOpened = true;
      }, 100);
      if (this.timeout) {
        setTimeout(() => {
          this.close();
        }, this.timeout);
      }
    },
    hide() {
      let el = this.el;
      this.isOpened = false;
      setTimeout(() => {
        el.style.display = "none";
        this.isShow = false;
      }, 200);
    },
    close() {
      this.$emit("update:modelValue", false);
    }
  }
};
const _hoisted_1$v = {
  key: 0,
  class: "h-notify-container"
};
const _hoisted_2$p = { class: "h-notify-content" };
const _hoisted_3$l = { class: "h-notify-body" };
function _sfc_render$H(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createBlock(Teleport, { to: ".h-notice-container" }, [
    createElementVNode("div", {
      ref: "notice",
      class: normalizeClass($options.noticeCls)
    }, [
      createElementVNode("div", null, [
        createVNode(Transition, null, {
          default: withCtx(() => [
            $data.isShow ? (openBlock(), createElementBlock("div", _hoisted_1$v, [
              createElementVNode("div", _hoisted_2$p, [
                $props.hasCloseIcon ? (openBlock(), createElementBlock("span", {
                  key: 0,
                  class: "h-notify-close h-icon-close",
                  onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
                })) : createCommentVNode("", true),
                createElementVNode("div", _hoisted_3$l, [
                  renderSlot(_ctx.$slots, "default")
                ])
              ])
            ])) : createCommentVNode("", true)
          ]),
          _: 3
        })
      ])
    ], 2)
  ]);
}
var Notice$1 = /* @__PURE__ */ _export_sfc(_sfc_main$H, [["render", _sfc_render$H]]);
const prefix$i = "h-select";
const _sfc_main$G = {
  name: "HSelect",
  mixins: [Locale],
  emits: ["update:modelValue", "change"],
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    type: {
      type: [String],
      default: "key"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    limit: {
      type: Number
    },
    deletable: {
      type: Boolean,
      default: true
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    emptyContent: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    },
    equalWidth: {
      type: Boolean,
      default: true
    },
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    },
    optionRender: Function,
    modelValue: [Number, String, Array, Object],
    className: String
  },
  data() {
    return {
      html: "select_render_html",
      codes: [],
      objects: {},
      searchInput: "",
      nowSelected: -1,
      isShow: false,
      content: null
    };
  },
  computed: {
    hasClose() {
      return this.deletable && !this.multiple && this.hasValue && !this.disabled;
    },
    hasValue() {
      if (this.multiple) {
        return this.codes.length > 0;
      } else {
        return !utils.isNull(this.codes) && this.objects;
      }
    },
    singleValue() {
      if (this.hasValue) {
        return this.objects[this.titleName];
      } else {
        return null;
      }
    },
    showEmptyContent() {
      return this.emptyContent || this.hlang("h.select.emptyContent");
    },
    hasLabel() {
      return this.options.some((item) => item.isLabel);
    },
    selectCls() {
      let autosize2 = this.autosize || !!this.noBorder;
      return {
        [`${prefix$i}`]: true,
        [`${prefix$i}-input-border`]: !this.noBorder,
        [`${prefix$i}-input-no-border`]: this.noBorder,
        [`${prefix$i}-multiple`]: this.multiple,
        [`${prefix$i}-no-autosize`]: !autosize2,
        [`${prefix$i}-disabled`]: this.disabled
      };
    },
    showCls() {
      return {
        [`${prefix$i}-show`]: true,
        [`${this.className}-show`]: !!this.className
      };
    },
    groupCls() {
      return {
        [`${prefix$i}-group`]: true,
        [`${prefix$i}-group-has-label`]: this.hasLabel,
        [`${prefix$i}-multiple`]: this.multiple,
        [`${prefix$i}-single`]: !this.multiple,
        [`${this.className}-dropdown`]: !!this.className
      };
    },
    optionsMap() {
      let optionsMap = utils.toObject(this.options, this.keyName);
      delete optionsMap.null;
      return optionsMap;
    },
    filterOptions() {
      if (this.searchInput) {
        if (this.dropdown)
          this.dropdown.update();
        let searchValue = this.searchInput.toLowerCase();
        return this.options.filter((item) => {
          return (item[this.html] || item[this.titleName]).toLowerCase().indexOf(searchValue) != -1;
        });
      }
      return this.options;
    },
    options() {
      if (!this.datas && !this.dict) {
        console.error("[HeyUI Error] Select Component: Datas or dict parameters need to be defined at least.");
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      datas = func.initOptions(datas, this);
      return datas;
    }
  },
  watch: {
    datas() {
      this.parse();
    },
    modelValue() {
      this.parse();
    },
    disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    },
    searchInput() {
      this.nowSelected = -1;
    },
    nowSelected() {
      this.$nextTick(() => {
        if (this.content && this.nowSelected > -1) {
          let dom = this.content.querySelector(".h-select-item-picked");
          let uldom = this.content.querySelector(".h-select-list");
          if (dom && uldom) {
            if (dom.offsetTop + dom.offsetHeight - uldom.scrollTop > uldom.offsetHeight) {
              uldom.scrollTop = dom.offsetTop + dom.offsetHeight - uldom.offsetHeight;
            } else if (dom.offsetTop - uldom.scrollTop < 0) {
              uldom.scrollTop = dom.offsetTop;
            }
          }
        }
      });
    }
  },
  beforeMount() {
    this.parse();
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(".h-select-show");
      let content = this.content = this.$el.querySelector(".h-select-group");
      let that = this;
      this.dropdown = new Dropdown(el, {
        content,
        disabled: this.disabled,
        equalWidth: this.equalWidth,
        trigger: "click foucs",
        triggerOnce: this.filterable,
        events: {
          show() {
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    focusSearchInput() {
      this.$el.querySelector(".h-select-search-input").focus();
    },
    handle(event) {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 38) {
        if (this.nowSelected > 0) {
          this.nowSelected -= 1;
        }
      } else if (code == 40) {
        if (this.nowSelected < this.filterOptions.length - 1) {
          this.nowSelected += 1;
        }
      }
    },
    enterHandle(event) {
      event.preventDefault();
      if (this.nowSelected >= 0) {
        this.setvalue(this.filterOptions[this.nowSelected], "enter");
        if (!this.multiple) {
          event.target.blur();
        }
      }
    },
    blurHandle() {
      this.nowSelected = -1;
      setTimeout(() => {
        this.searchInput = "";
      }, 300);
    },
    search(value) {
      this.searchInput = value;
    },
    clear() {
      this.setvalue({
        [`${this.keyName}`]: null
      }, "clear");
    },
    setObjects() {
      if (this.multiple) {
        let os = [];
        for (let code of this.codes) {
          if (this.optionsMap[code] == null) {
            continue;
          }
          os.push(this.optionsMap[code]);
        }
        this.objects = os;
      } else {
        this.objects = this.optionsMap[this.codes];
      }
    },
    parse() {
      if (this.multiple) {
        let values = this.modelValue || [];
        if (!utils.isArray(values)) {
          console.warn(`[HeyUI WARNING] Select Component: value '${values}' can't be a value of a multiple select`);
          values = [];
        }
        this.codes = values.map((item) => {
          return this.type == "key" ? this.getValue(item) : item[this.keyName];
        }).filter((item) => item !== null);
      } else {
        if (this.type == "key") {
          this.codes = this.getValue(this.modelValue);
        } else {
          if (utils.isObject(this.modelValue)) {
            this.codes = this.modelValue[this.keyName];
          } else {
            this.codes = null;
          }
        }
      }
      this.setObjects();
    },
    getValue(value) {
      return utils.isNull(value) ? null : value;
    },
    setvalue(option) {
      if (this.disabled)
        return;
      if (option.disabled || option.isLabel)
        return;
      let code = option[this.keyName];
      if (this.multiple) {
        if (!utils.isNull(this.limit) && !this.isIncludes(code) && this.codes.length >= this.limit) {
          message.error(this.hlang("h.select.limitSize", { limitSize: this.limit }));
          return;
        }
        this.codes = utils.toggleValue(this.codes, code);
      } else {
        this.codes = code;
      }
      this.setObjects();
      let value = this.type == "key" ? this.codes : this.objects;
      this.$emit("update:modelValue", value);
      this.$emit("change", this.objects);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.objects);
      this.$el.dispatchEvent(event);
      this.nowSelected = -1;
      if (this.multiple) {
        this.searchInput = "";
        this.$nextTick(() => {
          this.dropdown.update();
        });
      } else {
        this.dropdown.hide();
        setTimeout(() => {
          this.searchInput = "";
        }, 100);
      }
    },
    isIncludes(code) {
      return this.codes.some((item) => this.isEqual(item, code));
    },
    isEqual(item, code) {
      return item == code && String(item) == String(code);
    },
    getLiCls(option, index2) {
      let code = option[this.keyName];
      if (option.isLabel) {
        return {
          [`${prefix$i}-item-label`]: option.isLabel
        };
      } else {
        return {
          [`${prefix$i}-item-disabled`]: option.disabled,
          [`${prefix$i}-item`]: true,
          [`${prefix$i}-item-selected`]: this.multiple ? this.isIncludes(code) : this.isEqual(this.codes, code),
          [`${prefix$i}-item-picked`]: this.nowSelected === index2
        };
      }
    }
  }
};
const _hoisted_1$u = { class: "h-select-multiple-tags" };
const _hoisted_2$o = ["onClick"];
const _hoisted_3$k = ["disabled", "placeholder"];
const _hoisted_4$e = {
  key: 0,
  class: "h-select-placeholder"
};
const _hoisted_5$c = ["disabled", "placeholder"];
const _hoisted_6$c = {
  key: 0,
  class: "h-select-value-single"
};
const _hoisted_7$9 = {
  key: 1,
  class: "h-select-placeholder"
};
const _hoisted_8$9 = { class: "h-icon-down" };
const _hoisted_9$6 = {
  key: 0,
  class: "h-select-group-container"
};
const _hoisted_10$4 = { class: "h-select-list" };
const _hoisted_11$3 = { class: "h-select-ul" };
const _hoisted_12$3 = ["onClick"];
const _hoisted_13$2 = ["innerHTML"];
const _hoisted_14$2 = {
  key: 3,
  class: "h-icon-check"
};
const _hoisted_15$2 = {
  key: 0,
  class: "h-select-ul-empty"
};
function _sfc_render$G(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.selectCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.showCls)
    }, [
      $props.multiple ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        createElementVNode("div", _hoisted_1$u, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.objects, (obj) => {
            return openBlock(), createElementBlock("span", {
              key: obj[$props.keyName]
            }, [
              createElementVNode("span", null, toDisplayString(obj[$props.titleName]), 1),
              !$props.disabled ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "h-icon-close-min",
                onClick: withModifiers(($event) => $options.setvalue(obj), ["stop"])
              }, null, 8, _hoisted_2$o)) : createCommentVNode("", true)
            ]);
          }), 128)),
          $props.filterable ? withDirectives((openBlock(), createElementBlock("input", {
            key: 0,
            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchInput = $event),
            type: "text",
            class: "h-select-search-input h-input",
            disabled: $props.disabled,
            placeholder: $props.placeholder,
            onKeyup: _cache[1] || (_cache[1] = (...args) => $options.handle && $options.handle(...args)),
            onBlur: _cache[2] || (_cache[2] = (...args) => $options.blurHandle && $options.blurHandle(...args)),
            onKeypress: _cache[3] || (_cache[3] = withKeys((...args) => $options.enterHandle && $options.enterHandle(...args), ["enter"]))
          }, null, 40, _hoisted_3$k)), [
            [vModelText, $data.searchInput]
          ]) : createCommentVNode("", true)
        ]),
        !$options.hasValue && !$props.filterable ? (openBlock(), createElementBlock("div", _hoisted_4$e, toDisplayString($props.placeholder), 1)) : createCommentVNode("", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        $props.filterable ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          withDirectives(createElementVNode("input", {
            "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.searchInput = $event),
            type: "text",
            disabled: $props.disabled,
            class: normalizeClass([{ "h-select-search-input-value": $options.hasValue }, "h-select-search-input h-select-single-search-input h-input"]),
            placeholder: $options.hasValue ? "" : $props.placeholder,
            onKeyup: _cache[5] || (_cache[5] = (...args) => $options.handle && $options.handle(...args)),
            onBlur: _cache[6] || (_cache[6] = (...args) => $options.blurHandle && $options.blurHandle(...args)),
            onKeypress: _cache[7] || (_cache[7] = withKeys((...args) => $options.enterHandle && $options.enterHandle(...args), ["enter"]))
          }, null, 42, _hoisted_5$c), [
            [vModelText, $data.searchInput]
          ]),
          $options.hasValue && $data.searchInput === "" ? (openBlock(), createElementBlock("div", {
            key: 0,
            class: "h-select-filterable-value",
            onClick: _cache[8] || (_cache[8] = (...args) => $options.focusSearchInput && $options.focusSearchInput(...args))
          }, toDisplayString($options.singleValue), 1)) : createCommentVNode("", true)
        ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          $options.hasValue ? (openBlock(), createElementBlock("div", _hoisted_6$c, [
            !_ctx.$slots.show ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
              createTextVNode(toDisplayString($options.singleValue), 1)
            ], 64)) : renderSlot(_ctx.$slots, "show", {
              key: 1,
              value: $data.objects
            })
          ])) : (openBlock(), createElementBlock("div", _hoisted_7$9, toDisplayString($props.placeholder), 1))
        ], 64))
      ], 64)),
      withDirectives(createElementVNode("i", {
        class: "h-icon-close text-hover",
        onClick: _cache[9] || (_cache[9] = withModifiers((...args) => $options.clear && $options.clear(...args), ["stop"]))
      }, null, 512), [
        [vShow, $options.hasClose]
      ]),
      withDirectives(createElementVNode("i", _hoisted_8$9, null, 512), [
        [vShow, !$options.hasClose]
      ])
    ], 2),
    createElementVNode("div", {
      class: normalizeClass($options.groupCls)
    }, [
      $data.isShow ? (openBlock(), createElementBlock("div", _hoisted_9$6, [
        createElementVNode("div", _hoisted_10$4, [
          renderSlot(_ctx.$slots, "top", { results: $options.filterOptions }),
          createElementVNode("ul", _hoisted_11$3, [
            (openBlock(true), createElementBlock(Fragment, null, renderList($options.filterOptions, (option, index2) => {
              return openBlock(), createElementBlock(Fragment, null, [
                !option.hidden ? (openBlock(), createElementBlock("li", {
                  key: option[$props.keyName],
                  class: normalizeClass($options.getLiCls(option, index2)),
                  onClick: ($event) => $options.setvalue(option)
                }, [
                  !!$props.optionRender ? (openBlock(), createElementBlock("div", {
                    key: 0,
                    innerHTML: option[$data.html]
                  }, null, 8, _hoisted_13$2)) : !_ctx.$slots.item ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(option[$props.titleName]), 1)
                  ], 64)) : renderSlot(_ctx.$slots, "item", {
                    key: 2,
                    item: option
                  }),
                  $props.multiple ? (openBlock(), createElementBlock("i", _hoisted_14$2)) : createCommentVNode("", true)
                ], 10, _hoisted_12$3)) : createCommentVNode("", true)
              ], 64);
            }), 256)),
            $options.filterOptions.length == 0 ? (openBlock(), createElementBlock("li", _hoisted_15$2, toDisplayString($options.showEmptyContent), 1)) : createCommentVNode("", true)
          ]),
          renderSlot(_ctx.$slots, "bottom", { results: $options.filterOptions })
        ])
      ])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var Select = /* @__PURE__ */ _export_sfc(_sfc_main$G, [["render", _sfc_render$G]]);
const prefix$h = "h-page";
const _sfc_main$F = {
  name: "HPagination",
  components: {
    Select
  },
  emits: ["input", "change", "update:modelValue", "changeSize"],
  mixins: [Locale],
  props: {
    size: {
      type: Number,
      default: () => func.getOption("page.size")
    },
    sizes: {
      type: Array,
      default: () => func.getOption("page.sizes")
    },
    align: {
      type: String,
      default: "left"
    },
    cur: {
      type: Number,
      default: 1
    },
    total: {
      type: Number,
      default: 0
    },
    pagerSize: {
      type: Number,
      default: 5
    },
    small: {
      type: Boolean,
      default: () => func.getOption("page.small")
    },
    layout: {
      type: String,
      default: () => func.getOption("page.layout")
    },
    modelValue: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    let layoutList = this.layout.replace(" ", "").split(",");
    let orders = { total: -1, pager: -1, jumper: -1, sizes: -1 };
    for (let o in orders) {
      orders[o] = layoutList.indexOf(o);
    }
    return {
      sizeNow: this.modelValue.size || this.size,
      orders,
      curValue: null
    };
  },
  computed: {
    sizesShow() {
      const keyField = func.getOption("dict", "keyName");
      const titleField = func.getOption("dict", "titleName");
      return this.sizes.map((item) => {
        return {
          [keyField]: item,
          [titleField]: this.hlang("h.pagination.sizeOfPage", { size: item })
        };
      });
    },
    curNow() {
      return this.curValue || this.modelValue.page || this.cur;
    },
    totalNow() {
      return this.modelValue.total || this.total || 0;
    },
    count() {
      return Math.ceil(this.totalNow / this.sizeNow);
    },
    pagers() {
      if (this.count < 3) {
        return [];
      }
      let pageStart = this.curNow - Math.floor(this.pagerSize / 2);
      pageStart = Math.max(2, pageStart);
      let pageEnd = pageStart + this.pagerSize - 1;
      pageEnd = Math.min(this.count - 1, pageEnd);
      pageStart = Math.min(pageStart, pageEnd - this.pagerSize + 1);
      pageStart = Math.max(2, pageStart);
      let list = [];
      for (let i = pageStart; i <= pageEnd; i++) {
        list.push(i);
      }
      return list;
    },
    prefix() {
      return prefix$h;
    },
    prevCls() {
      return {
        [`${prefix$h}-pager-disabled`]: this.curNow == 1,
        "h-page-pager": true
      };
    },
    nextCls() {
      return {
        [`${prefix$h}-pager-disabled`]: this.curNow == this.count,
        "h-page-pager": true
      };
    },
    pagerCls() {
      return {
        [`${prefix$h}-pager`]: true
      };
    },
    pageCls() {
      return {
        [`${prefix$h}`]: true,
        [`${prefix$h}-small`]: this.small,
        [`${prefix$h}-align-${this.align}`]: !!this.align
      };
    },
    containerCls() {
      return {};
    },
    noticeCls() {
      return {};
    }
  },
  watch: {
    cur() {
      this.curValue = null;
    },
    size() {
      this.sizeNow = this.modelValue.size || this.size;
    },
    "modelValue.page"() {
      this.curValue = null;
    },
    "modelValue.size"() {
      this.sizeNow = this.modelValue.size || this.size;
    }
  },
  methods: {
    prev() {
      if (this.curNow == 1)
        return;
      this.change(this.curNow - 1);
    },
    next() {
      if (this.curNow == this.count)
        return;
      this.change(this.curNow + 1);
    },
    jump(event) {
      let value = parseInt(event.target.value, 10);
      if (isNaN(value)) {
        message.error(this.hlang("h.pagination.incorrectFormat"));
        return;
      }
      if (value > this.count || value < 1) {
        message.error(this.hlang("h.pagination.overSize"));
        return;
      }
      let cur = parseInt(event.target.value, 10);
      if (cur == (this.modelValue.page || this.cur)) {
        return;
      }
      this.setvalue({ cur, size: this.sizeNow });
    },
    change(cur) {
      if (this.curNow == cur)
        return;
      let onChange = func.getOption("page.onChange");
      if (utils.isFunction(onChange)) {
        onChange({ cur, size: this.sizeNow });
      }
      this.setvalue({ cur, size: this.sizeNow });
    },
    setvalue(params) {
      let value = { page: params.cur, total: this.totalNow };
      Object.assign(value, params);
      this.curValue = params.cur;
      let inputvalue = __spreadValues({}, value);
      delete inputvalue.cur;
      this.$emit("input", inputvalue);
      this.$emit("update:modelValue", inputvalue);
      this.$emit("change", value);
    },
    changeSize() {
      this.setvalue({ cur: 1, size: this.sizeNow });
      this.$emit("changeSize", this.sizeNow);
      let onChangeSize = func.getOption("page.onChangeSize");
      if (utils.isFunction(onChangeSize)) {
        onChangeSize(this.sizeNow);
      }
    },
    genPagerCls(num) {
      return {
        [`${prefix$h}-pager`]: true,
        [`${prefix$h}-pager-selected`]: this.curNow == num
      };
    }
  }
};
const _hoisted_1$t = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-angle-left" }, null, -1);
const _hoisted_2$n = [
  _hoisted_1$t
];
const _hoisted_3$j = {
  key: 0,
  class: "h-page-pager h-page-ellipsis"
};
const _hoisted_4$d = ["onClick"];
const _hoisted_5$b = {
  key: 1,
  class: "h-page-pager h-page-ellipsis"
};
const _hoisted_6$b = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-angle-right" }, null, -1);
const _hoisted_7$8 = [
  _hoisted_6$b
];
const _hoisted_8$8 = ["value"];
function _sfc_render$F(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Select = resolveComponent("Select");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.pageCls)
  }, [
    $data.orders.total != -1 ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass($options.prefix + "-total"),
      style: normalizeStyle({ order: $data.orders.total })
    }, [
      createTextVNode(toDisplayString(_ctx.hlang("h.pagination.totalBefore")) + " ", 1),
      createElementVNode("span", {
        class: normalizeClass($options.prefix + "-total-num")
      }, toDisplayString($options.totalNow), 3),
      createTextVNode(" " + toDisplayString(_ctx.hlang("h.pagination.totalAfter")), 1)
    ], 6)) : createCommentVNode("", true),
    $data.orders.sizes != -1 ? (openBlock(), createBlock(_component_Select, {
      key: 1,
      modelValue: $data.sizeNow,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.sizeNow = $event),
      "no-border": $props.small,
      autosize: true,
      deletable: false,
      datas: $options.sizesShow,
      style: normalizeStyle({ order: $data.orders.sizes }),
      class: "h-page-select-size",
      onChange: $options.changeSize
    }, null, 8, ["modelValue", "no-border", "datas", "style", "onChange"])) : createCommentVNode("", true),
    $data.orders.pager != -1 && this.count > 0 ? (openBlock(), createElementBlock("span", {
      key: 2,
      class: "h-page-pager-container",
      style: normalizeStyle({ order: $data.orders.pager })
    }, [
      createElementVNode("span", {
        class: normalizeClass($options.prevCls),
        onClick: _cache[1] || (_cache[1] = ($event) => $options.prev())
      }, _hoisted_2$n, 2),
      createElementVNode("span", {
        class: normalizeClass($options.genPagerCls(1)),
        onClick: _cache[2] || (_cache[2] = ($event) => $options.change(1))
      }, "1", 2),
      $options.pagers.length > 0 && 1 < $options.pagers[0] - 1 ? (openBlock(), createElementBlock("span", _hoisted_3$j, "...")) : createCommentVNode("", true),
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.pagers, (pager) => {
        return openBlock(), createElementBlock("span", {
          key: pager,
          class: normalizeClass($options.genPagerCls(pager)),
          onClick: ($event) => $options.change(pager)
        }, toDisplayString(pager), 11, _hoisted_4$d);
      }), 128)),
      $options.pagers.length > 0 && $options.count > $options.pagers[$options.pagers.length - 1] + 1 ? (openBlock(), createElementBlock("span", _hoisted_5$b, "...")) : createCommentVNode("", true),
      this.count > 1 ? (openBlock(), createElementBlock("span", {
        key: 2,
        class: normalizeClass($options.genPagerCls($options.count)),
        onClick: _cache[3] || (_cache[3] = ($event) => $options.change($options.count))
      }, toDisplayString($options.count), 3)) : createCommentVNode("", true),
      createElementVNode("span", {
        class: normalizeClass($options.nextCls),
        onClick: _cache[4] || (_cache[4] = ($event) => $options.next())
      }, _hoisted_7$8, 2)
    ], 4)) : createCommentVNode("", true),
    $data.orders.jumper != -1 && $options.count > 0 ? (openBlock(), createElementBlock("input", {
      key: 3,
      type: "text",
      style: normalizeStyle({ order: $data.orders.jumper }),
      class: "h-page-jumper-input h-input",
      value: $options.curNow,
      onBlur: _cache[5] || (_cache[5] = (...args) => $options.jump && $options.jump(...args)),
      onKeyup: _cache[6] || (_cache[6] = withKeys((...args) => $options.jump && $options.jump(...args), ["enter"]))
    }, null, 44, _hoisted_8$8)) : createCommentVNode("", true)
  ], 2);
}
var Pagination = /* @__PURE__ */ _export_sfc(_sfc_main$F, [["render", _sfc_render$F]]);
const _sfc_main$E = {
  name: "HPoptip",
  components: { Tooltip },
  emits: ["confirm"],
  mixins: [Locale],
  props: {
    content: String,
    placement: {
      type: String,
      default: "top"
    },
    theme: {
      type: String,
      default: "white"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    close() {
      this.$refs.tooltip.hide();
    },
    trigger() {
      this.$emit("confirm");
      this.close();
    }
  }
};
const _hoisted_1$s = { class: "h-poptip" };
const _hoisted_2$m = { class: "h-poptip-content" };
const _hoisted_3$i = /* @__PURE__ */ createElementVNode("i", { class: "yellow-color h-icon-warn" }, null, -1);
const _hoisted_4$c = /* @__PURE__ */ createElementVNode("i", { class: "h-poptip-split" }, null, -1);
const _hoisted_5$a = { class: "clearfix" };
const _hoisted_6$a = { class: "float-right" };
function _sfc_render$E(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, {
    ref: "tooltip",
    theme: $props.theme,
    disabled: $props.disabled,
    placement: $props.placement,
    trigger: "click"
  }, {
    content: withCtx(() => [
      createElementVNode("div", _hoisted_1$s, [
        createElementVNode("div", _hoisted_2$m, [
          _hoisted_3$i,
          _hoisted_4$c,
          createTextVNode(toDisplayString($props.content), 1)
        ]),
        createElementVNode("div", _hoisted_5$a, [
          createElementVNode("div", _hoisted_6$a, [
            createElementVNode("button", {
              type: "button",
              class: "h-btn h-btn-text h-btn-xs",
              onClick: _cache[0] || (_cache[0] = (...args) => $options.close && $options.close(...args))
            }, toDisplayString(_ctx.hlang("h.common.cancel")), 1),
            createElementVNode("button", {
              type: "button",
              class: "h-btn h-btn-text h-btn-xs h-btn-primary",
              onClick: _cache[1] || (_cache[1] = (...args) => $options.trigger && $options.trigger(...args))
            }, toDisplayString(_ctx.hlang("h.common.confirm")), 1)
          ])
        ])
      ])
    ]),
    default: withCtx(() => [
      renderSlot(_ctx.$slots, "default")
    ]),
    _: 3
  }, 8, ["theme", "disabled", "placement"]);
}
var Poptip = /* @__PURE__ */ _export_sfc(_sfc_main$E, [["render", _sfc_render$E]]);
const colors = ["red", "blue", "primary", "gray", "yellow", "green"];
const _sfc_main$D = {
  name: "HProgress",
  props: {
    color: {
      type: String,
      default: "primary"
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {};
  },
  computed: {
    progressInnerStyle() {
      let s = {};
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    progressBgStyle() {
      let s = {};
      if (!colors.indexOf(this.color) > -1) {
        s["background-color"] = this.color;
      }
      s.width = `${Math.min(this.percent, 100)}%`;
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    progressBgClass() {
      let s = {};
      if (colors.indexOf(this.color) > -1) {
        s[`bg-${this.color}-color`] = true;
      }
      return s;
    }
  }
};
const _hoisted_1$r = { class: "h-progress" };
const _hoisted_2$l = {
  key: 0,
  class: "h-progress-title"
};
const _hoisted_3$h = {
  key: 1,
  class: "h-progress-text"
};
function _sfc_render$D(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1$r, [
    _ctx.$slots.title ? (openBlock(), createElementBlock("div", _hoisted_2$l, [
      renderSlot(_ctx.$slots, "title")
    ])) : createCommentVNode("", true),
    createElementVNode("div", {
      class: "h-progress-inner",
      style: normalizeStyle($options.progressInnerStyle)
    }, [
      createElementVNode("div", {
        class: normalizeClass(["h-progress-bg", $options.progressBgClass]),
        style: normalizeStyle($options.progressBgStyle)
      }, null, 6)
    ], 4),
    _ctx.$slots.text ? (openBlock(), createElementBlock("div", _hoisted_3$h, [
      renderSlot(_ctx.$slots, "text")
    ])) : createCommentVNode("", true)
  ]);
}
var Progress = /* @__PURE__ */ _export_sfc(_sfc_main$D, [["render", _sfc_render$D]]);
const _sfc_main$C = {
  name: "HRadio",
  emits: ["input", "change", "update:modelValue"],
  props: {
    modelValue: [Object, String, Boolean, Number],
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    value: [Object, String, Boolean, Number],
    dict: String,
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    isSingle() {
      return !utils.isNull(this.value) && this.arr.length == 0;
    },
    arr() {
      if (!this.datas && !this.dict) {
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      return func.initOptions(datas, this);
    }
  },
  methods: {
    setvalue(value) {
      if (this.disabled)
        return;
      let result = null;
      if (this.isSingle) {
        result = this.value;
      } else {
        result = value[this.key];
      }
      this.$emit("input", result);
      this.$emit("update:modelValue", result);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, result);
      this.$el.dispatchEvent(event);
    }
  }
};
const _hoisted_1$q = ["onClick"];
const _hoisted_2$k = /* @__PURE__ */ createElementVNode("span", { class: "radio-icon h-radio-icon" }, null, -1);
const _hoisted_3$g = {
  key: 0,
  class: "h-radio-text"
};
const _hoisted_4$b = /* @__PURE__ */ createElementVNode("span", { class: "radio-icon h-radio-icon" }, null, -1);
function _sfc_render$C(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-radio", { "h-radio-disabled": $props.disabled, "h-radio-single": $options.isSingle }])
  }, [
    !$options.isSingle ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($options.arr, (option) => {
      return openBlock(), createElementBlock("label", {
        key: option[$data.key],
        class: normalizeClass({
          "h-radio-label": true,
          "h-radio-checked": option[$data.key] == $props.modelValue,
          "h-radio-un-checked": option[$data.key] != $props.modelValue,
          "h-radio-item-disabled": option.disabled
        }),
        onClick: ($event) => $options.setvalue(option)
      }, [
        _hoisted_2$k,
        !_ctx.$slots.item ? (openBlock(), createElementBlock("span", _hoisted_3$g, toDisplayString(option[$data.title]), 1)) : renderSlot(_ctx.$slots, "item", {
          key: 1,
          item: option
        })
      ], 10, _hoisted_1$q);
    }), 128)) : (openBlock(), createElementBlock("label", {
      key: 1,
      class: normalizeClass({ "h-radio-label": true, "h-radio-checked": $props.value == $props.modelValue, "h-radio-un-checked": $props.value !== $props.modelValue }),
      onClick: _cache[0] || (_cache[0] = ($event) => $options.setvalue())
    }, [
      _hoisted_4$b,
      createElementVNode("span", null, [
        renderSlot(_ctx.$slots, "default")
      ])
    ], 2))
  ], 2);
}
var Radio = /* @__PURE__ */ _export_sfc(_sfc_main$C, [["render", _sfc_render$C]]);
const _sfc_main$B = {
  name: "HRate",
  emits: ["input", "change", "update:modelValue"],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    showText: {
      type: Boolean,
      default: false
    },
    iconClass: {
      type: String,
      default: "h-icon-star-on"
    },
    modelValue: {
      type: [String, Number],
      default: 0
    }
  },
  data() {
    return {
      mouseValue: false
    };
  },
  computed: {},
  methods: {
    setvalue(value) {
      if (this.readonly)
        return;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    },
    mouseover(n) {
      if (this.readonly)
        return;
      this.mouseValue = n;
    },
    mouseleave() {
      if (this.readonly)
        return;
      this.mouseValue = false;
    },
    starCls(n) {
      let v = this.mouseValue || Number(this.modelValue);
      return {
        "h-rate-star": true,
        "h-rate-star-on": v >= n,
        "h-rate-star-off": v < n
      };
    }
  }
};
const _hoisted_1$p = ["onClick", "onMouseover"];
const _hoisted_2$j = {
  key: 0,
  class: "h-rate-value"
};
function _sfc_render$B(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({ "h-rate": true, "h-rate-readonly": $props.readonly }),
    onMouseleave: _cache[0] || (_cache[0] = ($event) => $options.mouseleave())
  }, [
    (openBlock(), createElementBlock(Fragment, null, renderList(5, (n) => {
      return createElementVNode("span", {
        key: n,
        class: normalizeClass($options.starCls(n)),
        onClick: ($event) => $options.setvalue(n),
        onMouseover: ($event) => $options.mouseover(n)
      }, [
        createElementVNode("i", {
          class: normalizeClass($props.iconClass)
        }, null, 2)
      ], 42, _hoisted_1$p);
    }), 64)),
    $props.showText ? (openBlock(), createElementBlock("span", _hoisted_2$j, toDisplayString($props.modelValue), 1)) : createCommentVNode("", true)
  ], 34);
}
var Rate = /* @__PURE__ */ _export_sfc(_sfc_main$B, [["render", _sfc_render$B]]);
const prefix$g = "h-slider";
const _sfc_main$A = {
  name: "HSlider",
  emits: ["update:modelValue", "change"],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    modelValue: {
      type: [Number, Object],
      default: 0
    },
    show: Function,
    multiple: {
      type: Boolean,
      default: false
    },
    showtip: {
      type: Boolean,
      default: true
    },
    range: {
      default: () => ({
        start: 0,
        end: 100
      })
    },
    trackStyle: Object
  },
  data() {
    return {
      eventControl: {
        type: null,
        x: null,
        init: null
      },
      tooltip: {
        start: null,
        end: null
      }
    };
  },
  computed: {
    hasStart() {
      return this.multiple;
    },
    computedTrackStyle() {
      let dis = this.range.end - this.range.start;
      return Object.assign({
        left: `${parseInt((this.values.start - this.range.start) / dis * 100, 10)}%`,
        right: `${parseInt((this.range.end - this.values.end) / dis * 100, 10)}%`
      }, this.trackStyle);
    },
    nodePosition() {
      let dis = this.range.end - this.range.start;
      return {
        start: `${parseInt((this.values.start - this.range.start) / dis * 100, 10)}%`,
        end: `${100 - parseInt((this.range.end - this.values.end) / dis * 100, 10)}%`
      };
    },
    values() {
      if (!this.multiple) {
        return {
          start: this.range.start,
          end: this.modelValue || this.range.start
        };
      }
      return utils.extend({
        start: this.range.start,
        end: this.range.start
      }, this.modelValue);
    },
    sliderCls() {
      return {
        [`${prefix$g}`]: true
      };
    }
  },
  mounted() {
    this.$nextTick(() => {
      if (!this.showtip)
        return;
      if (this.hasStart) {
        let startNode = this.$el.querySelector(".h-slider-start-node");
        this.tooltip.start = new Tooltip$1(startNode, {
          content: this.$el.querySelector(".h-slider-start-node-modelValue"),
          html: true,
          trigger: "manual hover",
          container: document.body,
          placement: this.placement
        });
      }
      let endNode = this.$el.querySelector(".h-slider-end-node");
      this.tooltip.end = new Tooltip$1(endNode, {
        content: this.$el.querySelector(".h-slider-end-node-modelValue"),
        html: true,
        trigger: "manual hover",
        container: document.body,
        placement: this.placement
      });
    });
  },
  methods: {
    choosePosition(event) {
      if (this.multiple) {
        return;
      }
      this.eventControl.type = "end";
      let nodePosition = this.$el.querySelector(".h-slider-end-node").getBoundingClientRect();
      this.eventControl.x = nodePosition.left + nodePosition.width / 2;
      this.eventControl.init = this.values["end"];
      this.mousemove(event);
      document.body.addEventListener("mousemove", this.mousemove);
      document.body.addEventListener("mouseup", this.mouseup);
      document.body.addEventListener("click", this.click);
    },
    showContent(modelValue) {
      if (this.show) {
        return this.show.call(null, modelValue);
      } else {
        return modelValue || this.range.start;
      }
    },
    mousedown(type, event) {
      if (this.readonly)
        return;
      utils.addClass(event.target, "h-slider-node-dragging");
      this.eventControl.type = type;
      this.eventControl.x = event.clientX;
      this.eventControl.init = this.values[type];
      document.body.addEventListener("mousemove", this.mousemove);
      document.body.addEventListener("mouseup", this.mouseup);
      document.body.addEventListener("click", this.click);
      if (this.tooltip[type])
        this.tooltip[type].show();
    },
    mouseup(event) {
      event.stopPropagation();
      if (this.readonly)
        return;
      document.body.removeEventListener("mousemove", this.mousemove);
      document.body.removeEventListener("mouseup", this.mouseup);
      setTimeout(() => {
        document.body.removeEventListener("click", this.click);
      }, 200);
      let draggingNode = this.$el.querySelector(".h-slider-node-dragging");
      if (draggingNode) {
        utils.removeClass(draggingNode, "h-slider-node-dragging");
      }
      let type = this.eventControl.type;
      if (this.tooltip[type]) {
        this.tooltip[type].hide();
      }
    },
    click(event) {
      event.stopPropagation();
    },
    mousemove(event) {
      if (this.readonly)
        return;
      let position = event.clientX - this.eventControl.x;
      if (position == 0)
        return;
      let nowPosition = position / this.$el.querySelector(".h-slider-line").clientWidth;
      nowPosition = parseInt(nowPosition * (this.range.end - this.range.start), 10);
      nowPosition = this.eventControl.init + nowPosition;
      let positionStep = nowPosition % this.step;
      if (positionStep != 0) {
        nowPosition = nowPosition - positionStep;
      }
      nowPosition = Math.max(nowPosition, this.range.start);
      nowPosition = Math.min(nowPosition, this.range.end);
      let nowValue = null;
      let type = this.eventControl.type;
      if (!this.hasStart) {
        nowValue = nowPosition;
        this.$emit("update:modelValue", nowValue);
        this.$emit("change", nowValue);
        type = "end";
      } else {
        nowValue = {};
        if (this.values.start > nowPosition && type == "end") {
          type = "start";
          nowValue = utils.extend(this.values, { start: nowPosition, end: this.values.start });
        } else if (this.values.end < nowPosition && type == "start") {
          type = "end";
          nowValue = utils.extend(this.values, { start: this.values.end, end: nowPosition });
        } else {
          nowValue = utils.extend(this.values, { [type]: nowPosition });
        }
      }
      if (this.eventControl.type != type) {
        utils.removeClass(this.$el.querySelector(".h-slider-node-dragging"), "h-slider-node-dragging");
        utils.addClass(this.$el.querySelector(`.h-slider-${type}-node`), "h-slider-node-dragging");
        if (this.tooltip[this.eventControl.type]) {
          this.tooltip[this.eventControl.type].hide();
        }
        this.eventControl.type = type;
      }
      this.$emit("update:modelValue", nowValue);
      this.$emit("change", nowValue);
      let evt = document.createEvent("CustomEvent");
      evt.initCustomEvent("setvalue", true, true, nowValue);
      this.$el.dispatchEvent(evt);
      if (this.tooltip[type]) {
        this.tooltip[type].show();
        this.tooltip[type].update();
      }
    }
  }
};
const _hoisted_1$o = { class: "h-slider-container" };
const _hoisted_2$i = {
  key: 1,
  class: "h-slider-end-node-modelValue h-tooltip-inner-content"
};
const _hoisted_3$f = {
  key: 2,
  class: "h-slider-start-node-modelValue h-tooltip-inner-content"
};
function _sfc_render$A(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.sliderCls)
  }, [
    createElementVNode("div", _hoisted_1$o, [
      createElementVNode("div", {
        class: "h-slider-line",
        onMousedown: _cache[0] || (_cache[0] = (...args) => $options.choosePosition && $options.choosePosition(...args))
      }, null, 32),
      createElementVNode("div", {
        class: "h-slider-track",
        style: normalizeStyle($options.computedTrackStyle),
        onMousedown: _cache[1] || (_cache[1] = (...args) => $options.choosePosition && $options.choosePosition(...args))
      }, null, 36),
      $options.hasStart ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: "h-slider-node h-slider-start-node",
        style: normalizeStyle({ left: $options.nodePosition.start }),
        onClick: _cache[2] || (_cache[2] = withModifiers(() => {
        }, ["stop"])),
        onMousedown: _cache[3] || (_cache[3] = ($event) => $options.mousedown("start", $event))
      }, null, 36)) : createCommentVNode("", true),
      createElementVNode("div", {
        class: "h-slider-node h-slider-end-node",
        style: normalizeStyle({ left: $options.nodePosition.end }),
        onClick: _cache[4] || (_cache[4] = withModifiers(() => {
        }, ["stop"])),
        onMousedown: _cache[5] || (_cache[5] = ($event) => $options.mousedown("end", $event))
      }, null, 36),
      $props.showtip ? (openBlock(), createElementBlock("span", _hoisted_2$i, toDisplayString($options.showContent($options.values.end)), 1)) : createCommentVNode("", true),
      $props.showtip && $options.hasStart ? (openBlock(), createElementBlock("span", _hoisted_3$f, toDisplayString($options.showContent($options.values.start)), 1)) : createCommentVNode("", true)
    ])
  ], 2);
}
var Slider = /* @__PURE__ */ _export_sfc(_sfc_main$A, [["render", _sfc_render$A]]);
const prefix$f = "h-loading";
const _sfc_main$z = {
  name: "HLoading",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    text: String
  },
  data() {
    return {
      isSetStyle: false
    };
  },
  unbind() {
  },
  computed: {
    circularCls() {
      return {
        [`${prefix$f}-circular`]: true
      };
    },
    textCls() {
      return {
        [`${prefix$f}-text`]: true
      };
    },
    loadingCls() {
      return {
        [`${prefix$f}`]: true
      };
    }
  },
  watch: {
    loading() {
      this.initStyle();
    }
  },
  mounted() {
    this.initStyle();
  },
  beforeUnmounted() {
    if (this.timeout) {
      clearTimeout(this.timeout);
      this.timeout = null;
    }
  },
  methods: {
    initStyle() {
      if (this.loading) {
        if (this.timeout) {
          clearTimeout(this.timeout);
          this.timeout = null;
        }
        this.$nextTick(() => {
          utils.addClass(this.$el, "h-loading-loading");
          utils.addClass(this.$el, "h-loading-visible");
          let parent = this.$el.parentNode;
          if (parent) {
            utils.addClass(parent, "h-loading-parent");
          }
        });
      } else {
        utils.removeClass(this.$el, "h-loading-loading");
        this.timeout = setTimeout(() => {
          utils.removeClass(this.$el, "h-loading-visible");
          let parent = this.$el.parentNode;
          if (parent) {
            utils.removeClass(parent, "h-loading-parent");
          }
        }, 500);
      }
    }
  }
};
const _hoisted_1$n = /* @__PURE__ */ createElementVNode("svg", { viewBox: "25 25 50 50" }, [
  /* @__PURE__ */ createElementVNode("circle", {
    cx: "50",
    cy: "50",
    r: "20",
    fill: "none",
    class: "circle"
  })
], -1);
function _sfc_render$z(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.loadingCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.circularCls)
    }, [
      _hoisted_1$n,
      $props.text ? (openBlock(), createElementBlock("p", {
        key: 0,
        class: normalizeClass($options.textCls)
      }, toDisplayString($props.text), 3)) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var Loading$1 = /* @__PURE__ */ _export_sfc(_sfc_main$z, [["render", _sfc_render$z]]);
const prefix$e = "h-steps";
const _sfc_main$y = {
  name: "HSteps",
  props: {
    dict: String,
    datas: [Object, Array],
    step: {
      type: [String, Number],
      default: 0
    },
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    },
    contentLayout: {
      type: String,
      default: "vertical"
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    stepsCls() {
      return {
        [`${prefix$e}`]: true,
        [`${prefix$e}-${this.contentLayout}`]: true
      };
    },
    stepIndex() {
      if (utils.isNumber(this.step)) {
        return this.step;
      }
      let index2 = 0;
      for (let a of this.arr) {
        if (a[this.key] == this.step) {
          return index2;
        }
        index2 = index2 + 1;
      }
      return index2;
    },
    arr() {
      if (!this.datas && !this.dict) {
        console.error("[HeyUI Error] Steps Component: Datas or dict parameters need to be defined at least.");
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      return func.initOptions(datas, this);
    }
  }
};
const _hoisted_1$m = { class: "h-steps-content" };
const _hoisted_2$h = { class: "h-steps-icon" };
const _hoisted_3$e = {
  key: 1,
  class: "h-steps-icon-custom"
};
const _hoisted_4$a = {
  key: 2,
  class: "h-steps-index"
};
const _hoisted_5$9 = { class: "h-steps-index-num" };
const _hoisted_6$9 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-check h-steps-success" }, null, -1);
const _hoisted_7$7 = { class: "h-steps-words" };
const _hoisted_8$7 = { class: "h-steps-title" };
const _hoisted_9$5 = { class: "h-steps-desc" };
const _hoisted_10$3 = /* @__PURE__ */ createElementVNode("div", { class: "h-steps-tail" }, null, -1);
function _sfc_render$y(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.stepsCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.arr, (a, index2) => {
      return openBlock(), createElementBlock("div", {
        key: index2,
        class: normalizeClass({
          "h-steps-process": index2 == $options.stepIndex,
          "h-steps-actived": index2 < $options.stepIndex,
          "h-steps-item": true,
          "h-steps-item-first": index2 == 0,
          "h-steps-item-last": index2 + 1 == $options.arr.length
        })
      }, [
        createElementVNode("div", _hoisted_1$m, [
          createElementVNode("div", _hoisted_2$h, [
            _ctx.$slots.icon ? renderSlot(_ctx.$slots, "icon", {
              key: 0,
              item: a,
              index: index2
            }) : a.icon ? (openBlock(), createElementBlock("span", _hoisted_3$e, [
              createElementVNode("i", {
                class: normalizeClass(a.icon)
              }, null, 2)
            ])) : (openBlock(), createElementBlock("span", _hoisted_4$a, [
              createElementVNode("i", _hoisted_5$9, toDisplayString(index2 + 1), 1),
              _hoisted_6$9
            ]))
          ]),
          createElementVNode("div", _hoisted_7$7, [
            createElementVNode("div", _hoisted_8$7, [
              _ctx.$slots.title ? renderSlot(_ctx.$slots, "title", {
                key: 0,
                item: a,
                index: index2
              }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(a[$data.title]), 1)
              ], 64))
            ]),
            createElementVNode("div", _hoisted_9$5, [
              _ctx.$slots.desc ? renderSlot(_ctx.$slots, "desc", {
                key: 0,
                item: a,
                index: index2
              }) : a.desc ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                createTextVNode(toDisplayString(a.desc), 1)
              ], 64)) : createCommentVNode("", true)
            ])
          ])
        ]),
        _hoisted_10$3
      ], 2);
    }), 128))
  ], 2);
}
var Steps = /* @__PURE__ */ _export_sfc(_sfc_main$y, [["render", _sfc_render$y]]);
const prefix$d = "h-search";
const _sfc_main$x = {
  name: "HSearch",
  mixins: [Locale],
  emits: ["change", "search", "update:modelValue"],
  props: {
    position: {
      type: String,
      default: "end"
    },
    placeholder: {
      type: String
    },
    block: {
      type: Boolean,
      default: false
    },
    triggerType: {
      type: String,
      default: "enter"
    },
    modelValue: String,
    showSearchButton: {
      type: Boolean,
      default: false
    },
    searchButtonText: {
      type: String
    },
    searchButtonTheme: {
      type: String,
      default: "h-btn-primary"
    },
    height: Number,
    width: Number
  },
  data() {
    return {
      inputValue: this.modelValue
    };
  },
  computed: {
    searchButtonTextShow() {
      return this.searchButtonText || this.hlang("h.search.searchButtonText");
    },
    widthStyles() {
      let styles = {};
      if (this.width) {
        styles.width = `${this.width}px`;
      }
      return styles;
    },
    heightStyles() {
      let styles = {};
      if (this.height) {
        styles.height = `${this.height}px`;
      }
      return styles;
    },
    cls() {
      return {
        [`${prefix$d}`]: true,
        [`${prefix$d}-block`]: this.block,
        [`${prefix$d}-searching`]: this.modelValue !== "" && this.modelValue !== null && this.modelValue !== void 0,
        [`${prefix$d}-has-button`]: this.showSearchButton,
        [`${prefix$d}-${this.position}`]: true
      };
    }
  },
  watch: {
    modelValue() {
      this.inputValue = this.modelValue;
    }
  },
  methods: {
    search(value) {
      const computedValue = value === null || value === void 0 ? "" : value;
      this.inputValue = computedValue;
      this.$emit("update:modelValue", computedValue);
      this.$emit("search", computedValue.trim());
      this.$emit("change", computedValue.trim());
    },
    inputTrigger(value) {
      if (this.triggerType == "input") {
        this.search(value);
      } else {
        this.$emit("update:modelValue", value);
      }
    }
  }
};
const _hoisted_1$l = {
  key: 0,
  class: "h-icon-search"
};
const _hoisted_2$g = { class: "h-search-container" };
const _hoisted_3$d = { class: "h-search-input" };
const _hoisted_4$9 = ["placeholder"];
function _sfc_render$x(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.cls),
    style: normalizeStyle($options.widthStyles)
  }, [
    $props.position == "front" ? (openBlock(), createElementBlock("i", _hoisted_1$l)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_2$g, [
      createElementVNode("div", _hoisted_3$d, [
        withDirectives(createElementVNode("input", {
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.inputValue = $event),
          type: "text",
          class: "h-input",
          style: normalizeStyle($options.heightStyles),
          placeholder: $props.placeholder,
          onInput: _cache[1] || (_cache[1] = ($event) => $options.inputTrigger($data.inputValue)),
          onKeyup: _cache[2] || (_cache[2] = withKeys(($event) => $options.search($data.inputValue), ["enter"]))
        }, null, 44, _hoisted_4$9), [
          [vModelText, $data.inputValue]
        ]),
        createElementVNode("i", {
          class: "h-icon-close",
          onClick: _cache[3] || (_cache[3] = ($event) => $options.search(""))
        })
      ]),
      $props.showSearchButton ? (openBlock(), createElementBlock("button", {
        key: 0,
        type: "button",
        style: normalizeStyle($options.heightStyles),
        class: normalizeClass(`h-btn ${$props.searchButtonTheme}`),
        onClick: _cache[4] || (_cache[4] = ($event) => $options.search($data.inputValue))
      }, [
        _ctx.$slots.default ? renderSlot(_ctx.$slots, "default", { key: 0 }) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
          createTextVNode(toDisplayString($options.searchButtonTextShow), 1)
        ], 64))
      ], 6)) : createCommentVNode("", true)
    ]),
    $props.position == "end" ? (openBlock(), createElementBlock("i", {
      key: 1,
      class: "h-icon-search h-icon-search-end",
      onClick: _cache[5] || (_cache[5] = ($event) => $options.search($data.inputValue))
    })) : createCommentVNode("", true)
  ], 6);
}
var Search = /* @__PURE__ */ _export_sfc(_sfc_main$x, [["render", _sfc_render$x]]);
const _sfc_main$w = {
  name: "HSwitch",
  emits: ["input", "change", "update:modelValue"],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    small: {
      type: Boolean,
      default: false
    },
    modelValue: {
      type: [Boolean, String, Number],
      default: false
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    isChecked() {
      return this.modelValue == this.trueValue;
    }
  },
  methods: {
    setvalue() {
      if (this.disabled)
        return;
      let value = this.isChecked ? this.falseValue : this.trueValue;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    }
  }
};
const _hoisted_1$k = { class: "h-switch-span" };
const _hoisted_2$f = { class: "h-switch-inner" };
const _hoisted_3$c = { class: "h-switch-text" };
function _sfc_render$w(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("label", {
    class: normalizeClass({ "h-switch": true, "h-switch-small": $props.small, "h-switch-disabled": $props.disabled, "h-switch-checked": $options.isChecked }),
    onClick: _cache[0] || (_cache[0] = (...args) => $options.setvalue && $options.setvalue(...args))
  }, [
    createElementVNode("span", _hoisted_1$k, [
      createElementVNode("span", _hoisted_2$f, [
        $options.isChecked ? renderSlot(_ctx.$slots, "open", { key: 0 }) : renderSlot(_ctx.$slots, "close", { key: 1 })
      ])
    ]),
    createElementVNode("span", _hoisted_3$c, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var HSwitch = /* @__PURE__ */ _export_sfc(_sfc_main$w, [["render", _sfc_render$w]]);
const _sfc_main$v = {
  name: "HSwitchList",
  emits: ["update:modelValue", "change", "input"],
  props: {
    small: {
      type: Boolean,
      default: false
    },
    datas: [Object, Array],
    disabled: {
      type: Boolean,
      default: false
    },
    dict: String,
    modelValue: [String, Boolean, Number, Object],
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    arr() {
      if (!this.datas && !this.dict) {
        console.error("[HeyUI Error] Switchlist Component: Datas or dict parameters need to be defined at least.");
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      return func.initOptions(datas, this);
    }
  },
  methods: {
    setvalue(option) {
      let key = option[this.key];
      if (this.disabled)
        return;
      if (key == this.modelValue)
        return;
      this.$emit("update:modelValue", key);
      this.$emit("input", key);
      this.$emit("change", option);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, this.modelValue);
      this.$el.dispatchEvent(event);
    }
  }
};
const _hoisted_1$j = ["onClick"];
function _sfc_render$v(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass({ "h-switch-list": true, "h-switch-list-small": $props.small, "h-switch-list-disabled": $props.disabled })
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.arr, (option) => {
      return openBlock(), createElementBlock("span", {
        key: option[$data.key],
        class: normalizeClass({ "h-switch-list-span": true, "h-switch-list-span-checked": option[$data.key] == $props.modelValue }),
        onClick: ($event) => $options.setvalue(option)
      }, [
        option.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass(option.icon)
        }, null, 2)) : createCommentVNode("", true),
        createTextVNode(toDisplayString(option[$data.title]), 1)
      ], 10, _hoisted_1$j);
    }), 128))
  ], 2);
}
var SwitchList = /* @__PURE__ */ _export_sfc(_sfc_main$v, [["render", _sfc_render$v]]);
const _sfc_main$u = {
  name: "HSkeleton",
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: Boolean,
      default: true
    },
    paragraph: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: String,
      default: "38%"
    },
    rows: {
      type: Number,
      default: 3
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarSize: {
      type: Number,
      default: 48
    },
    avatarShape: {
      type: String,
      default: "circle"
    }
  },
  data() {
    return {};
  },
  computed: {},
  mounted() {
    this.init();
  },
  methods: {
    init() {
    }
  }
};
const _hoisted_1$i = {
  key: 0,
  class: "h-skeleton-avatar"
};
const _hoisted_2$e = {
  key: 1,
  class: "h-skeleton-content"
};
const _hoisted_3$b = {
  key: 1,
  class: "h-skeleton-paragraph"
};
function _sfc_render$u(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass(["h-skeleton", { "h-skeleton-active": $props.active }])
  }, [
    $props.loading ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      $props.avatar ? (openBlock(), createElementBlock("div", _hoisted_1$i, [
        createElementVNode("span", {
          class: normalizeClass("h-skeleton-avatar-" + $props.avatarShape),
          style: normalizeStyle({ width: $props.avatarSize + "px", height: $props.avatarSize + "px" })
        }, null, 6)
      ])) : createCommentVNode("", true),
      $props.title || $props.paragraph ? (openBlock(), createElementBlock("div", _hoisted_2$e, [
        $props.title ? (openBlock(), createElementBlock("h3", {
          key: 0,
          class: "h-skeleton-title",
          style: normalizeStyle({ width: $props.titleWidth })
        }, null, 4)) : createCommentVNode("", true),
        $props.paragraph ? (openBlock(), createElementBlock("ul", _hoisted_3$b, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($props.rows, (item, index2) => {
            return openBlock(), createElementBlock("li", { key: index2 });
          }), 128))
        ])) : createCommentVNode("", true)
      ])) : createCommentVNode("", true)
    ], 64)) : renderSlot(_ctx.$slots, "default", { key: 1 })
  ], 2);
}
var Skeleton = /* @__PURE__ */ _export_sfc(_sfc_main$u, [["render", _sfc_render$u]]);
const _sfc_main$t = {
  name: "HTableTd",
  emits: ["toggleTree"],
  props: {
    index: Number,
    prop: String,
    dict: String,
    data: [Object, Array],
    align: String,
    attrs: Function,
    unit: String,
    render: Function,
    format: Function,
    isTreeOpener: Boolean,
    className: String
  },
  data() {
    return {};
  },
  computed: {
    tdAttrs() {
      let attrs = {};
      if (this.attrs) {
        attrs = this.attrs.call(null, this.data, this.index);
      }
      return attrs;
    },
    level() {
      return this.data._level || 0;
    },
    cls() {
      return {
        [`text-${this.align}`]: !!this.align,
        [this.className]: !!this.className
      };
    },
    show() {
      if (this.prop == "$index")
        return this.index;
      if (this.prop == "$serial")
        return this.index + 1;
      if (this.render) {
        return this.render.call(null, this.data);
      }
      let value = this.data[this.prop];
      if (this.dict) {
        return func.dictMapping(value, this.dict);
      }
      if (this.unit) {
        return value === "" || value === null || value === void 0 ? "" : `${value}${this.unit}`;
      }
      if (this.format) {
        return this.format(value);
      }
      return value;
    }
  },
  methods: {
    toggleTree() {
      this.$emit("toggleTree", this.data);
    }
  }
};
const _hoisted_1$h = {
  key: 1,
  class: "h-table-tree-empty"
};
function _sfc_render$t(_ctx, _cache, $props, $setup, $data, $options) {
  return $options.tdAttrs.colspan !== 0 && $options.tdAttrs.rowspan !== 0 ? (openBlock(), createElementBlock("td", mergeProps({
    key: 0,
    class: $options.cls
  }, $options.tdAttrs), [
    $props.isTreeOpener ? (openBlock(), createElementBlock("span", {
      key: 0,
      class: normalizeClass(["h-table-tree-expand", { "h-table-tree-opened": $props.data._opened }])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($options.level, (index2) => {
        return openBlock(), createElementBlock("i", {
          key: index2,
          class: "h-table-tree-expand-space"
        });
      }), 128)),
      $props.data.children && $props.data.children.length ? (openBlock(), createElementBlock("i", {
        key: 0,
        class: normalizeClass({ "h-table-tree-icon": true, "h-icon-plus": !$props.data._opened, "h-icon-minus": $props.data._opened }),
        onClick: _cache[0] || (_cache[0] = (...args) => $options.toggleTree && $options.toggleTree(...args))
      }, null, 2)) : (openBlock(), createElementBlock("i", _hoisted_1$h))
    ], 2)) : createCommentVNode("", true),
    $props.prop || $props.render ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      createTextVNode(toDisplayString($options.show), 1)
    ], 64)) : createCommentVNode("", true),
    renderSlot(_ctx.$slots, "default", {
      data: $props.data,
      index: $props.index
    })
  ], 16)) : createCommentVNode("", true);
}
var TableTd = /* @__PURE__ */ _export_sfc(_sfc_main$t, [["render", _sfc_render$t]]);
var TableTr = {
  name: "hTableTr",
  emits: ["toggleTree", "trClick", "trDblClick"],
  props: {
    datas: [Object, Array],
    index: Number,
    computeColumns: Array
  },
  render() {
    let tds = [];
    if (this.$slots.default) {
      tds.push(...this.$slots.default());
    }
    if (this.$parent.$slots.default) {
      for (let td of this.$parent.$slots.default() || []) {
        if (td.type.name === "HTableItem") {
          let props = __spreadValues({}, td.props);
          props.data = this.datas;
          props.index = this.index;
          props.onToggleTree = (data) => {
            this.$emit("toggleTree", data);
          };
          const slots = {};
          if (td.children && td.children.default) {
            slots.default = td.children.default;
          }
          tds.push(h(TableTd, props, slots));
        }
      }
    } else if (this.computeColumns) {
      for (let td of this.computeColumns || []) {
        let props = __spreadValues({}, td);
        props.data = this.datas;
        props.index = this.index;
        props.onToggleTree = (data) => {
          this.$emit("toggleTree", data);
        };
        tds.push(h(TableTd, props));
      }
    }
    return h("tr", {
      onClick: this.clickHandler,
      onDblClick: this.dblclickHandler
    }, tds);
  },
  methods: {
    clickHandler(event) {
      this.$emit("trClick", this.datas, this.index, event);
    },
    dblclickHandler(event) {
      this.$emit("trDblclick", this.datas, this.index, event);
    }
  }
};
const _sfc_main$s = {
  name: "HTableTh",
  components: { Tooltip },
  props: {
    rowspan: Number,
    colspan: Number,
    title: String,
    width: Number,
    className: String,
    fixed: String,
    label: String,
    prop: String,
    dict: String,
    align: String,
    format: Function,
    render: Function,
    unit: String,
    tooltip: {
      type: [Boolean, Object],
      default: false
    },
    sortProp: String,
    sort: {
      type: [Boolean, String],
      default: false
    },
    sortStatus: {
      type: Object,
      default: () => ({ type: null, prop: null })
    },
    placement: String,
    content: String
  },
  data() {
    return {};
  },
  computed: {
    tooltipParam() {
      if (this.tooltip === true) {
        return {
          disabled: false,
          content: this.title
        };
      } else if (utils.isObject(this.tooltip)) {
        return __spreadValues({
          disabled: false,
          content: this.title
        }, this.tooltip);
      }
      return {
        disabled: true
      };
    },
    cls() {
      return {
        "h-table-th": true,
        [this.className]: !!this.className,
        "h-table-th-active": this.sort
      };
    },
    sortUseProp() {
      return this.sortProp || this.prop;
    }
  },
  methods: {
    triggerSort() {
      if (!this.sort)
        return false;
      let sortStatus = utils.copy(this.sortStatus);
      const { type } = this.sortStatus;
      if (type && this.sortStatus.prop == this.sortUseProp) {
        sortStatus.type = type === "desc" ? "asc" : type === "asc" ? null : "desc";
      } else {
        sortStatus.type = "desc";
        sortStatus.prop = this.sortUseProp;
      }
      let parent = this.$parent;
      if (parent.$options.name == "HTable") {
        parent.triggerSort(sortStatus, this.sort);
      }
    }
  }
};
const _hoisted_1$g = ["rowspan", "colspan"];
const _hoisted_2$d = { class: "h-table-th-container" };
const _hoisted_3$a = {
  key: 0,
  class: "h-table-sort-handler"
};
function _sfc_render$s(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tooltip = resolveComponent("Tooltip");
  return openBlock(), createBlock(_component_Tooltip, normalizeProps(guardReactiveProps($options.tooltipParam)), {
    default: withCtx(() => [
      createElementVNode("th", {
        rowspan: $props.rowspan,
        colspan: $props.colspan,
        onClick: _cache[0] || (_cache[0] = ($event) => $options.triggerSort()),
        class: normalizeClass($options.cls)
      }, [
        createElementVNode("div", _hoisted_2$d, [
          createElementVNode("div", {
            class: normalizeClass({ [`text-${this.align}`]: !!this.align, "h-table-th-title": true })
          }, toDisplayString($props.title), 3),
          $props.sort ? (openBlock(), createElementBlock("span", _hoisted_3$a, [
            createElementVNode("i", {
              class: normalizeClass({
                "h-table-sort-asc": true,
                "h-table-sort-selected": $props.sortStatus.type == "asc" && $props.sortStatus.prop == $options.sortUseProp,
                "h-icon-triangle-up": true
              })
            }, null, 2),
            createElementVNode("i", {
              class: normalizeClass({
                "h-table-sort-desc": true,
                "h-table-sort-selected": $props.sortStatus.type == "desc" && $props.sortStatus.prop == $options.sortUseProp,
                "h-icon-triangle-down": true
              })
            }, null, 2)
          ])) : createCommentVNode("", true)
        ])
      ], 10, _hoisted_1$g)
    ]),
    _: 1
  }, 16);
}
var TableTh = /* @__PURE__ */ _export_sfc(_sfc_main$s, [["render", _sfc_render$s]]);
function debounce(func2, wait = 0, options2) {
  const nativeMax = Math.max;
  const nativeMin = Math.min;
  let lastArgs;
  let lastThis;
  let maxWait;
  let result;
  let timerId;
  let lastCallTime;
  let lastInvokeTime = 0;
  let leading = false;
  let maxing = false;
  let trailing = true;
  if (!utils.isFunction(func2)) {
    throw new TypeError("debounce: func is not Function");
  }
  if (utils.isObject(options2)) {
    leading = !!options2.leading;
    maxing = "maxWait" in options2;
    maxWait = maxing ? nativeMax(options2.maxWait || 0, wait) : maxWait;
    trailing = "trailing" in options2 ? !!options2.trailing : trailing;
  }
  function invokeFunc(time) {
    let args = lastArgs;
    let thisArg = lastThis;
    lastArgs = lastThis = void 0;
    lastInvokeTime = time;
    result = func2.apply(thisArg, args);
    return result;
  }
  function leadingEdge(time) {
    lastInvokeTime = time;
    timerId = setTimeout(timerExpired, wait);
    return leading ? invokeFunc(time) : result;
  }
  function remainingWait(time) {
    let timeSinceLastCall = time - lastCallTime;
    let timeSinceLastInvoke = time - lastInvokeTime;
    let result2 = wait - timeSinceLastCall;
    return maxing ? nativeMin(result2, maxWait - timeSinceLastInvoke) : result2;
  }
  function shouldInvoke(time) {
    let timeSinceLastCall = time - lastCallTime;
    let timeSinceLastInvoke = time - lastInvokeTime;
    return lastCallTime === void 0 || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait;
  }
  function timerExpired() {
    let time = new Date().getTime();
    if (shouldInvoke(time)) {
      return trailingEdge(time);
    }
    timerId = setTimeout(timerExpired, remainingWait(time));
  }
  function trailingEdge(time) {
    timerId = void 0;
    if (trailing && lastArgs) {
      return invokeFunc(time);
    }
    lastArgs = lastThis = void 0;
    return result;
  }
  function cancel() {
    if (timerId !== void 0) {
      clearTimeout(timerId);
    }
    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = void 0;
  }
  function flush() {
    return timerId === void 0 ? result : trailingEdge(new Date().getTime());
  }
  function debounced() {
    let time = new Date().getTime();
    let isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time;
    if (isInvoking) {
      if (timerId === void 0) {
        return leadingEdge(lastCallTime);
      }
      if (maxing) {
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    }
    if (timerId === void 0) {
      timerId = setTimeout(timerExpired, wait);
    }
    return result;
  }
  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}
const _sfc_main$r = {
  components: { Checkbox },
  emits: ["checkAll"],
  props: {
    checks: {
      type: Array,
      default: () => []
    },
    checkableDatas: {
      type: Array,
      default: () => []
    }
  },
  data() {
    return {};
  },
  computed: {},
  methods: {
    checkAll() {
      this.$emit("checkAll");
    }
  }
};
const _hoisted_1$f = { class: "h-table-checkbox-wrap" };
function _sfc_render$r(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createElementBlock("div", _hoisted_1$f, [
    createVNode(_component_Checkbox, {
      indeterminate: $props.checks.length > 0 && $props.checks.length < $props.checkableDatas.length,
      checked: $props.checkableDatas.length > 0 && $props.checks.length == $props.checkableDatas.length,
      onClick: $options.checkAll
    }, null, 8, ["indeterminate", "checked", "onClick"])
  ]);
}
var CheckboxAll = /* @__PURE__ */ _export_sfc(_sfc_main$r, [["render", _sfc_render$r]]);
const prefix$c = "h-table";
const _sfc_main$q = {
  name: "HTable",
  components: {
    TableTr,
    TableTh,
    Checkbox,
    Radio,
    Loading: Loading$1,
    CheckboxAll
  },
  emits: ["select", "selectAll", "sort", "trClick", "rowSelect", "trDblClick"],
  mixins: [Locale],
  props: {
    columns: {
      type: Array,
      default: () => []
    },
    datas: {
      type: Array,
      default: () => []
    },
    border: {
      type: Boolean,
      default: false
    },
    height: Number,
    checkbox: {
      type: Boolean,
      default: false
    },
    radio: {
      type: Boolean,
      default: false
    },
    isStripe: {
      type: Boolean,
      default: false
    },
    loading: {
      type: Boolean,
      default: false
    },
    selectWhenClickTr: {
      type: Boolean,
      default: false
    },
    ths: Array,
    isSelectRow: {
      type: Boolean,
      default: false
    },
    getTrClass: Function
  },
  data() {
    return {
      uuid: `uuid-${utils.uuid()}`,
      isMounted: false,
      update: {
        datas: 0,
        columns: 0
      },
      scrollWidth: 0,
      scrollHeight: 0,
      scrollLeft: 0,
      scrollTop: 0,
      checks: [],
      hoveredTr: null,
      leftWidth: 0,
      rightWidth: 0,
      tableWidth: 400,
      computeColumns: [],
      datasBak: [...this.datas],
      sortStatus: {
        type: null,
        prop: null
      },
      tableDatas: [...this.datas],
      rowSelected: null,
      emptyWidth: 0
    };
  },
  computed: {
    checkableDatas() {
      return this.tableDatas.filter((item) => !item._disabledSelect);
    },
    totalCol() {
      return (this.checkbox || this.radio ? 1 : 0) + this.computeColumns.length;
    },
    fixedColumnLeft() {
      let columns = [];
      for (let c of this.computeColumns) {
        if (c.fixed == "left") {
          columns.push(c);
        }
      }
      return columns;
    },
    fixedColumnRight() {
      let columns = [];
      for (let c of this.computeColumns) {
        if (c.fixed == "right") {
          columns.push(c);
        }
      }
      return columns;
    },
    tableCls() {
      return {
        [prefix$c]: true,
        [`${prefix$c}-border`]: !!this.border,
        [`${prefix$c}-stripe`]: this.isStripe
      };
    },
    fixedBodyStyle() {
      let s = {};
      s["bottom"] = `${this.scrollHeight}px`;
      if (this.height) {
        s.maxHeight = `${this.height}px`;
      }
      if (this.leftWidth) {
        s.width = `${this.leftWidth}px`;
      }
      return s;
    },
    fixedRightBodyStyle() {
      let s = {};
      s["margin-right"] = `${this.scrollWidth}px`;
      s["bottom"] = `${this.scrollHeight}px`;
      if (this.height) {
        s.maxHeight = `${this.height}px`;
      }
      if (this.rightWidth) {
        s.width = `${this.rightWidth}px`;
      }
      return s;
    },
    bodyStyle() {
      let s = {};
      if (this.height) {
        s.maxHeight = `${this.height}px`;
      }
      return s;
    }
  },
  watch: {
    datas: {
      handler() {
        if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
          this.resize();
        }
        let changed = this.datasBak.length != this.datas.length;
        let n = 0;
        while (!changed && this.datas.length > n) {
          changed = this.datas[n] !== this.datasBak[n];
          n += 1;
        }
        if (changed) {
          this.labelDatas(this.datas);
          this.update.datas += 1;
          this.checks.splice(0, this.checks.length);
          this.tableDatas = [...this.datas];
        }
        this.datasBak = [...this.datas];
      },
      deep: true
    },
    columns: {
      handler() {
        this.initColumns();
        if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
          this.resize();
        }
        this.update.columns += 1;
      },
      deep: true
    },
    checks: {
      handler() {
        this.$emit("select", this.checks);
      },
      deep: true
    },
    checkbox() {
      if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        this.resize();
      }
    },
    radio() {
      if (this.height || this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        this.resize();
      }
    }
  },
  beforeUnmount() {
    window.removeEventListener("resize", this.resize);
  },
  beforeMount() {
    this.labelDatas(this.datas);
  },
  mounted() {
    this.isMounted = true;
    this.initColumns();
    this.$nextTick(() => {
      let body = this.$el.querySelector(".h-table-body");
      if (body) {
        let scrollEvent = (event) => {
          body.scrollLeft = body.scrollLeft + event.deltaX;
          body.scrollTop = body.scrollTop + event.deltaY;
          if (this.scrollTop != body.scrollTop) {
            event.stopPropagation();
            event.preventDefault();
          }
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        };
        body.addEventListener("scroll", () => {
          this.scrollLeft = body.scrollLeft;
          this.scrollTop = body.scrollTop;
        });
        let fixedright = this.$el.querySelector(".h-table-fixed-right");
        let fixedleft = this.$el.querySelector(".h-table-fixed-left");
        if (fixedright) {
          fixedright.addEventListener("mousewheel", scrollEvent);
        }
        if (fixedleft) {
          fixedleft.addEventListener("mousewheel", scrollEvent);
        }
      }
      if (this.fixedColumnLeft.length || this.fixedColumnRight.length) {
        window.addEventListener("resize", this.resize);
      }
      this.resize();
      setTimeout(() => {
        this.resize();
      }, 100);
      let tbodys = this.$el.querySelectorAll(".h-table-tbody");
      for (let tbody of tbodys) {
        tbody.addEventListener("mouseover", (event) => {
          let tr = null;
          let target = event.target;
          while (target.parentNode != window.document.body) {
            if (target.tagName == "TH") {
              return;
            } else if (target.tagName == "TR") {
              tr = target;
              break;
            }
            target = target.parentNode;
          }
          if (tr) {
            utils.addClass(tr, "h-table-tr-hovered");
            let index2 = tr.getAttribute("tr-index");
            for (let el of this.$el.querySelectorAll(`.h-table-tbody>tr[tr-index='${index2}']`) || []) {
              utils.addClass(el, "h-table-tr-hovered");
            }
          }
        }, false);
        tbody.addEventListener("mouseout", () => {
          for (let el of this.$el.querySelectorAll(".h-table-tr-hovered") || []) {
            utils.removeClass(el, "h-table-tr-hovered");
          }
        }, false);
      }
    });
  },
  methods: {
    labelDatas(datas, level = 0) {
      for (let d of datas) {
        if (!d._heyui_uuid) {
          d["_heyui_uuid"] = utils.uuid();
          d["_opened"] = false;
          d["_expand"] = d._expand || false;
          d["_level"] = level;
        }
      }
    },
    toggleTree(data) {
      if (data._opened) {
        this.foldTree(data);
      } else {
        this.expandTree(data);
      }
    },
    foldAll() {
      this.tableDatas.forEach((item) => {
        this.foldTree(item);
      });
    },
    expandAll() {
      this.datas.forEach((item) => {
        this.expandTree(item, { expandAll: true });
      });
    },
    expandTree(data, params = {}) {
      if (data._opened)
        return false;
      if (data.children && data.children.length) {
        this.labelDatas(data.children, (data._level || 0) + 1);
        data["_opened"] = true;
        let index2 = this.tableDatas.indexOf(data);
        this.tableDatas.splice(index2 + 1, 0, ...data.children);
        data.children.forEach((item) => {
          item["_opened"] = false;
          if (params.expandAll) {
            this.expandTree(item);
          }
        });
      }
    },
    foldTree(data) {
      if (!data._opened)
        return false;
      if (data.children && data.children.length) {
        data.children.forEach((item) => {
          this.foldTree(item);
          let cindex = this.tableDatas.indexOf(item);
          let checkIndex = this.checks.indexOf(item);
          if (cindex > -1) {
            this.tableDatas.splice(cindex, 1);
          }
          if (checkIndex > -1) {
            this.checks.splice(checkIndex, 1);
          }
        });
        data["_opened"] = false;
      }
    },
    getTrCls(d, index2) {
      let cls = {
        "h-table-tr-selected": this.isChecked(d),
        "h-table-tr-select-disabled": d._disabledSelect
      };
      if (this.getTrClass) {
        let trClass = this.getTrClass(d, index2);
        if (utils.isString(trClass)) {
          cls[trClass] = true;
        } else if (utils.isArray(trClass)) {
          trClass.forEach((item) => {
            cls[item] = true;
          });
        }
      }
      return cls;
    },
    isChecked(d) {
      return this.checks.indexOf(d) > -1 || this.isSelectRow && d == this.rowSelected;
    },
    setRowSelect(data) {
      this.rowSelected = data;
    },
    clearRowSelect() {
      this.rowSelected = null;
    },
    invereSelection() {
      this.checks = this.tableDatas.filter((item) => this.checks.indexOf(item) == -1);
    },
    clearSelection() {
      this.checks = [];
    },
    clearSort() {
      this.sortStatus.prop = null;
      this.sortStatus.type = null;
    },
    triggerSort(sortStatus, triggerType) {
      this.sortStatus.prop = sortStatus.prop;
      this.sortStatus.type = sortStatus.type;
      if (triggerType === true) {
        this.$emit("sort", utils.copy(sortStatus));
      } else if (triggerType == "auto") {
        this.tableDatas.sort((a, b) => {
          let ad = a[sortStatus.prop];
          let bd = b[sortStatus.prop];
          let index2 = ad == bd ? 0 : ad > bd ? 1 : -1;
          return sortStatus.type == "asc" ? index2 : -index2;
        });
      }
    },
    setSelection(data) {
      if (utils.isArray(data)) {
        this.checks = [...data];
      }
    },
    getSelection() {
      return [...this.checks || []];
    },
    checkAll() {
      if (this.checks.length == this.checkableDatas.length) {
        this.checks.splice(0, this.checkableDatas.length);
      } else {
        this.checks = utils.extend([], this.checkableDatas);
      }
      this.$emit("selectAll", this.checks);
    },
    getWidth(column) {
      if (utils.isObject(column) && column.width) {
        return column.width;
      } else {
        return "";
      }
    },
    resize() {
      this.$nextTick(() => {
        let body = this.$el.querySelector(".h-table-body");
        if (body) {
          this.scrollWidth = body.offsetWidth - body.clientWidth;
          this.scrollHeight = body.offsetHeight - body.clientHeight;
        }
        this.emptyWidth = this.$el.querySelector(".h-table-header-table").clientWidth;
        this.tableWidth = this.$el.querySelector(".h-table-container").clientWidth;
        this.initFixedWidth();
      });
    },
    mouseover(data) {
      this.hoveredTr = data;
    },
    mouseout() {
      this.hoveredTr = null;
    },
    initFixedWidth() {
      let ths = this.$el.querySelectorAll(".h-table-header table>tr>th");
      let fixedColumnLeftLength = this.fixedColumnLeft.length + (this.checkbox || this.radio ? 1 : 0);
      let leftWidth = 0;
      for (let i = 0; i < fixedColumnLeftLength; i++) {
        leftWidth += ths[i].clientWidth || 0;
      }
      this.leftWidth = leftWidth;
      let fixedColumnRightLength = this.fixedColumnRight.length;
      let rightWidth = 0;
      for (let i = ths.length - 1; i > ths.length - fixedColumnRightLength - 1; i--) {
        rightWidth += ths[i].clientWidth || 0;
      }
      this.rightWidth = rightWidth;
    },
    refresh() {
      if (this.isMounted) {
        debounce(() => {
          this.initColumns();
          this.$nextTick(() => {
            this.resize();
          });
        }, 10)();
      }
    },
    initColumns() {
      if (this.columns.length) {
        this.computeColumns = this.columns;
        return;
      }
      let columns = [];
      if (this.$slots.default) {
        for (let slot of this.$slots.default()) {
          let option = slot.type.name;
          if (option === "HTableItem") {
            columns.push(slot.props);
          }
        }
      }
      this.computeColumns = columns;
    },
    triggerTrClicked(data, index2, event) {
      if (data._disabledSelect)
        return;
      if (this.isSelectRow) {
        this.rowSelected = data;
        this.$emit("rowSelect", data);
      }
      if (this.checkbox && this.selectWhenClickTr && !utils.hasClass(event.target, "h-checkbox-native")) {
        let list = this.checks;
        if (list.some((item) => item == data)) {
          list.splice(list.indexOf(data), 1);
        } else {
          list.push(data);
        }
      }
      this.$emit("trClick", data, event, index2);
    },
    triggerTrDblclicked(data, index2, event) {
      this.$emit("trDblClick", data, event, index2);
    }
  }
};
const _hoisted_1$e = {
  key: 0,
  width: "60"
};
const _hoisted_2$c = ["width"];
const _hoisted_3$9 = ["rowspan"];
const _hoisted_4$8 = ["rowspan"];
const _hoisted_5$8 = { key: 1 };
const _hoisted_6$8 = {
  key: 0,
  class: "h-table-th-checkbox"
};
const _hoisted_7$6 = {
  key: 1,
  class: "h-table-th-radio"
};
const _hoisted_8$6 = { class: "h-table-container" };
const _hoisted_9$4 = { class: "relative" };
const _hoisted_10$2 = { class: "h-table-content-empty" };
const _hoisted_11$2 = { key: 0 };
const _hoisted_12$2 = { class: "h-table-body-table" };
const _hoisted_13$1 = {
  key: 0,
  width: "60"
};
const _hoisted_14$1 = {
  key: 1,
  width: "60"
};
const _hoisted_15$1 = ["width"];
const _hoisted_16$1 = { class: "h-table-tbody" };
const _hoisted_17$1 = {
  key: 0,
  class: "h-table-td-checkbox"
};
const _hoisted_18$1 = { class: "h-table-checkbox-wrap" };
const _hoisted_19$1 = {
  key: 1,
  class: "h-table-td-radio"
};
const _hoisted_20$1 = ["colspan"];
const _hoisted_21$1 = {
  key: 0,
  width: "60"
};
const _hoisted_22$1 = {
  key: 1,
  width: "60"
};
const _hoisted_23$1 = ["width"];
const _hoisted_24$1 = { class: "h-table-tbody" };
const _hoisted_25$1 = {
  key: 0,
  class: "h-table-td-checkbox"
};
const _hoisted_26$1 = { class: "h-table-checkbox-wrap" };
const _hoisted_27 = {
  key: 1,
  class: "h-table-td-radio"
};
const _hoisted_28 = ["width"];
const _hoisted_29 = { class: "h-table-tbody" };
const _hoisted_30 = {
  key: 0,
  class: "h-table-fixed-header-left"
};
const _hoisted_31 = {
  key: 0,
  width: "60"
};
const _hoisted_32 = {
  key: 1,
  width: "60"
};
const _hoisted_33 = ["width"];
const _hoisted_34 = {
  key: 0,
  class: "h-table-th-checkbox"
};
const _hoisted_35 = {
  key: 1,
  class: "h-table-th-radio"
};
const _hoisted_36 = ["width"];
const _hoisted_37 = { class: "h-table-items" };
function _sfc_render$q(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_CheckboxAll = resolveComponent("CheckboxAll");
  const _component_TableTh = resolveComponent("TableTh");
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_Radio = resolveComponent("Radio");
  const _component_TableTr = resolveComponent("TableTr");
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.tableCls)
  }, [
    createElementVNode("div", {
      class: "h-table-header",
      style: normalizeStyle({ "padding-right": $data.scrollWidth + "px" })
    }, [
      createElementVNode("table", {
        class: "h-table-header-table",
        style: normalizeStyle({ "margin-left": -$data.scrollLeft + "px" })
      }, [
        createElementVNode("colgroup", null, [
          $props.checkbox || $props.radio ? (openBlock(), createElementBlock("col", _hoisted_1$e)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.computeColumns, (c, index2) => {
            return openBlock(), createElementBlock("col", {
              key: index2 + $data.update.columns,
              width: $options.getWidth(c)
            }, null, 8, _hoisted_2$c);
          }), 128))
        ]),
        $props.ths ? (openBlock(true), createElementBlock(Fragment, { key: 0 }, renderList($props.ths, (thdata, thindex) => {
          return openBlock(), createElementBlock("tr", {
            key: thindex + $data.update.columns
          }, [
            $props.checkbox && thindex == 0 ? (openBlock(), createElementBlock("th", {
              key: 0,
              class: "h-table-th-checkbox",
              rowspan: $props.ths.length
            }, [
              $options.fixedColumnLeft.length == 0 ? (openBlock(), createBlock(_component_CheckboxAll, {
                key: 0,
                checks: $data.checks,
                "checkable-datas": $options.checkableDatas,
                onCheckAll: $options.checkAll
              }, null, 8, ["checks", "checkable-datas", "onCheckAll"])) : createCommentVNode("", true)
            ], 8, _hoisted_3$9)) : createCommentVNode("", true),
            $props.radio && thindex == 0 ? (openBlock(), createElementBlock("th", {
              key: 1,
              class: "h-table-th-radio",
              rowspan: $props.ths.length
            }, null, 8, _hoisted_4$8)) : createCommentVNode("", true),
            (openBlock(true), createElementBlock(Fragment, null, renderList(thdata, (thdata2, index2) => {
              return openBlock(), createBlock(_component_TableTh, mergeProps({
                key: index2 + $data.update.columns
              }, thdata2, { "sort-status": $data.sortStatus }), null, 16, ["sort-status"]);
            }), 128))
          ]);
        }), 128)) : (openBlock(), createElementBlock("tr", _hoisted_5$8, [
          $props.checkbox ? (openBlock(), createElementBlock("th", _hoisted_6$8, [
            $options.fixedColumnLeft.length == 0 ? (openBlock(), createBlock(_component_CheckboxAll, {
              key: 0,
              checks: $data.checks,
              "checkable-datas": $options.checkableDatas,
              onCheckAll: $options.checkAll
            }, null, 8, ["checks", "checkable-datas", "onCheckAll"])) : createCommentVNode("", true)
          ])) : $props.radio ? (openBlock(), createElementBlock("th", _hoisted_7$6)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.computeColumns, (c, index2) => {
            return openBlock(), createBlock(_component_TableTh, mergeProps({
              key: index2 + $data.update.columns
            }, c, { "sort-status": $data.sortStatus }), null, 16, ["sort-status"]);
          }), 128))
        ]))
      ], 4),
      createElementVNode("div", {
        class: "h-table-fixed-cover",
        style: normalizeStyle({ width: $data.scrollWidth + "px" })
      }, null, 4)
    ], 4),
    createElementVNode("div", _hoisted_8$6, [
      createElementVNode("div", _hoisted_9$4, [
        createElementVNode("div", {
          class: "h-table-body",
          style: normalizeStyle($options.bodyStyle)
        }, [
          $data.tableDatas.length == 0 ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
            createElementVNode("div", _hoisted_10$2, [
              renderSlot(_ctx.$slots, "empty"),
              !_ctx.$slots.empty ? (openBlock(), createElementBlock("div", _hoisted_11$2, toDisplayString(_ctx.hlang("h.table.empty")), 1)) : createCommentVNode("", true)
            ]),
            createElementVNode("div", {
              class: "h-table-content-empty-width",
              style: normalizeStyle({ width: $data.emptyWidth + "px" })
            }, null, 4)
          ], 64)) : createCommentVNode("", true),
          withDirectives(createElementVNode("table", _hoisted_12$2, [
            createElementVNode("colgroup", null, [
              $props.checkbox ? (openBlock(), createElementBlock("col", _hoisted_13$1)) : createCommentVNode("", true),
              $props.radio ? (openBlock(), createElementBlock("col", _hoisted_14$1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.computeColumns, (c, index2) => {
                return openBlock(), createElementBlock("col", {
                  key: index2 + $data.update.columns,
                  width: $options.getWidth(c)
                }, null, 8, _hoisted_15$1);
              }), 128))
            ]),
            createElementVNode("tbody", _hoisted_16$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tableDatas, (d, index2) => {
                return openBlock(), createElementBlock(Fragment, {
                  key: d._heyui_uuid
                }, [
                  createVNode(_component_TableTr, {
                    "compute-columns": $data.computeColumns,
                    datas: d,
                    index: index2,
                    "tr-index": d._heyui_uuid,
                    class: normalizeClass($options.getTrCls(d, index2)),
                    onTrClick: $options.triggerTrClicked,
                    onTrDblclick: $options.triggerTrDblclicked,
                    onToggleTree: $options.toggleTree
                  }, {
                    default: withCtx(() => [
                      $props.checkbox ? (openBlock(), createElementBlock("td", _hoisted_17$1, [
                        createElementVNode("div", _hoisted_18$1, [
                          $options.fixedColumnLeft.length == 0 ? (openBlock(), createBlock(_component_Checkbox, {
                            key: d._heyui_uuid,
                            modelValue: $data.checks,
                            "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.checks = $event),
                            disabled: d._disabledSelect,
                            value: d
                          }, null, 8, ["modelValue", "disabled", "value"])) : createCommentVNode("", true)
                        ])
                      ])) : createCommentVNode("", true),
                      $props.radio ? (openBlock(), createElementBlock("td", _hoisted_19$1, [
                        $options.fixedColumnLeft.length == 0 ? (openBlock(), createBlock(_component_Radio, {
                          key: d._heyui_uuid,
                          modelValue: $data.rowSelected,
                          "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.rowSelected = $event),
                          value: d
                        }, null, 8, ["modelValue", "value"])) : createCommentVNode("", true)
                      ])) : createCommentVNode("", true)
                    ]),
                    _: 2
                  }, 1032, ["compute-columns", "datas", "index", "tr-index", "class", "onTrClick", "onTrDblclick", "onToggleTree"]),
                  _ctx.$slots.expand && d._expand ? (openBlock(), createElementBlock("tr", {
                    key: d._heyui_uuid + "expand",
                    class: "h-table-expand-tr"
                  }, [
                    createElementVNode("td", {
                      class: "h-table-expand-cell",
                      colspan: $options.totalCol
                    }, [
                      renderSlot(_ctx.$slots, "expand", {
                        data: d,
                        index: index2
                      })
                    ], 8, _hoisted_20$1)
                  ])) : createCommentVNode("", true)
                ], 64);
              }), 128))
            ])
          ], 512), [
            [vShow, $data.tableDatas.length]
          ])
        ], 4),
        $options.fixedColumnLeft.length ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "h-table-fixed-left",
          style: normalizeStyle($options.fixedBodyStyle)
        }, [
          createElementVNode("table", {
            class: "h-table-fixed-left-table",
            style: normalizeStyle({ "margin-top": -$data.scrollTop + "px", width: $data.tableWidth + "px" })
          }, [
            createElementVNode("colgroup", null, [
              $props.checkbox ? (openBlock(), createElementBlock("col", _hoisted_21$1)) : createCommentVNode("", true),
              $props.radio ? (openBlock(), createElementBlock("col", _hoisted_22$1)) : createCommentVNode("", true),
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.computeColumns, (c, index2) => {
                return openBlock(), createElementBlock("col", {
                  key: index2 + $data.update.columns,
                  width: $options.getWidth(c)
                }, null, 8, _hoisted_23$1);
              }), 128))
            ]),
            createElementVNode("tbody", _hoisted_24$1, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tableDatas, (d, index2) => {
                return openBlock(), createBlock(_component_TableTr, {
                  key: d._heyui_uuid,
                  "compute-columns": $data.computeColumns,
                  datas: d,
                  index: index2,
                  "tr-index": d._heyui_uuid,
                  class: normalizeClass($options.getTrCls(d, index2)),
                  onTrClick: $options.triggerTrClicked,
                  onTrDblclick: $options.triggerTrDblclicked,
                  onToggleTree: $options.toggleTree
                }, {
                  default: withCtx(() => [
                    $props.checkbox ? (openBlock(), createElementBlock("td", _hoisted_25$1, [
                      createElementVNode("div", _hoisted_26$1, [
                        createVNode(_component_Checkbox, {
                          key: d._heyui_uuid,
                          modelValue: $data.checks,
                          "onUpdate:modelValue": _cache[2] || (_cache[2] = ($event) => $data.checks = $event),
                          disabled: d._disabledSelect,
                          value: d
                        }, null, 8, ["modelValue", "disabled", "value"])
                      ])
                    ])) : createCommentVNode("", true),
                    $props.radio ? (openBlock(), createElementBlock("td", _hoisted_27, [
                      createVNode(_component_Radio, {
                        key: d._heyui_uuid,
                        modelValue: $data.rowSelected,
                        "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.rowSelected = $event),
                        value: d
                      }, null, 8, ["modelValue", "value"])
                    ])) : createCommentVNode("", true)
                  ]),
                  _: 2
                }, 1032, ["compute-columns", "datas", "index", "tr-index", "class", "onTrClick", "onTrDblclick", "onToggleTree"]);
              }), 128))
            ])
          ], 4)
        ], 4)) : createCommentVNode("", true),
        $options.fixedColumnRight.length ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "h-table-fixed-right",
          style: normalizeStyle($options.fixedRightBodyStyle)
        }, [
          createElementVNode("table", {
            class: "h-table-fixed-right-table",
            style: normalizeStyle({ "margin-top": -$data.scrollTop + "px", width: $data.tableWidth + "px" })
          }, [
            createElementVNode("colgroup", null, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.computeColumns, (c, index2) => {
                return openBlock(), createElementBlock("col", {
                  key: index2 + $data.update.columns,
                  width: $options.getWidth(c)
                }, null, 8, _hoisted_28);
              }), 128))
            ]),
            createElementVNode("tbody", _hoisted_29, [
              (openBlock(true), createElementBlock(Fragment, null, renderList($data.tableDatas, (d, index2) => {
                return openBlock(), createBlock(_component_TableTr, {
                  key: d._heyui_uuid,
                  "compute-columns": $data.computeColumns,
                  datas: d,
                  index: index2,
                  "tr-index": d._heyui_uuid,
                  class: normalizeClass($options.getTrCls(d, index2)),
                  onTrClick: $options.triggerTrClicked,
                  onTrDblclick: $options.triggerTrDblclicked,
                  onToggleTree: $options.toggleTree
                }, null, 8, ["compute-columns", "datas", "index", "tr-index", "class", "onTrClick", "onTrDblclick", "onToggleTree"]);
              }), 128))
            ])
          ], 4)
        ], 4)) : createCommentVNode("", true)
      ]),
      createVNode(_component_Loading, { loading: $props.loading }, null, 8, ["loading"])
    ]),
    $options.fixedColumnLeft.length ? (openBlock(), createElementBlock("div", _hoisted_30, [
      createElementVNode("table", {
        style: normalizeStyle({ width: $data.leftWidth + "px" })
      }, [
        createElementVNode("colgroup", null, [
          $props.checkbox ? (openBlock(), createElementBlock("col", _hoisted_31)) : createCommentVNode("", true),
          $props.radio ? (openBlock(), createElementBlock("col", _hoisted_32)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.fixedColumnLeft, (c, index2) => {
            return openBlock(), createElementBlock("col", {
              key: index2 + $data.update.columns,
              width: $options.getWidth(c)
            }, null, 8, _hoisted_33);
          }), 128))
        ]),
        createElementVNode("tr", null, [
          $props.checkbox ? (openBlock(), createElementBlock("th", _hoisted_34, [
            createVNode(_component_CheckboxAll, {
              checks: $data.checks,
              "checkable-datas": $options.checkableDatas,
              onCheckAll: $options.checkAll
            }, null, 8, ["checks", "checkable-datas", "onCheckAll"])
          ])) : createCommentVNode("", true),
          $props.radio ? (openBlock(), createElementBlock("th", _hoisted_35)) : createCommentVNode("", true),
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.fixedColumnLeft, (thdata, index2) => {
            return openBlock(), createBlock(_component_TableTh, mergeProps({
              key: index2 + $data.update.columns
            }, thdata, { "sort-status": $data.sortStatus }), null, 16, ["sort-status"]);
          }), 128))
        ])
      ], 4)
    ])) : createCommentVNode("", true),
    $options.fixedColumnRight.length ? (openBlock(), createElementBlock("div", {
      key: 1,
      style: normalizeStyle({ "margin-right": $data.scrollWidth + "px" }),
      class: "h-table-fixed-header-right"
    }, [
      createElementVNode("table", {
        style: normalizeStyle({ width: $data.rightWidth + "px" })
      }, [
        createElementVNode("colgroup", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.fixedColumnRight, (c, index2) => {
            return openBlock(), createElementBlock("col", {
              key: index2 + $data.update.columns,
              width: $options.getWidth(c)
            }, null, 8, _hoisted_36);
          }), 128))
        ]),
        createElementVNode("tr", null, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($options.fixedColumnRight, (thdata, index2) => {
            return openBlock(), createBlock(_component_TableTh, mergeProps({
              key: index2 + $data.update.columns
            }, thdata, { "sort-status": $data.sortStatus }), null, 16, ["sort-status"]);
          }), 128))
        ])
      ], 4)
    ], 4)) : createCommentVNode("", true),
    createElementVNode("div", _hoisted_37, [
      renderSlot(_ctx.$slots, "default")
    ])
  ], 2);
}
var Table = /* @__PURE__ */ _export_sfc(_sfc_main$q, [["render", _sfc_render$q]]);
const _sfc_main$p = {
  name: "HTableItem",
  props: {
    rowspan: Number,
    colspan: Number,
    title: String,
    width: Number,
    fixed: String,
    label: String,
    prop: String,
    attrs: Function,
    dict: String,
    align: String,
    className: String,
    isTreeOpener: Boolean,
    unit: String,
    format: Function,
    render: Function,
    sortProp: String,
    tooltip: {
      type: [Boolean, Object],
      default: false
    },
    sort: {
      type: [Boolean, String],
      default: false
    },
    placement: String,
    content: String
  },
  data() {
    return {};
  },
  watch: {
    title() {
      this.init();
    },
    width() {
      this.init();
    },
    fixed() {
      this.init();
    },
    label() {
      this.init();
    },
    prop() {
      this.init();
    },
    align() {
      this.init();
    }
  },
  beforeMount() {
    this.init();
  },
  beforeUnmount() {
    this.init();
  },
  methods: {
    init() {
      let parent = this.$parent;
      if (parent.$options.name == "HTable") {
        parent.refresh();
      }
    }
  }
};
function _sfc_render$p(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div");
}
var TableItem = /* @__PURE__ */ _export_sfc(_sfc_main$p, [["render", _sfc_render$p]]);
const prefix$b = "h-tabs";
const _sfc_main$o = {
  name: "HTabs",
  emits: ["update:modelValue", "input", "change", "clickItem"],
  props: {
    dict: String,
    datas: [Object, Array],
    modelValue: [String, Number],
    className: {
      type: String,
      default: "h-tabs-default"
    },
    keyName: {
      type: String,
      default: () => func.getOption("dict", "keyName")
    },
    titleName: {
      type: String,
      default: () => func.getOption("dict", "titleName")
    }
  },
  data() {
    return {
      key: this.keyName,
      title: this.titleName
    };
  },
  computed: {
    tabsCls() {
      return {
        [`${prefix$b}`]: true,
        [this.className]: !!this.className
      };
    },
    arr() {
      if (!this.datas && !this.dict) {
        console.error("[HeyUI Error] Tabs Component: Datas or dict parameters need to be defined at least.");
        return [];
      }
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      return func.initOptions(datas, this);
    }
  },
  methods: {
    trigger(data, index2) {
      if (this.modelValue != data[this.key]) {
        this.$emit("input", data[this.key]);
        this.$emit("update:modelValue", data[this.key]);
        this.$emit("change", data, index2);
      }
      this.$emit("clickItem", data, index2);
    }
  }
};
const _hoisted_1$d = ["onClick"];
const _hoisted_2$b = { key: 0 };
function _sfc_render$o(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.tabsCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.arr, (a, index2) => {
      return openBlock(), createElementBlock("div", {
        key: a[$data.key],
        class: normalizeClass([{ "h-tabs-selected": a[$data.key] == $props.modelValue, "h-tabs-item-selected": a[$data.key] == $props.modelValue }, "h-tabs-item"]),
        onClick: ($event) => $options.trigger(a, index2)
      }, [
        !_ctx.$slots.item ? (openBlock(), createElementBlock("span", _hoisted_2$b, toDisplayString(a[$data.title]), 1)) : renderSlot(_ctx.$slots, "item", {
          key: 1,
          tab: a
        })
      ], 10, _hoisted_1$d);
    }), 128))
  ], 2);
}
var Tabs = /* @__PURE__ */ _export_sfc(_sfc_main$o, [["render", _sfc_render$o]]);
const prefix$a = "h-tag";
const _sfc_main$n = {
  name: "HTag",
  props: {
    type: String,
    color: String
  },
  data() {
    return {};
  },
  computed: {
    cls() {
      const hasColor = !!this.color;
      const selfDefineColor = hasColor && this.color.indexOf("#") > -1;
      return {
        [`${prefix$a}`]: true,
        [`${prefix$a}-${this.type}`]: !!this.type,
        [`${prefix$a}-${this.color}`]: hasColor && !selfDefineColor,
        [`${prefix$a}-self-define-color`]: hasColor && selfDefineColor
      };
    },
    style() {
      const hasColor = !!this.color;
      const selfDefineColor = hasColor && this.color.indexOf("#") > -1;
      if (selfDefineColor) {
        return {
          "background-color": this.color,
          "border-color": this.color
        };
      }
      return {};
    }
  },
  methods: {}
};
function _sfc_render$n(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.cls),
    style: normalizeStyle($options.style)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Tag = /* @__PURE__ */ _export_sfc(_sfc_main$n, [["render", _sfc_render$n]]);
const prefix$9 = "h-taginput";
const _sfc_main$m = {
  name: "HTagInput",
  mixins: [Locale],
  emits: ["input", "change", "update:modelValue"],
  props: {
    readonly: {
      type: Boolean,
      default: false
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    type: {
      type: String,
      default: "Array"
    },
    split: {
      type: String,
      default: ","
    },
    wordlimit: {
      type: Number,
      default: 50
    },
    limit: {
      type: Number,
      default: 1e4
    },
    modelValue: [Array, String, Number]
  },
  data() {
    return {
      focusing: false,
      tagvalue: ""
    };
  },
  computed: {
    taginputCls() {
      return {
        [`${prefix$9}`]: true,
        [`${prefix$9}-input-border`]: !this.noBorder && !this.readonly,
        [`${prefix$9}-readonly`]: this.readonly,
        focusing: this.focusing
      };
    },
    values() {
      if (this.type == "Array") {
        return this.modelValue || [];
      } else {
        if (utils.isNull(this.modelValue) || this.modelValue === "") {
          return [];
        }
        return String(this.modelValue).split(this.split);
      }
    }
  },
  methods: {
    removeLast(event) {
      if (event.target.value === "" && this.values.length) {
        this.remove(this.values.length - 1);
      }
    },
    remove(index2) {
      if (this.readonly)
        return;
      let value = utils.copy(this.values);
      value.splice(index2, 1);
      this.setvalue(value);
    },
    add() {
      if (this.wordlimit < this.tagvalue.length) {
        message.error(this.hlang("h.wordlimit.warn", [this.wordlimit]));
        return false;
      }
      if (this.limit <= this.values.length) {
        message.error(this.hlang("h.taginput.limitWords"));
        return false;
      }
      if (this.readonly)
        return false;
      if (this.tagvalue === "")
        return false;
      let value = utils.copy(this.values);
      value.push(this.tagvalue);
      this.setvalue(value);
    },
    setvalue(value) {
      if (this.type == "string") {
        if (value.length == 0) {
          value = null;
        } else {
          value = value.join(this.split);
        }
      }
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.tagvalue = "";
    },
    blur() {
      this.add();
      this.focusing = false;
    }
  }
};
const _hoisted_1$c = ["onClick"];
const _hoisted_2$a = ["placeholder"];
function _sfc_render$m(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.taginputCls)
  }, [
    (openBlock(true), createElementBlock(Fragment, null, renderList($options.values, (v, index2) => {
      return openBlock(), createElementBlock("span", {
        key: v + index2
      }, [
        createElementVNode("span", null, toDisplayString(v), 1),
        !$props.readonly ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: "h-icon-close-min",
          onClick: withModifiers(($event) => $options.remove(index2), ["stop"])
        }, null, 8, _hoisted_1$c)) : createCommentVNode("", true)
      ]);
    }), 128)),
    !$props.readonly ? withDirectives((openBlock(), createElementBlock("input", {
      key: 0,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tagvalue = $event),
      type: "text",
      class: "h-taginput-input h-input",
      placeholder: $props.placeholder,
      onFocus: _cache[1] || (_cache[1] = ($event) => $data.focusing = true),
      onBlur: _cache[2] || (_cache[2] = (...args) => $options.blur && $options.blur(...args)),
      onKeyup: _cache[3] || (_cache[3] = withKeys((...args) => $options.add && $options.add(...args), ["enter"])),
      onKeydown: _cache[4] || (_cache[4] = withKeys((...args) => $options.removeLast && $options.removeLast(...args), ["delete"]))
    }, null, 40, _hoisted_2$a)), [
      [vModelText, $data.tagvalue]
    ]) : createCommentVNode("", true)
  ], 2);
}
var TagInput = /* @__PURE__ */ _export_sfc(_sfc_main$m, [["render", _sfc_render$m]]);
const getParent = function(vm) {
  let parent = vm.$parent;
  while (parent && parent.$parent && parent.$.type.name !== "HTree") {
    parent = parent.$parent;
  }
  if (!parent) {
    console.error("[HeyUI Error] Tree Component: Please put TreeItem component in the Tree Component");
  }
  return parent;
};
var TreeSlot = {
  name: "hTreeSlot",
  props: {
    data: Object
  },
  render() {
    let parent = getParent(this);
    if (parent && parent.$slots && parent.$slots.item) {
      return h("div", {
        class: "h-tree-item-slot"
      }, [
        parent.$slots.item({
          item: this.data
        })
      ]);
    }
    return h("span");
  }
};
const _sfc_main$l = {
  name: "HTreeItem",
  components: { TreeSlot, Checkbox },
  emits: ["trigger"],
  mixins: [Locale],
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
    chooseMode: String,
    toggleOnSelect: Boolean,
    selectOnClick: Boolean,
    level: Number
  },
  data() {
    return {};
  },
  methods: {
    clickShow() {
      if (this.selectOnClick) {
        this.select();
      }
    },
    select() {
      if (this.toggleOnSelect || this.multiple) {
        this.toggleTree();
      }
      if (this.data.status.disabled)
        return;
      this.$emit("trigger", { type: "selectEvent", data: this.data });
      if (this.multiple && this.data.children.length == 0) {
        this.choose();
      }
    },
    choose() {
      Object.assign(this.data.status, { choose: !this.data.status.choose, indeterminate: false });
      this.$emit("trigger", { type: "chooseEvent", data: this.data });
    },
    trigger({ type, data }) {
      if (type == "chooseEvent") {
        if (this.chooseMode != "independent") {
          if (this.data.children) {
            let chooseStatus = true;
            let indeterminateStatus = false;
            for (let child of this.data.children) {
              if (!child.status.choose && chooseStatus) {
                chooseStatus = false;
              }
              if (child.status.choose || child.status.indeterminate) {
                indeterminateStatus = true;
              }
            }
            if (this.chooseMode == "all") {
              Object.assign(this.data.status, { choose: chooseStatus, indeterminate: indeterminateStatus && !chooseStatus });
            } else if (this.chooseMode == "some") {
              Object.assign(this.data.status, { choose: indeterminateStatus, indeterminate: false });
            }
          }
        }
      }
      this.$emit("trigger", { type, data });
    },
    toggleTree() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit("trigger", { type: "toggleTreeEvent", data: this.data });
      }
    },
    loadData() {
      this.$emit("trigger", { type: "loadDataEvent", data: this.data });
    }
  }
};
const _hoisted_1$b = { class: "h-tree-show-expand" };
const _hoisted_2$9 = {
  key: 0,
  class: "h-icon-angle-right"
};
const _hoisted_3$8 = {
  key: 1,
  class: "h-icon-loading"
};
const _hoisted_4$7 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-angle-right" }, null, -1);
const _hoisted_5$7 = [
  _hoisted_4$7
];
const _hoisted_6$7 = { key: 1 };
const _hoisted_7$5 = { key: 2 };
const _hoisted_8$5 = {
  key: 0,
  class: "h-tree-ul"
};
function _sfc_render$l(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Checkbox = resolveComponent("Checkbox");
  const _component_TreeSlot = resolveComponent("TreeSlot");
  const _component_hTreeItem = resolveComponent("hTreeItem");
  return openBlock(), createElementBlock("li", {
    class: normalizeClass(["h-tree-li", { "h-tree-li-opened": $props.data.status.opened }])
  }, [
    withDirectives(createElementVNode("div", {
      class: normalizeClass(["h-tree-show", {
        "h-tree-show-disabled": $props.data.status.disabled,
        "h-tree-show-choose": $props.data.status.choose,
        "h-tree-show-indeterminate": $props.data.status.indeterminate,
        "h-tree-show-selected": $props.status.selected == $props.data.key
      }]),
      onClick: _cache[3] || (_cache[3] = (...args) => $options.clickShow && $options.clickShow(...args))
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.level, (l) => {
        return openBlock(), createElementBlock("span", {
          key: l,
          class: "h-tree-show-space"
        });
      }), 128)),
      createElementVNode("span", _hoisted_1$b, [
        $props.data.status.isWait ? (openBlock(), createElementBlock("span", {
          key: 0,
          onClick: _cache[0] || (_cache[0] = withModifiers(($event) => $options.toggleTree(), ["stop"]))
        }, [
          !$props.data.status.loading ? (openBlock(), createElementBlock("i", _hoisted_2$9)) : (openBlock(), createElementBlock("i", _hoisted_3$8))
        ])) : $props.data.children && $props.data.children.length > 0 ? (openBlock(), createElementBlock("span", {
          key: 1,
          onClick: _cache[1] || (_cache[1] = withModifiers(($event) => $options.toggleTree(), ["stop"]))
        }, _hoisted_5$7)) : createCommentVNode("", true)
      ]),
      $props.multiple && $props.data.status.checkable ? (openBlock(), createBlock(_component_Checkbox, {
        key: 0,
        modelValue: $props.data.status.choose,
        disabled: $props.data.status.disabled,
        indeterminate: $props.data.status.indeterminate,
        onChange: $options.choose
      }, null, 8, ["modelValue", "disabled", "indeterminate", "onChange"])) : createCommentVNode("", true),
      createElementVNode("div", {
        class: normalizeClass(["h-tree-show-desc", { selected: $props.status.selected == $props.data.key }]),
        onClick: _cache[2] || (_cache[2] = (...args) => $options.select && $options.select(...args))
      }, [
        $props.data.icon ? (openBlock(), createElementBlock("span", {
          key: 0,
          class: normalizeClass(["h-tree-show-icon", $props.data.icon])
        }, null, 2)) : createCommentVNode("", true),
        $props.data.title != null ? (openBlock(), createElementBlock("span", _hoisted_6$7, toDisplayString($props.data.title), 1)) : (openBlock(), createElementBlock("span", _hoisted_7$5, toDisplayString(_ctx.hlang("h.common.empty")), 1))
      ], 2),
      createVNode(_component_TreeSlot, {
        data: $props.data.value
      }, null, 8, ["data"])
    ], 2), [
      [vShow, !$props.data.status.hide]
    ]),
    $props.data.children && $props.data.children.length > 0 ? (openBlock(), createElementBlock("ul", _hoisted_8$5, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.data.children, (child) => {
        return openBlock(), createBlock(_component_hTreeItem, {
          key: child.key,
          data: child,
          param: $props.param,
          status: $props.status,
          multiple: $props.multiple,
          "choose-mode": $props.chooseMode,
          "toggle-on-select": $props.toggleOnSelect,
          "select-on-click": $props.selectOnClick,
          level: $props.level + 1,
          onTrigger: $options.trigger
        }, null, 8, ["data", "param", "status", "multiple", "choose-mode", "toggle-on-select", "select-on-click", "level", "onTrigger"]);
      }), 128))
    ])) : createCommentVNode("", true)
  ], 2);
}
var treeItem = /* @__PURE__ */ _export_sfc(_sfc_main$l, [["render", _sfc_render$l]]);
const prefix$8 = "h-tree";
const updateChildStatus = (data, column, value) => {
  if (data.children) {
    for (let child of data.children) {
      child.status[column] = value;
      updateChildStatus(child, column, value);
    }
  }
};
const updateParentStatus = (objs, data, column, value) => {
  let parent = objs[data.parentKey];
  if (!utils.isNull(data.parentKey) && parent) {
    parent.status[column] = value;
    updateParentStatus(objs, parent, column, value);
  }
};
const updateModeAllChildChooseStatus = (data) => {
  if (data.children) {
    let isIndeterminateStatus = false;
    let isChoose = !!data.children.length;
    for (let child of data.children) {
      updateModeAllChildChooseStatus(child);
      if (child.status.choose || child.status.indeterminate) {
        isIndeterminateStatus = true;
      }
      if (!child.status.choose) {
        isChoose = false;
      }
    }
    if (!data.status.choose) {
      if (isChoose) {
        data.status.choose = true;
      } else if (isIndeterminateStatus) {
        data.status.indeterminate = true;
      }
    }
  }
};
const getChooseNode = (data, options2) => {
  if (data.status.choose) {
    options2.push(data.value);
  } else {
    for (let child of data.children) {
      getChooseNode(child, options2);
    }
  }
  return options2;
};
const _sfc_main$k = {
  name: "HTree",
  components: {
    treeItem,
    Search
  },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    chooseMode: {
      type: String,
      default: "all"
    },
    modelValue: [Number, String, Array, Object],
    config: String,
    toggleOnSelect: {
      type: Boolean,
      default: true
    },
    selectOnClick: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: "h-tree-theme-item-selected"
    }
  },
  emits: ["open", "select", "choose", "update:modelValue", "change", "loadDataSuccess"],
  data() {
    return {
      updateFromInput: false,
      globalloading: false,
      loading: true,
      status: {
        selected: null
      },
      treeDatas: [],
      treeObj: {},
      searchValue: null
    };
  },
  computed: {
    param() {
      if (this.config) {
        return utils.extend({}, func.getOption("tree.default"), func.getOption(`tree.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, func.getOption("tree.default"), this.option);
      }
    },
    treeCls() {
      return {
        [prefix$8]: true,
        [`${prefix$8}-multiple`]: this.multiple,
        [`${prefix$8}-single`]: !this.multiple,
        [this.className]: !!this.className
      };
    }
  },
  watch: {
    modelValue() {
      if (this.updateFromInput) {
        this.updateFromInput = false;
        return;
      }
      this.parse();
    },
    "option.datas": function() {
      this.initTreeDatas();
    }
  },
  mounted() {
    this.initTreeDatas();
    this.parse();
  },
  methods: {
    parse() {
      if (this.multiple) {
        this.updateChoose(this.modelValue, false);
      } else {
        this.updateSelect(this.modelValue, false);
      }
    },
    updateTreeItem(key, value) {
      let item = this.treeObj[key];
      if (item) {
        for (let v of Object.keys(value)) {
          item.value[v] = value[v];
          if (v == this.param.titleName) {
            item.title = value[v];
          }
        }
      }
      this.$forceUpdate();
    },
    appendTreeItem(key, value) {
      let parent = this.treeObj[key];
      let obj = this.initTreeNode(value, key);
      if (parent) {
        parent.children.push(obj);
      } else {
        this.treeDatas.push(obj);
      }
      this.treeObj[obj.key] = obj;
    },
    removeTreeItem(key) {
      let item = this.treeObj[key];
      if (item) {
        let index2 = this.treeDatas.indexOf(item);
        if (index2 > -1) {
          this.treeDatas.splice(index2, 1);
        } else if (item.parentKey && this.treeObj[item.parentKey]) {
          let parent = this.treeObj[item.parentKey];
          if (parent.children.indexOf(item) > -1) {
            parent.children.splice(parent.children.indexOf(item), 1);
          }
        }
        delete this.treeObj[key];
      }
    },
    searchTree(value) {
      this.searchValue = value;
      if (!utils.isNull(this.searchValue) && this.searchValue !== "") {
        let searchValue = this.searchValue.toLowerCase();
        for (let key of Object.keys(this.treeObj)) {
          let tree = this.treeObj[key];
          tree.status.hide = (tree.html || tree.title || "").toLowerCase().indexOf(searchValue) == -1;
        }
        this.expandAll();
      } else {
        for (let key of Object.keys(this.treeObj)) {
          let tree = this.treeObj[key];
          tree.status.hide = false;
        }
      }
    },
    trigger({ type, data, update: update2 }) {
      if (update2)
        Object.assign(data.status, update2);
      if (type == "toggleTreeEvent") {
        data.status.opened = !data.status.opened;
        this.$emit("open", data.value);
      } else if (type == "loadDataEvent") {
        if (utils.isFunction(this.param.getDatas)) {
          data.status.loading = true;
          this.param.getDatas.call(this.param, data.value, (result) => {
            data.children = this.initTreeModeData(result, true);
            data.status.isWait = false;
            data.status.loading = false;
            data.status.opened = true;
          }, () => {
            data.status.loading = false;
          });
        }
      } else if (type == "selectEvent") {
        if (!this.multiple) {
          this.status.selected = data.key;
          this.$emit("select", data.value);
          this.setvalue();
        }
      } else if (type == "chooseEvent") {
        let choose = data.status.choose;
        if (this.chooseMode != "independent") {
          updateChildStatus(data, "choose", choose);
        }
        this.$emit("choose", this.getChoose());
        if (this.multiple)
          this.setvalue();
      }
    },
    initTreeDatas() {
      let datas = [];
      if (utils.isArray(this.param.datas)) {
        datas = this.param.datas;
      } else if (utils.isFunction(this.param.datas)) {
        datas = this.param.datas.apply(this.param);
      }
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        let loadData = this.param.getTotalDatas || this.param.getDatas;
        let param = [
          (result) => {
            this.treeDatas = this.initDatas(utils.copy(result));
            this.parse();
            this.globalloading = false;
            this.$emit("loadDataSuccess");
          },
          () => {
            this.globalloading = false;
          }
        ];
        if (this.param.getDatas) {
          param.unshift(null);
        }
        loadData.apply(this.param, param);
      }
      this.treeDatas = this.initDatas(datas);
      this.parse();
    },
    initDatas(datas) {
      let list = datas = utils.copy(datas);
      if (this.param.dataMode == "list" && datas.length > 0) {
        list = utils.generateTree(datas, this.param);
      }
      let isWait = utils.isFunction(this.param.getDatas);
      return this.initTreeModeData(list, isWait);
    },
    initTreeModeData(list, isWait, parentKey) {
      let datas = [];
      for (let data of list) {
        let obj = this.initTreeNode(data, parentKey, isWait);
        let children = data[this.param.childrenName] || [];
        obj.children = this.initTreeModeData(children, isWait, obj.key);
        this.treeObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    },
    initTreeNode(data, parentKey, isWait = false) {
      return {
        key: data[this.param.keyName],
        title: data[this.param.titleName],
        value: data,
        parentKey,
        icon: data.treeIcon,
        status: {
          hide: false,
          opened: false,
          loading: false,
          checkable: data.checkable !== false,
          isWait,
          selected: false,
          indeterminate: false,
          choose: false,
          disabled: !!data.disabled
        },
        children: []
      };
    },
    refresh() {
      this.initTreeDatas();
    },
    expandAll() {
      for (let tree of Object.keys(this.treeObj)) {
        this.treeObj[tree].status.opened = true;
      }
    },
    foldAll() {
      for (let tree of Object.keys(this.treeObj)) {
        this.treeObj[tree].status.opened = false;
      }
    },
    expand(ids) {
      for (let key of Object.keys(this.treeObj)) {
        let tree = this.treeObj[key];
        tree.status.opened = ids.indexOf(tree.key) > -1;
      }
    },
    chooseAll() {
      for (let key in this.treeObj) {
        this.treeObj[key].status.choose = true;
      }
      this.setvalue();
    },
    updateSelect(key, updateValue = true) {
      if (key === null) {
        this.status.selected = null;
      } else {
        let option = this.treeObj[key];
        if (option) {
          this.status.selected = key;
          updateParentStatus(this.treeObj, option, "opened", true);
        }
      }
      if (updateValue) {
        this.setvalue();
      }
    },
    getSelect() {
      if (utils.isNull(this.status.selected)) {
        return null;
      }
      let option = this.treeObj[this.status.selected];
      return option.value;
    },
    updateChoose(choose, updateValue = true) {
      if (!this.multiple)
        return;
      choose = choose || [];
      for (let key of Object.keys(this.treeObj)) {
        let tree = this.treeObj[key];
        tree.status.choose = false;
        tree.status.indeterminate = false;
        tree.status.opened = false;
      }
      for (let key of choose) {
        let tree = this.treeObj[key];
        if (tree) {
          tree.status.choose = choose.indexOf(tree.key) != -1;
          if (tree.status.choose) {
            tree.status.opened = true;
            updateParentStatus(this.treeObj, tree, "opened", true);
            if (this.chooseMode == "all") {
              updateChildStatus(tree, "choose", true);
            }
          }
        }
      }
      if (this.chooseMode == "all") {
        for (let tree of this.treeDatas) {
          updateModeAllChildChooseStatus(tree);
        }
      }
      if (updateValue) {
        this.setvalue();
      }
    },
    setvalue() {
      let value = null;
      if (this.multiple) {
        let choose = this.getChoose();
        let keys = choose.map((item) => item[this.param.keyName]);
        value = keys;
      } else {
        let select2 = this.getSelect();
        value = select2 ? select2[this.param.keyName] : null;
      }
      this.updateFromInput = true;
      this.$emit("update:modelValue", value);
      this.$emit("change", value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    },
    getFullChoose() {
      let options2 = [];
      for (let key of Object.keys(this.treeObj)) {
        let tree = this.treeObj[key];
        if (tree.status.choose) {
          options2.push(tree.value);
        }
      }
      return options2;
    },
    getChoose() {
      if (this.chooseMode == "some") {
        return this.getFullChoose();
      } else if (this.chooseMode == "independent") {
        return this.getFullChoose();
      } else {
        let options2 = [];
        for (let data of this.treeDatas) {
          options2 = getChooseNode(data, options2);
        }
        return options2;
      }
    }
  }
};
const _hoisted_1$a = { class: "h-tree-body" };
function _sfc_render$k(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Search = resolveComponent("Search");
  const _component_treeItem = resolveComponent("treeItem");
  const _component_Loading = resolveComponent("Loading");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.treeCls)
  }, [
    $props.filterable ? (openBlock(), createBlock(_component_Search, {
      key: 0,
      modelValue: $data.searchValue,
      "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.searchValue = $event),
      block: "",
      onSearch: $options.searchTree
    }, null, 8, ["modelValue", "onSearch"])) : createCommentVNode("", true),
    createElementVNode("ul", _hoisted_1$a, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($data.treeDatas, (tree) => {
        return openBlock(), createBlock(_component_treeItem, {
          key: tree.key,
          data: tree,
          param: $options.param,
          multiple: $props.multiple,
          status: $data.status,
          "choose-mode": $props.chooseMode,
          "toggle-on-select": $props.toggleOnSelect,
          "select-on-click": $props.selectOnClick,
          level: 0,
          onTrigger: $options.trigger
        }, null, 8, ["data", "param", "multiple", "status", "choose-mode", "toggle-on-select", "select-on-click", "onTrigger"]);
      }), 128))
    ]),
    createVNode(_component_Loading, { loading: $data.globalloading }, null, 8, ["loading"])
  ], 2);
}
var Tree = /* @__PURE__ */ _export_sfc(_sfc_main$k, [["render", _sfc_render$k]]);
const prefix$7 = "h-treepicker";
const _sfc_main$j = {
  name: "HTreePicker",
  component: {
    Tree
  },
  emits: ["select", "choose", "update:modelValue", "change", "input", "loadDataSuccess"],
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: "key"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: false
    },
    chooseMode: {
      type: String,
      default: "all"
    },
    showCount: {
      type: Boolean,
      default: false
    },
    toggleOnSelect: {
      type: Boolean,
      default: true
    },
    modelValue: [Number, String, Array, Object],
    config: String,
    className: String,
    useConfirm: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      objects: [],
      object: null,
      dropdown: null,
      valuebak: null,
      stashObject: null
    };
  },
  computed: {
    param() {
      if (this.config) {
        return utils.extend({}, func.getOption("tree.default"), func.getOption(`tree.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, func.getOption("tree.default"), this.option);
      }
    },
    showCls() {
      return {
        [`${this.className}-show`]: !!this.className
      };
    },
    groupCls() {
      return {
        [`${this.className}-dropdown`]: !!this.className
      };
    },
    treepickerCls() {
      return {
        [`${prefix$7}`]: true,
        [`${prefix$7}-input-border`]: true,
        [`${prefix$7}-no-autosize`]: true,
        [`${prefix$7}-multiple`]: this.multiple,
        [`${prefix$7}-disabled`]: this.disabled
      };
    }
  },
  watch: {
    modelValue() {
      this.parse();
    },
    disabled() {
      if (!this.dropdown) {
        return false;
      }
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    this.parse();
    this.$nextTick(() => {
      if (this.inline)
        return;
      let el = this.el = this.$el.querySelector(`.${prefix$7}>.h-treepicker-show`);
      let content = this.$el.querySelector(`.h-treepicker-group`);
      this.dropdown = new Dropdown(el, {
        trigger: "click",
        content,
        disabled: this.disabled
      });
      if (this.disabled) {
        this.dropdown.disabled();
      }
    });
  },
  methods: {
    refresh() {
      if (this.$refs.tree) {
        return this.$refs.tree.refresh();
      }
    },
    loadDataSuccess() {
      this.parse();
      this.$emit("loadDataSuccess");
    },
    getChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getChoose();
      }
      return [];
    },
    getFullChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getFullChoose();
      }
      return [];
    },
    select(data) {
      this.stashObject = data;
      if (!this.multiple && !this.useConfirm) {
        this.confirm(data);
      }
    },
    choose(data) {
      this.objects = data;
      this.$emit("choose", data);
      if (this.multiple)
        this.setvalue();
    },
    chooseAll() {
      if (this.$refs.tree) {
        this.$refs.tree.chooseAll();
      }
    },
    remove(obj) {
      let index2 = this.objects.indexOf(obj);
      this.objects.splice(index2, 1);
      this.valuebak.splice(index2, 1);
      this.setvalue();
      this.triggerChange();
    },
    updateShow(data) {
      if (utils.isObject(data) && !this.multiple) {
        this.object = data;
      }
      if (utils.isArray(data) && this.multiple) {
        this.objects = data;
      }
      this.setvalue();
    },
    parse() {
      if (this.type == "key") {
        this.valuebak = utils.copy(this.modelValue);
        this.$nextTick(() => {
          if (this.multiple) {
            this.objects = this.$refs.tree.getChoose();
          } else {
            this.object = this.$refs.tree.getSelect();
          }
        });
      } else {
        if (this.multiple) {
          this.valuebak = (this.modelValue || []).map((item) => item[this.param.keyName]);
          this.objects = utils.copy(this.modelValue);
        } else {
          this.valuebak = this.modelValue ? this.modelValue[this.param.keyName] : null;
          this.object = utils.copy(this.modelValue);
        }
      }
    },
    dispose() {
      if (this.multiple) {
        return this.objects.map((item) => this.type == "key" ? item[this.param.keyName] : item).filter((item) => {
          return item !== void 0;
        });
      } else if (this.object) {
        return this.type == "key" ? this.object[this.param.keyName] : this.object;
      }
      return null;
    },
    clear() {
      this.stashObject = null;
      this.objects = [];
      this.$refs.tree.searchTree(null);
      this.confirm();
    },
    confirm() {
      if (!this.multiple) {
        this.object = this.stashObject;
        this.$emit("select", this.object);
      }
      this.setvalue();
      this.triggerChange();
      this.dropdown.hide();
    },
    setvalue() {
      let value = this.dispose();
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      this.stashObject = this.object;
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.$nextTick(() => {
        if (this.dropdown)
          this.dropdown.update();
      });
    },
    triggerChange() {
      this.$nextTick(() => {
        this.$emit("change", utils.copy(this.multiple ? this.objects : this.object));
      });
    },
    expandAll() {
      if (this.$refs.tree) {
        return this.$refs.tree.expandAll();
      }
    },
    expand(data) {
      if (this.$refs.tree) {
        return this.$refs.tree.expand(data);
      }
    },
    foldAll() {
      if (this.$refs.tree) {
        return this.$refs.tree.foldAll();
      }
    }
  }
};
const _hoisted_1$9 = ["disabled"];
const _hoisted_2$8 = {
  key: 0,
  class: "h-treepicker-value-single"
};
const _hoisted_3$7 = {
  key: 1,
  class: "h-treepicker-multiple-tags"
};
const _hoisted_4$6 = ["onClick"];
const _hoisted_5$6 = {
  key: 1,
  class: "h-treepicker-value-single"
};
const _hoisted_6$6 = {
  key: 2,
  class: "h-treepicker-placeholder"
};
const _hoisted_7$4 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-down" }, null, -1);
const _hoisted_8$4 = { class: "h-treepicker-body" };
const _hoisted_9$3 = {
  key: 0,
  class: "h-treepicker-footer"
};
function _sfc_render$j(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Tree = resolveComponent("Tree");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.treepickerCls),
    disabled: $props.disabled
  }, [
    createElementVNode("div", {
      class: normalizeClass(["h-treepicker-show", $options.showCls])
    }, [
      $props.multiple && $data.objects.length ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        $props.showCount ? (openBlock(), createElementBlock("div", _hoisted_2$8, toDisplayString(_ctx.hlang("h.treepicker.selectDesc", [$data.valuebak.length])), 1)) : (openBlock(), createElementBlock("div", _hoisted_3$7, [
          (openBlock(true), createElementBlock(Fragment, null, renderList($data.objects, (obj) => {
            return openBlock(), createElementBlock("span", {
              key: obj[$options.param.keyName]
            }, [
              createElementVNode("span", null, toDisplayString(obj[$options.param.titleName]), 1),
              !$props.disabled ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "h-icon-close-min",
                onClick: withModifiers(($event) => $options.remove(obj), ["stop"])
              }, null, 8, _hoisted_4$6)) : createCommentVNode("", true)
            ]);
          }), 128))
        ]))
      ], 64)) : !$props.multiple && $data.object ? (openBlock(), createElementBlock("div", _hoisted_5$6, toDisplayString($data.object[$options.param.titleName]), 1)) : (openBlock(), createElementBlock("div", _hoisted_6$6, toDisplayString($props.placeholder), 1)),
      _hoisted_7$4
    ], 2),
    createElementVNode("div", {
      class: normalizeClass(["h-treepicker-group", $options.groupCls])
    }, [
      createElementVNode("div", _hoisted_8$4, [
        createVNode(_component_Tree, {
          ref: "tree",
          modelValue: $data.valuebak,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.valuebak = $event),
          "toggle-on-select": $props.toggleOnSelect,
          option: $props.option,
          multiple: $props.multiple,
          "choose-mode": $props.chooseMode,
          filterable: $props.filterable,
          config: $props.config,
          onLoadDataSuccess: $options.loadDataSuccess,
          onSelect: $options.select,
          onChoose: $options.choose
        }, null, 8, ["modelValue", "toggle-on-select", "option", "multiple", "choose-mode", "filterable", "config", "onLoadDataSuccess", "onSelect", "onChoose"])
      ]),
      $props.multiple || $props.useConfirm ? (openBlock(), createElementBlock("div", _hoisted_9$3, [
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-text h-btn-s",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.clear && $options.clear(...args))
        }, toDisplayString(_ctx.hlang("h.common.clear")), 1),
        createElementVNode("button", {
          type: "button",
          class: "h-btn h-btn-primary h-btn-s",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.confirm && $options.confirm(...args))
        }, toDisplayString(_ctx.hlang("h.common.confirm")), 1)
      ])) : createCommentVNode("", true)
    ], 2)
  ], 10, _hoisted_1$9);
}
var TreePicker = /* @__PURE__ */ _export_sfc(_sfc_main$j, [["render", _sfc_render$j]]);
const prefix$6 = "h-numberinput";
const _sfc_main$i = {
  name: "HNumberInput",
  emits: ["input", "change", "update:modelValue"],
  props: {
    modelValue: [Number, String],
    min: Number,
    max: Number,
    disabled: {
      type: Boolean,
      default: false
    },
    step: {
      type: Number,
      default: 1
    },
    placeholder: {
      type: String
    },
    useInt: {
      type: Boolean,
      default: false
    },
    useOperate: {
      type: Boolean,
      default: false
    },
    precision: {
      type: Number
    }
  },
  data() {
    return {
      focusing: false,
      editValue: this.modelValue,
      valueBak: this.modelValue
    };
  },
  computed: {
    numberinputCls() {
      return {
        [prefix$6]: true,
        [`${prefix$6}-disabled`]: !!this.disabled
      };
    }
  },
  watch: {
    value() {
      if (this.valueBak != this.modelValue) {
        this.editValue = this.modelValue;
        this.valueBak = this.modelValue;
      }
    }
  },
  mounted() {
  },
  methods: {
    plus() {
      if (this.disabled)
        return false;
      let value = this.getValue(this.modelValue);
      this.setvalue(utils.add(value || 0, this.step), "handler");
    },
    minus() {
      if (this.disabled)
        return false;
      let value = this.getValue(this.modelValue);
      this.setvalue(utils.add(value || 0, -this.step), "handler");
    },
    input(event) {
      if (isNaN(Number(event.target.value)))
        return false;
      let value = this.getValue(event.target.value);
      if (utils.isNumber(this.modelValue) && Math.abs(value - this.modelValue) <= 1 && this.precision) {
        return;
      }
      this.setvalue(value, "input");
    },
    blur(event) {
      this.focusing = false;
      let value = this.getValue(event.target.value);
      this.setvalue(value, "blur");
    },
    getValue(value) {
      if (value === "")
        return null;
      if (this.useInt) {
        let v = parseInt(value);
        return isNaN(v) ? null : v;
      } else {
        let v = parseFloat(value);
        return isNaN(v) ? null : v;
      }
    },
    setvalue(value, trigger) {
      if (this.disabled)
        return false;
      if (this.max !== void 0 && value !== null) {
        value = Math.min(this.max, value);
      }
      if (this.min !== void 0 && value !== null) {
        value = Math.max(this.min, value);
      }
      if (this.precision && utils.isNumber(value)) {
        value = Math.floor(utils.mul(value || 0, Math.pow(10, this.precision))) / Math.pow(10, this.precision);
        value = value.toFixed(this.precision);
      }
      this.valueBak = value;
      this.$emit("input", value);
      this.$emit("update:modelValue", value);
      if (trigger != "input") {
        this.editValue = value;
      }
      if (trigger != "input") {
        this.$emit("change", value);
      }
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
    }
  }
};
const _hoisted_1$8 = ["placeholder", "disabled"];
const _hoisted_2$7 = {
  key: 0,
  class: "h-numberinput-operate"
};
const _hoisted_3$6 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-minus" }, null, -1);
const _hoisted_4$5 = [
  _hoisted_3$6
];
const _hoisted_5$5 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-plus" }, null, -1);
const _hoisted_6$5 = [
  _hoisted_5$5
];
function _sfc_render$i(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.numberinputCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass(["h-numberinput-show", { focusing: $data.focusing }])
    }, [
      withDirectives(createElementVNode("input", {
        "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.editValue = $event),
        type: "text",
        placeholder: $props.placeholder,
        disabled: $props.disabled === false ? null : true,
        class: "h-numberinput-input h-input",
        onInput: _cache[1] || (_cache[1] = (...args) => $options.input && $options.input(...args)),
        onFocus: _cache[2] || (_cache[2] = ($event) => $data.focusing = true),
        onBlur: _cache[3] || (_cache[3] = (...args) => $options.blur && $options.blur(...args))
      }, null, 40, _hoisted_1$8), [
        [vModelText, $data.editValue]
      ]),
      $props.useOperate ? (openBlock(), createElementBlock("div", _hoisted_2$7, [
        createElementVNode("span", {
          onClick: _cache[4] || (_cache[4] = (...args) => $options.minus && $options.minus(...args))
        }, _hoisted_4$5),
        createElementVNode("span", {
          onClick: _cache[5] || (_cache[5] = (...args) => $options.plus && $options.plus(...args))
        }, _hoisted_6$5)
      ])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var NumberInput = /* @__PURE__ */ _export_sfc(_sfc_main$i, [["render", _sfc_render$i]]);
const _sfc_main$h = {
  name: "HImagePreviewModal",
  components: {
    Loading: Loading$1,
    Modal: Modal$1
  },
  props: {
    isShow: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      openModal: false,
      datas: [],
      index: 0,
      height: 200,
      width: 200,
      showIndex: -1,
      changeing: false,
      previewFile: {}
    };
  },
  computed: {
    previewStyle() {
      return {
        height: `${this.height}px`,
        width: `${this.width}px`
      };
    },
    computedDatas() {
      if (utils.isString(this.datas)) {
        return [this.datas];
      } else if (utils.isArray(this.datas)) {
        return this.datas;
      }
      return [];
    },
    isShowIndex() {
      return !utils.isString(this.datas);
    }
  },
  watch: {
    openModal() {
      if (this.openModal) {
        this.change(this.index);
      }
    },
    isShow() {
    }
  },
  mounted() {
  },
  methods: {
    close() {
      this.previewFile = {};
      this.height = 200;
      this.width = 200;
    },
    initStyle(e) {
      let width = this.$refs.img.width;
      let height = this.$refs.img.height;
      if (width > 800 || height > 12e3) {
        let percent = Math.max(width / 800, height / 12e3);
        width = width / percent;
        height = height / percent;
      }
      this.width = width;
      this.height = height;
      setTimeout(() => {
        this.changeing = false;
      }, 300);
    },
    change(index2) {
      if (index2 < 0 || index2 > this.computedDatas.length - 1) {
        return false;
      }
      this.changeing = true;
      setTimeout(() => {
        this.showIndex = index2;
        this.updatePreview();
      }, 300);
    },
    updatePreview() {
      if (this.computedDatas.length == 0) {
        return;
      }
      let data = this.computedDatas[this.showIndex];
      let previewFile = utils.isString(data) ? { url: data } : data;
      if (previewFile.url === this.previewFile.url) {
        this.$nextTick(() => {
          if (this.$refs.img && this.$refs.img.complete) {
            setTimeout(() => {
              this.changeing = false;
            }, 300);
          }
        });
      }
      this.previewFile = previewFile;
    }
  }
};
const _hoisted_1$7 = {
  key: 0,
  class: "h-image-preview-index"
};
const _hoisted_2$6 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_3$5 = [
  _hoisted_2$6
];
const _hoisted_4$4 = ["src", "alt"];
const _hoisted_5$4 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_6$4 = [
  _hoisted_5$4
];
function _sfc_render$h(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Loading = resolveComponent("Loading");
  const _component_Modal = resolveComponent("Modal");
  return openBlock(), createBlock(_component_Modal, {
    modelValue: $data.openModal,
    "onUpdate:modelValue": _cache[3] || (_cache[3] = ($event) => $data.openModal = $event),
    onClose: $options.close
  }, {
    default: withCtx(() => [
      createElementVNode("div", {
        class: "h-image-preview",
        style: normalizeStyle($options.previewStyle)
      }, [
        $options.isShowIndex ? (openBlock(), createElementBlock("span", _hoisted_1$7, toDisplayString($data.showIndex + 1) + " / " + toDisplayString($options.computedDatas.length), 1)) : createCommentVNode("", true),
        $data.showIndex != 0 ? (openBlock(), createElementBlock("span", {
          key: 1,
          class: "h-image-preview-icon h-image-preview-left-icon",
          onClick: _cache[0] || (_cache[0] = ($event) => $options.change($data.showIndex - 1))
        }, _hoisted_3$5)) : createCommentVNode("", true),
        createVNode(Transition, { name: "fade" }, {
          default: withCtx(() => [
            withDirectives(createElementVNode("img", {
              ref: "img",
              src: $data.previewFile.url,
              class: "h-image-preview-image",
              alt: $data.previewFile.name,
              onLoad: _cache[1] || (_cache[1] = (...args) => $options.initStyle && $options.initStyle(...args))
            }, null, 40, _hoisted_4$4), [
              [vShow, !$data.changeing]
            ])
          ]),
          _: 1
        }),
        renderSlot(_ctx.$slots, "item", {
          data: $data.previewFile,
          index: $data.index
        }),
        $data.showIndex != $options.computedDatas.length - 1 ? (openBlock(), createElementBlock("span", {
          key: 2,
          class: "h-image-preview-icon h-image-preview-right-icon",
          onClick: _cache[2] || (_cache[2] = ($event) => $options.change($data.showIndex + 1))
        }, _hoisted_6$4)) : createCommentVNode("", true),
        createVNode(_component_Loading, { loading: $data.changeing }, null, 8, ["loading"])
      ], 4)
    ]),
    _: 3
  }, 8, ["modelValue", "onClose"]);
}
var Preview = /* @__PURE__ */ _export_sfc(_sfc_main$h, [["render", _sfc_render$h]]);
let imagePreviewApp;
function ImagePreview(datas, index2) {
  return createDom({ datas, index: index2 });
}
const createDom = (props) => {
  if (!imagePreviewApp) {
    const body = document.body;
    const dom = document.createElement("div");
    dom.setAttribute("id", "image-preview");
    body.appendChild(dom);
    const app = createApp(Preview);
    imagePreviewApp = app.mount(dom);
  }
  imagePreviewApp.datas = props.datas || [];
  imagePreviewApp.index = props.index || 0;
  setTimeout(() => {
    imagePreviewApp.openModal = true;
  }, 10);
};
const UPLOAD_STATUS = {
  UPLOADING: "UPLOADING",
  SUCCESS: "SUCCESS",
  FAIL: "FAIL"
};
const toFileObject = (url) => {
  return {
    name: null,
    size: null,
    type: null,
    status: UPLOAD_STATUS.SUCCESS,
    url,
    thumbUrl: url,
    uid: utils.uuid()
  };
};
const prefix$5 = "h-uploader";
const _sfc_main$g = {
  name: "HUploader",
  mixins: [Locale],
  emits: ["delete", "click", "update:modelValue"],
  props: {
    accept: String,
    modelValue: {
      type: [Array, Object, String]
    },
    displayType: {
      type: String,
      default: "file"
    },
    dataType: {
      type: String,
      default: "object"
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: Number,
    readonly: {
      type: Boolean,
      default: false
    },
    showPercent: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: () => {
      }
    }
  },
  data() {
    return {
      preview: false,
      previewIndex: -1,
      isdragging: false,
      stashFiles: [],
      stashValue: null
    };
  },
  watch: {
    modelValue(value) {
      if (value !== this.stashValue) {
        this.stashFiles = [];
      }
    }
  },
  computed: {
    files() {
      if (this.stashFiles.length)
        return this.stashFiles;
      if (this.dataType === "url") {
        if (this.multiple) {
          return (this.modelValue || []).map((item) => toFileObject(item));
        } else {
          return this.modelValue ? [toFileObject(this.modelValue)] : [];
        }
      } else {
        if (this.multiple) {
          return this.modelValue || [];
        } else {
          return this.modelValue ? [this.modelValue] : [];
        }
      }
    },
    singleFile() {
      return this.files.length ? this.files[0] : null;
    },
    showUploadButton() {
      if (this.readonly)
        return false;
      return this.multiple && (!this.limit || this.limit > this.files.length) || !this.multiple && !this.files.length;
    },
    showReUploadWord() {
      return this.hlang("h.uploader.reUpload");
    },
    showUploadWord() {
      return this.hlang("h.uploader.upload");
    },
    showOverLimit() {
      return this.hlang("h.uploader.overLimit");
    },
    uploaderCls() {
      return {
        [prefix$5]: true,
        [`${prefix$5}-${this.displayType}-container`]: true
      };
    }
  },
  methods: {
    isUploading(file) {
      return file.status === UPLOAD_STATUS.UPLOADING;
    },
    triggerFileChoose() {
      this.$refs.file.value = null;
      this.$refs.file.click();
    },
    onDrag(event) {
      this.isdragging = false;
      var files = event.dataTransfer.files;
      this.onFileUpload(files);
    },
    async onFileUpload(files) {
      if (files.length === 0)
        return;
      if (this.multiple) {
        if (files.length + this.files.length > this.limit) {
          message.error(this.showOverLimit);
          return;
        }
      }
      const valueList = [...files].filter((item) => {
        return !this.option.onBeforeUpload || this.option.onBeforeUpload(item) !== false;
      }).map((item) => {
        return {
          name: item.name,
          size: item.size,
          type: item.type,
          status: UPLOAD_STATUS.UPLOADING,
          url: null,
          thumbUrl: null,
          uid: utils.uuid(),
          file: item
        };
      });
      if (valueList.length === 0)
        return;
      if (this.multiple) {
        this.stashFiles = [...this.files, ...valueList];
      } else {
        this.stashFiles = [valueList[0]];
      }
      for (const info of valueList) {
        this.option.onChange && this.option.onChange(info.file, info).then((url) => {
          this.update(__spreadProps(__spreadValues({}, info), { status: UPLOAD_STATUS.SUCCESS, url }));
        }).catch((e) => {
          this.update(__spreadProps(__spreadValues({}, info), { status: UPLOAD_STATUS.FAIL }));
        });
      }
    },
    update(info) {
      if (!info)
        return;
      const value = [...this.files];
      const index2 = value.findIndex((item) => item.uid === info.uid);
      if (index2 > -1) {
        if (info.status === UPLOAD_STATUS.FAIL) {
          value.splice(index2, 1);
        } else {
          value.splice(index2, 1, info);
        }
      } else {
        value.push(info);
      }
      this.updateModelValue(value);
    },
    updateModelValue(value) {
      this.stashFiles = value;
      let resultValue = null;
      if (this.dataType === "url") {
        if (this.multiple) {
          resultValue = value.map((item) => item.url);
        } else {
          resultValue = value.length ? value[0].url : [];
        }
      } else {
        if (this.multiple) {
          resultValue = value;
        } else {
          resultValue = value.length ? value[0] : null;
        }
      }
      this.stashValue = resultValue;
      this.$emit("update:modelValue", resultValue);
    },
    onFileChange() {
      const files = this.$refs.file.files;
      this.onFileUpload(files);
    },
    fileClick(file, index2) {
      this.$emit("click", file, index2);
    },
    imageClick(index2, file) {
      this.$emit("click", file, index2);
    },
    previewImage(index2) {
      ImagePreview(this.files, index2);
    },
    getBackgroundImage(file) {
      let param = {};
      if (file.thumbUrl || file.url) {
        param["background-image"] = `url(${file.thumbUrl || file.url})`;
      }
      return param;
    },
    deleteFile(index2, event) {
      if (event) {
        event.stopPropagation();
      }
      this.$emit("delete", this.files[index2], index2);
      const value = [...this.files];
      value.splice(index2, 1);
      this.updateModelValue(value);
    }
  }
};
const _hoisted_1$6 = {
  key: 0,
  class: "h-uploader-image"
};
const _hoisted_2$5 = {
  key: 0,
  class: "h-uploader-progress"
};
const _hoisted_3$4 = {
  key: 1,
  class: "h-icon-spinner"
};
const _hoisted_4$3 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-plus" }, null, -1);
const _hoisted_5$3 = [
  _hoisted_4$3
];
const _hoisted_6$3 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-plus" }, null, -1);
const _hoisted_7$3 = [
  _hoisted_6$3
];
const _hoisted_8$3 = {
  key: 0,
  class: "h-uploader-progress"
};
const _hoisted_9$2 = {
  key: 1,
  class: "h-icon-spinner"
};
const _hoisted_10$1 = ["onClick"];
const _hoisted_11$1 = ["onClick"];
const _hoisted_12$1 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-fullscreen" }, null, -1);
const _hoisted_13 = [
  _hoisted_12$1
];
const _hoisted_14 = /* @__PURE__ */ createElementVNode("i", {
  class: "h-space",
  style: { "width": "5px" }
}, null, -1);
const _hoisted_15 = ["onClick"];
const _hoisted_16 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-trash" }, null, -1);
const _hoisted_17 = [
  _hoisted_16
];
const _hoisted_18 = { key: 1 };
const _hoisted_19 = { class: "h-uploader-files" };
const _hoisted_20 = {
  key: 0,
  class: "h-uploader-file-progress"
};
const _hoisted_21 = {
  key: 1,
  class: "h-uploader-file-loading"
};
const _hoisted_22 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-spinner" }, null, -1);
const _hoisted_23 = ["onClick"];
const _hoisted_24 = { class: "link" };
const _hoisted_25 = ["onClick"];
const _hoisted_26 = ["accept", "multiple"];
function _sfc_render$g(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Progress = resolveComponent("Progress");
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.uploaderCls)
  }, [
    $props.displayType == "image" ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
      !$props.multiple ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        $options.singleFile ? (openBlock(), createElementBlock("div", _hoisted_1$6, [
          createElementVNode("div", {
            class: "h-uploader-image-background",
            style: normalizeStyle($options.getBackgroundImage($options.singleFile))
          }, null, 4),
          $options.isUploading($options.singleFile) ? (openBlock(), createElementBlock("div", _hoisted_2$5, [
            $props.showPercent ? (openBlock(), createBlock(_component_Progress, {
              key: 0,
              percent: $options.singleFile.percent,
              "stroke-width": 5
            }, null, 8, ["percent"])) : (openBlock(), createElementBlock("i", _hoisted_3$4))
          ])) : (openBlock(), createElementBlock("div", {
            key: 1,
            class: "h-uploader-image-operate h-uploader-browse-button",
            onClick: _cache[0] || (_cache[0] = (...args) => $options.triggerFileChoose && $options.triggerFileChoose(...args))
          }, [
            createElementVNode("div", null, toDisplayString($options.showReUploadWord), 1)
          ]))
        ])) : $options.showUploadButton ? (openBlock(), createElementBlock("div", {
          key: 1,
          class: "h-uploader-image-empty h-uploader-browse-button",
          onClick: _cache[1] || (_cache[1] = (...args) => $options.triggerFileChoose && $options.triggerFileChoose(...args))
        }, _hoisted_5$3)) : createCommentVNode("", true)
      ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        $options.showUploadButton ? (openBlock(), createElementBlock("div", {
          key: 0,
          class: "h-uploader-image-empty h-uploader-browse-button",
          onClick: _cache[2] || (_cache[2] = (...args) => $options.triggerFileChoose && $options.triggerFileChoose(...args))
        }, _hoisted_7$3)) : createCommentVNode("", true),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.files, (file, index2) => {
          return openBlock(), createElementBlock("div", {
            key: file.uid,
            class: normalizeClass({
              "h-uploader-image": true
            })
          }, [
            createElementVNode("div", {
              class: "h-uploader-image-background",
              style: normalizeStyle($options.getBackgroundImage(file))
            }, null, 4),
            $options.isUploading(file) ? (openBlock(), createElementBlock("div", _hoisted_8$3, [
              $props.showPercent ? (openBlock(), createBlock(_component_Progress, {
                key: 0,
                percent: file.percent,
                "stroke-width": 5
              }, null, 8, ["percent"])) : (openBlock(), createElementBlock("i", _hoisted_9$2))
            ])) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: normalizeClass({
                "h-uploader-image-operate": true,
                "h-uploader-image-operate-pointer": $props.readonly
              }),
              onClick: ($event) => $options.imageClick(index2, file)
            }, [
              createElementVNode("div", null, [
                createElementVNode("span", {
                  class: "h-uploader-operate",
                  onClick: ($event) => $options.previewImage(index2)
                }, _hoisted_13, 8, _hoisted_11$1),
                !$props.readonly ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                  _hoisted_14,
                  createElementVNode("span", {
                    class: "h-uploader-operate",
                    onClick: ($event) => $options.deleteFile(index2, $event)
                  }, _hoisted_17, 8, _hoisted_15)
                ], 64)) : createCommentVNode("", true)
              ])
            ], 10, _hoisted_10$1))
          ]);
        }), 128))
      ], 64))
    ], 64)) : createCommentVNode("", true),
    $props.displayType == "file" ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
      _ctx.$slots.dragdrop ? (openBlock(), createElementBlock("div", {
        key: 0,
        class: normalizeClass(["h-uploader-browse-button h-uploader-drop-element", { "h-uploader-dragging": $data.isdragging }]),
        onDragover: _cache[3] || (_cache[3] = ($event) => $data.isdragging = true),
        onDragleave: _cache[4] || (_cache[4] = ($event) => $data.isdragging = false),
        onDrop: _cache[5] || (_cache[5] = (...args) => _ctx.onDrap && _ctx.onDrap(...args))
      }, [
        renderSlot(_ctx.$slots, "dragdrop")
      ], 34)) : (openBlock(), createElementBlock("div", _hoisted_18, [
        $options.showUploadButton ? (openBlock(), createElementBlock("button", {
          key: 0,
          type: "button",
          icon: "h-icon-upload",
          class: "h-btn h-uploader-browse-button",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.triggerFileChoose && $options.triggerFileChoose(...args))
        }, toDisplayString($options.showUploadWord), 1)) : createCommentVNode("", true)
      ])),
      createElementVNode("div", _hoisted_19, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.files, (file, index2) => {
          return openBlock(), createElementBlock("div", {
            key: file.uid,
            class: "h-uploader-file"
          }, [
            $options.isUploading(file) ? (openBlock(), createElementBlock("div", _hoisted_20, [
              $props.showPercent ? (openBlock(), createBlock(_component_Progress, {
                key: 0,
                percent: file.percent,
                "stroke-width": 5
              }, {
                title: withCtx(() => [
                  createTextVNode(toDisplayString(file.name), 1)
                ]),
                _: 2
              }, 1032, ["percent"])) : (openBlock(), createElementBlock("div", _hoisted_21, [
                createElementVNode("span", null, toDisplayString(file.name), 1),
                _hoisted_22
              ]))
            ])) : (openBlock(), createElementBlock("div", {
              key: 1,
              class: "h-uploader-file-info h-uploader-file-status-{{file.status}}",
              onClick: ($event) => $options.fileClick(file, index2)
            }, [
              createElementVNode("span", _hoisted_24, toDisplayString(file.name), 1),
              !$props.readonly ? (openBlock(), createElementBlock("i", {
                key: 0,
                class: "h-icon-trash middle-right link",
                onClick: ($event) => $options.deleteFile(index2, $event)
              }, null, 8, _hoisted_25)) : createCommentVNode("", true)
            ], 8, _hoisted_23))
          ]);
        }), 128))
      ])
    ], 64)) : createCommentVNode("", true),
    createElementVNode("input", {
      ref: "file",
      type: "file",
      accept: $props.accept,
      style: { "display": "none" },
      multiple: $props.multiple,
      onChange: _cache[7] || (_cache[7] = (...args) => $options.onFileChange && $options.onFileChange(...args))
    }, null, 40, _hoisted_26)
  ], 2);
}
var Uploader = /* @__PURE__ */ _export_sfc(_sfc_main$g, [["render", _sfc_render$g]]);
const prefix$4 = "h-autocomplete";
const _sfc_main$f = {
  name: "HAutoComplete",
  mixins: [Locale],
  emits: ["update:modelValue", "change", "clear", "picker", "remove", "enter"],
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    mustMatch: {
      type: Boolean,
      default: true
    },
    autoSelectFirst: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: "key"
    },
    disabled: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    dict: String,
    placeholder: {
      type: String
    },
    modelValue: [Number, String, Array, Object],
    option: Object,
    show: String,
    emptyContent: {
      type: [String, Object]
    },
    config: String,
    className: String,
    delay: {
      type: Number,
      default: 100
    },
    noBorder: {
      type: Boolean,
      default: false
    },
    autosize: {
      type: Boolean,
      default: false
    },
    endInput: String,
    showDropdownWhenNoResult: {
      type: Boolean,
      default: true
    }
  },
  data() {
    return {
      html: "autocomplete_rander_html",
      focusing: false,
      objects: [],
      object: {
        key: null,
        title: this.show,
        value: null
      },
      nowSelected: -1,
      tempValue: null,
      searchValue: null,
      oldValue: this.modelValue,
      focusValue: null,
      loading: false,
      content: null,
      loadDatas: [],
      isShow: false,
      searchTimeout: null,
      el: null,
      lastTrigger: null
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang("h.autoComplate.placeholder");
    },
    showEmptyContent() {
      return this.emptyContent || this.hlang("h.autoComplate.emptyContent");
    },
    param() {
      return utils.extend({}, func.getOption("autocomplete.default"), this.config ? func.getOption(`autocomplete.configs.${this.config}`) : {}, this.option);
    },
    autocompleteCls() {
      let autosize2 = !!this.noBorder;
      if (!autosize2) {
        autosize2 = this.autosize;
      }
      return {
        [`${prefix$4}`]: true,
        [`${prefix$4}-input-border`]: !this.noBorder,
        [`${prefix$4}-multiple`]: this.multiple,
        [`${prefix$4}-no-autosize`]: !autosize2,
        [`${prefix$4}-disabled`]: this.disabled,
        focusing: this.focusing
      };
    },
    showCls() {
      return {
        [`${prefix$4}-show`]: true,
        [`${this.className}-show`]: !!this.className,
        focusing: this.focusing
      };
    },
    groupCls() {
      return {
        [`${prefix$4}-group`]: true,
        [`${prefix$4}-multiple`]: this.multiple,
        [`${this.className}-dropdown`]: !!this.className
      };
    },
    results() {
      let datas = this.datas;
      if (this.dict) {
        datas = func.getDict(this.dict);
      }
      if (utils.isNull(datas)) {
        datas = this.loadDatas;
      } else {
        datas = func.initOptions(datas, this);
        if (this.searchValue) {
          let searchValue = this.searchValue.toLowerCase();
          datas = datas.filter((item) => {
            return (item.html || item[this.param.titleName] || "").toLowerCase().indexOf(searchValue) != -1;
          });
        }
      }
      if (this.objects.length > 0) {
        let keyArray = utils.getArray(this.objects, "key").filter((item) => !utils.isNull(item));
        datas = datas.filter((item) => {
          return keyArray.indexOf(item[this.param.keyName]) == -1;
        });
      }
      let results = [];
      for (let data of datas) {
        results.push(this.getValue(data));
      }
      return results;
    }
  },
  watch: {
    modelValue() {
      if (this.oldValue == this.modelValue) {
        return;
      }
      this.parse();
    },
    disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    },
    nowSelected() {
      this.$nextTick(() => {
        if (this.content && this.nowSelected > -1) {
          let dom = this.content.querySelector(".h-autocomplete-item-selected");
          let uldom = this.content.querySelector(".h-autocomplete-ul");
          if (dom && uldom) {
            if (dom.offsetTop + dom.offsetHeight - this.content.scrollTop > this.content.offsetHeight) {
              this.content.scrollTop = dom.offsetTop + dom.offsetHeight - this.content.offsetHeight;
            } else if (dom.offsetTop - this.content.scrollTop < 0) {
              this.content.scrollTop = dom.offsetTop;
            }
          }
        }
      });
    }
  },
  beforeMount() {
    this.parse();
  },
  beforeUnmount() {
    let el = this.el;
    if (el) {
      el.style.display = "none";
      this.$el.appendChild(el);
    }
    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted() {
    this.$nextTick(() => {
      let el = this.el = this.$el.querySelector(".h-autocomplete-show");
      this.content = this.$el.querySelector(".h-autocomplete-group");
      let that = this;
      this.dropdown = new Dropdown(el, {
        trigger: "",
        triggerOnce: true,
        content: this.content,
        disabled: this.disabled,
        equalWidth: true,
        events: {
          show() {
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    parse() {
      this.tempValue = null;
      if (this.multiple) {
        let os = [];
        if (utils.isArray(this.modelValue) && this.modelValue.length > 0) {
          for (let v of this.modelValue) {
            if (this.type == "key" && !utils.isNull(v) && (this.dict || this.datas)) {
              let result = [...this.results, ...this.objects].filter((item) => item.key == v);
              if (result.length) {
                v = result[0].value;
              }
            }
            os.push(this.getValue(v));
          }
        }
        this.objects = os;
      } else {
        let value = null;
        if (this.type == "key") {
          if (!utils.isNull(this.modelValue)) {
            if (!this.show && (this.dict || this.datas) && this.results) {
              let result = this.results.filter((item) => item[this.param.keyName] == this.modelValue);
              if (result.length > 0) {
                value = result[0].value;
              }
            }
            if (utils.isNull(value)) {
              value = {
                [this.param.keyName]: this.modelValue,
                [this.param.titleName]: this.show
              };
            }
          }
        } else if (this.type == "title") {
          if (!utils.isNull(this.modelValue)) {
            value = {
              [this.param.keyName]: this.modelValue,
              [this.param.titleName]: this.modelValue
            };
          }
        } else {
          value = this.modelValue;
        }
        if (utils.isNull(value)) {
          this.object = {
            key: null,
            title: null,
            value: null
          };
        } else {
          utils.extend(this.object, this.getValue(value));
        }
        this.tempValue = this.object.title;
      }
      this.oldValue = this.modelValue;
    },
    dispose() {
      let value = null;
      if (this.multiple) {
        value = [];
        if (utils.isArray(this.objects) && this.objects.length > 0) {
          for (let o of this.objects) {
            value.push(this.getV(o));
          }
        }
        return value;
      } else {
        if (this.mustMatch) {
          value = this.getV(this.object);
        } else {
          if (!utils.isBlank(this.object.key)) {
            value = this.getV(this.object);
          } else {
            if (!utils.isBlank(this.tempValue)) {
              let inputValue = null;
              if (this.type == "title") {
                inputValue = this.tempValue;
              } else {
                inputValue = {
                  [this.param.titleName]: this.tempValue
                };
              }
              value = inputValue;
              this.object.title = this.tempValue;
            }
          }
        }
        return value;
      }
    },
    getV(object) {
      if (this.type == "key") {
        return object.key;
      } else if (this.type == "title") {
        return object.title;
      } else {
        return object.value;
      }
    },
    getValue(item) {
      if (!utils.isObject(item) && this.type == "object") {
        return utils.getValue({
          [this.param.titleName]: item
        }, this.param);
      } else {
        return utils.getValue(item, this.param);
      }
    },
    onFocus(event) {
      this.lastTrigger = null;
      this.focusing = true;
      this.focusValue = event.target.value;
      if (this.multiple)
        this.searchValue = null;
      this.search();
    },
    focusData() {
      this.focusValue = this.object.title;
      if (this.multiple)
        this.searchValue = null;
    },
    onPaste() {
      setTimeout(() => {
        this.search();
      }, 0);
    },
    onBlur(event) {
      this.focusing = false;
      if (this.lastTrigger == "picker" || this.lastTrigger == "clear")
        return;
      let nowValue = event.target.value;
      let focusValue = this.focusValue;
      if (focusValue !== nowValue) {
        if (this.mustMatch) {
          if (!this.multiple && this.object.key != null) {
            this.object = {
              key: null,
              title: null,
              value: null
            };
            this.setvalue("blur");
          } else {
            this.tempValue = null;
          }
        } else {
          if (this.multiple && nowValue) {
            this.objects.push(this.getValue(nowValue));
          }
          this.setvalue("blur");
        }
      }
      this.loading = false;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
    },
    onKeyDown(event) {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 8 && event.target.value === "" && this.objects.length > 0) {
        this.remove(this.objects[this.objects.length - 1]);
      } else if (this.endInput && event.key == this.endInput) {
        event.preventDefault();
        this.onEnter(event);
      }
    },
    onKeyUp(event) {
      let code = event.keyCode || event.which || event.charCode;
      if (code == 38) {
        if (this.nowSelected > 0) {
          this.nowSelected -= 1;
        }
      } else if (code == 40) {
        if (this.nowSelected < this.results.length - 1) {
          this.nowSelected += 1;
        }
      } else if (code == 13)
        ;
      else {
        this.search();
      }
    },
    onEnter(event) {
      let nowValue = this.tempValue = event.target.value;
      event.preventDefault();
      if (this.nowSelected >= 0) {
        this.update(this.results[this.nowSelected]);
        this.setvalue("enter");
      } else {
        if (!this.mustMatch && this.multiple && nowValue) {
          this.objects.push(this.getValue(nowValue));
        }
        this.setvalue("enter");
      }
    },
    search() {
      let target = this.$refs.input;
      let value = target.value;
      this.tempValue = value || null;
      if (value != this.object.title && this.object.title) {
        this.object.key = null;
        this.object.title = null;
        this.object.value = null;
      }
      this.loading = false;
      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
      if (value.length >= this.param.minWord) {
        this.searchTimeout = setTimeout(() => {
          this.updateDropdown();
          if (utils.isFunction(this.param.loadData)) {
            this.loading = true;
            this.param.loadData.call(this.param, value, (datas) => {
              if (target.value === value) {
                this.loading = false;
                this.loadDatas = datas;
                this.updateDropdown();
                this.nowSelected = this.autoSelectFirst ? 0 : -1;
              }
            }, () => {
              this.loading = false;
            });
          } else {
            this.nowSelected = this.autoSelectFirst ? 0 : -1;
          }
        }, this.delay);
        this.searchValue = value;
        this.dropdown.update();
      } else {
        this.dropdown.hide();
      }
    },
    updateDropdown() {
      this.$nextTick(() => {
        if (this.dropdown) {
          if (this.results.length == 0 && !this.showDropdownWhenNoResult) {
            this.dropdown.hide();
          } else {
            this.dropdown.show();
            this.dropdown.update();
          }
        }
      });
    },
    update(data) {
      if (this.multiple) {
        this.objects.push(utils.copy(data));
      } else {
        if (data === null || data === void 0) {
          this.object = {
            key: null,
            title: null,
            value: null
          };
        } else {
          this.object = utils.copy(data);
        }
      }
      this.tempValue = null;
    },
    remove(object) {
      this.objects.splice(this.objects.indexOf(object), 1);
      this.setvalue("remove");
    },
    picker(data) {
      this.update(data);
      this.setvalue("picker");
    },
    setvalue(trigger) {
      if (this.disabled)
        return;
      this.lastTrigger = trigger;
      this.nowSelected = -1;
      let value = this.oldValue = this.dispose();
      this.focusValue = null;
      this.focusData();
      if (this.multiple) {
        this.tempValue = null;
      } else {
        this.tempValue = this.object.title;
      }
      this.$emit("update:modelValue", value, trigger);
      this.$emit("change", utils.copy(this.multiple ? this.objects : this.object), trigger);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      if (trigger) {
        this.$emit(trigger, value);
      }
      this.dropdown.hide();
      setTimeout(() => {
        this.searchValue = null;
      }, 100);
    },
    hide() {
      this.loading = false;
      this.dropdown.hide();
    },
    clear() {
      this.tempValue = null;
      this.focusValue = null;
      this.object = {
        key: null,
        title: null,
        value: null
      };
      this.setvalue("clear");
    }
  }
};
const _hoisted_1$5 = ["onClick"];
const _hoisted_2$4 = ["disabled", "placeholder"];
const _hoisted_3$3 = {
  key: 0,
  class: "h-icon-loading"
};
const _hoisted_4$2 = ["disabled", "placeholder"];
const _hoisted_5$2 = {
  key: 0,
  class: "h-icon-loading"
};
const _hoisted_6$2 = {
  key: 0,
  class: "h-autocomplete-ul"
};
const _hoisted_7$2 = ["onMousedown"];
const _hoisted_8$2 = ["innerHTML"];
const _hoisted_9$1 = {
  key: 0,
  class: "h-autocomplete-empty-content"
};
function _sfc_render$f(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.autocompleteCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.showCls)
    }, [
      $props.multiple ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($data.objects, (obj, index2) => {
          return openBlock(), createElementBlock("span", {
            key: index2 + "" + obj.key
          }, [
            createElementVNode("span", null, toDisplayString(obj.title), 1),
            !$props.disabled ? (openBlock(), createElementBlock("i", {
              key: 0,
              class: "h-icon-close-min",
              onClick: withModifiers(($event) => $options.remove(obj), ["stop"])
            }, null, 8, _hoisted_1$5)) : createCommentVNode("", true)
          ]);
        }), 128)),
        withDirectives(createElementVNode("input", {
          ref: "input",
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.tempValue = $event),
          disabled: $props.disabled,
          type: "text",
          class: "h-autocomplete-input h-input",
          placeholder: $options.showPlaceholder,
          autocomplete: "off",
          onFocus: _cache[1] || (_cache[1] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onBlur: _cache[2] || (_cache[2] = withModifiers((...args) => $options.onBlur && $options.onBlur(...args), ["stop"])),
          onPaste: _cache[3] || (_cache[3] = (...args) => $options.onPaste && $options.onPaste(...args)),
          onKeyup: _cache[4] || (_cache[4] = (...args) => $options.onKeyUp && $options.onKeyUp(...args)),
          onKeydown: _cache[5] || (_cache[5] = (...args) => $options.onKeyDown && $options.onKeyDown(...args)),
          onKeypress: _cache[6] || (_cache[6] = withKeys((...args) => $options.onEnter && $options.onEnter(...args), ["enter"]))
        }, null, 40, _hoisted_2$4), [
          [vModelText, $data.tempValue]
        ]),
        $data.loading ? (openBlock(), createElementBlock("i", _hoisted_3$3)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true),
      !$props.multiple ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
        withDirectives(createElementVNode("input", {
          ref: "input",
          "onUpdate:modelValue": _cache[7] || (_cache[7] = ($event) => $data.tempValue = $event),
          type: "text",
          disabled: $props.disabled,
          class: "h-autocomplete-input h-input",
          placeholder: $options.showPlaceholder,
          autocomplete: "off",
          onFocus: _cache[8] || (_cache[8] = (...args) => $options.onFocus && $options.onFocus(...args)),
          onPaste: _cache[9] || (_cache[9] = (...args) => $options.onPaste && $options.onPaste(...args)),
          onBlur: _cache[10] || (_cache[10] = withModifiers((...args) => $options.onBlur && $options.onBlur(...args), ["stop"])),
          onKeyup: _cache[11] || (_cache[11] = (...args) => $options.onKeyUp && $options.onKeyUp(...args)),
          onKeypress: _cache[12] || (_cache[12] = withKeys((...args) => $options.onEnter && $options.onEnter(...args), ["enter"]))
        }, null, 40, _hoisted_4$2), [
          [vModelText, $data.tempValue]
        ]),
        $data.loading ? (openBlock(), createElementBlock("i", _hoisted_5$2)) : $data.tempValue && !$props.disabled ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: "h-icon-close text-hover",
          onMousedown: _cache[13] || (_cache[13] = (...args) => $options.clear && $options.clear(...args))
        }, null, 32)) : createCommentVNode("", true)
      ], 64)) : createCommentVNode("", true)
    ], 2),
    createElementVNode("div", {
      class: normalizeClass($options.groupCls)
    }, [
      $data.isShow ? (openBlock(), createElementBlock("ul", _hoisted_6$2, [
        renderSlot(_ctx.$slots, "top", { results: $options.results }),
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.results, (result, index2) => {
          return openBlock(), createElementBlock("li", {
            key: result.key,
            class: normalizeClass(["h-autocomplete-item", { "h-autocomplete-item-selected": index2 == $data.nowSelected }]),
            onMousedown: ($event) => $options.picker(result)
          }, [
            !!result.html ? (openBlock(), createElementBlock("div", {
              key: 0,
              innerHTML: result.html
            }, null, 8, _hoisted_8$2)) : !_ctx.$slots.item ? (openBlock(), createElementBlock(Fragment, { key: 1 }, [
              createTextVNode(toDisplayString(result.title), 1)
            ], 64)) : renderSlot(_ctx.$slots, "item", {
              key: 2,
              item: result
            })
          ], 42, _hoisted_7$2);
        }), 128)),
        $options.results.length == 0 && $props.showDropdownWhenNoResult ? (openBlock(), createElementBlock("li", _hoisted_9$1, toDisplayString($options.showEmptyContent), 1)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "bottom", { results: $options.results })
      ])) : createCommentVNode("", true)
    ], 2)
  ], 2);
}
var AutoComplete = /* @__PURE__ */ _export_sfc(_sfc_main$f, [["render", _sfc_render$f]]);
const prefixCls$b = "h-row";
const Props$2 = {
  type: ["flex"],
  align: ["top", "middle", "bottom"],
  justify: ["start", "end", "center", "space-around", "space-between"],
  direction: ["row", "row-reverse", "column", "column-reverse"]
};
const getHalf$1 = (width, hasRemainder) => {
  return Math.floor(width / -2) + (hasRemainder ? width % 2 : 0) + "px";
};
const _sfc_main$e = {
  name: "HRow",
  props: {
    type: {
      validator(value) {
        return Props$2.type.indexOf(value) != -1;
      }
    },
    align: {
      validator(value) {
        return Props$2.align.indexOf(value) != -1;
      }
    },
    justify: {
      validator(value) {
        return Props$2.justify.indexOf(value) != -1;
      }
    },
    direction: {
      validator(value) {
        return Props$2.direction.indexOf(value) != -1;
      }
    },
    space: {
      type: Number,
      default: 0
    },
    spaceX: {
      type: Number,
      default: 0
    },
    spaceY: {
      type: Number,
      default: 0
    }
  },
  computed: {
    classes() {
      return [
        {
          [`${prefixCls$b}`]: !this.type,
          [`${prefixCls$b}-${this.type}`]: !!this.type,
          [`${prefixCls$b}-${this.type}-${this.align}`]: !!this.align,
          [`${prefixCls$b}-${this.type}-${this.direction}`]: this.direction,
          [`${prefixCls$b}-${this.type}-${this.justify}`]: !!this.justify
        }
      ];
    },
    styles() {
      let style = {};
      if (this.space !== 0) {
        const leftTop = getHalf$1(this.space, true);
        const rightBottom = getHalf$1(this.space, false);
        style.marginLeft = leftTop;
        style.marginRight = rightBottom;
        style.marginTop = leftTop;
        style.marginBottom = rightBottom;
      }
      if (this.spaceX !== 0) {
        style.marginLeft = getHalf$1(this.spaceX, true);
        style.marginRight = getHalf$1(this.spaceX, false);
      }
      if (this.spaceY !== 0) {
        style.marginTop = getHalf$1(this.spaceY, true);
        style.marginBottom = getHalf$1(this.spaceY, false);
      }
      return style;
    }
  }
};
const _hoisted_1$4 = {
  key: 0,
  class: "h-row-clear"
};
function _sfc_render$e(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    style: normalizeStyle($options.styles)
  }, [
    renderSlot(_ctx.$slots, "default"),
    $props.type != "flex" ? (openBlock(), createElementBlock("div", _hoisted_1$4)) : createCommentVNode("", true)
  ], 6);
}
var Row = /* @__PURE__ */ _export_sfc(_sfc_main$e, [["render", _sfc_render$e]]);
const prefixCls$a = "h-col";
const getHalf = (width, hasRemainder) => {
  return Math.floor(width / 2) + (!hasRemainder ? width % 2 : 0) + "px";
};
const _sfc_main$d = {
  name: "HCell",
  props: {
    width: [Number, String],
    flex: [Number, String],
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    classes() {
      let width = this.width;
      let classList = [`${prefixCls$a}`];
      classList.push({
        [`${prefixCls$a}-${width}`]: width,
        [`${this.className}`]: !!this.className
      });
      let lastSize = null;
      for (let size of ["xl", "lg", "md", "sm", "xs"]) {
        if (utils.isNumber(this[size])) {
          lastSize = this[size];
          classList.push(`${prefixCls$a}-${size}-${this[size]}`);
        } else if (lastSize) {
          classList.push(`${prefixCls$a}-${size}-${lastSize}`);
        }
      }
      return classList;
    },
    styles() {
      let style = {};
      let styletype = "padding";
      if (this.flex) {
        style.flex = this.flex;
      }
      if (this.$parent.type == "flex") {
        styletype = "margin";
      }
      if (utils.isNumber(this.$parent.space) && this.$parent.space !== 0) {
        const leftTop = getHalf(this.$parent.space, true);
        const rightBottom = getHalf(this.$parent.space, false);
        style[`${styletype}Left`] = leftTop;
        style[`${styletype}Right`] = rightBottom;
        style[`${styletype}Top`] = leftTop;
        style[`${styletype}Bottom`] = rightBottom;
      }
      if (utils.isNumber(this.$parent.spaceX) && this.$parent.spaceX !== 0) {
        style[`${styletype}Left`] = getHalf(this.$parent.spaceX, true);
        style[`${styletype}Right`] = getHalf(this.$parent.spaceX, false);
      }
      if (utils.isNumber(this.$parent.spaceY) && this.$parent.spaceY !== 0) {
        style[`${styletype}Top`] = getHalf(this.$parent.spaceY, true);
        style[`${styletype}Bottom`] = getHalf(this.$parent.spaceY, false);
      }
      return style;
    }
  }
};
function _sfc_render$d(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    style: normalizeStyle($options.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Cell = /* @__PURE__ */ _export_sfc(_sfc_main$d, [["render", _sfc_render$d]]);
const prefixCls$9 = "h-layout-header";
const _sfc_main$c = {
  name: "HHeader",
  props: {
    theme: String
  },
  computed: {
    classes() {
      return {
        [`${prefixCls$9}`]: true,
        [`${prefixCls$9}-theme-${this.theme}`]: this.theme
      };
    }
  }
};
function _sfc_render$c(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var HHeader = /* @__PURE__ */ _export_sfc(_sfc_main$c, [["render", _sfc_render$c]]);
const prefixCls$8 = "h-layout-footer";
const _sfc_main$b = {
  name: "HFooter",
  props: {},
  computed: {
    classes() {
      let classList = [`${prefixCls$8}`];
      return classList;
    }
  }
};
function _sfc_render$b(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var HFooter = /* @__PURE__ */ _export_sfc(_sfc_main$b, [["render", _sfc_render$b]]);
const prefixCls$7 = "h-layout-content";
const _sfc_main$a = {
  name: "HContent",
  computed: {
    classes() {
      let classList = [`${prefixCls$7}`];
      return classList;
    }
  }
};
function _sfc_render$a(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Content = /* @__PURE__ */ _export_sfc(_sfc_main$a, [["render", _sfc_render$a]]);
const prefixCls$6 = "h-layout-sider";
const _sfc_main$9 = {
  name: "HSider",
  props: {
    theme: String
  },
  computed: {
    classes() {
      return {
        [`${prefixCls$6}`]: true,
        [`${prefixCls$6}-theme-${this.theme}`]: this.theme
      };
    },
    styles() {
      let style = {};
      return style;
    }
  },
  beforeUnmounted() {
    if (this.$parent && this.$parent.updateSider) {
      this.$parent.updateSider();
    }
  }
};
function _sfc_render$9(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes),
    style: normalizeStyle($options.styles)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 6);
}
var Sider = /* @__PURE__ */ _export_sfc(_sfc_main$9, [["render", _sfc_render$9]]);
const prefix$3 = "h-space";
const _sfc_main$8 = {
  name: "HSpace",
  props: {
    width: {
      type: Number,
      default: 5
    },
    height: Number
  },
  data() {
    return {};
  },
  computed: {
    cls() {
      return {
        [`${prefix$3}-vertical`]: !!this.width
      };
    },
    style() {
      return {
        width: `${this.width}px`
      };
    }
  },
  methods: {}
};
function _sfc_render$8(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("span", {
    class: normalizeClass($options.cls),
    style: normalizeStyle($options.style)
  }, null, 6);
}
var Space = /* @__PURE__ */ _export_sfc(_sfc_main$8, [["render", _sfc_render$8]]);
const prefixCls$5 = "h-layout";
const _sfc_main$7 = {
  name: "HLayout",
  props: {
    headerFixed: {
      type: Boolean,
      default: false
    },
    siderFixed: {
      type: Boolean,
      default: false
    },
    siderCollapsed: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      hasSiderChild: false
    };
  },
  computed: {
    classes() {
      let classList = {
        [`${prefixCls$5}`]: true,
        [`${prefixCls$5}-has-sider`]: this.hasSiderChild,
        [`${prefixCls$5}-header-fixed`]: this.headerFixed,
        [`${prefixCls$5}-sider-fixed`]: this.siderFixed,
        [`${prefixCls$5}-sider-collapsed`]: this.siderCollapsed
      };
      return classList;
    }
  },
  mounted() {
    this.updateSider();
  },
  methods: {
    updateSider() {
      this.$nextTick(() => {
        for (let c of this.$el.childNodes) {
          if (utils.hasClass(c, "h-layout-sider")) {
            this.hasSiderChild = true;
            return;
          }
        }
        this.hasSiderChild = false;
      });
    }
  }
};
function _sfc_render$7(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Layout = /* @__PURE__ */ _export_sfc(_sfc_main$7, [["render", _sfc_render$7]]);
const prefixCls$4 = "h-timeline";
const _sfc_main$6 = {
  name: "HTimeLine",
  props: {
    pending: {
      default: false
    },
    time: {
      default: false
    },
    timeWidth: {
      default: 100
    }
  },
  computed: {
    classes() {
      return [
        `${prefixCls$4}`,
        {
          [`${prefixCls$4}-pending`]: this.pending,
          [`${prefixCls$4}-time`]: this.time
        }
      ];
    }
  }
};
function _sfc_render$6(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("ul", {
    class: normalizeClass($options.classes)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var Timeline = /* @__PURE__ */ _export_sfc(_sfc_main$6, [["render", _sfc_render$6]]);
const prefix$2 = "h-timeline";
const _sfc_main$5 = {
  name: "HTimeLineItem",
  props: {
    color: String,
    icon: String
  },
  data() {
    return {
      prefix: prefix$2
    };
  },
  computed: {
    itemCls() {
      return {
        [`${prefix$2}-item`]: true,
        "has-icon": !!this.icon || !!this.$slots.icon,
        [`${prefix$2}-item-${this.color}-color`]: !!this.color
      };
    },
    circleSC() {
      let styles = {};
      let classes = {
        [`${prefix$2}-item-circle`]: true
      };
      return {
        styles,
        classes
      };
    },
    timeSC() {
      let width = this.$parent.timeWidth || 100;
      return {
        classes: {
          [`${prefix$2}-item-time`]: true
        },
        styles: {
          width: `${width}px`
        }
      };
    }
  }
};
function _sfc_render$5(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("li", {
    class: normalizeClass($options.itemCls)
  }, [
    createElementVNode("div", {
      class: normalizeClass($options.timeSC.classes),
      style: normalizeStyle($options.timeSC.styles)
    }, [
      renderSlot(_ctx.$slots, "time")
    ], 6),
    createElementVNode("div", {
      class: normalizeClass($data.prefix + "-item-content")
    }, [
      createElementVNode("div", {
        class: normalizeClass($options.circleSC.classes),
        style: normalizeStyle($options.circleSC.styles)
      }, [
        !this.$slots.icon ? (openBlock(), createElementBlock("i", {
          key: 0,
          class: normalizeClass($props.icon)
        }, null, 2)) : createCommentVNode("", true),
        renderSlot(_ctx.$slots, "icon")
      ], 6),
      renderSlot(_ctx.$slots, "content"),
      renderSlot(_ctx.$slots, "default")
    ], 2)
  ], 2);
}
var TimelineItem = /* @__PURE__ */ _export_sfc(_sfc_main$5, [["render", _sfc_render$5]]);
const _sfc_main$4 = {
  name: "HTransfer",
  components: { Checkbox, Search },
  emits: ["transfer", "input", "change", "update:modelValue", "init"],
  props: {
    modelValue: {
      type: Array,
      default: () => []
    },
    datas: {
      type: Array,
      default: () => []
    },
    keyName: {
      type: String,
      default: "key"
    },
    height: Number,
    option: {
      type: Object,
      default: () => ({})
    }
  },
  data() {
    return {
      ltChecked: [],
      rtChecked: [],
      ltSearchText: "",
      rtSearchText: "",
      key: this.keyName || "key"
    };
  },
  computed: {
    transferListStyle() {
      let param = {};
      if (this.height) {
        param["height"] = `${this.height}px`;
      }
      return param;
    },
    sources() {
      let value = this.modelValue || [];
      let key = this.keyName || "key";
      let result = this.datas.filter((d) => value.indexOf(d[key]) == -1);
      if (this.ltSearchText && this.ltSearchText.trim()) {
        return result.filter((d) => d.text.indexOf(this.ltSearchText.trim()) != -1);
      }
      return result;
    },
    targets() {
      let value = this.modelValue || [];
      let key = this.keyName || "key";
      let result = this.datas.filter((d) => value.indexOf(d[key]) != -1);
      if (this.rtSearchText && this.rtSearchText.trim()) {
        return result.filter((d) => d.text.indexOf(this.rtSearchText.trim()) != -1);
      }
      return result;
    }
  },
  mounted() {
    this.$emit("init", this.sources, this.targets);
  },
  methods: {
    move(direction) {
      this.$emit("transfer", direction, this.sources, this.targets);
      let value = this.modelValue ? [...this.modelValue] : [];
      if (direction === 1 && this.ltChecked.length > 0) {
        this.rtSearchText = null;
        value.push(...this.ltChecked);
        this.ltChecked.length = 0;
      } else if (direction === -1 && this.rtChecked.length > 0) {
        this.ltSearchText = null;
        this.rtChecked.forEach((d) => {
          value.splice(value.indexOf(d), 1);
        });
        this.rtChecked.length = 0;
      }
      this.$emit("input", value);
      this.$emit("change", value);
      this.$emit("update:modelValue", value);
    }
  }
};
const _hoisted_1$3 = { class: "h-transfer" };
const _hoisted_2$3 = { class: "h-transfer-source" };
const _hoisted_3$2 = {
  key: 0,
  class: "h-transfer-header"
};
const _hoisted_4$1 = {
  key: 0,
  class: "h-transfer-filter"
};
const _hoisted_5$1 = {
  key: 0,
  class: "h-transfer-item text-center"
};
const _hoisted_6$1 = { class: "h-transfer-switch" };
const _hoisted_7$1 = {
  key: 2,
  class: "h-icon-left"
};
const _hoisted_8$1 = {
  key: 2,
  class: "h-icon-right"
};
const _hoisted_9 = { class: "h-transfer-target" };
const _hoisted_10 = {
  key: 0,
  class: "h-transfer-header"
};
const _hoisted_11 = {
  key: 0,
  class: "h-transfer-filter"
};
const _hoisted_12 = {
  key: 0,
  class: "h-transfer-item text-center"
};
function _sfc_render$4(_ctx, _cache, $props, $setup, $data, $options) {
  const _component_Search = resolveComponent("Search");
  const _component_Checkbox = resolveComponent("Checkbox");
  return openBlock(), createElementBlock("div", _hoisted_1$3, [
    createElementVNode("div", _hoisted_2$3, [
      renderSlot(_ctx.$slots, "sourceHeader", {}, () => [
        $props.option && $props.option.ltHeadText ? (openBlock(), createElementBlock("div", _hoisted_3$2, toDisplayString($props.option.ltHeadText), 1)) : createCommentVNode("", true)
      ]),
      $props.option.filterable && ($options.sources.length || $data.ltSearchText) ? (openBlock(), createElementBlock("div", _hoisted_4$1, [
        createVNode(_component_Search, {
          modelValue: $data.ltSearchText,
          "onUpdate:modelValue": _cache[0] || (_cache[0] = ($event) => $data.ltSearchText = $event),
          position: "front",
          placeholder: $props.option.placeholder
        }, null, 8, ["modelValue", "placeholder"])
      ])) : createCommentVNode("", true),
      createElementVNode("div", {
        class: "h-transfer-list",
        style: normalizeStyle($options.transferListStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.sources, (op) => {
          return openBlock(), createElementBlock("div", {
            key: op[$data.key],
            class: "h-transfer-item"
          }, [
            createVNode(_component_Checkbox, {
              modelValue: $data.ltChecked,
              "onUpdate:modelValue": _cache[1] || (_cache[1] = ($event) => $data.ltChecked = $event),
              value: op[$data.key],
              checked: false
            }, {
              default: withCtx(() => [
                renderSlot(_ctx.$slots, "item", {
                  option: op,
                  type: "source"
                }, () => [
                  $props.option && $props.option.render ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                    createTextVNode(toDisplayString($props.option.render(op)), 1)
                  ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                    createTextVNode(toDisplayString(op.text), 1)
                  ], 64))
                ])
              ]),
              _: 2
            }, 1032, ["modelValue", "value"])
          ]);
        }), 128)),
        $options.sources.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_5$1, "\u65E0\u6570\u636E")) : createCommentVNode("", true)
      ], 4)
    ]),
    createElementVNode("div", _hoisted_6$1, [
      createElementVNode("button", {
        class: "h-btn h-btn-s",
        type: "button",
        onClick: _cache[2] || (_cache[2] = ($event) => $options.move(-1))
      }, [
        $props.option && $props.option.ltText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString($props.option.ltText), 1)
        ], 64)) : $props.option && $props.option.ltIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass($props.option.ltIcon)
        }, null, 2)) : (openBlock(), createElementBlock("i", _hoisted_7$1))
      ]),
      createElementVNode("button", {
        class: "h-btn h-btn-s",
        type: "button",
        onClick: _cache[3] || (_cache[3] = ($event) => $options.move(1))
      }, [
        $props.option && $props.option.rtText ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
          createTextVNode(toDisplayString($props.option.rtText), 1)
        ], 64)) : $props.option && $props.option.rtIcon ? (openBlock(), createElementBlock("i", {
          key: 1,
          class: normalizeClass($props.option.rtIcon)
        }, null, 2)) : (openBlock(), createElementBlock("i", _hoisted_8$1))
      ])
    ]),
    createElementVNode("div", _hoisted_9, [
      renderSlot(_ctx.$slots, "targetHeader", {}, () => [
        $props.option && $props.option.rtHeadText ? (openBlock(), createElementBlock("div", _hoisted_10, toDisplayString($props.option.rtHeadText), 1)) : createCommentVNode("", true)
      ]),
      $props.option.filterable && ($options.targets.length || $data.rtSearchText) ? (openBlock(), createElementBlock("div", _hoisted_11, [
        createVNode(_component_Search, {
          modelValue: $data.rtSearchText,
          "onUpdate:modelValue": _cache[4] || (_cache[4] = ($event) => $data.rtSearchText = $event),
          position: "front",
          placeholder: $props.option.placeholder
        }, null, 8, ["modelValue", "placeholder"])
      ])) : createCommentVNode("", true),
      createElementVNode("div", {
        class: "h-transfer-list",
        style: normalizeStyle($options.transferListStyle)
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.targets, (op) => {
          return openBlock(), createElementBlock("div", {
            key: op[$data.key],
            class: "h-transfer-item"
          }, [
            createElementVNode("label", null, [
              createVNode(_component_Checkbox, {
                modelValue: $data.rtChecked,
                "onUpdate:modelValue": _cache[5] || (_cache[5] = ($event) => $data.rtChecked = $event),
                value: op[$data.key]
              }, {
                default: withCtx(() => [
                  renderSlot(_ctx.$slots, "item", {
                    option: op,
                    type: "target"
                  }, () => [
                    $props.option && $props.option.render ? (openBlock(), createElementBlock(Fragment, { key: 0 }, [
                      createTextVNode(toDisplayString($props.option.render(op)), 1)
                    ], 64)) : (openBlock(), createElementBlock(Fragment, { key: 1 }, [
                      createTextVNode(toDisplayString(op.text), 1)
                    ], 64))
                  ])
                ]),
                _: 2
              }, 1032, ["modelValue", "value"])
            ])
          ]);
        }), 128)),
        $options.targets.length === 0 ? (openBlock(), createElementBlock("div", _hoisted_12, "\u65E0\u6570\u636E")) : createCommentVNode("", true)
      ], 4)
    ])
  ]);
}
var Transfer = /* @__PURE__ */ _export_sfc(_sfc_main$4, [["render", _sfc_render$4]]);
const prefix$1 = "h-btn";
const Props$1 = {
  size: ["l", "s", "xs"]
};
const _sfc_main$3 = {
  name: "HButton",
  props: {
    color: String,
    textColor: String,
    icon: String,
    loading: Boolean,
    circle: Boolean,
    block: Boolean,
    noBorder: Boolean,
    disabled: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      validator(value) {
        return Props$1.size.indexOf(value) != -1;
      }
    },
    stop: {
      type: Boolean,
      default: false
    },
    preventDefault: {
      type: Boolean,
      default: false
    },
    text: Boolean,
    iconCircle: Boolean,
    transparent: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  computed: {
    hasText() {
      let slot = this.$slots.default;
      return !!slot;
    },
    buttonCls() {
      return {
        [`${prefix$1}`]: true,
        [`${prefix$1}-circle`]: !!this.circle || !!this.iconCircle,
        [`${prefix$1}-icon-circle`]: !!this.iconCircle,
        [`${prefix$1}-text`]: !!this.text,
        [`${prefix$1}-loading`]: !!this.loading,
        [`${prefix$1}-block`]: !!this.block,
        [`${prefix$1}-text-${this.textColor}`]: !!this.textColor,
        [`${prefix$1}-${this.color}`]: !!this.color,
        [`${prefix$1}-${this.size}`]: !!this.size,
        [`${prefix$1}-transparent`]: !!this.transparent,
        [`${prefix$1}-no-border`]: this.noBorder === true
      };
    },
    iconClass() {
      return this.loading ? "h-icon-loading" : this.icon;
    }
  },
  methods: {}
};
const _hoisted_1$2 = ["disabled"];
const _hoisted_2$2 = { key: 1 };
function _sfc_render$3(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("button", {
    class: normalizeClass($options.buttonCls),
    type: "button",
    disabled: !!this.disabled
  }, [
    !!$options.iconClass ? (openBlock(), createElementBlock("i", {
      key: 0,
      class: normalizeClass($options.iconClass)
    }, null, 2)) : createCommentVNode("", true),
    $options.hasText ? (openBlock(), createElementBlock("span", _hoisted_2$2, [
      renderSlot(_ctx.$slots, "default")
    ])) : createCommentVNode("", true)
  ], 10, _hoisted_1$2);
}
var Button = /* @__PURE__ */ _export_sfc(_sfc_main$3, [["render", _sfc_render$3]]);
const prefix = "h-btn-group";
const Props = {
  size: ["l", "s", "xs"]
};
const _sfc_main$2 = {
  name: "HButtonGroup",
  props: {
    circle: Boolean,
    size: {
      type: String,
      validator(value) {
        return Props.size.indexOf(value) != -1;
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    buttonGroupCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-circle`]: !!this.circle,
        [`${prefix}-${this.size}`]: !!this.size
      };
    }
  }
};
function _sfc_render$2(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", {
    class: normalizeClass($options.buttonGroupCls)
  }, [
    renderSlot(_ctx.$slots, "default")
  ], 2);
}
var ButtonGroup = /* @__PURE__ */ _export_sfc(_sfc_main$2, [["render", _sfc_render$2]]);
const _sfc_main$1 = {
  name: "HTextEllipsis",
  directives: { tooltip },
  emits: ["textClick", "hide", "show"],
  props: {
    text: String,
    height: Number,
    isLimitHeight: {
      type: Boolean,
      default: true
    },
    useTooltip: {
      type: Boolean,
      default: false
    },
    tooltipParams: {
      type: Object,
      default: () => {
      }
    },
    textStyle: [String, Object, Array],
    textClass: [String, Object, Array],
    more: String
  },
  data() {
    return {
      keyIndex: 0,
      isHide: false
    };
  },
  watch: {
    isLimitHeight() {
      this.init();
    },
    text() {
      this.init();
    },
    height() {
      this.init();
    }
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.keyIndex += 1;
      let more = this.$el.querySelector(".h-text-ellipsis-more");
      more.style.display = "none";
      if (this.isLimitHeight) {
        this.limitShow();
      } else {
        this.$emit("show");
        this.isHide = false;
      }
    },
    textClick() {
      this.$emit("textClick");
    },
    limitShow() {
      this.$nextTick(() => {
        let textDom = this.$el.querySelector(".h-text-ellipsis-limit-text");
        let title = this.$el;
        let more = this.$el.querySelector(".h-text-ellipsis-more");
        let n = 1e3;
        if (textDom) {
          if (title.offsetHeight > this.height) {
            more.style.display = "inline-block";
            let text = this.text;
            while (title.offsetHeight > this.height && n > 0) {
              if (title.offsetHeight > this.height * 3) {
                textDom.innerText = text = text.substring(0, Math.floor(text.length / 2));
              } else {
                textDom.innerText = text = text.substring(0, text.length - 1);
              }
              n--;
            }
            this.$emit("hide");
            this.isHide = true;
          } else {
            this.$emit("show");
            this.isHide = false;
          }
        }
      });
    }
  }
};
const _hoisted_1$1 = { class: "h-text-ellipsis" };
const _hoisted_2$1 = ["content"];
const _hoisted_3$1 = { class: "h-text-ellipsis-more" };
function _sfc_render$1(_ctx, _cache, $props, $setup, $data, $options) {
  const _directive_tooltip = resolveDirective("tooltip");
  return openBlock(), createElementBlock("div", _hoisted_1$1, [
    renderSlot(_ctx.$slots, "before", { class: "h-text-ellipsis-before" }),
    withDirectives(createElementVNode("span", mergeProps({
      style: $props.textStyle,
      class: $props.textClass
    }, $props.tooltipParams, {
      content: $props.text,
      onClick: _cache[0] || (_cache[0] = (...args) => $options.textClick && $options.textClick(...args))
    }), [
      (openBlock(), createElementBlock("span", {
        key: $data.keyIndex,
        class: "h-text-ellipsis-limit-text"
      }, toDisplayString($props.text), 1)),
      createElementVNode("span", _hoisted_3$1, [
        createTextVNode(toDisplayString($props.more), 1),
        renderSlot(_ctx.$slots, "more")
      ])
    ], 16, _hoisted_2$1), [
      [_directive_tooltip, $props.useTooltip && $data.isHide]
    ]),
    renderSlot(_ctx.$slots, "after", { class: "h-text-ellipsis-after" })
  ]);
}
var TextEllipsis = /* @__PURE__ */ _export_sfc(_sfc_main$1, [["render", _sfc_render$1]]);
const _sfc_main = {
  name: "HCarousel",
  emits: ["clickItem", "change"],
  props: {
    height: {
      type: Number,
      default: 300
    },
    speed: {
      type: Number,
      default: 3e3
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    changeSpeed: {
      type: Number,
      default: 500
    },
    arrow: {
      type: String,
      default: "hover"
    },
    pageTheme: {
      type: String,
      default: "square"
    },
    datas: Array,
    isHoverStop: {
      type: Boolean,
      default: true
    },
    paginationTrigger: {
      type: String,
      default: "click"
    },
    effect: {
      type: String,
      default: "scroll"
    }
  },
  data() {
    return {
      activeIndex: 1,
      scrollTimeout: null,
      redirectTimeout1: null,
      redirectTimeout2: null
    };
  },
  computed: {
    carouselList() {
      if (this.datas.length == 0) {
        return [];
      }
      let datas = this.datas;
      return [datas[this.datas.length - 1], ...datas, datas[0]];
    },
    carouselItem() {
      return this.carouselList[this.activeIndex - 1];
    },
    paginationCls() {
      return `h-carousel-pagination-${this.pageTheme}`;
    },
    arrowCls() {
      return `h-carousel-arrow-${this.arrow}`;
    }
  },
  watch: {
    autoplay() {
      if (this.autoplay) {
        this.startAutoplay(true);
      } else {
        this.stopAutoplay(true);
      }
    },
    effect() {
      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);
      this.init();
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  },
  beforeUnmount() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.redirectTimeout1);
    clearTimeout(this.redirectTimeout2);
    window.removeEventListener("resize", this.resizeEvent);
  },
  methods: {
    clickTrigger(index2, data) {
      this.$emit("clickItem", index2, data);
    },
    isActive(index2) {
      let datas = this.datas;
      let activeIndex = this.activeIndex;
      return index2 + 1 == activeIndex || activeIndex == 0 && index2 == datas.length - 1 || activeIndex == datas.length + 1 && index2 == 0;
    },
    init() {
      this.startAutoplay(true);
      setTimeout(() => {
        this.change({
          index: this.activeIndex,
          immediately: true
        });
      }, 300);
      window.addEventListener("resize", this.resizeEvent, false);
    },
    stopAutoplay(force = false) {
      if (this.isHoverStop || force) {
        clearTimeout(this.scrollTimeout);
      }
    },
    startAutoplay(force = false) {
      if ((this.isHoverStop || force) && this.autoplay) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(() => {
          this.next();
        }, this.speed);
      }
    },
    resizeEvent() {
      this.change({
        index: this.activeIndex,
        immediately: true
      });
    },
    scroll(index2, immediately) {
      this.activeIndex = index2;
      let itemWidth = this.$el.clientWidth;
      let width = index2 * itemWidth;
      if (this.effect === "scroll") {
        let listDom = this.$el.querySelector(".h-carousel-scroll-list");
        if (immediately) {
          listDom.style.transitionDuration = `0ms`;
        } else {
          listDom.style.transitionDuration = `${this.changeSpeed}ms`;
        }
        listDom.style.transform = `translate3d(${-width}px, 0px, 0px)`;
      }
    },
    change({ index: index2 = 1, immediately = false }) {
      if (this.activeIndex == this.carouselList.length - 1) {
        this.scroll(1, true);
      } else if (this.activeIndex == 0) {
        this.scroll(this.carouselList.length - 2, true);
      }
      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);
      if (immediately) {
        this.scroll(index2, immediately);
      } else {
        this.scroll(index2, immediately);
        this.$emit("change", index2, this.carouselList[this.activeIndex]);
        if (this.activeIndex == this.carouselList.length - 1) {
          this.redirectTimeout1 = setTimeout(() => {
            this.scroll(1, true);
          }, this.changeSpeed + 100);
        } else if (this.activeIndex == 0) {
          this.redirectTimeout2 = setTimeout(() => {
            this.scroll(this.carouselList.length - 2, true);
          }, this.changeSpeed + 100);
        }
      }
      this.startAutoplay(true);
    },
    changePageByStep(step) {
      let activeIndex = this.activeIndex + step;
      if (activeIndex >= this.carouselList.length) {
        activeIndex = 2;
      } else if (activeIndex < 0) {
        activeIndex = this.carouselList.length - 3;
      }
      this.change({
        index: activeIndex
      });
    },
    triggerChange(triggerType, index2) {
      if (this.paginationTrigger == triggerType) {
        this.change({
          index: index2
        });
      }
    },
    prev() {
      this.changePageByStep(-1);
    },
    next() {
      this.changePageByStep(1);
    }
  }
};
const _hoisted_1 = { class: "h-carousel" };
const _hoisted_2 = ["onClick"];
const _hoisted_3 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-left" }, null, -1);
const _hoisted_4 = [
  _hoisted_3
];
const _hoisted_5 = /* @__PURE__ */ createElementVNode("i", { class: "h-icon-right" }, null, -1);
const _hoisted_6 = [
  _hoisted_5
];
const _hoisted_7 = ["onMouseover", "onClick"];
const _hoisted_8 = { key: 1 };
function _sfc_render(_ctx, _cache, $props, $setup, $data, $options) {
  return openBlock(), createElementBlock("div", _hoisted_1, [
    createElementVNode("div", {
      class: "h-carousel-container",
      style: normalizeStyle({ height: `${$props.height}px` })
    }, [
      $props.effect == "scroll" ? (openBlock(), createElementBlock("div", {
        key: $props.effect,
        class: "h-carousel-list h-carousel-scroll-list",
        onMouseover: _cache[0] || (_cache[0] = (...args) => $options.stopAutoplay && $options.stopAutoplay(...args)),
        onMouseout: _cache[1] || (_cache[1] = (...args) => $options.startAutoplay && $options.startAutoplay(...args))
      }, [
        (openBlock(true), createElementBlock(Fragment, null, renderList($options.carouselList, (params, index2) => {
          return openBlock(), createElementBlock("div", {
            key: index2,
            class: "h-carousel-item",
            onClick: ($event) => $options.clickTrigger(index2, params)
          }, [
            !_ctx.$slots.item ? (openBlock(), createElementBlock("div", {
              key: 0,
              class: normalizeClass(["h-carousel-bg", { "h-carousel-bg-pointer": params.link }]),
              style: normalizeStyle({ backgroundImage: `url(${params.image})` })
            }, null, 6)) : createCommentVNode("", true),
            renderSlot(_ctx.$slots, "item", {
              carousel: params,
              index: index2
            })
          ], 8, _hoisted_2);
        }), 128))
      ], 32)) : (openBlock(), createElementBlock("div", {
        key: $props.effect,
        class: "h-carousel-list",
        onMouseover: _cache[3] || (_cache[3] = (...args) => $options.stopAutoplay && $options.stopAutoplay(...args)),
        onMouseout: _cache[4] || (_cache[4] = (...args) => $options.startAutoplay && $options.startAutoplay(...args))
      }, [
        createVNode(Transition, {
          name: `h-carousel-effect-${$props.effect}`
        }, {
          default: withCtx(() => [
            (openBlock(), createElementBlock("div", {
              key: $data.activeIndex,
              class: "h-carousel-item h-carousel-effect-item",
              onClick: _cache[2] || (_cache[2] = ($event) => $options.clickTrigger($data.activeIndex, $options.carouselItem))
            }, [
              !_ctx.$slots.item ? (openBlock(), createElementBlock("div", {
                key: 0,
                class: normalizeClass(["h-carousel-bg", { "h-carousel-bg-pointer": $options.carouselItem.link }]),
                style: normalizeStyle({ backgroundImage: `url(${$options.carouselItem.image})` })
              }, null, 6)) : createCommentVNode("", true),
              renderSlot(_ctx.$slots, "item", { carousel: $options.carouselItem })
            ]))
          ]),
          _: 3
        }, 8, ["name"])
      ], 32)),
      createElementVNode("div", {
        class: normalizeClass(["h-carousel-arrow", $options.arrowCls])
      }, [
        createElementVNode("div", {
          class: "h-carousel-arrow-left",
          onClick: _cache[5] || (_cache[5] = (...args) => $options.prev && $options.prev(...args))
        }, _hoisted_4),
        createElementVNode("div", {
          class: "h-carousel-arrow-right",
          onClick: _cache[6] || (_cache[6] = (...args) => $options.next && $options.next(...args))
        }, _hoisted_6)
      ], 2)
    ], 4),
    createElementVNode("ul", {
      class: normalizeClass(["h-carousel-pagination", $options.paginationCls])
    }, [
      (openBlock(true), createElementBlock(Fragment, null, renderList($props.datas, (p, index2) => {
        return openBlock(), createElementBlock("li", {
          key: index2,
          class: normalizeClass(["h-carousel-pagination-item", { active: $options.isActive(index2) }]),
          onMouseover: ($event) => $options.triggerChange("hover", index2 + 1),
          onClick: ($event) => $options.triggerChange("click", index2 + 1)
        }, [
          _ctx.$slots.page ? renderSlot(_ctx.$slots, "page", {
            key: 0,
            carousel: p
          }) : (openBlock(), createElementBlock("span", _hoisted_8))
        ], 42, _hoisted_7);
      }), 128))
    ], 2)
  ]);
}
var Carousel = /* @__PURE__ */ _export_sfc(_sfc_main, [["render", _sfc_render]]);
const wordcount = function(total, el, remainDom) {
  let v = el.value.length;
  let remain = total - v;
  if (remain >= 0) {
    remainDom.innerText = v;
    utils.removeClass(remainDom, "red-color");
  } else {
    remainDom.innerText = locale.hlang("h.wordcount.warn", [Math.abs(remain)]);
    utils.addClass(remainDom, "red-color");
  }
};
var wordcount$1 = {
  mounted(el, binding) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      let wordElement = document.createElement("p");
      wordElement.innerHTML = `<span><span class='h-wordcount-remain-size'></span> / <span class='h-wordcount-total-size'>${total}</span></span>`;
      utils.addClass(wordElement, "h-wordcount");
      let parent = el.parentNode;
      parent.insertBefore(wordElement, el);
      let remainDom = parent.querySelector(".h-wordcount-remain-size");
      el.remainDom = remainDom;
      wordcount(total, el, remainDom);
      el.addEventListener("input", () => {
        wordcount(total, el, remainDom);
      });
    }
  },
  beforeUnmount(el) {
    let previousnode = el.previousSibling;
    if (previousnode && utils.hasClass(previousnode, "h-wordcount")) {
      previousnode.parentNode.removeChild(previousnode);
    }
  }
};
const wordlimit = function(el, total) {
  let v = el.value.length;
  if (v > total) {
    el.value = el.value.substring(0, total);
    if (el.getAttribute("data-alerted") == "0") {
      message.error(locale.hlang("h.wordlimit.warn", [total]));
    }
    el.dispatchEvent(new Event("input"));
    el.setAttribute("data-alerted", "1");
  }
};
var wordlimit$1 = {
  mounted(el, binding, vnode) {
    if (utils.isNumber(binding.value)) {
      let total = binding.value;
      el.setAttribute("data-alerted", "0");
      wordlimit(el, total);
      el.addEventListener("input", () => {
        wordlimit(el, total);
      });
      el.addEventListener("blur", () => {
        el.setAttribute("data-alerted", "0");
      });
    }
  }
};
const map = typeof Map === "function" ? new Map() : function() {
  const keys = [];
  const values = [];
  return {
    has(key) {
      return keys.indexOf(key) > -1;
    },
    get(key) {
      return values[keys.indexOf(key)];
    },
    set(key, value) {
      if (keys.indexOf(key) === -1) {
        keys.push(key);
        values.push(value);
      }
    },
    delete(key) {
      const index2 = keys.indexOf(key);
      if (index2 > -1) {
        keys.splice(index2, 1);
        values.splice(index2, 1);
      }
    }
  };
}();
const createEvent = (name) => {
  const evt = document.createEvent("Event");
  evt.initEvent(name, true, false);
  return evt;
};
function assign(ta) {
  if (!ta || !ta.nodeName || ta.nodeName !== "TEXTAREA" || map.has(ta))
    return;
  let heightOffset = null;
  let clientWidth = ta.clientWidth;
  let cachedHeight = null;
  function init2() {
    const style = window.getComputedStyle(ta, null);
    if (style.resize === "vertical") {
      ta.style.resize = "none";
    } else if (style.resize === "both") {
      ta.style.resize = "horizontal";
    }
    if (style.boxSizing === "content-box") {
      heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
    } else {
      heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
    }
    if (isNaN(heightOffset)) {
      heightOffset = 0;
    }
    update2();
  }
  function changeOverflow(value) {
    {
      const width = ta.style.width;
      ta.style.width = "0px";
      ta.style.width = width;
    }
    ta.style.overflowY = value;
  }
  function getParentOverflows(el) {
    const arr = [];
    while (el && el.parentNode && el.parentNode instanceof Element) {
      if (el.parentNode.scrollTop) {
        arr.push({
          node: el.parentNode,
          scrollTop: el.parentNode.scrollTop
        });
      }
      el = el.parentNode;
    }
    return arr;
  }
  function resize() {
    const originalHeight = ta.style.height;
    const overflows = getParentOverflows(ta);
    const docTop = document.documentElement && document.documentElement.scrollTop;
    ta.style.height = "auto";
    let endHeight = ta.scrollHeight + heightOffset;
    if (ta.scrollHeight === 0) {
      ta.style.height = originalHeight;
      return;
    }
    ta.style.height = endHeight + "px";
    clientWidth = ta.clientWidth;
    overflows.forEach((el) => {
      el.node.scrollTop = el.scrollTop;
    });
    if (docTop) {
      document.documentElement.scrollTop = docTop;
    }
  }
  function update2() {
    resize();
    const styleHeight = Math.round(parseFloat(ta.style.height));
    const computed = window.getComputedStyle(ta, null);
    var actualHeight = Math.round(parseFloat(computed.height));
    if (actualHeight !== styleHeight) {
      if (computed.overflowY !== "visible") {
        changeOverflow("visible");
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    } else {
      if (computed.overflowY !== "hidden") {
        changeOverflow("hidden");
        resize();
        actualHeight = Math.round(parseFloat(window.getComputedStyle(ta, null).height));
      }
    }
    if (cachedHeight !== actualHeight) {
      cachedHeight = actualHeight;
      const evt = createEvent("autosize:resized");
      try {
        ta.dispatchEvent(evt);
      } catch (err) {
        console.error(err);
      }
    }
  }
  const pageResize = () => {
    if (ta.clientWidth !== clientWidth) {
      update2();
    }
  };
  const destroy2 = ((style) => {
    window.removeEventListener("resize", pageResize, false);
    ta.removeEventListener("input", update2, false);
    ta.removeEventListener("keyup", update2, false);
    ta.removeEventListener("autosize:destroy", destroy2, false);
    ta.removeEventListener("autosize:update", update2, false);
    Object.keys(style).forEach((key) => {
      ta.style[key] = style[key];
    });
    map.delete(ta);
  }).bind(ta, {
    height: ta.style.height,
    resize: ta.style.resize,
    overflowY: ta.style.overflowY,
    overflowX: ta.style.overflowX,
    wordWrap: ta.style.wordWrap
  });
  ta.addEventListener("autosize:destroy", destroy2, false);
  if ("onpropertychange" in ta && "oninput" in ta) {
    ta.addEventListener("keyup", update2, false);
  }
  window.addEventListener("resize", pageResize, false);
  ta.addEventListener("input", update2, false);
  ta.addEventListener("autosize:update", update2, false);
  ta.style.overflowX = "hidden";
  ta.style.wordWrap = "break-word";
  map.set(ta, {
    destroy: destroy2,
    update: update2
  });
  init2();
}
function destroy(ta) {
  const methods = map.get(ta);
  if (methods) {
    methods.destroy();
  }
}
function update(ta) {
  const methods = map.get(ta);
  if (methods) {
    methods.update();
  }
}
let autosize$1 = null;
if (typeof window === "undefined" || typeof window.getComputedStyle !== "function") {
  autosize$1 = (el) => el;
  autosize$1.destroy = (el) => el;
  autosize$1.update = (el) => el;
} else {
  autosize$1 = (el, options2) => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], (x) => assign(x));
    }
    return el;
  };
  autosize$1.destroy = (el) => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], destroy);
    }
    return el;
  };
  autosize$1.update = (el) => {
    if (el) {
      Array.prototype.forEach.call(el.length ? el : [el], update);
    }
    return el;
  };
}
var autosize$2 = autosize$1;
var autosize = {
  mounted(el) {
    autosize$2(el);
  },
  updated(el) {
    autosize$2.update(el);
  },
  beforeUnmount(el) {
    autosize$2.destroy(el);
  }
};
const prefixCls$3 = "h-modal";
const hasDivider = func.getOption("modal", "hasDivider");
let Default$2 = {
  middle: false,
  hasDivider,
  fullScreen: false,
  className: ""
};
function Modal(originalParam) {
  let cls = prefixCls$3;
  let param = utils.extend({
    hasMask: true,
    closeOnMask: true,
    buttons: [
      {
        type: "cancel",
        name: locale.hlang("h.common.cancel")
      }
    ]
  }, Default$2, originalParam, true);
  if (originalParam.hasDivider || Default$2.hasDivider) {
    param.className += ` h-modal-has-divider`;
  }
  if (param.fullScreen) {
    param.className += ` h-modal-full-screen`;
  }
  if (param.middle) {
    param.className += ` h-modal-container-center`;
  }
  if (param.transparent) {
    param.className += ` h-modal-transparent`;
  }
  if (param.type) {
    param.className += ` h-modal-type-${param.type}`;
  } else {
    param.className += " h-modal-type-default";
  }
  param.type = cls;
  return Notify$1(param);
}
function modal(param) {
  return new Modal(param);
}
modal.config = (options2) => {
  if (options2.middle) {
    Default$2.middle = options2.middle;
  }
};
const prefixCls$2 = "h-modal";
let Default$1 = {
  middle: false
};
function Confirm(params = {}) {
  const { content, title, onConfirm = () => {
  }, onCancel = () => {
  } } = params;
  let param = {
    type: prefixCls$2,
    content: `<div><i class="h-icon-warn yellow-color" style="font-size:28px;vertical-align: -8px;"></i>&nbsp;&nbsp;${content}</div>`,
    buttons: [
      {
        name: locale.hlang("h.common.cancel"),
        type: "cancel"
      },
      {
        type: "ok",
        name: locale.hlang("h.common.confirm"),
        style: "primary"
      }
    ],
    events: {
      ok: (n) => {
        n.close();
        onConfirm();
      },
      cancel: (n) => {
        n.close();
        onCancel();
      }
    },
    title,
    className: "h-modal-comfirm h-modal-type-default",
    hasMask: true,
    closeOnMask: true,
    hasCloseIcon: false,
    timeout: 0
  };
  const notifyParam = utils.extend({}, Default$1, param, true);
  return Notify$1(notifyParam);
}
function confirm(content, title) {
  if (!title) {
    title = locale.hlang("h.confirm.title");
  }
  return Confirm(content);
}
confirm.config = (options2) => {
  if (options2.middle) {
    Default$1.middle = true;
  }
};
const prefixCls$1 = "h-notice";
const iconPrefixCls = "h-icon";
let Default = {
  timeout: 4e3
};
const iconNames = {
  info: "info",
  success: "success",
  warn: "warn",
  error: "error"
};
const iconColor = {
  info: "blue",
  success: "green",
  warn: "yellow",
  error: "red"
};
function Notice(originalParam) {
  let noticeDom2 = document.querySelector(`.${prefixCls$1}-container`);
  if (!noticeDom2) {
    noticeDom2 = document.createElement("div");
    utils.addClass(noticeDom2, `${prefixCls$1}-container`);
    document.body.appendChild(noticeDom2);
  }
  let param = {
    type: prefixCls$1,
    hasCloseIcon: true,
    parent: noticeDom2
  };
  if (Object.keys(iconNames).indexOf(originalParam.type) != -1) {
    if (originalParam.title)
      originalParam.style = `${prefixCls$1}-has-icon`;
    originalParam.content = `<i class="${iconPrefixCls}-${iconNames[originalParam.type]} ${iconColor[originalParam.type]}-color"></i>${originalParam.content}`;
    delete originalParam.type;
  } else if (originalParam.icon) {
    if (originalParam.title)
      originalParam.style = `${prefixCls$1}-has-icon`;
    originalParam.content = `<i class="${originalParam.icon}"></i>${originalParam.content}`;
  }
  param = utils.extend({}, Default, param, originalParam, true);
  return Notify$1(param);
}
function notice(param, timeout) {
  if (utils.isString(param)) {
    return Notice({ content: param, timeout });
  } else if (utils.isObject(param)) {
    return Notice(param);
  }
  console.error("Notice params are incorrect:", param);
}
notice.config = (options2) => {
  if (options2.timeout != void 0) {
    Default.timeout = options2.timeout;
  }
};
function noticeWithType(type, param, timeout) {
  if (utils.isString(param)) {
    return Notice({ content: param, timeout, type });
  } else if (utils.isObject(param)) {
    if (type)
      param.type = type;
    return Notice(param);
  }
  console.error("Notice params are incorrect:", param);
}
notice.error = (param, timeout) => noticeWithType("error", param, timeout);
notice.warn = (param, timeout) => noticeWithType("warn", param, timeout);
notice.success = (param, timeout) => noticeWithType("success", param, timeout);
notice.info = (param, timeout) => noticeWithType("info", param, timeout);
const loadingCls = "h-loading";
let LoadingDom = null;
function Loading(content = "") {
  if (!LoadingDom) {
    let template = `<div class="${loadingCls} ${loadingCls}-full-screen">
      <div class="${loadingCls}-circular">
        <svg viewBox="25 25 50 50">
          <circle cx="50" cy="50" r="20" fill="none" class="circle"></circle>
        </svg>
        <p class="${loadingCls}-text">${content}</p></div>
      </div>
    </div>`;
    let genDom = window.document.createElement("div");
    genDom.innerHTML = template;
    LoadingDom = genDom.childNodes[0];
    document.body.appendChild(LoadingDom);
    setTimeout(() => {
      utils.addClass(LoadingDom, `${loadingCls}-loading`);
      utils.addClass(LoadingDom, `${loadingCls}-visible`);
    }, 10);
  } else {
    LoadingDom.querySelector(`.${loadingCls}-text`).innerText = content;
    utils.addClass(LoadingDom, `${loadingCls}-loading`);
    utils.addClass(LoadingDom, `${loadingCls}-visible`);
  }
}
function loading(content) {
  Loading(content);
}
loading.close = () => {
  if (LoadingDom) {
    utils.removeClass(LoadingDom, `${loadingCls}-loading`);
    setTimeout(() => {
      utils.removeClass(LoadingDom, `${loadingCls}-visible`);
    }, 500);
  }
};
loading.open = (content) => {
  Loading(content);
};
const prefixCls = "h-loadingbar";
class LoadingBar {
  constructor() {
    this.dom = null;
    this.timeout = null;
    this.inner = null;
    this.width = 0;
  }
  initDom() {
    this.dom = document.createElement("div");
    this.dom.innerHTML = `<div class="${prefixCls}"><div class="${prefixCls}-inner"></div></div>`;
    document.body.appendChild(this.dom);
    this.inner = this.dom.querySelector(`.${prefixCls}-inner`);
  }
  start() {
    if (!this.dom) {
      this.initDom();
    }
    utils.addClass(this.inner, "loading");
    this.loading(5, 90);
  }
  loading(step, end, callback) {
    if (this.width >= end) {
      if (utils.isFunction(callback)) {
        callback.call(this);
      }
      return;
    }
    let nowStep = step;
    if (this.width / end > 0.7) {
      nowStep = step / 10;
    }
    if (this.timeout)
      clearTimeout(this.timeout);
    this.width = this.width + nowStep;
    this.width = Math.min(100, this.width);
    this.width = Math.max(0, this.width);
    this.inner.style.width = `${this.width}%`;
    this.timeout = setTimeout(() => {
      this.loading(step, end, callback);
    }, 200);
  }
  success() {
    this.end(1);
  }
  end(success) {
    if (!this.dom) {
      this.initDom();
    }
    this.loading(100, 100, () => {
      if (!success) {
        utils.addClass(this.inner, "error");
      }
      setTimeout(() => {
        utils.removeClass(this.inner, "loading");
        utils.removeClass(this.inner, "error");
        this.inner.style.width = "0";
        this.width = 0;
      }, 200);
    });
  }
  fail() {
    this.end(0);
  }
}
const $loadingBar = new LoadingBar();
function loadingBar() {
  return $loadingBar;
}
loadingBar.start = () => {
  $loadingBar.start();
};
loadingBar.success = () => {
  $loadingBar.success();
};
loadingBar.percent = (value) => {
  $loadingBar.percent(value);
};
loadingBar.fail = () => {
  $loadingBar.fail();
};
function select(element) {
  let selectedText;
  if (element.nodeName === "SELECT") {
    element.focus();
    selectedText = element.value;
  } else if (element.nodeName === "INPUT" || element.nodeName === "TEXTAREA") {
    let isReadOnly = element.hasAttribute("readonly");
    if (!isReadOnly) {
      element.setAttribute("readonly", "");
    }
    element.select();
    element.setSelectionRange(0, element.value.length);
    if (!isReadOnly) {
      element.removeAttribute("readonly");
    }
    selectedText = element.value;
  } else {
    if (element.hasAttribute("contenteditable")) {
      element.focus();
    }
    let selection = window.getSelection();
    let range = document.createRange();
    range.selectNodeContents(element);
    selection.removeAllRanges();
    selection.addRange(range);
    selectedText = selection.toString();
  }
  return selectedText;
}
function index({ text, showSuccessTip = "\u590D\u5236\u6210\u529F", showFailureTip = "\u590D\u5236\u5931\u8D25", successCallback, failureCallback }) {
  const container = document.body;
  const isRTL = document.documentElement.getAttribute("dir") == "rtl";
  const fakeElem = document.createElement("textarea");
  fakeElem.style.fontSize = "12pt";
  fakeElem.style.border = "0";
  fakeElem.style.padding = "0";
  fakeElem.style.margin = "0";
  fakeElem.style.position = "absolute";
  fakeElem.style[isRTL ? "right" : "left"] = "-9999px";
  let yPosition = window.pageYOffset || document.documentElement.scrollTop;
  fakeElem.style.top = `${yPosition}px`;
  fakeElem.setAttribute("readonly", "");
  fakeElem.value = text;
  container.appendChild(fakeElem);
  select(fakeElem);
  try {
    document.execCommand("copy");
    if (showSuccessTip) {
      message.success(showSuccessTip);
    }
    if (successCallback) {
      successCallback.call();
    }
  } catch (err) {
    if (showFailureTip) {
      message.error(showFailureTip);
    }
    if (failureCallback) {
      failureCallback.call();
    }
  }
}
function dictMapping(value, key, connector) {
  return func.dictMapping(value, key, connector);
}
function hlang(...args) {
  return locale.hlang.apply(this, args);
}
const components = {
  Affix,
  Avatar,
  AutoComplete,
  BackTop,
  Badge,
  Button,
  ButtonGroup,
  Breadcrumb,
  CategoryPicker,
  Checkbox,
  hCircle: Circle,
  DatePicker,
  DateRangePicker,
  DateFullRangePicker,
  DropdownCustom,
  DropdownMenu,
  Form,
  FormItem,
  ImageList,
  Input,
  Textarea,
  Icon,
  Menu,
  Modal: Modal$1,
  Notice: Notice$1,
  NumberInput,
  Pagination,
  Poptip,
  Progress,
  Radio,
  Rate,
  Row,
  Cell,
  Search,
  Select,
  Slider,
  Steps,
  HSwitch,
  Switch: HSwitch,
  SwitchList,
  Skeleton,
  Space,
  Tag,
  TagInput,
  Timeline,
  TimelineItem,
  Transfer,
  Loading: Loading$1,
  Table,
  TableItem,
  Tabs,
  Tooltip,
  Tree,
  TreePicker,
  Uploader,
  TextEllipsis,
  Carousel,
  HHeader,
  HFooter,
  Content,
  Sider,
  Layout
};
const directives = {
  autosize,
  wordcount: wordcount$1,
  wordlimit: wordlimit$1
};
const filters = {
  dictMapping,
  hlang
};
const install = function(app, opts = {}) {
  if (install.installed)
    return;
  if (opts.locale) {
    locale.use(opts.locale);
  }
  if (opts.i18n) {
    locale.i18n(opts.i18n);
  }
  Object.keys(components).forEach((key) => {
    let component = components[key];
    app.component(key, component);
    app.component(`h-${key.toLocaleLowerCase()}`, component);
  });
  Object.keys(directives).forEach((key) => {
    app.directive(key, directives[key]);
  });
  Object.keys(filters).forEach((key) => {
    app.config.globalProperties[key] = filters[key];
  });
};
const HeyUI = { install };
export { index as clipboard, confirm, HeyUI as default, dictMapping, Dropdown as dropdown, func as heyuiConfig, hlang, ImagePreview as imagePreview, install, loading, loadingBar, message, modal, notice, ScrollIntoView as scrollIntoView };
