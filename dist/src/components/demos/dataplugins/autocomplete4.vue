<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete :option="param"
                  v-model="value" @change="onChange" :show="value"></AutoComplete>
  </div>
</template>
<script>

import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      callback(d.result.map((r) => {
        return r[0];
      }));
    });
}

export default {
  data() {
    return {
      value: '测试',
      param: {
        loadData,
        minWord: 1
      }
    }
  },
  methods: {
    onChange(data) {
      log(data);
    },
  }
};
</script>
