<style lang='less'>
</style>
<template>
  <div id="app">
    <p>
      <Button @click="tip">点我</Button>
    </p>
    <Pagination ></Pagination>
    <p>
      <DropdownMenu :datas="['菜单1','菜单2']" @click="menuTip" button>菜单</DropdownMenu>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {

    };
  },
  mounted() {
  },
  methods: {
    menuTip(key) {
      this.$Message(key);
    },
    tip() {
      this.$Message('测试');
    }
  },
  computed: {

  }
};
</script>
