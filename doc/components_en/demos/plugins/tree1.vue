<template>
  <div>
    <p>value: {{value}}</p>
    <p>
      <h-switch v-model="toggleOnSelect" small>Click on the content to collapse the content</h-switch>
    </p>
    <p>
      <Button @click="expandAll" size="xs">Expand all</Button>
      <Button @click="foldAll" size="xs">Collapse all</Button>
      <Button @click="updateSelect" size="xs">Set the selected value</Button>
      <Button @click="getSelect" size="xs">Get the selected value</Button>
    </p>
    <Tree :option="param" ref="demo" :toggleOnSelect="toggleOnSelect" v-model="value" @open="open" @select="select" @choose="choose"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: 'First level', treeIcon: 'h-icon-user' },
      { id: 2, title: 'Secondary', treeIcon: 'h-icon-user' },
      { id: 3, title: 'Third level', disabled: true, treeIcon: 'h-icon-user' },
      { id: 10, title: 'First level-0', parent: 1 },
      { id: 11, title: 'First level-1', parent: 1 },
      { id: 12, title: 'First level-2', parent: 1 },
      { id: 13, title: 'First level-3', parent: 1 },
      { id: 14, title: 'First level-4', parent: 1 },
      { id: 20, title: 'Secondary-0', parent: 2 },
      { id: 21, title: 'Secondary-1', parent: 2 },
      { id: 22, title: 'Secondary-2', parent: 2 },
      { id: 23, title: 'Secondary-3', parent: 2 },
      { id: 24, title: 'Secondary-4', parent: 2 },
      { id: 30, title: 'Third level-0', parent: 3 },
      { id: 31, title: 'Third level-1', parent: 3 },
      { id: 32, title: 'Third level-2', parent: 3 },
      { id: 33, title: 'Third level-3', parent: 3 },
      { id: 34, title: 'Third level-4', parent: 3 }
    ];
    return {
      toggleOnSelect: true,
      value: null,
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        datas: list
        // datas() { Can use method
        //   return list;
        // }
      }
    };
  },
  methods: {
    expandAll() {
      this.$refs.demo.expandAll();
    },
    foldAll() {
      this.$refs.demo.foldAll();
    },
    updateSelect() {
      // Both methods can be
      // this.$refs.demo.updateSelect(2);
      this.value = 21;
      this.$Message.info('Selected level-1');
    },
    getSelect() {
      let option = this.$refs.demo.getSelect();
      if (option == null) {
        this.$Message.info(`Currently unchecked`);
      } else {
        this.$Message.info(`Currently selected: ${option.title}`);
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
