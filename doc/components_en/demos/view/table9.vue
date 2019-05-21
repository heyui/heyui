<template>
  <div>
    <Table :datas="datas" stripe>
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age" unit="year"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
      <TableItem title="Render" :render="messageRender" prop="address"></TableItem>
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
        { id: 6, name: 'Test 6', dictData: 2, age: 13, address: 'Shanghai' },
        { id: 7, name: 'Test 7', dictData: 3, age: 0, address: 'Shanghai' },
        { id: 5, name: 'Test 5', dictData: 4, age: undefined, address: 'Shanghai' },
        { id: 6, name: 'Test 6', dictData: 5, age: -1, address: 'Shanghai' },
        { id: 7, name: 'Test 7', dictData: 6, age: null, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    messageRender(data) {
      return `${data.name}:${data.address}`;
    }
  }
};
</script>
