<template>
  <div>
    <Search @search="search" v-model="searchText" block showSearchButton placeholder="Query example 3"></Search>
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
      this.$Message.info(`Inquire "${data}"`);
    }
  }
};
</script>
