<template>
  <div><slot></slot></div>
</template>
<script>
export default {
  name: 'hFormItemList',
  data() {
    return {
    };
  },
  computed: {
    labelWidth() {
      return this.$parent.labelWidth;
    },
    mode() {
      return this.$parent.mode;
    }
  }
};
</script>
