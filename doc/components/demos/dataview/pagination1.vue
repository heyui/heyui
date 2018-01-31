<template>
  <Pagination :cur="current" :total="total" @change="currentChange"></Pagination>
</template>

<script>
export default {
  data() {
    return {
      current: 1,
      total: 60
    }
  },
  methods: {
    currentChange(value) {
      console.log(value.cur, value.size);
    }
  }
}
</script>
