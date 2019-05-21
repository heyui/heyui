define(["heyui/lib/utils/utils","heyui/lib/plugins/popper"], function(__WEBPACK_EXTERNAL_MODULE__51__, __WEBPACK_EXTERNAL_MODULE__696__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 694);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math
  ? window : typeof self != 'undefined' && self.Math == Math ? self
  // eslint-disable-next-line no-new-func
  : Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef


/***/ }),

/***/ 1:
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(5)(function () {
  return Object.defineProperty({}, 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 10:
/***/ (function(module, exports) {

var core = module.exports = { version: '2.6.7' };
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef


/***/ }),

/***/ 101:
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(4);
var aFunction = __webpack_require__(34);
var SPECIES = __webpack_require__(7)('species');
module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};


/***/ }),

/***/ 107:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var isRegExp = __webpack_require__(96);
var anObject = __webpack_require__(4);
var speciesConstructor = __webpack_require__(101);
var advanceStringIndex = __webpack_require__(94);
var toLength = __webpack_require__(33);
var callRegExpExec = __webpack_require__(78);
var regexpExec = __webpack_require__(70);
var fails = __webpack_require__(5);
var $min = Math.min;
var $push = [].push;
var $SPLIT = 'split';
var LENGTH = 'length';
var LAST_INDEX = 'lastIndex';
var MAX_UINT32 = 0xffffffff;

// babel-minify transpiles RegExp('x', 'y') -> /x/y and it causes SyntaxError
var SUPPORTS_Y = !fails(function () { RegExp(MAX_UINT32, 'y'); });

// @@split logic
__webpack_require__(79)('split', 2, function (defined, SPLIT, $split, maybeCallNative) {
  var internalSplit;
  if (
    'abbc'[$SPLIT](/(b)*/)[1] == 'c' ||
    'test'[$SPLIT](/(?:)/, -1)[LENGTH] != 4 ||
    'ab'[$SPLIT](/(?:ab)*/)[LENGTH] != 2 ||
    '.'[$SPLIT](/(.?)(.?)/)[LENGTH] != 4 ||
    '.'[$SPLIT](/()()/)[LENGTH] > 1 ||
    ''[$SPLIT](/.?/)[LENGTH]
  ) {
    // based on es5-shim implementation, need to rework it
    internalSplit = function (separator, limit) {
      var string = String(this);
      if (separator === undefined && limit === 0) return [];
      // If `separator` is not a regex, use native split
      if (!isRegExp(separator)) return $split.call(string, separator, limit);
      var output = [];
      var flags = (separator.ignoreCase ? 'i' : '') +
                  (separator.multiline ? 'm' : '') +
                  (separator.unicode ? 'u' : '') +
                  (separator.sticky ? 'y' : '');
      var lastLastIndex = 0;
      var splitLimit = limit === undefined ? MAX_UINT32 : limit >>> 0;
      // Make `global` and avoid `lastIndex` issues by working with a copy
      var separatorCopy = new RegExp(separator.source, flags + 'g');
      var match, lastIndex, lastLength;
      while (match = regexpExec.call(separatorCopy, string)) {
        lastIndex = separatorCopy[LAST_INDEX];
        if (lastIndex > lastLastIndex) {
          output.push(string.slice(lastLastIndex, match.index));
          if (match[LENGTH] > 1 && match.index < string[LENGTH]) $push.apply(output, match.slice(1));
          lastLength = match[0][LENGTH];
          lastLastIndex = lastIndex;
          if (output[LENGTH] >= splitLimit) break;
        }
        if (separatorCopy[LAST_INDEX] === match.index) separatorCopy[LAST_INDEX]++; // Avoid an infinite loop
      }
      if (lastLastIndex === string[LENGTH]) {
        if (lastLength || !separatorCopy.test('')) output.push('');
      } else output.push(string.slice(lastLastIndex));
      return output[LENGTH] > splitLimit ? output.slice(0, splitLimit) : output;
    };
  // Chakra, V8
  } else if ('0'[$SPLIT](undefined, 0)[LENGTH]) {
    internalSplit = function (separator, limit) {
      return separator === undefined && limit === 0 ? [] : $split.call(this, separator, limit);
    };
  } else {
    internalSplit = $split;
  }

  return [
    // `String.prototype.split` method
    // https://tc39.github.io/ecma262/#sec-string.prototype.split
    function split(separator, limit) {
      var O = defined(this);
      var splitter = separator == undefined ? undefined : separator[SPLIT];
      return splitter !== undefined
        ? splitter.call(separator, O, limit)
        : internalSplit.call(String(O), separator, limit);
    },
    // `RegExp.prototype[@@split]` method
    // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@split
    //
    // NOTE: This cannot be properly polyfilled in engines that don't support
    // the 'y' flag.
    function (regexp, limit) {
      var res = maybeCallNative(internalSplit, regexp, this, limit, internalSplit !== $split);
      if (res.done) return res.value;

      var rx = anObject(regexp);
      var S = String(this);
      var C = speciesConstructor(rx, RegExp);

      var unicodeMatching = rx.unicode;
      var flags = (rx.ignoreCase ? 'i' : '') +
                  (rx.multiline ? 'm' : '') +
                  (rx.unicode ? 'u' : '') +
                  (SUPPORTS_Y ? 'y' : 'g');

      // ^(? + rx + ) is needed, in combination with some S slicing, to
      // simulate the 'y' flag.
      var splitter = new C(SUPPORTS_Y ? rx : '^(?:' + rx.source + ')', flags);
      var lim = limit === undefined ? MAX_UINT32 : limit >>> 0;
      if (lim === 0) return [];
      if (S.length === 0) return callRegExpExec(splitter, S) === null ? [S] : [];
      var p = 0;
      var q = 0;
      var A = [];
      while (q < S.length) {
        splitter.lastIndex = SUPPORTS_Y ? q : 0;
        var z = callRegExpExec(splitter, SUPPORTS_Y ? S : S.slice(q));
        var e;
        if (
          z === null ||
          (e = $min(toLength(splitter.lastIndex + (SUPPORTS_Y ? 0 : q)), S.length)) === p
        ) {
          q = advanceStringIndex(S, q, unicodeMatching);
        } else {
          A.push(S.slice(p, q));
          if (A.length === lim) return A;
          for (var i = 1; i <= z.length - 1; i++) {
            A.push(z[i]);
            if (A.length === lim) return A;
          }
          q = p = e;
        }
      }
      A.push(S.slice(p));
      return A;
    }
  ];
});


