<template>
  <div>
    <p>total:<NumberInput v-width="200" v-model="total" :useOperate="true" :step="10"></NumberInput></p>
    <Pagination :cur="current" :total="total" @change="currentChange"></Pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 40,
    }
  },
  methods: {
    currentChange(value) {
      console.log(value.cur, value.size);
    }
  }
}
</script>
