define(["heyui/lib/utils/utils","heyui/lib/locale","vue"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__571__) { return /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 569);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : {
    "default": obj
  };
}

module.exports = _interopRequireDefault;

/***/ }),

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 17:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 569:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(570);


/***/ }),

/***/ 570:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(17));

var _createClass2 = _interopRequireDefault(__webpack_require__(19));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _locale = _interopRequireDefault(__webpack_require__(11));

var _vue = _interopRequireDefault(__webpack_require__(571));

var Default = {
  type: 'dialog',
  title: '',
  content: '',
  style: null,
  class: null,
  buttons: [],
  hasMask: false,
  closeOnMask: true,
  hasCloseIcon: false,
  timeout: 0,
  width: false,
  global: false,
  noPadding: false
};
var TYPE = {
  MODAL: 'h-modal',
  MESSAGE: 'h-message',
  NOTICE: 'h-notice'
};
var notifyCls = 'h-notify';
var notifyHasCloseCls = 'h-notify-has-close';
var notifyContentCls = 'h-notify-content';
var notifyContainerCls = 'h-notify-container';
var notifyBodyCls = 'h-notify-body';
var notifyCloseCls = 'h-notify-close';
var notifyMaskCls = 'h-notify-mask';
var notifyShowCls = 'h-notify-show';
var closeIcon = 'h-icon-close';

