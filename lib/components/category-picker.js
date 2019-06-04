define(["heyui/lib/utils/utils","heyui/lib/utils/config","heyui/lib/mixins/locale","heyui/lib/plugins/dropdown","heyui/lib/plugins/message","heyui/lib/components/checkbox"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__15__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 293);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 12:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__12__;

/***/ }),

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
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

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 214:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/category-picker/categorypicker.vue?vue&type=template&id=f29853a4&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.categoryCls, attrs: { disabled: _vm.disabled } },
    [
      _c("div", { staticClass: "h-categorypicker-show" }, [
        _vm.multiple && _vm.objects.length
          ? _c(
              "div",
              { staticClass: "h-categorypicker-multiple-tags" },
              _vm._l(_vm.objects, function(obj, index) {
                return _c("span", { key: index + "" + obj.key }, [
                  _c("span", [_vm._v(_vm._s(_vm.getShow(obj)))]),
                  !_vm.disabled
                    ? _c("i", {
                        staticClass: "h-icon-close-min",
                        on: {
                          click: function($event) {
                            $event.stopPropagation()
                            return _vm.remove(obj)
                          }
                        }
                      })
                    : _vm._e()
                ])
              }),
              0
            )
          : !_vm.multiple && _vm.object
          ? _c("div", { staticClass: "h-categorypicker-value-single" }, [
              _c("span", [_vm._v(_vm._s(_vm.getShow(_vm.object)))]),
              _vm._v(" "),
              _vm.object && !_vm.disabled
                ? _c("i", {
                    staticClass: "h-icon-close",
                    on: { mousedown: _vm.clear }
                  })
                : _vm._e()
            ])
          : _c("div", { staticClass: "h-categorypicker-placeholder" }, [
              _vm._v(_vm._s(_vm.showPlaceholder))
            ])
      ]),
      _vm._v(" "),
      _c(
        "div",
        { class: _vm.groupCls },
        [
          _c("Tabs", {
            staticClass: "h-categorypicker-tabs",
            attrs: { datas: _vm.tabs, keyName: "key", titleName: "title" },
            on: { change: _vm.focusTab },
            model: {
              value: _vm.tab,
              callback: function($$v) {
                _vm.tab = $$v
              },
              expression: "tab"
            }
          }),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "h-categorypicker-ul",
              class: { "h-categorypicker-single-picker": !_vm.multiple }
            },
            _vm._l(_vm.list, function(data) {
              return _c(
                "div",
                {
                  key: data.key,
                  staticClass: "h-categorypicker-item",
                  class: {
                    "h-categorypicker-item-selected":
                      _vm.object && data.key == _vm.object.key
                  }
                },
                [
                  data.status.loading
                    ? _c("i", { staticClass: "h-icon-loading" })
                    : data.status.checkable && _vm.multiple
                    ? _c("Checkbox", {
                        attrs: { checked: _vm.isChecked(data) },
                        nativeOn: {
                          click: function($event) {
                            return _vm.change(data, $event)
                          }
                        }
                      })
                    : _vm._e(),
                  _vm._v(" "),
                  _c(
                    "span",
                    {
                      staticClass: "h-categorypicker-item-title",
                      on: {
                        click: function($event) {
                          return _vm.openNew(data, $event)
                        }
                      }
                    },
                    [
                      _vm._v(_vm._s(data.title)),
                      _vm.showChildCount && data.children.length
                        ? _c("span", [
                            _vm._v("(" + _vm._s(data.children.length) + ")")
                          ])
                        : _vm._e()
                    ]
                  )
                ],
                1
              )
            }),
            0
          )
        ],
        1
      )
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/category-picker/categorypicker.vue?vue&type=template&id=f29853a4&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 293:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(294);


/***/ }),

/***/ 294:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _categorypicker = _interopRequireDefault(__webpack_require__(295));

var _default = _categorypicker.default;
exports.default = _default;

/***/ }),

/***/ 295:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _categorypicker_vue_vue_type_template_id_f29853a4___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(214);
/* harmony import */ var _categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(55);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _categorypicker_vue_vue_type_template_id_f29853a4___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _categorypicker_vue_vue_type_template_id_f29853a4___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/category-picker/categorypicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),

/***/ 55:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(56);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_categorypicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _extends2 = _interopRequireDefault(__webpack_require__(16));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));

var _config = _interopRequireDefault(__webpack_require__(4));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _dropdown = _interopRequireDefault(__webpack_require__(7));

var _locale = _interopRequireDefault(__webpack_require__(5));

var _message = _interopRequireDefault(__webpack_require__(12));

