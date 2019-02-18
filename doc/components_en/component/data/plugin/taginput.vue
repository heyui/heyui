<template>
  <div class="doc">
    <h2>TagInput</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-taginput</code>. </p>
    <h3>Basic</h3>
    <example demo="dataplugins/taginput1"></example>

    <h3>String split</h3>
    <example demo="dataplugins/taginput3"></example>
  
    <h3>Readonly</h3>
    <example demo="dataplugins/taginput2"></example>
  
    <h3>TagInput Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>readonly</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>Limit the length of the input</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>wordlimit</td>
        <td>Limit the text input length of each tag</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Input prompt</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>type of data</td>
        <td>String</td>
        <td>Array, String</td>
        <td>Array</td>
      </tr>
    </table>

    <h3>TagInput Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>input</td>
        <td>When data changed</td>
        <td>v-model value</td>
      </tr>
      <tr>
        <td>change</td>
        <td>When data changed</td>
        <td>total object value</td>
      </tr>
    </table>
  </div>
</template>
