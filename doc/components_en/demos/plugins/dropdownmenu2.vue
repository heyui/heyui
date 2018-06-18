
<style lang="less">
.button-dropdown.h-dropdowncustom-show-toggle{
  &:hover, &.@{pop-ref-prefix}{
    color: @primary-color;
  }
  .h-dropdowncustom-show-content{
    padding: 0;
  }
  .h-btn {
    padding-right: 26px;
  }
}
</style>
<template>
  <DropdownMenu @click="trigger" :datas="param" class-name="button-dropdown">
    <Button>菜单menu</Button>
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
