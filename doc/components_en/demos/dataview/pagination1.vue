<template>
  <div>
    <p><Button @click="updateCur">return page 1</Button><Button @click="update">update pagination</Button></p>
    <p><Pagination :cur="cur" :total="total" :size="size" @change="change1"></Pagination></p>
    <blockquote>Use v-model, compatibility 1.18.0+</blockquote>
    <p>pagination: {{pagination}}</p>
    <p><Pagination v-model="pagination" @change="change2"></Pagination></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cur: 1,
      total: 100,
      size: 10,
      pagination: {
        page: 1,
        size: 10,
        total: 100
      }
    };
  },
  methods: {
    updateCur() {
      this.cur = 1;
      this.pagination.page = 1;
    },
    update() {
      this.size = this.pagination.size = this.size == 20 ? 10 : 20;
      this.total = this.pagination.total = Math.floor(Math.random() * 300);
      this.updateCur();
    },
    change1(value) {
      this.cur = value.cur;
      this.size = value.size;
      console.log(value);
    },
    change2(value) {
      console.log(value);
    }
  }
};
</script>
