<template>
  <div class="doc">
    <h2>TextEllipsis</h2>
    <blockquote>1.2.0+ added</blockquote>

    <h3>Basic</h3>
    <example demo="other/textellipsis1"></example>
    
    <h3>Custom prefix suffix</h3>
    <example demo="other/textellipsis2"></example>
    
    <h3>Customize more</h3>
    <example demo="other/textellipsis3"></example>

    <h3>Adapt to line breaks</h3>
    <example demo="other/textellipsis4"></example>
    

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
    }
  },
  methods: {
  }
}
</script>
