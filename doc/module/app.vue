<style lang='less'>
</style>
<template>
  <div id="app">
    <Button @click="tip">测试</Button>
    <DropdownMenu :datas="['dsf']">哈哈哈</DropdownMenu>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    },
    tip() {
      this.$Message('测试');
    }
  },
  computed: {

  }
};
</script>
