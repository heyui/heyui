<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><SwitchList v-model="value1" :datas="param1" :small="true"></SwitchList></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value1: 'select 1',
      param1: ['select 1', 'select 2', 'select 3']
    };
  }
};
</script>
