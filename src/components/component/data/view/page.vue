<template>
  <div class="doc">
    <h2>Pagination 分页</h2>
    <h3>普通分页</h3>
    <div><Pagination :cur = "current1" :total="total" @change="currentChange"></Pagination></div>
    <h3>迷你分页</h3>
    <div><Pagination :cur = "current2" :total="total" @change="currentChange" :small="true"></Pagination></div>
    <h3>自定义分页</h3>
    <div><Pagination :cur = "current3" :total="total" @change="currentChange" layout="total,sizes,pager,jumper"></Pagination></div>
    <h3>自定义分页2</h3>
    <div><Pagination :cur = "current4" :total="total" @change="currentChange" layout="pager" :small="true" :size="20"></Pagination></div>
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
      this.total = this.total + 1;
      log(value)
    }
  }
}
</script>
