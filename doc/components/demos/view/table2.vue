<template>
  <div>
    <p>
      <h-switch v-model="border" small>显示边框</h-switch>
      <h-switch v-model="stripe" small>栅格背景</h-switch>
    </p>
    <p>
      <Button color="blue" icon="h-icon-plus" @click="add(datas)">添加一行</Button>
      <Button color="primary" @click="show = !show">切换一列</Button>
      <Button color="primary" @click="datas=[]">清空数据</Button>
    </p>
    <Table :datas="datas" :border="border" checkbox :stripe="stripe">
      <TableItem title="Index" prop="$index"></TableItem>
      <TableItem title="Serial" prop="$serial"></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age"></TableItem>
      <TableItem title="Address" align="right" prop="address"></TableItem>
      <TableItem v-if="show"  title="Operate">
        <template slot-scope="{data}">
          {{data.name}}: 自定义展示
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
      border: false,
      stripe: false,
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
