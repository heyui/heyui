<template>
  <div>
    <Table :datas="datas" stripe>
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age" unit="年"></TableItem>
      <TableItem title="Dict" prop="dictData" dict="simple"></TableItem>
      <TableItem title="Render" :render="messageRender" prop="address"></TableItem>
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
        { id: 6, name: '测试6', dictData: 2, age: 13, address: '上海' },
        { id: 7, name: '测试7', dictData: 3, age: 0, address: '上海' },
        { id: 5, name: '测试5', dictData: 4, age: undefined, address: '上海' },
        { id: 6, name: '测试6', dictData: 5, age: -1, address: '上海' },
        { id: 7, name: '测试7', dictData: 6, age: null, address: '上海' }
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
