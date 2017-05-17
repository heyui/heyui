<template>
  <Search @search="search" v-width="300" placeholder="查询示例1"></Search>
</template>
<script>

export default {
  data() {
    return {
    }
  },
  methods: {
    search(data) {
      this.$Message.info(`查询“${data}”`);
    }
  }
};
</script>
