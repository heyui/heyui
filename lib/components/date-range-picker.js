define(["heyui/lib/utils/utils","heyui/lib/utils/config","heyui/lib/mixins/locale","heyui/lib/plugins/dropdown","manba"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__5__, __WEBPACK_EXTERNAL_MODULE__7__, __WEBPACK_EXTERNAL_MODULE__20__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 324);
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

/***/ 1:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return normalizeComponent; });
/* globals __VUE_SSR_CONTEXT__ */

// IMPORTANT: Do NOT use ES2015 features in this file (except for modules).
// This module is a runtime utility for cleaner component module output and will
// be included in the final webpack user bundle.

function normalizeComponent (
  scriptExports,
  render,
  staticRenderFns,
  functionalTemplate,
  injectStyles,
  scopeId,
  moduleIdentifier, /* server only */
  shadowMode /* vue-cli only */
) {
  // Vue.extend constructor export interop
  var options = typeof scriptExports === 'function'
    ? scriptExports.options
    : scriptExports

  // render functions
  if (render) {
    options.render = render
    options.staticRenderFns = staticRenderFns
    options._compiled = true
  }

  // functional template
  if (functionalTemplate) {
    options.functional = true
  }

  // scopedId
  if (scopeId) {
    options._scopeId = 'data-v-' + scopeId
  }

  var hook
  if (moduleIdentifier) { // server build
    hook = function (context) {
      // 2.3 injection
      context =
        context || // cached call
        (this.$vnode && this.$vnode.ssrContext) || // stateful
        (this.parent && this.parent.$vnode && this.parent.$vnode.ssrContext) // functional
      // 2.2 with runInNewContext: true
      if (!context && typeof __VUE_SSR_CONTEXT__ !== 'undefined') {
        context = __VUE_SSR_CONTEXT__
      }
      // inject component styles
      if (injectStyles) {
        injectStyles.call(this, context)
      }
      // register component module identifier for async chunk inferrence
      if (context && context._registeredComponents) {
        context._registeredComponents.add(moduleIdentifier)
      }
    }
    // used by ssr in case component is cached and beforeCreate
    // never gets called
    options._ssrRegister = hook
  } else if (injectStyles) {
    hook = shadowMode
      ? function () { injectStyles.call(this, this.$root.$options.shadowRoot) }
      : injectStyles
  }

  if (hook) {
    if (options.functional) {
      // for template-only hot-reload because in that case the render fn doesn't
      // go through the normalizer
      options._injectStyles = hook
      // register for functioal component in vue file
      var originalRender = options.render
      options.render = function renderWithStyleInjection (h, context) {
        hook.call(context)
        return originalRender(h, context)
      }
    } else {
      // inject component registration as beforeCreate hook
      var existing = options.beforeCreate
      options.beforeCreate = existing
        ? [].concat(existing, hook)
        : [hook]
    }
  }

  return {
    exports: scriptExports,
    options: options
  }
}


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance");
}

module.exports = _nonIterableSpread;

/***/ }),

/***/ 13:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(14);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(6));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _manba = _interopRequireDefault(__webpack_require__(20));

var _config = _interopRequireDefault(__webpack_require__(4));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _locale = _interopRequireDefault(__webpack_require__(5));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var dateprefix = 'h-date';
var viewType = ['year', 'month', 'date', 'hour', 'minute', 'second'];
var weekViewType = ['year', 'month', 'week'];
var quarterViewType = ['year', 'quarter'];

var options = _config.default.getOption('datepicker');

var startView = {
  year: 'year',
  month: 'month',
  date: 'date',
  week: 'week',
  quarter: 'quarter',
  datetime: 'date',
  datehour: 'date',
  time: 'hour'
};
var endView = {
  year: 'year',
  month: 'month',
  date: 'date',
  week: 'week',
  quarter: 'quarter',
  datetime: 'minute',
  datehour: 'hour',
  time: 'minute'
};
var DateJudgeLength = {
  year: 10,
  month: 10,
  date: 10,
  week: 10,
  quarter: 10,
  hour: 13,
  minute: 16
};

var genData = function genData(param) {
  var date = param.date,
      type = param.type,
      show = param.show,
      vm = param.vm,
      isNowDays = param.isNowDays,
      view = param.view;
  var disabled = false;

  if (_utils.default.isObject(vm.option)) {
    if (vm.option.start) disabled = date.distance(vm.option.start, type) < 0;
    if (vm.option.end && !disabled) disabled = date.distance(vm.option.end, type) > 0;
    if (vm.option.disabled && !disabled) disabled = vm.option.disabled.call(null, date);
  }

  var dis = date.distance(vm.today, type);
  var isToday = dis == 0;

  if (view == 'quarter') {
    isToday = dis >= -2 && dis <= 0;
  }

  return {
    date: date,
    show: show,
    string: date.format(vm.format),
    disabled: disabled,
    isToday: isToday,
    isNowDays: isNowDays
  };
};

