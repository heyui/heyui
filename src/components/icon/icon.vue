<template>
  <i :class="iconCls" :style="iconStyle" v-bind="$attrs"></i>
</template>
<script>
const prefix = 'h-icon';
export default {
  name: 'hIcon',
  props: {
    type: String,
    color: String,
    size: Number,
    isLink: Boolean
  },
  data() {
    return {};
  },
  methods: {},
  computed: {
    iconCls() {
      return {
        [`${prefix}-${this.type}`]: !!this.type,
        link: this.isLink
      };
    },
    iconStyle() {
      return {
        ['font-size']: `${this.size}px`,
        color: this.color
      };
    }
  }
};
</script>
