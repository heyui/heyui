<template>
  <div class="doc">
    <h2>affix 图钉</h2>

    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-affix</code>。</p>

    <example demo="other/affix1"></example>
    <div v-height="1000" v-bg-color:gray4 v-padding="20" class="text-center">
      撑高页面
    </div>
    <example demo="other/affix2"></example>

    <h3>affix 固定在容器内</h3>
    <p>如果遇到固定的dom比容器高，务必添加 overflow: hidden; 的样式，并且targetDom必须position: relative|absoulte。</p>
    <example demo="other/affix3"></example>

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
      <tr>
        <td>fixedOffsetTop</td>
        <td>定位在距离页面顶部达到指定偏移量后</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>container</td>
        <td>使用容器内的定位</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
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

    <h3>affix 方法</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>refresh</td>
        <td>未监测到的页面变化，需要刷新affix组件的位置</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      fixed: false
    };
  },
  methods: {
  }
};
</script>
