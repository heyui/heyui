<template>
  <div :class="treepickerCls" :disabled="disabled">
    <div class="h-treepicker-show">
      <template v-if="multiple&&objects.length">
        <div v-if="showCount" class="h-treepicker-value-single">您总共选择{{valuebak.length}}项</div>
        <div v-else class="h-treepicker-multiple-tags"><span v-for="obj of objects"
                :key="obj"><span>{{obj[param.titleName]}}</span><i class="h-icon-close"
              @click.stop="remove(obj)" v-if="!disabled"></i></span>
        </div>
      </template>
      <div v-else-if="!multiple&&object" class="h-treepicker-value-single">{{object[param.titleName]}}</div>
      <div v-else class="h-treepicker-placeholder">{{placeholder}}</div>
      <i class="h-icon-down"></i>
    </div>
    <div class="h-treepicker-group">
      <div class="h-treepicker-body">
        <Tree :option="option" :multiple="multiple" v-model="valuebak" @select="select" @choose="choose" :filterable="filterable" :config="config"></Tree>
      </div>
      <div class="h-treepicker-footer">
        <button class="h-btn h-btn-text h-btn-s"
                @click="clear">清除</button>
        <button class="h-btn h-btn-primary h-btn-s"
                @click="confirm">确定</button>
      </div>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';
import utils from '../../utils/utils';
import Dropdown from '../../plugins/dropdown';

// import treepickerModal from './treepickerModal';
import Tree from '../tree';

const prefix = 'h-treepicker';

export default {
  component: { Tree },
  props: {
    option: Object,
    multiple: {
      type: Boolean,
      default: false
    },
    type: {
      type: [String],
      default: 'key'  //object
    },
    disabled: {
      type: Boolean,
      default: false
    },
    limit: Number,
    placeholder: {
      type: String,
      default: "请选择"
    },
    filterable: {
      type: Boolean,
      default: false
    },
    showCount: {
      type: Boolean,
      default: false
    },
    value: [Number, String, Array, Object],
    config: String
  },
  data() {
    return {
      objects: [],
      object: null,
      dropdown: null,
      valuebak: utils.copy(this.value)
    };
  },
  mounted() {
    let that = this;
    this.$nextTick(() => {
      if(this.inline) return;
      let el = this.$el.querySelector(`.${prefix}>.h-treepicker-show`);
      let content = this.$el.querySelector(`.h-treepicker-group`);
      
      this.dropdown = new Dropdown(el, {
        trigger: 'click',
        triggerOnce: true,
        content,
        disabled: this.disabled,
      });

      if (this.disabled) {
        this.dropdown.disabled();
      }
    });
  },
  watch: {
    value() {
      this.parse();
    },
  },
  methods: {
    select(data) {
      this.object = data;
      this.$emit('select', data);
      if(!this.multiple) this.setvalue();
    },
    choose(data) {
      this.objects = data;
      this.$emit('choose', data);
      if(this.multiple) this.setvalue();
    },
    remove(obj) {
      let index = this.objects.indexOf(obj);
      this.objects.splice(index, 1);
      this.valuebak.splice(index, 1);
      this.setvalue();
      this.triggerChange();
    },
    updateShow(data) {
      if (utils.isObject(data) && !this.multiple) {
        this.object = data;
      }
      if (utils.isArray(data) && this.multiple) {
        this.objects = data;
      }
      this.setvalue();
    },
    parse() {
      this.valuebak = utils.copy(this.value);
    },
    dispose() {
      if (this.multiple) {
        return this.objects.map(item => this.type=='key'?item[this.param.keyName]:item);
      } else if(this.object) {
        return this.type=='key'?this.object[this.param.keyName]:this.object;
      }
      return null;
    },
    clear() {
      this.object = null;
      this.objects = [];
      this.setvalue();
      this.triggerChange();
    },
    confirm() {
      this.setvalue();
      this.triggerChange();
      this.dropdown.hide();
    },
    setvalue() {
      let value = this.dispose();
      this.$emit('input', value);
      let event = document.createEvent("CustomEvent");
      event.initCustomEvent("setvalue", true, true, value);
      this.$el.dispatchEvent(event);
      this.dropdown.update();
    },
    triggerChange() {
      this.$emit('change', utils.copy(this.multiple ? this.objects : this.object));
    }
  },
  computed: {
    param() {
      if (this.config) {
        return utils.extend({}, config.getOption("tree.default"), config.getOption(`tree.configs.${this.config}`), this.option);
      } else {
        return utils.extend({}, config.getOption("tree.default"), this.option);
      }
    },
    treepickerCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-input-border`]: true,
        [`${prefix}-no-autosize`]: true,
        [`${prefix}-multiple`]: this.multiple,
        [`${prefix}-disabled`]: this.disabled,
      }
    },
  }
};
</script>
