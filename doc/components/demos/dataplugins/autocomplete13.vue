<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete config="simple" v-model="value" @change="onChange"></AutoComplete>
    <p>value1:{{value1}}</p>
    <AutoComplete config="simple" v-model="value1" @change="onChange" multiple></AutoComplete>
    <p>value2:{{value2}}</p>
    <AutoComplete config="simple" v-model="value2" @change="onChange" type="object"></AutoComplete>
    <p>value3:{{value3}}</p>
    <AutoComplete config="simple" v-model="value3" @change="onChange" type="object" multiple></AutoComplete>
    <p>还有<code>mustMatch</code>等模式，具体请查看autocomplete文档。</p>
  </div>
</template>
<script>

//系统可以全局配置模糊查询的参数，调用的时候只需要使用config参数
// const loadData = function (filter, callback) {
//   jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
//     .then(response => response.json())
//     .then((d) => {
//       const result = d.result;
//       const data = [];
//       result.forEach((r) => {
//         data.push({
//           name: r[0],
//           id: r[1],
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
      value: '',
      value1: [],
      value2: null,
      value3: []
    }
  },
  methods: {
    onChange(data) {
      log(data);
    }
  }
};
</script>
