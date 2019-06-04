define(["heyui/lib/utils/utils","heyui/lib/utils/config","heyui/lib/plugins/dropdown","heyui/lib/components/tree"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__177__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 453);
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

/***/ 161:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(162);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 162:
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

var _tree = _interopRequireDefault(__webpack_require__(177));

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
var prefix = 'h-treepicker';
var _default = {
  name: 'hTreePicker',
  component: {
    Tree: _tree.default
  },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key'
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
      default: 'all'
    },
    showCount: {
      type: Boolean,
      default: false
    },
    toggleOnSelect: {
      type: Boolean,
      default: true
    },
    value: [Number, String, Array, Object],
    config: String,
    className: String
  },
  data: function data() {
    return {
      objects: [],
      object: null,
      dropdown: null,
      valuebak: null
    };
  },
  beforeDestroy: function beforeDestroy() {
    var el = this.el;

    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }

    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.parse();
    this.$nextTick(function () {
      if (_this.inline) return;

      var el = _this.el = _this.$el.querySelector(".".concat(prefix, ">.h-treepicker-show"));

      var content = _this.$el.querySelector(".h-treepicker-group");

      _this.dropdown = new _dropdown.default(el, {
        trigger: 'click',
        triggerOnce: true,
        content: content,
        disabled: _this.disabled
      });

      if (_this.disabled) {
        _this.dropdown.disabled();
      }
    });
  },
  watch: {
    value: function value() {
      this.parse();
    },
    disabled: function disabled() {
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
  methods: {
    refresh: function refresh() {
      if (this.$refs.tree) {
        return this.$refs.tree.refresh();
      }
    },
    loadDataSuccess: function loadDataSuccess() {
      this.parse();
      this.$emit('loadDataSuccess');
    },
    getChoose: function getChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getChoose();
      }

      return [];
    },
    getFullChoose: function getFullChoose() {
      if (this.$refs.tree) {
        return this.$refs.tree.getFullChoose();
      }

      return [];
    },
    select: function select(data) {
      this.object = data;
      this.$emit('select', data);

      if (!this.multiple) {
        this.confirm();
      }
    },
    choose: function choose(data) {
      this.objects = data;
      this.$emit('choose', data);
      if (this.multiple) this.setvalue();
    },
    chooseAll: function chooseAll() {
      if (this.$refs.tree) {
        this.$refs.tree.chooseAll();
      }
    },
    remove: function remove(obj) {
      var index = this.objects.indexOf(obj);
      this.objects.splice(index, 1);
      this.valuebak.splice(index, 1);
      this.setvalue();
      this.triggerChange();
    },
    updateShow: function updateShow(data) {
      if (_utils.default.isObject(data) && !this.multiple) {
        this.object = data;
      }

      if (_utils.default.isArray(data) && this.multiple) {
        this.objects = data;
      }

      this.setvalue();
    },
    parse: function parse() {
      var _this2 = this;

      if (this.type == 'key') {
        this.valuebak = _utils.default.copy(this.value);
        this.$nextTick(function () {
          if (_this2.multiple) {
            _this2.objects = _this2.$refs.tree.getChoose();
          } else {
            _this2.object = _this2.$refs.tree.getSelect();
          }
        });
      } else {
        if (this.multiple) {
          this.valuebak = (this.value || []).map(function (item) {
            return item[_this2.param.keyName];
          });
          this.objects = _utils.default.copy(this.value);
        } else {
          this.valuebak = this.value ? this.value[this.param.keyName] : null;
          this.object = _utils.default.copy(this.value);
        }
      }
    },
    dispose: function dispose() {
      var _this3 = this;

      if (this.multiple) {
        return this.objects.map(function (item) {
          return _this3.type == 'key' ? item[_this3.param.keyName] : item;
        }).filter(function (item) {
          return item !== undefined;
        });
      } else if (this.object) {
        return this.type == 'key' ? this.object[this.param.keyName] : this.object;
      }

      return null;
    },
    clear: function clear() {
      this.object = null;
      this.objects = [];
      this.$refs.tree.searchTree(null);
      this.confirm();
    },
    confirm: function confirm() {
      this.setvalue();
      this.triggerChange();
      this.dropdown.hide();
    },
    setvalue: function setvalue() {
      var _this4 = this;

      var value = this.dispose();
      this.$emit('input', value);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.$nextTick(function () {
        if (_this4.dropdown) _this4.dropdown.update();
      });
    },
    triggerChange: function triggerChange() {
      var _this5 = this;

      this.$nextTick(function () {
        _this5.$emit('change', _utils.default.copy(_this5.multiple ? _this5.objects : _this5.object));
      });
    }
  },
  computed: {
    param: function param() {
      if (this.config) {
        return _utils.default.extend({}, _config.default.getOption('tree.default'), _config.default.getOption("tree.configs.".concat(this.config)), this.option);
      } else {
        return _utils.default.extend({}, _config.default.getOption('tree.default'), this.option);
      }
    },
    showCls: function showCls() {
      return (0, _defineProperty2.default)({}, "".concat(this.className, "-show"), !!this.className);
    },
    groupCls: function groupCls() {
      return (0, _defineProperty2.default)({}, "".concat(this.className, "-dropdown"), !!this.className);
    },
    treepickerCls: function treepickerCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefix), true), (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-input-border"), true), (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-no-autosize"), true), (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-disabled"), this.disabled), _ref3;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 177:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__177__;

/***/ }),

