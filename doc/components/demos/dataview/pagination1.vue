<template>
  <div>
    <p>total:<NumberInput v-width="200" v-model="total" :useOperate="true" :step="10"></NumberInput></p>
    <p>pagerSize:<NumberInput v-width="200" v-model="pagerSize" :useOperate="true" :step="1"></NumberInput></p>
    <Pagination :cur="current" :pagerSize="pagerSize" :total="total" @change="currentChange"></Pagination>
  </div>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 40,
      pagerSize: 5,
    }
  },
  methods: {
    currentChange(value) {
      console.log(value.cur, value.size);
    }
  }
}
</script>
