<template>
  <DropdownMenu @click="trigger" :datas="param" :toggleIcon="false" class-name="h-text-dropdown">
    <span>菜单menu</span>
  </DropdownMenu>
</template>
<script>

export default {
  data() {
    return {
      param: [{ title: '测试1', key: 'test1' }, { title: '测试2', key: 'test2' }, { title: '测试3', key: 'test3' }]
    };
  },
  methods: {
    trigger(code, data) {
      this.$Message.info(`您点击了${code}`);
    }
  }
};
</script>
