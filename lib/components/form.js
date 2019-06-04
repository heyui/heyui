define(["heyui/lib/utils/utils","heyui/lib/plugins/message","heyui/lib/plugins/scroll-into-view","heyui/lib/plugins/validator"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__12__, __WEBPACK_EXTERNAL_MODULE__25__, __WEBPACK_EXTERNAL_MODULE__336__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 333);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 242:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/form/form.vue?vue&type=template&id=ae7f7862&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.formCls }, [_vm._t("default")], 2)
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/form/form.vue?vue&type=template&id=ae7f7862&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 25:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__25__;

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

/***/ 333:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(334);


/***/ }),

/***/ 334:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _form = _interopRequireDefault(__webpack_require__(335));

var _default = _form.default;
exports.default = _default;

/***/ }),

/***/ 335:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _form_vue_vue_type_template_id_ae7f7862___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(242);
/* harmony import */ var _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(81);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _form_vue_vue_type_template_id_ae7f7862___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _form_vue_vue_type_template_id_ae7f7862___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/form/form.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 336:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__336__;

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

/***/ 81:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(82);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_form_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 82:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));

var _validator = _interopRequireDefault(__webpack_require__(336));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _scrollIntoView = _interopRequireDefault(__webpack_require__(25));

var _message = _interopRequireDefault(__webpack_require__(12));

//
//
//
//
//
var prefixCls = 'h-form';

var findDomUtil = function findDomUtil(target, utilDom) {
  var now = target;

  while (now != utilDom) {
    if (_utils.default.hasClass(now, 'h-form-item') && now.getAttribute('prop')) {
      return now;
    }

    now = now.parentElement;
  }

  return null;
};

