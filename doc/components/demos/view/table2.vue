<template>
  <div>
    <p> <Button color="blue" icon="h-icon-plus" @click="add(datas)">添加一行</Button></p>
    <Table :datas="datas" stripe checkbox>
      <TableItem title="Index" :tooltip="true"><template slot-scope="props">{{props.index}}</template></TableItem>
      <TableItem title="Name" prop="name" sort="auto"></TableItem>
      <TableItem title="Age" prop="age"></TableItem>
      <TableItem title="Address" align="center" prop="address"></TableItem>
      <TableItem title="Operate" :width="100">
        <template slot-scope="props">
          <DropdownMenu :datas="menus" placement="bottom-end" className="h-text-dropdown">操作</DropdownMenu>
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
      menus: {
        demo1: '测试1',
        demo2: '测试3',
        demo3: '测试4',
        demo4: '测试5',
      },
      datas: [
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 12, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ]
    }
  },
  methods: {
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({ id: 7, name: '添加', age: 12, address: "然后添加的" });
    },
    onselect(data) {
      log(data);
    }
  }
}
</script>
