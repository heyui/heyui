<template>
  <div>
    <p><Button @click="expandAll">全部展开 expandAll</Button><Button @click="foldAll">全部折叠 foldAll</Button></p>
    <Table ref="table" :datas="datas" checkbox>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" treeOpener></TableItem>
      <TableItem title="Age" prop="age" unit="Year"></TableItem>
      <TableItem title="Address2" prop="address"></TableItem>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 1,
          name: 'Shanghai',
          age: 12,
          address: 'Shanghai',
          children: [
            { id: 15,
              name: 'Pudong',
              age: undefined,
              address: 'Shanghai',
              children: [
                { id: 145, name: 'Pudong1', age: undefined, address: 'Shanghai' },
                { id: 146, name: 'Huangpu1', age: 12, address: 'Shanghai' },
                { id: 147, name: 'Jiading1', age: null, address: 'Shanghai' }
              ] },
            { id: 16, name: 'Huangpu', age: 11, address: 'Shanghai' },
            { id: 17, name: 'Jiading', age: null, address: 'Shanghai' }
          ]
        },
        { id: 2,
          name: 'Hangzhou',
          age: 12,
          address: 'Shanghai',
          children: [
            { id: 25, name: 'Xihu', age: undefined, address: 'Shanghai' },
            { id: 26, name: 'Yuhang', age: 12, address: 'Shanghai' },
            { id: 27, name: 'Huanglong', age: null, address: 'Shanghai' }
          ]
        },
        { id: 3,
          name: 'Hefei',
          age: 12,
          address: 'Shanghai',
          children: [
            { id: 35, name: 'Gaoxingqu', age: undefined, address: 'Shanghai' },
            { id: 36, name: 'Xinghua', age: 22, address: 'Shanghai' },
            { id: 37, name: 'Ceshi', age: null, address: 'Shanghai' }
          ]
        }
      ]
    };
  },
  mounted() {
  },
  methods: {
    expandAll() {
      this.$refs.table.expandAll();
    },
    foldAll(data) {
      this.$refs.table.foldAll();
    }
  }
};
</script>
