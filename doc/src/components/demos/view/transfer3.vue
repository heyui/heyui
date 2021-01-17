
<template>
  <div>
    <p>值：{{value}}</p>
    <Transfer v-model="value" :datas="sourceDatas" keyName="code" @transfer="test" :height="300">
      <template slot="sourceHeader"><div class="h-transfer-header">一线城市</div></template>
      <template slot="targetHeader"><div class="h-transfer-header">开通城市</div></template>
      <template slot-scope="{option, type}" slot="item">
        <template v-if="type == 'source'">
          {{option.text}}({{option.code}})
        </template>
        <template v-if="type == 'target'">
          {{option.text}}【{{option.code}}】
        </template>
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
        { code: 1001, text: '上海' },
        { code: 1002, text: '北京' },
        { code: 1003, text: '苏州' },
        { code: 1004, text: '福建' },
        { code: 1005, text: '杭州' },
        { code: 1006, text: '广州' },
        { code: 1007, text: '武汉' },
        { code: 1008, text: '常州' },
        { code: 1009, text: '深圳' },
        { code: 1010, text: '郑州' },
        { code: 1011, text: '阳泉' },
        { code: 1012, text: '天津' }
      ]
    };
  }
};
</script>
