<template>
  <div>
    <Table :datas="datas" :columns="columns" @sort="triggerSort">
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      columns: [
        { title: '序号', prop: '$index', width: 100 },
        { title: 'ID', prop: 'id', width: 100, sort: true },
        { title: '姓名', prop: 'name', sort: true },
        { title: '年龄', prop: 'age', sort: true },
        { title: '地址', prop: 'address' },
      ],
      datas: [
        { id: 5, name: '测试5', age: 12, address: "上海" },
        { id: 6, name: '测试6', age: 13, address: "上海" },
        { id: 7, name: '测试7', age: 14, address: "上海" },
        { id: 5, name: '测试5', age: 17, address: "上海" },
        { id: 6, name: '测试6', age: 18, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ]
    }
  },
  methods: {
    triggerSort(data) {
      this.datas.sort((a, b)=>{
        let ad = a[data.prop], bd = b[data.prop];
        let index = ad == bd ? 0 : (ad > bd) ? 1 : -1;
        return data.type == 'asc' ? index: -index;
      })
    }
  }
}
</script>
