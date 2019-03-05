<template>
  <div>
    <div class="h-panel">
      <div class="h-panel-bar">
        <span class="h-panel-title">标题</span>
        <div class="h-panel-right"><Search placeholder="查询" v-width="200"></Search><i class="h-split"></i><button class="h-btn h-btn-green h-btn-m">查询</button></div>
      </div>
      <div class="h-panel-bar">
        <Checkbox v-model="selectAll">全选</Checkbox><i class="h-split"></i>
        <span class="link" :disabled="!selectAll">下载</span><i class="h-split" v-width="10"></i><span class="link" :disabled="!selectAll">分享</span>
        <i class="h-split"></i>
        <DropdownMenu :disabled="!selectAll" dict="simple" class-name="h-text-dropdown"><span :disabled="!selectAll">更多</span></DropdownMenu>
      </div>
      <div class="h-panel-body">
        <p>content</p>
        <p>content</p>
        <p>content</p>
      </div>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      selectAll: false
    };
  }
};
</script>
