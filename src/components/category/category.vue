<template>
  <div :class="categoryCls" :disabled="disabled">
    <div class="h-category-show" @click="openPicker">
      <div v-if="multiple&&objects.length" class="h-category-multiple-tags">
        <span v-for="obj of objects" :key="obj.key">
          <span>{{obj.title}}</span><i class="h-icon-close-min" @click.stop="remove(obj)" v-if="!disabled"></i>
        </span>
      </div>
      <div v-else-if="!multiple&&object" class="h-category-value-single">
        <span>{{object.title}}</span>
        <i class="h-icon-close" v-if="object.title!=null&&!disabled" @mousedown="clear"></i>
      </div>
      <div v-else class="h-category-placeholder">{{showPlaceholder}}</div>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';

import categoryModal from './categorymodal';
import Locale from 'heyui/src/mixins/locale';
import Modal from 'heyui/src/plugins/modal';

const prefix = 'h-category';

export default {
  name: 'hCategory',
  mixins: [Locale],
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
    value: [Number, String, Array, Object],
    config: String
  },
  data() {
    return {
      globalloading: false,
      loading: true,
      objects: [],
      object: null,
      categoryDatas: [],
      categoryObj: {},
      searchValue: null
    };
  },
  mounted() {
    this.initCategoryDatas();
  },
  watch: {
    value() {
      this.parse();
    },
    'option.datas': function () {
      this.initCategoryDatas();
    }
  },
  methods: {
    openPicker() {
      let that = this;
      if (this.disabled) return;
      Modal({
        width: 600,
        hasDivider: true,
        component: {
          vue: categoryModal,
          data: {
            param: this.param,
            objects: [...this.objects],
            object: utils.copy(this.object),
            categoryDatas: this.categoryDatas,
            categoryObj: this.categoryObj,
            multiple: this.multiple,
            limit: this.limit,
            filterable: this.filterable
          }
        },
        events: {
          setvalue(modal, data) {
            that.objects = data.objects;
            that.object = data.object;
            that.setvalue();
          },
          load: (modal, { data, callback }) => {
            data.status.loading = true;
            this.param.getDatas.call(
              this.param,
              data.value,
              result => {
                data.children = this.initTreeModeData(result, data.key, true);
                data.status.isWait = false;
                data.status.loading = false;
                data.status.opened = true;
                callback();
              },
              () => {
                data.status.loading = false;
              }
            );
          }
        }
      });
    },
    remove(obj) {
      this.objects.splice(this.objects.indexOf(obj), 1);
      this.setvalue();
    },
    clear() {
      this.object = null;
      this.setvalue();
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
      } else {
        this.object = this.getValue(this.value);
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
    dispose() {
      if (this.multiple) {
        return this.objects.map(item => this.type == 'key' ? item.key : item.value).filter(item => {
          return item !== undefined;
        });
      } else if (this.object) {
        return this.type == 'key' ? this.object.key : this.object.value;
      }
      return null;
    },
    setvalue() {
      let value = this.dispose();
      this.$emit('input', value);
      this.$emit('change', utils.copy(this.multiple ? this.objects : this.object));
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
    },
    initCategoryDatas() {
      let datas = [];
      if (utils.isArray(this.param.datas)) {
        datas = this.param.datas;
      }
      if (utils.isFunction(this.param.datas)) {
        datas = this.param.datas.call(null);
      }
      if (utils.isFunction(this.param.getTotalDatas) || utils.isFunction(this.param.getDatas)) {
        datas = [];
        this.globalloading = true;
        let loadData = this.param.getTotalDatas || this.param.getDatas;
        let param = [
          result => {
            this.categoryDatas = this.initDatas(utils.copy(result));
            this.parse();
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
      this.categoryDatas = this.initDatas(datas);
      this.parse();
    },
    initDatas(datas) {
      let list = utils.copy(datas);
      if (this.param.dataMode == 'list' && datas.length > 0) {
        list = utils.generateTree(list, this.param);
      }
      let isWait = utils.isFunction(this.param.getDatas);
      return this.initTreeModeData(list, null, isWait);
    },
    initTreeModeData(list, parentKey, isWait) {
      let datas = [];
      for (let data of list) {
        let obj = {
          key: data[this.param.keyName],
          title: data[this.param.titleName],
          value: data,
          parentKey,
          status: {
            loading: false,
            isWait,
            opened: false,
            selected: false,
            checkable: data.checkable !== false
          }
        };
        let children = data[this.param.childrenName] || [];
        obj[this.param.childrenName] = this.initTreeModeData(children, obj.key);
        this.categoryObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.category.placeholder');
    },
    param() {
      if (this.config) {
        return utils.extend({}, config.getOption('category.default'), config.getOption(
          `category.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, config.getOption('category.default'), this.option);
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
    }
  }
};
</script>
