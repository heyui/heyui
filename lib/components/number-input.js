define(["heyui/lib/utils/utils"], function(__WEBPACK_EXTERNAL_MODULE__2__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 373);
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

/***/ 107:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(108);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 108:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _utils = _interopRequireDefault(__webpack_require__(2));

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
var prefix = 'h-numberinput';
var _default = {
  name: 'hNumberInput',
  props: {
    value: [Number, String],
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
  data: function data() {
    return {
      focusing: false,
      editValue: this.value,
      valueBak: this.value
    };
  },
  watch: {
    value: function value() {
      // this.editValue = this.value;
      if (this.valueBak != this.value) {
        this.editValue = this.value;
        this.valueBak = this.value;
      }
    }
  },
  mounted: function mounted() {},
  methods: {
    plus: function plus() {
      if (this.disabled) return false;
      var value = this.getValue(this.value);
      this.setvalue(_utils.default.add(value || 0, this.step), 'handler');
    },
    minus: function minus() {
      if (this.disabled) return false;
      var value = this.getValue(this.value);
      this.setvalue(_utils.default.add(value || 0, -this.step), 'handler');
    },
    input: function input(event) {
      if (isNaN(Number(event.target.value))) return false;
      var value = this.getValue(event.target.value);

      if (_utils.default.isNumber(this.value) && Math.abs(value - this.value) <= 1 && this.precision) {
        return;
      }

      this.setvalue(value, 'input');
    },
    blur: function blur(event) {
      this.focusing = false;
      var value = this.getValue(event.target.value);
      this.setvalue(value, 'blur');
    },
    getValue: function getValue(value) {
      if (value === '') return null;

      if (this.useInt) {
        var v = parseInt(value);
        return isNaN(v) ? null : v;
      } else {
        var _v = parseFloat(value);

        return isNaN(_v) ? null : _v;
      }
    },
    setvalue: function setvalue(value, trigger) {
      if (this.disabled) return false;

      if (this.max !== undefined && value !== null) {
        value = Math.min(this.max, value);
      }

      if (this.min !== undefined && value !== null) {
        value = Math.max(this.min, value);
      }

      if (this.precision && _utils.default.isNumber(value)) {
        value = Math.floor(_utils.default.mul(value || 0, Math.pow(10, this.precision))) / Math.pow(10, this.precision);
        value = value.toFixed(this.precision);
      }

      this.valueBak = value;
      this.$emit('input', value);

      if (trigger != 'input') {
        this.editValue = value;
      }

      if (trigger != 'input') {
        this.$emit('change', value);
      }

      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    }
  },
  computed: {
    numberinputCls: function numberinputCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, prefix, true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-disabled"), !!this.disabled), _ref;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 237:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/number-input/numberinput.vue?vue&type=template&id=fc713c30&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.numberinputCls }, [
    _c(
      "div",
      { staticClass: "h-numberinput-show", class: { focusing: _vm.focusing } },
      [
        _c("input", {
          directives: [
            {
              name: "model",
              rawName: "v-model",
              value: _vm.editValue,
              expression: "editValue"
            }
          ],
          staticClass: "h-numberinput-input h-input",
          attrs: {
            type: "text",
            placeholder: _vm.placeholder,
            disabled: _vm.disabled
          },
          domProps: { value: _vm.editValue },
          on: {
            input: [
              function($event) {
                if ($event.target.composing) {
                  return
                }
                _vm.editValue = $event.target.value
              },
              _vm.input
            ],
            focus: function($event) {
              _vm.focusing = true
            },
            blur: _vm.blur
          }
        }),
        _vm._v(" "),
        _vm.useOperate
          ? _c("div", { staticClass: "h-numberinput-operate" }, [
              _c("span", { on: { click: _vm.minus } }, [
                _c("i", { staticClass: "h-icon-minus" })
              ]),
              _vm._v(" "),
              _c("span", { on: { click: _vm.plus } }, [
                _c("i", { staticClass: "h-icon-plus" })
              ])
            ])
          : _vm._e()
      ]
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/number-input/numberinput.vue?vue&type=template&id=fc713c30&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


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

/***/ 373:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(374);


/***/ }),

/***/ 374:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _numberinput = _interopRequireDefault(__webpack_require__(375));

var _default = _numberinput.default;
exports.default = _default;

/***/ }),

/***/ 375:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _numberinput_vue_vue_type_template_id_fc713c30___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(237);
/* harmony import */ var _numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(107);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _numberinput_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _numberinput_vue_vue_type_template_id_fc713c30___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _numberinput_vue_vue_type_template_id_fc713c30___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/number-input/numberinput.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ })

/******/ })["default"]});;