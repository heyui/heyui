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
/******/ 	return __webpack_require__(__webpack_require__.s = 593);
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

/***/ 593:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(594);


/***/ }),

/***/ 594:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _utils = _interopRequireDefault(__webpack_require__(2));

function debounce(func) {
  var wait = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
  var options = arguments.length > 2 ? arguments[2] : undefined;
  var nativeMax = Math.max;
  var nativeMin = Math.min;
  var lastArgs;
  var lastThis;
  var maxWait;
  var result;
  var timerId;
  var lastCallTime; // func 上一次执行的时间

  var lastInvokeTime = 0;
  var leading = false;
  var maxing = false;
  var trailing = true; // func必须是函数

  if (!_utils.default.isFunction(func)) {
    throw new TypeError('debounce: func is not Function');
  } // 对options中传入参数的处理


  if (_utils.default.isObject(options)) {
    leading = !!options.leading;
    maxing = 'maxWait' in options;
    maxWait = maxing ? nativeMax(options.maxWait || 0, wait) : maxWait;
    trailing = 'trailing' in options ? !!options.trailing : trailing;
  } // 执行要被触发的函数


  function invokeFunc(time) {
    var args = lastArgs;
    var thisArg = lastThis;
    lastArgs = lastThis = undefined;
    lastInvokeTime = time;
    result = func.apply(thisArg, args);
    return result;
  } // 在leading edge阶段执行函数


  function leadingEdge(time) {
    // Reset any `maxWait` timer.
    lastInvokeTime = time; // 为 trailing edge 触发函数调用设定定时器

    timerId = setTimeout(timerExpired, wait); // leading = true 执行函数

    return leading ? invokeFunc(time) : result;
  } // 剩余时间


  function remainingWait(time) {
    // 距离上次debounced函数被调用的时间
    var timeSinceLastCall = time - lastCallTime; // 距离上次函数被执行的时间

    var timeSinceLastInvoke = time - lastInvokeTime; // 用 wait 减去 timeSinceLastCall 计算出下一次trailing的位置

    var result = wait - timeSinceLastCall; // 两种情况
    // 有maxing: 比较出下一次maxing和下一次trailing的最小值，作为下一次函数要执行的时间
    // 无maxing: 在下一次trailing时执行timerExpired

    return maxing ? nativeMin(result, maxWait - timeSinceLastInvoke) : result;
  } // 根据时间判断 func 能否被执行


  function shouldInvoke(time) {
    var timeSinceLastCall = time - lastCallTime;
    var timeSinceLastInvoke = time - lastInvokeTime; // 几种满足条件的情况

    return lastCallTime === undefined || timeSinceLastCall >= wait || timeSinceLastCall < 0 || maxing && timeSinceLastInvoke >= maxWait; // 超过最大等待时间
  } // 在 trailing edge 且时间符合条件时，调用 trailingEdge函数，否则重启定时器


  function timerExpired() {
    var time = new Date().getTime();

    if (shouldInvoke(time)) {
      return trailingEdge(time);
    } // 重启定时器


    timerId = setTimeout(timerExpired, remainingWait(time));
  } // 在trailing edge阶段执行函数


  function trailingEdge(time) {
    timerId = undefined; // 有lastArgs才执行，
    // 意味着只有 func 已经被 debounced 过一次以后才会在 trailing edge 执行

    if (trailing && lastArgs) {
      return invokeFunc(time);
    } // 每次 trailingEdge 都会清除 lastArgs 和 lastThis，目的是避免最后一次函数被执行了两次
    // 举个例子：最后一次函数执行的时候，可能恰巧是前一次的 trailing edge，函数被调用，而这个函数又需要在自己时延的 trailing edge 触发，导致触发多次


    lastArgs = lastThis = undefined;
    return result;
  } // cancel方法


  function cancel() {
    if (timerId !== undefined) {
      clearTimeout(timerId);
    }

    lastInvokeTime = 0;
    lastArgs = lastCallTime = lastThis = timerId = undefined;
  } // flush方法--立即调用


  function flush() {
    return timerId === undefined ? result : trailingEdge(new Date().getTime());
  }

  function debounced() {
    var time = new Date().getTime(); // 是否满足时间条件

    var isInvoking = shouldInvoke(time);
    lastArgs = arguments;
    lastThis = this;
    lastCallTime = time; // 函数被调用的时间
    // 无timerId的情况有两种：
    // 1.首次调用
    // 2.trailingEdge执行过函数

    if (isInvoking) {
      if (timerId === undefined) {
        return leadingEdge(lastCallTime);
      }

      if (maxing) {
        // Handle invocations in a tight loop.
        timerId = setTimeout(timerExpired, wait);
        return invokeFunc(lastCallTime);
      }
    } // 负责一种case：trailing 为 true 的情况下，在前一个 wait 的 trailingEdge 已经执行了函数；
    // 而这次函数被调用时 shouldInvoke 不满足条件，因此要设置定时器，在本次的 trailingEdge 保证函数被执行


    if (timerId === undefined) {
      timerId = setTimeout(timerExpired, wait);
    }

    return result;
  }

  debounced.cancel = cancel;
  debounced.flush = flush;
  return debounced;
}

var _default = debounce;
exports.default = _default;

/***/ })

/******/ })["default"]});;