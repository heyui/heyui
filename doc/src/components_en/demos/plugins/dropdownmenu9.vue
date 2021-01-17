<style scoped lang="less">
.header-info {
  background: @dark-color;
  height: 40px;
}
</style>
<style lang="less">
.header-info-dropdown {
  color: @white-color;
  cursor: pointer;
  line-height: 40px;
  padding: 0 10px 0 15px;
  transition: 0.2s;
  &:hover,
  &.@{pop-ref-prefix} {
    background: rgba(243, 243, 243, 0.19);
  }
  &-dropdown {
    .h-dropdownmenu-item {
      line-height: 30px;
      &:not(.disabled):hover {
        background: @dark-color;
        color: #fff;
      }
    }
  }
}
</style>
<template>
  <div class="header-info">
    <DropdownMenu @click="trigger" :datas="param" class-name="header-info-dropdown" :show-count="true" :width="150">
      <span>Personal information</span>
    </DropdownMenu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: [
        { title: 'Home', key: 'Home', icon: 'h-icon-home' },
        { title: 'Message', key: 'message', icon: 'h-icon-bell', count: 8 },
        { divider: true },
        { title: 'task', key: 'task', icon: 'h-icon-complete', disabled: true }
      ]
    };
  },
  methods: {
    trigger(code) {
      this.$Message.info(`You clicked ${code}`);
    }
  }
};
</script>
