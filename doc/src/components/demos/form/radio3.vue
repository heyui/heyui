<template>
  <div>
    <p>自定义key, title字段名</p>
    <div>
      <Radio v-model="value4" :datas="param4" keyName="code" titleName="name"></Radio>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value4: 'a1',
      param4: [{ name: '选择0', code: 0 }, { name: '选择1', code: 'a1', other: '其他值' }, { name: '选择2', code: 'a2' }, { name: '选择3', code: 'a3' }]
    };
  }
};
</script>
