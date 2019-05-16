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
/******/ 	return __webpack_require__(__webpack_require__.s = 578);
/******/ })
/************************************************************************/
/******/ ({

/***/ 578:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(579);


/***/ }),

/***/ 579:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = _default;

/**
scrollIntoView(someElement, {
  time: 500, // half a second
  ease: function(value){
    return Math.pow(value,2) - value; // Do something weird.
  },
  validTarget: function(target, parentsScrolled){
    // Only scroll the first two elements that don't have the class "dontScroll"
    return parentsScrolled < 2 && target !== window && !target.matches('.dontScroll');
  },
  align:{
    top: 0 to 1, default 0.5 (center)
    left: 0 to 1, default 0.5 (center)
    topOffset: pixels to offset top alignment
    leftOffset: pixels to offset left alignment
  },
  isScrollable: function(target, defaultIsScrollable){
    // By default scroll-into-view will only attempt to scroll elements that have overflow not set to `"hidden"` and who's scroll width/height is larger than their client height.
    // You can override this check by passing an `isScrollable` function to settings:
    return defaultIsScrollable(target) || ~target.className.indexOf('scrollable');
  }
});
*/
var COMPLETE = 'COMPLETE';
var CANCELED = 'CANCELED';

function requestAnimation(task) {
  if ('requestAnimationFrame' in window) {
    return window.requestAnimationFrame(task);
  }

  setTimeout(task, 16);
}

function setElementScroll(element, x, y) {
  if (element === window) {
    element.scrollTo(x, y);
  } else {
    element.scrollLeft = x;
    element.scrollTop = y;
  }
}

function getTargetScrollLocation(target, parent, align) {
  var targetPosition = target.getBoundingClientRect();
  var parentPosition = null;
  var x = null;
  var y = null;
  var differenceX = null;
  var differenceY = null;
  var targetWidth = null;
  var targetHeight = null;
  var leftAlign = align && align.left != null ? align.left : 0.5;
  var topAlign = align && align.top != null ? align.top : 0.5;
  var leftOffset = align && align.leftOffset != null ? align.leftOffset : 0;
  var topOffset = align && align.topOffset != null ? align.topOffset : 0;
  var leftScalar = leftAlign;
  var topScalar = topAlign;

  if (parent === window) {
    targetWidth = Math.min(targetPosition.width, window.innerWidth);
    targetHeight = Math.min(targetPosition.height, window.innerHeight);
    x = targetPosition.left + window.pageXOffset - window.innerWidth * leftScalar + targetWidth * leftScalar;
    y = targetPosition.top + window.pageYOffset - window.innerHeight * topScalar + targetHeight * topScalar;
    x -= leftOffset;
    y -= topOffset;
    differenceX = x - window.pageXOffset;
    differenceY = y - window.pageYOffset;
  } else {
    targetWidth = targetPosition.width;
    targetHeight = targetPosition.height;
    parentPosition = parent.getBoundingClientRect();
    var offsetLeft = targetPosition.left - (parentPosition.left - parent.scrollLeft);
    var offsetTop = targetPosition.top - (parentPosition.top - parent.scrollTop);
    x = offsetLeft + targetWidth * leftScalar - parent.clientWidth * leftScalar;
    y = offsetTop + targetHeight * topScalar - parent.clientHeight * topScalar;
    x = Math.max(Math.min(x, parent.scrollWidth - parent.clientWidth), 0);
    y = Math.max(Math.min(y, parent.scrollHeight - parent.clientHeight), 0);
    x -= leftOffset;
    y -= topOffset;
    differenceX = x - parent.scrollLeft;
    differenceY = y - parent.scrollTop;
  }

  return {
    x: x,
    y: y,
    differenceX: differenceX,
    differenceY: differenceY
  };
}

function animate(parent) {
  requestAnimation(function () {
    var scrollSettings = parent.scrollOption;

    if (!scrollSettings) {
      return;
    }

    var location = getTargetScrollLocation(scrollSettings.target, parent, scrollSettings.align);
    var time = Date.now() - scrollSettings.startTime;
    var timeValue = Math.min(1 / scrollSettings.time * time, 1);

    if (time > scrollSettings.time + 20) {
      setElementScroll(parent, location.x, location.y);
      parent.scrollOption = null;
      return scrollSettings.end(COMPLETE);
    }

    var easeValue = 1 - scrollSettings.ease(timeValue);
    setElementScroll(parent, location.x - location.differenceX * easeValue, location.y - location.differenceY * easeValue);
    animate(parent);
  });
}

function transitionScrollTo(target, parent, settings, callback) {
  var idle = !parent.scrollOption;
  var lastSettings = parent.scrollOption;
  var now = Date.now();
  var endHandler;

  if (lastSettings) {
    lastSettings.end(CANCELED);
  }

  function end(endType) {
    parent.scrollOption = null;

    if (parent.parentElement && parent.parentElement.scrollOption) {
      parent.parentElement.scrollOption.end(endType);
    }

    callback(endType);
    parent.removeEventListener('touchstart', endHandler);
  }

  parent.scrollOption = {
    startTime: lastSettings ? lastSettings.startTime : Date.now(),
    target: target,
    time: settings.time + (lastSettings ? now - lastSettings.startTime : 0),
    ease: settings.ease,
    align: settings.align,
    end: end
  };
  endHandler = end.bind(null, CANCELED);
  parent.addEventListener('touchstart', endHandler);

  if (idle) {
    animate(parent);
  }
}

function defaultIsScrollable(element) {
  return element === window || (element.scrollHeight !== element.clientHeight || element.scrollWidth !== element.clientWidth) && getComputedStyle(element).overflow !== 'hidden';
}

function defaultValidTarget() {
  return true;
}

function _default(target, settings, callback) {
  if (!target) {
    return;
  }

  if (typeof settings === 'function') {
    callback = settings;
    settings = null;
  }

  if (!settings) {
    settings = {};
  }

  settings.time = isNaN(settings.time) ? 1000 : settings.time;

  settings.ease = settings.ease || function (v) {
    return 1 - Math.pow(1 - v, v / 2);
  };

  var parent = target.parentElement;
  var parents = 0;

  function done(endType) {
    parents -= 1;

    if (!parents && callback) {
      callback(endType);
    }
  }

  var validTarget = settings.validTarget || defaultValidTarget;
  var isScrollable = settings.isScrollable;

  while (parent) {
    if (validTarget(parent, parents) && (isScrollable ? isScrollable(parent, defaultIsScrollable) : defaultIsScrollable(parent))) {
      parents += 1;
      transitionScrollTo(target, parent, settings, done);
    }

    parent = parent.parentElement;

    if (!parent) {
      return;
    }

    if (parent.tagName === 'BODY') {
      parent = window;
    }
  }
}

/***/ })

/******/ })["default"]});;