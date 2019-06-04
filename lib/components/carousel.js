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
/******/ 	return __webpack_require__(__webpack_require__.s = 282);
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

/***/ 204:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/carousel/carousel.vue?vue&type=template&id=c4ed0462&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "h-carousel" }, [
    _c(
      "div",
      {
        staticClass: "h-carousel-container",
        style: { height: _vm.height + "px" }
      },
      [
        _vm.effect == "scroll"
          ? _c(
              "div",
              {
                key: _vm.effect,
                staticClass: "h-carousel-list h-carousel-scroll-list",
                on: { mouseover: _vm.stopAutoplay, mouseout: _vm.startAutoplay }
              },
              _vm._l(_vm.carouselList, function(params, index) {
                return _c(
                  "div",
                  {
                    key: index,
                    staticClass: "h-carousel-item",
                    on: {
                      click: function($event) {
                        return _vm.clickTrigger(index, params)
                      }
                    }
                  },
                  [
                    !_vm.$scopedSlots.item
                      ? _c("div", {
                          staticClass: "h-carousel-bg",
                          class: { "h-carousel-bg-pointer": params.link },
                          style: {
                            backgroundImage: "url(" + params.image + ")"
                          }
                        })
                      : _vm._e(),
                    _vm._v(" "),
                    _vm._t("item", null, { carousel: params, index: index })
                  ],
                  2
                )
              }),
              0
            )
          : _c(
              "div",
              {
                key: _vm.effect,
                staticClass: "h-carousel-list",
                on: { mouseover: _vm.stopAutoplay, mouseout: _vm.startAutoplay }
              },
              [
                _c(
                  "transition",
                  { attrs: { name: "h-carousel-effect-" + _vm.effect } },
                  [
                    _c(
                      "div",
                      {
                        key: _vm.activeIndex,
                        staticClass: "h-carousel-item h-carousel-effect-item",
                        on: {
                          click: function($event) {
                            return _vm.clickTrigger(
                              _vm.activeIndex,
                              _vm.carouselItem
                            )
                          }
                        }
                      },
                      [
                        !_vm.$scopedSlots.item
                          ? _c("div", {
                              staticClass: "h-carousel-bg",
                              class: {
                                "h-carousel-bg-pointer": _vm.carouselItem.link
                              },
                              style: {
                                backgroundImage:
                                  "url(" + _vm.carouselItem.image + ")"
                              }
                            })
                          : _vm._e(),
                        _vm._v(" "),
                        _vm._t("item", null, { carousel: _vm.carouselItem })
                      ],
                      2
                    )
                  ]
                )
              ],
              1
            ),
        _vm._v(" "),
        _c("div", { staticClass: "h-carousel-arrow", class: _vm.arrowCls }, [
          _c("div", { staticClass: "h-icon-left", on: { click: _vm.prev } }),
          _vm._v(" "),
          _c("div", { staticClass: "h-icon-right", on: { click: _vm.next } })
        ])
      ]
    ),
    _vm._v(" "),
    _c(
      "ul",
      { staticClass: "h-carousel-pagination", class: _vm.paginationCls },
      _vm._l(_vm.datas, function(p, index) {
        return _c(
          "li",
          {
            key: index,
            staticClass: "h-carousel-pagination-item",
            class: { active: _vm.isActive(index) },
            on: {
              mouseover: function($event) {
                return _vm.triggerChange("hover", index + 1)
              },
              click: function($event) {
                return _vm.triggerChange("click", index + 1)
              }
            }
          },
          [
            _vm.$scopedSlots.page
              ? _vm._t("page", null, { carousel: p })
              : _c("span")
          ],
          2
        )
      }),
      0
    )
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/carousel/carousel.vue?vue&type=template&id=c4ed0462&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 282:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(283);


/***/ }),

/***/ 283:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _carousel = _interopRequireDefault(__webpack_require__(284));

var _default = _carousel.default;
exports.default = _default;

/***/ }),

