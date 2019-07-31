<template>
  <div class="doc">
    <h2>DateFullRangePicker</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-datefullpicker</code>. </p>

    <h4>Super date picker</h4>
    <exampleEn demo="dataplugins/daterangepicker8"></exampleEn>

    <h3>DateFullRangePicker Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>defaultType</td>
        <td>Default view</td>
        <td>String</td>
        <td>year, month, week, date</td>
        <td>week</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>noBorder</td>
        <td>Whether there is a border, suitable for the drop-down selection of text</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Show the default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>please select</td>
      </tr>
      <tr>
        <td>startWeek</td>
        <td>When choosing a week, set the starting day of the week</td>
        <td>Number</td>
        <td>1, 2, 3, 4, 5, 6, 7</td>
        <td>Global Configuration <code>datepicker.startWeek</code>, For details, please go to <router-link to="/en/component/config">Global Configuration</router-link></td>
      </tr>
      <tr>
        <td>layout</td>
        <td>Set the types you want to select, 1.17.0+</td>
        <td>Array</td>
        <td> 'year', 'quarter', 'month', 'week', 'date', 'customize'</td>
        <td>[ 'year', 'quarter', 'month', 'week', 'date', 'customize']</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>1.24.0+</td>
        <td>Stirng</td>
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end
        </td>
        <td>bottom-start</td>
      </tr>
    </table>

    <h3>DateRangePicker Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>input</td>
        <td>Data changes</td>
      </tr>
      <tr>
        <td>change</td>
        <td>Data changes</td>
      </tr>
      <tr>
        <td>confirm</td>
        <td>Click OK button</td>
      </tr>
      <tr>
        <td>clear</td>
        <td>Click on the clear button</td>
      </tr>
    </table>
  </div>
</template>
