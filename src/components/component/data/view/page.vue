<template>
  <div class="doc">
    <h2>Pagination 分页</h2>
    <h3>普通分页</h3>
    <div><Pagination :cur = "current1" :total="total" @current-change="currentChange"></Pagination></div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      current1: 1,
      current2: 1,
      current3: 1,
      current4: 1,
      total: 250,
    }
  },
  methods: {
    currentChange(value) {
      log(value)
    }
  }
}
</script>
