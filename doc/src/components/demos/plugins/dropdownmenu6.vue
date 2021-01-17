<template>
  <DropdownMenu @click="trigger" :datas="param" :equal-width="true" class-name="h-text-dropdown">
    <div v-width="150">菜单menu</div>
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
    }
  }
};
</script>
