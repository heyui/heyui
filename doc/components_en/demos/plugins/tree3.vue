<template>
  <div>
    <p>{{value}}</p>
    <p>
      <Button @click="updateChoose" size="xs">Set the checkbox selection value</Button>
      <Button @click="getChoose" size="xs">Get checkbox selected value</Button>
      <Button @click="getFullChoose" size="xs">Get all checkbox selections</Button>
      <Button @click="chooseAll" size="xs">Check all values</Button>
    </p>
    <Tree :option="param" ref="demo" :multiple="true" v-model="value" choose-mode="some"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      { id: 1, title: 'First level' },
      { id: 2, title: 'Secondary' },
      { id: 3, title: 'Third level', disabled: true },
      { id: 10, title: 'First level-0', parent: '1' },
      { id: 11, title: 'First level-1', parent: '1' },
      { id: 12, title: 'First level-2', parent: '1' },
      { id: 13, title: 'First level-3', parent: '1' },
      { id: 14, title: 'First level-4', parent: '1' },
      { id: 20, title: 'Secondary-0', parent: '2' },
      { id: 21, title: 'Secondary-1', parent: '2' },
      { id: 22, title: 'Secondary-2', parent: '2' },
      { id: 23, title: 'Secondary-3', parent: '2' },
      { id: 24, title: 'Secondary-4', parent: '2' },
      { id: 30, title: 'Third level-0', parent: '3' },
      { id: 31, title: 'Third level-1', parent: '3' },
      { id: 32, title: 'Third level-2', parent: '3' },
      { id: 33, title: 'Third level-3', parent: '3' },
      { id: 34, title: 'Third level-4', parent: '3' }
    ];
    return {
      value: [],
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
    chooseAll() {
      this.$refs.demo.chooseAll();
    },
    updateChoose() {
      this.$refs.demo.updateChoose([1, 23, 31]);
    },
    getChoose() {
      let options = this.$refs.demo.getChoose();
      if (options.length == 0) {
        this.$Message.info(`Currently unchecked`);
      } else {
        this.$Message.info(`Currently selected: ${options.length}`);
      }
    },
    getFullChoose() {
      let options = this.$refs.demo.getFullChoose();
      log(options);
      this.$Message.info(`Currently selected: ${options.length}`);
    }
  }
};
</script>
