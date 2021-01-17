<template>
  <div>
    <p>
      <Button @click="add(datas)" icon="h-icon-plus">添加一行</Button>
    </p>
    <Table :datas="datas" stripe checkbox>
      <TableItem title="序号"><template slot-scope="{index}">{{index}}</template></TableItem>
      <TableItem title="姓名" prop="name"></TableItem>
      <TableItem title="年龄" prop="age"></TableItem>
      <TableItem title="地址" prop="address"></TableItem>
      <TableItem title="操作">
        <template slot-scope="{data}">
          <span class="text-hover" @click="open(data)">{{data._expand?'收起':'展开'}}</span>
          <span class="text-hover" @click="remove(data)">删除</span>
        </template>
      </TableItem>
      <template slot="expand" slot-scope="{index, data}">
        <Form readonly mode="twocolumn">
          <FormItem label="序号">{{index}}</FormItem>
          <FormItem label="姓名">{{data.name}}</FormItem>
          <FormItem label="年龄">{{data.age}}</FormItem>
          <FormItem label="地址">{{data.address}}</FormItem>
        </Form>
        <Loading :loading="data.loading"></Loading>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 5, name: '测试5', age: 12, address: '上海', _expand: false },
        { id: 6, name: '测试6', age: 12, address: '上海', _expand: true },
        { id: 7, name: '测试7', age: 12, address: '上海', _expand: false },
        { id: 5, name: '测试5', age: 12, address: '上海', _expand: false },
        { id: 6, name: '测试6', age: 12, address: '上海', _expand: true },
        { id: 7, name: '测试7', age: 12, address: '上海', _expand: false }
      ]
    };
  },
  methods: {
    remove(data) {
      this.datas.splice(this.datas.indexOf(data), 1);
    },
    open(data) {
      this.$set(data, '_expand', !data._expand);
    },
    add(datas) {
      datas.push({ id: 7, name: '添加', age: 12, address: '然后添加的' });
    },
    onselect(data) {
      log(data);
    }
  }
};
</script>
