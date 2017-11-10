<template>
<div>
  <p>
    <Search @change="search" v-model="searchText" v-width="300" placeholder="查询示例1"></Search>
    <Search @change="search" v-model="searchText" v-width="300" position="front" trigger-type="input" placeholder="查询示例2"></Search>
  </p>
  <Search @change="search" v-model="searchText" block position="front" placeholder="查询示例3"></Search>
</div>

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
