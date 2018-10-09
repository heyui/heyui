<template>
  <div class="doc">
    <h2>Loading</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-loading</code>. </p>
    
    <h3>Module loading effect</h3>
    <example demo="dataview/loading1"></example>
  
    <h3>Global loading effect</h3>
    <blockquote><code>$Loading</code> There is always only one global load dom opened and the same dom object is repeated.</blockquote>
    <example demo="dataview/loading2"></example>


    <h3>Loading Property</h3>
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
        <td>Load text description</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>minHeight</td>
        <td>minHeight of loading</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>loading</td>
        <td>Loading status</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>
  </div>
</template>
