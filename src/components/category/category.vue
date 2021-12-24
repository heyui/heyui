<template>
  <div :class="categoryCls" :disabled="disabled">
    <div class="h-category-show" @click="openPicker">
      <div v-if="multiple && objects.length" class="h-category-multiple-tags">
        <span v-for="obj of objects" :key="obj.key">
          <span>{{ obj.title }}</span
          ><i v-if="!disabled" class="h-icon-close-min" @click.stop="remove(obj)"></i>
        </span>
      </div>
      <div v-else-if="!multiple && object" class="h-category-value-single">
        <span>{{ object.title }}</span>
        <i v-if="object.title != null && !disabled" class="h-icon-close" @mousedown="clear"></i>
      </div>
      <div v-else class="h-category-placeholder">{{ showPlaceholder }}</div>
    </div>

    <Modal v-model="openModal" hasDivider>
      <CategoryModal
        :style="{ width: '600px' }"
        :param="param"
        :objects="[...objects]"
        :object="object"
        :categoryDatas="categoryDatas"
        :categoryObj="categoryObj"
        :multiple="multiple"
        :limit="limit"
        :filterable="filterable"
      />
    </Modal>
  </div>
</template>
<script>
import config from 'heyui/utils/config';
import utils from 'heyui/utils/utils';

import CategoryModal from './categorymodal';
import Locale from 'heyui/mixins/locale';
import Modal from 'heyui/components/modal';

const prefix = 'h-category';

export default {
  name: 'HCategory',
  mixins: [Locale],
  emits: ['loadDataSuccess', 'update:modelValue', 'change'],
  components: { Modal, CategoryModal },
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
    modelValue: [Number, String, Array, Object],
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
      searchValue: null,
      openModal: false
    };
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.hlang('h.category.placeholder');
    },
    param() {
      if (this.config) {
        return utils.extend({}, config.getOption('category.default'), config.getOption(`category.configs.${this.config}`), this.option);
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
  },
  watch: {
    modelValue() {
      this.parse();
    },
    'option.datas': function () {
      this.initCategoryDatas();
    }
  },
  mounted() {
    this.initCategoryDatas();
  },
  methods: {
    openPicker() {
      if (this.disabled) return;
      this.openModal = true;
    },
    updateValue(data) {
      that.objects = data.objects;
      that.object = data.object;
      that.setvalue();
    },
    load(data, callback) {
      if (data.status.loading) return;
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
        if (utils.isArray(this.modelValue) && this.modelValue.length > 0) {
          for (let v of this.modelValue) {
            os.push(this.getValue(v));
          }
        }
        this.objects = os;
      } else {
        this.object = this.getValue(this.modelValue);
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
        return this.objects
          .map(item => (this.type == 'key' ? item.key : item.value))
          .filter(item => {
            return item !== undefined;
          });
      } else if (this.object) {
        return this.type == 'key' ? this.object.key : this.object.value;
      }
      return null;
    },
    setvalue() {
      let value = this.dispose();
      this.$emit('update:modelValue', value);
      this.$emit('change', utils.copy(this.multiple ? this.objects : this.object));
      let event = document.createEvent('CustomEvent');
      event.initCustomEvent('setvalue', true, true, value);
      this.$el.dispatchEvent(event);
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
  }
};
</script>
