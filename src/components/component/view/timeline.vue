<style lang="less" scoped>
.h-row>div>div {
  border-radius: 3px;
  padding: 20px 5px;
  text-align: center;
  border: @border;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  [class^="h-icon-"], [class*=" h-icon-"]{
    font-size: 28px;
  }
  p{
    margin: 10px 0px;
  }
}
</style>
<template>
  <div class="doc">
    <h2>Timeline 时间轴</h2>
    <p>时间线的方式展示信息。</p>
    <h3>示例</h3>
    <p>展示时间轴，可以通过<code>color</code>自定义标志颜色，<code>icon</code>自定义icon，父级<code>pending</code>设定最后一个加载样式。</p>
    <example demo="timeline1"></example>
    <h3>示例2</h3>
    <p>展示带左侧时间的时间轴，可以通过<code>:time="true"</code>设定展示左侧样式，<code>:time-width="200"</code>设定左侧宽度。</p>
    <example demo="timeline2"></example>

    <h3>Timeline 参数</h3>
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
        <td>是否显示左侧</td>
        <td>boolean</td>
        <td>true,false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>pending</td>
        <td>最后一个显示加载样式</td>
        <td>boolean</td>
        <td>true,false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>time-width</td>
        <td>显示左侧的宽度</td>
        <td>number</td>
        <td>-</td>
        <td>100</td>
      </tr>
    </table>

    <h3>TimelineItem 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>color</td>
        <td>时间轴颜色</td>
        <td>string</td>
        <td>blue,green,yellow,red,#******</td>
        <td>blue</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>图标</td>
        <td>string</td>
        <td>内置的图像库</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
