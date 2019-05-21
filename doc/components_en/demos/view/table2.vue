<template>
  <div>
    <p> <Button color="blue" icon="h-icon-plus" @click="add(datas)">Add a line</Button></p>
    <Table :datas="datas" stripe checkbox>
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age"></TableItem>
      <TableItem title="Address" align="center" prop="address"></TableItem>
      <TableItem title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: Custom display
        </template>
      </TableItem>
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 13, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 14, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 15, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 16, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 17, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    add(datas) {
      datas.push({ id: 7, name: 'Add to', age: 12, address: 'Then added' });
    }
  }
};
</script>
