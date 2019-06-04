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
/******/ 	return __webpack_require__(__webpack_require__.s = 567);
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

/***/ 567:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(568);


/***/ }),

/***/ 568:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _notify = _interopRequireDefault(__webpack_require__(22));

var _utils = _interopRequireDefault(__webpack_require__(2));

var prefixCls = 'h-notice';
var iconPrefixCls = 'h-icon';
var Vue = null;
var Default = {
  timeout: 4000
};
var iconNames = {
  info: 'info',
  success: 'success',
  warn: 'warn',
  error: 'error'
};
var iconColor = {
  info: 'blue',
  success: 'green',
  warn: 'yellow',
  error: 'red'
};
var noticeDom = null;

function Notice(originalParam) {
  if (!noticeDom) {
    noticeDom = document.createElement('div');

    _utils.default.addClass(noticeDom, "".concat(prefixCls, "-container"));

    document.body.appendChild(noticeDom);
  }

  var param = {
    type: prefixCls,
    hasCloseIcon: true,
    parent: noticeDom
  };

  if (new Set(Object.keys(iconNames)).has(originalParam.type)) {
    if (originalParam.title) originalParam.style = "".concat(prefixCls, "-has-icon");
    originalParam.content = "<i class=\"".concat(iconPrefixCls, "-").concat(iconNames[originalParam.type], " ").concat(iconColor[originalParam.type], "-color\"></i>").concat(originalParam.content);
    delete originalParam.type;
  } else if (originalParam.icon) {
    if (originalParam.title) originalParam.style = "".concat(prefixCls, "-has-icon");
    originalParam.content = "<i class=\"".concat(originalParam.icon, "\"></i>").concat(originalParam.content);
  }

  param = _utils.default.extend({}, Default, param, originalParam, true);
  param.Vue = Vue;
  return (0, _notify.default)(param);
}

function notice(param, timeout) {
  if (_utils.default.isString(param)) {
    return Notice({
      content: param,
      timeout: timeout
    });
  } else if (_utils.default.isObject(param)) {
    if (this) {
      if (this.$router) {
        param.$router = this.$router;
      }

      if (this.$i18n) {
        param.$i18n = this.$i18n;
      }
    }

    return Notice(param);
  }

  console.error('Notice params are incorrect:', param);
}

notice.config = function (options) {
  if (options.timeout != undefined) {
    Default.timeout = options.timeout;
  }
};

function noticeWithType(type, param, timeout) {
  if (_utils.default.isString(param)) {
    return Notice({
      content: param,
      timeout: timeout,
      type: type
    });
  } else if (_utils.default.isObject(param)) {
    if (type) param.type = type;
    return Notice(param);
  }

  console.error('Notice params are incorrect:', param);
}

notice.error = function (param, timeout) {
  return noticeWithType('error', param, timeout);
};

notice.warn = function (param, timeout) {
  return noticeWithType('warn', param, timeout);
};

notice.success = function (param, timeout) {
  return noticeWithType('success', param, timeout);
};

notice.info = function (param, timeout) {
  return noticeWithType('info', param, timeout);
};

var _default = notice;
exports.default = _default;

/***/ })

/******/ })["default"]});;