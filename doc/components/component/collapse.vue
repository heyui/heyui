<template>
  <div class="doc">
    <h2>Collapse 折叠面板</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-collapse</code>。</p>
    <blockquote>1.14.0+</blockquote>

    <h3>基本调用</h3>
    <p>可同时展开多个面板，面板之间不影响</p>
    <example demo="view/collapse1"></example>

    <h3>手风琴效果</h3>
    <p>每次只能展开一个面板</p>
    <example demo="view/collapse2"></example>

    <h3>自定义面板标题</h3>
    <p>除了可以通过 <code>title</code> 属性以外，还可以通过具名 <code>slot</code> 来实现自定义面板的标题内容，以实现增加图标等效果。</p>
    <example demo="view/collapse3"></example>

    <h3>Collapse 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>value</td>
        <td>当前激活的面板的 name，可以使用 v-model 双向绑定</td>
        <td>Array, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>accordion</td>
        <td>是否开启手风琴模式，开启后每次至多展开一个面板</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Collapse 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>描述</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>change</td>
        <td>切换面板时触发，返回当前已展开的面板的 key，格式为数组</td>
        <td>[]</td>
      </tr>
    </table>

    <h3>CollapseItem 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>name</td>
        <td>当前面板的 name，与 Collapse的<code>value</code>对应，不填为索引值</td>
        <td>String, Number</td>
        <td>-</td>
        <td>index</td>
      </tr>
      <tr>
        <td>title</td>
        <td>面板标题</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>CollapseItem slot 参数</h3>
    <table class="table">
      <tr>
        <th>名称</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>title</td>
        <td>面板头内容</td>
      </tr>
      <tr>
        <td>无</td>
        <td>描述内容</td>
      </tr>
    </table>
  </div>
</template>
