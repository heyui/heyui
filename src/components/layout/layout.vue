<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import utils from '../../utils/utils';

const prefixCls = 'h-layout';

export default {
  name: 'hLayout',
  props: {
  },
  computed: {
    classes() {
      let classList = {
        [`${prefixCls}`]: true,
        [`${prefixCls}-has-sider`]: this.hasSiderChild
      };
      return classList;
    },
    styles() {
      let style = {};
      
      return style;
    },
    hasSiderChild() {
      let siderTag = new Set(['Slider', 'h-sider']);
      this.$nextTick(()=>{
        log(this.$children.length)
      })
      for (let c of this.$children) {
        if(siderTag.has(c.$options._componentTag || c.$options.name)) {
          return true;
        }
      }
      return false;
    }
  }
};
</script>
