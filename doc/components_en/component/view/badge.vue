<template>
  <div class="doc">
    <h2>Badge</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-badge</code>. </p>
    <h3>Basic</h3>
    <p>Normally <code>count</code> 0 does not show</p>
    <exampleEn demo="view/badge1"></exampleEn>

    <h3>Maximum number</h3>
    <exampleEn demo="view/badge2"></exampleEn>

    <h3>When the number is 0, it also shows</h3>
    <exampleEn demo="view/badge3"></exampleEn>

    <h3>Tip red dot</h3>
    <exampleEn demo="view/badge4"></exampleEn>

    <h3>Different display methods</h3>
    <exampleEn demo="view/badge5"></exampleEn>

    <h3>Badge Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>count</td>
        <td>Displayed value</td>
        <td>Number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>maxCount</td>
        <td>Maximum displayed value</td>
        <td>Number</td>
        <td>-</td>
        <td>99</td>
      </tr>
      <tr>
        <td>showZero</td>
        <td>When the value is 0 is also displayed</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>position</td>
        <td>Displayed on the right side of the parent</td>
        <td>String</td>
        <td>right</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
