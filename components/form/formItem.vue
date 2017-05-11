<template>
  <div :class="formItemCls">
    <label :style="labelStyleCls"
           class="h-form-item-label"
           v-if="showLabel">{{label}}</label>
    <div class="h-form-item-content"
         :style="contentStyleCls">
      <div class="h-form-item-wrap">
        <slot></slot>
      </div>
      <div class="h-form-item-error"
           v-if="!errorMessage.valid">{{errorMessage.message}}</div>
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
    noPadding: {
      type: Boolean,
      default: false
    },
    rule: Object
  },
  data() {
    return {
      validResult: null,
      configRequired: false,
      errorMessage: { valid: true }
    };
  },
  watch: {
    prop(prop, oldProp) {
      let parent = this.getParent();
      if (this.prop) {
        this.errorMessage = parent.updateErrorMessage(prop, oldProp);
      }
    }
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
    let parent = this.getParent();

    if (this.prop) {
      this.configRequired = !!parent.getConfig(this.prop).required;
      this.errorMessage = parent.getErrorMessage(this.prop);
    }
  },
  methods: {
    getParent() {
      let parent = this.$parent;
      let filterTag = new Set(['Form', 'hForm']);
      while (parent != null && !filterTag.has(parent.$options._componentTag)) {
        parent = parent.$parent;
      }
      if (!parent) {
        log.error('请将formItem组件置于Form组件内');
      }
      return parent;
    },
    getDirectParent() {
      let parent = this.$parent;
      let filterTag = new Set(['Form', 'hForm', 'FormItem']);
      while (parent != null && !filterTag.has(parent.$options._componentTag)) {
        parent = parent.$parent;
      }
      if (!parent) {
        log.error('请将formItem组件置于Form组件内');
      }
      return parent;
    },
    trigger() {
      let parent = this.getParent();
      if (!parent) return false;
      let prop = this.prop;
      if (!this.validable || utils.isNull(prop)) {
        return;
      }
      this.getParent().validField(prop);
      // , (result) => {
      //   if (result === true) {
      //     this.validResult = null;
      //   } else {
      //     this.validResult = { message: result };
      //   }
      // }
    },
  },
  computed: {
    initLabelWidth() {
      let parent = this.getDirectParent(true);
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
        [`${prefixCls}-required`]: this.required || this.configRequired,
        [`${prefixCls}-valid-error`]: !this.errorMessage.valid,
        [`${prefixCls}-no-padding`]: !!this.noPadding
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
