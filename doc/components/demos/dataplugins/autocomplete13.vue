<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete config="simple" v-model="value" @change="onChange"></AutoComplete>
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
      value: ''
    }
  },
  methods: {
    onChange(data) {
      log(data);
    }
  }
};
</script>
