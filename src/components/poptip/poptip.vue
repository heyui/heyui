<template>
  <Tooltip ref="tooltip" :theme="theme" :placement="placement" trigger="click">
    <slot></slot>
    <div slot="content" class="h-poptip">
      <div class="h-poptip-content"><i class="yellow-color h-icon-warn"></i><i class="h-split"></i>{{content}}</div>
      <div class="clearfix"><div class="float-right"><Button @click="close" size="xs" :text="true">{{'h.common.cancel' | hlang}}</Button><Button @click="trigger" size="xs" color="primary">{{'h.common.confirm' | hlang}}</Button></div></div>
    </div>
  </Tooltip>
</template>
<script>

export default {
  name: 'hPoptip',
  props: {
    content: String,
    placement: {
      type: String,
      default: 'top'
    },
    theme: {
      type: String,
      default: 'white'
    }
  },
  methods: {
    close() {
      this.$refs.tooltip.hide();
    },
    trigger() {
      this.$emit('confirm');
      this.close();
    }
  }
};
</script>
