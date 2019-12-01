<template>
  <div class="doc">
    <h2>Message 提示</h2>
    <h3>普通的Message提示</h3>
    <blockquote>这里写了两种调用，实际是同一个方法对象，下面的用例都使用vue调用做示例，js调用模式与vue调用一样。</blockquote>
    <example demo="message/message1"></example>

    <h3>不同类型的Message提示</h3>
    <example demo="message/message2"></example>

    <h3>不同类型的Message提示第二种写法</h3>
    <example demo="message/message3"></example>

    <h3>不自动关闭的提示</h3>
    <example demo="message/message4"></example>

    <h3>Loading</h3>
    <example demo="message/message5"></example>

    <h3>设置全局自动关闭时间</h3>
    <example demo="message/message6"></example>

    <h3>Message 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>text</td>
        <td>提示的文本</td>
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
        <td>3000ms</td>
      </tr>
    </table>

    <h3>Message 方法</h3>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>close</td>
        <td>关闭Message</td>
        <td>无</td>
      </tr>
    </table>
  </div>
</template>
