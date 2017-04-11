<template>
  <div :class="formItemCls">
    <label :style="labelStyleCls" class="h-form-item-label" v-if="showLabel">{{this.label}}</label>
    <div class="h-form-item-content" :style="contentStyleCls">
      <div class="h-form-item-wrap"><slot></slot></div>
      <div class="h-form-item-error" v-if="validResult" >{{label}}{{validResult.message}}</div>
    </div>
  </div>
</template>
<script>
import utils from "../../utils/utils";

const prefixCls = 'h-form-item';
export default {
  props: {
    label: String,
    prop: String,
    labelWidth: Number,
    required: {
      type: Boolean,
      default: false
    },
    showLabel: {
      type: Boolean,
      default: true
    },
    single: {
      type: Boolean,
      default: false
    },
    validable: {
      type: Boolean,
      default: true
    },
    rule: Object
  },
  data() {
    return {
      validResult: null
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$el.addEventListener("blur", (event) => {
        this.trigger(event);
      }, true);
      this.$el.addEventListener("setvalue", (event) => {
        this.trigger(event);
      });
    });
  },
  methods: {
    getParent() {
      let parent = this.$parent;
      let filterTag = new Set(['Form', 'iForm']);
      while (parent != null && !filterTag.has(parent.$options._componentTag)) {
        parent = parent.$parent;
      }
      if (!parent) {
        log.error('请将formItem组件置于Form组件内');
      }
      return parent;
    },
    // getErrorMessage() {
    //   if (!this.validable || utils.isNull(this.prop)) {
    //     return false;
    //   }
    //   let parent = this.getParent();
    //   if (parent) return this.getParent().errorMessages[this.prop];
    //   return '';
    // },
    trigger(evt) {
      let parent = this.getParent();
      if (!parent) return false;
      let target = evt.srcElement;
      // target.getAttribute("prop")
      let prop = this.prop;
      if (!this.validable || utils.isNull(prop)) {
        return;
      }
      // this.showMessage = true;
      // let tagName = target.tagName;
      // let selfProp = true;
      // let label = target.getAttribute("label") || this.label;
      // log(prop, label, tagName);
      let result = this.getParent().validField(prop);
      if (result === true) {
        // this.errorMessage = null;
        this.validResult = null;
      } else {
        this.validResult = result;
        // this.errorMessage = result.message;
      }
    },
  },
  computed: {
    initLabelWidth() {
      let parent = this.$parent;
      // if (!parent) return 'auto';
      let mode = this.$parent.mode;
      let hasWidth = !(mode == 'block' || mode == 'inline') || (this.single && mode == 'twocolumn');
      let width = hasWidth ? (this.labelWidth || parent.labelWidth || false) : false;
      return width ? `${width}px` : 'auto';
    },
    formItemCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-single`]: this.single,
        [`${prefixCls}-required`]: this.required,
        [`${prefixCls}-valid-error`]: !!this.validResult
      }
    },
    labelCls() {
      return {
        [`${prefixCls}-label`]: true,
      }
    },
    labelStyleCls() {
      return {
        width: this.initLabelWidth
      }
    },
    contentStyleCls() {
      return {
        'margin-left': this.initLabelWidth
      }
    }
  }
};
</script>
