<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefixCls = 'h-layout-sider';

export default {
  name: 'hSider',
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
      let style = {
      };
      return style;
    }
  },
  beforeDestroyed() {
    if(this.$parent && this.$parent.updateSider) {
      this.$parent.updateSider();
    }
  }
};
</script>
