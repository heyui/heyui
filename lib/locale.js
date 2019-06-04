define(["heyui/lib/utils/utils","heyui/lib/locale/lang/zh-CN","heyui/lib/locale/lang/en-US","heyui/lib/utils/format"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__536__, __WEBPACK_EXTERNAL_MODULE__537__, __WEBPACK_EXTERNAL_MODULE__538__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 534);
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

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 534:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(535);


/***/ }),

/***/ 535:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _zhCN = _interopRequireDefault(__webpack_require__(536));

var _enUS = _interopRequireDefault(__webpack_require__(537));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _format = _interopRequireDefault(__webpack_require__(538));

var format = (0, _format.default)();
var lang = _zhCN.default;
var langs = {
  zh: _zhCN.default,
  en: _enUS.default
};
var nowLang = null;
var merged = {};
var vuei18n = null;

var i18nHandler = function i18nHandler() {
  vuei18n = this.$i18n || vuei18n;

  if (vuei18n && vuei18n.locale) {
    var _vuei18n;

    if (!merged[vuei18n.locale] || nowLang != vuei18n.locale) {
      merged[vuei18n.locale] = true;
      var localMessage = vuei18n.getLocaleMessage(vuei18n.locale) || {};
      var newLocalMessage = {};

      _utils.default.extend(true, newLocalMessage, langs[vuei18n.locale], localMessage);

      lang = newLocalMessage;
      vuei18n.setLocaleMessage(vuei18n.locale, newLocalMessage);
      nowLang = vuei18n.locale;
    }

    return (_vuei18n = vuei18n).t.apply(_vuei18n, arguments);
  }
};

var t = function t(path, options) {
  var value = i18nHandler.apply(this, arguments);
  if (value !== null && value !== undefined) return value;
  var array = path.split('.');
  var current = lang;

  for (var i = 0, j = array.length; i < j; i++) {
    var property = array[i];
    value = current[property];
    if (i === j - 1) return format(value, options);
    if (!value) return '';
    current = value;
  }

  return '';
};

var use = function use(l) {
  lang = l || lang;
};

var i18n = function i18n(initI18n) {
  vuei18n = initI18n;
};

var _default = {
  use: use,
  t: t,
  i18n: i18n
};
exports.default = _default;

/***/ }),

/***/ 536:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__536__;

/***/ }),

/***/ 537:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__537__;

/***/ }),

/***/ 538:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__538__;

/***/ })

/******/ })["default"]});;