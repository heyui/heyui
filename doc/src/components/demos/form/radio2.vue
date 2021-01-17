<template>
  <div>
    <div>1. {{value}}</div>
    <div><Radio :value='param[0]' v-model="value">选择1</Radio></div>
    <div><Radio :value='param[1]' v-model="value">选择2</Radio></div>
    <div><Radio :value='param[2]' v-model="value">选择3</Radio></div>
    <div>2. {{value2}}</div>
    <div><Radio :value='param[0].key' v-model="value2">选择1</Radio></div>
    <div><Radio :value='param[1].key' v-model="value2">选择2</Radio></div>
    <div><Radio :value='param[2].key' v-model="value2">选择3</Radio></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      value2: null,
      param: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }]
    };
  }
};
</script>
