<template>
  <div class="doc">
    <h2>Pagination 分页</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-pagination</code>。</p>
    <h3>普通分页</h3>
    <div>
      <example demo="dataview/pagination1"></example>
    </div>
    <h3>迷你分页</h3>
    <div>
      <example demo="dataview/pagination2"></example>
    </div>
    <h3>自定义分页</h3>
    <p>分页控件由四个部分组成：<code>total</code>总数,<code>sizes</code>每页条数选择,<code>pager</code>翻页,<code>jumper</code>跳页，可以自定义<code>layout</code>属性定义组件，以及排列顺序。</p>
    <div>
      <example demo="dataview/pagination3"></example>
    </div>
    <h3>自定义示例</h3>
    <div>
      <example demo="dataview/pagination4"></example>
    </div>
    <h3>居中对齐</h3>
    <div>
      <example demo="dataview/pagination5"></example>
    </div>
    <h3>居右对齐</h3>
    <div>
      <example demo="dataview/pagination6"></example>
    </div>

    <h3>Pagination 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>size</td>
        <td>每页条数</td>
        <td>Number</td>
        <td>-</td>
        <td>全局配置size</td>
      </tr>
      <tr>
        <td>sizes</td>
        <td>每页条数选择器</td>
        <td>Array</td>
        <td>-</td>
        <td>全局配置sizes, 例：[10, 20, 50, 100]</td>
      </tr>
      <tr>
        <td>align</td>
        <td>排列方向</td>
        <td>String</td>
        <td>left,center,right</td>
        <td>left</td>
      </tr>
      <tr>
        <td>cur</td>
        <td>当前页</td>
        <td>Number</td>
        <td>-</td>
        <td>1</td>
      </tr>
      <tr>
        <td>total</td>
        <td>总共条数</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>small</td>
        <td>是否是迷你版本</td>
        <td>Boolean</td>
        <td>-</td>
        <td>全局配置small</td>
      </tr>
      <tr>
        <td>layout</td>
        <td>翻页器排列</td>
        <td>String</td>
        <td>total,pager,jumper,sizes</td>
        <td>全局配置layout</td>
      </tr>
      <tr>
        <td>pagerSize</td>
        <td>总共出现多少个pager</td>
        <td>Number</td>
        <td>-</td>
        <td>5</td>
      </tr>
    </table>
  </div>
</template>
