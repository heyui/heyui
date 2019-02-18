<template>
  <div class="doc">
    <h2>Rate</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-rate</code>. </p>
    <h3>Basic</h3>
    <example demo="form/rate1"></example>

    <h3>Readonly</h3>
    <example demo="form/rate2"></example>

    <h3>Rate Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>showText</td>
        <td>Whether to show star rating</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Rate Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>change</td>
        <td>When data changed</td>
        <td>total object value</td>
      </tr>
      <tr>
        <td>input</td>
        <td>When data changed</td>
        <td>v-model value</td>
      </tr>
    </table>
  </div>
</template>