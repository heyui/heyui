<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><Radio v-model="value1" :datas="param1"></Radio></div>
    <p v-color:gray>{{value2}}</p>
    <div><Radio v-model="value2" :datas="param2"></Radio></div>
    <p v-color:gray>{{value3}}</p>
    <div><Radio v-model="value3" :datas="param3"></Radio></div>
    <div>禁用</div>
    <div><Radio v-model="value3" :datas="param3" :disabled="true"></Radio></div>

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
      value1: '选择1',
      value2: '1',
      value3: 'a1',
      value4: 'a1',
      param1: ['选择1', '选择2', '选择3'],
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' },
      param3: [{ title: '选择1', key: 'a1', other: '其他值' }, { title: '选择2', key: 'a2' }, { title: '选择3', key: 'a3' }],
      param4: [{ name: '选择0', code: 0 }, { name: '选择1', code: 'a1', other: '其他值' }, { name: '选择2', code: 'a2' }, { name: '选择3', code: 'a3' }]
    }
  }
};
</script>
