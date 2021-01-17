<template>
  <div>
    <Table :datas="datas" :columns="columns">
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'Index', prop: '$index', width: 100 },
        { title: 'Serial', prop: '$serial', width: 100 },
        { title: 'ID', prop: 'id', width: 100, sort: 'auto' },
        { title: 'Name', prop: 'name', sort: 'auto' },
        { title: 'Age', prop: 'age', sort: 'auto' },
        { title: 'Address', prop: 'address' }
      ],
      datas: [
        { id: 5, name: 'test 5', age: 9, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 8, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 14, address: 'Shanghai' },
        { id: 5, name: 'test 5', age: 17, address: 'Shanghai' },
        { id: 6, name: 'test 6', age: 18, address: 'Shanghai' },
        { id: 7, name: 'test 7', age: 12, address: 'Shanghai' }
      ]
    };
  }
};
</script>
