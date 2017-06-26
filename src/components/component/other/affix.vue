<template>
  <div class="doc">
    <h2>affix 图钉</h2>

    <example demo="other/affix1"></example>
    <div v-height="1000" v-bg-color:gray4 v-padding="20" class="text-center">
      撑高页面
    </div>
    <example demo="other/affix2"></example>
    
    <h3>affix 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>offsetTop</td>
        <td>定位在距离窗口顶部达到指定偏移量后</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offsetBottom</td>
        <td>定位在距离窗口底部达到指定偏移量后</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>


    <h3>affix 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>onchange</td>
        <td>固定状态发生变化时触发该方法。</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fixed: false
    }
  },
  methods: {
  }
}
</script>
