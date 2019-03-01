<template>
  <li :class="itemCls">
    <div :class="timeSC.classes" :style="timeSC.styles">
      <slot name="time"></slot>
    </div>
    <div :class="prefix + '-item-content'">
      <div :class="circleSC.classes" :style="circleSC.styles"><i :class="icon"></i></div>
      <slot name="content"></slot>
      <slot></slot>
    </div>
  </li>
</template>
<script>
const prefix = 'h-timeline';
export default {
  name: 'hTimeLineItem',
  props: {
    color: String,
    icon: String
  },
  data() {
    return {
      prefix
    };
  },
  computed: {
    itemCls() {
      return {
        [`${prefix}-item`]: true,
        'has-icon': !!this.icon,
        [`${prefix}-item-${this.color}-color`]: !!this.color
      };
    },
    circleSC() {
      let styles = {};
      let classes = {
        [`${prefix}-item-circle`]: true
      };
      return {
        styles,
        classes
      };
    },
    timeSC() {
      let width = this.$parent.timeWidth || 100;
      return {
        classes: {
          [`${prefix}-item-time`]: true
        },
        styles: {
          width: `${width}px`
        }
      };
    }
  }
};
</script>
