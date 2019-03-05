<template>
  <div>
    <p>
      <Button @click="add(datas)" icon="h-icon-plus">Add a line</Button>
    </p>
    <Table :datas="datas" stripe checkbox>
      <TableItem title="Serial number"><template slot-scope="{index}">{{index}}</template></TableItem>
      <TableItem title="Name" prop="name"></TableItem>
      <TableItem title="age" prop="age"></TableItem>
      <TableItem title="address" prop="address"></TableItem>
      <TableItem title="operating">
        <template slot-scope="{data}">
          <span class="text-hover" @click="open(data)">{{data._expand?'Collapse':'Expand'}}</span>
          <span class="text-hover" @click="remove(data)">delete</span>
        </template>
      </TableItem>
      <template slot="expand" slot-scope="{index, data}">
        <Form readonly mode="twocolumn">
          <FormItem label="Serial number">{{index}}</FormItem>
          <FormItem label="Name">{{data.name}}</FormItem>
          <FormItem label="age">{{data.age}}</FormItem>
          <FormItem label="address">{{data.address}}</FormItem>
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
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai', _expand: false },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai', _expand: true },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai', _expand: false },
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai', _expand: false },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai', _expand: true },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai', _expand: false }
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
      datas.push({ id: 7, name: 'Add to', age: 12, address: 'Then added' });
    },
    onselect(data) {
      log(data);
    }
  }
};
</script>
