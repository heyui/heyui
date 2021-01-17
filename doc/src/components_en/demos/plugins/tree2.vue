<template>
  <div>
    <p>value：{{value}}</p>
    <p>
      <Button @click="updateChoose" size="xs">Set the checkbox selection value</Button>
      <Button @click="getChoose" size="xs">Get checkbox selected value</Button>
      <Button @click="getFullChoose" size="xs">Get all checkbox selections</Button>
      <Button @click="chooseAll" size="xs">Check all values</Button>
    </p>
    <Tree :option="param" ref="demo" v-model="value" :multiple="true" choose-mode="all" @choose="choose"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    let list = [
      {
        id: 1,
        title: 'First level',
        children: [
          { id: 10, title: 'First level-0' },
          { id: 11, title: 'First level-1' },
          { id: 12, title: 'First level-2' },
          { id: 13, title: 'First level-3' },
          { id: 14, title: 'First level-4' }
        ]
      },
      {
        id: 2,
        title: 'Secondary',
        children: [
          {
            id: 20,
            title: 'Secondary-0',
            children: [
              { id: 201, title: 'Secondary-0-1' },
              { id: 202, title: 'Secondary-0-2' },
              { id: 203, title: 'Secondary-0-3' }
            ]
          },
          { id: 21, title: 'Secondary-1' },
          { id: 22, title: 'Secondary-2' },
          { id: 23, title: 'Secondary-3' },
          { id: 24, title: 'Secondary-4' }
        ]
      },
      {
        id: 3,
        title: 'Third level',
        checkable: false,
        children: [
          { id: 30, title: 'Third level-0' },
          { id: 31, title: 'Third level-1' },
          { id: 32, title: 'Third level-2' },
          { id: 33, title: 'Third level-3' },
          { id: 34, title: 'Third level-4' }
        ]
      }
    ];
    return {
      value: [202],
      param: {
        keyName: 'id',
        titleName: 'title',
        dataMode: 'tree',
        datas: list
      }
    };
  },
  methods: {
    choose(data) {
      log(data);
    },
    chooseAll() {
      this.$refs.demo.chooseAll();
    },
    updateChoose() {
      // Both methods can be
      // this.$refs.demo.updateChoose([1, 23, 31]);
      this.value = [11, 23, 201, 202, 203];
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
