<template>
  <div>
    <p v-for="n of list" :key="n.id"><button v-tooltip class="h-btn h-btn-text" @click="updateList2">Directive execution{{index}}</button></p>
    <!-- <button class="h-btn h-btn-text" v-tooltip  theme="white" content="Directive Execution | White Style">Directive Execution | White Style</button> -->
    <!-- <Tooltip content="Component call"><button class="h-btn h-btn-text">Component call</button></Tooltip>
    <Tooltip content="Component call | white style"  theme="white"><button class="h-btn h-btn-text">Component call | white style</button></Tooltip> -->
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
        this.list = [
          {
            id: 1
          },
          {
            id: 2
          }
        ];
        // this.loading = false;
      }, 1000);
    },
    updateList() {
      this.loading = true;
      setTimeout(() => {
        this.loading = false;
        this.list = [
          {
            id: 1
          },
          {
            id: 2
          },
          {
            id: 3
          }
        ];
      }, 100);
    }
  }
};
</script>
