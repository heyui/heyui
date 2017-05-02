<template>
  <div class="doc">
    <h2>AutoComplete 模糊匹配</h2>

    <h3>基本用法</h3>
    <p>value:{{value1}}</p>
    <AutoComplete dict="simple" v-model="value1" show="测试"></AutoComplete>

    <h3>disabled</h3>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch>  value:{{value2}}</p>
    <AutoComplete dict="simple" v-model="value2" :disabled="disabled"></AutoComplete>

    <h3>多选</h3>
    <p>value:{{value3}}</p>
    <AutoComplete dict="simple" v-model="value3" :multiple="true"></AutoComplete>

    <h3>远程</h3>
    <p>value:{{value4}}</p>
    <AutoComplete v-model="value4" :options="param4"></AutoComplete>

    <h3>远程多选</h3>
    <p>value:{{value5}}</p>
    <AutoComplete v-model="value5" :options="param4" :multiple="true"></AutoComplete>

    <h3>自定义展示内容</h3>
    <p>value:{{value6}}</p>
    <AutoComplete v-model="value6" :options="param6"></AutoComplete>
  </div>
</template>

<script>

import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
  .then(response => response.json())
  .then((d) => {
    const result = d.result;
    const data = [];
    result.forEach((r) => {
      data.push({
        value: r[0],
        title: r[0],
        key: r[0],
      });
    });
    callback(data);
  });
}

export default {
  data() {
    return {
      value1: null,
      value2: null,
      disabled: true,
      value3: [],
      value4: null,
      value5: [],
      param4: {
        loadData
      },
      value6: null,
      param6: {
        loadData,
        render(item) {
          return `<p style='min-width:200px'>${item.title}<span class="right gray-color">${item.title.length}个字</span></p>`
        }
      }
    }
  },
  methods: {
  }
}
</script>
