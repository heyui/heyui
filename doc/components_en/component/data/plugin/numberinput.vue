<template>
  <div class="doc">
    <h2>NumberInput</h2>
    <h3>Basic</h3>
    <example demo="form/numberinput1"></example>

    <h3>Maximum and minimum value</h3>
    <example demo="form/numberinput2"></example>

    <h3>Use control</h3>
    <example demo="form/numberinput3"></example>

    <h3>Step</h3>
    <example demo="form/numberinput5"></example>

    <h3>Disabled</h3>
    <example demo="form/numberinput4"></example>
  
    <h3>NumberInput Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>disabled</td>
        <td>disabled</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>min</td>
        <td>min value</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>max</td>
        <td>max value</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>step</td>
        <td>Increase or decrease the value of each click</td>
        <td>Number</td>
        <td>-</td>
        <td>1</td>
      </tr>
      <tr>
        <td>useInt</td>
        <td>only enter an integer</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>useOperate</td>
        <td>Whether to use plus or minus buttons</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>precision</td>
        <td>Keep a few decimal places</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>


    <h3>NumberInput Event</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>input</td>
        <td>When data changes</td>
      </tr>
      <tr>
        <td>change</td>
        <td>When data changes blur</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  }
}
</script>


