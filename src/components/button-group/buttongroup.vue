<template>
  <div :class="buttonGroupCls">
    <slot></slot>
  </div>
</template>
<script>
const prefix = 'h-btn-group';
const Props = {
  size: ['l', 's', 'xs']
};
export default {
  name: 'hButtonGroup',
  props: {
    circle: Boolean,
    size: {
      type: String,
      validator(value) {
        return Props.size.indexOf(value) != -1;
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
