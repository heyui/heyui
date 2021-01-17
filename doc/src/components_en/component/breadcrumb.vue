<template>
  <div class="doc">
    <h2>Breadcrumb</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-breadcrumb</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="view/breadcrumb1"></exampleEn>

    <h3>Icon</h3>
    <exampleEn demo="view/breadcrumb2"></exampleEn>

    <h3>Style and Function</h3>
    <exampleEn demo="view/breadcrumb3"></exampleEn>

    <h3>Breadcrumb Property</h3>
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
        <td>Array</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>separator</td>
        <td>custom delimiter</td>
        <td>String</td>
        <td>-</td>
        <td> / </td>
      </tr>
      <tr>
        <td>selfControl</td>
        <td>Custom trigger execution</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Breadcrumb Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
      <tr>
        <td>click</td>
        <td>Breadcrumb click event</td>
        <td>data</td>
      </tr>
    </table>

  </div>
</template>
