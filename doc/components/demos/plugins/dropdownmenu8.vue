<template>
  <DropdownMenu @click="trigger" :datas="param" :show-count="true" :max-count="100" :width="200" class-name="h-text-dropdown">
    <span>菜单menu</span>
  </DropdownMenu>
</template>
<script>

export default {
  data() {
    return {
      param: [{ title: '测试1', key: 'test1', count: 4 }, { title: '测试2', key: 'test2', disabled: true, count: 100 }, { divider: true }, { title: '测试3', key: 'test3', count: 90 }]
    };
  },
  methods: {
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    }
  }
};
</script>
