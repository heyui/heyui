<template>
  <Search @change="search" v-model="searchText" v-width="300" position="front" trigger-type="input" placeholder="查询示例2"></Search>
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
