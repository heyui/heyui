<template>
  <div class="doc">
    <h2>BackTop 返回顶部</h2>

    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-backtop</code>。</p>

    <h3>基本调用</h3>
    <example demo="other/backtotop1"></example>

    <h3>自定义样式与内容</h3>
    <example demo="other/backtotop2"></example>
    <p>样式：</p>
    <codes src="/codes/backtop1.txt" type="less"></codes>
    <div v-height="10"></div>
    <div v-height="1000" v-bg-color:gray4 v-padding="20" class="text-center">
      撑高页面
    </div>

    <h3>BackTop 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>target</td>
        <td>针对的对象</td>
        <td>Function</td>
        <td>-</td>
        <td>window.document</td>
      </tr>
      <tr>
        <td>bottom</td>
        <td>底部的位移</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>right</td>
        <td>右侧的位移</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};
</script>
