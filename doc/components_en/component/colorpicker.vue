<template>
  <div class="doc">
    <h2>ColorPicker </h2>
   <blockquote>1.23.0+</blockquote>

    <p class="component-name-tip">ColorPicker does not load by default, and if you use on-demand loading, you don't need to pay attention to it. If you are using full load, use the following code:</p>
<codes type="javascript">
import ColorPicker from 'heyui/lib/components/color-picker';
Vue.component('ColorPicker', ColorPicker);
</codes>

    <h3>Basic</h3>
    <example demo="colorpicker/colorpicker1"></example>

    <h3>Enable Alpha</h3>
    <example demo="colorpicker/colorpicker2"></example>

    <h3>Predefined colors</h3>
    <example demo="colorpicker/colorpicker3"></example>

    <h3>ColorPicker Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>useConfirm</td>
        <td>Whether to use the confirmation button to trigger the change</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>colorType</td>
        <td>color type</td>
        <td>string</td>
        <td>hex / rgb</td>
        <td>hex（ enableAlpha = false ）/ rgb（ enableAlpha = true ）</td>
      </tr>
      <tr>
        <td>enableAlpha</td>
        <td>enable alpha</td>
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
        <td>colors</td>
        <td>Customize color presets.</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
    </table>

    <h3>ColorPicker Event</h3>
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
