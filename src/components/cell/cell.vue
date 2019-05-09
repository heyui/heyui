<template>
  <div :class="classes" :style="styles">
    <slot></slot>
  </div>
</template>
<script>
import utils from 'heyui/src/utils/utils';

const prefixCls = 'h-col';

const getHalf = (width, hasRemainder) => {
  return Math.floor(width / 2) + (!hasRemainder ? width % 2 : 0) + 'px';
};

export default {
  name: 'hCell',
  props: {
    width: [Number, String],
    flex: [Number, String],
    className: String,
    xs: [Number, Object],
    sm: [Number, Object],
    md: [Number, Object],
    lg: [Number, Object],
    xl: [Number, Object]
  },
  computed: {
    classes() {
      let width = this.width;
      let classList = [`${prefixCls}`];
      classList.push({
        [`${prefixCls}-${width}`]: width,
        [`${this.className}`]: !!this.className
      });

      // let noOtherWidth = width==undefined&&this.flex == undefined;
      for (let size of ['xs', 'sm', 'md', 'lg', 'xl']) {
        if (utils.isNumber(this[size])) {
          // noOtherWidth = false;
          classList.push(`${prefixCls}-${size}-${this[size]}`);
        }
      }
      // if(noOtherWidth){
      //   width = 24;
      // }

      return classList;
    },
    styles() {
      let style = {};
      let styletype = 'padding';
      if (this.flex) {
        style.flex = this.flex;
      }
      if (this.$parent.type == 'flex') {
        styletype = 'margin';
      }

      if (utils.isNumber(this.$parent.space) && this.$parent.space !== 0) {
        const leftTop = getHalf(this.$parent.space, true);
        const rightBottom = getHalf(this.$parent.space, false);
        style[`${styletype}Left`] = leftTop;
        style[`${styletype}Right`] = rightBottom;
        style[`${styletype}Top`] = leftTop;
        style[`${styletype}Bottom`] = rightBottom;
      }

      if (utils.isNumber(this.$parent.spaceX) && this.$parent.spaceX !== 0) {
        style[`${styletype}Left`] = getHalf(this.$parent.spaceX, true);
        style[`${styletype}Right`] = getHalf(this.$parent.spaceX, false);
      }

      if (utils.isNumber(this.$parent.spaceY) && this.$parent.spaceY !== 0) {
        style[`${styletype}Top`] = getHalf(this.$parent.spaceY, true);
        style[`${styletype}Bottom`] = getHalf(this.$parent.spaceY, false);
      }

      return style;
    }
  }
};
</script>
