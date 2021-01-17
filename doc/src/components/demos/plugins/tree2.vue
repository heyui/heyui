<template>
<div>
  <p>值：{{value}}</p>
  <p>
    <Button @click="updateChoose" size="xs">设置checkbox选中值</Button>
    <Button @click="getChoose" size="xs">获得checkbox选中值</Button>
    <Button @click="getFullChoose" size="xs">获得所有checkbox选中值</Button>
    <Button @click="chooseAll" size="xs">选中所有值</Button>
  </p>
  <Tree :option="param" ref="demo" v-model="value" :multiple="true" choose-mode="all" @choose="choose"></Tree>
</div>
</template>
<script>

export default {
  data() {
    let list = [
      { id: 1,
        title: '一级',
        children: [
          { id: 10, title: '一级-0' },
          { id: 11, title: '一级-1' },
          { id: 12, title: '一级-2' },
          { id: 13, title: '一级-3' },
          { id: 14, title: '一级-4' }
        ] },
      { id: 2,
        title: '二级',
        children: [
          { id: 20,
            title: '二级-0',
            children: [
              { id: 201, title: '二级-0-1' },
              { id: 202, title: '二级-0-2' },
              { id: 203, title: '二级-0-3' }
            ] },
          { id: 21, title: '二级-1' },
          { id: 22, title: '二级-2' },
          { id: 23, title: '二级-3' },
          { id: 24, title: '二级-4' }
        ] },
      { id: 3,
        title: '三级',
        checkable: false,
        children: [
          { id: 30, title: '三级-0' },
          { id: 31, title: '三级-1' },
          { id: 32, title: '三级-2' },
          { id: 33, title: '三级-3' },
          { id: 34, title: '三级-4' }
        ] }
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
      // 两种方法都可以
      // this.$refs.demo.updateChoose([1, 23, 31]);
      this.value = [11, 23, 201, 202, 203];
    },
    getChoose() {
      let options = this.$refs.demo.getChoose();
      if (options.length == 0) {
        this.$Message.info(`当前未选中`);
      } else {
        this.$Message.info(`当前选中: ${options.length}个`);
      }
    },
    getFullChoose() {
      let options = this.$refs.demo.getFullChoose();
      log(options);
      this.$Message.info(`当前选中: ${options.length}个`);
    }
  }
};
</script>
