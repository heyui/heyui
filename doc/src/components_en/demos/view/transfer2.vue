<template>
  <div>
    <p>value: {{value}}</p>
    <Transfer v-model="value" :datas="sourceDatas" keyName="code" :option="option"></Transfer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      option: {
        ltHeadText: 'First-tier city',
        rtHeadText: 'Open city',
        filterable: true,
        placeholder: 'Input address search',
        render: function (op) {
          return `${op.text}(${op.code})`;
        }
      },
      value: [1003, 1011],
      sourceDatas: [
        { code: 1001, text: 'Shanghai' },
        { code: 1002, text: 'Beijing' },
        { code: 1003, text: 'Suzhou' },
        { code: 1004, text: 'Fujian' },
        { code: 1005, text: 'Hangzhou' },
        { code: 1006, text: 'Guangzhou' },
        { code: 1007, text: 'Wuhan' },
        { code: 1008, text: 'Changzhou' },
        { code: 1009, text: 'Shenzhen' },
        { code: 1010, text: 'Zhengzhou' },
        { code: 1011, text: 'Yangquan' },
        { code: 1012, text: 'Tianjin' }
      ]
    };
  }
};
</script>
