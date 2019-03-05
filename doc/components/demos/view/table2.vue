<template>
  <div>
    <p><Button color="primary" @click="show = !show">切换一列</Button> <Button color="blue" icon="h-icon-plus" @click="add(datas)">添加一行</Button></p>
    <Table :datas="datas" stripe checkbox>
      <TableItem title="Index" :tooltip="true"><template slot-scope="{index}">{{index}}</template></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age"></TableItem>
      <TableItem title="Address" align="center" prop="address"></TableItem>
      <TableItem v-if="show"  title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: 自定义展示
        </template>
      </TableItem>
      <TableItem v-if="show" title="Operate2">
        <template slot-scope="{data}">
          {{data.name}}: 自定义展示2
        </template>
      </TableItem>
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false,
      datas: [
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 13, address: '上海' },
        { id: 7, name: '测试7', age: 14, address: '上海' },
        { id: 5, name: '测试5', age: 15, address: '上海' },
        { id: 6, name: '测试6', age: 16, address: '上海' },
        { id: 7, name: '测试7', age: 17, address: '上海' }
      ]
    };
  },
  methods: {
    add(datas) {
      datas.push({ id: 7, name: '添加', age: 12, address: '然后添加的' });
    }
  }
};
</script>
