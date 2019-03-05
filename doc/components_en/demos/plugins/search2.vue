<template>
  <div>
    <p>
      <Search @search="search" v-model="searchText1" v-width="300" showSearchButton placeholder="Query example 1"></Search>
    </p>
    <p>
      <Search @search="search" v-model="searchText2" v-width="300" showSearchButton searchText="Search" placeholder="Query example 2"></Search>
    </p>
    <p>
      <Search @search="search" v-model="searchText3" v-width="300" showSearchButton placeholder="Query example 3"><i class="h-icon-search"></i></Search>
    </p>
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
      this.$Message.info(`Inquire "${data}"`);
    }
  }
};
</script>
