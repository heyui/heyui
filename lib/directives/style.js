define(["heyui/lib/utils/utils"], function(__WEBPACK_EXTERNAL_MODULE__2__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 462);
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

/***/ 462:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(463);


/***/ }),

/***/ 463:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(__webpack_require__(2));

var _default = {
  height: {
    inserted: function inserted(el, binding) {
      if (binding.value) {
        el.style.height = binding.value + (String(binding.value).endsWith('%') ? '' : 'px');
      }
    },
    unbind: function unbind(el) {
      el.style.height = null;
    }
  },
  width: {
    inserted: function inserted(el, binding) {
      if (binding.value) {
        el.style.width = binding.value + (String(binding.value).endsWith('%') ? '' : 'px');
      }
    },
    unbind: function unbind(el) {
      el.style.width = null;
    }
  },
  padding: {
    inserted: function inserted(el, binding) {
      if (binding.value) {
        el.style.padding = binding.value + (String(binding.value).endsWith('%') ? '' : 'px');
      }
    },
    unbind: function unbind(el) {
      el.style.padding = null;
    }
  },
  margin: {
    inserted: function inserted(el, binding) {
      if (binding.value) {
        el.style.margin = binding.value + (String(binding.value).endsWith('%') ? '' : 'px');
      }
    },
    unbind: function unbind(el) {
      el.style.margin = null;
    }
  },
  font: {
    inserted: function inserted(el, binding) {
      if (binding && binding.value) {
        el.style.fontSize = "".concat(binding.value, "px");
      }
    },
    unbind: function unbind(el) {
      el.style.fontSize = null;
    }
  },
  color: {
    inserted: function inserted(el, binding) {
      var color = binding.value || binding.arg || binding.expression;

      if (color.startsWith('#')) {
        el.style.color = color;
      } else {
        _utils.default.addClass(el, "".concat(color, "-color"));
      }
    },
    unbind: function unbind(el) {
      el.style.color = null;
    }
  },
  bgColor: {
    inserted: function inserted(el, binding) {
      var color = binding.value || binding.arg;

      if (color.startsWith('#')) {
        el.style.backgroundColor = color;
      } else {
        _utils.default.addClass(el, "bg-".concat(color, "-color"));
      }
    },
    unbind: function unbind(el) {
      el.style.backgroundColor = null;
    }
  }
};
exports.default = _default;

/***/ })

/******/ })["default"]});;