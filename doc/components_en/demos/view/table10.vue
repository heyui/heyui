<template>
  <div>
    <p><Button @click="clear" color="primary">Clear selected</Button></p>
    <Table ref="table" :datas="datas" selectRow @rowSelect="rowSelect">
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age" unit="year"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
      <TableItem title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: Custom display
        </template>
      </TableItem>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 5, name: 'Test 5', dictData: null, age: 12, address: 'Shanghai' },
        { id: 6, name: 'Prohibit selection', dictData: 2, age: 13, address: 'Prohibit selection', _disabledSelect: true },
        { id: 7, name: 'Test 7', dictData: 3, age: 0, address: 'Shanghai' },
        { id: 5, name: 'Test 5', dictData: 4, age: undefined, address: 'Shanghai' },
        { id: 6, name: 'Test 6', dictData: 5, age: -1, address: 'Shanghai' },
        { id: 7, name: 'Test 7', dictData: 6, age: null, address: 'Shanghai' }
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
