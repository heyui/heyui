<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><Radio v-model="value1" :datas="param1"></Radio></div>
    <p v-color:gray>{{value2}}</p>
    <div><Radio v-model="value2" :datas="param2"></Radio></div>
    <div>禁用</div>
    <div><Radio v-model="value3" :datas="param2" :disabled="true"></Radio></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: '选择1',
      value2: '1',
      value3: '1',
      param1: ['选择1', '选择2', '选择3'],
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' }
    }
  }
};
</script>
