<template>
  <div :class="buttonGroupCls">
    <slot></slot>
  </div>
</template>
<script>
const prefix = 'h-btn-group';
const Props = {
  size: new Set(['l', 's', 'xs'])
};
export default {
  name: 'hButtonGroup',
  props: {
    circle: Boolean,
    size: {
      type: String,
      validator(value) {
        return Props.size.has(value);
      }
    }
  },
  data() {
    return {};
  },
  computed: {
    buttonGroupCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-circle`]: !!this.circle,
        [`${prefix}-${this.size}`]: !!this.size
      };
    }
  }
};
</script>
