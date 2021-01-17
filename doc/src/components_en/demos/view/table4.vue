<template>
  <div>
    <p>
      <button class="h-btn h-btn-s h-btn-blue" @click="add(datas)"><i class="h-icon-plus"></i><span>Add a line</span></button>
      <button class="h-btn h-btn-s h-btn-yellow" @click="invereSelection"><span>Inverse selection</span></button>
      <button class="h-btn h-btn-s h-btn-yellow" @click="setOddSelection"><span>Select odd columns</span></button>
    </p>
    <Table :datas="datas" ref="table" :height="400" @select="onselect" checkbox @trclick="trClick" @trdblclick="trdblclick" selectWhenClickTr>
      <TableItem title="ID" prop="id" align="center" :width="80" fixed="left"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="name" prop="name" :width="150"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="name" prop="name" :width="150"></TableItem>
      <TableItem title="age" prop="age" :width="150"></TableItem>
      <TableItem title="address" prop="address" align="center" :width="150"></TableItem>
      <TableItem title="operating" align="center" :width="80" fixed="right"><template slot-scope="{data}"><button class="h-btn h-btn-s h-btn-red" @click="remove(datas, data)"><i class="h-icon-trash"></i></button></template></TableItem>
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      datas: []
    };
  },
  mounted() {
    setTimeout(() => {
      this.datas = [
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' }
      ];
    }, 100);
  },
  methods: {
    setOddSelection() {
      this.$refs.table.setSelection(
        this.datas.filter((item, index) => (index + 1) % 2 == 1)
      );
    },
    remove(datas, data) {
      datas.splice(datas.indexOf(data), 1);
    },
    add(datas) {
      datas.push({ id: 7, name: 'Add to', age: 12, address: 'Then added' });
    },
    invereSelection() {
      this.$refs.table.invereSelection();
    },
    onselect(data, event) {
      log('onselect', data, event);
    },
    trClick(data, event) {
      log('trClick', data, event);
    },
    trdblclick(data, event) {
      log('trdblclick', data, event);
    }
  }
};
</script>
