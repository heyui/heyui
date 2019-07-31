<template>
  <div class="doc">
    <h2>Steps</h2>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-steps</code>. </p>
    <h3>Basic</h3>
    <example demo="plugins/step1"></example>

    <h3>Custom Icon, Description</h3>
    <example demo="plugins/step2"></example>

    <h3>Identify key steps using key values</h3>
    <exampleEn demo="plugins/step3"></exampleEn>

    <h3>Steps Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>datas</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>use globally defined dictionary</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>step</td>
        <td>The current step can be key</td>
        <td>Number,String</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>Key field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>title field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.titleName</code></td>
      </tr>
      <tr>
        <td>contentLayout</td>
        <td>content layout, 1.24.0+</td>
        <td>String</td>
        <td>vertical</td>
        <td>vertical, transverse</td>
      </tr>
    </table>
  </div>
</template>
