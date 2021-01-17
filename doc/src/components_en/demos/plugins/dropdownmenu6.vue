<template>
  <DropdownMenu @click="trigger" :datas="param" :equal-width="true" class-name="h-text-dropdown">
    <div v-width="150">Menu menu</div>
  </DropdownMenu>
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
