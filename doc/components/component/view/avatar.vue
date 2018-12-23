<template>
  <div class="doc">
    <h2>Avatar 头像信息</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-avatar</code>。</p>

    <h3>基本调用</h3>
    <example demo="view/avatar1"></example>

    <h3>设置默认类型与形状</h3>
    <example demo="view/avatar2"></example>

    <h3>全局配置</h3>
    <codes src="/codes/avatar.txt" type="javascript"></codes>
    
    <h3>Avatar 参数</h3>
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
        <td>数据</td>
        <td>Array</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>separator</td>
        <td>自定义分隔符</td>
        <td>String</td>
        <td>-</td>
        <td> / </td>
      </tr>
      <tr>
        <td>selfControl</td>
        <td>自定义触发执行</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Breadcrumb 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>数据</th>
      </tr>
      <tr>
        <td>click</td>
        <td>点击BreadCrumb触发的事件</td>
      </tr>
    </table>

  </div>
</template>