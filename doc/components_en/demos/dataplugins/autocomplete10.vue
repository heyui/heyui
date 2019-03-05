<template>
  <div>
    <p>value:{{value}}</p>
    <p>External parameters: <input type="text" v-model="input"/></p>
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
      title: `${input}-result${filter}${i}`
    });
  }
  callback(list);
};

export default {
  data() {
    return {
      input: 'parameter',
      value: '',
      loadData
    };
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
    update() {
      this.value = [{ key: 123, title: 'modify' }];
    }
  }
};
</script>
