define(["heyui/lib/utils/utils","heyui/lib/plugins/notify"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__22__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 563);
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

/***/ 22:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__22__;

/***/ }),

/***/ 563:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(564);


/***/ }),

/***/ 564:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notify = _interopRequireDefault(__webpack_require__(22));

var _utils = _interopRequireDefault(__webpack_require__(2));

var prefixCls = 'h-message';
var iconPrefixCls = 'h-icon';
var Default = {
  timeout: 3000
};
var iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error',
  loading: 'loading'
};
var iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red',
  loading: 'blue'
};
var messageDom = null;

function Message(content, timeout, type, onClose) {
  if (!messageDom) {
    messageDom = document.createElement('div');

    _utils.default.addClass(messageDom, "".concat(prefixCls, "-container"));

    document.body.appendChild(messageDom);
  }

  var param = {
    type: prefixCls,
    content: "<div><i class=\"".concat(iconPrefixCls, "-").concat(iconNames[type], " ").concat(iconColor[type], "-color\"></i>").concat(content, "</div>"),
    event: {
      close: onClose
    },
    timeout: timeout,
    parent: messageDom
  };
  param = _utils.default.extend({}, Default, param, true);
  if (param.timeout < 1) param.hasCloseIcon = true;
  return (0, _notify.default)(param);
}

function message(content, timeout, onClose) {
  if (_utils.default.isObject(content)) {
    return Message(content.text, content.timeout, content.type || 'info', content.onClose);
  }

  return Message(content, timeout, 'info', onClose);
}

message.info = function (content, timeout, onClose) {
  return Message(content, timeout, 'info', onClose);
};

message.success = function (content, timeout, onClose) {
  return Message(content, timeout, 'success', onClose);
};

message.warn = function (content, timeout, onClose) {
  return Message(content, timeout, 'warn', onClose);
};

message.error = function (content, timeout, onClose) {
  return Message(content, timeout, 'error', onClose);
};

message.loading = function (content, timeout, onClose) {
  return Message(content, timeout, 'loading', onClose);
};

message.config = function (options) {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

var _default = message;
exports.default = _default;

/***/ })

/******/ })["default"]});;