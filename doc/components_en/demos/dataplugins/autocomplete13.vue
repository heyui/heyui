<template>
  <div>
    <blockquote>Key mode, using the show attribute for display, for some tiled properties。</blockquote>
    <p>value: {{value5}}, show: {{show}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value5" :show="show" @change="onChange1" type="key" :must-match="false"></AutoComplete></div>

    <blockquote>The title mode, in conjunction with mustMatch=false, is suitable for some scenarios where a reminder is entered.</blockquote>
    <p>value:{{value4}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value4" @change="onChange" type="title" :must-match="false"></AutoComplete></div>

    <blockquote>The default Key mode, option can pass some business parameters.</blockquote>
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value" @change="onChange" :option="{orgId: orgId}"></AutoComplete></div>

    <blockquote>Key multi-select mode.</blockquote>
    <p>value1:{{value1}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value1" @change="onChange" multiple></AutoComplete></div>

    <blockquote>Object selection mode.</blockquote>
    <p>value2:{{value2}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value2" @change="onChange" type="object"></AutoComplete></div>

    <blockquote>Object multiple selection mode.</blockquote>
    <p>value3:{{value3}}</p>
    <div v-width="300"><AutoComplete config="simple" v-model="value3" @change="onChange" type="object" multiple></AutoComplete></div>
    <p>and also<code>mustMatch</code>And other modes, please see the autocomplete document for details。</p>
  </div>
</template>
<script>
// The system can globally configure the parameters of the fuzzy query. When calling, you only need to use the config parameter.
// const loadData = function (filter, callback) {
//   this.orgId //This is an option argument, which can be used to obtain the defined service parameters.
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
      show: 'test',
      value4: 'test',
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
