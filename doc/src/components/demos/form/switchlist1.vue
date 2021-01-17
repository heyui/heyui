<template>
  <div>
    <p v-color:gray>{{value1}}</p>
    <div><SwitchList v-model="value1" :datas="param1"></SwitchList></div>
    <p v-color:gray>{{value2}}</p>
    <div><SwitchList v-model="value2" :datas="param2"></SwitchList></div>
    <p v-color:gray>{{value3}}</p>
    <div><SwitchList v-model="value3" :datas="param3"></SwitchList></div>
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
      param2: { 1: '选择1', 2: '选择2', 3: '选择3' },
      param3: [{
        key: '1',
        title: '选择1',
        icon: 'h-icon-home'
      }, {
        key: '2',
        title: '选择2',
        icon: 'h-icon-task'
      }, {
        key: '3',
        title: '选择3',
        icon: 'h-icon-users'
      }]
    };
  }
};
</script>
