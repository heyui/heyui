<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue" @click="add(datas)"><i class="h-icon-plus"></i><span>Add a line</span></button>
    </p>
    <Table :datas="datas" :height="400">
      <TableItem title="name" prop="name" :width="150"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="name" prop="name" :width="150"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="Name" prop="name" :width="150"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="operating" :width="100" fixed="right"><template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-red" @click="remove(datas, data)"><i class="h-icon-trash"></i></button></template></TableItem>
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
        { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({ id: 7, name: 'Add to', age: 12, address: 'Then added' });
    }
  }
};
</script>