var _default2 = {
  name: 'hDateBase',
  mixins: [_locale.default],
  props: {
    type: {
      type: [String],
      default: 'date' // year, month, week

    },
    option: Object,
    format: String,
    value: [Object, String],
    nowView: Object,
    range: String,
    rangeEnd: String,
    startWeek: {
      type: Number,
      default: function _default() {
        return _config.default.getOption('datepicker.startWeek');
      }
    }
  },
  data: function data() {
    return {
      options: _utils.default.extend({}, options.datetimeOptions, this.option),
      today: (0, _manba.default)(),
      view: startView[this.type] // month //year

    };
  },
  filters: {
    hoursString: function hoursString(d) {
      return "".concat(_utils.default.padLeft(d.hours(), 2), ":00");
    }
  },
  watch: {
    type: function type() {
      this.options = _utils.default.extend({}, options.datetimeOptions, this.option);
      this.view = startView[this.type];
    }
  },
  mounted: function mounted() {
    var _this = this;

    this.$nextTick(function () {
      if (_this.range) {
        _this.$el.addEventListener('mouseenter', function (event) {
          if (_this.view == 'date' && !!_this.value.start && !_this.value.end) {
            var target = event.target;

            if (target.tagName == 'SPAN') {
              var string = target.getAttribute('string');
              if (string) _this.$emit('updateRangeEnd', string);
            }
          }
        }, true);

        _this.$el.addEventListener('mouseout', function () {
          if (_this.view == 'date' && !!_this.value.start && !_this.value.end) {
            _this.$emit('updateRangeEnd', '');
          }
        }, true);
      }
    });
  },
  methods: {
    changeView: function changeView(view) {
      this.view = view;
      this.$emit('changeView');
    },
    resetView: function resetView() {
      this.view = startView[this.type];
    },
    updateView: function updateView(typeString, num) {
      var type = _manba.default.DAY;
      var nowView = (0, _manba.default)(this.nowView);

      if (typeString == 'month') {
        type = _manba.default.MONTH;
        nowView = nowView.startOf(_manba.default.MONTH);
      } else if (typeString == 'hour') {
        type = _manba.default.HOUR;
      } else {
        type = _manba.default.YEAR;

        if (this.view == 'hour') {
          type = _manba.default.DAY;
        } else if (this.view == 'minute') {
          type = _manba.default.DAY;
        } else if (this.view == 'year') {
          num = num * 12;
          type = _manba.default.YEAR;
        }
      }

      nowView.add(num, type);
      this.$emit('updateView', nowView.time(), this.range);
    },
    getDateCls: function getDateCls(d) {
      var isStartSelected = false;
      var isEndSelected = false;
      var isRangeSelected = false;
      var isSelected = false;

      if (_utils.default.isObject(this.value)) {
        isStartSelected = this.value.start == d.string;
        isEndSelected = this.value.end == d.string;
      } else {
        var length = DateJudgeLength[this.view];
        isSelected = this.value.substring(0, length) == d.string.substring(0, length);
      }

      if (this.range && _utils.default.isObject(this.value) && !!this.value.start && !!this.rangeEnd) {
        isRangeSelected = this.value.start < d.string && this.rangeEnd > d.string || this.value.start > d.string && this.rangeEnd < d.string;
      }

      return {
        'h-date-not-now-day': !d.isNowDays,
        'h-date-today': d.isToday,
        'h-date-selected': isSelected || isStartSelected || isEndSelected,
        'h-date-range-selected': isRangeSelected,
        'h-date-start-selected': isStartSelected,
        'h-date-end-selected': isEndSelected,
        'h-date-disabled': d.disabled
      };
    },
    chooseDate: function chooseDate(d) {
      if (this.view == endView[this.type]) {
        this.setvalue(d.date, true);
      } else {
        var date = d.date; // In addition to the month and year clicks, the other directly complete the assignment

        if (!(this.view == 'month' && this.type != 'month') && !(this.view == 'year' && this.type != 'year')) {
          if (this.value) {
            if (this.range) {
              try {
                date = (0, _manba.default)(this.value[this.range]);
              } catch (e) {
                date = (0, _manba.default)(d.date);
              }
            } else {
              date = (0, _manba.default)(this.value);
            }

            switch (this.view) {
              case 'minutes':
                date.minutes(d.date.minutes());
                break;

              case 'hour':
                date.hours(d.date.hours());
                break;

              case 'date':
                date.year(d.date.year());
                date.month(d.date.month());
                date.date(d.date.date());
                break;

              case 'month':
                date.month(d.date.month());

                if (date.month() > d.date.month()) {
                  date.date(1);
                  date = date.add(-1, _manba.default.DAY);
                }

                break;

              case 'year':
                date.year(d.date.year());
                break;
            }
          }

          if (this.options.start && (0, _manba.default)(date).time() < (0, _manba.default)(this.options.start).time()) {
            date = this.options.start;
          }

          if (this.options.end && (0, _manba.default)(date).time() > (0, _manba.default)(this.options.end).time()) {
            date = this.options.end;
          }

          if (!this.range) {
            this.setvalue(date, false);
          }
        } // if(this.type == 'week' && this.view == 'year'){
        //   this.view = 'week';
        // } else {
        // }


        var viewTypes = viewType;

        if (this.type == 'week') {
          viewTypes = weekViewType;
        } else if (this.type == 'quarter') {
          viewTypes = quarterViewType;
        }

        var index = viewTypes.indexOf(this.view);
        this.view = viewTypes[index + 1];
        this.$emit('updateView', (0, _manba.default)(date).time(), this.range);
      }
    },
    setvalue: function setvalue(date) {
      var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var value = '';

      if (!_utils.default.isNull(date)) {
        value = (0, _manba.default)(date).format(this.format);
      }

      this.$emit('input', value, isEnd, this.range);
    }
  },
  computed: {
    dateBodyCls: function dateBodyCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(dateprefix, "-body"), true), (0, _defineProperty2.default)(_ref, "".concat(dateprefix, "-body-").concat(this.view), true), _ref;
    },
    weeks: function weeks() {
      var weeks = [this.t('h.date.weeks.monday'), this.t('h.date.weeks.tuesday'), this.t('h.date.weeks.wednesday'), this.t('h.date.weeks.thursday'), this.t('h.date.weeks.friday'), this.t('h.date.weeks.saturday'), this.t('h.date.weeks.sunday')];
      var days = weeks.splice(0, this.startWeek - 1);
      weeks.push.apply(weeks, (0, _toConsumableArray2.default)(days));
      return weeks;
    },
    months: function months() {
      return [this.t('h.date.months.january'), this.t('h.date.months.february'), this.t('h.date.months.march'), this.t('h.date.months.april'), this.t('h.date.months.may'), this.t('h.date.months.june'), this.t('h.date.months.july'), this.t('h.date.months.august'), this.t('h.date.months.september'), this.t('h.date.months.october'), this.t('h.date.months.november'), this.t('h.date.months.december')];
    },
    dates: function dates() {
      var nowDate = this.nowView;

      if (this.view == 'date') {
        var lastdayofmonth = nowDate.endOf(_manba.default.MONTH);
        var firstdayofmonth = nowDate.startOf(_manba.default.MONTH);
        var startDay = firstdayofmonth.day();

        if (startDay == this.startWeek) {
          startDay = -1;
        } else if (this.startWeek > startDay) {
          startDay = 7 - (this.startWeek - startDay) - 1;
        } else {
          startDay = startDay - this.startWeek - 1;
        }

        var lastdayoflastmonth = firstdayofmonth.add(-1, _manba.default.DAY);
        var dates = [];
        var lastMonthDays = lastdayoflastmonth.date() - startDay;

        for (var i = lastMonthDays; i <= lastdayoflastmonth.date(); i++) {
          dates.push(genData({
            date: (0, _manba.default)([lastdayoflastmonth.year(), lastdayoflastmonth.month(), i]),
            type: _manba.default.DAY,
            show: i,
            vm: this,
            isNowDays: false
          }));
        }

        for (var _i = 1; _i <= lastdayofmonth.date(); _i++) {
          dates.push(genData({
            date: (0, _manba.default)([lastdayofmonth.year(), lastdayofmonth.month(), _i]),
            type: _manba.default.DAY,
            show: _i,
            vm: this,
            isNowDays: true
          }));
        }

        var nextMonth = lastdayofmonth.add(1, _manba.default.DAY);
        var nextMonthDays = 7 * 6 - dates.length;

        for (var _i2 = 1; _i2 <= nextMonthDays; _i2++) {
          dates.push(genData({
            date: (0, _manba.default)([nextMonth.year(), nextMonth.month(), _i2]),
            type: _manba.default.DAY,
            show: _i2,
            vm: this,
            isNowDays: false
          }));
        }

        return dates;
      } else if (this.view == 'month') {
        var _dates = [];

        for (var _i3 = 1; _i3 <= 12; _i3++) {
          _dates.push(genData({
            date: (0, _manba.default)([nowDate.year(), _i3, 1]),
            type: _manba.default.MONTH,
            show: this.months[_i3 - 1],
            vm: this,
            isNowDays: true
          }));
        }

        return _dates;
      } else if (this.view == 'year') {
        var _dates2 = [];
        var nowYear = nowDate.year();

        for (var _i4 = nowYear - 6; _i4 <= nowYear + 5; _i4++) {
          _dates2.push(genData({
            date: (0, _manba.default)([_i4, 1, 1]),
            type: _manba.default.YEAR,
            show: _i4,
            vm: this,
            isNowDays: true
          }));
        }

        return _dates2;
      } else if (this.view == 'hour') {
        var _dates3 = [];
        var list = [];

        if (_utils.default.isFunction(this.options.hours)) {
          list = this.options.hours.call(null);
        } else {
          list = _utils.default.numList(0, 24, 1);
        }

        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = list[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var _i5 = _step.value;

            _dates3.push(genData({
              date: (0, _manba.default)(nowDate.time()).hours(_i5).minutes(0),
              type: _manba.default.HOUR,
              show: _utils.default.padLeft(_i5, 2) + ':00',
              vm: this,
              isNowDays: true
            }));
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }

        return _dates3;
      } else if (this.view == 'minute') {
        var _dates4 = [];
        var hour = nowDate.hours();
        var _list = [];

        if (_utils.default.isFunction(this.options.minutes)) {
          _list = this.options.minutes.call(null, hour);
        } else {
          _list = _utils.default.numList(0, 60, this.options.minuteStep);
        }

        var _iteratorNormalCompletion2 = true;
        var _didIteratorError2 = false;
        var _iteratorError2 = undefined;

        try {
          for (var _iterator2 = _list[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
            var _i6 = _step2.value;

            _dates4.push(genData({
              date: (0, _manba.default)(nowDate.time()).minutes(_i6),
              type: _manba.default.MINUTE,
              show: _utils.default.padLeft(hour, 2) + ':' + _utils.default.padLeft(_i6, 2),
              vm: this,
              isNowDays: true
            }));
          }
        } catch (err) {
          _didIteratorError2 = true;
          _iteratorError2 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion2 && _iterator2.return != null) {
              _iterator2.return();
            }
          } finally {
            if (_didIteratorError2) {
              throw _iteratorError2;
            }
          }
        }

        return _dates4;
      } else if (this.view == 'week') {
        var _dates5 = [];
        var date = (0, _manba.default)(nowDate).add(-1, _manba.default.MONTH).endOf(_manba.default.MONTH).endOf(_manba.default.WEEK, this.startWeek);
        var monthSpace = 0;

        if (date.month() == nowDate.month()) {
          date = date.startOf(_manba.default.WEEK, this.startWeek);
          monthSpace = 1;
        } else {
          date = date.add(7, _manba.default.DATE).startOf(_manba.default.WEEK, this.startWeek);
        }

        var month = date.month();

        var _nextMonth = monthSpace + month;

        _nextMonth = _nextMonth > 12 ? 1 : _nextMonth;

        while (date.month() == month || date.month() == _nextMonth) {
          _dates5.push(genData({
            date: (0, _manba.default)(date.time()),
            type: _manba.default.WEEK,
            show: this.t('h.date.show.week', {
              year: date.year(),
              weeknum: date.getWeekOfYear(this.startWeek),
              daystart: date.format('MM-DD'),
              dayend: (0, _manba.default)(date).add(6).format('MM-DD')
            }),
            vm: this,
            isNowDays: true
          }));

          date = date.add(7);
        }

        return _dates5;
      } else if (this.view == 'quarter') {
        var _dates6 = [];

        var _date = nowDate.startOf(_manba.default.YEAR);

        for (var index = 1; index < 5; index++) {
          _dates6.push(genData({
            date: (0, _manba.default)(_date.time()),
            type: _manba.default.MONTH,
            show: this.t('h.date.show.quarter', {
              year: _date.year(),
              quarter: index
            }),
            vm: this,
            isNowDays: true,
            view: this.view
          }));

          _date = _date.add(3, _manba.default.MONTH);
        }

        return _dates6;
      }

      return [];
    }
  }
};
exports.default = _default2;

