<template>
  <div :class="categoryCls" :disabled="disabled">
    <div class="h-categorypicker-show">
      <div v-if="multiple&&objects.length" class="h-categorypicker-multiple-tags">
        <span v-for="(obj, index) of objects" :key="index+''+obj.key"><span>{{getShow(obj)}}</span><i class="h-icon-close-min" @click.stop="remove(obj)" v-if="!disabled"></i></span>
      </div>
      <div v-else-if="!multiple&&object" class="h-categorypicker-value-single">
        <span>{{getShow(object)}}</span>
        <i class="h-icon-close" v-if="object&&!disabled" @mousedown="clear"></i>
      </div>
      <div v-else class="h-categorypicker-placeholder">{{showPlaceholder}}</div>
    </div>
    <div :class="groupCls">
      <Tabs :datas="tabs" v-model="tab"  class="h-categorypicker-tabs" keyName="key" titleName="title" @change="focusTab"></Tabs>
      <div class="h-categorypicker-ul" :class="{'h-categorypicker-single-picker': !multiple}">
        <div v-for="data of list" :key="data.key" class="h-categorypicker-item" :class="{'h-categorypicker-item-selected': object && data.key == object.key}">
          <i class="h-icon-loading" v-if="data.status.loading"></i>
          <Checkbox v-else-if="data.status.checkable&&multiple" :checked="isChecked(data)" @click.native="change(data, $event)"></Checkbox>
          <span class="h-categorypicker-item-title" @click="openNew(data, $event)">{{data.title}}<span v-if="showChildCount && data.children.length">({{data.children.length}})</span></span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';
import Dropdown from 'heyui/src/plugins/dropdown';
import Locale from 'heyui/src/mixins/locale';
import Message from 'heyui/src/plugins/message';
import Checkbox from 'heyui/src/components/checkbox';

const prefix = 'h-categorypicker';
const topMenu = '-------';

