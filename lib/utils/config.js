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
/******/ 	return __webpack_require__(__webpack_require__.s = 591);
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

/***/ 16:
/***/ (function(module, exports) {

function _extends() {
  module.exports = _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

module.exports = _extends;

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

module.exports = _defineProperty;

/***/ }),

/***/ 591:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(592);


/***/ }),

/***/ 592:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _extends2 = _interopRequireDefault(__webpack_require__(16));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _config = {
  dict: {
    keyName: 'key',
    titleName: 'title',
    dicts: {}
  },
  tree: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  category: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  categoryPicker: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  cascader: {
    configs: {},
    default: {
      titleName: 'title',
      keyName: 'key',
      parentName: 'parent',
      childrenName: 'children'
    }
  },
  uploader: {
    urlName: 'url',
    fileName: 'name',
    thumbUrl: function thumbUrl(url) {
      return url;
    }
  },
  menu: {
    titleName: 'title',
    keyName: 'key',
    childrenName: 'children'
  },
  autocomplete: {
    configs: {},
    default: {
      maxList: 20,
      delay: 100,
      loadData: null,
      minWord: 0,
      titleName: 'title',
      keyName: 'key',
      render: null
    }
  },
  modal: {
    hasDivider: false
  },
  page: {
    small: false,
    size: 10,
    sizes: [10, 20, 50, 100],
    layout: 'total,pager,jumper,sizes',
    onChangeSize: function onChangeSize() {// The need to deal with the global paging page number
    },
    init: function init() {// The need to deal with the global paging page number
    },
    onChange: function onChange() {}
  },
  avatar: {
    handleSrc: function handleSrc(src) {
      return src;
    }
  },
  datepicker: {
    startWeek: 1,
    format: {
      date: 'YYYY-MM-DD',
      month: 'YYYY-MM',
      year: 'YYYY',
      time: 'HH:mm',
      datetime: 'YYYY-MM-DD HH:mm',
      datehour: 'YYYY-MM-DD HH:mm',
      datetimesecond: 'YYYY-MM-DD HH:mm:ss'
    },
    shortcuts: {
      today: {
        title: '今天',
        value: function value() {
          return new Date();
        }
      },
      yesterday: {
        title: '昨天',
        value: function value() {
          var date = new Date();
          date.setTime(date.getTime() - 3600 * 1000 * 24);
          return date;
        }
      }
    },
    datetimeOptions: {
      minuteStep: 5
    },
    daterangeOptions: {
      paramName: {
        start: 'start',
        end: 'end'
      }
    }
  }
};
var func = {
  getDict: function getDict(name) {
    var dict = _config.dict.dicts[name];

    if (!dict) {
      console.error("[HeyUI] Config: There is no dictionary named ".concat(name));
      return [];
    }

    return dict;
  },
  getOption: function getOption(type, name) {
    var key = "".concat(type);

    if (!_utils.default.isNull(name)) {
      key = "".concat(type, ".").concat(name);
    }

    var value = _utils.default.getKeyValue(_config, "".concat(key));

    if (_utils.default.isNull(value)) {
      console.error("[HeyUI] Config: There is no dictionary named ".concat(key));
      return null;
    }

    return value;
  },
  config: function config(name, value) {
    if (_utils.default.isNull(name)) {
      return false;
    }

    var keyValue = _utils.default.getKeyValue(_config, name);

    if (_utils.default.isObject(keyValue) && _utils.default.isObject(value)) {
      _utils.default.extend(keyValue, value);
    } else {
      _utils.default.setKeyValue(_config, name, value);
    }

    return true;
  },
  initDict: function initDict(objects) {
    (0, _extends2.default)(_config.dict.dicts, objects);
  },
  addDict: function addDict(name, value) {
    _config.dict.dicts[name] = value;
  },
  dictMapping: function dictMapping(value, key, connector) {
    var dict = this.getDict(key);
    if (!dict || _utils.default.isNull(value)) return '';

    if (_utils.default.isString(value) && connector) {
      value = value.split(connector);
    }

    if (!_utils.default.isNull(value) && value !== '' && key) {
      if (!_utils.default.isArray(value)) {
        value = [value];
      }
    }

    if (value.length <= 0) {
      return '';
    }

    var keyField = this.getOption('dict', 'keyName');
    var titleField = this.getOption('dict', 'titleName');

    if (_utils.default.isArray(dict)) {
      dict = _utils.default.toObject(dict, keyField);
    }

    var result = value.map(function (ele) {
      if (_utils.default.isObject(ele)) {
        return ele[titleField];
      }

      var d = dict[ele];

      if (_utils.default.isObject(d)) {
        return d[titleField];
      }

      return d;
    });
    return result.filter(function (ele) {
      return ele && ele !== '';
    }).join(connector || ', ');
  },
  initOptions: function initOptions(datas, param) {
    var key = this.getOption('dict.keyName');
    var title = this.getOption('dict.titleName');
    var options = [];

    if (_utils.default.isObject(datas)) {
      options = _utils.default.toArray(datas, key, title);
    } else if (_utils.default.isArray(datas)) {
      if (datas.length == 0) {
        options = [];
      } else {
        var data0 = datas[0];

        if (_utils.default.isObject(data0)) {
          options = _utils.default.copy(datas);
        } else {
          options = datas.map(function (item) {
            var _ref;

            return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(key), item), (0, _defineProperty2.default)(_ref, "".concat(title), item), _ref;
          });
        }
      }
    }

    if (param.render) {
      options.forEach(function (item) {
        item[param.html] = param.render.call(null, item);
      });
    }

    return options;
  }
};
var _default = func;
exports.default = _default;

/***/ })

/******/ })["default"]});;