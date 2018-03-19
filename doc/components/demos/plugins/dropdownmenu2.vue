
<style lang="less">
.button-dropdown{
  &:hover, &.@{pop-ref-prefix}{
    color: @primary-color;
  }
}
</style>
<template>
  <DropdownMenu @click="trigger" :datas="param" class-name="button-dropdown">
    <button class="h-btn">菜单menu</button>
  </DropdownMenu>
</template>
<script>

export default {
  data() {
    return {
      param: [{ title: "测试1", key: 'test1' }, { title: "测试2", key: 'test2' }, { title: "测试3", key: 'test3' }]
    }
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  },
};
</script>
