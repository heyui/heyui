define(["heyui/lib/utils/utils","heyui/lib/utils/config","heyui/lib/components/checkbox","heyui/lib/components/search"], function(__WEBPACK_EXTERNAL_MODULE__2__, __WEBPACK_EXTERNAL_MODULE__4__, __WEBPACK_EXTERNAL_MODULE__15__, __WEBPACK_EXTERNAL_MODULE__23__) { return /******/ (function(modules) { // webpackBootstrap
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
/******/ 	return __webpack_require__(__webpack_require__.s = 448);
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__15__;

/***/ }),

/***/ 157:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(158);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 158:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3));

var _config = _interopRequireDefault(__webpack_require__(4));

var _utils = _interopRequireDefault(__webpack_require__(2));

var _treeitem = _interopRequireDefault(__webpack_require__(451));

var _search = _interopRequireDefault(__webpack_require__(23));

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
var prefix = 'h-tree';

var updateChildStatus = function updateChildStatus(data, column, value) {
  if (data.children) {
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = data.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var child = _step.value;
        child.status[column] = value;
        updateChildStatus(child, column, value);
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
};

var updateParentStatus = function updateParentStatus(objs, data, column, value) {
  var parent = objs[data.parentKey];

  if (!_utils.default.isNull(data.parentKey) && parent) {
    parent.status[column] = value;
    updateParentStatus(objs, parent, column, value);
  }
};

var updateModeAllChildChooseStatus = function updateModeAllChildChooseStatus(data) {
  if (data.children) {
    var isIndeterminateStatus = false;
    var isChoose = !!data.children.length;
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = data.children[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var child = _step2.value;
        updateModeAllChildChooseStatus(child);

        if (child.status.choose || child.status.indeterminate) {
          isIndeterminateStatus = true;
        }

        if (!child.status.choose) {
          isChoose = false;
        }
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

    if (!data.status.choose) {
      if (isChoose) {
        data.status.choose = true;
      } else if (isIndeterminateStatus) {
        data.status.indeterminate = true;
      }
    }
  }
};

var getChooseNode = function getChooseNode(data, options) {
  if (data.status.choose) {
    options.push(data.value);
  } else {
    var _iteratorNormalCompletion3 = true;
    var _didIteratorError3 = false;
    var _iteratorError3 = undefined;

    try {
      for (var _iterator3 = data.children[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
        var child = _step3.value;
        getChooseNode(child, options);
      }
    } catch (err) {
      _didIteratorError3 = true;
      _iteratorError3 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion3 && _iterator3.return != null) {
          _iterator3.return();
        }
      } finally {
        if (_didIteratorError3) {
          throw _iteratorError3;
        }
      }
    }
  }

  return options;
};

var updateModeSomeChildChooseStatus = function updateModeSomeChildChooseStatus(data) {
  if (data.children) {
    var isChoose = false;
    var _iteratorNormalCompletion4 = true;
    var _didIteratorError4 = false;
    var _iteratorError4 = undefined;

    try {
      for (var _iterator4 = data.children[Symbol.iterator](), _step4; !(_iteratorNormalCompletion4 = (_step4 = _iterator4.next()).done); _iteratorNormalCompletion4 = true) {
        var child = _step4.value;

        // updateChildStatus(child);
        if (child.status.choose) {
          isChoose = true;
        }

        updateModeSomeChildChooseStatus(child);
      }
    } catch (err) {
      _didIteratorError4 = true;
      _iteratorError4 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion4 && _iterator4.return != null) {
          _iterator4.return();
        }
      } finally {
        if (_didIteratorError4) {
          throw _iteratorError4;
        }
      }
    }

    if (isChoose) {
      data.status.choose = true;
      data.status.opened = true;
    }
  }
};

