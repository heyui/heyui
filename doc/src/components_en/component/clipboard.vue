<template>
  <div class="doc">
    <h2>Clipboard</h2>
    <blockquote>1.13.0+</blockquote>

    <h3>Basic</h3>
    <exampleEn demo="other/clipboard1"></exampleEn>

    <h3>Clipboard Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>text</td>
        <td>copy text</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>showSuccessTip</td>
        <td>Setting tip text when success</td>
        <td></td>
        <td>String</td>
        <td>复制成功</td>
      </tr>
      <tr>
        <td>showFailureTip</td>
        <td>Setting tip text when failure</td>
        <td></td>
        <td>String</td>
        <td>复制失败</td>
      </tr>
      <tr>
        <td>successCallback</td>
        <td>callback when success</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>failureCallback</td>
        <td>callback when failure</td>
        <td></td>
        <td>-</td>
        <td></td>
      </tr>
    </table>
  </div>
</template>

<script>
