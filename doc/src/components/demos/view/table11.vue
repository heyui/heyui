<template>
  <div>
    <Table :datas="datas" :columns="columns">
      <template slot-scope="props">
        <td>{{props.index}}</td>
        <td>{{props.data.id}}</td>
        <td>{{props.data.name}}</td>
        <td>{{props.data.age}}</td>
        <td>{{props.data.address}}</td>
      </template>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'Index', width: 100 },
        { title: 'ID', width: 100, sortProp: 'id', sort: 'auto' },
        { title: 'Name', sortProp: 'name', sort: 'auto' },
        { title: 'Age', sortProp: 'age', sort: 'auto' },
        { title: 'Address' }
      ],
      datas: [
        { id: 5, name: '测试5', age: 9, address: '上海' },
        { id: 6, name: '测试6', age: 8, address: '上海' },
        { id: 7, name: '测试7', age: 14, address: '上海' },
        { id: 5, name: '测试5', age: 17, address: '上海' },
        { id: 6, name: '测试6', age: 18, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' }
      ]
    };
  }
};
</script>
