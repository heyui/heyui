<template>
  <div class="doc">
    <h2>Table</h2>
    <p>It is mainly used to display a large amount of structured data.</p>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-table</code>. </p>

    <!-- <h3>Columns definition mode</h3>
    <exampleEn demo="view/table1"></exampleEn> -->

    <h3>Basic</h3>
    <exampleEn demo="view/table2"></exampleEn>

    <h3>Data render</h3>
    <ul class="text-ul">
      <li><code>unit</code>: setting data unit</li>
      <li><code>dict</code>: use dict render data</li>
      <li><code>render</code>: define render function</li>
    </ul>
    <exampleEn demo="view/table9"></exampleEn>

    <h3>Sort and loading</h3>
    <p>Set <code>sort</code> to <code>true</code> for Column, then use custom sort to adjust data according to sort event.</p>
    <p>Set <code>sort</code> to <code>auto</code> for Column, you can use data sorting by default.</p>
    <p>use <code>loading</code> to set up the load effect of the data.</p>
    <exampleEn demo="view/table5"></exampleEn>

    <h3>Table open/hide row</h3>
    <p>To a setting rows of data <code>_expand</code> is true, the current row can be expanded by default</p>
    <exampleEn demo="view/table6"></exampleEn>
<!--
    <h3>自定义模式</h3>
    <exampleEn demo="view/table5"></exampleEn> -->

    <h3>Table fixed column</h3>
    <p class="tip">Fixed height and width, automatic scrolling when internal content is exceeded.</p>
    <exampleEn demo="view/table3"></exampleEn>

    <h3>Table choose lines</h3>
    <exampleEn demo="view/table4"></exampleEn>

    <h3>Table select line</h3>
    <exampleEn demo="view/table10"></exampleEn>

    <h3>Table bubble tips and custom style</h3>
    <exampleEn demo="view/table7"></exampleEn>

    <h3>Custom table header</h3>
    <exampleEn demo="view/table8"></exampleEn>

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
        <td>border</td>
        <td>table has border</td>
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
      <tr>
        <td>selectRow</td>
        <td>Whether to use row select.</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectWhenClickTr</td>
        <td>When clicking on tr, trigger the checkbox switch</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>sortProp</td>
        <td>sort prop，when sortProp is null，use prop, <code>1.16.0+</code></td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>getTrClass</td>
        <td>get row style,1.19.2+</td>
        <td>Function(data, index)</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>TableItem / Column Property</h3>
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
        <td>Boolean, Object</td>
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
        <td>dict</td>
        <td>use dict render data</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>unit</td>
        <td>setting data unit</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>render</td>
        <td>define render function</td>
        <td>Function</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>className</td>
        <td>Define column style,1.19.2+</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>Table Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>sort</td>
        <td>Events fired when sorted</td>
        <td>{type: [asc|desc], prop: String}</td>
      </tr>
      <tr>
        <td>select</td>
        <td>Events that fire when checkbox is changed</td>
        <td>checks</td>
      </tr>
      <tr>
        <td>selectAll</td>
        <td>When checkbox is selected</td>
        <td>checks</td>
      </tr>
      <tr>
        <td>trclick</td>
        <td>When tr is clicked</td>
        <td>(data, event, index)</td>
      </tr>
      <tr>
        <td>trdblclick</td>
        <td>When tr is double clicked</td>
        <td>(data, event, index)</td>
      </tr>
      <tr>
        <td>rowSelect</td>
        <td>When tr is selected</td>
        <td>data</td>
      </tr>
    </table>

    <h3>Table Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Parameter</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>clearSort</td>
        <td>Clear sort</td>
        <td>Empty</td>
        <td>Empty</td>
      </tr>
      <tr>
        <td>clearSelection</td>
        <td>Clear selected</td>
        <td>Empty</td>
        <td>Empty</td>
      </tr>
      <tr>
        <td>setSelection</td>
        <td>Set the selected value</td>
        <td>data</td>
        <td>Empty</td>
      </tr>
      <tr>
        <td>getSelection</td>
        <td>get selected values</td>
        <td>Empty</td>
        <td>checks: Array</td>
      </tr>
      <tr>
        <td>invereSelection</td>
        <td>inverse selection</td>
        <td>Empty</td>
        <td>Empty</td>
      </tr>
      <tr>
        <td>triggerSort</td>
        <td>Set sort, trigger sort event when triggerType is true, and sort automatically when triggerType is auto, <code>1.16.0+</code></td>
        <td>sortStatus: {prop: String, type: String['asc'|'desc'] }, triggerType: true | 'auto' | false</td>
        <td>Empty</td>
      </tr>
    </table>

  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
  }
};
</script>