var _default = {
  name: 'hTree',
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    filterable: {
      type: Boolean,
      default: false
    },
    chooseMode: {
      type: String,
      default: 'all' // independent, some, all

    },
    value: [Number, String, Array, Object],
    config: String,
    toggleOnSelect: {
      type: Boolean,
      default: true
    },
    selectOnClick: {
      type: Boolean,
      default: false
    },
    className: {
      type: String,
      default: 'h-tree-theme-item-selected'
    }
  },
  data: function data() {
    return {
      updateFromInput: false,
      globalloading: false,
      loading: true,
      status: {
        selected: null
      },
      treeDatas: [],
      treeObj: {},
      searchValue: null
    };
  },
  watch: {
    value: function value() {
      if (this.updateFromInput) {
        this.updateFromInput = false;
        return;
      }

      this.parse();
    },
    'option.datas': function optionDatas() {
      this.initTreeDatas();
    }
  },
  mounted: function mounted() {
    this.initTreeDatas();
    this.parse();
  },
  methods: {
    parse: function parse() {
      if (this.multiple) {
        this.updateChoose(this.value, false);
      } else {
        this.updateSelect(this.value, false);
      }
    },
    updateTreeItem: function updateTreeItem(key, value) {
      var item = this.treeObj[key];

      if (item) {
        for (var _i = 0, _Object$keys = Object.keys(value); _i < _Object$keys.length; _i++) {
          var v = _Object$keys[_i];
          this.$set(item.value, v, value[v]);

          if (v == this.param.titleName) {
            item.title = value[v];
          }
        }
      }
    },
    appendTreeItem: function appendTreeItem(key, value) {
      var parent = this.treeObj[key];
      var obj = this.initTreeNode(value, key);

      if (parent) {
        parent.children.push(obj);
      } else {
        this.treeDatas.push(obj);
      }

      this.treeObj[obj.key] = obj;
    },
    removeTreeItem: function removeTreeItem(key) {
      var item = this.treeObj[key];

      if (item) {
        var index = this.treeDatas.indexOf(item);

        if (index > -1) {
          this.treeDatas.splice(index, 1);
        } else if (item.parentKey && this.treeObj[item.parentKey]) {
          var parent = this.treeObj[item.parentKey];

          if (parent.children.indexOf(item) > -1) {
            parent.children.splice(parent.children.indexOf(item), 1);
          }
        }

        delete this.treeObj[key];
      }
    },
    searchTree: function searchTree(value) {
      this.searchValue = value;

      if (!_utils.default.isNull(this.searchValue) && this.searchValue !== '') {
        var searchValue = this.searchValue.toLowerCase();

        for (var _i2 = 0, _Object$keys2 = Object.keys(this.treeObj); _i2 < _Object$keys2.length; _i2++) {
          var key = _Object$keys2[_i2];
          var tree = this.treeObj[key];
          tree.status.hide = (tree.html || tree.title || '').toLowerCase().indexOf(searchValue) == -1;
        }

        this.expandAll();
      } else {
        for (var _i3 = 0, _Object$keys3 = Object.keys(this.treeObj); _i3 < _Object$keys3.length; _i3++) {
          var _key = _Object$keys3[_i3];
          var _tree = this.treeObj[_key];
          _tree.status.hide = false;
        }
      }
    },
    trigger: function trigger(params) {
      var _this = this;

      var type = params.type;
      var data = params.data;

      if (type == 'toggleTreeEvent') {
        data.status.opened = !data.status.opened;
        this.$emit('open', data.value);
      } else if (type == 'loadDataEvent') {
        if (_utils.default.isFunction(this.param.getDatas)) {
          data.status.loading = true;
          this.param.getDatas.call(this.param, data.value, function (result) {
            data.children = _this.initTreeModeData(result, true);
            data.status.isWait = false;
            data.status.loading = false;
            data.status.opened = true;
          }, function () {
            data.status.loading = false;
          });
        }
      } else if (type == 'selectEvent') {
        if (!this.multiple) {
          this.status.selected = data.key;
          this.$emit('select', data.value);
          this.setvalue();
        }
      } else if (type == 'chooseEvent') {
        var choose = data.status.choose;

        if (this.chooseMode != 'independent') {
          updateChildStatus(data, 'choose', choose);
        }

        this.$emit('choose', this.getChoose());
        if (this.multiple) this.setvalue();
      }
    },
    initTreeDatas: function initTreeDatas() {
      var _this2 = this;

      var datas = [];

      if (_utils.default.isArray(this.param.datas)) {
        datas = this.param.datas;
      }

      if (_utils.default.isFunction(this.param.datas)) {
        datas = this.param.datas.call(null);
      }

      if (_utils.default.isFunction(this.param.getTotalDatas) || _utils.default.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        var loadData = this.param.getTotalDatas || this.param.getDatas;
        var param = [function (result) {
          _this2.treeDatas = _this2.initDatas(_utils.default.copy(result));

          _this2.parse();

          _this2.globalloading = false;

          _this2.$emit('loadDataSuccess');
        }, function () {
          _this2.globalloading = false;
        }];

        if (this.param.getDatas) {
          param.unshift(null);
        }

        loadData.apply(this.param, param);
      }

      this.treeDatas = this.initDatas(datas);
      this.parse();
    },
    initDatas: function initDatas(datas) {
      var list = datas = _utils.default.copy(datas);

      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = _utils.default.generateTree(datas, this.param);
      }

      var isWait = _utils.default.isFunction(this.param.getDatas);

      return this.initTreeModeData(list, isWait);
    },
    initTreeModeData: function initTreeModeData(list, isWait, parentKey) {
      var datas = [];
      var _iteratorNormalCompletion5 = true;
      var _didIteratorError5 = false;
      var _iteratorError5 = undefined;

      try {
        for (var _iterator5 = list[Symbol.iterator](), _step5; !(_iteratorNormalCompletion5 = (_step5 = _iterator5.next()).done); _iteratorNormalCompletion5 = true) {
          var data = _step5.value;
          var obj = this.initTreeNode(data, parentKey, isWait);
          var children = data[this.param.childrenName] || [];
          obj.children = this.initTreeModeData(children, isWait, obj.key);
          this.treeObj[obj.key] = obj;
          datas.push(obj);
        }
      } catch (err) {
        _didIteratorError5 = true;
        _iteratorError5 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion5 && _iterator5.return != null) {
            _iterator5.return();
          }
        } finally {
          if (_didIteratorError5) {
            throw _iteratorError5;
          }
        }
      }

      return datas;
    },
    initTreeNode: function initTreeNode(data, parentKey) {
      var isWait = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
      return {
        key: data[this.param.keyName],
        title: data[this.param.titleName],
        value: data,
        parentKey: parentKey,
        icon: data.treeIcon,
        status: {
          hide: false,
          opened: false,
          loading: false,
          checkable: data.checkable !== false,
          isWait: isWait,
          selected: false,
          indeterminate: false,
          choose: false,
          disabled: !!data.disabled
        },
        children: []
      };
    },
    refresh: function refresh() {
      this.initTreeDatas();
    },
    expandAll: function expandAll() {
      for (var _i4 = 0, _Object$keys4 = Object.keys(this.treeObj); _i4 < _Object$keys4.length; _i4++) {
        var tree = _Object$keys4[_i4];
        this.treeObj[tree].status.opened = true;
      }
    },
    foldAll: function foldAll() {
      for (var _i5 = 0, _Object$keys5 = Object.keys(this.treeObj); _i5 < _Object$keys5.length; _i5++) {
        var tree = _Object$keys5[_i5];
        this.treeObj[tree].status.opened = false;
      }
    },
    expand: function expand(ids) {
      for (var _i6 = 0, _Object$keys6 = Object.keys(this.treeObj); _i6 < _Object$keys6.length; _i6++) {
        var key = _Object$keys6[_i6];
        var tree = this.treeObj[key];
        tree.status.opened = ids.indexOf(tree.key) > -1;
      }
    },
    chooseAll: function chooseAll() {
      for (var key in this.treeObj) {
        this.treeObj[key].status.choose = true;
      }

      this.setvalue();
    },
    updateSelect: function updateSelect(key) {
      var updateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;

      if (key === null) {
        this.status.selected = null;
      } else {
        var option = this.treeObj[key];

        if (option) {
          this.status.selected = key;
          updateParentStatus(this.treeObj, option, 'opened', true);
        }
      }

      if (updateValue) {
        this.setvalue();
      }
    },
    getSelect: function getSelect() {
      if (_utils.default.isNull(this.status.selected)) {
        return null;
      }

      var option = this.treeObj[this.status.selected];
      return option.value;
    },
    updateChoose: function updateChoose(choose) {
      var updateValue = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : true;
      if (!this.multiple) return;
      choose = choose || [];

      for (var _i7 = 0, _Object$keys7 = Object.keys(this.treeObj); _i7 < _Object$keys7.length; _i7++) {
        var key = _Object$keys7[_i7];
        var _tree2 = this.treeObj[key];
        _tree2.status.choose = false;
        _tree2.status.indeterminate = false;
        _tree2.status.opened = false;
      }

      var _iteratorNormalCompletion6 = true;
      var _didIteratorError6 = false;
      var _iteratorError6 = undefined;

      try {
        for (var _iterator6 = choose[Symbol.iterator](), _step6; !(_iteratorNormalCompletion6 = (_step6 = _iterator6.next()).done); _iteratorNormalCompletion6 = true) {
          var _key2 = _step6.value;
          var _tree3 = this.treeObj[_key2];

          if (_tree3) {
            _tree3.status.choose = choose.indexOf(_tree3.key) != -1;

            if (_tree3.status.choose) {
              _tree3.status.opened = true;
              updateParentStatus(this.treeObj, _tree3, 'opened', true);

              if (this.chooseMode == 'all') {
                updateChildStatus(_tree3, 'choose', true);
              }
            }
          }
        }
      } catch (err) {
        _didIteratorError6 = true;
        _iteratorError6 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion6 && _iterator6.return != null) {
            _iterator6.return();
          }
        } finally {
          if (_didIteratorError6) {
            throw _iteratorError6;
          }
        }
      }

      if (this.chooseMode == 'all') {
        var _iteratorNormalCompletion7 = true;
        var _didIteratorError7 = false;
        var _iteratorError7 = undefined;

        try {
          for (var _iterator7 = this.treeDatas[Symbol.iterator](), _step7; !(_iteratorNormalCompletion7 = (_step7 = _iterator7.next()).done); _iteratorNormalCompletion7 = true) {
            var tree = _step7.value;
            updateModeAllChildChooseStatus(tree);
          }
        } catch (err) {
          _didIteratorError7 = true;
          _iteratorError7 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion7 && _iterator7.return != null) {
              _iterator7.return();
            }
          } finally {
            if (_didIteratorError7) {
              throw _iteratorError7;
            }
          }
        }
      }

      if (updateValue) {
        this.setvalue();
      }
    },
    setvalue: function setvalue() {
      var _this3 = this;

      var value = null;

      if (this.multiple) {
        var choose = this.getChoose();
        var keys = choose.map(function (item) {
          return item[_this3.param.keyName];
        });
        value = keys;
      } else {
        var select = this.getSelect();
        value = select ? select[this.param.keyName] : null;
      }

      this.updateFromInput = true;
      this.$emit('input', value);
      this.$emit('change', value);
      var event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    },
    getFullChoose: function getFullChoose() {
      var options = [];

      for (var _i8 = 0, _Object$keys8 = Object.keys(this.treeObj); _i8 < _Object$keys8.length; _i8++) {
        var key = _Object$keys8[_i8];
        var tree = this.treeObj[key];

        if (tree.status.choose) {
          options.push(tree.value);
        }
      }

      return options;
    },
    getChoose: function getChoose() {
      if (this.chooseMode == 'some') {
        return this.getFullChoose();
      } else if (this.chooseMode == 'independent') {
        return this.getFullChoose();
      } else {
        var options = [];
        var _iteratorNormalCompletion8 = true;
        var _didIteratorError8 = false;
        var _iteratorError8 = undefined;

        try {
          for (var _iterator8 = this.treeDatas[Symbol.iterator](), _step8; !(_iteratorNormalCompletion8 = (_step8 = _iterator8.next()).done); _iteratorNormalCompletion8 = true) {
            var data = _step8.value;
            options = getChooseNode(data, options);
          }
        } catch (err) {
          _didIteratorError8 = true;
          _iteratorError8 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion8 && _iterator8.return != null) {
              _iterator8.return();
            }
          } finally {
            if (_didIteratorError8) {
              throw _iteratorError8;
            }
          }
        }

        return options;
      }
    }
  },
  computed: {
    param: function param() {
      if (this.config) {
        return _utils.default.extend({}, _config.default.getOption('tree.default'), _config.default.getOption("tree.configs.".concat(this.config)), this.option);
      } else {
        return _utils.default.extend({}, _config.default.getOption('tree.default'), this.option);
      }
    },
    treeCls: function treeCls() {
      var _ref;

      return _ref = {}, (0, _defineProperty2.default)(_ref, prefix, true), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-multiple"), this.multiple), (0, _defineProperty2.default)(_ref, "".concat(prefix, "-single"), !this.multiple), (0, _defineProperty2.default)(_ref, this.className, !!this.className), _ref;
    }
  },
  components: {
    treeItem: _treeitem.default,
    Search: _search.default
  }
};
exports.default = _default;

