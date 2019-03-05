<template>
  <div v-bg-color:gray4 v-width="150">
    <Tabs :datas="param" class-name="h-tabs-menu" v-model="selected" @change="change"></Tabs>
  </div>
</template>

<script>
export default {
  data() {
    return {
      param: {
        module1: 'module1',
        module2: 'module2',
        module3: 'module3'
      },
      selected: 'module1'
    };
  },
  methods: {
    change(data) {
      this.$Message.info(`切换至${data.title}`, 1000);
    }
  }
};
</script>
