<template>
  <div >
    <p>value:{{value}}</p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value" @change="onChange">
        <div slot="top" class="text-center" style="line-height:40px">自定义头部</div>
        <template slot="item" slot-scope="props"><div>{{props.item.title}}<span class="float-right gray-color">{{props.item.title.length}}个字</span></div></template>
        <div slot="bottom" class="text-center link" style="line-height:40px">查看更多</div>
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
