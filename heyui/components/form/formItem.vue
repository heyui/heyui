<template>
  <div :class="formItemCls">
    <label :style="labelStyleCls" class="h-form-item-label">{{this.label}}</label>
    <div class="h-form-item-content" :style="contentStyleCls">
      <div class="h-form-item-wrap"><slot></slot></div>
      <div class="h-form-item-error">{{errorMessage}}</div>
    </div>
  </div>
</template>
<script>
const prefixCls = 'h-form-item';
export default {
  props: {
    label: String,
    labelWidth: Number,
    required: {
      type: Boolean,
      default: false
    },
    single: {
      type: Boolean,
      default: false
    },
    errorMessage: String
  },
  data() {
    return {
    };
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
        [`${prefixCls}-required`]: this.required
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
