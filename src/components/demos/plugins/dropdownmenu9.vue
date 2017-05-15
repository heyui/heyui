<template>
  <DropdownMenu @onclick="trigger" :datas="param" :show-count="true" :width="150">
    <span class="text-hover">菜单menu</span>
  </DropdownMenu>
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
