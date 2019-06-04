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
/******/ 	return __webpack_require__(__webpack_require__.s = 261);
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

/***/ 191:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/auto-complete/autocomplete.vue?vue&type=template&id=6cac5d20&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.autocompleteCls }, [
    _c(
      "div",
      { class: _vm.showCls },
      [
        _vm.multiple
          ? [
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
              _vm._v(" "),
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tempValue,
                    expression: "tempValue"
                  }
                ],
                ref: "input",
                staticClass: "h-autocomplete-input h-input",
                attrs: {
                  disabled: _vm.disabled,
                  type: "text",
                  placeholder: _vm.showPlaceholder
                },
                domProps: { value: _vm.tempValue },
                on: {
                  focus: _vm.focus,
                  blur: function($event) {
                    $event.stopPropagation()
                    return _vm.blur($event)
                  },
                  paste: _vm.paste,
                  keyup: _vm.handle,
                  keydown: _vm.keydownHandle,
                  keypress: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.enterHandle($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tempValue = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm.loading
                ? _c("i", { staticClass: "h-icon-loading" })
                : _vm._e()
            ]
          : _vm._e(),
        _vm._v(" "),
        !_vm.multiple
          ? [
              _c("input", {
                directives: [
                  {
                    name: "model",
                    rawName: "v-model",
                    value: _vm.tempValue,
                    expression: "tempValue"
                  }
                ],
                ref: "input",
                staticClass: "h-autocomplete-input h-input",
                attrs: {
                  type: "text",
                  disabled: _vm.disabled,
                  placeholder: _vm.showPlaceholder
                },
                domProps: { value: _vm.tempValue },
                on: {
                  focus: _vm.focus,
                  paste: _vm.paste,
                  blur: function($event) {
                    $event.stopPropagation()
                    return _vm.blur($event)
                  },
                  keyup: _vm.handle,
                  keypress: function($event) {
                    if (
                      !$event.type.indexOf("key") &&
                      _vm._k($event.keyCode, "enter", 13, $event.key, "Enter")
                    ) {
                      return null
                    }
                    return _vm.enterHandle($event)
                  },
                  input: function($event) {
                    if ($event.target.composing) {
                      return
                    }
                    _vm.tempValue = $event.target.value
                  }
                }
              }),
              _vm._v(" "),
              _vm.loading
                ? _c("i", { staticClass: "h-icon-loading" })
                : _vm.tempValue && !_vm.disabled
                ? _c("i", {
                    staticClass: "h-icon-close text-hover",
                    on: { mousedown: _vm.clear }
                  })
                : _vm._e()
            ]
          : _vm._e()
      ],
      2
    ),
    _vm._v(" "),
    _c("div", { class: _vm.groupCls }, [
      _vm.isShow
        ? _c(
            "ul",
            { staticClass: "h-autocomplete-ul" },
            [
              _vm._t("top", null, { results: _vm.results }),
              _vm._v(" "),
              _vm._l(_vm.results, function(result, index) {
                return _c(
                  "li",
                  {
                    key: result.key,
                    staticClass: "h-autocomplete-item",
                    class: {
                      "h-autocomplete-item-selected": index == _vm.nowSelected
                    },
                    on: {
                      mousedown: function($event) {
                        return _vm.picker(result)
                      }
                    }
                  },
                  [
                    !!result.html
                      ? _c("div", {
                          domProps: { innerHTML: _vm._s(result.html) }
                        })
                      : !_vm.$scopedSlots.item
                      ? [_vm._v(_vm._s(result.title))]
                      : _vm._t("item", null, { item: result })
                  ],
                  2
                )
              }),
              _vm._v(" "),
              _vm.results.length == 0 && _vm.showDropdownWhenNoResult
                ? _c("li", { staticClass: "h-autocomplete-empty-content" }, [
                    _vm._v(_vm._s(_vm.showEmptyContent))
                  ])
                : _vm._e(),
              _vm._v(" "),
              _vm._t("bottom", null, { results: _vm.results })
            ],
            2
          )
        : _vm._e()
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/auto-complete/autocomplete.vue?vue&type=template&id=6cac5d20&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 261:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(262);


/***/ }),

/***/ 262:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _autocomplete = _interopRequireDefault(__webpack_require__(263));

var _default = _autocomplete.default;
exports.default = _default;

/***/ }),

/***/ 263:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _autocomplete_vue_vue_type_template_id_6cac5d20___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(191);
/* harmony import */ var _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(31);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _autocomplete_vue_vue_type_template_id_6cac5d20___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _autocomplete_vue_vue_type_template_id_6cac5d20___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/auto-complete/autocomplete.vue"
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

