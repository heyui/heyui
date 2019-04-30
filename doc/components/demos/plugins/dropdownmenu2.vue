
<style lang="less">
</style>
<template>
  <div>
    <ButtonGroup>
      <Button icon="h-icon-inbox">Create</Button>
      <DropdownMenu button @click="trigger" :datas="param">Edit</DropdownMenu>
    </ButtonGroup>
    <ButtonGroup>
      <Button color="primary" icon="h-icon-inbox">Create</Button>
      <DropdownMenu class="h-btn-primary" button @click="trigger" placement="bottom-end" :datas="param"></DropdownMenu>
    </ButtonGroup>
    <DropdownMenu button class="h-btn-primary" @click="trigger" :datas="param">开始</DropdownMenu>
  </div>
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