/***/ }),

/***/ 108:
/***/ (function(module, exports) {

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

module.exports = _classCallCheck;

/***/ }),

/***/ 112:
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

/***/ 12:
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();
module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};


/***/ }),

/***/ 13:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(2);
// instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string
module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};


/***/ }),

/***/ 130:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(131);
var anObject = __webpack_require__(4);
var $flags = __webpack_require__(76);
var DESCRIPTORS = __webpack_require__(1);
var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function (fn) {
  __webpack_require__(9)(RegExp.prototype, TO_STRING, fn, true);
};

// 21.2.5.14 RegExp.prototype.toString()
if (__webpack_require__(5)(function () { return $toString.call({ source: 'a', flags: 'b' }) != '/a/b'; })) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/',
      'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  });
// FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}


/***/ }),

/***/ 131:
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(1) && /./g.flags != 'g') __webpack_require__(6).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(76)
});


/***/ }),

/***/ 132:
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;
if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(9)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this);
    // eslint-disable-next-line no-self-compare
    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}


/***/ }),

/***/ 14:
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(10);
var global = __webpack_require__(0);
var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});

(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(23) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});


/***/ }),

/***/ 15:
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

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};


/***/ }),

/***/ 17:
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};


/***/ }),

/***/ 18:
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = function (it) {
  return typeof it === 'object' ? it !== null : typeof it === 'function';
};


/***/ }),

/***/ 20:
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;
module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};


/***/ }),

/***/ 21:
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(34);
module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;
  switch (length) {
    case 1: return function (a) {
      return fn.call(that, a);
    };
    case 2: return function (a, b) {
      return fn.call(that, a, b);
    };
    case 3: return function (a, b, c) {
      return fn.call(that, a, b, c);
    };
  }
  return function (/* ...args */) {
    return fn.apply(that, arguments);
  };
};


/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = false;


/***/ }),

/***/ 24:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var core = __webpack_require__(10);
var hide = __webpack_require__(8);
var redefine = __webpack_require__(9);
var ctx = __webpack_require__(21);
var PROTOTYPE = 'prototype';

