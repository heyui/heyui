<template>
  <div>
    <p>{{value}}</p>
    <p v-width="300">
      <Category :option="param" type="key" v-model="value"></Category>
    </p>
  </div>
</template>
<script>

import list from 'js/demo-datas/data1';

export default {
  data() {
    return {
      value: 29,
      param: {
        title: '测试',
        keyName: 'id',
        titleName: 'name',
        dataMode: 'tree',
        datas: []
      }
    };
  },
  mounted() {
    this.param.datas = list;
  }
};
</script>
