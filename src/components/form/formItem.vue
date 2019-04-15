<template>
  <div :class="formItemCls" :prop="prop" :validable="validable">
    <label :style="labelStyleCls" class="h-form-item-label" v-if="showLabel">
      <i v-if="icon" :class="icon"></i>
      <span v-if="!$scopedSlots.label">{{label}}</span>
      <slot v-else :label="label" name="label"></slot>
    </label>
    <div class="h-form-item-content" :style="contentStyleCls">
      <div class="h-form-item-wrap">
        <slot></slot>
      </div>
      <div class="h-form-item-error" v-if="!errorMessage.valid">
        <span v-if="errorMessage.type=='base'" class="h-form-item-error-label">{{label}}</span><span class="h-form-item-error-message">{{errorMessage.message}}</span><slot name="error" :type="errorMessage.type"></slot>
      </div>
    </div>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefixCls = 'h-form-item';
export default {
  name: 'hFormItem',
  props: {
    label: String,
    prop: String,
    icon: String,
    required: {
      type: Boolean,
      default: false
    },
    readonly: {
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
    noPadding: {
      type: Boolean,
      default: false
    }
  },
  inject: ['validField', 'removeProp', 'getConfig', 'setConfig', 'updateErrorMessage', 'getErrorMessage', 'labelWidth', 'mode'],
  data() {
    return {
      validResult: null,
      configRequired: false,
      errorMessage: { valid: true }
    };
  },
  beforeDestroy() {
    if (this.prop) {
      this.removeProp(this.prop);
    }
  },
  watch: {
    prop(prop, oldProp) {
      if (this.prop) {
        let message = this.getConfig(this.prop);
        if (message) {
          this.configRequired = !!message.required;
        }
        this.errorMessage = this.updateErrorMessage(prop, oldProp);
      }
    },
    required() {
      this.setConfig(this.prop, { required: this.required });
    }
  },
  mounted() {
    if (this.prop) {
      let message = this.getConfig(this.prop);
      if (message) {
        this.configRequired = !!message.required;
      }
      if (this.required) {
        this.setConfig(this.prop, { required: true });
      }
      this.errorMessage = this.getErrorMessage(this.prop, this.label);
    }
  },
  methods: {
    reset() {
      this.errorMessage.valid = true;
    },
    trigger() {
      let prop = this.prop;
      if (!this.validable || utils.isNull(prop)) {
        return;
      }
      this.validField(prop);
    }
  },
  computed: {
    initLabelWidth() {
      let mode = this.mode;
      let hasWidth = !(mode == 'block' || mode == 'inline') || (this.single && mode == 'twocolumn');
      let width = hasWidth ? this.labelWidth || false : false;
      return width ? `${width}px` : 'auto';
    },
    formItemCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-single`]: this.single,
        [`${prefixCls}-readonly`]: !!this.readonly,
        [`${prefixCls}-required`]: this.required || this.configRequired,
        [`${prefixCls}-valid-error`]: !this.errorMessage.valid,
        [`${prefixCls}-no-padding`]: !!this.noPadding
      };
    },
    labelCls() {
      return {
        [`${prefixCls}-label`]: true
      };
    },
    labelStyleCls() {
      let param = {
        width: this.initLabelWidth
      };
      return param;
    },
    contentStyleCls() {
      let param = {
        'margin-left': this.showLabel ? this.initLabelWidth : '0px'
      };
      return param;
    }
  }
};
</script>
