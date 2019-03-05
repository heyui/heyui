<template>
  <div class="doc">
    <h2>Notice</h2>
    <h3>Basic</h3>
    <blockquote>There are two kinds of calls written here, which are actually the same method object. The following use cases use the vue call to make an example. The js call mode is the same as the vue call.</blockquote>
    <exampleEn demo="message/notice1"></exampleEn>

    <h3>Different types of notifications</h3>
    <exampleEn demo="message/notice2"></exampleEn>

    <h3>Set timeout time</h3>
    <exampleEn demo="message/notice4"></exampleEn>

    <h3>Custom notification</h3>
    <exampleEn demo="message/notice3"></exampleEn>

    <h3>Notice Component</h3>
    <exampleEn demo="message/notice6"></exampleEn>
    <blockquote>The code used in the popup box</blockquote>
    <codes src="/message/noticeTest.vue" type="html"></codes>

    <h3>Set global auto-off time</h3>
    <exampleEn demo="message/notice5"></exampleEn>

    <h3>Notice Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>content</td>
        <td>Prompt text</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>title</td>
        <td>title</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>Prompt type</td>
        <td>String</td>
        <td>loading, info, warn, success, error</td>
        <td>info</td>
      </tr>
      <tr>
        <td>timeout</td>
        <td>How many milliseconds to close</td>
        <td>Number</td>
        <td>-</td>
        <td>全局配置timeout</td>
      </tr>
      <tr>
        <td>icon</td>
        <td>icon</td>
        <td>string</td>
        <td>其实是定义一个icon的class，也可以自己写class样式</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
