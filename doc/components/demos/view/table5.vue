<template>
  <div>
    <p>
      <Button @click="updateSort">Age descending/降序</Button>
    </p>
    <Table ref="table" :datas="datas" :columns="columns" @sort="triggerSort">
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'Serial', prop: '$serial', width: 100 },
        { title: 'ID', prop: 'id', width: 100, sort: true },
        { title: 'Name', prop: 'name', sort: true },
        {
          title: 'Age',
          render: item => `age：${item.age}`,
          sortProp: 'age',
          sort: true
        },
        { title: 'Address', prop: 'address' }
      ],
      datas: [
        { id: 5, name: 'Test 5', age: 9, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 8, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 14, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 17, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 18, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    updateSort() {
      this.$refs.table.triggerSort({ prop: 'age', type: 'desc' }, true);
    },
    triggerSort(data) {
      this.datas.sort((a, b) => {
        let ad = a[data.prop];

        let bd = b[data.prop];
        let index = ad == bd ? 0 : ad > bd ? 1 : -1;
        return data.type == 'asc' ? index : -index;
      });
    }
  }
};
</script>
