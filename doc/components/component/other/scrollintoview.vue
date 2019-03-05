<template>
  <div class="doc">
    <h2>ScrollIntoView 滚动至视图内</h2>

    <h3>基本调用</h3>
    <example demo="other/scrollintoview1"></example>

    <codes type="javascript">scrollIntoView(someElement, {
  time: 500, // 半秒
  align:{
    top: 0 to 1, // default 0.5 (center)
    left: 0 to 1, // default 0.5 (center)
    topOffset: 0, // 偏移顶部对齐的像素
    leftOffset: 0, // 偏移左边对齐的像素
  },
  isScrollable: function(target, defaultIsScrollable){
    // 判断对象是否可以滚动，针对有多层scroll父层的情况
    return defaultIsScrollable(target) || ~target.className.indexOf('scrollable');
  }
});</codes>

    <h3>ScrollIntoView 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>time</td>
        <td>位移消耗的时间</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>align</td>
        <td>位置，包含top, topOffset</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>isScrollable</td>
        <td>判断对象是否可以滚动，针对有多层scroll父层的情况</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
