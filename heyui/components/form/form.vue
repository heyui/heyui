<template>
  <div :class="formCls">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-form';
export default {
  props: {
    mode: {
      type: String,
      default: "single" //inline,single,twocolumn
    },
    labelWidth: Number,
    labelPosition: String
  },
  data() {
    return {
    };
  },
  methods: {
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
