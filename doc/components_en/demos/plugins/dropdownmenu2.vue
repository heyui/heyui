
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
    <DropdownMenu button class="h-btn-primary" @click="trigger" :datas="param">Start</DropdownMenu>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: [
        { title: 'Test 1', key: 'test1' },
        { title: 'Test 2', key: 'test2' },
        { title: 'Test 3', key: 'test3' }
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
