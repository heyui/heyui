define(["heyui/lib/utils/config","heyui/lib/locale","heyui/lib/filters/dictmapping","heyui/lib/filters/hlang","heyui/lib/directives/tooltip"], function(__WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__11__, __WEBPACK_EXTERNAL_MODULE__169__, __WEBPACK_EXTERNAL_MODULE__170__, __WEBPACK_EXTERNAL_MODULE__171__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 355);
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

/***/ 11:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__11__;

/***/ }),

/***/ 16:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 169:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__169__;

/***/ }),

/***/ 170:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__170__;

/***/ }),

/***/ 171:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__171__;

/***/ }),

/***/ 355:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(356);


/***/ }),

/***/ 356:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(16));

var _dictmapping = _interopRequireDefault(__webpack_require__(169));

var _hlang = _interopRequireDefault(__webpack_require__(170));

var _config = _interopRequireDefault(__webpack_require__(4));

var _locale = _interopRequireDefault(__webpack_require__(11));

var _tooltip = _interopRequireDefault(__webpack_require__(171));

/*
 * HeyUI JavaScript Library
 * https://www.heyui.top/
 *
 * Copyright © Lan 2017-present
 * Released under the MIT license
 *
 */
var directives = {
  tooltip: _tooltip.default
};
var filters = {
  dictMapping: _dictmapping.default,
  hlang: _hlang.default
};

var install = function install(Vue) {
  var opts = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
  if (install.installed) return;

  if (opts.locale) {
    _locale.default.use(opts.locale);
  }

  if (opts.i18n) {
    _locale.default.i18n(opts.i18n);
  }

  if (opts.components) {
    Object.keys(opts.components).forEach(function (key) {
      var component = opts.components[key];
      Vue.component(key, component);
      Vue.component("h-".concat(key.toLocaleLowerCase()), component);

      if (key.indexOf('h') !== 0) {
        Vue.component("h".concat(key), component);
      }
    });
  }

  Object.keys(filters).forEach(function (key) {
    Vue.filter(key, filters[key]);
  });
  Object.keys(directives).forEach(function (key) {
    Vue.directive(key, directives[key]);
  });

  if (opts.prototypes) {
    Object.keys(opts.prototypes).forEach(function (key) {
      Vue.prototype[key] = opts.prototypes[key];
    });
  }
};

var HeyUI = (0, _extends2.default)(_config.default, {
  dictMapping: _dictmapping.default
});
HeyUI.install = install;
var _default = HeyUI;
exports.default = _default;

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ })

/******/ })["default"]});;