<template>
  <div>
    <p><SwitchList v-model="mode" small :datas="{'checkbox': '多选', 'rowSelect': '单选'}"></SwitchList></p>
    <p v-if="mode=='rowSelect'">
      <h-switch v-model="useRadio" small>使用Radio / Use radio</h-switch>
      <Button size="s" @click="setRowSelect">选中第一行 / Select the first line</Button>
      <Button size="s" @click="reset">清空选择 / Clear</Button>
    </p>
    <p v-else>
      <Button size="s" @click="invereSelection">反向选择 / Inverse selection</Button>
      <Button size="s" @click="setOddSelection">选择奇数列 / Select odd columns</Button>
      <Button size="s" @click="reset">清空选择 / Clear</Button>
    </p>
    <Table :datas="datas" ref="table" :height="400" @select="onselect" :checkbox="mode=='checkbox'" :selectRow="mode=='rowSelect'" :radio="mode=='rowSelect' && useRadio" selectWhenClickTr>
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
      datas: [],
      useRadio: false,
      mode: 'checkbox'
    };
  },
  mounted() {
    setTimeout(() => {
      this.datas = [
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 12, address: 'Shanghai', _disabledSelect: true },
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
    setRowSelect() {
      this.$refs.table.setRowSelect(this.datas[0]);
    },
    reset() {
      this.$refs.table.clearRowSelect();
      this.$refs.table.setSelection([]);
    },
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
    }
  }
};
</script>
