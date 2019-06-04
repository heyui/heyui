define(function() { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 258);
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

/***/ 224:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/affix/affix.vue?vue&type=template&id=6c408271&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", [
    _c(
      "div",
      { class: _vm.affixCls, style: _vm.affixStyle },
      [_vm._t("default")],
      2
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/affix/affix.vue?vue&type=template&id=6c408271&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 258:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(259);


/***/ }),

/***/ 259:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _affix = _interopRequireDefault(__webpack_require__(260));

var _default = _affix.default;
exports.default = _default;

/***/ }),

/***/ 260:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _affix_vue_vue_type_template_id_6c408271___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(224);
/* harmony import */ var _affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(29);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _affix_vue_vue_type_template_id_6c408271___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _affix_vue_vue_type_template_id_6c408271___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/affix/affix.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 29:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(30);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_affix_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

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

/***/ 30:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

//
//
//
//
//
//
//
var prefix = 'h-affix';
var _default = {
  name: 'hAffix',
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
  data: function data() {
    return {
      isFixed: false,
      fixPosition: 'top',
      containerDom: null,
      isAbsolute: !!this.container && !this.disabled,
      y: 0
    };
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.container) {
        _this.containerDom = _this.container.call();
      }

      window.addEventListener('scroll', _this.trigger, true);
      window.addEventListener('resize', _this.trigger);

      _this.refresh();
    });
  },
  beforeDestroy: function beforeDestroy() {
    window.removeEventListener('scroll', this.trigger, true);
    window.removeEventListener('resize', this.trigger);
  },
  watch: {
    offsetTop: function offsetTop() {
      this.refresh();
    },
    offsetBottom: function offsetBottom() {
      this.refresh();
    },
    fixedOffsetTop: function fixedOffsetTop() {
      this.refresh();
    },
    fixedOffsetBottom: function fixedOffsetBottom() {
      this.refresh();
    },
    disabled: function disabled() {
      if (this.disabled) {
        this.isFixed = false;
        this.isAbsolute = false;
      } else {
        this.refresh();
      }
    }
  },
  methods: {
    refresh: function refresh() {
      var evObj = document.createEvent('HTMLEvents');
      evObj.initEvent('scroll', true, true);
      document.body.dispatchEvent(evObj);
    },
    trigger: function trigger(event) {
      if (this.disabled) return;
      var el = this.$el.firstChild;
      if (event.target == el) return false;
      var original = this.isFixed;

      if (this.containerDom) {
        // let cFixedOffsetTop = this.cFixedOffsetTop;
        // let cFixedOffsetBottom = this.cFixedOffsetBottom;
        // let parentOffsetTop = this.offsetTop || 0;
        // let parentOffsetBottom = this.offsetBottom || 0;
        var position = el.getBoundingClientRect();
        var containerPosition = this.containerDom.getBoundingClientRect(); // let dis = containerPosition.top - this.y;

        this.y = containerPosition.top; // log('===========new===========')
        // log('dis', dis);
        // log('top isAbsolute', position.top - containerPosition.top < parentOffsetTop)
        // log('bottom isAbsolute', dis < 0 && containerPosition.bottom - position.bottom < parentOffsetBottom)
        // log('top isFixed', ( dis < 0 && position.top < cFixedOffsetTop && containerPosition.bottom > (cFixedOffsetTop + el.clientHeight + parentOffsetBottom)));
        // log('bottom isFixed', ( dis > 0 && window.innerHeight - position.bottom < cFixedOffsetBottom && containerPosition.top < (cFixedOffsetTop - parentOffsetTop)))

        if (containerPosition.top <= this.cFixedOffsetTop - this.offsetTop && containerPosition.bottom >= position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom) {
          this.isFixed = true;
          this.isAbsolute = false;
          this.fixPosition = 'top';
        } else {
          if (containerPosition.top > this.cFixedOffsetTop - this.offsetTop || containerPosition.height < position.height) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'top';
          } else if (containerPosition.bottom < position.height + this.cFixedOffsetTop + this.cFixedOffsetBottom) {
            this.isFixed = false;
            this.isAbsolute = true;
            this.fixPosition = 'bottom';
          }
        }

        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      } else {
        if (!this.isFixed) {
          var _position = el.getBoundingClientRect();

          if (this.offsetTop !== undefined) {
            if (_position.top < this.offsetTop) {
              this.isFixed = true;
              this.fixPosition = 'top';
            }
          }

          if (!this.isFixed && this.offsetBottom != undefined) {
            if (window.innerHeight < _position.top + el.clientHeight + this.offsetBottom) {
              this.isFixed = true;
              this.fixPosition = 'bottom';
            }
          }
        } else if (el.parentNode) {
          var _position2 = el.parentNode.getBoundingClientRect();

          if (this.offsetTop !== undefined) {
            if (this.fixPosition == 'top' && _position2.top > this.offsetTop) {
              this.isFixed = false;
            }
          }

          if (this.isFixed && this.offsetBottom != undefined) {
            if (this.fixPosition == 'bottom' && window.innerHeight > _position2.top + el.clientHeight + this.offsetBottom) {
              this.isFixed = false;
            }
          }
        }

        if (original != this.isFixed) {
          this.$emit('onchange', this.isFixed);
          this.$emit('change', this.isFixed);
        }
      }
    }
  },
  computed: {
    cFixedOffsetTop: function cFixedOffsetTop() {
      return this.fixedOffsetTop || this.offsetTop;
    },
    cFixedOffsetBottom: function cFixedOffsetBottom() {
      return this.fixedOffsetBottom || this.offsetBottom;
    },
    affixCls: function affixCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, prefix, this.isFixed), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-absolute"), this.isAbsolute), _ref;
    },
    affixStyle: function affixStyle() {
      var param = {};

      if (this.isFixed) {
        if (this.fixPosition == 'top') {
          param.top = "".concat(this.cFixedOffsetTop, "px");
        } else {
          param.bottom = "".concat(this.cFixedOffsetBottom, "px");
        }
      }

      if (this.isAbsolute) {
        if (this.fixPosition == 'top') {
          param.top = "".concat(this.offsetTop, "px");
        } else {
          param.bottom = "".concat(this.offsetBottom, "px");
        }
      }

      return param;
    }
  }
};
exports.default = _default;

/***/ })

/******/ })["default"]});;