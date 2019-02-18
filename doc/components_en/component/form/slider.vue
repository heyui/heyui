<template>
  <div class="doc">
    <h2>Slider</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-slider</code>. </p>
    <h3>Basic</h3>
    <example demo="form/slider1"></example>

    <h3>Readonly</h3>
    <example demo="form/slider2"></example>

    <h3>Step</h3>
    <example demo="form/slider3"></example>

    <h3>Custom display</h3>
    <example demo="form/slider4"></example>

    <h3>Hide prompts</h3>
    <example demo="form/slider5"></example>
    
    <h3>Silder Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>step</td>
        <td>Each node size</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>show</td>
        <td>Custom tip display content</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>showtip</td>
        <td>Whether to show tip</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>range</td>
        <td>define the range of slider</td>
        <td>{start: Number, end: Number}</td>
        <td>-</td>
        <td>{start: 0, end: 100}</td>
      </tr>
    </table>

    <h3>Silder Event</h3>
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