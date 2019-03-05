<style lang="less">
.table-tr-tooltip{
  font-size: 13px;
  margin: 0 -2px 1px -2px;
}
</style>

<template>
  <div>
    <Table border stripe :datas="datas" :columns="columns">
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: 'Index', prop: '$index', width: 100, tooltip: true, placement: 'top-start', content: '<div class="table-tr-tooltip">序号<hr>说明：数据的序列号</div>' },
        { title: 'ID', prop: 'id', width: 100, tooltip: true, placement: 'top-start', content: '<div class="table-tr-tooltip">ID<hr>说明：数据的唯一ID</div>' },
        { title: 'Name', prop: 'name', tooltip: true, placement: 'top-start', content: '<div class="table-tr-tooltip">姓名<hr>说明：用户的姓名</div>' },
        { title: 'Age', prop: 'age', tooltip: true, placement: 'top-start', content: '<div class="table-tr-tooltip">年龄<hr>说明：用户的年龄</div>' },
        { title: 'Address', prop: 'address', tooltip: true, placement: 'top-start', content: '<div class="table-tr-tooltip">地址<hr>说明：用户的地址</div>' }
      ],
      datas: [
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 13, address: '上海' },
        { id: 6, name: '测试6', age: 13, address: '上海' }
      ]
    };
  },
  methods: {
  }
};
</script>
