<template>
  <div>
    <p>value: {{value}}</p>
    <p>修改展示：<Button @click="update">更新值</Button></p>
    <p><h-switch v-model="disabled" small>Disabled</h-switch> <h-switch v-model="useConfirm" small>使用确定按钮</h-switch></p>
    <p v-width="300">
       <TreePicker :option="param" :useConfirm="useConfirm" :disabled="disabled" ref="treepicker" v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: '一级' },
      { id: 2, title: '二级' },
      { id: 3, title: '三级', disabled: true },
      { id: 10, title: '一级-0', parent: 1 },
      { id: 11, title: '一级-1', parent: 1 },
      { id: 12, title: '一级-2', parent: 1 },
      { id: 13, title: '一级-3', parent: 1 },
      { id: 14, title: '一级-4', parent: 1 },
      { id: 20, title: '二级-0', parent: 2 },
      { id: 21, title: '二级-1', parent: 2 },
      { id: 22, title: '二级-2', parent: 2 },
      { id: 23, title: '二级-3', parent: 2 },
      { id: 24, title: '二级-4', parent: 2 },
      { id: 30, title: '三级-0', parent: 3 },
      { id: 31, title: '三级-1', parent: 3 },
      { id: 32, title: '三级-2', parent: 3 },
      { id: 33, title: '三级-3', parent: 3 },
      { id: 34, title: '三级-4', parent: 3 }
    ];
    return {
      value: null,
      disabled: false,
      useConfirm: false,
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list
      }
    };
  },
  methods: {
    change() {
      // 选择器关闭的时候触发
    },
    choose(data) {
      log(data);
    },
    update() {
      // 1.17.0+ 支持该方式更新，其他版本请使用 updateShow
      this.value = 12;

      // 如果数据异步分布请求
      // this.$refs.treepicker.updateShow({ id: 1, title: '1级' });
    },
    select(data) {
      log(data);
    }
  }
};
</script>
