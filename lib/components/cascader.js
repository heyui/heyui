define(["heyui/lib/utils/utils","heyui/lib/utils/config","heyui/lib/mixins/locale","heyui/lib/plugins/dropdown"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 285);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 206:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/cascader/cascader.vue?vue&type=template&id=75db10e2&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.cascaderCls, attrs: { disabled: _vm.disabled } },
    [
      _c("div", { staticClass: "h-cascader-show" }, [
        _vm.multiple && _vm.objects.length
          ? _c(
              "div",
              { staticClass: "h-cascader-multiple-tags" },
              _vm._l(_vm.objects, function(obj, index) {
                return _c("span", { key: index + "" + obj.key }, [
                  _c("span", [_vm._v(_vm._s(obj.title))]),
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
          ? _c("div", { staticClass: "h-cascader-value-single" }, [
              _c("span", [_vm._v(_vm._s(_vm.object.title))]),
              _vm._v(" "),
              _vm.object && !_vm.disabled
                ? _c("i", {
                    staticClass: "h-icon-close text-hover",
                    on: { mousedown: _vm.clear }
                  })
                : _vm._e()
            ])
          : _c("div", { staticClass: "h-cascader-placeholder" }, [
              _vm._v(_vm._s(_vm.showPlaceholder))
            ])
      ]),
      _vm._v(" "),
      _c("div", { class: _vm.groupCls }, [
        _c(
          "ul",
          { staticClass: "h-cascader-ul" },
          _vm._l(_vm.cascaderDatas, function(cascader) {
            return _c("CascaderItem", {
              key: cascader.key,
              attrs: {
                data: cascader,
                param: _vm.param,
                multiple: _vm.multiple,
                status: _vm.status,
                level: 0
              },
              on: { trigger: _vm.trigger }
            })
          }),
          1
        )
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/cascader/cascader.vue?vue&type=template&id=75db10e2&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 252:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/cascader/cascader-item.vue?vue&type=template&id=dd3ca67e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "h-cascader-li",
      class: { "h-cascader-li-opened": _vm.data.status.opened }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.data.status.hide,
              expression: "!data.status.hide"
            }
          ],
          staticClass: "h-cascader-show",
          class: {
            "h-cascader-show-disabled": _vm.data.status.disabled,
            "h-cascader-show-choose": _vm.data.status.choose,
            "h-cascader-show-selected": _vm.status.selected == _vm.data.key
          },
          on: { click: _vm.clickShow }
        },
        [
          _c(
            "div",
            {
              staticClass: "h-cascader-show-desc",
              class: { selected: _vm.status.selected == _vm.data.key },
              on: { click: _vm.select }
            },
            [
              _vm.data.icon
                ? _c("span", {
                    staticClass: "h-cascader-show-icon",
                    class: _vm.data.icon
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.data.title != null
                ? _c("span", [_vm._v(_vm._s(_vm.data.title))])
                : _c("span", [
                    _vm._v(_vm._s(_vm._f("hlang")("h.common.empty")))
                  ])
            ]
          ),
          _vm._v(" "),
          _c("span", { staticClass: "h-cascader-show-expand" }, [
            _vm.data.status.isWait
              ? _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleCascader()
                      }
                    }
                  },
                  [
                    !_vm.data.status.loading
                      ? [_c("i", { staticClass: "h-icon-right" })]
                      : [_c("i", { staticClass: "h-icon-loading" })]
                  ],
                  2
                )
              : _vm.data.children && _vm.data.children.length > 0
              ? _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleCascader()
                      }
                    }
                  },
                  [_c("i", { staticClass: "h-icon-right" })]
                )
              : _vm._e()
          ])
        ]
      ),
      _vm._v(" "),
      _vm.data.children && _vm.data.children.length > 0
        ? [
            _vm.data.status.opened
              ? _c("transition", { attrs: { name: "h-cascader-transition" } }, [
                  _c(
                    "ul",
                    { staticClass: "h-cascader-ul" },
                    _vm._l(_vm.data.children, function(child) {
                      return _c("hCascaderItem", {
                        key: child.key,
                        attrs: {
                          data: child,
                          param: _vm.param,
                          multiple: _vm.multiple,
                          status: _vm.status,
                          level: _vm.level + 1
                        },
                        on: { trigger: _vm.trigger }
                      })
                    }),
                    1
                  )
                ])
              : _vm._e()
          ]
        : _vm._e()
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/cascader/cascader-item.vue?vue&type=template&id=dd3ca67e&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 285:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(286);


/***/ }),

/***/ 286:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _cascader = _interopRequireDefault(__webpack_require__(287));

var _default = _cascader.default;
exports.default = _default;

/***/ }),

/***/ 287:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cascader_vue_vue_type_template_id_75db10e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(206);
/* harmony import */ var _cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(47);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cascader_vue_vue_type_template_id_75db10e2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _cascader_vue_vue_type_template_id_75db10e2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/cascader/cascader.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 288:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _cascader_item_vue_vue_type_template_id_dd3ca67e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(252);
/* harmony import */ var _cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(49);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _cascader_item_vue_vue_type_template_id_dd3ca67e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _cascader_item_vue_vue_type_template_id_dd3ca67e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/cascader/cascader-item.vue"
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

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(48);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 48:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _dropdown = _interopRequireDefault(__webpack_require__(7));

var _locale = _interopRequireDefault(__webpack_require__(5));

