<template>
  <div>
    <Table :datas="datas" :columns="columns">
      <div slot="empty">自定义提醒：暂时无数据</div>
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