/***/ 195:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/tree-picker/treepicker.vue?vue&type=template&id=544a146e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.treepickerCls, attrs: { disabled: _vm.disabled } },
    [
      _c(
        "div",
        { staticClass: "h-treepicker-show", class: _vm.showCls },
        [
          _vm.multiple && _vm.objects.length
            ? [
                _vm.showCount
                  ? _c("div", { staticClass: "h-treepicker-value-single" }, [
                      _vm._v(
                        _vm._s(
                          _vm._f("hlang")("h.treepicker.selectDesc", [
                            _vm.valuebak.length
                          ])
                        )
                      )
                    ])
                  : _c(
                      "div",
                      { staticClass: "h-treepicker-multiple-tags" },
                      _vm._l(_vm.objects, function(obj) {
                        return _c("span", { key: obj[_vm.param.keyName] }, [
                          _c("span", [
                            _vm._v(_vm._s(obj[_vm.param.titleName]))
                          ]),
                          _vm._v(" "),
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
              ]
            : !_vm.multiple && _vm.object
            ? _c("div", { staticClass: "h-treepicker-value-single" }, [
                _vm._v(_vm._s(_vm.object[_vm.param.titleName]))
              ])
            : _c("div", { staticClass: "h-treepicker-placeholder" }, [
                _vm._v(
                  _vm._s(
                    _vm._f("hlang")(
                      "h.treepicker.placeholder",
                      null,
                      _vm.placeholder
                    )
                  )
                )
              ]),
          _vm._v(" "),
          _c("i", { staticClass: "h-icon-down" })
        ],
        2
      ),
      _vm._v(" "),
      _c("div", { staticClass: "h-treepicker-group", class: _vm.groupCls }, [
        _c(
          "div",
          { staticClass: "h-treepicker-body" },
          [
            _c("Tree", {
              ref: "tree",
              attrs: {
                toggleOnSelect: _vm.toggleOnSelect,
                option: _vm.option,
                multiple: _vm.multiple,
                chooseMode: _vm.chooseMode,
                filterable: _vm.filterable,
                config: _vm.config
              },
              on: {
                loadDataSuccess: _vm.loadDataSuccess,
                select: _vm.select,
                choose: _vm.choose
              },
              model: {
                value: _vm.valuebak,
                callback: function($$v) {
                  _vm.valuebak = $$v
                },
                expression: "valuebak"
              }
            })
          ],
          1
        ),
        _vm._v(" "),
        _vm.multiple
          ? _c("div", { staticClass: "h-treepicker-footer" }, [
              _c(
                "button",
                {
                  staticClass: "h-btn h-btn-text h-btn-s",
                  on: { click: _vm.clear }
                },
                [_vm._v(_vm._s(_vm._f("hlang")("h.common.clear")))]
              ),
              _vm._v(" "),
              _c(
                "button",
                {
                  staticClass: "h-btn h-btn-primary h-btn-s",
                  on: { click: _vm.confirm }
                },
                [_vm._v(_vm._s(_vm._f("hlang")("h.common.confirm")))]
              )
            ])
          : _vm._e()
      ])
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/tree-picker/treepicker.vue?vue&type=template&id=544a146e&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

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

/***/ 453:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(454);


/***/ }),

/***/ 454:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _treepicker = _interopRequireDefault(__webpack_require__(455));

var _default = _treepicker.default;
exports.default = _default;

/***/ }),

/***/ 455:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treepicker_vue_vue_type_template_id_544a146e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(195);
/* harmony import */ var _treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(161);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _treepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _treepicker_vue_vue_type_template_id_544a146e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _treepicker_vue_vue_type_template_id_544a146e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/tree-picker/treepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ })

/******/ })["default"]});;