<template>
  <div>
    <p><Button @click="clear" color="primary">清空选中</Button></p>
    <Table ref="table" :datas="datas" selectRow @rowSelect="rowSelect">
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age" unit="年"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
      <TableItem title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: 自定义展示
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
        { id: 5, name: '测试5', dictData: null, age: 12, address: '上海' },
        { id: 6, name: '禁止选择', dictData: 2, age: 13, address: '禁止选择', _disabledSelect: true },
        { id: 7, name: '测试7', dictData: 3, age: 0, address: '上海' },
        { id: 5, name: '测试5', dictData: 4, age: undefined, address: '上海' },
        { id: 6, name: '测试6', dictData: 5, age: -1, address: '上海' },
        { id: 7, name: '测试7', dictData: 6, age: null, address: '上海' }
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
