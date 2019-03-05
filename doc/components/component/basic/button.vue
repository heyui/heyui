<template>
  <div class="doc">
    <h2>Button 按钮</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-button</code>。</p>

    <h3>组件调用</h3>
    <p>使用基本的Button组件实现各种button的样式。</p>
    <p class="tip">如果需要使用<code>stop</code>等事件处理方案，请使用<code>stop</code>参数</p>
    <example demo="basic/button2"></example>

    <h3>原生class</h3>
    <p>利用基本的class实现各种button的样式</p>
    <example demo="basic/button1"></example>

    <h3>class 集合</h3>
    <table class="table">
      <tr>
        <th>class</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>.h-btn</td>
        <td>默认的按钮样式</td>
      </tr>
      <tr>
        <td>.h-btn-{color}</td>
        <td>有背景色的按钮，red,green,blue,yellow,primary</td>
      </tr>
      <tr>
        <td>.h-btn-text-{color}</td>
        <td>hover下，文字与边框变色的按钮，red,green,blue,yellow</td>
      </tr>
      <tr>
        <td>.h-btn-circle</td>
        <td>圆角按钮</td>
      </tr>
      <tr>
        <td>.h-btn-icon-circle</td>
        <td>圆形的图标按钮</td>
      </tr>
      <tr>
        <td>.h-btn-{size}</td>
        <td>图标的大小，l, s, xs</td>
      </tr>
      <tr>
        <td>.h-btn-loading</td>
        <td>loading状态下的按钮</td>
      </tr>
      <tr>
        <td>.h-btn-group</td>
        <td>按钮组</td>
      </tr>
      <tr>
        <td>.h-btn-group-circle</td>
        <td>圆角的按钮组</td>
      </tr>
      <tr>
        <td>.h-btn-group-{size}</td>
        <td>按钮组的大小，l, s, xs</td>
      </tr>
    </table>

    <h3>Button 参数</h3>
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
        <td>背景有颜色的按钮</td>
        <td>string</td>
        <td>red,green,blue,yellow,primary</td>
        <td>-</td>
      </tr>
      <tr>
        <td>text-color</td>
        <td>hover下，文字与边框变色的按钮</td>
        <td>string</td>
        <td>red,green,blue,yellow</td>
        <td>-</td>
      </tr>
      <tr>
        <td>circle</td>
        <td>是否是圆角边框</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>是否加载中，将覆盖原有的图标</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>string</td>
        <td>l, s, xs</td>
        <td>-</td>
      </tr>
      <tr>
        <td>no-border</td>
        <td>是否有边框</td>
        <td>boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>text</td>
        <td>是否是单纯的文字按钮</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>引用icon</td>
        <td>string</td>
        <td>其实是定义一个icon的class，也可以自己写class样式</td>
        <td>-</td>
      </tr>
      <tr>
        <td>stop</td>
        <td>click事件是否stopPropagation</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>preventDefault</td>
        <td>click事件是否preventDefault</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Button 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>click</td>
        <td>点击事件</td>
        <td>Event</td>
      </tr>
    </table>

    <h3>ButtonGroup 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>circle</td>
        <td>是否是圆角边框</td>
        <td>boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>size</td>
        <td>按钮大小</td>
        <td>string</td>
        <td>l, s, xs</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
