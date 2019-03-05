<template>
  <div>
    <Table border :datas="datas" :columns="columns" :ths="ths" :height="200">
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      ths: [
        [
          { title: '序号', rowspan: 2 },
          { title: '编码', tooltip: true },
          { title: '信息', colspan: 2 },
          { title: 'address', rowspan: 2 }
        ], [
          { title: 'ID', prop: 'id', sort: 'auto' },
          { title: '姓名' },
          { title: '年龄' }
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
        { index: 1, id: 'abc1', name: '测试1', age: 1, address: '上海1', address2: '上海21' },
        { index: 2, id: 'abc2', name: '测试2', age: 2, address: '上海2', address2: '上海22' },
        { index: 3, id: 'abc3', name: '测试3', age: 3, address: '上海3', address2: '上海23' },
        { index: 4, id: 'abc4', name: '测试4', age: 4, address: '上海4', address2: '上海24' },
        { index: 5, id: 'abc5', name: '测试5', age: 5, address: '上海5', address2: '上海25' },
        { index: 6, id: 'abc6', name: '测试6', age: 6, address: '上海6', address2: '上海26' },
        { index: 7, id: 'abc7', name: '测试7', age: 7, address: '上海7', address2: '上海27' },
        { index: 8, id: 'abc8', name: '测试8', age: 8, address: '上海8', address2: '上海28' },
        { index: 9, id: 'abc9', name: '测试9', age: 9, address: '上海9', address2: '上海29' }
      ]
    };
  },
  methods: {
  }
};
</script>
