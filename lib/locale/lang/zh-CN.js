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
/******/ 	return __webpack_require__(__webpack_require__.s = 541);
/******/ })
/************************************************************************/
/******/ ({

/***/ 541:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(542);


/***/ }),

/***/ 542:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;
var lang = {
  h: {
    locale: 'zh-CN',
    common: {
      cancel: '取消',
      confirm: '确定',
      clear: '清除',
      placeholder: '请选择',
      empty: '空',
      any: '不限'
    },
    confirm: {
      title: '提示'
    },
    select: {
      nullOptionText: '请选择',
      emptyContent: '未搜索到相关数据',
      placeholder: '请选择',
      searchPlaceHolder: '请输入筛选文本',
      limitSize: '您最多可以选择{0}个选项'
    },
    category: {
      placeholder: '请选择'
    },
    cascader: {
      placeholder: '请选择'
    },
    categoryModal: {
      limitWords: '您最多可以选择{size}条数据。',
      emptyContent: '未搜索到相关数据',
      total: '全部'
    },
    categoryPicker: {
      limitWords: '您最多可以选择{size}条数据。',
      emptyContent: '未搜索到相关数据',
      total: '全部',
      placeholder: '请选择'
    },
    autoComplate: {
      placeholder: '请输入',
      emptyContent: '未搜索到相关数据'
    },
    validation: {
      base: {
        required: '不能为空',
        maxLen: '文字长度不能超过{value}个字',
        minLen: '文字长度不能少于{value}个字',
        max: '不能大于{value}',
        min: '不能小于{value}'
      },
      type: {
        int: '不是正确的整数格式',
        number: '不是正确的数字格式',
        email: '不是正确的邮箱格式',
        url: '不是正确的网址格式',
        tel: '不是正确的电话号码格式',
        mobile: '不是正确的手机号码格式',
        globalmobile: '不是正确的国际号码格式'
      }
    },
    date: {
      today: '今天',
      yesterday: '昨天',
      year: '年',
      month: '月',
      week: '周',
      quarter: '季',
      day: '日',
      header: {
        year: '年',
        month: '月',
        day: '日'
      },
      show: {
        week: '{year}年 第{weeknum}周 {daystart} 至 {dayend}',
        weekInput: '{year}年 第{week}周',
        quarter: '{year}年 第{quarter}季度'
      },
      months: {
        january: '一月',
        february: '二月',
        march: '三月',
        april: '四月',
        may: '五月',
        june: '六月',
        july: '七月',
        august: '八月',
        september: '九月',
        october: '十月',
        november: '十一',
        december: '十二'
      },
      weeks: {
        monday: '一',
        tuesday: '二',
        wednesday: '三',
        thursday: '四',
        friday: '五',
        saturday: '六',
        sunday: '日'
      }
    },
    datepicker: {
      placeholder: '请选择日期',
      startTime: '开始时间',
      endTime: '结束时间',
      customize: '自定义',
      start: '开始',
      end: '结束'
    },
    wordlimit: {
      warn: '您最多可以输入{0}个字'
    },
    wordcount: {
      warn: '您已超出{0}个字'
    },
    treepicker: {
      selectDesc: '您总共选择{0}项',
      placeholder: '请选择'
    },
    search: {
      placeholder: '请输入关键词查询',
      searchText: '搜索'
    },
    taginput: {
      limitWords: '您输入的已经超过限制'
    },
    table: {
      empty: '暂无数据'
    },
    uploader: {
      upload: '上传',
      reUpload: '重新上传'
    },
    pagination: {
      incorrectFormat: '您输入的值格式不正确',
      overSize: '您输入的值超过范围',
      totalBefore: '总',
      totalAfter: '条',
      sizeOfPage: '{size}条/页'
    }
  }
};
var _default = lang;
exports.default = _default;

/***/ })

/******/ })["default"]});;