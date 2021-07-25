<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-layout-header';

export default {
  name: 'HHeader',
  props: {
    theme: String
  },
  computed: {
    classes() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-theme-${this.theme}`]: this.theme
      };
    }
  }
};
</script>