/***/ }),

/***/ 159:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(160);
/* harmony import */ var _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0__[key]; }) }(__WEBPACK_IMPORT_KEY__));
 /* harmony default export */ __webpack_exports__["default"] = (_hey_cli_node_modules_babel_loader_lib_index_js_ref_5_0_hey_cli_node_modules_vue_loader_lib_index_js_vue_loader_options_treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_0___default.a); 

/***/ }),

/***/ 160:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _treeslot = _interopRequireDefault(__webpack_require__(452));

var _checkbox = _interopRequireDefault(__webpack_require__(15));

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
var _default = {
  name: 'hTreeItem',
  components: {
    TreeSlot: _treeslot.default,
    Checkbox: _checkbox.default
  },
  props: {
    data: Object,
    param: Object,
    multiple: Boolean,
    status: Object,
    chooseMode: String,
    toggleOnSelect: Boolean,
    selectOnClick: Boolean,
    level: Number
  },
  data: function data() {
    return {};
  },
  methods: {
    clickShow: function clickShow() {
      if (this.selectOnClick) {
        this.select();
      }
    },
    select: function select() {
      if (this.toggleOnSelect || this.multiple) {
        this.toggleTree();
      }

      if (this.data.status.disabled) return;
      this.$emit('trigger', {
        type: 'selectEvent',
        data: this.data
      });

      if (this.multiple && this.data.children.length == 0) {
        this.data.status.choose = !this.data.status.choose;
        this.choose();
      }
    },
    choose: function choose() {
      this.data.status.indeterminate = false;
      this.$emit('trigger', {
        type: 'chooseEvent',
        data: this.data
      });
    },
    trigger: function trigger(data) {
      if (data.type == 'chooseEvent') {
        if (this.chooseMode != 'independent') {
          if (this.data.children) {
            var chooseStatus = true;
            var indeterminateStatus = false;
            var _iteratorNormalCompletion = true;
            var _didIteratorError = false;
            var _iteratorError = undefined;

            try {
              for (var _iterator = this.data.children[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
                var child = _step.value;

                if (!child.status.choose && chooseStatus) {
                  chooseStatus = false;
                }

                if (child.status.choose) {
                  indeterminateStatus = true;
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

            if (this.chooseMode == 'all') {
              this.data.status.choose = chooseStatus;
              this.data.status.indeterminate = indeterminateStatus && !chooseStatus;
            } else if (this.chooseMode == 'some') {
              this.data.status.choose = indeterminateStatus;
              this.data.status.indeterminate = false;
            }
          }
        }
      }

      this.$emit('trigger', data);
    },
    toggleTree: function toggleTree() {
      if (this.data.status.isWait) {
        this.loadData();
      } else {
        this.$emit('trigger', {
          type: 'toggleTreeEvent',
          data: this.data
        });
      }
    },
    loadData: function loadData() {
      this.$emit('trigger', {
        type: 'loadDataEvent',
        data: this.data
      });
    }
  }
};
exports.default = _default;

/***/ }),

/***/ 197:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/tree.vue?vue&type=template&id=610b47e2&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "div",
    { class: _vm.treeCls },
    [
      _vm.filterable
        ? _c("Search", {
            attrs: { block: "" },
            on: { onsearch: _vm.searchTree },
            model: {
              value: _vm.searchValue,
              callback: function($$v) {
                _vm.searchValue = $$v
              },
              expression: "searchValue"
            }
          })
        : _vm._e(),
      _vm._v(" "),
      _c(
        "ul",
        { staticClass: "h-tree-body" },
        _vm._l(_vm.treeDatas, function(tree) {
          return _c("treeItem", {
            key: tree.key,
            attrs: {
              data: tree,
              param: _vm.param,
              multiple: _vm.multiple,
              status: _vm.status,
              "choose-mode": _vm.chooseMode,
              toggleOnSelect: _vm.toggleOnSelect,
              selectOnClick: _vm.selectOnClick,
              level: 0
            },
            on: { trigger: _vm.trigger }
          })
        }),
        1
      ),
      _vm._v(" "),
      _c("Loading", { attrs: { loading: _vm.globalloading } })
    ],
    1
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/tree/tree.vue?vue&type=template&id=610b47e2&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__2__;

/***/ }),

