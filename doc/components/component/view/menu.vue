<template>
  <div class="doc">
    <h2>Menu 菜单</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-menu</code>。</p>
    <h3>基本黑色</h3>
    <p>选中的方法主要是针对于<code>vue-router</code>等单页应用的选中逻辑。</p>
    <example demo="view/menu1"></example>
    <p>配合<code>vue-router</code>：</p>
    <codes src="/codes/menu1.txt" type="javascript"></codes>

    <h3>自定义样式</h3>
    <p>该样式是自己的设置的class，可以做任意调整。</p>
    <example demo="view/menu3"></example>
    <p>样式：</p>
    <codes src="/codes/menu.txt" type="less"></codes>

    <h3>Menu 参数</h3>
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
        <td>menu的数据</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td>全局配置<code>config.menu</code></td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义class</td>
        <td>string</td>
        <td>-</td>
        <td>h-menu-dark</td>
      </tr>
      <tr>
        <td>inlineCollapsed</td>
        <td>是否使用折叠模式，兼容：1.13.1+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>accordion</td>
        <td>是否启动手风琴模式，兼容：1.12.0+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Menu 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>click</td>
        <td>每个menu的点击事件</td>
      </tr>
      <tr>
        <td>select</td>
        <td>menu的选中事件</td>
      </tr>
    </table>

    <h3>Option 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>titleName</td>
        <td>menu的数据titleName</td>
        <td>String</td>
        <td>-</td>
        <td>title</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>menu的数据keyName</td>
        <td>String</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>menu的数据childrenName</td>
        <td>String</td>
        <td>-</td>
        <td>children</td>
      </tr>
    </table>
  </div>
</template>