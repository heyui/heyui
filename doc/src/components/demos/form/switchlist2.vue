<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><SwitchList v-model="value1" :datas="param1" :disabled="true"></SwitchList></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: '选择1',
      param1: ['选择1', '选择2', '选择3']
    };
  }
};
</script>
