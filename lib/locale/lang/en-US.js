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
/******/ 	return __webpack_require__(__webpack_require__.s = 539);
/******/ })
/************************************************************************/
/******/ ({

/***/ 539:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(540);


/***/ }),

/***/ 540:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var lang = {
  h: {
    locale: 'en-US',
    common: {
      cancel: 'Cancel',
      confirm: 'Confirm',
      clear: 'Clear',
      nullOptionText: 'please choose',
      empty: 'empty',
      any: 'any'
    },
    confirm: {
      title: 'Confirm'
    },
    select: {
      nullOptionText: 'please choose',
      placeholder: 'select',
      emptyContent: 'no results found',
      searchPlaceHolder: 'search',
      limitSize: 'You can select up to {0} data.'
    },
    category: {
      placeholder: 'please choose'
    },
    cascader: {
      placeholder: 'please choose'
    },
    categoryModal: {
      limitWords: 'You can select up to {size} data.',
      emptyContent: 'No results found',
      total: 'total'
    },
    categoryPicker: {
      nullOptionText: 'please choose',
      placeholder: 'select',
      total: 'total',
      limitSize: 'You can select up to {0} data.'
    },
    autoComplate: {
      placeholder: 'Search Input',
      emptyContent: 'No results found'
    },
    validation: {
      base: {
        required: ' can not be empty',
        maxLen: " text length can't exceed {value} bits",
        minLen: " text length can't be less than {value} bits",
        max: ' no more than {value}',
        min: " can't be less than {value}"
      },
      type: {
        int: ' is not the correct integer format',
        number: ' is not the correct digital format',
        email: ' is not the correct mailbox format',
        url: ' is not the correct URL format',
        tel: ' is not the correct phone number format',
        mobile: ' is not the correct mobile number format',
        globalmobile: ' is not the correct international mobile number format'
      }
    },
    date: {
      today: 'Today',
      yesterday: 'Yesterday',
      year: 'year',
      month: 'month',
      week: 'week',
      quarter: 'quarter',
      day: 'day',
      header: {
        year: '',
        month: '',
        day: ''
      },
      show: {
        week: '{year} {weeknum}th week {daystart} - {dayend}',
        weekInput: '{year} {week}th week',
        quarter: '{year} {quarter}th quarter'
      },
      months: {
        january: 'Jan',
        february: 'Feb',
        march: 'Mar',
        april: 'Apr',
        may: 'May',
        june: 'Jun',
        july: 'Jul',
        august: 'Aug',
        september: 'Sep',
        october: 'Oct',
        november: 'Nov',
        december: 'Dec'
      },
      weeks: {
        monday: 'Mon',
        tuesday: 'Tue',
        wednesday: 'Wed',
        thursday: 'Thu',
        friday: 'Fri',
        saturday: 'Sat',
        sunday: 'Sun'
      }
    },
    datepicker: {
      placeholder: 'select date',
      startTime: 'start',
      endTime: 'end',
      customize: 'customize',
      start: 'start',
      end: 'end'
    },
    wordlimit: {
      warn: 'You are limited to enter {0} words'
    },
    wordcount: {
      warn: 'You have exceeded {0} words'
    },
    treepicker: {
      selectDesc: 'You have selected {0} items',
      placeholder: 'please select'
    },
    search: {
      placeholder: 'search...',
      searchText: 'Search'
    },
    taginput: {
      limitWords: 'You have exceeded the limit'
    },
    table: {
      empty: 'No results found'
    },
    uploader: {
      upload: 'Upload',
      reUpload: 'ReUpload'
    },
    pagination: {
      incorrectFormat: 'The format of the value you entered is incorrect',
      overSize: 'The value you entered exceeds the range',
      totalBefore: 'Total',
      totalAfter: 'items',
      sizeOfPage: '{size} items/page'
    }
  }
};
var _default = lang;
exports.default = _default;

/***/ })

/******/ })["default"]});;