var Notify =
/*#__PURE__*/
function () {
  function Notify(orignalparam) {
    var _this2 = this;

    (0, _classCallCheck2.default)(this, Notify);
    var that = this;
    this.mouseOver = false;
    this.closeTimeout = false;

    var param = this.param = _utils.default.extend({}, Default, orignalparam, true);

    var html = '';

    if (param.hasMask) {
      html += "<div class=\"".concat(notifyMaskCls, "\"></div>");
    }

    if (param.type === TYPE.MODAL && param.hasMask) {
      html += "<div class=\"".concat(notifyBodyCls, "\">");
    }

    html += "<div class=\"".concat(notifyContainerCls, "\">");
    if (param.hasCloseIcon) html += "<span class=\"".concat(notifyCloseCls, " ").concat(closeIcon, "\"></span>");
    if (param.title) html += "<header class=\"".concat(param.type, "-header\">").concat(param.title, "</header>");
    html += "<div class=\"".concat(notifyContentCls, "\"></div>");
    param.hasFooter = _utils.default.isArray(param.buttons) && param.buttons.length > 0 && !param.component;

    if (param.hasFooter) {
      var footeHtml = '';
      var _iteratorNormalCompletion = true;
      var _didIteratorError = false;
      var _iteratorError = undefined;

      try {
        for (var _iterator = param.buttons[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
          var b = _step.value;
          var name = '';
          var attr = '';
          var color = '';

          if (b == 'cancel') {
            name = b.name || _locale.default.t('h.common.cancel');
            attr = b;
          } else if (b == 'ok') {
            name = b.name || _locale.default.t('h.common.confirm');
            attr = 'ok';
            color = 'primary';
          } else if (_utils.default.isObject(b)) {
            attr = b.type;
            name = b.name;
            color = b.color;
          }

          if (color) color = "h-btn-".concat(color);
          footeHtml += "<button class=\"h-btn ".concat(color, "\" attr=\"").concat(attr, "\" >").concat(name, "</button>");
        }
      } catch (err) {
        _didIteratorError = true;
        _iteratorError = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion && _iterator.return != null) {
            _iterator.return();
          }
        } finally {
          if (_didIteratorError) {
            throw _iteratorError;
          }
        }
      }

      html += "<footer class=\"".concat(param.type, "-footer\">").concat(footeHtml, "</footer>");
    }

    if (param.type === TYPE.MODAL) {
      html += "</div>";
    }

    html += '</div>';
    var $body = document.createElement("div");

    _utils.default.addClass($body, notifyCls);

    if (param.hasMask) {
      _utils.default.addClass($body, 'h-notify-has-mask');
    } else {
      _utils.default.addClass($body, 'h-notify-no-mask');
    }

    if (param.class) {
      _utils.default.addClass($body, param.class);
    }

    if (param.className) {
      _utils.default.addClass($body, param.className);
    }

    $body.innerHTML = html;
    var $content = this.$content = $body.querySelector(".".concat(notifyContentCls));
    var $container = this.$container = $body.querySelector(".".concat(notifyContainerCls));
    this.$body = $body;
    var content = param.content;

    if (content.nodeType === 1) {
      $content.appendChild(content);
    } else if (_utils.default.isFunction(content)) {
      var contentText = content.call(this);
      $content.innerHTML = contentText;
    } else {
      $content.innerHTML = content;
    }

    var VueInstance = _vue.default || window.Vue;

    if (param.component != undefined && VueInstance) {
      this.vue = new VueInstance({
        el: $content,
        i18n: param.$i18n,
        router: param.$router,
        render: function render(createElement) {
          var _this = this;

          var keys = Object.keys(param.events || {});
          var events = {
            event: this.trigger,
            close: this.close
          };

          var _loop = function _loop() {
            var key = _keys[_i];

            if (events[key]) {
              return "continue";
            }

            events[key] = function () {
              for (var _len = arguments.length, data = new Array(_len), _key = 0; _key < _len; _key++) {
                data[_key] = arguments[_key];
              }

              _this.trigger.apply(_this, [key].concat(data));
            };
          };

          for (var _i = 0, _keys = keys; _i < _keys.length; _i++) {
            var _ret = _loop();

            if (_ret === "continue") continue;
          }

          return createElement('div', {}, [createElement('plugin', {
            props: this.propsData,
            on: events
          })]);
        },
        data: function data() {
          return {
            propsData: _utils.default.extend({}, param.component.datas, {
              // **删除**delete**
              param: param.component.data,
              params: param.component.data
            }),
            modal: that
          };
        },
        mounted: function mounted() {},
        methods: {
          trigger: function trigger(name) {
            for (var _len2 = arguments.length, data = new Array(_len2 > 1 ? _len2 - 1 : 0), _key2 = 1; _key2 < _len2; _key2++) {
              data[_key2 - 1] = arguments[_key2];
            }

            that.trigger.apply(that, [name].concat(data));
          },
          close: function close() {
            that.close();
          }
        },
        components: {
          plugin: param.component.vue
        }
      });
    }

    if (param.hasCloseIcon) {
      _utils.default.addClass($body, notifyHasCloseCls);
    }

    if (param.type) {
      _utils.default.addClass($body, param.type);
    }

    if (param.height) {
      $content.style.height = "".concat(param.height, "px");
    }

    if (param.maxheight) {
      $content.style.maxHeight = "".concat(param.maxheight, "px");
    }

    if (param.style) {
      _utils.default.addClass($body, param.style);
    }

    if (param.width) {
      $container.style.width = "".concat(param.width, "px");
    }

    var parentDom = param.parent || document.body;

    if (param.type == 'h-notice' && parentDom.hasChildNodes()) {
      parentDom.insertBefore($body, parentDom.firstChild);
    } else {
      parentDom.appendChild($body);
    } // fix: button在focus状态，enter或者空格键都会再次触发


    var focusClicked = document.querySelector(':focus');

    if (focusClicked && param.type === TYPE.MODAL) {
      focusClicked.blur();
    }

    if (param.hasCloseIcon) {
      $body.querySelector(".".concat(notifyCloseCls)).onclick = function () {
        that.close();
      };
    }

    if (param.hasFooter) {
      var buttons = $body.querySelectorAll(".".concat(notifyContainerCls, ">footer>button"));
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = buttons[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var button = _step2.value;

          button.onclick = function (event) {
            var attr = event.target.getAttribute('attr');

            if (attr) {
              if (attr == 'cancel') {
                that.close();
              }

              that.trigger(attr);
            }
          };
        }
      } catch (err) {
        _didIteratorError2 = true;
        _iteratorError2 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
            _iterator2.return();
          }
        } finally {
          if (_didIteratorError2) {
            throw _iteratorError2;
          }
        }
      }
    }

    window.setTimeout(function () {
      _utils.default.addClass($body, notifyShowCls);

      if (param.hasMask) {
        var body = document.documentElement;
        var scrollWidth = window.innerWidth - body.clientWidth;
        body.style.overflow = 'hidden';
        body.style.paddingRight = "".concat(scrollWidth, "px");
      }
    }, 20);

    if (param.events && _utils.default.isFunction(param.events.$init)) {
      param.events.$init.call(null, that, $content);
    }

    if (param.timeout) {
      $body.addEventListener('mouseover', function () {
        _this2.mouseOver = true;
      });
      $body.addEventListener('mouseleave', function () {
        _this2.mouseOver = false;

        if (_this2.closeTimeout) {
          that.close();
        }
      });
      window.setTimeout(function () {
        _this2.closeTimeout = true;

        if (!_this2.mouseOver) {
          that.close();
        }
      }, param.timeout);
    }

    if (param.closeOnMask && param.hasMask) {
      $body.querySelector(".".concat(notifyMaskCls)).onclick = function () {
        _this2.close();
      };

      var modalBody = $body.querySelector(".".concat(notifyBodyCls));

      if (modalBody) {
        modalBody.onclick = function (event) {
          if (event.target == modalBody) {
            _this2.close();
          }
        };
      }
    }

    this.popstateEvent = function () {
      _this2.close();
    };

    window.addEventListener('popstate', this.popstateEvent);
  }

  (0, _createClass2.default)(Notify, [{
    key: "trigger",
    value: function trigger(event) {
      var param = this.param;

      if (param.events && _utils.default.isFunction(param.events[event])) {
        var _param$events$event;

        for (var _len3 = arguments.length, data = new Array(_len3 > 1 ? _len3 - 1 : 0), _key3 = 1; _key3 < _len3; _key3++) {
          data[_key3 - 1] = arguments[_key3];
        }

        (_param$events$event = param.events[event]).call.apply(_param$events$event, [null, this].concat(data));
      }
    }
  }, {
    key: "close",
    value: function close() {
      var _this3 = this;

      var that = this;
      var $body = this.$body;

      if (this.vm) {
        that.vm.$destroy();
      }

      var body = document.documentElement;
      body.style.overflow = '';
      body.style.paddingRight = '';
      this.trigger('$close');
      window.removeEventListener('popstate', this.popstateEvent);

      _utils.default.removeClass($body, notifyShowCls);

      $body.addEventListener('transitionend', function (event) {
        if (event.target == _this3.$container) {
          _utils.default.removeDom($body);
        }
      });
      setTimeout(function () {
        _utils.default.removeDom($body);
      }, 400);
    }
  }]);
  return Notify;
}();

function _default(param) {
  return new Notify(param);
}

/***/ }),

/***/ 571:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__571__;

/***/ })

/******/ })["default"]});;