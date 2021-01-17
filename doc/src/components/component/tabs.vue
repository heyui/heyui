<template>
  <div class="doc">
    <h2>Tabs 标签页</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-tabs</code>。</p>

    <h3>基本调用</h3>
    <p>Tabs控件只支持简单的tab生成，点击切换。默认给<code>h-tabs-default</code>样式，可以自己做自定义Tabs。</p>
    <p>tab选中时添加class<code>h-tabs-selected</code></p>
    <example demo="view/tabs1"></example>

    <h3>使用内置的样式2</h3>
    <example demo="view/tabs2"></example>

    <h3>使用内置的样式3</h3>
    <example demo="view/tabs3"></example>

    <h3>自定义样式</h3>
    <example demo="view/tabs4"></example>
    <p>样式：</p>
    <codes src="/codes/tabs.txt" type="less"></codes>

    <h3>自定义Tabs</h3>
    <example demo="view/tabs5"></example>

    <h3>Tabs 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>选择的数据</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用全局定义的字典</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>自定义数据的key字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>自定义数据的title字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.titleName</code></td>
      </tr>
    </table>

    <h3>Tabs 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>数据</th>
      </tr>
      <tr>
        <td>change</td>
        <td>切换Tab触发的事件</td>
      </tr>
      <tr>
        <td>click</td>
        <td>点击Tab触发的事件</td>
      </tr>
    </table>

  </div>
</template>
