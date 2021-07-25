<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-layout-sider';

export default {
  name: 'HSider',
  props: {
    theme: String
  },
  computed: {
    classes() {
      return {
        [`${prefixCls}`]: true,
        [`${prefixCls}-theme-${this.theme}`]: this.theme
      };
    },
    styles() {
      let style = {};
      return style;
    }
  },
  beforeUnmounted() {
    if (this.$parent && this.$parent.updateSider) {
      this.$parent.updateSider();
    }
  }
};
</script>
