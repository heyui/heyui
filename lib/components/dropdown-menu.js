define(["heyui/lib/utils/config","heyui/lib/components/dropdown-custom","heyui/lib/components/badge"], function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__167__, __WEBPACK_EXTERNAL_MODULE__168__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 330);
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

/***/ 167:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__167__;

/***/ }),

/***/ 168:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__168__;

/***/ }),

/***/ 240:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/dropdown-menu/dropdownmenu.vue?vue&type=template&id=6a747618&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "DropdownCustom",
    {
      ref: "dropdown",
      class: _vm.dropdownmenuCls,
      attrs: {
        button: _vm.button,
        delay: _vm.delay,
        trigger: _vm.trigger,
        equalWidth: _vm.equalWidth,
        toggleIcon: _vm.toggleIcon,
        placement: _vm.placement,
        disabled: _vm.disabled,
        className: _vm.className,
        offset: _vm.offset,
        showClass: "h-dropdownmenu-show"
      },
      on: { show: _vm.showEvent, hide: _vm.hideEvent }
    },
    [
      _vm._t("default"),
      _vm._v(" "),
      _c(
        "ul",
        {
          class: _vm.groupCls,
          style: _vm.groupStyle,
          attrs: { slot: "content" },
          slot: "content"
        },
        _vm._l(_vm.options, function(option) {
          return _c(
            "li",
            {
              key: option[_vm.key],
              staticClass: "h-dropdownmenu-item",
              class: {
                "h-dropdownmenu-item-divider": !!option.divider,
                disabled: !!option.divider || option.disabled
              },
              on: {
                click: function($event) {
                  return _vm.onclick($event, option)
                }
              }
            },
            [
              option[_vm.html]
                ? _c("div", {
                    domProps: { innerHTML: _vm._s(option[_vm.html]) }
                  })
                : [
                    option.icon ? _c("i", { class: option.icon }) : _vm._e(),
                    _vm._v(" "),
                    _c("span", [_vm._v(_vm._s(option[_vm.title]))])
                  ],
              _vm._v(" "),
              _vm.showCount && option.count
                ? _c("Badge", {
                    attrs: {
                      count: option.count,
                      "max-count": _vm.maxCount,
                      position: "right"
                    }
                  })
                : _vm._e()
            ],
            2
          )
        }),
        0
      )
    ],
    2
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/dropdown-menu/dropdownmenu.vue?vue&type=template&id=6a747618&
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

/***/ 330:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(331);


/***/ }),

/***/ 331:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _dropdownmenu = _interopRequireDefault(__webpack_require__(332));

var _default = _dropdownmenu.default;
exports.default = _default;

/***/ }),

/***/ 332:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _dropdownmenu_vue_vue_type_template_id_6a747618___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(240);
/* harmony import */ var _dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(79);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _dropdownmenu_vue_vue_type_template_id_6a747618___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _dropdownmenu_vue_vue_type_template_id_6a747618___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/dropdown-menu/dropdownmenu.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 79:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(80);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_dropdownmenu_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 80:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

var _dropdownCustom = _interopRequireDefault(__webpack_require__(167));

var _badge = _interopRequireDefault(__webpack_require__(168));

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
var prefix = 'h-dropdownmenu';
var _default2 = {
  name: 'hDropdownMenu',
  props: {
    dict: String,
    datas: [Array, Object],
    trigger: {
      type: String,
      // click,hover,contextMenu`
      default: 'click'
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
      default: 'bottom-start'
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
      default: 'h-dropdownmenu-default'
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
    offset: [String, Number],
    button: {
      type: Boolean,
      default: false
    }
  },
  data: function data() {
    return {
      key: this.keyName,
      title: this.titleName,
      html: 'dropdownmenuHtml',
      isShow: false,
      el: null
    };
  },
  mounted: function mounted() {},
  beforeDestroy: function beforeDestroy() {},
  methods: {
    onclick: function onclick(event, option) {
      if (option.disabled) return;
      this.$emit('onclick', option[this.key], option, event);
      this.$emit('click', option[this.key], option, event);
      this.$refs.dropdown.hide();
    },
    showEvent: function showEvent(event) {
      this.$emit('show', event);
    },
    hideEvent: function hideEvent(event) {
      this.$emit('hide', event);
    }
  },
  computed: {
    dropdownmenuCls: function dropdownmenuCls() {
      return (0, _defineProperty2.default)({}, "".concat(prefix), true);
    },
    groupStyle: function groupStyle() {
      var styles = {};

      if (this.width) {
        styles.width = "".concat(this.width, "px");
      }

      return styles;
    },
    showCls: function showCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefix, "-show"), true), (0, _defineProperty2.default)(_ref2, "".concat(prefix, "-disabled"), !!this.disabled), (0, _defineProperty2.default)(_ref2, this.className, true), _ref2;
    },
    groupCls: function groupCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(this.className, "-dropdown"), !!this.className), (0, _defineProperty2.default)(_ref3, 'h-dropdownmenu-group', true), _ref3;
    },
    options: function options() {
      if (!this.datas && !this.dict) {
        console.error('[HeyUI Error] Dropdownmenu Component: Datas or dict parameters need to be defined at least.');
        return [];
      }

      var datas = this.datas;

      if (this.dict) {
        datas = _config.default.getDict(this.dict);
      }

      datas = _config.default.initOptions(datas, this);
      return datas;
    }
  },
  components: {
    Badge: _badge.default,
    DropdownCustom: _dropdownCustom.default
  }
};
exports.default = _default2;

/***/ })

/******/ })["default"]});;