export default {
  name: 'hCategoryPicker',
  mixins: [Locale],
  components: { Checkbox },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key' // object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
    placeholder: {
      type: String
    },
    filterable: {
      type: Boolean,
      default: true
    },
    showAllLevels: {
      type: Boolean,
      default: true
    },
    showChildCount: {
      type: Boolean,
      default: false
    },
    value: [Number, String, Array, Object],
    config: String
  },
  data() {
    return {
      dropdown: null,
      globalloading: false,
      loading: true,
      objects: [],
      object: null,
      tabs: [{
        title: this.t('h.categoryModal.total'),
        key: topMenu
      }],
      tab: topMenu,
      categoryDatas: [],
      categoryObj: {},
      searchValue: null,
      tabIndex: 0,
      list: [],
      valueBak: null
    };
  },
  mounted() {
    this.init();
    this.initCategoryDatas();
  },
  watch: {
    disabled() {
      if (this.dropdown) {
        if (this.disabled) {
          this.dropdown.disabled();
        } else {
          this.dropdown.enabled();
        }
      }
    },
    'option.datas': function () {
      this.initCategoryDatas();
    },
    value() {
      if (this.valueBak != this.value) {
        this.parse();
        this.tab = topMenu;
        this.tabs = [{
          title: this.t('h.categoryModal.total'),
          key: topMenu
        }];
        this.list = this.categoryDatas;
      }
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let el = (this.el = this.$el.querySelector('.h-categorypicker-show'));
        this.content = this.$el.querySelector('.h-categorypicker-group');
        let that = this;
        this.dropdown = new Dropdown(el, {
          trigger: 'click',
          content: this.content,
          disabled: this.disabled,
          events: {
            show() {
              that.isShow = true;
            }
          }
        });
      });
    },
    refresh() {
      this.tab = topMenu;
      this.tabs = [{
        title: this.t('h.categoryModal.total'),
        key: topMenu
      }];
      this.initCategoryDatas();
    },
    remove(obj) {
      this.objects.splice(this.objects.indexOf(obj), 1);
      this.setvalue('remove');
    },
    clear() {
      this.object = null;
      this.setvalue('clear');
    },
    parse() {
      if (this.multiple) {
        let os = [];
        if (utils.isArray(this.value) && this.value.length > 0) {
          for (let v of this.value) {
            os.push(this.getValue(v));
          }
        }
        this.objects = os;
        this.object = null;
      } else {
        this.object = this.getValue(this.value);
        this.objects = [];
      }
    },
    getValue(item) {
      if (utils.isNull(item)) {
        return null;
      }
      if (this.type == 'key') {
        return this.categoryObj[item];
      } else {
        return utils.getValue(item, this.param);
      }
    },
    getShow(data) {
      if (this.showAllLevels) {
        data = this.categoryObj[data.key] || data;
        return this.getParentTitle(data).reverse().join('/');
      } else {
        return data.title;
      }
    },
    getParentTitle(data) {
      let list = [data.title];
      if (data.parentKey != null && this.categoryObj[data.parentKey]) {
        list.push(...this.getParentTitle(this.categoryObj[data.parentKey]));
      }
      return list;
    },
    getFullData() {
      if (this.multiple) {
        let datas = [];
        for (let o of this.objects) {
          let data = this.categoryObj[o.key] || this.object;
          datas.push(this.getParent(data));
        }
        return datas;
      } else if (this.object) {
        let data = this.categoryObj[this.object.key] || this.object;
        return this.getParent(data);
      }
      return null;
    },
    getParent(data) {
      let list = [utils.copy(data.value)];
      if (data.parentKey != null && this.categoryObj[data.parentKey]) {
        list.push(...this.getParent(this.categoryObj[data.parentKey]));
      }
      return list;
    },
    dispose() {
      if (this.multiple) {
        return this.objects.map(item => this.type == 'key' ? item.key : item.value).filter(item => {
          return item !== undefined;
        }).map(item => this.type == 'key' ? item : this.getDisposeValue(item));
      } else if (this.object) {
        return this.type == 'key' ? this.object.key : this.getDisposeValue(this.object.value);
      }
      return null;
    },
    getDisposeValue(item) {
      let obj = { ...item };
      delete obj[this.param.childrenName];
      return obj;
    },
    setvalue(trigger) {
      let value = this.dispose();
      this.$emit('input', value);
      this.$emit('change', utils.copy(this.multiple ? this.objects : this.object));
      if (trigger != 'clear') {
        this.valueBak = value;
      }
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdownUpdate();
    },
    initCategoryDatas() {
      let datas = [];
      if (utils.isArray(this.param.datas)) {
        datas = this.param.datas;
      } else if (utils.isFunction(this.param.datas)) {
        datas = this.param.datas.apply(this.param);
      }
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        let loadData = this.param.getTotalDatas || this.param.getDatas;
        let param = [
          result => {
            this.initDatas(utils.copy(result));
            this.globalloading = false;
            this.$emit('loadDataSuccess');
          },
          () => {
            this.globalloading = false;
          }
        ];
        if (this.param.getDatas) {
          param.unshift(null);
        }
        loadData.apply(this.param, param);
      }
      this.initDatas(datas);
    },
    initDatas(datas) {
      let list = utils.copy(datas);
      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = utils.generateTree(list, this.param);
      }
      let isWait = utils.isFunction(this.param.getDatas);
      this.categoryDatas = this.initTreeModeData(list, null, isWait, 0);
      this.list = this.categoryDatas;
      this.parse();
    },
    initTreeModeData(list, parentKey, isWait, level) {
      let datas = [];
      for (let data of list) {
        let obj = {
          key: data[this.param.keyName],
          title: data[this.param.titleName],
          value: data,
          parentKey,
          status: {
            level,
            loading: false,
            isWait,
            opened: false,
            selected: false,
            selectable: this.param.selectable ? this.param.selectable(data, level) : data.selectable !== false,
            checkable: this.param.checkable ? this.param.checkable(data, level) : data.checkable !== false
          }
        };
        let children = data[this.param.childrenName] || [];
        obj.children = this.initTreeModeData(children, obj.key, isWait, level + 1);
        this.categoryObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    },
    openNew(data, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (data.children && data.children.length) {
        this.tabIndex = this.tabIndex + 1;
        this.tabs.splice(this.tabIndex);
        this.tabs.push(data);
        this.tab = data.key;
        this.list = data.children;
        if (!this.multiple) {
          this.change(data);
        }
        this.dropdownUpdate();
      } else if (data.status.isWait) {
        data.status.loading = true;
        this.param.getDatas.call(
          this.param,
          data.value,
          result => {
            data.children = this.initTreeModeData(result, data.key, true, data.status.level + 1);
            data.status.isWait = false;
            data.status.loading = false;
            data.status.opened = true;
            this.openNew(data);
          },
          () => {
            data.status.loading = false;
          }
        );
      } else {
        this.change(data);
      }
    },
    focusTab(tab, index) {
      this.tab = tab.key;
      this.tabIndex = index;
      if (tab.key === topMenu) {
        this.list = this.categoryDatas;
      } else {
        this.list = tab.children;
      }
    },
    change(data, event) {
      if (event) {
        event.stopPropagation();
        event.preventDefault();
      }
      if (!this.multiple && data.status.selectable === false) {
        return;
      }
      if (this.multiple && data.status.checkable === false) {
        return;
      }
      if (this.multiple) {
        if (this.objects.length >= this.limit && !this.param.objects.some(item => item.key === data.key)) {
          Message.error(this.t('h.categoryPicker.limitWords', {
            size: this.limit
          }));
          return;
        }
        utils.toggleValueByKey(this.objects, 'key', data);
      } else {
        this.object = data;
      }
      if (this.multiple) {
        this.dropdownUpdate();
      } else if (!(data.children && data.children.length)) {
        this.dropdown.hide();
      }
      this.setvalue('picker');
    },
    dropdownUpdate() {
      this.$nextTick(() => {
        this.dropdown.update();
      });
    },
    isChecked(data) {
      if (this.multiple) {
        return this.objects.some(item => item.key == data.key);
      } else {
        return this.object ? (this.object.key == data.key) : false;
      }
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.categoryPicker.placeholder');
    },
    param() {
      if (this.config) {
        return utils.extend({}, config.getOption('categoryPicker.default'), config.getOption(
          `categoryPicker.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, config.getOption('categoryPicker.default'), this.option);
      }
    },
    categoryCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: true,
        [`${prefix}-no-autosize`]: true,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-disabled`]: this.disabled
      };
    },
    groupCls() {
      return {
        [`${prefix}-group`]: true,
        [`${prefix}-multiple`]: this.multiple,
        [`${this.className}-dropdown`]: !!this.className
      };
    }
  }
};
</script>