var $export = function (type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;
  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined;
    // export native or passed
    out = (own ? target : source)[key];
    // bind timers to global for call from export context
    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out;
    // extend global
    if (target) redefine(target, key, out, type & $export.U);
    // export
    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};
global.core = core;
// type bitmap
$export.F = 1;   // forced
$export.G = 2;   // global
$export.S = 4;   // static
$export.P = 8;   // proto
$export.B = 16;  // bind
$export.W = 32;  // wrap
$export.U = 64;  // safe
$export.R = 128; // real proto method for `library`
module.exports = $export;


/***/ }),

/***/ 27:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
var document = __webpack_require__(0).document;
// typeof document.createElement is 'object' in old IE
var is = isObject(document) && isObject(document.createElement);
module.exports = function (it) {
  return is ? document.createElement(it) : {};
};


/***/ }),

/***/ 28:
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(1) && !__webpack_require__(5)(function () {
  return Object.defineProperty(__webpack_require__(27)('div'), 'a', { get: function () { return 7; } }).a != 7;
});


/***/ }),

/***/ 3:
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;
module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};


/***/ }),

/***/ 33:
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(20);
var min = Math.min;
module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};


/***/ }),

/***/ 34:
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};


/***/ }),

/***/ 37:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(14)('native-function-to-string', Function.toString);


/***/ }),

/***/ 4:
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(2);
module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};


/***/ }),

/***/ 5:
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};


/***/ }),

/***/ 51:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__51__;

/***/ }),

/***/ 56:
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(18);
var TAG = __webpack_require__(7)('toStringTag');
// ES3 wrong here
var ARG = cof(function () { return arguments; }()) == 'Arguments';

// fallback for IE11 Script Access Denied error
var tryGet = function (it, key) {
  try {
    return it[key];
  } catch (e) { /* empty */ }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null'
    // @@toStringTag case
    : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T
    // builtinTag case
    : ARG ? cof(O)
    // ES3 arguments fallback
    : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};


/***/ }),

/***/ 6:
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(4);
var IE8_DOM_DEFINE = __webpack_require__(28);
var toPrimitive = __webpack_require__(13);
var dP = Object.defineProperty;

exports.f = __webpack_require__(1) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) { /* empty */ }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};


/***/ }),

/***/ 694:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(695);


/***/ }),

/***/ 695:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(15);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

__webpack_require__(130);

__webpack_require__(132);

__webpack_require__(71);

__webpack_require__(107);

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(108));

var _createClass2 = _interopRequireDefault(__webpack_require__(112));

var _popper = _interopRequireDefault(__webpack_require__(696));

var _utils = _interopRequireDefault(__webpack_require__(51));

var DEFAULT_OPTIONS = {
  container: false,
  delay: 0,
  html: false,
  placement: 'top',
  triggerOnce: false,
  content: '',
  disabled: false,
  trigger: 'hover focus',
  offset: 0,
  equalWidth: false,
  type: 'dropdown',
  preventOverflow: false,
  getContainer: null
};
/**
 * Create a new Pop.js instance
 * @class Pop
 * @param {HTMLElement} reference - The reference element used to position the pop
 * @param {Object} options
 * @param {String} options.placement=bottom
 *      Placement of the popper accepted values: `top(-start, -end), right(-start, -end), bottom(-start, -end),
 *      left(-start, -end)`
 *
 * @param {HTMLElement} reference - The DOM node used as reference of the pop (it can be a jQuery element).
 * @param {Object} options - Configuration of the pop
 * @param {HTMLElement|String|false} options.container=false - Append the pop to a specific element.
 * @param {Number|Object} options.delay=0
 * @param {Boolean} options.html=false - Insert HTML into the pop. If false, the content will inserted with `innerText`.
 * @param {String|PlacementFunction} options.placement='top' - One of the allowed placements, or a function returning one of them.
 * @param {String} options.template='<div class="pop" role="pop"><div class="pop-arrow"></div><div class="pop-inner"></div></div>'
 *      Base HTML to used when creating the pop.
 *      The pop's `content` will be injected into the `.pop-inner` or `.pop__inner`.
 *      `.pop-arrow` or `.pop__arrow` will become the pop's arrow.
 *      The outermost wrapper element should have the `.pop` class.
 * @param {String|HTMLElement|ContentFunction} options.content='' - Default content value if `content` attribute isn't present.
 * @param {String} options.trigger='click hover focus manual contextMenu'
 *      How pop is triggered - click | hover | focus | manual | contextMenu.
 *      You may pass multiple triggers; separate them with a space. `manual` cannot be combined with any other trigger.
 * @param {HTMLElement} options.boundariesElement
 *      The element used as boundaries for the pop. For more information refer to Popper.js'
 *      [boundariesElement docs](https://popper.js.org/popper-documentation.html)
 * @param {Number|String} options.offset
 * @return {Object} instance - The generated pop instance
 */

