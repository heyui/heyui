<template>
  <div class="doc">
    <h2>Panel 面板</h2>
  
    <h3>基础调用</h3>
    <div v-width="400">
      <div class="h-panel">
        <div class="h-panel-bar">
          <span class="h-panel-title">标题</span>
          <span class="h-panel-right"><a>More</a></span>
        </div>
        <div class="h-panel-body">
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </div>
    </div>


    <h3>Panel头部自定义</h3>
    <div v-width="900">
      <div class="h-panel">
        <div class="h-panel-bar">
          <span class="h-panel-title">标题</span>
          <div class="h-panel-right"><Search placeholder="查询" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">查询</button></div>
        </div>
        <div class="h-panel-bar">
          <Checkbox v-model="selectAll">全选</Checkbox><i class="h-split"></i>
          <span class="link" :disabled="!selectAll">下载</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">分享</span>
          <i class="h-split"></i>
          <DropdownMenu :disabled="!selectAll" dict="simple"><span class="text-hover"  :disabled="!selectAll">更多</span></DropdownMenu>
        </div>
        <div class="h-panel-body">
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </div>
    </div>
  
    <h3>无边框</h3>
    <div v-bg-color:gray2
         v-width="400"
         v-padding="20">
      <div class="h-panel h-panel-no-border">
        <div class="h-panel-bar">
          <span class="h-panel-title">标题</span>
          <span class="h-panel-right"><a>More</a></span>
        </div>
        <div class="h-panel-body">
          <p>content</p>
          <p>content</p>
          <p>content</p>
        </div>
      </div>
    </div>

    <h3>头部单独调用</h3>
    <div class="h-panel-bar">
      <span class="h-panel-title">标题</span>
      <span v-color:gray v-font="13">说明~~</span>
      <div class="h-panel-right"><Search placeholder="查询" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">查询</button></div>
    </div>
    <div class="h-panel-bar">
      <Checkbox v-model="selectAll">全选</Checkbox><i class="h-split"></i>
      <span class="link" :disabled="!selectAll">下载</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">分享</span>
      <i class="h-split"></i>
      <DropdownMenu :disabled="!selectAll" dict="simple"><span class="text-hover"  :disabled="!selectAll">更多</span></DropdownMenu>
      <div class="h-panel-right">
        <Pagination :cur="cur" :total="68" :small="true" layout="pager" @change="currentChange"></Pagination>
      </div>
    </div>
    <div class="h-panel-body">
      content
    </div>
    <div v-padding="16">
      <Pagination :cur="cur" :total="68" :small="true" align="right" @change="currentChange"></Pagination>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      selectAll: false,
      cur: 3
    }
  },
  methods: {
    currentChange(page) {
      this.cur = page.cur;
    }
  },
  components: {
  }
}
</script>
