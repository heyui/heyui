<style lang="less">
  .list{
    >li{
      padding: 5px;
    }
  }
</style>

<template>
  <div class="doc">
    <h2>Tag 标签</h2>

    <h3>基本展示</h3>
    <p>
      <span class="h-tag">default</span>
      <span class="h-tag h-tag-primary">primary</span>
      <span class="h-tag h-tag-red">red</span>
      <span class="h-tag h-tag-blue">blue</span>
      <span class="h-tag h-tag-green">green</span>
      <span class="h-tag h-tag-yellow">yellow</span>
      <span class="h-tag h-tag-gray">gray</span>
    </p>

    <h3>类型标签</h3>
    <ul class="list">
      <li><span class="h-tag-circle h-tag-red">各</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-green">种</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-yellow">类</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-blue">型</span>信息说明</li>
    </ul>

    <h3>背景色</h3>
    <ul class="list">
      <span class="h-tag">default</span>
      <span class="h-tag h-tag-bg-primary">primary</span>
      <span class="h-tag h-tag-bg-red">red</span>
      <span class="h-tag h-tag-bg-blue">blue</span>
      <span class="h-tag h-tag-bg-green">green</span>
      <span class="h-tag h-tag-bg-yellow">yellow</span>
      <span class="h-tag h-tag-bg-gray">gray</span>
    </ul>

    <h3>类型标签</h3>
    <ul class="list">
      <li><span class="h-tag-circle h-tag-bg-red">各</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-bg-green">种</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-bg-yellow">类</span>信息说明</li>
      <li><span class="h-tag-circle h-tag-bg-blue">型</span>信息说明</li>
    </ul>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>
