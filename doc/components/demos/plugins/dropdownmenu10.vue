<style lang="less" scoped>
  .dropdownmenu10-demo{
    height: 100px;
    width: 400px;
    border: 1px solid @gray2-color;
  }
</style>

<template>
  <DropdownMenu @click="trigger" :datas="param" trigger="contextMenu" :toggleIcon="false">
    <div class="dropdownmenu10-demo">右键点击区域内</div>
  </DropdownMenu>
</template>
<script>

export default {
  data() {
    return {
      param: [{ title: '新建', key: 'add', icon: 'h-icon-plus' }, { title: '编辑', key: 'edit', icon: 'h-icon-edit' }, { title: '删除', key: 'delete', icon: 'h-icon-trash' }]
    };
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  }
};
</script>