/***/ 31:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(32);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_autocomplete_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 32:
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
var prefix = 'h-autocomplete';
var _default = {
  name: 'hAutoComplete',
  mixins: [_locale.default],
  props: {
    multiple: {
      type: Boolean,
      default: false
    },
    mustMatch: {
      type: Boolean,
      default: true
    },
    autoSelectFirst: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key' // object, title

    },
    disabled: {
      type: Boolean,
      default: false
    },
    datas: [Array, Object],
    dict: String,
    placeholder: {
      type: String
    },
    value: [Number, String, Array, Object],
    option: Object,
    show: String,
    emptyContent: {
      type: [String, Object]
    },
    config: String,
    className: String,
    delay: {
      type: Number,
      default: 100
    },
    endInput: String,
    showDropdownWhenNoResult: {
      type: Boolean,
      default: true
    }
  },
  data: function data() {
    return {
      html: 'autocomplete_rander_html',
      focusing: false,
      objects: [],
      object: {
        key: null,
        title: this.show,
        value: null
      },
      nowSelected: -1,
      tempValue: null,
      searchValue: null,
      oldValue: this.value,
      focusValue: null,
      loading: false,
      content: null,
      loadDatas: [],
      isShow: false,
      searchTimeout: null,
      el: null,
      lastTrigger: null
    };
  },
  watch: {
    value: function value() {
      if (this.oldValue == this.value) {
        return;
      }

      this.parse();
    },
    disabled: function disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    },
    nowSelected: function nowSelected() {
      var _this = this;

      this.$nextTick(function () {
        if (_this.content && _this.nowSelected > -1) {
          var dom = _this.content.querySelector('.h-autocomplete-item-selected');

          var uldom = _this.content.querySelector('.h-autocomplete-ul');

          if (dom && uldom) {
            if (dom.offsetTop + dom.offsetHeight - _this.content.scrollTop > _this.content.offsetHeight) {
              _this.content.scrollTop = dom.offsetTop + dom.offsetHeight - _this.content.offsetHeight;
            } else if (dom.offsetTop - _this.content.scrollTop < 0) {
              _this.content.scrollTop = dom.offsetTop;
            }
          }
        }
      });
    }
  },
  beforeMount: function beforeMount() {
    this.parse();
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
    var _this2 = this;

    this.$nextTick(function () {
      var el = _this2.el = _this2.$el.querySelector('.h-autocomplete-show');

      _this2.content = _this2.$el.querySelector('.h-autocomplete-group');
      var that = _this2;
      _this2.dropdown = new _dropdown.default(el, {
        trigger: '',
        triggerOnce: true,
        content: _this2.content,
        disabled: _this2.disabled,
        equalWidth: true,
        events: {
          show: function show() {
            that.isShow = true;
          }
        }
      });
    });
  },
  methods: {
    getKey: function getKey(key) {
      return key + Math.random();
    },
    parse: function parse() {
      var _this3 = this;

      this.tempValue = null;

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
        var value = null;

        if (this.type == 'key') {
          if (!_utils.default.isNull(this.value)) {
            if (!this.show && (this.dict || this.datas) && this.results) {
              var result = this.results.filter(function (item) {
                return item[_this3.param.keyName] == _this3.value;
              });

              if (result.length > 0) {
                value = result[0];
              }
            }

            if (!value) {
              var _value;

              value = (_value = {}, (0, _defineProperty2.default)(_value, this.param.keyName, this.value), (0, _defineProperty2.default)(_value, this.param.titleName, this.show), _value);
            }
          }
        } else if (this.type == 'title') {
          if (!_utils.default.isNull(this.value)) {
            var _value2;

            value = (_value2 = {}, (0, _defineProperty2.default)(_value2, this.param.keyName, this.value), (0, _defineProperty2.default)(_value2, this.param.titleName, this.value), _value2);
          }
        } else {
          value = this.value;
        }

        if (_utils.default.isNull(value)) {
          this.object = {
            key: null,
            title: null,
            value: null
          };
        } else {
          _utils.default.extend(this.object, this.getValue(value));
        }

        this.tempValue = this.object.title;
      }

      this.oldValue = this.value;
    },
    getDisposeValue: function getDisposeValue() {
      var inputValue = null;

      if (this.type == 'key' || this.type == 'title') {
        inputValue = this.tempValue;
      } else if (!_utils.default.isBlank(this.tempValue)) {
        inputValue = (0, _defineProperty2.default)({}, this.param.titleName, this.tempValue);
      } else {
        inputValue = null;
      }

      return inputValue;
    },
    dispose: function dispose() {
      var value = null;
      var inputValue = this.getDisposeValue();

      if (this.multiple) {
        value = [];

        if (_utils.default.isArray(this.objects) && this.objects.length > 0) {
          var _iteratorNormalCompletion2 = true;
          var _didIteratorError2 = false;
          var _iteratorError2 = undefined;

          try {
            for (var _iterator2 = this.objects[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
              var o = _step2.value;
              value.push(this.getV(o));
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

        return value;
      } else {
        if (this.mustMatch) {
          value = this.getV(this.object);
        } else {
          if (!_utils.default.isNull(this.object.key) && this.object.key !== '') {
            if (this.type == 'key') {
              value = this.object.key;
            } else if (this.type == 'title') {
              value = this.object.title;
            } else {
              value = _utils.default.copy(this.object.value);
            }
          } else if (!_utils.default.isNull(inputValue)) {
            value = inputValue;
            this.object.title = this.tempValue;
          }
        }

        return value;
      }
    },
    getV: function getV(object) {
      if (this.type == 'key') {
        return object.key;
      } else if (this.type == 'title') {
        return object.title;
      } else {
        return object.value;
      }
    },
    getValue: function getValue(item) {
      if (_utils.default.isFunction(this.param.getValue)) {
        return this.param.getValue.call(this.param, item);
      } else {
        if (!_utils.default.isObject(item) && this.type == 'object') {
          return _utils.default.getValue((0, _defineProperty2.default)({}, this.param.titleName, item), this.param);
        } else {
          return _utils.default.getValue(item, this.param);
        }
      }
    },
    focus: function focus(event) {
      this.lastTrigger = null;
      this.focusing = true;
      this.focusValue = event.target.value;
      if (this.multiple) this.searchValue = null;
      this.search();
    },
    focusData: function focusData(value) {
      this.focusValue = this.object.title;
      if (this.multiple) this.searchValue = null;
    },
    paste: function paste(event) {
      var _this4 = this;

      setTimeout(function () {
        _this4.search();
      }, 0);
    },
    blur: function blur(event) {
      this.focusing = false;
      if (this.lastTrigger == 'picker' || this.lastTrigger == 'clear') return;
      var nowValue = event.target.value;
      var focusValue = this.focusValue;

      if (focusValue !== nowValue) {
        if (this.mustMatch) {
          if (this.focusValue != '' && !this.multiple) {
            this.object = {
              key: null,
              title: null,
              value: null
            };
            this.setvalue('blur');
          } else {
            this.tempValue = null;
          }
        } else {
          if (nowValue) {
            this.objects.push(this.getValue(nowValue));
          }

          this.setvalue('blur');
        }
      }

      this.loading = false;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }
    },
    keydownHandle: function keydownHandle(event) {
      var code = event.keyCode || event.which || event.charCode;

      if (code == 8 && event.target.value === '' && this.objects.length > 0) {
        this.remove(this.objects[this.objects.length - 1]);
      } else if (this.endInput && event.key == this.endInput) {
        event.preventDefault();
        this.enterHandle(event);
      }
    },
    handle: function handle(event) {
      var code = event.keyCode || event.which || event.charCode;

      if (code == 38) {
        if (this.nowSelected > 0) {
          this.nowSelected -= 1;
        }
      } else if (code == 40) {
        if (this.nowSelected < this.results.length - 1) {
          this.nowSelected += 1;
        }
      } else if (code == 13) {// compatible ie，use enterHandle handle。
      } else {
        this.search();
      }
    },
    enterHandle: function enterHandle(event) {
      var nowValue = this.tempValue = event.target.value;
      event.preventDefault();

      if (this.nowSelected >= 0) {
        this.add(this.results[this.nowSelected]);
        this.setvalue('enter');
      } else {
        if (!this.mustMatch && this.multiple && nowValue) {
          this.objects.push(this.getValue(nowValue));
        }

        this.setvalue('enter');
      }
    },
    search: function search() {
      var _this5 = this;

      var target = this.$refs.input;
      var value = target.value;
      this.tempValue = value || null;

      if (value != this.object.title && this.object.title) {
        this.object.key = null;
        this.object.title = null;
        this.object.value = null;
      }

      this.loading = false;

      if (this.searchTimeout) {
        clearTimeout(this.searchTimeout);
      }

      if (value.length >= this.param.minWord) {
        this.searchTimeout = setTimeout(function () {
          _this5.updateDropdown();

          if (_utils.default.isFunction(_this5.param.loadData)) {
            _this5.loading = true;

            _this5.param.loadData.call(_this5.param, value, function (datas) {
              if (target.value === value) {
                _this5.loading = false;
                _this5.loadDatas = datas;

                _this5.updateDropdown();

                _this5.nowSelected = _this5.autoSelectFirst ? 0 : -1;
              }
            }, function (_) {
              _this5.loading = false;
            });
          } else {
            _this5.nowSelected = _this5.autoSelectFirst ? 0 : -1;
          }
        }, this.delay);
        this.searchValue = value;
        this.dropdown.update();
      } else {
        this.dropdown.hide();
      }
    },
    updateDropdown: function updateDropdown() {
      var _this6 = this;

      this.$nextTick(function () {
        if (_this6.dropdown) {
          if (_this6.results.length == 0 && !_this6.showDropdownWhenNoResult) {
            _this6.dropdown.hide();
          } else {
            _this6.dropdown.show();

            _this6.dropdown.update();
          }
        }
      });
    },
    add: function add(data) {
      if (this.multiple) {
        this.objects.push(_utils.default.copy(data));
      } else {
        if (data === null || data === undefined) {
          this.object = {
            key: null,
            title: null,
            value: null
          };
        } else {
          this.object = _utils.default.copy(data);
        }
      }

      this.tempValue = null;
    },
    remove: function remove(object) {
      this.objects.splice(this.objects.indexOf(object), 1);
      this.setvalue('remove');
    },
    picker: function picker(data) {
      this.add(data);
      this.setvalue('picker');
    },
    setvalue: function setvalue(trigger) {
      var _this7 = this;

      if (this.disabled) return; // log('setvalue', trigger)

      this.lastTrigger = trigger;
      this.nowSelected = -1;
      var value = this.oldValue = this.dispose();
      this.focusValue = null;
      this.focusData();

      if (this.multiple) {
        this.tempValue = null;
      } else {
        this.tempValue = this.object.title;
      } // if (this.mustMatch || this.object.key || this.multiple) {
      // }
      // this.focusValue = this.showValue;
      // if (this.object.key === null) this.object.title = this.showValue


      this.$emit('input', value, trigger);
      this.$emit('change', _utils.default.copy(this.multiple ? this.objects : this.object), trigger);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);

      if (trigger) {
        this.$emit(trigger, value);
      }

      this.dropdown.hide();
      setTimeout(function () {
        _this7.searchValue = null;
      }, 100);
    },
    hide: function hide() {
      this.loading = false;
      this.dropdown.hide();
    },
    clear: function clear() {
      this.tempValue = null;
      this.focusValue = null;
      this.object = {
        key: null,
        title: null,
        value: null
      };
      this.setvalue('clear');
    }
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      return this.placeholder || this.t('h.autoComplate.placeholder');
    },
    showEmptyContent: function showEmptyContent() {
      return this.emptyContent || this.t('h.autoComplate.emptyContent');
    },
    param: function param() {
      if (this.config) {
        return _utils.default.extend({}, _config.default.getOption('autocomplete.default'), _config.default.getOption("autocomplete.configs.".concat(this.config)), this.option);
      } else {
        return _utils.default.extend({}, _config.default.getOption('autocomplete.default'), this.option);
      }
    },
    autocompleteCls: function autocompleteCls() {
      var _ref;

      var autosize = !!this.noBorder;

      if (!autosize) {
        autosize = this.autosize;
      }

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefix), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-input-border"), !this.noBorder), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-no-autosize"), !autosize), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-disabled"), this.disabled), (0, _defineProperty2.default)(_ref, "focusing", this.focusing), _ref;
    },
    showCls: function showCls() {
      var _ref2;

      return _ref2 = {}, (0, _defineProperty2.default)(_ref2, "".concat(prefix, "-show"), true), (0, _defineProperty2.default)(_ref2, "".concat(this.className, "-show"), !!this.className), (0, _defineProperty2.default)(_ref2, "focusing", this.focusing), _ref2;
    },
    groupCls: function groupCls() {
      var _ref3;

      return _ref3 = {}, (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-group"), true), (0, _defineProperty2.default)(_ref3, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref3, "".concat(this.className, "-dropdown"), !!this.className), _ref3;
    },
    results: function results() {
      var _this8 = this;

      var datas = this.datas;

      if (this.dict) {
        datas = _config.default.getDict(this.dict);
      }

      if (_utils.default.isNull(datas)) {
        datas = this.loadDatas;
      } else {
        datas = _config.default.initOptions(datas, this);

        if (this.searchValue) {
          var searchValue = this.searchValue.toLowerCase();
          datas = datas.filter(function (item) {
            return (item.html || item[_this8.param.titleName] || '').toLowerCase().indexOf(searchValue) != -1;
          });
        }
      }

      if (this.objects.length > 0) {
        var keyArray = _utils.default.getArray(this.objects, 'key').filter(function (item) {
          return !_utils.default.isNull(item);
        });

        datas = datas.filter(function (item) {
          return keyArray.indexOf(item[_this8.param.keyName]) == -1;
        });
      }

      if (this.maxList) {
        datas.splice(0, this.maxList);
      }

      var results = [];
      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = datas[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var data = _step3.value;
          results.push(this.getValue(data));
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }

      return results;
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ })

/******/ })["default"]});;