<template>
  <div >
    <p>value:{{value}}</p>
    <div v-width="300">
      <AutoComplete ref="autocomplete" :option="param" v-model="value" @change="onChange">
        <div slot="top" class="text-center" style="line-height:40px">Custom head</div>
        <template slot="item" slot-scope="{item}"><div>{{item.title}}<span class="float-right gray-color">{{item.title.length}} Word</span></div></template>
        <div slot="bottom" @mousedown.stop.prevent>
          <Pagination :cur="pagination.page" :total="pagination.total" @change="changePage" layout="pager" small></Pagination>
        </div>
      </AutoComplete>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pagination: {
        page: 1,
        total: 30
      },
      value: null,
      param: {
        minWord: 0,
        loadData: this.loadData
      },
      keyword: ''
    };
  },
  methods: {
    loadData(filter, callback) {
      if (this.keyword !== filter) {
        this.keyword = filter;
        this.pagination.page = 1;
      }
      setTimeout(() => {
        callback(
          Array.apply(null, Array(6)).map(
            (item, index) => `page_${filter}_${this.pagination.page}_${index}`
          )
        );
      }, 100);
    },
    changePage(page) {
      this.pagination.page = page.cur;
      this.$refs.autocomplete.search();
    },
    onChange(data, trigger) {
      log(data, trigger);
    }
  }
};
</script>
