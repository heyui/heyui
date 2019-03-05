<template>
  <div>
    <p>
      <Button @click="refresh" size="xs">Refresh</Button>
    </p>
    <Tree :option="param" ref="demo" @loadDataSuccess="loadDataSuccess"></Tree>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param: {
        keyName: 'id',
        parentName: 'parent',
        titleName: 'title',
        dataMode: 'list',
        getTotalDatas: resolve => {
          setTimeout(() => {
            // The dataMode in param is also valid for the data here.
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
            resolve(list);
          }, 1000);
        }
      }
    };
  },
  methods: {
    loadDataSuccess() {
      this.$Message.success('Data loading succeeded');
    },
    refresh() {
      this.$refs.demo.refresh();
    }
  }
};
</script>
