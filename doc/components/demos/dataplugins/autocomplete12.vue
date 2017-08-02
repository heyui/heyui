<template>
  <div>
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete :option="param" v-model="value" type="object" :multiple="true"
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
      value: '',
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
    update() {
      this.value = [{ key: 123, title: '修改' }];
    }
  }
};
</script>
