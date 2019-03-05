<template>
  <div class="doc">
    <h2>Switch</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-switch</code>, generally use <code>hSwitch</code>. </p>
    <h3>Basic</h3>
    <exampleEn demo="form/switch2"></exampleEn>

    <h3>self defined true and false value</h3>
    <exampleEn demo="form/switch1"></exampleEn>

    <h3>Disabled</h3>
    <exampleEn demo="form/switch3"></exampleEn>

    <h3>Switch Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>small</td>
        <td>Smaller size</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>trueValue</td>
        <td>true value, use === compare</td>
        <td>-</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>falseValue</td>
        <td>false value, use === compare</td>
        <td>-</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Switch Event</h3>
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
