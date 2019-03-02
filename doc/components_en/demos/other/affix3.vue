<style lang="less">
.affix-demo-3-vue {
  overflow: hidden;
}
.affix-demo-3 {
  float: right;
  width: 120px;
}
</style>

<template>
  <div v-height="1000" class="affix-demo-3-vue bg-gray2-color relative text-right">
    <Affix :fixedOffsetTop="80" :offset-top="20" :offset-bottom="20" class="affix-demo-3" :container="getContainer" @change="onchange">
      <button class="h-btn h-btn-blue" v-height="300">In a fixed container</button>
    </Affix>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    };
  },
  methods: {
    onchange(fixed) {
      this.fixed = fixed;
    },
    getContainer() {
      return this.$el;
    }
  }
};
</script>
