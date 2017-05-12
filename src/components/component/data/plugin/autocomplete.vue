<template>
  <div class="doc">
    <h2>AutoComplete 模糊匹配</h2>
  
    <h3>基本用法</h3>
    <p>value:{{value1}}</p>
    <AutoComplete dict="simple"
                  v-model="value1" @change="onChange"></AutoComplete>
  
    <h3>disabled</h3>
    <p>
      <h-switch v-model="disabled"
                :small="true">禁用</h-switch> value:{{value2}}</p>
    <AutoComplete dict="simple"
                  v-model="value2"
                  :disabled="disabled" @change="onChange"></AutoComplete>
  
    <h3>多选</h3>
    <p>value:{{value3}}</p>
    <AutoComplete dict="simple"
                  v-model="value3"
                  :multiple="true" @change="onChange"></AutoComplete>
  
    <h3>远程</h3>
    <p>value:{{value4}}</p>
    <AutoComplete v-model="value4"
                  :options="param4" @change="onChange"></AutoComplete>
  
    <h3>远程多选</h3>
    <p>value:{{value5}}</p>
    <AutoComplete v-model="value5"
                  :options="param4"
                  :multiple="true" @change="onChange"></AutoComplete>
  
    <h3>自定义展示内容</h3>
    <p>value:{{value6}}</p>
    <AutoComplete v-model="value6"
                  :options="param6" @change="onChange"></AutoComplete>
  
    <h3>选择对象</h3>
    <p>value:{{value7}}
      <button class="h-btn h-btn-text"
              @click="update" @change="onChange">修改值</button>
    </p>
    <AutoComplete :options="param7"
                  type="object"
                  v-model="value7"></AutoComplete>
  
    <h3>选择对象多选</h3>
    <p>value:{{value8}}
      <button class="h-btn h-btn-text"
              @click="update2">修改值</button>
    </p>
    <AutoComplete :options="param7"
                  type="object"
                  :multiple="true"
                  v-model="value8"></AutoComplete>
  
    <h3>可以任意输入</h3>
    <p>value:{{value9}}</p>
    <AutoComplete v-model="value9"
                  :options="param7"
                  :must-match="false"></AutoComplete>
  
    <h3>可以任意输入对象</h3>
    <p>value:{{value10}}</p>
    <AutoComplete v-model="value10"
                  :options="param10"
                  type="object"
                  :must-match="false"></AutoComplete>


    <h3>可以任意输入对象多选</h3>
    <p>value:{{value11}}</p>
    <AutoComplete v-model="value11"
                  :options="param10"
                  type="object"
                  :multiple="true"
                  :must-match="false"></AutoComplete>
  
    <h3>全局配置</h3>
    <p>value:{{value12}}</p>
    <AutoComplete v-model="value12" config="simple"></AutoComplete>
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
          title: r[0],
          key: r[0],
        });
      });
      callback(data);
    });
}
const loadData2 = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then((d) => {
      const result = d.result;
      const data = [];
      result.forEach((r) => {
        data.push({
          name: r[0],
          id: r[0],
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
        loadData,
        minWord: 1
      },
      value6: null,
      param6: {
        loadData,
        minWord: 1,
        render(item) {
          return `<p>${item.title}<span class="float-right gray-color">${item.title.length}个字</span></p>`
        }
      },
      value7: { key: '测试', title: '测试' },
      param7: {
        loadData,
        minWord: 1
      },
      value8: [{ key: '测试', title: '测试' }, { key: '测试2', title: '测试2' }],
      value9: null,
      value10: null,
      value12: null,
      value11: [],
      param10: {
        loadData: loadData2,
        key: 'id',
        title: 'name',
        minWord: 1
      },
    }
  },
  methods: {
    update() {
      this.value7 = { key: '修改', title: '修改' };
    },
    onChange(data) {
      log(data);
    },
    update2() {
      this.value8 = [{ key: '修改', title: '修改' }];
    }
  }
}
</script>
