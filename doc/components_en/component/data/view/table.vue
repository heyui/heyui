<template>
  <div class="doc">
    <h2>Table</h2>
    <p>It is mainly used to display a large amount of structured data.</p>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-table</code>. </p>

    <h3>Columns definition mode</h3>
    <example demo="view/table1"></example>

    <h3>TableItem definition mode</h3>
    <example demo="view/table2"></example>

    <h3>Sort and loading</h3>
    <p>Set <code>sort</code> to <code>true</code> for Column, then use custom sort to adjust data according to sort event.</p>
    <p>Set <code>sort</code> to <code>auto</code> for Column, you can use data sorting by default.</p>
    <p>use <code>loading</code> to set up the load effect of the data.</p>
    <example demo="view/table5"></example>

    <h3>Table open/hide row</h3>
    <p>To a setting rows of data <code>_expand</code> is true, the current row can be expanded by default</p>
    <example demo="view/table6"></example>
<!--     
    <h3>自定义模式</h3>
    <example demo="view/table5"></example> -->

    <h3>Table fixed column</h3>
    <p class="tip">Fixed height and width, automatic scrolling when internal content is exceeded.</p>
    <example demo="view/table3"></example>
  
    <h3>Table select line</h3>
    <example demo="view/table4"></example>

    <h3>Table bubble tips</h3>
    <example demo="view/table7"></example>

    <h3>Table 参数</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>columns</td>
        <td>Define the column of the table</td>
        <td>Array</td>
        <td>-</td>
        <td>[Column]</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>The list shows the required data</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>height</td>
        <td>Table fixed height</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checkbox</td>
        <td>Whether to use the checkbox selector</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>stripe</td>
        <td>Table using a grid background</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>


    <h3>Column Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>title</td>
        <td>Define the header header of the table</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>Define the width of each item in the table</td>
        <td>Number</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>fixed</td>
        <td>Is it fixed column</td>
        <td>String</td>
        <td>-</td>
        <td>left, right</td>
      </tr>
      <tr>
        <td>prop</td>
        <td>Render data according to a field of data</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>

      <tr>
        <td>align</td>
        <td>Header alignment in table</td>
        <td>String</td>
        <td>left,right,center</td>
        <td>left</td>
      </tr>
      <tr>
        <td>tooltip</td>
        <td>Whether the title in the table uses a prompt box</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>Header in table uses reminder position of alert box</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>content</td>
        <td>Header in table uses the contents of the prompt box</td>
        <td>String</td>
        <td>-</td>
        <td>Use title by default</td>
      </tr>
      <tr>
        <td>sort</td>
        <td>Whether to add sort trigger</td>
        <td>Boolean, String</td>
        <td>true/auto</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectWhenClickTr</td>
        <td>When clicking on tr, trigger the checkbox switch</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>Table Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>sort</td>
        <td>Events fired when sorted</td>
      </tr>
      <tr>
        <td>select</td>
        <td>Events that fire when checkbox is changed</td>
      </tr>
      <tr>
        <td>selectAll</td>
        <td>When checkbox is selected</td>
      </tr>
      <tr>
        <td>trclick</td>
        <td>When tr is clicked</td>
      </tr>
      <tr>
        <td>trdblclick</td>
        <td>When tr is double clicked</td>
      </tr>
    </table>

    <h3>Table Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>clearSort</td>
        <td>Clear sort</td>
      </tr>
      <tr>
        <td>clearSelection</td>
        <td>Clear selected</td>
      </tr>
      <tr>
        <td>setSelection</td>
        <td>Set the selected value</td>
      </tr>
      <tr>
        <td>inverseSelection</td>
        <td>inverse selection</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
