<template>
  <span :class="cls" :style="style"><slot></slot></span>
</template>
<script>
const prefix = 'h-tag';
export default {
  name: 'hTag',
  props: {
    type: String,
    color: String
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    cls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-${this.type}`]: !!this.type,
        [`${prefix}-${this.color}`]: !!this.color
      };
    },
    style() {
      return {};
    }
  }
};
</script>
