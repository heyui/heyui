<style scoped lang="less">
.header-info{
  background: @dark-color;
  line-height: 40px;
  height: 40px;
  color: @white-color;
}
</style>
<style lang="less">
.header-info-dropdown{
  cursor: pointer;
  padding: 0 10px 0 15px;
  transition: .2s;
  &:hover, &.@{pop-ref-prefix}{
    background: rgba(243, 243, 243, 0.19);
  }
}
</style>
<template>
  <div class="header-info">
    <DropdownMenu @onclick="trigger" :datas="param" class-name="header-info-dropdown" :show-count="true" :width="150">
      <span>个人信息</span>
    </DropdownMenu>
  </div>
</template>
<script>

export default {
  data() {
    return {
      param: [{ title: "首页", key: 'home', icon: 'h-icon-home' }, { title: "消息", key: 'message', icon: 'h-icon-bell', count: 8 }, { divider: true }, { title: "任务", key: 'task', icon: 'h-icon-complete', disabled: true }]
    }
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  },
};
</script>
