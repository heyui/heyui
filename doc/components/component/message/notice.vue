<template>
  <div class="doc">
    <h2>Notice 通知</h2>
    <h3>普通的通知</h3>
    <blockquote>这里写了两种调用，实际是同一个方法对象，下面的用例都使用vue调用做示例，js调用模式与vue调用一样。</blockquote>
    <example demo="message/notice1"></example>

    <h3>不同类型的通知</h3>
    <example demo="message/notice2"></example>

    <h3>设置timeout时间</h3>
    <example demo="message/notice4"></example>

    <h3>自定义通知</h3>
    <example demo="message/notice3"></example>

    <h3>调用组件式的Notice</h3>
    <example demo="message/notice6"></example>
    <blockquote>弹出框中使用的代码</blockquote>
    <codes src="/message/noticeTest.vue" type="html"></codes>

    <h3>设置全局自动关闭时间</h3>
    <example demo="message/notice5"></example>

    <h3>Notice 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>content</td>
        <td>提示的文本</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>title</td>
        <td>提示的标题</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>提示类型</td>
        <td>String</td>
        <td>loading, info, warn, success, error</td>
        <td>info</td>
      </tr>
      <tr>
        <td>timeout</td>
        <td>显示多少毫秒后自动关闭</td>
        <td>Number</td>
        <td>-</td>
        <td>全局配置timeout</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>引用icon</td>
        <td>string</td>
        <td>其实是定义一个icon的class，也可以自己写class样式</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
