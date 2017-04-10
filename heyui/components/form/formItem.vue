<template>
  <div :class="formItemCls">
    <label :style="labelStyleCls" class="h-form-item-label" v-if="showLabel">{{this.label}}</label>
    <div class="h-form-item-content" :style="contentStyleCls">
      <div class="h-form-item-wrap"><slot></slot></div>
      <div class="h-form-item-error" v-if="!!errorMessage" >{{errorMessage}}</div>
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
      errorMessage: this.getErrorMessage()
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
  beforeDestroy() {
    if (this.prop) {
      this.getParent().clearValidField(this.prop);
    }
  },
  methods: {
    getParent() {
      let parent = this.$parent;
      while (parent != null && parent.$options._componentTag != 'Form' && parent.$options._componentTag != 'iForm'){
        parent = parent.$parent;
      }
      return parent;
    },
    getErrorMessage() {
      if (!this.validable || utils.isNull(this.prop)) {
        return false;
      }
      return this.getParent().errorMessages[this.prop];
    },
    trigger(evt) {
      let target = evt.srcElement;
      // target.getAttribute("prop")
      let prop = this.prop;
      if (!this.validable || utils.isNull(prop)) {
        return;
      }
      // this.showMessage = true;
      // let tagName = target.tagName;
      // let selfProp = true;
      let label = target.getAttribute("label") || this.label;
      // log(prop, label, tagName);
      this.getParent().validField(prop, label);
      this.errorMessage = this.getErrorMessage();
    },
  },
  computed: {
    initLabelWidth() {
      let mode = this.$parent.mode;
      let hasWidth = !(mode == 'block' || mode == 'inline') || (this.single && mode == 'twocolumn');
      let width = hasWidth ? (this.labelWidth || this.$parent.labelWidth || false) : false;
      return width ? `${width}px` : 'auto';
    },
    formItemCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-single`]: this.single,
        [`${prefixCls}-required`]: this.required,
        [`${prefixCls}-valid-error`]: !!this.errorMessage
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
