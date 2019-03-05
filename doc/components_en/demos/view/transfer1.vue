<template>
  <div>
    <p>value:{{value1}}</p>
    <Transfer v-model="value1" :datas="sourceDatas1" :option="option1"></Transfer>

    <p>value:{{value2}}</p>
    <Transfer v-model="value2" :datas="sourceDatas2" :option="option2" keyName="id"></Transfer>
  </div>
</template>

<script>
export default {
  data() {
    let sourceDatas1 = this.generateDemoData('key');
    let sourceDatas2 = this.generateDemoData('id');
    return {
      value1: null,
      sourceDatas1,
      option1: {
        ltText: 'Shift left',
        rtText: 'Right shift'
      },
      value2: [1, 2],
      option2: {
        rtIcon: 'h-icon-plus',
        ltIcon: 'h-icon-minus'
      },
      sourceDatas2
    };
  },
  methods: {
    generateDemoData(propKey) {
      let data = [];
      for (let i = 0; i < 10; i++) {
        data.push({
          [propKey]: i + 1,
          text: `Option ${i + 1}`
        });
      }
      return data;
    }
  }
};
</script>
