<template>
  <div>
    <p>值：{{value6}}</p>
    <p>
      <Checkbox v-model="value6" :value="param3[0]">自定义1</Checkbox>
      <Checkbox v-model="value6" :value="param3[1]">自定义2</Checkbox>
    </p>
    <p>值：{{value7}}</p>
    <p>
      <Checkbox v-model="value7" :value="1">自定义1</Checkbox>
      <Checkbox v-model="value7" :value="2">自定义2</Checkbox>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param3: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      value6: null,
      value7: null
    };
  }
};
</script>
