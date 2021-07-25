<template>
  <i :class="iconCls" :style="iconStyle" v-bind="$attrs"></i>
</template>
<script>
export default {
  name: 'HIcon',
  props: {
    type: String,
    color: String,
    size: Number,
    isLink: Boolean
  },
  data() {
    return {};
  },
  computed: {
    iconCls() {
      return {
        [`${this.type}`]: !!this.type,
        link: this.isLink
      };
    },
    iconStyle() {
      return {
        ['font-size']: `${this.size}px`,
        color: this.color
      };
    }
  },
  methods: {}
};
</script>
