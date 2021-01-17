<template>
  <div>
    <p>{{value}}</p>
    <p v-width="300">
      <Cascader :option="param" type="key" v-model="value"></Cascader>
    </p>
  </div>
</template>
<script>

const list = [
  { id: 1, title: '一级', treeIcon: 'h-icon-user' },
  { id: 2, title: '二级', treeIcon: 'h-icon-user' },
  { id: 3, title: '三级', disabled: true, treeIcon: 'h-icon-user' },
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

export default {
  data() {
    return {
      value: 29,
      param: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'list',
        datas: []
      }
    };
  },
  mounted() {
    this.param.datas = list;
  }
};
</script>