var _checkbox = _interopRequireDefault(__webpack_require__(15));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var prefix = 'h-categorypicker';
var topMenu = '-------';
var _default = {
  name: 'hCategoryPicker',
  mixins: [_locale.default],
  components: {
    Checkbox: _checkbox.default
  },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key' // object

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
    value: [Number, String, Array, Object],
    config: String
  },
  data: function data() {
    return {
      dropdown: null,
      globalloading: false,
      loading: true,
      objects: [],
      object: null,
      tabs: [{
        title: this.t('h.categoryModal.total'),
        key: topMenu
      }],
      tab: topMenu,
      categoryDatas: [],
      categoryObj: {},
      searchValue: null,
      tabIndex: 0,
      list: [],
      valueBak: null
    };
  },
  mounted: function mounted() {
    this.init();
    this.initCategoryDatas();
  },
  watch: {
    disabled: function disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    },
    'option.datas': function optionDatas() {
      this.initCategoryDatas();
    },
    value: function value() {
      if (this.valueBak != this.value) {
        this.parse();
        this.tab = topMenu;
        this.tabs = [{
          title: this.t('h.categoryModal.total'),
          key: topMenu
        }];
        this.list = this.categoryDatas;
      }
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      this.$nextTick(function () {
        var el = _this.el = _this.$el.querySelector('.h-categorypicker-show');

        _this.content = _this.$el.querySelector('.h-categorypicker-group');
        var that = _this;
        _this.dropdown = new _dropdown.default(el, {
          trigger: 'click',
          content: _this.content,
          disabled: _this.disabled,
          events: {
            show: function show() {
              that.isShow = true;
            }
          }
        });
      });
    },
    refresh: function refresh() {
      this.tab = topMenu;
      this.tabs = [{
        title: this.t('h.categoryModal.total'),
        key: topMenu
      }];
      this.initCategoryDatas();
    },
    remove: function remove(obj) {
      this.objects.splice(this.objects.indexOf(obj), 1);
      this.setvalue('remove');
    },
    clear: function clear() {
      this.object = null;
      this.setvalue('clear');
    },
    parse: function parse() {
      if (this.multiple) {
        var os = [];

        if (_utils.default.isArray(this.value) && this.value.length > 0) {
          var _iteratorNormalCompletion = true;
          var _didIteratorError = false;
          var _iteratorError = undefined;

          try {
            for (var _iterator = this.value[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
              var v = _step.value;
              os.push(this.getValue(v));
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
        }

        this.objects = os;
        this.object = null;
      } else {
        this.object = this.getValue(this.value);
        this.objects = [];
      }
    },
    getValue: function getValue(item) {
      if (_utils.default.isNull(item)) {
        return null;
      }

      if (this.type == 'key') {
        return this.categoryObj[item];
      } else {
        return _utils.default.getValue(item, this.param);
      }
    },
    getShow: function getShow(data) {
      if (this.showAllLevels) {
        data = this.categoryObj[data.key] || data;
        return this.getParentTitle(data).reverse().join('/');
      } else {
        return data.title;
      }
    },
    getParentTitle: function getParentTitle(data) {
      var list = [data.title];

      if (data.parentKey != null && this.categoryObj[data.parentKey]) {
        list.push.apply(list, (0, _toConsumableArray2.default)(this.getParentTitle(this.categoryObj[data.parentKey])));
      }

      return list;
    },
    dispose: function dispose() {
      var _this2 = this;

      if (this.multiple) {
        return this.objects.map(function (item) {
          return _this2.type == 'key' ? item.key : item.value;
        }).filter(function (item) {
          return item !== undefined;
        }).map(function (item) {
          return _this2.type == 'key' ? item : _this2.getDisposeValue(item);
        });
      } else if (this.object) {
        return this.type == 'key' ? this.object.key : this.getDisposeValue(this.object.value);
      }

      return null;
    },
    getDisposeValue: function getDisposeValue(item) {
      var obj = (0, _extends2.default)({}, item);
      delete obj[this.param.childrenName];
      return obj;
    },
    setvalue: function setvalue(trigger) {
      var value = this.dispose();
      this.$emit('input', value);
      this.$emit('change', _utils.default.copy(this.multiple ? this.objects : this.object));

      if (trigger != 'clear') {
        this.valueBak = value;
      }

      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdownUpdate();
    },
    initCategoryDatas: function initCategoryDatas() {
      var _this3 = this;

      var datas = [];

      if (_utils.default.isArray(this.param.datas)) {
        datas = this.param.datas;
      }

      if (_utils.default.isFunction(this.param.datas)) {
        datas = this.param.datas.call(null);
      }

      if (_utils.default.isFunction(this.param.getTotalDatas) || _utils.default.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        var loadData = this.param.getTotalDatas || this.param.getDatas;
        var param = [function (result) {
          _this3.initDatas(_utils.default.copy(result));

          _this3.globalloading = false;

          _this3.$emit('loadDataSuccess');
        }, function () {
          _this3.globalloading = false;
        }];

        if (this.param.getDatas) {
          param.unshift(null);
        }

        loadData.apply(this.param, param);
      }

      this.initDatas(datas);
    },
    initDatas: function initDatas(datas) {
      var list = _utils.default.copy(datas);

      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = _utils.default.generateTree(list, this.param);
      }

      var isWait = _utils.default.isFunction(this.param.getDatas);

      this.categoryDatas = this.initTreeModeData(list, null, isWait, 0);
      this.list = this.categoryDatas;
      this.parse();
    },
    initTreeModeData: function initTreeModeData(list, parentKey, isWait, level) {
      var datas = [];
      var _iteratorNormalCompletion2 = true;
      var _didIteratorError2 = false;
      var _iteratorError2 = undefined;

      try {
        for (var _iterator2 = list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
          var data = _step2.value;
          var obj = {
            key: data[this.param.keyName],
            title: data[this.param.titleName],
            value: data,
            parentKey: parentKey,
            status: {
              level: level,
              loading: false,
              isWait: isWait,
              opened: false,
              selected: false,
              selectable: this.param.selectable ? this.param.selectable(data, level) : data.selectable !== false,
              checkable: this.param.checkable ? this.param.checkable(data, level) : data.checkable !== false
            }
          };
          var children = data[this.param.childrenName] || [];
          obj.children = this.initTreeModeData(children, obj.key, isWait, level + 1);
          this.categoryObj[obj.key] = obj;
          datas.push(obj);
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

      return datas;
    },
    openNew: function openNew(data, event) {
      var _this4 = this;

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
        this.param.getDatas.call(this.param, data.value, function (result) {
          data.children = _this4.initTreeModeData(result, data.key, true, data.status.level + 1);
          data.status.isWait = false;
          data.status.loading = false;
          data.status.opened = true;

          _this4.openNew(data);
        }, function () {
          data.status.loading = false;
        });
      } else {
        this.change(data);
      }
    },
    focusTab: function focusTab(tab, index) {
      this.tab = tab.key;
      this.tabIndex = index;

      if (tab.key === topMenu) {
        this.list = this.categoryDatas;
      } else {
        this.list = tab.children;
      }
    },
    change: function change(data, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }

      if (!this.multiple && data.status.selectable === false) {
        return;
      }

      if (this.multiple && data.status.checkable === false) {
        return;
      }

      if (this.multiple) {
        if (this.objects.length >= this.limit && !this.param.objects.some(function (item) {
          return item.key === data.key;
        })) {
          _message.default.error(this.t('h.categoryPicker.limitWords', {
            size: this.limit
          }));

          return;
        }

        _utils.default.toggleValueByKey(this.objects, 'key', data);
      } else {
        this.object = data;
      }

      if (this.multiple) {
        this.dropdownUpdate();
      } else if (!(data.children && data.children.length)) {
        this.dropdown.hide();
      }

      this.setvalue('picker');
    },
    dropdownUpdate: function dropdownUpdate() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.dropdown.update();
      });
    },
    isChecked: function isChecked(data) {
      if (this.multiple) {
        return this.objects.some(function (item) {
          return item.key == data.key;
        });
      } else {
        return this.object ? this.object.key == data.key : false;
      }
    }
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      return this.placeholder || this.t('h.categoryPicker.placeholder');
    },
    param: function param() {
      if (this.config) {
        return _utils.default.extend({}, _config.default.getOption('categoryPicker.default'), _config.default.getOption("categoryPicker.configs.".concat(this.config)), this.option);
      } else {
        return _utils.default.extend({}, _config.default.getOption('categoryPicker.default'), this.option);
      }
    },
    categoryCls: function categoryCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefix), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-input-border"), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-no-autosize"), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-disabled"), this.disabled), _ref;
    },
    groupCls: function groupCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefix, "-group"), true), (0, _defineProperty2.default)(_ref2, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref2, "".concat(this.className, "-dropdown"), !!this.className), _ref2;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(8);

var iterableToArray = __webpack_require__(9);

var nonIterableSpread = __webpack_require__(10);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ })

/******/ })["default"]});;