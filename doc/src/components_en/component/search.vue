<template>
  <div class="doc">
    <h2>Search Input</h2>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-search</code>. </p>
    <h3>Basic</h3>
    <p>Provides a simple search component package for many places.</p>
    <exampleEn demo="plugins/search1"></exampleEn>

    <h3>Query component with search button</h3>
    <exampleEn demo="plugins/search2"></exampleEn>

    <h3>Custom style</h3>
    <exampleEn demo="plugins/search3"></exampleEn>

    <h3>Search Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>position</td>
        <td>Search Icon display location</td>
        <td>String</td>
        <td>-</td>
        <td>end</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>placeholder</td>
        <td>String</td>
        <td>-</td>
        <td>search...</td>
      </tr>
      <tr>
        <td>block</td>
        <td>display: block</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>showSearchButton</td>
        <td>Whether show search button</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>searchText</td>
        <td>Search button text</td>
        <td>String</td>
        <td>-</td>
        <td>Search</td>
      </tr>
      <tr>
        <td>triggerType</td>
        <td>Query trigger type</td>
        <td>String</td>
        <td>enter, input</td>
        <td>enter</td>
      </tr>
      <tr>
        <td>height</td>
        <td>Setting height of search input, 1.19.0+</td>
        <td>Number</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>Setting width of search input, 1.19.0+</td>
        <td>Number</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>Search Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>search</td>
        <td>The event that triggered the query</td>
      </tr>
      <tr>
        <td>input</td>
        <td>Event that triggers an input value change</td>
      </tr>
    </table>
  </div>
</template>