var _default = {
  name: 'hForm',
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
      default: 'single' // inline,single,twocolumn

    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: {
      type: String,
      default: 'right' // left,right

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
  provide: function provide() {
    return {
      validField: this.validField,
      requireds: this.requireds,
      removeProp: this.removeProp,
      setConfig: this.setConfig,
      updateErrorMessage: this.updateErrorMessage,
      getErrorMessage: this.getErrorMessage,
      labelWidth: this.labelWidth,
      params: this.childParams
    };
  },
  data: function data() {
    return {
      messages: {},
      requireds: [],
      validator: null,
      childParams: {
        mode: this.mode
      }
    };
  },
  beforeMount: function beforeMount() {
    if (this.model && this.rules) this.validator = new _validator.default(this.rules);
  },
  destroyed: function destroyed() {
    if (this.validator) {
      this.validator.destroy();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.initRequires();
    this.$nextTick(function () {
      _this.$el.addEventListener('blur', function (event) {
        if (event.target.tagName == 'INPUT' || event.target.tagName == 'TEXTAREA') {
          _this.trigger(event.target);
        }
      }, true);

      _this.$el.addEventListener('setvalue', function (event) {
        _this.trigger(event.target);
      });
    });
  },
  watch: {
    mode: function mode() {
      this.childParams.mode = this.mode;
    },
    rules: {
      handler: function handler() {
        if (this.validator) {
          if (this.rules) this.validator.updateRule(this.rules);
        } else if (this.model && this.rules) {
          this.validator = new _validator.default(this.rules);
        }

        this.initRequires();
      },
      deep: true
    }
  },
  methods: {
    initRequires: function initRequires() {
      this.requireds.splice(0);

      if (this.rules) {
        var _this$requireds;

        var validRequiredProps = _utils.default.toArray(this.rules.rules, 'key').filter(function (item) {
          return item.required === true;
        }).map(function (item) {
          return item.key;
        });

        (_this$requireds = this.requireds).push.apply(_this$requireds, (0, _toConsumableArray2.default)(this.rules.required || []).concat((0, _toConsumableArray2.default)(validRequiredProps)));
      }
    },
    reset: function reset() {
      console.warn('[HeyUI WARNING] Form Component: form.reset() will be decapitated, please use method form.resetValid()');

      for (var m in this.messages) {
        this.messages[m].valid = true;
      }
    },
    resetValid: function resetValid() {
      for (var m in this.messages) {
        this.messages[m].valid = true;
      }
    },
    trigger: function trigger(target) {
      if (!this.validOnChange) {
        return false;
      }

      var formItem = findDomUtil(target, this.$el);

      if (formItem && formItem.getAttribute('validable') == 'true') {
        this.validField(formItem.getAttribute('prop'));
      }
    },
    validField: function validField(prop) {
      var _this2 = this;

      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }

      var returnResult = this.validator.validField(prop, this.model, {
        next: function next(result) {
          _utils.default.extend(true, _this2.messages, result);
        }
      });

      _utils.default.extend(true, this.messages, returnResult);

      return _utils.default.extend({}, this.messages[prop]);
    },
    validFieldJs: function validFieldJs(prop, _next) {
      if (!prop || !this.validator || !this.model) {
        return {
          valid: true
        };
      }

      var defaultM = this.messages[prop];
      var returnResult = this.validator.validField(prop, this.model, {
        next: function next() {
          _next(_utils.default.extend({}, defaultM, returnResult[prop]));
        }
      });
      return _utils.default.extend({}, defaultM, returnResult[prop]);
    },
    setConfig: function setConfig(prop, options) {
      if (!this.validator) return false;
      this.validator.setConfig(prop, options);
    },
    getErrorMessage: function getErrorMessage(prop, label) {
      if (this.messages[prop]) return this.messages[prop];
      var message = {
        valid: true,
        message: null,
        label: label
      };
      this.messages[prop] = message;
      return message;
    },
    updateErrorMessage: function updateErrorMessage(prop, oldProp) {
      var message = _utils.default.copy(this.messages[oldProp]);

      if (_utils.default.isNull(message)) {
        message = {
          valid: true,
          message: null
        };
      }

      this.messages[prop] = message;
      return message;
    },
    removeProp: function removeProp(prop) {
      delete this.messages[prop];
    },
    renderMessage: function renderMessage(returnResult) {
      var isSuccess = true;

      for (var r in returnResult) {
        if (!returnResult[r].valid) {
          isSuccess = false;
          break;
        }
      }

      _utils.default.extend(true, this.messages, returnResult);

      var result = {
        result: isSuccess,
        messages: _utils.default.toArray(this.messages, 'prop').filter(function (item) {
          return !item.valid;
        })
      };
      return result;
    },
    tipError: function tipError(result) {
      var _this3 = this;

      if (result && !result.result) {
        var m = result.messages[0];

        if (this.showErrorTip) {
          if (m.type == 'base') {
            _message.default.error("".concat(m.label).concat(m.message));
          } else {
            _message.default.error("".concat(m.message));
          }
        }

        this.$nextTick(function () {
          var firstError = _this3.$el.querySelector(".h-form-item-valid-error[prop='".concat(m.prop, "']"));

          if (firstError) {
            (0, _scrollIntoView.default)(firstError, {
              time: 500,
              align: {
                top: _this3.top,
                topOffset: _this3.topOffset
              }
            });
          }
        });
      }
    },
    validAsync: function validAsync() {
      var _this4 = this;

      return new Promise(function (resolve) {
        var returnResult = _this4.valid(function (result) {
          var asyncResult = _this4.renderMessage(result);

          if (returnResult && returnResult.result) {
            _this4.tipError(asyncResult);
          }

          resolve(asyncResult);
        });
      });
    },
    valid: function valid(next) {
      var _this5 = this;

      if (!this.validator || !this.model) {
        return {
          result: true,
          messages: []
        };
      }

      var returnResult = this.validator.valid(this.model, function (result) {
        _utils.default.extend(true, _this5.messages, result);
      }, function (result) {
        if (next) {
          next.call(null, result);
        }
      });
      var result = this.renderMessage(returnResult);
      this.tipError(result);
      return result;
    }
  },
  computed: {
    formCls: function formCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefixCls), true), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-").concat(this.mode), true), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-label-").concat(this.labelPosition), !!this.labelPosition), (0, _defineProperty2.default)(_ref, "".concat(prefixCls, "-readonly"), this.readonly), _ref;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ })

/******/ })["default"]});;