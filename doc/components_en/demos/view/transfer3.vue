
<template>
  <div>
    <p>value: {{value}}</p>
    <Transfer v-model="value" :datas="sourceDatas" keyName="code" @transfer="test">
      <template slot="sourceHeader">
        <div class="h-transfer-header">First-tier city</div>
      </template>
      <template slot="targetHeader">
        <div class="h-transfer-header">Open city</div>
      </template>
      <template slot-scope="{option}" slot="item">
        {{option.text}}({{option.code}})
      </template>
    </Transfer>
  </div>
</template>

<script>
export default {
  methods: {
    test() {
      console.log(arguments);
    }
  },
  data() {
    return {
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
