<template>
  <div>
    <Tabs :datas="param" v-model="selected" @change="change"></Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        module1: "模块1",
        module2: "模块2",
        module3: "模块3",
      },
      selected: 'module1'
    }
  },
  methods: {
    change(data) {
      this.$Message.info(`切换至${data.title}`, 1000);
    }
  }
}
</script>
