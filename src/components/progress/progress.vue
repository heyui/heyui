<template>
  <div class="h-progress">
    <div v-if="$slots.title" class="h-progress-title">
      <slot name="title"></slot>
    </div>
    <div class="h-progress-inner" :style="progressInnerStyle">
      <div class="h-progress-bg" :style="progressBgStyle" :class="progressBgClass"></div>
    </div>
    <div v-if="$slots.text" class="h-progress-text">
      <slot name="text"></slot>
    </div>
  </div>
</template>
<script>
const colors = ['red', 'blue', 'primary', 'gray', 'yellow', 'green'];

export default {
  name: 'HProgress',
  props: {
    color: {
      type: String,
      default: 'primary'
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 10
    }
  },
  data() {
    return {};
  },
  computed: {
    progressInnerStyle() {
      let s = {};
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    progressBgStyle() {
      let s = {};
      if (!colors.indexOf(this.color) > -1) {
        s['background-color'] = this.color;
      }
      s.width = `${Math.min(this.percent, 100)}%`;
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    progressBgClass() {
      let s = {};
      if (colors.indexOf(this.color) > -1) {
        s[`bg-${this.color}-color`] = true;
      }
      return s;
    }
  }
};
</script>
