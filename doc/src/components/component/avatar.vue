<template>
  <div class="doc">
    <h2>Avatar 头像信息</h2>
    <blockquote>1.13.0+</blockquote>

    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-avatar</code>。</p>

    <h3>基本调用</h3>
    <example demo="view/avatar1"></example>

    <h3>设置不同用法</h3>
    <example demo="view/avatar3"></example>

    <h3>设置默认类型与形状</h3>
    <p>当一些用户没有图像信息时，可以显示默认的图片。</p>
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
        <td>src</td>
        <td>图像地址</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>图像大小</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>distance</td>
        <td>图片与文字的间距</td>
        <td>Number</td>
        <td>-</td>
        <td>15</td>
      </tr>
      <tr>
        <td>imageTop</td>
        <td>设置图片与顶部的位移</td>
        <td>Number</td>
        <td>如果不设置的话，图像居中对齐</td>
        <td></td>
      </tr>
      <tr>
        <td>type</td>
        <td>设置不同类型，自定义样式</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>fit</td>
        <td>使用不同的图片展示适配类型</td>
        <td>String</td>
        <td></td>
        <td>fill, contain, cover, none</td>
      </tr>
      <tr>
        <td>noInfo</td>
        <td>不显示说明信息</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>Avatar 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>描述</th>
        <th>数据</th>
      </tr>
      <tr>
        <td>click</td>
        <td>点击头像触发的事件</td>
        <td>event</td>
      </tr>
    </table>

  </div>
</template>
