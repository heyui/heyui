<template>
  <div>
    <Table ref="table" :datas="datas">
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto" treeOpener></TableItem>
      <TableItem title="Age" prop="age" unit="年"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
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
          dictData: null,
          age: 12,
          address: '上海',
          children: [
            { id: 15, name: 'Pudong', dictData: 4, age: undefined, address: '上海' },
            { id: 16, name: 'Huangpu', dictData: 5, age: -1, address: '上海' },
            { id: 17, name: 'Jiading', dictData: 6, age: null, address: '上海' }
          ]
        },
        { id: 2,
          name: 'Hangzhou',
          dictData: null,
          age: 12,
          address: '上海',
          children: [
            { id: 25, name: 'Xihu', dictData: 4, age: undefined, address: '上海' },
            { id: 26, name: 'Yuhang', dictData: 5, age: -1, address: '上海' },
            { id: 27, name: 'Huanglong', dictData: 6, age: null, address: '上海' }
          ]
        },
        { id: 3,
          name: 'Hefei',
          dictData: null,
          age: 12,
          address: '上海',
          children: [
            { id: 35, name: 'Gaoxingqu', dictData: 4, age: undefined, address: '上海' },
            { id: 36, name: 'Xinghua', dictData: 5, age: -1, address: '上海' },
            { id: 37, name: 'Ceshi', dictData: 6, age: null, address: '上海' }
          ]
        }
      ]
    };
  },
  mounted() {
    this.$refs.table.setRowSelect(this.datas[0]);
  },
  methods: {
    clear() {
      this.$refs.table.clearRowSelect();
    },
    rowSelect(data) {
      log(data);
    }
  }
};
</script>
