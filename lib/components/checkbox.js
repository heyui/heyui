define(["heyui/lib/utils/utils","heyui/lib/utils/config"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 299);
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

/***/ 218:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/checkbox/checkbox.vue?vue&type=template&id=7912cd2f&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    {
      staticClass: "h-checkbox",
      class: { "h-checkbox-disabled": _vm.disabled },
      attrs: { disabled: _vm.disabled }
    },
    [
      !_vm.isSingle
        ? _vm._l(_vm.arr, function(option) {
            return _c(
              "label",
              {
                key: option[_vm.key],
                class: { "h-checkbox-checked": _vm.isInclude(option) },
                on: {
                  click: function($event) {
                    return _vm.setvalue(option)
                  }
                }
              },
              [
                _c("span", {
                  staticClass: "h-checkbox-native",
                  attrs: {
                    checked: _vm.isInclude(option),
                    disabled: _vm.disabled
                  }
                }),
                !_vm.$scopedSlots.item
                  ? _c("span", { staticClass: "h-checkbox-text" }, [
                      _vm._v(_vm._s(option[_vm.title]))
                    ])
                  : _vm._t("item", null, { item: option })
              ],
              2
            )
          })
        : _c(
            "label",
            {
              class: {
                "h-checkbox-checked": _vm.isChecked,
                "h-checkbox-indeterminate": !_vm.isChecked && _vm.indeterminate
              },
              on: {
                click: function($event) {
                  return _vm.setvalue()
                }
              }
            },
            [
              _c("span", {
                staticClass: "h-checkbox-native",
                attrs: {
                  checked: _vm.isChecked,
                  indeterminate: !_vm.isChecked && _vm.indeterminate,
                  disabled: _vm.disabled
                }
              }),
              _vm.$slots.default
                ? _c(
                    "span",
                    { staticClass: "h-checkbox-text" },
                    [_vm._t("default")],
                    2
                  )
                : _vm._e()
            ]
          )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/checkbox/checkbox.vue?vue&type=template&id=7912cd2f&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 299:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(300);


/***/ }),

/***/ 300:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _checkbox = _interopRequireDefault(__webpack_require__(301));

var _default = _checkbox.default;
exports.default = _default;

/***/ }),

/***/ 301:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _checkbox_vue_vue_type_template_id_7912cd2f___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(218);
/* harmony import */ var _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(59);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _checkbox_vue_vue_type_template_id_7912cd2f___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _checkbox_vue_vue_type_template_id_7912cd2f___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/checkbox/checkbox.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 59:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(60);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_checkbox_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 60:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _config = _interopRequireDefault(__webpack_require__(4));

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
//
var _default2 = {
  name: 'hCheckbox',
  model: {
    prop: 'checkStatus',
    event: 'input'
  },
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
    checkStatus: [Array, Boolean, Object, Number, String],
    indeterminate: {
      type: Boolean,
      default: false
    },
    keyName: {
      type: String,
      default: function _default() {
        return _config.default.getOption('dict', 'keyName');
      }
    },
    titleName: {
      type: String,
      default: function _default() {
        return _config.default.getOption('dict', 'titleName');
      }
    },
    trueValue: {
      default: true
    },
    falseValue: {
      default: false
    }
  },
  data: function data() {
    return {
      isChecked: null,
      key: this.keyName,
      title: this.titleName
    };
  },
  mounted: function mounted() {
    this.updateChecked();
  },
  watch: {
    checked: function checked() {
      this.updateChecked();
    },
    checkStatus: function checkStatus() {
      this.updateChecked();
    }
  },
  methods: {
    updateChecked: function updateChecked() {
      if (this.isSingle) {
        if (!_utils.default.isNull(this.value)) {
          this.isChecked = this.checkList.indexOf(this.value) != -1;
        } else if (this.checked === true) {
          this.isChecked = this.checked;
        } else if (this.checkStatus === this.trueValue) {
          this.isChecked = true;
        } else if (this.checkStatus === this.falseValue) {
          this.isChecked = false;
        } else {
          this.isChecked = false;
        }
      }
    },
    setvalue: function setvalue(option) {
      if (this.disabled) return;
      var value = null;

      if (this.isSingle) {
        if (!_utils.default.isNull(this.value)) {
          value = _utils.default.toggleValue(this.checkList, this.value);
        } else if (!_utils.default.isNull(this.checkStatus)) {
          value = this.isChecked ? this.falseValue : this.trueValue;
        } else if (this.checked === true) {
          value = this.checked;
        } else {
          value = this.isChecked ? this.falseValue : this.trueValue;
        }
      } else {
        value = _utils.default.copy(this.checkStatus);
        var key = option[this.key];
        value = _utils.default.toggleValue(value, key);
      }

      this.$emit('change', value);
      this.$emit('input', value);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    },
    check: function check(key) {
      var value = this.checkList.map(function (item) {
        return String(item);
      });
      return value.indexOf(String(key));
    },
    isInclude: function isInclude(option) {
      var value = this.checkList.map(function (item) {
        return String(item);
      });
      var index = value.indexOf(String(option[this.key]));
      return index > -1;
    }
  },
  computed: {
    checkList: function checkList() {
      var checkStatus = this.checkStatus || [];

      if ((!_utils.default.isNull(this.value) || !this.isSingle) && !_utils.default.isArray(checkStatus)) {
        console.warn("[HeyUI WARNING] Checkbox Component: It's not allowed to use v-model with non-array value.");
      }

      return _utils.default.isArray(checkStatus) ? checkStatus : [];
    },
    isSingle: function isSingle() {
      return this.arr.length == 0;
    },
    arr: function arr() {
      if (!this.datas && !this.dict) {
        return [];
      }

      var datas = this.datas;

      if (this.dict) {
        datas = _config.default.getDict(this.dict);
      }

      return _config.default.initOptions(datas, this);
    }
  }
};
exports.default = _default2;

/***/ })

/******/ })["default"]});;