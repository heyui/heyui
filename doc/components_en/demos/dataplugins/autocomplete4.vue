<template>
  <div>
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete :option="param" v-model="value" @change="onChange" type="title"></AutoComplete></div>
  </div>
</template>
<script>
import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  // This is configured for option
  // this.orgId Use the passed parameters to get the data, for example: Search for employees under a company
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then(d => {
      callback(
        d.result.map(r => {
          return r[0];
        })
      );
    });
};

export default {
  data() {
    return {
      value: 'test',
      param: {
        orgId: 1, // Custom parameter passing
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
