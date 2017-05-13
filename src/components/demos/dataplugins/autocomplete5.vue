<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete :option="param"
                  :multiple="true"
                  v-model="value" @change="onChange"></AutoComplete>
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
      value: [],
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
