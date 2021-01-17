<template>
  <div>
    <p>Enter trigger</p>
    <p>
      <Search @search="search" v-model="searchText1"></Search>
    </p>
    <p>Keyup trigger</p>
    <p>
      <Search @search="search" v-model="searchText2" position="front" trigger-type="input"></Search>
    </p>
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
      this.$Message.info(`Inquire "${data}"`);
    }
  }
};
</script>
