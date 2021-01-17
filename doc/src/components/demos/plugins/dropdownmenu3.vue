<template>
  <DropdownMenu @click="trigger" :datas="param" @show="show" @hide="hide" placement="bottom-end" class-name="h-text-dropdown">
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
    trigger(code) {
      this.$Message.info(`您点击了${code}`);
    },
    show() {
      this.$Message.info('展开');
    },
    hide() {
      this.$Message.info('关闭');
    }
  }
};
</script>