var Pop =
/*#__PURE__*/
function () {
  function Pop(reference, options) {
    (0, _classCallCheck2.default)(this, Pop);
    options = _utils.default.extend({}, DEFAULT_OPTIONS, options);
    this.reference = reference;
    this.options = options;
    var triggerEvents = typeof options.trigger === 'string' ? options.trigger.split(' ').filter(function (trigger) {
      return ['click', 'hover', 'focus', 'contextMenu'].indexOf(trigger) !== -1;
    }) : [];
    this.isOpen = false;
    this.arrowSelector = options.arrowSelector;
    this.innerSelector = options.innerSelector;
    this.triggerEvents = [];

    if (options.content.nodeType === 1) {
      options.content.style.display = 'none';
    }

    this.setEventListeners(triggerEvents, options);
  }

  (0, _createClass2.default)(Pop, [{
    key: "create",
    value: function create(reference, template, content) {
      var popGenerator = window.document.createElement('div');
      popGenerator.innerHTML = template;
      var popNode = popGenerator.childNodes[0];
      var allowHtml = this.options.html;
      popNode.id = "pop_".concat(Math.random().toString(36).substr(2, 10));
      var contentNode = popGenerator.querySelector(this.innerSelector);

      if (content.nodeType === 1) {
        if (allowHtml) contentNode.appendChild(content);
        content.style.display = 'block';
      } else if (_utils.default.isFunction(content)) {
        var contentText = content.call(reference);

        if (allowHtml) {
          contentNode.innerHTML = contentText;
        } else {
          contentNode.innerText = contentText;
        }
      } else if (allowHtml) {
        contentNode.innerHTML = content;
      } else {
        contentNode.innerText = content;
      }

      return popNode;
    }
  }, {
    key: "updateContent",
    value: function updateContent(content) {
      this.options.content = content;

      if (!this.popNode || content == undefined) {
        return;
      }

      var contentNode = this.popNode.querySelector(this.innerSelector);
      var allowHtml = this.options.html;

      if (content.nodeType === 1) {
        if (allowHtml) contentNode.replaceChild(content, contentNode.firstChild);
        content.style.display = 'block';
      } else if (allowHtml) {
        contentNode.innerHTML = content;
      } else {
        contentNode.innerText = content;
      }

      this.update();
    }
  }, {
    key: "initPopNode",
    value: function initPopNode() {
      var reference = this.reference;
      var options = this.options;
      var content = options.content || reference.getAttribute('content');

      if (!content) {
        return this;
      }

      var popNode = this.create(reference, options.template, content, options.html);
      popNode.setAttribute('aria-describedby', popNode.id);
      this.reference.setAttribute('aria-describe', popNode.id);
      var container = this.findContainer();
      container.appendChild(popNode);

      if (options.class) {
        _utils.default.addClass(popNode, options.class);
      }

      if (options.className) {
        _utils.default.addClass(popNode, options.className);
      }

      this.popNode = popNode;
      this.popNode.setAttribute('aria-hidden', 'true');

      if (this.options.trigger.indexOf('hover') > -1) {
        this.setPopNodeEvent();
      }
    }
  }, {
    key: "initPopper",
    value: function initPopper() {
      var reference = this.reference;
      var options = this.options;
      var popNode = this.popNode;
      var container = this.findContainer();
      var modifiers = {
        computeStyle: {
          gpuAcceleration: false
        },
        arrow: {
          enabled: false
        },
        inner: {
          enabled: false
        },
        preventOverflow: {
          boundariesElement: 'window',
          enabled: true
        }
      };

      if (this.options.offset) {
        modifiers.offset = {
          enabled: true,
          offset: this.options.offset
        };
      }

      if (this.options.preventOverflow && container.tagName != 'BODY' && container.tagName != 'HTML') {
        modifiers.hide = {
          enabled: false
        };
        modifiers.flip = {
          boundariesElement: container,
          enabled: true
        };
        modifiers.preventOverflow = {
          enabled: false
        };
      }

      if (this.options.trigger == 'contextMenu') {
        modifiers.flip = {
          enabled: false
        };
      }

      var popperOptions = {
        placement: options.placement,
        modifiers: modifiers
      };
      this.popperOptions = popperOptions;
      this.popperInstance = new _popper.default(reference, popNode, popperOptions);
    }
  }, {
    key: "disabled",
    value: function disabled() {
      this.options.disabled = true;
    }
  }, {
    key: "enabled",
    value: function enabled() {
      this.options.disabled = false;
    }
  }, {
    key: "show",
    value: function show(event) {
      var _this = this;

      if (this.hideTimeout) clearTimeout(this.hideTimeout);
      if (this.hideTimeout2) clearTimeout(this.hideTimeout2);

      if (this.options.events && _utils.default.isFunction(this.options.events.show)) {
        this.options.events.show(event);
      }

      if (this.isOpen || this.options.disabled) {
        return this;
      }

      this.isOpen = true;

      if (!this.popNode) {
        this.initPopNode();
      }

      if (!this.popperInstance) {
        this.initPopper();
      }

      this.popperInstance.enableEventListeners();

      if (!this.popNode) {
        return;
      }

      if (this.options.equalWidth) {
        this.popNode.style.width = "".concat(this.reference.clientWidth, "px");
      }

      this.popNode.style.display = '';

      _utils.default.addClass(this.reference, 'h-pop-trigger');

      this.showTimeout = setTimeout(function () {
        _this.popNode.setAttribute('aria-hidden', 'false');

        _this.popperInstance.update();
      }, 0);
      return this;
    }
  }, {
    key: "update",
    value: function update() {
      if (this.popperInstance) {
        this.popperInstance.update();
      }
    }
  }, {
    key: "hide",
    value: function hide() {
      var _this2 = this;

      if (this.showTimeout) clearTimeout(this.showTimeout);
      if (this.hideTimeout) clearTimeout(this.hideTimeout);

      if (this.isOpen === false) {
        return;
      }

      if (!document.body.contains(this.popNode)) {
        return;
      }

      if (!this.popNode) return this;
      if (!this.popperInstance) return this;
      this.hideTimeout = setTimeout(function () {
        _utils.default.removeClass(_this2.reference, 'h-pop-trigger');

        if (_this2.options.events && _utils.default.isFunction(_this2.options.events.hide)) {
          _this2.options.events.hide.call(null);
        }

        if (_this2.popNode) {
          _this2.popNode.setAttribute('aria-hidden', 'true');
        }

        _this2.isOpen = false;
        _this2.hideTimeout2 = setTimeout(function () {
          if (_this2.popNode) {
            _this2.popNode.style.display = 'none';

            if (_this2.popperInstance) {
              _this2.popperInstance.disableEventListeners();
            }
          }
        }, 300);
      }, this.options.delay);
      return this;
    }
  }, {
    key: "destory",
    value: function destory() {
      var _this3 = this;

      if (this.documentHandler) {
        document.removeEventListener('click', this.documentHandler);
        document.removeEventListener('contextmenu', this.documentHandler);
      }

      if (this.popperInstance) {
        this.popperInstance.destroy();
      }

      this.triggerEvents.forEach(function (_ref) {
        var event = _ref.event,
            func = _ref.func;

        _this3.reference.removeEventListener(event, func, event == 'focus' || event == 'blur');
      });
      this.triggerEvents = [];

      if (this.popNode) {
        this.hide();
        this.popNode.parentNode.removeChild(this.popNode);
        this.popNode = null;
      }

      return this;
    }
  }, {
    key: "findContainer",
    value: function findContainer() {
      var container = this.options.container;

      if (typeof container === 'string') {
        container = window.document.querySelector(container);
      } else if (this.options.getContainer) {
        container = this.options.getContainer(this.reference);
      } else if (container === false) {
        container = document.body;
      }

      return container;
    }
  }, {
    key: "setEventListeners",
    value: function setEventListeners(triggerEvents, options) {
      var _this4 = this;

      var reference = this.reference;
      var directtriggerEvents = [];
      var oppositetriggerEvents = [];
      triggerEvents.forEach(function (event) {
        switch (event) {
          case 'hover':
            directtriggerEvents.push('mouseenter');
            oppositetriggerEvents.push('mouseleave');
            break;

          case 'focus':
            directtriggerEvents.push('focus');
            oppositetriggerEvents.push('blur');
            break;

          case 'click':
            directtriggerEvents.push('click');
            if (!_this4.options.triggerOnce) oppositetriggerEvents.push('click');
            break;

          case 'contextMenu':
            directtriggerEvents.push('contextmenu');
            oppositetriggerEvents.push('click');
            break;

          default:
            break;
        }
      });
      directtriggerEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.type == 'contextmenu') {
            evt.preventDefault(); // evt.stopPropagation();

            if (window.getSelection) {
              window.getSelection().removeAllRanges();
            } else {
              document.selection.empty();
            }

            var rect = reference.getBoundingClientRect();
            _this4.options.offset = "".concat(evt.clientX - rect.x, ", -").concat(rect.bottom - evt.clientY - 10);

            if (_this4.popperInstance) {
              _this4.popperInstance.defaultOptions.modifiers.offset = {
                enabled: true,
                offset: _this4.options.offset
              };

              _this4.popperInstance.updateModifiers();

              _this4.popperInstance.update();
            }
          }

          if (event == 'click' && _this4.isOpen === true) {
            return;
          }

          evt.usedByPop = true;

          _this4.show(evt);
        };

        _this4.triggerEvents.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func, event == 'focus');
      });
      oppositetriggerEvents.forEach(function (event) {
        var func = function func(evt) {
          if (evt.usedByPop === true) {
            return;
          }

          _this4.hide();
        };

        _this4.triggerEvents.push({
          event: event,
          func: func
        });

        reference.addEventListener(event, func, event == 'blur');
      });

      if (options.closeOnClickBody) {
        this.documentHandler = function (e) {
          if (!_this4.popNode || e.target.parentNode == null) return;

          if (!_this4.isOpen || reference.contains(e.target) || _this4.popNode.contains(e.target)) {
            return false;
          }

          var targetReference = e.reference;

          if (reference && _this4.popNode.contains(targetReference)) {
            return false;
          }

          var target = e.target;

          while (target && target.tagName != 'BODY' && target.tagName != 'HTML' && !target.getAttribute('aria-describedby') && target.parentNode) {
            target = target.parentNode;
          }

          if (target.tagName != 'BODY' && target.tagName != 'HTML') {
            var targetTrigger = document.body.querySelector("[aria-describe=\"".concat(target.getAttribute('aria-describedby'), "\"]"));

            if (targetTrigger && _this4.popNode.contains(targetTrigger)) {
              return false;
            }
          }

          _this4.hide();
        };

        document.addEventListener('click', this.documentHandler);
        document.addEventListener('contextmenu', this.documentHandler);
      }
    }
  }, {
    key: "setPopNodeEvent",
    value: function setPopNodeEvent() {
      var _this5 = this;

      this.popNode.addEventListener('mouseenter', function (event) {
        _this5.show(event);
      });
      this.popNode.addEventListener('mouseout', function (event) {
        var relatedreference = event.relatedreference || event.toElement || event.relatedTarget;

        if (!_this5.popNode.contains(relatedreference) && relatedreference != _this5.reference && !_this5.reference.contains(relatedreference)) {
          _this5.hide();
        }
      });
    }
  }]);
  return Pop;
}();

