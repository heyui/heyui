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
      value1: 'select 1',
      value2: '1',
      value3: '1',
      param1: ['select 1', 'select 2', 'select 3'],
      param2: { 1: 'select 1', 2: 'select 2', 3: 'select 3' },
      param3: [
        {
          key: '1',
          title: 'select 1',
          icon: 'h-icon-home'
        },
        {
          key: '2',
          title: 'select 2',
          icon: 'h-icon-task'
        },
        {
          key: '3',
          title: 'select 3',
          icon: 'h-icon-users'
        }
      ]
    };
  }
};
</script>
