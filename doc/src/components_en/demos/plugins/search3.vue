<template>
  <div>
    <blockquote>Setting height 40px, width 300px</blockquote>
    <Search @search="search" v-model="searchText1" :height="40" :width="320" showSearchButton placeholder="Example"></Search>
    <blockquote>block</blockquote>
    <Search @search="search" v-model="searchText2" block showSearchButton placeholder="Example"></Search>
  </div>
</template>
<script>

export default {
  data() {
    return {
      searchText1: null,
      searchText2: null
    };
  },
  methods: {
    search(data) {
      this.$Message.info(`${data}`);
    }
  }
};
</script>
