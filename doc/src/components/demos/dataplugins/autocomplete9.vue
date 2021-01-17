<template>
  <div>
    <p> value:{{value1}} <span class="link" @click="update1">修改值</span></p>
    <div v-width="300">
      <AutoComplete :option="param" type="title" v-model="value1" :must-match="false" @change="onChange"></AutoComplete>
    </div>

    <p v-height="10"></p>
    <p>多选：value:{{value2}} <span class="link" @click="update2">修改值</span></p>
    <div v-width="300">
      <AutoComplete :option="param" type="title" v-model="value2" endInput=";" :must-match="false" multiple @change="onChange"></AutoComplete>
    </div>

    <p v-height="10"></p>
    <p>保存对象：value:{{value3}} <span class="link" @click="update3">修改值</span></p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value3" type="object" :must-match="false" @change="onChange"></AutoComplete>
    </div>

    <p v-height="10"></p>
    <p>保存对象多选：value:{{value4}} <span class="link" @click="update4">修改值</span></p>
    <div v-width="300">
      <AutoComplete :option="param" v-model="value4" type="object" :must-match="false" multiple @change="onChange"></AutoComplete>
    </div>
  </div>
</template>
<script>
import jsonp from 'fetch-jsonp';

const loadData = function (filter, callback) {
  jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
    .then(response => response.json())
    .then(d => {
      callback(
        d.result.map(r => {
          return {
            name: r[0],
            code: r[1] + Math.random()
          };
        })
      );
    });
};

export default {
  data() {
    return {
      value1: '23',
      value2: ['23', '45'],
      value3: { code: '1', name: '初始化' },
      value4: [{ code: '1', name: '初始化' }],
      param: {
        keyName: 'code',
        titleName: 'name',
        loadData,
        minWord: 1
      }
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update1() {
      this.value1 = 'new value';
    },
    update2() {
      this.value2 = ['value1', 'value2'];
    },
    update3() {
      this.value3 = { code: 123, name: '修改' };
    },
    update4() {
      this.value4 = [{ code: 123, name: '修改' }];
    }
  }
};
</script>