var _default = Pop;
exports.default = _default;

/***/ }),

/***/ 696:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__696__;

/***/ }),

/***/ 7:
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(14)('wks');
var uid = __webpack_require__(12);
var Symbol = __webpack_require__(0).Symbol;
var USE_SYMBOL = typeof Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] =
    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : uid)('Symbol.' + name));
};

$exports.store = store;


/***/ }),

/***/ 70:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(76);

var nativeExec = RegExp.prototype.exec;
// This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.
var nativeReplace = String.prototype.replace;

var patchedExec = nativeExec;

var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = (function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
})();

// nonparticipating capturing group, copied from es5-shim's String#split patch.
var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;

var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }
    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];

    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }
    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;


/***/ }),

/***/ 71:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 19.1.3.6 Object.prototype.toString()
var classof = __webpack_require__(56);
var test = {};
test[__webpack_require__(7)('toStringTag')] = 'z';
if (test + '' != '[object z]') {
  __webpack_require__(9)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}


/***/ }),

/***/ 72:
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(20);
var defined = __webpack_require__(17);
// true  -> String#at
// false -> String#codePointAt
module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff
      ? TO_STRING ? s.charAt(i) : a
      : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};


/***/ }),

/***/ 76:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

// 21.2.5.3 get RegExp.prototype.flags
var anObject = __webpack_require__(4);
module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};


