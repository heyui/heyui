<style lang="less">
.breadcrumb-demo3 {
  .h-breadcrumb-item-separator {
    color: #44c97b;
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
      datas: [
        {
          title: 'Home',
          route: { name: 'Home' }
        },
        {
          title: 'Component',
          route: { name: 'Component' }
        },
        {
          title: 'Breadcrumb'
        }
      ]
    };
  },
  methods: {
    click(data) {
      this.$Message.info(`Processing access ${data.title}`, 1000);
    }
  }
};
</script>
