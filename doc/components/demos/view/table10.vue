<template>
  <div>
    <Table ref="table" :datas="datas">
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto" treeOpener></TableItem>
      <TableItem title="Age" prop="age" unit="年"></TableItem>
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
          address: '上海',
          children: [
            { id: 15,
              name: 'Pudong',
              age: undefined,
              address: '上海',
              children: [
                { id: 145, name: 'Pudong1', age: undefined, address: '上海' },
                { id: 146, name: 'Huangpu1', age: -1, address: '上海' },
                { id: 147, name: 'Jiading1', age: null, address: '上海' }
              ] },
            { id: 16, name: 'Huangpu', age: -1, address: '上海' },
            { id: 17, name: 'Jiading', age: null, address: '上海' }
          ]
        },
        { id: 2,
          name: 'Hangzhou',
          age: 12,
          address: '上海',
          children: [
            { id: 25, name: 'Xihu', age: undefined, address: '上海' },
            { id: 26, name: 'Yuhang', age: -1, address: '上海' },
            { id: 27, name: 'Huanglong', age: null, address: '上海' }
          ]
        },
        { id: 3,
          name: 'Hefei',
          age: 12,
          address: '上海',
          children: [
            { id: 35, name: 'Gaoxingqu', age: undefined, address: '上海' },
            { id: 36, name: 'Xinghua', age: -1, address: '上海' },
            { id: 37, name: 'Ceshi', age: null, address: '上海' }
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
