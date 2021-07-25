<template>
  <div :class="classes">
    <slot></slot>
  </div>
</template>
<script>
const prefixCls = 'h-layout-footer';

export default {
  name: 'HFooter',
  props: {},
  computed: {
    classes() {
      let classList = [`${prefixCls}`];
      return classList;
    }
  }
};
</script>
