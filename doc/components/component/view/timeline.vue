<template>
  <div class="doc">
    <h2>Timeline 时间轴</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-timeline</code>, <code>h-timelineitem</code>。</p>

    <p>时间线的方式展示信息。</p>
    <h3>示例</h3>
    <p>展示时间轴，可以通过<code>color</code>自定义标志颜色，<code>icon</code>自定义icon，父级<code>pending</code>设定最后一个加载样式。</p>
    <example demo="view/timeline1"></example>
    <h3>示例2</h3>
    <p>展示带左侧时间的时间轴，可以通过<code>:time="true"</code>设定展示左侧样式，<code>:time-width="200"</code>设定左侧宽度。</p>
    <example demo="view/timeline2"></example>

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
        <td>timeWidth</td>
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
        <td>图标，1.18.0+</td>
        <td>string</td>
        <td></td>
        <td>-</td>
      </tr>
    </table>

    <h3>TimelineItem Slot</h3>
    <table class="table">
      <tr>
        <th>name</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>content</td>
        <td>定义展示内容</td>
        <td>无</td>
      </tr>
      <tr>
        <td>time</td>
        <td>定义时间展示</td>
        <td>无</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>定义图标展示</td>
        <td>无</td>
      </tr>
    </table>
  </div>
</template>
