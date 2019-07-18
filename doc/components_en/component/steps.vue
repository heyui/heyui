<template>
  <div class="doc">
    <h2>Steps</h2>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-steps</code>. </p>
    <h3>Basic</h3>
    <exampleEn demo="plugins/step1"></exampleEn>

    <h3>Custom Icon, Description</h3>
    <exampleEn demo="plugins/step2"></exampleEn>

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
    </table>
  </div>
</template>
