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
    labelPosition: String
  },
  data() {
    return {
      errorMessages: {}
    };
  },
  mounted() {
    // this.validField();
    this.$nextTick(() => {
      // this.$el.addEventListener("blur", (event) => {
      //   log(event.target.parentNode);
      // }, true);
      // this.$el.addEventListener("setvalue", (event) => {
      //   log(event);
      // });
    });
  },
  methods: {
    clearValidField(prop) {
      delete this.errorMessages[prop];
    },
    validField(prop, field) {
      let value = utils.valueForKeypath(this.model, prop);
      log(prop);
      // let ruleKey = prop.replace(/\[\w+\]/, "[]");
      // let rule = this.rules[ruleKey];
      // log(value);
      this.clearValidField(prop);
      if (value == '1') {
        // utils.removeClass('validor-error');
        return true;
      }
      this.errorMessages[prop] = `${field}值不等于1`;
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
