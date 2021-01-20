<template>
  <div class="doc">
    <h2>TextEllipsis</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-textellipsis</code>. </p>
    <blockquote>1.2.0+ added</blockquote>

    <h3>Basic</h3>
    <exampleEn demo="other/textellipsis1"></exampleEn>

    <h3>Custom prefix suffix</h3>
    <exampleEn demo="other/textellipsis2"></exampleEn>

    <h3>Customize more</h3>
    <exampleEn demo="other/textellipsis3"></exampleEn>

    <h3>Adapt to line breaks</h3>
    <exampleEn demo="other/textellipsis4"></exampleEn>

    <h3>use tooltip when hide</h3>
    <exampleEn demo="other/textellipsis5"></exampleEn>

    <h3>TextEllipsis Property</h3>
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
        <td>Text to be omitted</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>height</td>
        <td>Limit height</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>isLimitHeight</td>
        <td>Whether to open the limit</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>useTooltip</td>
        <td>use tooltip when text hide</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>tooltipTheme</td>
        <td>tooltip theme</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>placement</td>
        <td>tooltip placement</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>more</td>
        <td>定义缩略时展示的文字, 1.25.0+</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>textStyle</td>
        <td>text style, 1.25.0+</td>
        <td>String, Object, Array</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>textClass</td>
        <td>text class, 1.25.0+</td>
        <td>String, Object, Array</td>
        <td>-</td>
        <td></td>
      </tr>
    </table>

    <h3>TextEllipsis Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>show</td>
        <td>When isLimitHeight is true, all text is displayed</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>When isLimitHeight is true, text is omitted</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
