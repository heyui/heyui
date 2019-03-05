<template>
  <div class="doc">
    <h2>Layout 布局</h2>
    <blockquote>1.14.0+</blockquote>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-layout</code>, <code>h-header</code>, <code>h-footer</code>, <code>h-content</code>, <code>h-sider</code>。</p>

    <h3>组件概述</h3>
    <p>组件在<code>var.less</code>中配置三个尺寸，分别为：</p>
    <ul class="text-ul">
      <li><code>@layout-header-height</code>: 布局中Header的高度，默认值为: 64px</li>
      <li><code>@layout-sider-width</code>: 布局中Sider的宽度，默认值为: 200px</li>
      <li><code>@layout-sider-collapse-width</code>: 布局中Sider收起的宽度，默认值为: 70px</li>
    </ul>
    <p>用户可以通过自己的设计需求修改这三个尺寸，<code>var.less</code>文件的内容：<a href="https://github.com/heyui/heyui/blob/master/themes/var.less" target="_blank">链接</a></p>

    <h3>基本的页面布局</h3>
    <example demo="basic/layout1"></example>

    <h3>上中下布局</h3>
    <p>最基本的『上-中-下』布局。</p>
    <example demo="basic/layout2" iframe></example>
    <h3>上左右布局</h3>
    <example demo="basic/layout3" iframe></example>
    <h3>左上下布局</h3>
    <example demo="basic/layout4" iframe></example>

    <h3>Layout 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>headerFixed</td>
        <td>是否固定头部</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>siderFixed</td>
        <td>是否固定侧边栏</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
      <tr>
        <td>siderCollapsed</td>
        <td>是否收起侧边栏</td>
        <td>Boolean</td>
        <td>false</td>
        <td>-</td>
      </tr>
    </table>

    <h3>Header 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>theme</td>
        <td>主题</td>
        <td>String</td>
        <td></td>
        <td>white, dark</td>
      </tr>
    </table>

    <h3>Sider 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>theme</td>
        <td>主题</td>
        <td>String</td>
        <td></td>
        <td>white, dark</td>
      </tr>
    </table>
  </div>
</template>
