<template>
  <Pagination :cur="current" :total="total" align="right" @change="currentChange"></Pagination>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 200
    };
  },
  methods: {
    currentChange(value) {
      this.total = this.total + 1;
      console.log(value.cur, value.size);
    }
  }
};
</script>
