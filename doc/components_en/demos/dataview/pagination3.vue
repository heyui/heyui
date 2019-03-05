<template>
  <Pagination :cur="current" :total="total" :pagerSize="3" @change="currentChange" :small="true" layout="total,sizes,pager,jumper"></Pagination>
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
