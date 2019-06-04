define(["heyui/lib/utils/utils","heyui/lib/plugins/popper"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__574__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 572);
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

/***/ 572:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(573);


/***/ }),

/***/ 573:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(17));

var _createClass2 = _interopRequireDefault(__webpack_require__(19));

var _popper = _interopRequireDefault(__webpack_require__(574));

var _utils = _interopRequireDefault(__webpack_require__(2));

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

/***/ 574:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__574__;

/***/ })

/******/ })["default"]});;