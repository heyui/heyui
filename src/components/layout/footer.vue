<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefixCls = 'h-footer';

export default {
  name: 'hFooter',
  props: {
  },
  computed: {
    classes() {
      let classList = [`${prefixCls}`];
      return classList;
    },
    styles() {
      let style = {};
      
      return style;
    }
  }
};
</script>
