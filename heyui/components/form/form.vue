<template>
  <div :class="formCls">
    <slot></slot>
  </div>
</template>
<script>
import utils from "../../utils/utils";

const prefixCls = 'h-form';

export default {
  props: {
    mode: {
      type: String,
      default: "single" //inline,single,twocolumn
    },
    model: [Object, Array],
    labelWidth: {
      type: Number,
      default: 80
    },
    rules: Object,
    labelPosition: String
  },
  data() {
    return {
      // errorMessages: {}

    };
  },
  beforeMount() {

  },
  methods: {
    validField(prop) {
      if (!this.model) return true;
      let value = utils.getKeyValue(this.model, prop);
      // log(prop);
      let ruleKey = prop.replace(/\[\w+\]/, "[]");
      let rule = this.fRules.required.includes(ruleKey);
      // log(rule);
      // this.clearValidField(prop);
      if (rule && (utils.isNull(value) || value == '')) {
        // utils.removeClass('validor-error');
        return { message: `值不能为空` };
      }
      return true;
      // this.errorMessages[prop] = ;
    }
  },
  computed: {
    fRules() {
      return this.rules || { required: [] };
    },
    formCls() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-${this.mode}`]: true,
        [`${prefixCls}-label-${this.labelPosition}`]: !!this.labelPosition,
      }
    }
  }
};
</script>
