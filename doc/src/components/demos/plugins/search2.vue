<template>
  <div>
    <p><Search @search="search" v-model="searchText1" v-width="300" showSearchButton placeholder="查询示例1"></Search></p>
    <p><Search @search="search" v-model="searchText2" v-width="300" showSearchButton searchText="Search" placeholder="查询示例2"></Search></p>
    <p><Search @search="search" v-model="searchText3" v-width="300" showSearchButton placeholder="查询示例3"><i class="h-icon-search"></i></Search></p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      searchText1: '',
      searchText2: '',
      searchText3: ''
    };
  },
  methods: {
    search(data) {
      this.$Message.info(`查询“${data}”`);
    }
  }
};
</script>
