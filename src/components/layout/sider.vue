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
    width: {
      type: Number,
      default: 200
    }
  },
  computed: {
    classes() {
      let classList = [`${prefixCls}`];
      return classList;
    },
    styles() {
      let style = {
        flex: `0 0 ${this.width}px`,
        [`max-width`]: `${this.width}px`,
        [`min-width`]: `${this.width}px`,
        width: `${this.width}px`
      };
      return style;
    }
  }
};
</script>
