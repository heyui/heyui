<template>
  <div>
    <p>值：{{value}}</p>
    <p><h-switch v-model="toggleOnSelect" small>点击内容折叠内容</h-switch></p>
    <p>
      <Button @click="expandAll" size="xs">全部展开</Button>
      <Button @click="expand([2, 3])" size="xs">展开部分</Button>
      <Button @click="foldAll" size="xs">全部收起</Button>
      <Button @click="updateSelect" size="xs">设置选中值</Button>
      <Button @click="getSelect" size="xs">获得选中值</Button>
    </p>
    <Tree :option="param" ref="demo" :toggleOnSelect="toggleOnSelect" v-model="value" @open="open"  @select="select"  @choose="choose"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
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
    return {
      toggleOnSelect: true,
      value: null,
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        // datas: list
        datas() {
          // 可以使用方法
          return list;
        }
      }
    };
  },
  methods: {
    expand(ids) {
      this.$refs.demo.expand(ids);
    },
    expandAll() {
      this.$refs.demo.expandAll();
    },
    foldAll() {
      this.$refs.demo.foldAll();
    },
    updateSelect() {
      // 两种方法都可以
      // this.$refs.demo.updateSelect(2);
      this.value = 21;
      this.$Message.info('选中二级-1');
    },
    getSelect() {
      let option = this.$refs.demo.getSelect();
      if (option == null) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${option.title}`);
      }
    },
    choose(data) {
      log(data);
    },
    select(data) {
      log(data);
    },
    open(data) {
      log(data);
    }
  }
};
</script>