/***/ 23:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__23__;

/***/ }),

/***/ 256:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// CONCATENATED MODULE: ../hey-cli/node_modules/vue-loader/lib/loaders/templateLoader.js??vue-loader-options!../hey-cli/node_modules/vue-loader/lib??vue-loader-options!./src/components/tree/treeitem.vue?vue&type=template&id=00128222&
var render = function() {
  var _vm = this
  var _h = _vm.$createElement
  var _c = _vm._self._c || _h
  return _c(
    "li",
    {
      staticClass: "h-tree-li",
      class: { "h-tree-li-opened": _vm.data.status.opened }
    },
    [
      _c(
        "div",
        {
          directives: [
            {
              name: "show",
              rawName: "v-show",
              value: !_vm.data.status.hide,
              expression: "!data.status.hide"
            }
          ],
          staticClass: "h-tree-show",
          class: {
            "h-tree-show-disabled": _vm.data.status.disabled,
            "h-tree-show-choose": _vm.data.status.choose,
            "h-tree-show-indeterminate": _vm.data.status.indeterminate,
            "h-tree-show-selected": _vm.status.selected == _vm.data.key
          },
          on: { click: _vm.clickShow }
        },
        [
          _vm._l(_vm.level, function(l) {
            return _c("span", { key: l, staticClass: "h-tree-show-space" })
          }),
          _vm._v(" "),
          _c("span", { staticClass: "h-tree-show-expand" }, [
            _vm.data.status.isWait
              ? _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleTree()
                      }
                    }
                  },
                  [
                    !_vm.data.status.loading
                      ? [_c("i", { staticClass: "h-icon-angle-right" })]
                      : [_c("i", { staticClass: "h-icon-loading" })]
                  ],
                  2
                )
              : _vm.data.children && _vm.data.children.length > 0
              ? _c(
                  "span",
                  {
                    on: {
                      click: function($event) {
                        $event.stopPropagation()
                        return _vm.toggleTree()
                      }
                    }
                  },
                  [_c("i", { staticClass: "h-icon-angle-right" })]
                )
              : _vm._e()
          ]),
          _vm._v(" "),
          _vm.multiple && _vm.data.status.checkable
            ? _c("Checkbox", {
                attrs: {
                  disabled: _vm.data.status.disabled,
                  indeterminate: _vm.data.status.indeterminate
                },
                on: {
                  input: function($event) {
                    return _vm.choose(_vm.data)
                  }
                },
                model: {
                  value: _vm.data.status.choose,
                  callback: function($$v) {
                    _vm.$set(_vm.data.status, "choose", $$v)
                  },
                  expression: "data.status.choose"
                }
              })
            : _vm._e(),
          _vm._v(" "),
          _c(
            "div",
            {
              staticClass: "h-tree-show-desc",
              class: { selected: _vm.status.selected == _vm.data.key },
              on: { click: _vm.select }
            },
            [
              _vm.data.icon
                ? _c("span", {
                    staticClass: "h-tree-show-icon",
                    class: _vm.data.icon
                  })
                : _vm._e(),
              _vm._v(" "),
              _vm.data.title != null
                ? _c("span", [_vm._v(_vm._s(_vm.data.title))])
                : _c("span", [
                    _vm._v(_vm._s(_vm._f("hlang")("h.common.empty")))
                  ])
            ]
          ),
          _vm._v(" "),
          _c("TreeSlot", { attrs: { data: _vm.data.value } })
        ],
        2
      ),
      _vm._v(" "),
      _vm.data.children && _vm.data.children.length > 0
        ? _c(
            "ul",
            { staticClass: "h-tree-ul" },
            _vm._l(_vm.data.children, function(child) {
              return _c("hTreeItem", {
                key: child.key,
                attrs: {
                  data: child,
                  param: _vm.param,
                  status: _vm.status,
                  multiple: _vm.multiple,
                  "choose-mode": _vm.chooseMode,
                  toggleOnSelect: _vm.toggleOnSelect,
                  selectOnClick: _vm.selectOnClick,
                  level: _vm.level + 1
                },
                on: { trigger: _vm.trigger }
              })
            }),
            1
          )
        : _vm._e()
    ]
  )
}
var staticRenderFns = []
render._withStripped = true