/***/ }),

/***/ 18:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/date-picker/datebase.vue?vue&type=template&id=d7fe295e&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { staticClass: "h-date-content" }, [
    _vm.type != "time"
      ? _c("div", { staticClass: "h-date-header" }, [
          _c(
            "span",
            {
              staticClass: "h-date-year-left-picker",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.updateView("default", -1)
                }
              }
            },
            [
              _c("i", { staticClass: "h-icon-left" }),
              _vm._v(" "),
              _c("i", { staticClass: "h-icon-left" })
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.view == "date" || _vm.view == "week",
                  expression: "view=='date'||view=='week'"
                }
              ],
              staticClass: "h-date-month-left-picker",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.updateView("month", -1)
                }
              }
            },
            [_c("i", { staticClass: "h-icon-left" })]
          ),
          _vm._v(" "),
          _vm.view != "year"
            ? _c(
                "span",
                {
                  staticClass: "h-date-header-show",
                  on: {
                    click: function($event) {
                      $event.stopPropagation()
                      return _vm.changeView("year")
                    }
                  }
                },
                [
                  _vm._v(
                    "\n      " +
                      _vm._s(_vm.nowView.year()) +
                      _vm._s(_vm._f("hlang")("h.date.header.year")) +
                      "\n    "
                  )
                ]
              )
            : _vm._e(),
          _vm._v(" "),
          _vm.view == "year"
            ? _c("span", { staticClass: "h-date-header-show" }, [
                _vm._v(
                  "\n      " +
                    _vm._s(_vm.nowView.year() - 6) +
                    "  -  " +
                    _vm._s(_vm.nowView.year() + 5) +
                    _vm._s(_vm._f("hlang")("h.date.header.year")) +
                    "\n    "
                )
              ])
            : _vm._e(),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value:
                    _vm.view != "year" &&
                    _vm.view != "month" &&
                    _vm.view != "quarter",
                  expression:
                    "view != 'year' && view != 'month' && view != 'quarter'"
                }
              ],
              staticClass: "h-date-header-show",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.changeView("month")
                }
              }
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.months[_vm.nowView.month() - 1]) +
                  "\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.view == "hour" || _vm.view == "minute",
                  expression: "view == 'hour' || view == 'minute'"
                }
              ],
              staticClass: "h-date-header-show",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.changeView("date")
                }
              }
            },
            [
              _vm._v(
                "\n      " +
                  _vm._s(_vm.nowView.date()) +
                  _vm._s(_vm._f("hlang")("h.date.header.day")) +
                  "\n    "
              )
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              staticClass: "h-date-year-right-picker",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.updateView("default", 1)
                }
              }
            },
            [
              _c("i", { staticClass: "h-icon-right" }),
              _vm._v(" "),
              _c("i", { staticClass: "h-icon-right" })
            ]
          ),
          _vm._v(" "),
          _c(
            "span",
            {
              directives: [
                {
                  name: "show",
                  rawName: "v-show",
                  value: _vm.view == "date" || _vm.view == "week",
                  expression: "view=='date'||view=='week'"
                }
              ],
              staticClass: "h-date-month-right-picker",
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.updateView("month", 1)
                }
              }
            },
            [_c("i", { staticClass: "h-icon-right" })]
          )
        ])
      : _vm._e(),
    _vm._v(" "),
    _c(
      "div",
      {
        directives: [
          {
            name: "show",
            rawName: "v-show",
            value: _vm.view == "minute",
            expression: "view=='minute'"
          }
        ],
        staticClass: "h-date-header"
      },
      [
        _c(
          "span",
          {
            staticClass: "h-date-month-left-picker",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.updateView("hour", -1)
              }
            }
          },
          [_c("i", { staticClass: "h-icon-left" })]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "h-date-header-show",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.changeView("hour")
              }
            }
          },
          [_vm._v(_vm._s(_vm._f("hoursString")(_vm.nowView)))]
        ),
        _vm._v(" "),
        _c(
          "span",
          {
            staticClass: "h-date-month-right-picker",
            on: {
              click: function($event) {
                $event.stopPropagation()
                return _vm.updateView("hour", 1)
              }
            }
          },
          [_c("i", { staticClass: "h-icon-right" })]
        )
      ]
    ),
    _vm._v(" "),
    _c("div", { class: _vm.dateBodyCls }, [
      _vm.view == "date"
        ? _c(
            "div",
            { staticClass: "h-date-body-weeks" },
            _vm._l(_vm.weeks, function(w) {
              return _c("span", { key: w }, [_vm._v(_vm._s(w))])
            }),
            0
          )
        : _vm._e(),
      _vm._v(" "),
      _c(
        "div",
        { staticClass: "h-date-body-pickers" },
        _vm._l(_vm.dates, function(d) {
          return _c(
            "span",
            {
              key: d.string,
              class: _vm.getDateCls(d),
              attrs: { string: d.string },
              on: {
                click: function($event) {
                  $event.stopPropagation()
                  return _vm.chooseDate(d)
                }
              }
            },
            [_vm._v(_vm._s(d.show))]
          )
        }),
        0
      )
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/date-picker/datebase.vue?vue&type=template&id=d7fe295e&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 20:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__20__;

/***/ }),

