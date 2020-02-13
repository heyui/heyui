<template>
  <div v-width="300">
    <ListView ref="list" v-model="value" :datas="params">
      <div slot="title" slot-scope="{data}">
        自定义：{{data.name}}
      </div>
    </ListView>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        value: { id: '1', name: '项目1' },
        params: [
          { id: '1', name: '项目1' },
          { id: '2', name: '项目2' },
          { id: '3', name: '项目3' },
          { id: '4', name: '项目4' },
        ]
      };
    }
  };
</script>
