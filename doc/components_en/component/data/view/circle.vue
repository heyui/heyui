<template>
  <div class="doc">
    <h2>Circle Progress</h2>
    <blockquote>Because of <code>circle</code> is keyword, please use <code>h-circle</code> template.</blockquote>
    <h3>Basic</h3>
    <example demo="view/circle1"></example>

    <h3>Combination</h3>
    <example demo="view/circle2"></example>
    
    <h3>Circle Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>percent</td>
        <td>percent value</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>color</td>
        <td>show color</td>
        <td>String</td>
        <td>RGB</td>
        <td>primary</td>
      </tr>
      <tr>
        <td>strokeWidth</td>
        <td>width</td>
        <td>Number</td>
        <td>-</td>
        <td>10</td>
      </tr>
      <tr>
        <td>size</td>
        <td>size</td>
        <td>Number</td>
        <td>-</td>
        <td>120</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 10
    }
  }
}
</script>