/***/ 284:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _carousel_vue_vue_type_template_id_c4ed0462___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(204);
/* harmony import */ var _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(45);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _carousel_vue_vue_type_template_id_c4ed0462___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _carousel_vue_vue_type_template_id_c4ed0462___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/carousel/carousel.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 45:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(46);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_carousel_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));

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
  props: {
    height: {
      type: Number,
      default: 300
    },
    speed: {
      type: Number,
      default: 3000
    },
    autoplay: {
      type: Boolean,
      default: true
    },
    changeSpeed: {
      type: Number,
      default: 500
    },
    arrow: {
      type: String,
      default: 'hover'
    },
    pageTheme: {
      type: String,
      default: 'square'
    },
    datas: Array,
    isHoverStop: {
      type: Boolean,
      default: true
    },
    paginationTrigger: {
      type: String,
      default: 'click'
    },
    effect: {
      type: String,
      default: 'scroll'
    }
  },
  data: function data() {
    return {
      activeIndex: 1,
      scrollTimeout: null,
      redirectTimeout1: null,
      redirectTimeout2: null
    };
  },
  computed: {
    carouselList: function carouselList() {
      if (this.datas.length == 0) {
        return [];
      }

      var datas = this.datas;
      return [datas[this.datas.length - 1]].concat((0, _toConsumableArray2.default)(datas), [datas[0]]);
    },
    carouselItem: function carouselItem() {
      return this.carouselList[this.activeIndex - 1];
    },
    paginationCls: function paginationCls() {
      return "h-carousel-pagination-".concat(this.pageTheme);
    },
    arrowCls: function arrowCls() {
      return "h-carousel-arrow-".concat(this.arrow);
    }
  },
  watch: {
    autoplay: function autoplay() {
      if (this.autoplay) {
        this.startAutoplay(true);
      } else {
        this.stopAutoplay(true);
      }
    },
    effect: function effect() {
      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);
      this.init();
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      _this.init();
    });
  },
  beforeDestroy: function beforeDestroy() {
    clearTimeout(this.scrollTimeout);
    clearTimeout(this.redirectTimeout1);
    clearTimeout(this.redirectTimeout2);
    window.removeEventListener('resize', this.resizeEvent);
  },
  methods: {
    clickTrigger: function clickTrigger(index, data) {
      this.$emit('click', index, data);
    },
    isActive: function isActive(index) {
      var datas = this.datas;
      var activeIndex = this.activeIndex;
      return index + 1 == activeIndex || activeIndex == 0 && index == datas.length - 1 || activeIndex == datas.length + 1 && index == 0;
    },
    init: function init() {
      var _this2 = this;

      this.startAutoplay(true);
      setTimeout(function () {
        _this2.change({
          index: _this2.activeIndex,
          immediately: true
        });
      }, 300);
      window.addEventListener('resize', this.resizeEvent, false);
    },
    stopAutoplay: function stopAutoplay() {
      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if (this.isHoverStop || force) {
        clearTimeout(this.scrollTimeout);
      }
    },
    startAutoplay: function startAutoplay() {
      var _this3 = this;

      var force = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : false;

      if ((this.isHoverStop || force) && this.autoplay) {
        clearTimeout(this.scrollTimeout);
        this.scrollTimeout = setTimeout(function () {
          _this3.next();
        }, this.speed);
      }
    },
    resizeEvent: function resizeEvent() {
      this.change({
        index: this.activeIndex,
        immediately: true
      });
    },
    scroll: function scroll(index, immediately) {
      this.activeIndex = index;
      var itemWidth = this.$el.clientWidth;
      var width = index * itemWidth;

      switch (this.effect) {
        case 'scroll':
          var listDom = this.$el.querySelector('.h-carousel-scroll-list');

          if (immediately) {
            listDom.style.transitionDuration = "0ms";
          } else {
            listDom.style.transitionDuration = "".concat(this.changeSpeed, "ms");
          }

          listDom.style.transform = "translate3d(".concat(-width, "px, 0px, 0px)");
          break;

        default:
          break;
      }
    },
    change: function change(_ref) {
      var _this4 = this;

      var _ref$index = _ref.index,
          index = _ref$index === void 0 ? 1 : _ref$index,
          _ref$immediately = _ref.immediately,
          immediately = _ref$immediately === void 0 ? false : _ref$immediately;

      if (this.activeIndex == this.carouselList.length - 1) {
        this.scroll(1, true);
      } else if (this.activeIndex == 0) {
        this.scroll(this.carouselList.length - 2, true);
      }

      clearTimeout(this.scrollTimeout);
      clearTimeout(this.redirectTimeout1);
      clearTimeout(this.redirectTimeout2);

      if (immediately) {
        this.scroll(index, immediately);
      } else {
        this.scroll(index, immediately);
        this.$emit('change', index, this.carouselList[this.activeIndex]); // 当翻页到第一页的时候，默默切换至真实的第一页

        if (this.activeIndex == this.carouselList.length - 1) {
          this.redirectTimeout1 = setTimeout(function () {
            _this4.scroll(1, true);
          }, this.changeSpeed + 100);
        } else if (this.activeIndex == 0) {
          this.redirectTimeout2 = setTimeout(function () {
            _this4.scroll(_this4.carouselList.length - 2, true);
          }, this.changeSpeed + 100);
        }
      }

      this.startAutoplay(true);
    },
    changePageByStep: function changePageByStep(step) {
      var activeIndex = this.activeIndex + step;

      if (activeIndex >= this.carouselList.length) {
        activeIndex = 2;
      } else if (activeIndex < 0) {
        activeIndex = this.carouselList.length - 3;
      }

      this.change({
        index: activeIndex
      });
    },
    triggerChange: function triggerChange(triggerType, index) {
      if (this.paginationTrigger == triggerType) {
        this.change({
          index: index
        });
      }
    },
    prev: function prev() {
      this.changePageByStep(-1);
    },
    next: function next() {
      this.changePageByStep(1);
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