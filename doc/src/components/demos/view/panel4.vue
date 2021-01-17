<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">标题</span>
      <span v-color:gray v-font="13">说明~~</span>
      <div class="h-panel-right"><Search placeholder="查询" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">查询</button></div>
    </div>
    <div class="h-panel-bar">
      <span class="link">下载</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">分享</span>
      <i class="h-split"></i>
      <DropdownMenu :datas="menus" class-name="h-text-dropdown"><span :disabled="!selectAll">更多</span></DropdownMenu>
      <div class="h-panel-right">
        <Pagination :cur="page.cur" :total="page.total" :small="true" layout="pager" @change="currentChange"></Pagination>
      </div>
    </div>
    <div class="h-panel-body bottom-line">
      <Table :datas="datas" checkbox :columns="columns"></Table>
    </div>
    <div class="h-panel-bar">
      <Pagination :cur="page.cur" :total="page.total" :small="true" align="right" @change="currentChange"></Pagination>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      menus: ['Operate1', 'Operate2', 'Operate3'],
      selectAll: false,
      page: {
        cur: 3,
        total: 58
      },
      columns: [
        { title: '序号', prop: '$index', width: 100 },
        { title: 'ID', prop: 'id', width: 100 },
        { title: '姓名', prop: 'name' },
        { title: '年龄', prop: 'age' },
        { title: '地址', prop: 'address' }
      ],
      datas: [
        { id: 5, name: '测试5', age: 12, address: '上海' },
        { id: 6, name: '测试6', age: 13, address: '上海' },
        { id: 7, name: '测试7', age: 14, address: '上海' },
        { id: 5, name: '测试5', age: 17, address: '上海' },
        { id: 6, name: '测试6', age: 18, address: '上海' },
        { id: 7, name: '测试7', age: 12, address: '上海' }
      ]
    };
  },
  methods: {
    currentChange(page) {
      this.page.cur = page.cur;
    }
  },
  components: {
  }
};
</script>
