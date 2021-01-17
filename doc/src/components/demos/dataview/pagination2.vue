<template>
  <Pagination v-model="pagination" @change="currentChange" small></Pagination>
</template>

<script>
export default {
  data() {
    return {
      pagination: {
        page: 1,
        size: 10,
        total: 100
      }
    };
  },
  methods: {
    currentChange(value) {
      console.log(value);
    }
  }
};
</script>
