<template>
  <div>
    <div>{{value1}}</div>
    <div><Checkbox v-model="value1" :datas="param1" ></Checkbox></div>
    <div>禁用</div>
    <div><Checkbox v-model="value2" :datas="param2" :disabled="true"></Checkbox></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: [],
      value2: [1,2],
      param1: ['选择1', '选择2', '选择3'],
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' }
    }
  }
};
</script>
