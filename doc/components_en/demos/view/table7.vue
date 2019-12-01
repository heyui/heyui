<style lang="less">
.table-tr-tooltip {
  font-size: 13px;
  margin: 0 -2px 1px -2px;
}
</style>

<template>
  <div>
    <Table border stripe :datas="datas" :columns="columns" :getTrClass="getTrClass">
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {

      columns: [
        {
          title: 'Index',
          prop: '$index',
          width: 100,
          tooltip: true,
          placement: 'top-start',
          content: '<div class="table-tr-tooltip">Serial <hr> Description: Serial number of the data</div>'
        },
        {
          title: 'ID',
          prop: 'id',
          width: 100,
          // 1.19.2 +
          tooltip: { placement: 'top-start', content: '<div class="table-tr-tooltip">ID<hr>Description: The unique ID of the data</div>' }
        },
        { title: 'Name', prop: 'name', tooltip: { placement: 'top-start', content: '<div class="table-tr-tooltip">Name <hr> Description: User\'s name</div>' } },
        {
          title: 'Age',
          prop: 'age',
          align: 'right',
          width: 100,
          className: 'red-color',
          tooltip: { placement: 'top-start', content: '<div class="table-tr-tooltip">Age <hr> Description: User\'s age</div>' }
        },
        {
          title: 'Address',
          prop: 'address',
          tooltip: { placement: 'top-start', content: '<div class="table-tr-tooltip">Address <hr> Description: User\'s address</div>' }
        }
      ],
      datas: [
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 13, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 13, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    getTrClass(data, index) {
      if (index == 2) {
        return 'bg-gray1-color';
      }
    }
  }
};
</script>
