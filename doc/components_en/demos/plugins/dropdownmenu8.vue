<template>
  <DropdownMenu @click="trigger" :datas="param" :show-count="true" :max-count="100" :width="200" class-name="h-text-dropdown">
    <span>Menu menu</span>
  </DropdownMenu>
</template>
<script>
export default {
  data() {
    return {
      param: [
        { title: 'Test 1', key: 'test1', count: 4 },
        { title: 'Test 2', key: 'test2', disabled: true, count: 100 },
        { divider: true },
        { title: 'Test 3', key: 'test3', count: 90 }
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
