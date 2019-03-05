<template>
  <div>
    <p>value: 选中了{{value.length}}个</p>
    <p v-width="300">
       <TreePicker config="simple" multiple type='object' filterable v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [{ 'id': 1, 'title': '一级' }, { 'id': 2, 'title': '二级' }]
    };
  },
  methods: {
    change() {
      // 选择器关闭的时候触发
    },
    choose(data) {
      log(data);
    },
    select(data) {
      log(data);
    }
  }
};
</script>
