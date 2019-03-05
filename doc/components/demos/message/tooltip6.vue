<template>
  <div>
    <p v-for="n of list" :key="n.id"><button v-tooltip class="h-btn h-btn-text" @click="updateList2">Directive执行{{index}}</button></p>
    <!-- <button class="h-btn h-btn-text" v-tooltip  theme="white" content="Directive执行|白色风格">Directive执行|白色风格</button> -->
    <!-- <Tooltip content="Component调用"><button class="h-btn h-btn-text">Component调用</button></Tooltip>
    <Tooltip content="Component调用|白色风格"  theme="white"><button class="h-btn h-btn-text">Component调用|白色风格</button></Tooltip> -->
    <Loading :loading="loading"></Loading>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false,
      list: [],
      index: 1
    };
  },
  mounted() {
    this.updateList();
  },
  methods: {
    updateList2() {
      this.index += 1;
      // this.loading = true;
      setTimeout(() => {
        this.list = [{
          id: 1
        }, {
          id: 2
        }];
        // this.loading = false;
      }, 1000);
    },
    updateList() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.list = [{
          id: 1
        }, {
          id: 2
        }, {
          id: 3
        }];
      }, 100);
    }
  }
};
</script>
