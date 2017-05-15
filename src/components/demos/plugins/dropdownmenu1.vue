<template>
  <DropdownMenu @onclick="trigger" :datas="param">
    <span class="text-hover">菜单menu</span>
  </DropdownMenu>
</template>
<script>

export default {
  data() {
    return {
      param: ["测试1", "测试2", "测试3"]
    }
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  },
};
</script>
