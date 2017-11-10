<template>
  <p>
    <Search @change="search" v-model="searchText" v-width="300" showSearchButton placeholder="查询示例2"></Search>
    <Search @change="search" v-model="searchText" v-width="300" showSearchButton position="front" searchText="Search" placeholder="查询示例2"></Search>
  </p>
</template>
<script>

export default {
  data() {
    return {
      searchText: ''
    }
  },
  methods: {
    search(data) {
      this.$Message.info(`查询“${data}”`);
    }
  }
};
</script>
