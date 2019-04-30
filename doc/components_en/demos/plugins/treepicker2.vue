<template>
  <div>
    <p>value: {{value}}, </p>
    <p>
      <h-switch v-model="showCount" small>Show as a statistical method (tree may have too many choices)</h-switch>
    </p>
    <p>Modify the display:<Button @click="update">Update value</Button></p>
    <p v-width="300">
      <TreePicker ref="treepicker" :option="param" multiple :showCount="showCount" filterable v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
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
      value: null,
      showCount: false,
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
      // Triggered when the selector is closed
    },
    update() {
      // 1.17.0+ support this way of definition, use updateShow in other versions
      this.value = 12;
      // or
      // this.$refs.treepicker.updateShow([{ id: 1, title: '1级' }]);
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
