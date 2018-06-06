<template>
  <li :class="itemClass">
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
    color: {
      type: String,
      default: 'blue'
    },
    icon: String
  },
  data() {
    return {
      prefix: prefix,
      itemClass: {
        [prefix + '-item']: true,
        'has-icon': !!this.icon
      }
    };
  },
  computed: {
    circleSC() {
      let styles = {};
      let classes = {
        [`${prefix}-item-circle`]: true,
      };
      let color = this.color;
      if (color.startsWith("#")) {
        styles.color = color;
        styles['border-color'] = color;
      } else {
        classes[`${color}-color`] = true;
      }

      return {
        styles,
        classes
      };
    },
    timeSC() {
      let width = this.$parent.timeWidth || 100;
      return {
        classes: {
          [`${prefix}-item-time`]: true,
        },
        styles: {
          width: `${width}px`
        }
      };
    }
  }
};
</script>
