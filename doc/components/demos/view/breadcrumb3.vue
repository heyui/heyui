<style lang="less">
.breadcrumb-demo3{
  .h-breadcrumb-item-separator{
    color: #44C97B;
  }
}
</style>

<template>
  <div>
    <Breadcrumb class="breadcrumb-demo3" :datas="datas" @click="click" selfControl separator=">"></Breadcrumb>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [{
        title: 'Home',
        route: { name: 'Home' }
      }, {
        title: 'Component',
        route: { name: 'Component' }
      }, {
        title: 'Breadcrumb'
      }]
    };
  },
  methods: {
    click(data) {
      this.$Message.info(`处理访问${data.title}`, 1000);
    }
  }
};
</script>
