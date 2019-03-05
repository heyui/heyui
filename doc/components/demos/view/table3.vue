<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue"
              @click="add(datas)"><i class="h-icon-plus"></i><span>添加一行</span></button>
    </p>
    <Table :datas="datas" :height="400">
      <TableItem title="姓名" prop="name" :width="150"></TableItem>
      <TableItem title="年龄" prop="age" :width="150"></TableItem>
      <TableItem title="地址" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="姓名" prop="name" :width="150"></TableItem>
      <TableItem title="年龄" prop="age" :width="150"></TableItem>
      <TableItem title="地址" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="姓名" prop="name" :width="150"></TableItem>
      <TableItem title="年龄" prop="age" :width="150"></TableItem>
      <TableItem title="地址" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="操作" :width="100" fixed="right"><template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-red" @click="remove(datas, data)"><i class="h-icon-trash"></i></button></template></TableItem>
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: [
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' },
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 12, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' }
      ]
    };
  },
  methods: {
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({ id: 7, name: '添加', age: 12, address: '然后添加的' });
    }
  }
};
</script>
