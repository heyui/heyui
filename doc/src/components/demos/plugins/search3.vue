<template>
  <div>
    <blockquote>设置 高40px, 宽300px</blockquote>
    <Search @search="search" v-model="searchText1" :height="40" :width="320" showSearchButton placeholder="查询示例3"></Search>
    <blockquote>整行</blockquote>
    <Search @search="search" v-model="searchText2" block showSearchButton placeholder="查询示例3"></Search>
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
