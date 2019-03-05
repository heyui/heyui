<template>
<div>
  <p>Enter触发</p>
  <p><Search @search="search" v-model="searchText1"></Search></p>
  <p>Keyup触发</p>
  <p><Search @search="search" v-model="searchText2" position="front" trigger-type="input"></Search></p>
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
      this.$Message.info(`查询“${data}”`);
    }
  }
};
</script>
