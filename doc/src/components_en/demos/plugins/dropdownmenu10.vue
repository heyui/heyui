<style lang="less" scoped>
.dropdownmenu10-demo {
  height: 100px;
  width: 400px;
  border: 1px solid @gray2-color;
}
</style>

<template>
  <DropdownMenu @click="trigger" :datas="param" trigger="contextMenu" :toggleIcon="false">
    <div class="dropdownmenu10-demo">Right click inside the area</div>
  </DropdownMenu>
</template>
<script>
export default {
  data() {
    return {
      param: [
        { title: 'Add', key: 'add', icon: 'h-icon-plus' },
        { title: 'Edit', key: 'edit', icon: 'h-icon-edit' },
        { title: 'Delete', key: 'delete', icon: 'h-icon-trash' }
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
