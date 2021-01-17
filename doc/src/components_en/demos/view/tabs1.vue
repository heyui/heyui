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
        module1: 'module1',
        module2: 'module2',
        module3: 'module3'
      },
      selected: 'module1'
    };
  },
  methods: {
    change(data) {
      this.$Message.info(`Switch to ${data.title}`, 1000);
    }
  }
};
</script>