// CONCATENATED MODULE: ./src/components/tree/treeitem.vue?vue&type=template&id=00128222&
/* concated harmony reexport render */__webpack_require__.d(__webpack_exports__, "a", function() { return render; });
/* concated harmony reexport staticRenderFns */__webpack_require__.d(__webpack_exports__, "b", function() { return staticRenderFns; });


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

/***/ 4:
/***/ (function(module, exports) {

module.exports = __WEBPACK_EXTERNAL_MODULE__4__;

/***/ }),

/***/ 448:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(449);


/***/ }),

/***/ 449:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _interopRequireDefault = __webpack_require__(0);

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var _tree = _interopRequireDefault(__webpack_require__(450));

var _default = _tree.default;
exports.default = _default;

/***/ }),

/***/ 450:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _tree_vue_vue_type_template_id_610b47e2___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(197);
/* harmony import */ var _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(157);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _tree_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _tree_vue_vue_type_template_id_610b47e2___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _tree_vue_vue_type_template_id_610b47e2___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/tree/tree.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 451:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _treeitem_vue_vue_type_template_id_00128222___WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(256);
/* harmony import */ var _treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(159);
/* harmony reexport (unknown) */ for(var __WEBPACK_IMPORT_KEY__ in _treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__) if(__WEBPACK_IMPORT_KEY__ !== 'default') (function(key) { __webpack_require__.d(__webpack_exports__, key, function() { return _treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__[key]; }) }(__WEBPACK_IMPORT_KEY__));
/* harmony import */ var _hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);





