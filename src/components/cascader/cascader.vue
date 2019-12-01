<template>
  <div :class="cascaderCls" :disabled="disabled">
    <div class="h-cascader-show">
      <div v-if="multiple&&objects.length" class="h-cascader-multiple-tags">
        <span v-for="(obj, index) of objects" :key="index+''+obj.key"><span>{{obj.title}}</span><i class="h-icon-close-min" @click.stop="remove(obj)" v-if="!disabled"></i></span>
      </div>
      <div v-else-if="!multiple&&object" class="h-cascader-value-single">
        <span>{{object.title}}</span>
        <i class="h-icon-close text-hover" v-if="object&&!disabled" @mousedown="clear"></i>
      </div>
      <div v-else class="h-cascader-placeholder">{{showPlaceholder}}</div>
    </div>
    <div :class="groupCls">
      <ul class="h-cascader-ul">
        <CascaderItem
          v-for="cascader of cascaderDatas"
          :data="cascader"
          :param="param"
          :key="cascader.key"
          :multiple="multiple"
          :status="status"
          @trigger="trigger"
          :level="0"
      ></CascaderItem>
      </ul>
    </div>
  </div>
</template>
<script>
import config from 'heyui/src/utils/config';
import utils from 'heyui/src/utils/utils';
import Dropdown from 'heyui/src/plugins/dropdown';
import Locale from 'heyui/src/mixins/locale';
import CascaderItem from 'heyui/src/components/cascader/cascader-item';

const prefix = 'h-cascader';

export default {
  name: 'hCascader',
  mixins: [Locale],
  components: {
    CascaderItem
  },
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
      dropdown: null,
      globalloading: false,
      loading: true,
      objects: [],
      status: {
        selected: null
      },
      object: null,
      cascaderDatas: [],
      cascaderObj: {},
      searchValue: null
    };
  },
  mounted() {
    this.init();
    this.initCascaderDatas();
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
      this.initCascaderDatas();
    }
  },
  methods: {
    init() {
      this.$nextTick(() => {
        let el = (this.el = this.$el.querySelector('.h-cascader-show'));
        this.content = this.$el.querySelector('.h-cascader-group');
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
    trigger(params) {

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
        return this.cascaderObj[item];
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
    initCascaderDatas() {
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
            this.cascaderDatas = this.initDatas(utils.copy(result));
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
      this.cascaderDatas = this.initDatas(datas);
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
        this.cascaderObj[obj.key] = obj;
        datas.push(obj);
      }
      return datas;
    }
  },
  computed: {
    showPlaceholder() {
      return this.placeholder || this.t('h.cascader.placeholder');
    },
    param() {
      if (this.config) {
        return utils.extend({}, config.getOption('cascader.default'), config.getOption(
          `cascader.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, config.getOption('cascader.default'), this.option);
      }
    },
    cascaderCls() {
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
