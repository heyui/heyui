<template>
  <div>
    <Table border :datas="datas" :columns="columns" :ths="ths" :height="200">
      <div slot="empty">Custom reminder: no data at this time</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ths: [
        [
          { title: 'serial', rowspan: 2 },
          { title: 'coding', tooltip: true },
          { title: 'information', colspan: 2 },
          { title: 'address', rowspan: 2 }
        ],
        [
          { title: 'ID', prop: 'id', sort: 'auto' },
          { title: 'Name' },
          { title: 'age' }
        ]
      ],
      columns: [
        { prop: 'index', width: 100 },
        { prop: 'id', width: 100 },
        { prop: 'name', width: 100 },
        { prop: 'age', width: 100 },
        { prop: 'address', width: 150 }
      ],
      datas: [
        { index: 1, id: 'abc1', name: 'Test 1', age: 1, address: 'Shanghai 1', address2: 'Shanghai 21' },
        { index: 2, id: 'abc2', name: 'Test 2', age: 2, address: 'Shanghai 2', address2: 'Shanghai 22' },
        { index: 3, id: 'abc3', name: 'Test 3', age: 3, address: 'Shanghai 3', address2: 'Shanghai 23' },
        { index: 4, id: 'abc4', name: 'Test 4', age: 4, address: 'Shanghai 4', address2: 'Shanghai 24' },
        { index: 5, id: 'abc5', name: 'Test 5', age: 5, address: 'Shanghai 5', address2: 'Shanghai 25' },
        { index: 6, id: 'abc6', name: 'Test 6', age: 6, address: 'Shanghai 6', address2: 'Shanghai 26' },
        { index: 7, id: 'abc7', name: 'Test 7', age: 7, address: 'Shanghai 7', address2: 'Shanghai 27' },
        { index: 8, id: 'abc8', name: 'Test 8', age: 8, address: 'Shanghai 8', address2: 'Shanghai 28' },
        { index: 9, id: 'abc9', name: 'Test 9', age: 9, address: 'Shanghai 9', address2: 'Shanghai 29' }
      ]
    };
  },
  methods: {
  }
};
</script>
