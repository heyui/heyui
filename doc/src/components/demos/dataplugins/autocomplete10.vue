<template>
  <div>
    <p>value:{{value}}</p>
    <p>外部参数：<input type="text" v-model="input"/></p>
    <div v-width="300"><AutoComplete :option="{loadData, input: input}" v-model="value" type="object"
                  :must-match="false" @change="onChange"></AutoComplete></div>
  </div>
</template>
<script>

const loadData = function (filter, callback) {
  let input = this.input;
  let list = [];
  for (let i = 0; i < 10; i++) {
    list.push({
      key: `${i}`,
      title: `${input}-结果${filter}${i}`
    });
  }
  callback(list);
};

export default {
  data() {
    return {
      input: '参数',
      value: '',
      loadData
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update() {
      this.value = [{ key: 123, title: '修改' }];
    }
  }
};
</script>