/* normalize component */

var component = Object(_hey_cli_node_modules_vue_loader_lib_runtime_componentNormalizer_js__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"])(
  _treeitem_vue_vue_type_script_lang_js___WEBPACK_IMPORTED_MODULE_1__["default"],
  _treeitem_vue_vue_type_template_id_00128222___WEBPACK_IMPORTED_MODULE_0__[/* render */ "a"],
  _treeitem_vue_vue_type_template_id_00128222___WEBPACK_IMPORTED_MODULE_0__[/* staticRenderFns */ "b"],
  false,
  null,
  null,
  null
  
)

/* hot reload */
if (false) { var api; }
component.options.__file = "src/components/tree/treeitem.vue"
/* harmony default export */ __webpack_exports__["default"] = (component.exports);

/***/ }),

/***/ 452:
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

var getParent = function getParent(vm) {
  var parent = vm.$parent;
  var filterTag = new Set(['Tree', 'hTree', 'h-tree']);

  while (parent != null && !filterTag.has(parent.$options._componentTag || parent.$options.name)) {
    parent = parent.$parent;
  }

  if (!parent) {
    console.error('[HeyUI Error] Tree Component: Please put TreeItem component in the Tree Component');
  }

  return parent;
};

var _default = {
  name: 'hTreeSlot',
  props: {
    data: Object
  },
  render: function render(h) {
    var parent = getParent(this);

    if (parent.$scopedSlots && parent.$scopedSlots.item) {
      return h('div', {
        class: 'h-tree-item-slot'
      }, [parent.$scopedSlots.item({
        item: this.data
      })]);
    }

    return h('span');
  }
};
exports.default = _default;

/***/ })

/******/ })["default"]});;