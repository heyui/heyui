<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-layout-content';

export default {
  name: 'HContent',
  computed: {
    classes() {
      let classList = [`${prefixCls}`];
      return classList;
    }
  }
};
</script>
