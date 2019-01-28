<template>
  <div class="doc">
    <h2>DatePicker</h2>
    <p>The date control uses the basic date tool <a href="http://manba.ch-un.com" target="_blank">manba</a> , supports option parameters <code>start</code> and <code>end</code> uses manba date objects.</p>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-datepicker</code>. </p>

    <h3>Basic</h3>
    <div>
      <example demo="dataplugins/datepicker1"></example>
    </div>
    <h3>Disabled</h3>
    <div>
      <example demo="dataplugins/datepicker2"></example>
    </div>
    <h3>Date format customization</h3>
    <div>
      <example demo="dataplugins/datepicker3"></example>
    </div>
    <h3>Different types of selection controls</h3>
    <div>
      <example demo="dataplugins/datepicker5"></example>
    </div>
    <h3>Select Weekly</h3>
    <div>
      <example demo="dataplugins/datepicker10"></example>
    </div>
    <!-- <h3>选择季度控件</h3>
    <div>
      <example demo="dataplugins/datepicker11"></example>
    </div> -->
    <h3>Shortcuts</h3>
    <div>
      <example demo="dataplugins/datepicker6"></example>
    </div>
    <h3>Date range control</h3>
    <div>
      <example demo="dataplugins/datepicker7"></example>
    </div>
    <h3>Text selection</h3>
    <div>
      <example demo="dataplugins/datepicker8"></example>
    </div>
    <h3>Inline mode</h3>
    <div>
      <example demo="dataplugins/datepicker9"></example>
    </div>
    
    <h3>DatePicker Property</h3>
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
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>Types of component</td>
        <td>String</td>
        <td>date</td>
        <td>year, month, week, datetime, datehour</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>format</td>
        <td>Custom data format</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>hasSeconds</td>
        <td>Whether to automatically format to second when selecting date and time</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
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
        <td>readonly</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>


    <h3>DatePicker Event</h3>
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
    
    <h3>Option Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>start</td>
        <td>Starting time</td>
        <td>Function, Object, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>end</td>
        <td>End Time</td>
        <td>Function, Object, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>No date selectable</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>shortcuts</td>
        <td>Custom shortcuts</td>
        <td>[Object]</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