/***/ }),

/***/ 78:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var classof = __webpack_require__(56);
var builtinExec = RegExp.prototype.exec;

 // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec
module.exports = function (R, S) {
  var exec = R.exec;
  if (typeof exec === 'function') {
    var result = exec.call(R, S);
    if (typeof result !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }
    return result;
  }
  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }
  return builtinExec.call(R, S);
};


/***/ }),

/***/ 79:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

__webpack_require__(88);
var redefine = __webpack_require__(9);
var hide = __webpack_require__(8);
var fails = __webpack_require__(5);
var defined = __webpack_require__(17);
var wks = __webpack_require__(7);
var regexpExec = __webpack_require__(70);

var SPECIES = wks('species');

var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;
  re.exec = function () {
    var result = [];
    result.groups = { a: '7' };
    return result;
  };
  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = (function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;
  re.exec = function () { return originalExec.apply(this, arguments); };
  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
})();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);

  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};
    O[SYMBOL] = function () { return 7; };
    return ''[KEY](O) != 7;
  });

  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;
    re.exec = function () { execCalled = true; return null; };
    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};
      re.constructor[SPECIES] = function () { return re; };
    }
    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (
    !DELEGATES_TO_SYMBOL ||
    !DELEGATES_TO_EXEC ||
    (KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS) ||
    (KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC)
  ) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(
      defined,
      SYMBOL,
      ''[KEY],
      function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
        if (regexp.exec === regexpExec) {
          if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
            // The native String method already delegates to @@method (this
            // polyfilled function), leasing to infinite recursion.
            // We avoid it by directly calling the native @@method method.
            return { done: true, value: nativeRegExpMethod.call(regexp, str, arg2) };
          }
          return { done: true, value: nativeMethod.call(str, regexp, arg2) };
        }
        return { done: false };
      }
    );
    var strfn = fns[0];
    var rxfn = fns[1];

    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2
      // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
      // 21.2.5.11 RegExp.prototype[@@split](string, limit)
      ? function (string, arg) { return rxfn.call(string, this, arg); }
      // 21.2.5.6 RegExp.prototype[@@match](string)
      // 21.2.5.9 RegExp.prototype[@@search](string)
      : function (string) { return rxfn.call(string, this); }
    );
  }
};


/***/ }),

/***/ 8:
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);
var createDesc = __webpack_require__(16);
module.exports = __webpack_require__(1) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};


/***/ }),

/***/ 88:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var regexpExec = __webpack_require__(70);
__webpack_require__(24)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});


/***/ }),

/***/ 9:
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(0);
var hide = __webpack_require__(8);
var has = __webpack_require__(3);
var SRC = __webpack_require__(12)('src');
var $toString = __webpack_require__(37);
var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(10).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  }
// add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});


/***/ }),

/***/ 94:
/***/ (function(module, exports, __webpack_require__) {

"use strict";

var at = __webpack_require__(72)(true);

 // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex
module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};


/***/ }),

/***/ 96:
/***/ (function(module, exports, __webpack_require__) {

// 7.2.8 IsRegExp(argument)
var isObject = __webpack_require__(2);
var cof = __webpack_require__(18);
var MATCH = __webpack_require__(7)('match');
module.exports = function (it) {
  var isRegExp;
  return isObject(it) && ((isRegExp = it[MATCH]) !== undefined ? !!isRegExp : cof(it) == 'RegExp');
};


/***/ })

/******/ })["default"]});;