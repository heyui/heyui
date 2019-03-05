<template>
  <div>
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete :option="param" v-model="value" @change="onChange" type="title"></AutoComplete></div>
  </div>
</template>
<script>

import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  // this 为 option 配置
  // this.orgId 使用传递的参数获取数据，例：搜索某公司下的员工
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      callback(d.result.map((r) => {
        return r[0];
      }));
    });
};

export default {
  data() {
    return {
      value: '测试',
      param: {
        orgId: 1, // 自定义参数传递
        loadData,
        minWord: 1
      }
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    }
  }
};
</script>
