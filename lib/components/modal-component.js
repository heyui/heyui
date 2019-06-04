define(["heyui/lib/utils/config"], function(__WEBPACK_EXTERNAL_MODULE__4__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 370);
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

/***/ 105:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(106);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 106:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

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
var prefix = 'h-modal';
var notifyprefix = 'h-notify';
var _default2 = {
  name: 'hModalComponent',
  props: {
    hasCloseIcon: {
      type: Boolean,
      default: true
    },
    hasMask: {
      type: Boolean,
      default: true
    },
    hasDivider: {
      type: Boolean,
      default: function _default() {
        return _config.default.getOption('modal', 'hasDivider');
      }
    },
    closeOnMask: {
      type: Boolean,
      default: true
    },
    middle: {
      type: Boolean,
      default: false
    },
    value: {
      type: Boolean,
      default: false
    },
    component: Object,
    propsData: [Boolean, Object, String, Array]
  },
  watch: {
    value: function value() {
      var _this = this;

      if (this.value) {
        this.el.style.display = 'block';
        this.nowComponent = this.$options.propsData.component;

        if (this.hasMask) {
          var body = document.documentElement;
          var scrollWidth = window.innerWidth - body.clientWidth;
          body.style.overflow = 'hidden';
          body.style.paddingRight = "".concat(scrollWidth, "px");
        }

        setTimeout(function () {
          _this.isOpened = _this.value;
        }, 100);
      } else {
        this.isOpened = this.value;
        var _body = document.documentElement;
        _body.style.overflow = '';
        _body.style.paddingRight = '';
        setTimeout(function () {
          _this.el.style.display = 'none';
          _this.nowComponent = '';
        }, 200);
      }
    }
  },
  data: function data() {
    return {
      nowComponent: '',
      isOpened: this.value
    };
  },
  beforeDestroy: function beforeDestroy() {
    var el = this.el;
    el.style.display = 'none';
    this.$el.appendChild(el);
  },
  mounted: function mounted() {
    var _this2 = this;

    this.$nextTick(function () {
      _this2.el = _this2.$el.firstChild;
      document.body.appendChild(_this2.el);

      if (!_this2.value) {
        _this2.el.style.display = 'none';
      }
    });
  },
  methods: {
    trigger: function trigger(name, data) {
      this.$emit(name, data);
    },
    close: function close() {
      var _this3 = this;

      this.isOpened = false;
      setTimeout(function () {
        _this3.el.style.display = 'none';
        _this3.nowComponent = '';
      }, 200);
      this.$emit('input', false);
    },
    setvalue: function setvalue(fromMask) {
      if (!fromMask || fromMask && this.hasMask && this.closeOnMask) {
        this.$emit('input', !this.value);
      }
    }
  },
  computed: {
    contentCls: function contentCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(notifyprefix, "-content"), true), (0, _defineProperty2.default)(_ref, "".concat(notifyprefix, "-content-component"), true), _ref;
    },
    containerCls: function containerCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(notifyprefix, "-container"), true), (0, _defineProperty2.default)(_ref2, "".concat(notifyprefix, "-container-center"), !!this.middle), _ref2;
    },
    noticeCls: function noticeCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, prefix, true), (0, _defineProperty2.default)(_ref3, notifyprefix, true), (0, _defineProperty2.default)(_ref3, "".concat(notifyprefix, "-show"), this.isOpened), (0, _defineProperty2.default)(_ref3, "".concat(notifyprefix, "-has-mask"), this.hasMask), (0, _defineProperty2.default)(_ref3, "".concat(notifyprefix, "-has-close"), this.hasCloseIcon), (0, _defineProperty2.default)(_ref3, "".concat(notifyprefix, "-has-divider"), this.hasDivider), _ref3;
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ 239:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/modal-component/modalcomponent.vue?vue&type=template&id=22a35c72&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c("div", { class: _vm.noticeCls }, [
      _vm.hasMask
        ? _c("div", {
            staticClass: "h-notify-mask",
            on: {
              click: function($event) {
                return _vm.setvalue(true)
              }
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        {
          class: { "h-notify-body": !!_vm.hasMask },
          on: {
            click: function($event) {
              if ($event.target !== $event.currentTarget) {
                return null
              }
              return _vm.setvalue(true)
            }
          }
        },
        [
          _c(
            "div",
            { class: _vm.containerCls },
            [
              _c("span", {
                staticClass: "h-notify-close h-icon-close",
                on: {
                  click: function($event) {
                    return _vm.setvalue(false)
                  }
                }
              }),
              _vm._v(" "),
              _c(_vm.nowComponent, {
                tag: "component",
                class: _vm.contentCls,
                attrs: { param: _vm.propsData, params: _vm.propsData },
                on: { event: _vm.trigger, close: _vm.close }
              })
            ],
            1
          )
        ]
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/modal-component/modalcomponent.vue?vue&type=template&id=22a35c72&
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

/***/ 370:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(371);


/***/ }),

/***/ 371:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _modalcomponent = _interopRequireDefault(__webpack_require__(372));

var _default = _modalcomponent.default;
exports.default = _default;

/***/ }),

/***/ 372:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _modalcomponent_vue_vue_type_template_id_22a35c72___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(239);
/* harmony import */ var _modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(105);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _modalcomponent_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _modalcomponent_vue_vue_type_template_id_22a35c72___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _modalcomponent_vue_vue_type_template_id_22a35c72___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/modal-component/modalcomponent.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ })["default"]});;