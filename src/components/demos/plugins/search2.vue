<template>
  <Search @search="search" v-width="300" position="front"></Search>
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
