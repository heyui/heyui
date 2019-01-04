<template>
  <div class="doc">
    <h2>Modal 弹出框</h2>

    <h3>Confirm</h3>
    <!-- <h4>使用方法调用Confirm</h4> -->
    <example demo="message/modal5"></example>

    <h3>基础调用</h3>
    <example demo="message/modal6"></example>

    <h3>全屏的Modal</h3>
    <example demo="message/modal12"></example>

    <h3>自定义操作按钮</h3>
    <example demo="message/modal7"></example>

    <h3>点击遮罩无法关闭</h3>
    <example demo="message/modal3"></example>

    <h3>垂直居中的弹出框</h3>
    <example demo="message/modal4"></example>

    <h3>无遮罩弹出框</h3>
    <example demo="message/modal2"></example>

    <h3>有分割线的弹出框</h3>
    <example demo="message/modal9"></example>

    <!-- <h3>Vue调用组件式的Modal</h3>
    <p>系统开发中，我们经常使用到新增，编辑等功能性以及复用性很强的模块，这里我们提供modal的组件式调用，帮助开发中更好的编写。</p>
    <example demo="message/modal8"></example> -->

    <h3>Js的Modal调用组件</h3>
    <p>使用js调用弹出的组件式Modal，这样不仅方便参数的使用，还可以将js代码集成调用。</p>
    <!-- <blockquote>弹出框中使用的组件和上方Vue调用的组件是同一个，两种方式都能兼容。</blockquote> -->
    <example demo="message/modal11"></example>
    
    <blockquote>弹出框中使用的代码</blockquote>
    <codes src="/message/modalTest.vue" type="html"></codes>


    <h3>Modal 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>hasCloseIcon</td>
        <td>是否有关闭的Icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>hasMask</td>
        <td>是否有遮罩层</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>content</td>
        <td>设定内容，目前只支持js定义</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>width</td>
        <td>设定宽度，目前只支持js定义</td>
        <td>Number</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>hasDivider</td>
        <td>是否有线条分割头部以及尾部</td>
        <td>Boolean</td>
        <td>-</td>
        <td>全局配置modal.hasDivider</td>
      </tr>
      <tr>
        <td>closeOnMask</td>
        <td>是否点击遮罩层关闭modal</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>middle</td>
        <td>是否垂直居中展示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>fullScreen</td>
        <td>是否全屏</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>buttons</td>
        <td>设定底层按钮，目前只支持js定义</td>
        <td>Array</td>
        <td>-</td>
        <td>['cancel']</td>
      </tr>
      <tr>
        <td>events</td>
        <td>事件监听</td>
        <td>Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义class</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>