<template>
  <div >
    <blockquote>type="key"，使用show参数控制展示</blockquote>
    <p>value:{{value1}}, show: {{show1}}  <span class="link" @click="update1">修改值</span></p>
    <div v-width="300"><AutoComplete :option="param" :show="show1" type="key" v-model="value1" @change="onChange1"></AutoComplete></div>

    <p v-height="10"></p>
    <p>value:{{value2}}</p>
    <div v-width="300"><AutoComplete :option="param" type="key" multiple v-model="value2" @change="onChange"></AutoComplete></div>

    <p v-height="10"></p>
    <blockquote>type="title"</blockquote>
    <p>value:{{value3}} <span class="link" @click="update3">修改值</span></p>
    <div v-width="300"><AutoComplete :option="param" type="title" v-model="value3" @change="onChange"></AutoComplete></div>

    <p v-height="10"></p>
    <p>value:{{value4}} <span class="link" @click="update4">修改值</span></p>
    <div v-width="300"><AutoComplete :option="param" type="title" multiple v-model="value4" @change="onChange"></AutoComplete></div>

    <p v-height="10"></p>
    <blockquote>type="object"</blockquote>
    <p>value:{{value5}} <span class="link" @click="update5">修改值</span> </p>
    <div v-width="300"><AutoComplete :option="param" type="object" v-model="value5" @change="onChange"></AutoComplete></div>

    <p v-height="10"></p>
    <p>value:{{value6}} <span class="link" @click="update6">修改值</span> </p>
    <div v-width="300"><AutoComplete :option="param" type="object" :multiple="true" v-model="value6" @change="onChange"></AutoComplete></div>
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
          name: r[0],
          code: r[1] + Math.random()
        };
      }));
    });
};

export default {
  data() {
    return {
      value1: 1,
      show1: '初始化',
      value2: [],
      value3: '初始化',
      value4: ['初始化'],
      value5: { code: 123, name: '初始化' },
      value6: [{ code: 123, name: '初始化' }],
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
    onChange1(data, trigger) {
      if (data.value) {
        this.show1 = data.value.title;
      } else {
        this.show1 = null;
      }
    },
    update1() {
      this.show1 = '修改值';
      this.value1 = 123;
    },
    update3() {
      this.value3 = '修改';
    },
    update4() {
      this.value4 = ['修改1', '修改2'];
    },
    update5() {
      this.value5 = { code: 123, name: '修改' };
    },
    update6() {
      this.value6 = [{ code: 123, name: '修改' }];
    }
  }
};
</script>
