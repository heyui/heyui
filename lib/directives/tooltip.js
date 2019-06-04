define(["heyui/lib/utils/utils","heyui/lib/plugins/tooltip"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__27__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 464);
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

/***/ 27:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__27__;

/***/ }),

/***/ 464:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(465);


/***/ }),

/***/ 465:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tooltip = _interopRequireDefault(__webpack_require__(27));

var _utils = _interopRequireDefault(__webpack_require__(2));

var getContent = function getContent(el, vnode) {
  var param = {};
  var attrs = vnode.data.attrs || {};
  if (attrs.content === '') return false;

  if (attrs.content) {
    param.content = attrs.content;
  }

  if (attrs.className) {
    param.className = attrs.className;
  }

  var ref = attrs['ref-el'];

  if (!vnode.context.$el.querySelector) {
    return false;
  }

  var refNode = vnode.context.$el.querySelector("[tmpl=".concat(ref, "]"));

  if (refNode) {
    param.content = refNode;
    param.html = true;
  } else if (param.content) {
    param.content = "<div class=\"h-tooltip-inner-content\">".concat(param.content, "</div>");
    param.html = true;
  } else if (el.innerText) {
    param.content = "<div class=\"h-tooltip-inner-content\">".concat(el.innerText, "</div>");
    param.html = true;
  }

  return param;
};

var init = function init(el, binding, vnode) {
  if (binding.value === false) {
    return;
  }

  var param = getContent(el, vnode);
  if (param == false) return;
  var attrs = vnode.data.attrs || {};
  param.container = document.body;
  param = _utils.default.initParam(param, attrs, ['placement', 'theme', 'delay', 'trigger']);
  el.tooltip = new _tooltip.default(el, param);
};

var _default = {
  inserted: function inserted(el, binding, vnode) {
    init(el, binding, vnode);
  },
  update: function update(el, binding, vnode) {
    if (el.tooltip) {
      vnode.context.$nextTick(function () {
        if (binding.value === false) {
          el.tooltip.destory();
          el.tooltip = null;
          return;
        }

        var param = getContent(el, vnode);

        if (param == false) {
          el.tooltip.destory();
        } else {
          el.tooltip.updateTemplate(param.content, param.html);
        }
      });
    } else {
      init(el, binding, vnode);
    }
  },
  unbind: function unbind(el) {
    if (el.tooltip) {
      el.tooltip.destory();
      delete el.tooltip;
    }
  }
};
exports.default = _default;

/***/ })

/******/ })["default"]});;