var _cascaderItem = _interopRequireDefault(__webpack_require__(288));

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
//
//
//
//
var prefix = 'h-cascader';
var _default = {
  name: 'hCascader',
  mixins: [_locale.default],
  components: {
    CascaderItem: _cascaderItem.default
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
    value: [Number, String, Array, Object],
    config: String
  },
  data: function data() {
    return {
      dropdown: null,
      globalloading: false,
      loading: true,
      objects: [],
      status: {
        selected: null
      },
      object: null,
      cascaderDatas: [],
      cascaderObj: {},
      searchValue: null
    };
  },
  mounted: function mounted() {
    this.init();
    this.initCascaderDatas();
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
      this.initCascaderDatas();
    }
  },
  methods: {
    init: function init() {
      var _this = this;

      this.$nextTick(function () {
        var el = _this.el = _this.$el.querySelector('.h-cascader-show');

        _this.content = _this.$el.querySelector('.h-cascader-group');
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
    trigger: function trigger(params) {},
    remove: function remove(obj) {
      this.objects.splice(this.objects.indexOf(obj), 1);
      this.setvalue();
    },
    clear: function clear() {
      this.object = null;
      this.setvalue();
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
      } else {
        this.object = this.getValue(this.value);
      }
    },
    getValue: function getValue(item) {
      if (_utils.default.isNull(item)) {
        return null;
      }

      if (this.type == 'key') {
        return this.cascaderObj[item];
      } else {
        return _utils.default.getValue(item, this.param);
      }
    },
    dispose: function dispose() {
      var _this2 = this;

      if (this.multiple) {
        return this.objects.map(function (item) {
          return _this2.type == 'key' ? item.key : item.value;
        }).filter(function (item) {
          return item !== undefined;
        });
      } else if (this.object) {
        return this.type == 'key' ? this.object.key : this.object.value;
      }

      return null;
    },
    setvalue: function setvalue() {
      var value = this.dispose();
      this.$emit('input', value);
      this.$emit('change', _utils.default.copy(this.multiple ? this.objects : this.object));
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    },
    initCascaderDatas: function initCascaderDatas() {
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
          _this3.cascaderDatas = _this3.initDatas(_utils.default.copy(result));

          _this3.parse();

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

      this.cascaderDatas = this.initDatas(datas);
      this.parse();
    },
    initDatas: function initDatas(datas) {
      var list = _utils.default.copy(datas);

      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = _utils.default.generateTree(list, this.param);
      }

      var isWait = _utils.default.isFunction(this.param.getDatas);

      return this.initTreeModeData(list, null, isWait);
    },
    initTreeModeData: function initTreeModeData(list, parentKey, isWait) {
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
              loading: false,
              isWait: isWait,
              opened: false,
              selected: false,
              checkable: data.checkable !== false
            }
          };
          var children = data[this.param.childrenName] || [];
          obj[this.param.childrenName] = this.initTreeModeData(children, obj.key);
          this.cascaderObj[obj.key] = obj;
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
    }
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      return this.placeholder || this.t('h.cascader.placeholder');
    },
    param: function param() {
      if (this.config) {
        return _utils.default.extend({}, _config.default.getOption('cascader.default'), _config.default.getOption("cascader.configs.".concat(this.config)), this.option);
      } else {
        return _utils.default.extend({}, _config.default.getOption('cascader.default'), this.option);
      }
    },
    cascaderCls: function cascaderCls() {
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

/***/ 49:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(50);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_cascader_item_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),

/***/ 50:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
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
var _default = {
  name: 'hCascaderItem',
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
    level: Number
  },
  data: function data() {
    return {};
  },
  methods: {
    clickShow: function clickShow() {
      if (this.selectOnClick) {
        this.select();
      }
    },
    select: function select() {
      if (this.toggleOnSelect || this.multiple) {
        this.toggleCascader();
      }

      if (this.data.status.disabled) return;
      this.$emit('trigger', {
        type: 'selectEvent',
        data: this.data
      });

      if (this.multiple && this.data.children.length == 0) {
        this.data.status.choose = !this.data.status.choose;
        this.choose();
      }
    },
    choose: function choose() {
      this.data.status.indeterminate = false;
      this.$emit('trigger', {
        type: 'chooseEvent',
        data: this.data
      });
    },
    trigger: function trigger(data) {
      if (data.type == 'chooseEvent') {
        if (this.chooseMode != 'independent') {
          if (this.data.children) {
            var chooseStatus = true;
            var indeterminateStatus = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.data.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                if (!child.status.choose && chooseStatus) {
                  chooseStatus = false;
                }

                if (child.status.choose) {
                  indeterminateStatus = true;
                }
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

            if (this.chooseMode == 'all') {
              this.data.status.choose = chooseStatus;
              this.data.status.indeterminate = indeterminateStatus && !chooseStatus;
            } else if (this.chooseMode == 'some') {
              this.data.status.choose = indeterminateStatus;
              this.data.status.indeterminate = false;
            }
          }
        }
      }

      this.$emit('trigger', data);
    },
    toggleCascader: function toggleCascader() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit('trigger', {
          type: 'toggleCascaderEvent',
          data: this.data
        });
      }
    },
    loadData: function loadData() {
      this.$emit('trigger', {
        type: 'loadDataEvent',
        data: this.data
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ })

/******/ })["default"]});;