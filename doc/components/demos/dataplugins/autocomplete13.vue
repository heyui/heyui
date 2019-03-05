<template>
  <div>
    <blockquote>Key模式，使用show属性做展示，针对一些平铺属性的对象。</blockquote>
    <p>value: {{value5}}, show: {{show}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value5" :show="show" @change="onChange1" type="key" :must-match="false"></AutoComplete></div>

    <blockquote>title模式，配合mustMatch=false，适用于输入提醒的一些场景。</blockquote>
    <p>value:{{value4}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value4" @change="onChange" type="title" :must-match="false"></AutoComplete></div>

    <blockquote>默认Key模式，option可以传递一些业务参数。</blockquote>
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value" @change="onChange" :option="{orgId: orgId}"></AutoComplete></div>

    <blockquote>Key多选模式。</blockquote>
    <p>value1:{{value1}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value1" @change="onChange" multiple></AutoComplete></div>

    <blockquote>对象选择模式。</blockquote>
    <p>value2:{{value2}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value2" @change="onChange" type="object"></AutoComplete></div>

    <blockquote>对象多选模式。</blockquote>
    <p>value3:{{value3}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value3" @change="onChange" type="object" multiple></AutoComplete></div>
    <p>还有<code>mustMatch</code>等模式，具体请查看autocomplete文档。</p>
  </div>
</template>
<script>

// 系统可以全局配置模糊查询的参数，调用的时候只需要使用config参数
// const loadData = function (filter, callback) {
//   this.orgId //this为option参数，可以用来获取定义的业务参数
//   jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
//     .then(response => response.json())
//     .then((d) => {
//       const result = d.result;
//       const data = [];
//       result.forEach((r) => {
//         data.push({
//           name: r[0],
//           id: r[1] + Math.random(),
//         });
//       });
//       callback(data);
//     });
// }

// HeyUI.config("autocomplete.configs", {
//   simple: {
//     loadData,
//     keyName: 'id',
//     titleName: 'name',
//     minWord: 1
//   }
// });

export default {
  data() {
    return {
      value5: 34,
      show: '测试',
      value4: '测试',
      orgId: 1,
      value: '',
      value1: [],
      value2: null,
      value3: []
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    onChange1(data) {
      this.show = data.title;
    }
  }
};
</script>
