<template>
  <span :class="cls" :style="style"><slot></slot></span>
</template>
<script>
const prefix = 'h-tag';
export default {
  name: 'HTag',
  props: {
    type: String,
    color: String
  },
  data() {
    return {};
  },
  computed: {
    cls() {
      const hasColor = !!this.color;
      const selfDefineColor = hasColor && this.color.indexOf('#') > -1;
      return {
        [`${prefix}`]: true,
        [`${prefix}-${this.type}`]: !!this.type,
        [`${prefix}-${this.color}`]: hasColor && !selfDefineColor,
        [`${prefix}-self-define-color`]: hasColor && selfDefineColor
      };
    },
    style() {
      const hasColor = !!this.color;
      const selfDefineColor = hasColor && this.color.indexOf('#') > -1;
      if (selfDefineColor) {
        return {
          'background-color': this.color,
          'border-color': this.color
        };
      }
      return {};
    }
  },
  methods: {}
};
</script>
