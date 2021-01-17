<template>
  <div class="h-panel">
    <div class="h-panel-bar">
      <span class="h-panel-title">title</span>
      <span v-color:gray v-font="13">Description~~</span>
      <div class="h-panel-right">
        <Search placeholder="Inquire" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">Inquire</button>
      </div>
    </div>
    <div class="h-panel-bar">
      <span class="link">download</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">share it</span>
      <i class="h-split"></i>
      <DropdownMenu :datas="menus" class-name="h-text-dropdown"><span :disabled="!selectAll">More</span></DropdownMenu>
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
        { title: 'Serial number', prop: '$index', width: 100 },
        { title: 'ID', prop: 'id', width: 100 },
        { title: 'Name', prop: 'name' },
        { title: 'age', prop: 'age' },
        { title: 'address', prop: 'address' }
      ],
      datas: [
        { id: 5, name: 'Test 5', age: 12, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 13, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 14, address: 'Shanghai' },
        { id: 5, name: 'Test 5', age: 17, address: 'Shanghai' },
        { id: 6, name: 'Test 6', age: 18, address: 'Shanghai' },
        { id: 7, name: 'Test 7', age: 12, address: 'Shanghai' }
      ]
    };
  },
  methods: {
    currentChange(page) {
      this.page.cur = page.cur;
    }
  },
  components: {}
};
</script>
