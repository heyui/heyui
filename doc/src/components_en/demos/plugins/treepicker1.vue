<template>
  <div>
    <p>value: {{value}}</p>
    <p>
      <Button @click="expandAll" size="xs">Expand all</Button>
      <Button @click="expand([2, 3])" size="xs">Expand some</Button>
      <Button @click="foldAll" size="xs">Collapse all</Button>
    </p>
    <p>Modify the display:<Button @click="update">Update value</Button></p>
    <p><h-switch v-model="disabled" small>Disabled</h-switch> <h-switch v-model="useConfirm" small>Use Confirm</h-switch></p>
    <p v-width="300">
      <TreePicker :option="param" :useConfirm="useConfirm" :disabled="disabled" ref="treepicker" v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: 'First level' },
      { id: 2, title: 'Secondary' },
      { id: 3, title: 'Third level', disabled: true },
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
      useConfirm: false,
      value: null,
      disabled: false,
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
    expand(ids) {
      this.$refs.treepicker.expand(ids);
    },
    expandAll() {
      this.$refs.treepicker.expandAll();
    },
    foldAll() {
      this.$refs.treepicker.foldAll();
    },
    change() {
      // Triggered when the selector is closed
    },
    choose(data) {
      log(data);
    },
    update() {
      // 1.17.0+ support this way of definition, use updateShow in other versions
      this.value = 12;
      // or
      // this.$refs.treepicker.updateShow({ id: 1, title: '1级' });
    },
    select(data) {
      log(data);
    }
  }
};
</script>
