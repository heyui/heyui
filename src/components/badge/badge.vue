<template>
  <div :class="badgeCls">
    <sup :class="badgeCountCls">{{showCount}}</sup>
    <slot></slot>
  </div>
</template>
<script>

const prefix = 'h-badge';
const Props = {
  position: ['right', 'left']
};

export default {
  name: 'hBadge',
  props: {
    count: {
      type: Number,
      default: 0
    },
    maxCount: {
      type: Number,
      default: 100
    },
    showZero: {
      type: Boolean,
      default: false
    },
    dot: {
      type: Boolean,
      default: false
    },
    position: {
      type: String,
      validator(value) {
        return Props.position.indexOf(value) != -1;
      }
    }
  },
  data() {
    return {
    };
  },
  methods: {
  },
  computed: {
    showCount() {
      return this.dot ? '' : (this.count > this.maxCount ? `${this.maxCount}+` : this.count);
    },
    badgeCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-position-right`]: this.position == 'right'
      };
    },
    badgeCountCls() {
      return {
        [`${prefix}-count`]: true,
        [`${prefix}-count-show`]: this.count > 0 || this.showZero,
        [`${prefix}-count-dot`]: this.dot
      };
    }
  }
};
</script>
