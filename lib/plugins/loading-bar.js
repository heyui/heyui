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
/******/ 	return __webpack_require__(__webpack_require__.s = 561);
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

/***/ 17:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 19:
/***/ (function(module, exports) {

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

module.exports = _createClass;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 561:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(562);


/***/ }),

/***/ 562:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(17));

var _createClass2 = _interopRequireDefault(__webpack_require__(19));

var _utils = _interopRequireDefault(__webpack_require__(2));

var prefixCls = 'h-loadingbar';

var LoadingBar =
/*#__PURE__*/
function () {
  function LoadingBar() {
    (0, _classCallCheck2.default)(this, LoadingBar);
    this.dom = null;
    this.timeout = null;
    this.inner = null;
    this.width = 0;
  }

  (0, _createClass2.default)(LoadingBar, [{
    key: "initDom",
    value: function initDom() {
      this.dom = document.createElement('div');
      this.dom.innerHTML = "<div class=\"".concat(prefixCls, "\"><div class=\"").concat(prefixCls, "-inner\"></div></div>");
      document.body.appendChild(this.dom);
      this.inner = this.dom.querySelector(".".concat(prefixCls, "-inner"));
    }
  }, {
    key: "start",
    value: function start() {
      if (!this.dom) {
        this.initDom();
      }

      _utils.default.addClass(this.inner, 'loading');

      this.loading(5, 90);
    }
  }, {
    key: "loading",
    value: function loading(step, end, callback) {
      var _this = this;

      if (this.width >= end) {
        if (_utils.default.isFunction(callback)) {
          callback.call(this);
        }

        return;
      }

      var nowStep = step;

      if (this.width / end > 0.7) {
        nowStep = step / 10;
      }

      if (this.timeout) clearTimeout(this.timeout);
      this.width = this.width + nowStep;
      this.width = Math.min(100, this.width);
      this.width = Math.max(0, this.width);
      this.inner.style.width = "".concat(this.width, "%");
      this.timeout = setTimeout(function () {
        _this.loading(step, end, callback);
      }, 200);
    }
  }, {
    key: "success",
    value: function success() {
      this.end(1);
    }
  }, {
    key: "end",
    value: function end(success) {
      var _this2 = this;

      if (!this.dom) {
        this.initDom();
      }

      this.loading(100, 100, function () {
        if (!success) {
          _utils.default.addClass(_this2.inner, 'error');
        }

        setTimeout(function () {
          _utils.default.removeClass(_this2.inner, 'loading');

          _utils.default.removeClass(_this2.inner, 'error');

          _this2.inner.style.width = '0';
          _this2.width = 0;
        }, 200);
      });
    }
  }, {
    key: "fail",
    value: function fail() {
      this.end(0);
    }
  }]);
  return LoadingBar;
}();

var $loadingBar = new LoadingBar();

function loadingBar() {
  return $loadingBar;
}

loadingBar.start = function () {
  $loadingBar.start();
};

loadingBar.success = function () {
  $loadingBar.success();
};

loadingBar.percent = function (value) {
  $loadingBar.percent(value);
};

loadingBar.fail = function () {
  $loadingBar.fail();
};

var _default = loadingBar;
exports.default = _default;

/***/ })

/******/ })["default"]});;