/***/ 236:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/date-range-picker/daterangepicker.vue?vue&type=template&id=b293f1ea&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c("div", { class: _vm.dateCls }, [
    _vm.noBorder
      ? _c("div", { staticClass: "h-datetime-show text-hover" }, [
          _vm._v(_vm._s(_vm.showDate || _vm.showPlaceholder))
        ])
      : _c("div", { staticClass: "h-input h-datetime-show" }, [
          _c("input", {
            staticClass: "h-input",
            attrs: {
              type: "text",
              readonly: "",
              placeholder: _vm.showPlaceholder,
              disabled: _vm.disabled
            },
            domProps: { value: _vm.show },
            on: { change: _vm.changeEvent }
          }),
          _vm._v(" "),
          _c("i", { staticClass: "h-icon-calendar" })
        ]),
    _vm._v(" "),
    _c("div", { staticClass: "h-date-picker", class: _vm.datePickerCls }, [
      _vm.isShow
        ? _c(
            "div",
            { staticClass: "h-date-container h-date-range-container" },
            [
              _vm.shortcuts.length > 0
                ? _c(
                    "div",
                    { staticClass: "h-date-shortcut" },
                    _vm._l(_vm.shortcuts, function(s) {
                      return _c(
                        "div",
                        {
                          key: s.title,
                          on: {
                            click: function($event) {
                              return _vm.setShortcutValue(s)
                            }
                          }
                        },
                        [_vm._v(_vm._s(s.title))]
                      )
                    }),
                    0
                  )
                : _vm._e(),
              _vm._v(" "),
              _c("date-base", {
                ref: "start",
                attrs: {
                  value: _vm.nowDate,
                  range: "start",
                  option: _vm.startOption,
                  type: _vm.type,
                  "now-view": _vm.nowView.start,
                  format: _vm.nowFormat,
                  startWeek: _vm.startWeek,
                  rangeEnd: _vm.rangeEnd
                },
                on: {
                  updateView: _vm.updateView,
                  input: _vm.setvalue,
                  changeView: _vm.changeView,
                  updateRangeEnd: _vm.updateRangeEnd
                }
              }),
              _vm._v(" "),
              _c("date-base", {
                ref: "end",
                attrs: {
                  value: _vm.nowDate,
                  range: "end",
                  option: _vm.endOption,
                  type: _vm.type,
                  "now-view": _vm.nowView.end,
                  format: _vm.nowFormat,
                  startWeek: _vm.startWeek,
                  rangeEnd: _vm.rangeEnd
                },
                on: {
                  updateView: _vm.updateView,
                  input: _vm.setvalue,
                  changeView: _vm.changeView,
                  updateRangeEnd: _vm.updateRangeEnd
                }
              })
            ],
            1
          )
        : _vm._e(),
      _vm._v(" "),
      _c("div", { staticClass: "h-date-footer" }, [
        _c(
          "button",
          { staticClass: "h-btn h-btn-text h-btn-s", on: { click: _vm.clear } },
          [_vm._v(_vm._s(_vm._f("hlang")("h.common.clear")))]
        ),
        _vm._v(" "),
        _c(
          "button",
          {
            staticClass: "h-btn h-btn-primary h-btn-s",
            on: { click: _vm.confirm }
          },
          [_vm._v(_vm._s(_vm._f("hlang")("h.common.confirm")))]
        )
      ])
    ])
  ])
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/date-range-picker/daterangepicker.vue?vue&type=template&id=b293f1ea&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 24:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _datebase_vue_vue_type_template_id_d7fe295e___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(18);
/* harmony import */ var _datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(13);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _datebase_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _datebase_vue_vue_type_template_id_d7fe295e___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _datebase_vue_vue_type_template_id_d7fe295e___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/date-picker/datebase.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

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

