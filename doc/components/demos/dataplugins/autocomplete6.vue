<template>
  <div >
    <p>value:{{value}}</p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value" @change="onChange">
        <template slot="item" slot-scope="props"><div>{{props.item.title}}<span class="float-right gray-color">{{props.item.title.length}}个字</span></div></template>
      </AutoComplete>
    </div>
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
          key: r[1] + Math.random(),
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
    onChange(data, trigger) {
      log(data, trigger);
    },
  }
};
</script>
