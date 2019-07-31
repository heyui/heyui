<template>
  <div class="h-circle" :style="circleStyle">
    <svg :width="circleSize" :height="circleSize" :viewBox="`0 0 ${circleSize*2} ${circleSize*2}`">
      <path :d="pathString" stroke="#f3f3f3" :stroke-width="strokeWidth" fill-opacity="0"></path>
      <path :d="pathString" stroke-linecap="round" :stroke="color" :stroke-width="strokeWidth" fill-opacity="0" :style="pathStyle"></path>
    </svg>
    <div class="h-circle-content">
      <slot></slot>
    </div>
  </div>
</template>
<script>

export default {
  name: 'hCircle',
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
    return {};
  },
  computed: {
    circleStyle() {
      return {
        height: `${this.circleSize}px`
      };
    },
    circleSize() {
      return this.size + (this.strokeWidth / 2);
    },
    radius() {
      return this.circleSize - this.strokeWidth / 2;
    },
    pathString() {
      return `M ${this.circleSize},${this.circleSize} m 0,-${this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,${2 * this.radius}
        a ${this.radius},${this.radius} 0 1 1 0,-${2 * this.radius}`;
    },
    len() {
      return Math.PI * 2 * this.radius;
    },
    pathStyle() {
      return {
        'stroke-dasharray': `${this.len}px ${this.len}px`,
        'stroke-dashoffset': `${((100 - Math.min(this.percent, 100)) / 100 * this.len)}px`,
        'transition': 'stroke-dashoffset 0.6s ease 0s, stroke 0.6s ease'
      };
    }
  }
};
</script>
