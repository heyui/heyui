<template>
  <span :class="cls" :style="style"></span>
</template>
<script>
const prefix = 'h-space';
export default {
  name: 'hIcon',
  props: {
    width: {
      type: Number,
      default: 5
    },
    height: Number
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    cls() {
      return {
        [`${prefix}-vertical`]: !!this.width
      };
    },
    style() {
      return {
        width: `${this.width}px`
      };
    }
  }
};
</script>
