<template>
  <div >
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete :option="param" type="title" v-model="value"
                  :must-match="false" @change="onChange"></AutoComplete></div>
  </div>
</template>
<script>

import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      callback(d.result.map((r) => {
        return {
          title: r[0],
          key: r[1],
        };
      }));
    });
}

export default {
  data() {
    return {
      value: '23',
      param: {
        loadData,
        minWord: 1
      }
    }
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update() {
      this.value = [{ key: 123, title: '修改' }];
    }
  }
};
</script>
