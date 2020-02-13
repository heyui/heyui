<template>
  <div v-width="300">
    <p>
      <h-switch v-model="hoverAction">
        <span slot="open">开启hover</span>
        <span slot="close">关闭hover</span>
      </h-switch>
    </p>
    <ListView v-model="value" :datas="params" :hover-action="hoverAction">
      <div slot="actions" slot-scope="{data}">
        <span @click="show(data)">编辑</span>
        |
        <span @click="show(data)">删除</span>
      </div>
    </ListView>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        hoverAction: true,
        value: { id: '1', name: '项目1' },
        params: [
          { id: '1', name: '项目1' },
          { id: '2', name: '项目2' },
          { id: '3', name: '项目3' },
          { id: '4', name: '项目4' },
        ]
      };
    },
    methods: {
      show(data) {
        this.$Message(data.name);
      }
    },
  };
</script>
