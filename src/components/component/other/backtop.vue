<template>
  <div class="doc">
    <h2>BackTop 返回顶部</h2>

    <h3>基本调用</h3>
    <BackTop :target="getTarget" :bottom="0" :right="50"></BackTop>
    <BackTop :target="getTarget" :bottom="100" :right="50" class-name="h-backtop-self">
      返回顶部
    </BackTop>

    <div v-height="1000">
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
    }
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
}
</script>
