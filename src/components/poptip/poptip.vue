<template>
  <Tooltip ref="tooltip" :theme="theme" :placement="placement" trigger="click">
    <slot></slot>
    <div slot="content" class="h-poptip">
      <div class="h-poptip-content"><i class="yellow-color h-icon-warn"></i><i class="h-split"></i>{{content}}</div>
      <div class="clearfix"><div class="float-right"><button type="button" class="h-btn h-btn-text h-btn-xs" @click="close">{{'h.common.cancel' | hlang}}</button><button type="button" @click="trigger" class="h-btn h-btn-text h-btn-xs h-btn-primary">{{'h.common.confirm' | hlang}}</button></div></div>
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
