<style lang="less">
// 将placeholder文字变成红色
.tree-picker-demo-show{
  .h-treepicker-placeholder{
    color: @red-color;
  }
}
// 将tree选中的背景色变成红色
.tree-picker-demo-dropdown{
  .h-tree-show-desc.selected {
    background-color: @red-color;
  }
}
</style>

<template>
  <div>
    <p>自定义<code>className</code>参数可以自定义特殊的样式</p>
    <p v-width="300">
       <TreePicker className="tree-picker-demo" :option="param" ref="treepicker" v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
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
    select(data) {
      log(data);
    }
  }
};
</script>
