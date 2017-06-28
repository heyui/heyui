<template>
  <div class="h-circle" :style="circleStyle">
    <svg :width="circleSize" :height="circleSize" :viewBox="`0 0 ${circleSize*2} ${circleSize*2}`">
      <circle :cx="circleSize" :cy="circleSize" :r="size" :stroke-width="strokeWidth" stroke="#f3f3f3" fill="none"></circle>
      <circle :cx="circleSize" :cy="circleSize" :r="size" stroke-linecap="round" :stroke-width="strokeWidth" fill="none" :transform="`matrix(0,-1,1,0,0,${circleSize*2})`" :stroke="color" :stroke-dasharray="countPercent"></circle>
    </svg>
    <div class="h-circle-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>
import config from '../../utils/config';

const prefix = 'h-circle';
const colors = ['red', 'blue', 'primary', 'gray', 'yellow', 'green'];

export default {
  props: {
    color: {
      type: String,
      default: '#3B91FF'
    },
    percent: {
      type: Number,
      default: 0
    },
    strokeWidth: {
      type: Number,
      default: 12
    },
    size: {
      type: Number,
      default: 120
    }
  },
  data() {
    return {}
  },
  computed: {
    circleStyle() {
      return {
        height: `${this.circleSize}px`
      }
    },
    circleSize() {
      return this.size + (this.strokeWidth / 2);
    },
    countPercent() {
      let percent = this.percent / 100;
      let perimeter = Math.PI * 2 * this.size;
      return `${perimeter * percent} ${perimeter * (1 - percent)}`;
    },
    circleInnerStyle() {
      let s = {};
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    circleBgStyle() {
      let s = {};
      if (!colors.includes(this.color)) {
        s['background-color'] = this.color;
      }
      s.width = `${this.percent}%`;
      s.height = `${this.strokeWidth}px`;
      return s;
    },
    circleBgClass() {
      let s = {};
      if (colors.includes(this.color)) {
        s[`bg-${this.color}-color`] = true
      }
      return s;
    }
  }
};
</script>
