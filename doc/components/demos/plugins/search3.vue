<template>
  <div>
    <Search @search="search" v-model="searchText" block showSearchButton placeholder="查询示例3"></Search>
  </div>
</template>
<script>

export default {
  data() {
    return {
      searchText: null
    };
  },
  methods: {
    search(data) {
      this.$Message.info(`查询“${data}”`);
    }
  }
};
</script>
