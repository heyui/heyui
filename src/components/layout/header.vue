<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefixCls = 'h-layout-header';

export default {
  name: 'hHeader',
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
  }
};
</script>
