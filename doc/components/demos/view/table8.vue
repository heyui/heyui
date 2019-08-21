<template>
  <div>
    <Table border :datas="datas" :columns="columns" :ths="ths">
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    let attrs = (data, index) => {
      return {
        colspan: index == 5 ? 0 : 1
      };
    };
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
        { prop: 'index',
          width: 100,
          attrs(data, index) {
            return {
              colspan: index == 5 ? 5 : 1
            };
          } },
        { prop: 'id',
          width: 100,
          attrs(data, index) {
            return {
              rowspan: index < 4 ? (index % 2 == 0 ? 2 : 0) : 1,
              colspan: index == 5 ? 0 : 1
            };
          } },
        { prop: 'name', width: 100, attrs },
        { prop: 'age', width: 100, attrs },
        { prop: 'address', width: 150, attrs }
      ],
      datas: [
        { index: 1, id: 'abc1', name: 'Test 1', age: 1, address: 'Shanghai 1', address2: 'Shanghai 21' },
        { index: 2, id: 'abc2', name: 'Test 2', age: 2, address: 'Shanghai 2', address2: 'Shanghai 22' },
        { index: 3, id: 'abc3', name: 'Test 3', age: 3, address: 'Shanghai 3', address2: 'Shanghai 23' },
        { index: 4, id: 'abc4', name: 'Test 4', age: 4, address: 'Shanghai 4', address2: 'Shanghai 24' },
        { index: 5, id: 'abc5', name: 'Test 5', age: 5, address: 'Shanghai 5', address2: 'Shanghai 25' },
        { index: 6, id: 'abc6', name: 'Test 6', age: 6, address: 'Shanghai 6', address2: 'Shanghai 26' },
        { index: 7, id: 'abc7', name: 'Test 7', age: 7, address: 'Shanghai 7', address2: 'Shanghai 27' }
      ]
    };
  },
  methods: {
  }
};
</script>
