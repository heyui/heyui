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
    labelWidth: Number,
    rules: Object,
    labelPosition: String
  },
  data() {
    return {
      // errorMessages: {}
    };
  },
  methods: {
    validField(prop) {
      let value = utils.valueForKeypath(this.model, prop);
      // log(prop);
      let ruleKey = prop.replace(/\[\w+\]/, "[]");
      let rule = (this.rules || { required: [] }).required.includes(ruleKey);
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
