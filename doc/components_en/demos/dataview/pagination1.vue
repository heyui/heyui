<template>
  <div>
    <p>total:<NumberInput v-width="200" v-model="total" @input="changeTotal" :useOperate="true" :step="10"></NumberInput></p>
    <p><Pagination :cur="current" :total="total" @change="currentChange"></Pagination></p>
    <blockquote>Use v-model, compatibility 1.18.0+</blockquote>
    <p><Pagination v-model="pagination" @change="currentChange"></Pagination></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 100,
      pagination: {
        page: 1,
        size: 10,
        total: 100
      }
    };
  },
  methods: {
    changeTotal() {
      this.pagination.total = this.total;
    },
    currentChange(value) {
      console.log(value.cur, value.size);
    }
  }
};
</script>