/***/ 324:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(325);


/***/ }),

/***/ 325:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _daterangepicker = _interopRequireDefault(__webpack_require__(326));

var _default = _daterangepicker.default;
exports.default = _default;

/***/ }),

/***/ 326:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _daterangepicker_vue_vue_type_template_id_b293f1ea___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(236);
/* harmony import */ var _daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(75);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _daterangepicker_vue_vue_type_template_id_b293f1ea___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _daterangepicker_vue_vue_type_template_id_b293f1ea___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/date-range-picker/daterangepicker.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__5__;

/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(8);

var iterableToArray = __webpack_require__(9);

var nonIterableSpread = __webpack_require__(10);

function _toConsumableArray(arr) {
  return arrayWithoutHoles(arr) || iterableToArray(arr) || nonIterableSpread();
}

module.exports = _toConsumableArray;

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__7__;

/***/ }),

/***/ 75:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(76);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_daterangepicker_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _manba = _interopRequireDefault(__webpack_require__(20));

var _config = _interopRequireDefault(__webpack_require__(4));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _dropdown = _interopRequireDefault(__webpack_require__(7));

var _datebase = _interopRequireDefault(__webpack_require__(24));

var _locale = _interopRequireDefault(__webpack_require__(5));

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
var prefix = 'h-datetime';
var _default2 = {
  name: 'hDateRangePicker',
  mixins: [_locale.default],
  props: {
    disabled: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'date' // year, month, week

    },
    option: Object,
    format: String,
    noBorder: {
      type: Boolean,
      default: false
    },
    hasSeconds: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String
    },
    value: Object,
    startWeek: {
      type: Number,
      default: function _default() {
        return _config.default.getOption('datepicker.startWeek');
      }
    }
  },
  watch: {
    value: function value() {
      this.parse(this.value);
    },
    disabled: function disabled() {
      if (this.disabled) {
        this.dropdown.disabled();
      } else {
        this.dropdown.enabled();
      }
    }
  },
  data: function data() {
    var format = this.format || _config.default.getOption('datepicker.format')[this.type];

    if (this.type == 'datetime' && this.hasSeconds) {
      format = _config.default.getOption('datepicker.format.datetimesecond');
    }

    return {
      paramName: _config.default.getOption('datepicker.daterangeOptions.paramName'),
      nowDate: {
        start: '',
        end: ''
      },
      nowView: {
        start: (0, _manba.default)(),
        end: (0, _manba.default)().add(1, _manba.default.MONTH)
      },
      rangeEnd: '',
      nowFormat: format,
      isShow: false
    };
  },
  beforeMount: function beforeMount() {
    this.parse(this.value);
  },
  beforeDestroy: function beforeDestroy() {
    var el = this.el;

    if (el) {
      el.style.display = 'none';
      this.$el.appendChild(el);
    }

    if (this.dropdown) {
      this.dropdown.destory();
    }
  },
  mounted: function mounted() {
    var _this = this;

    var that = this;
    this.$nextTick(function () {
      var el = _this.el = _this.$el.querySelector(".".concat(prefix, ">.h-datetime-show"));

      var content = _this.$el.querySelector(".h-date-picker");

      _this.dropdown = new _dropdown.default(el, {
        trigger: 'click',
        content: content,
        disabled: _this.disabled,
        events: {
          show: function show() {
            that.isShow = true;
            that.$nextTick(function () {
              that.initNowView();
            });
          }
        }
      });
    });
  },
  methods: {
    updateRangeEnd: function updateRangeEnd(string) {
      this.rangeEnd = string;
    },
    setShortcutValue: function setShortcutValue(s) {
      var value = s.value.call(null);
      this.parse(value);
      this.updateValue(this.nowDate);
      this.hide();
    },
    updateView: function updateView(value, rangeType) {
      this.nowView[rangeType] = (0, _manba.default)(value);

      if (this.nowView.start.time() >= this.nowView.end.time()) {
        if (rangeType == 'end') {
          this.nowView.start = (0, _manba.default)(value).add(-1, _manba.default.MONTH);
        } else {
          this.nowView.end = (0, _manba.default)(value).add(1, _manba.default.MONTH);
        }
      }

      this.dropdown.update();
    },
    changeView: function changeView() {
      this.dropdown.update();
    },
    changeEvent: function changeEvent(event) {// let value = event.target.value;
      // this.parse(value);
      // if (utils.isObject(this.option) && this.type != "time") {
      //   let disabled = false;
      //   let type = manbaType[this.type];
      //   if (this.option.start && this.nowView.distance(this.option.start, type) < 0) disabled = this.option.start;
      //   if (this.option.end && !disabled && this.nowView.distance(this.option.end, type) > 0) disabled = this.option.end;
      //   if (this.option.disabled && this.option.disabled.call(null, disabled || this.nowView)) disabled = '';
      //   if (disabled !== false) {
      //     this.parse(disabled);
      //   }
      // }
    },
    parseSingle: function parseSingle(value, range) {
      if (_utils.default.isObject(value) && value[this.paramName[range]]) {
        try {
          var nowValue = (0, _manba.default)(value[this.paramName[range]]);
          this.nowDate[range] = nowValue.format(this.nowFormat);
          return;
        } catch (evt) {}
      }

      this.nowDate[range] = '';
    },
    parse: function parse(value) {
      this.parseSingle(value, 'start');
      this.parseSingle(value, 'end');
      this.rangeEnd = this.nowDate.end;
    },
    initNowView: function initNowView() {
      var start = (0, _manba.default)();

      if (this.nowDate.start) {
        start = (0, _manba.default)(this.nowDate.start);
      }

      var endRange = 1;
      this.nowView = {
        start: start,
        end: (0, _manba.default)(start).add(endRange, _manba.default.MONTH)
      };
      this.$refs.start.resetView();
      this.$refs.end.resetView();
    },
    confirm: function confirm() {
      this.$emit('confirm');
      this.hide();
    },
    hide: function hide() {
      this.dropdown.hide();
    },
    clear: function clear() {
      this.$emit('clear');
      this.updateValue({});
      this.initNowView();
      this.hide();
    },
    setvalue: function setvalue(string) {
      var isEnd = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
      var range = arguments.length > 2 ? arguments[2] : undefined;
      string = string || '';

      var lastDate = _utils.default.copy(this.nowDate);

      if (!isEnd) {
        if (range == 'start') {
          lastDate.start = string;
        } else if (range == 'end') {
          lastDate.end = string;
        }
      } else {
        if (!lastDate.start) {
          lastDate.start = string;
        } else if (!lastDate.end) {
          lastDate.end = string;
        } else {
          lastDate.start = string;
          lastDate.end = '';
        }
      }

      if (isEnd && lastDate.start && lastDate.end && lastDate.start > lastDate.end) {
        var start = lastDate.start;
        lastDate.start = lastDate.end;
        lastDate.end = start;
      }

      this.updateValue(lastDate);
    },
    updateValue: function updateValue(value) {
      var _value;

      value = (_value = {}, (0, _defineProperty2.default)(_value, this.paramName.start, value.start), (0, _defineProperty2.default)(_value, this.paramName.end, value.end), _value);
      this.parse(value);
      this.$emit('input', value);
      this.$emit('change', value);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    }
  },
  computed: {
    showPlaceholder: function showPlaceholder() {
      return this.placeholder || this.t('h.datepicker.placeholder');
    },
    show: function show() {
      if (!_utils.default.isObject(this.value)) {
        return '';
      }

      return "".concat(this.value.start || this.t('h.datepicker.start'), " - ").concat(this.value.end || this.t('h.datepicker.end'));
    },
    shortcuts: function shortcuts() {
      var shortcuts = [];
      var shortcutsConfig = null;

      if (this.option && this.option.shortcuts) {
        shortcutsConfig = this.option.shortcuts;
      }

      if (_utils.default.isArray(shortcutsConfig)) {
        var _iteratorNormalCompletion = true;
        var _didIteratorError = false;
        var _iteratorError = undefined;

        try {
          for (var _iterator = shortcutsConfig[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
            var s = _step.value;

            if (_utils.default.isString(s)) {
              shortcuts.push(_config.default.getOption('datepicker.shortcuts')[s]);
            } else if (_utils.default.isObject(s)) {
              shortcuts.push(s);
            }
          }
        } catch (err) {
          _didIteratorError = true;
          _iteratorError = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion && _iterator.return != null) {
              _iterator.return();
            }
          } finally {
            if (_didIteratorError) {
              throw _iteratorError;
            }
          }
        }
      }

      return shortcuts;
    },
    dateCls: function dateCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, "".concat(prefix), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-range"), true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-input-border"), !this.noBorder), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-disabled"), this.disabled), _ref;
    },
    datePickerCls: function datePickerCls() {
      return (0, _defineProperty2.default)({}, "".concat(prefix, "-has-shortcut"), this.shortcuts.length > 0);
    },
    startOption: function startOption() {
      return this.option;
    },
    endOption: function endOption() {
      return this.option;
    }
  },
  components: {
    dateBase: _datebase.default
  }
};
exports.default = _default2;

/***/ }),

/***/ 8:
/***/ (function(module, exports) {

function _arrayWithoutHoles(arr) {
  if (Array.isArray(arr)) {
    for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) {
      arr2[i] = arr[i];
    }

    return arr2;
  }
}

module.exports = _arrayWithoutHoles;

/***/ }),

/***/ 9:
/***/ (function(module, exports) {

function _iterableToArray(iter) {
  if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter);
}

module.exports = _iterableToArray;

/***/ })

/******/ })["default"]});;