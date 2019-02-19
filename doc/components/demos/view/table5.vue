<template>
  <div>
    <p>
      <hSwitch v-model="loading">loading</hSwitch>
      <Button @click="updateSort">Age降序</Button>
    </p>
    <Table ref="table" :datas="datas" :loading="loading" :columns="columns" @sort="triggerSort">
      <div slot="empty">自定义提醒：暂时无数据</div>
    </Table>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      columns: [
        { title: 'Index', prop: '$index', width: 100 },
        { title: 'ID', prop: 'id', width: 100, sort: true },
        { title: 'Name', prop: 'name', sort: true },
        { title: 'Age', render: item => `年龄：${item.age}`, sortProp: 'age', sort: true },
        { title: 'Address', prop: 'address' },
      ],
      datas: [
        { id: 5, name: '测试5', age: 9, address: "上海" },
        { id: 6, name: '测试6', age: 8, address: "上海" },
        { id: 7, name: '测试7', age: 14, address: "上海" },
        { id: 5, name: '测试5', age: 17, address: "上海" },
        { id: 6, name: '测试6', age: 18, address: "上海" },
        { id: 7, name: '测试7', age: 12, address: "上海" },
      ]
    }
  },
  methods: {
    loadData() {
      this.loading = true;
      setTimeout(()=>{
        this.loading = false;
      }, 5000);
    },
    updateSort() {
      this.$refs.table.triggerSort({prop: 'age', type: 'desc'}, true);
    },
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
