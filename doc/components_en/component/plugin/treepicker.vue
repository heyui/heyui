<template>
  <div class="doc">
    <h2>TreePicker</h2>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-treepicker</code>. </p>
    <h3>Basic</h3>
    <exampleEn demo="plugins/treepicker1"></exampleEn>

    <h3>Multiple</h3>
    <exampleEn demo="plugins/treepicker2"></exampleEn>

    <h3>Custom theme</h3>
    <exampleEn demo="plugins/treepicker4"></exampleEn>

    <h3>Global configuration</h3>
    <blockquote>Using the configuration items in treeconfig</blockquote>
    <exampleEn demo="plugins/treepicker3"></exampleEn>

    <h3>TreePicker Property</h3>
    <blockquote>multiple, option, config, filterable, etc. configuration reference tree configuration</blockquote>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>multiple</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>The type of the model, note: key mode does not support the initialization of incoming data, because the corresponding title does not show up</td>
        <td>key, object</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>chooseMode</td>
        <td>Choose type, please refer to the tree's documentation</td>
        <td>all, some</td>
        <td>-</td>
        <td>all</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Show the default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>please select</td>
      </tr>
      <tr>
        <td>toggleOnSelect</td>
        <td>Whether to collapse the content when the text is selected</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>className</td>
        <td>Custom className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
    </table>

    <h3>TreePicker Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>updateShow</td>
        <td>Since the tree is mostly loaded with data asynchronously, it can be used to update the displayed text</td>
      </tr>
      <tr>
        <td>getChoose</td>
        <td>Get the selected value (multiple selection)</td>
      </tr>
      <tr>
        <td>getSelect</td>
        <td>Get the selected value (single selection)</td>
      </tr>
      <tr>
        <td>getFullChoose</td>
        <td>Get all selected values (multiple choices)</td>
      </tr>
      <tr>
        <td>chooseAll</td>
        <td>Select all values (multiple choices)</td>
        <td></td>
      </tr>
      <tr>
        <td>refresh</td>
        <td>refresh view</td>
        <td></td>
      </tr>
    </table>

    <h3>option Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>keyName</td>
        <td>The key field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>The title field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.titleName</code></td>
      </tr>
      <tr>
        <td>parentName</td>
        <td>The parent field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.parentName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>The children field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>tree.default.childrenName</code></td>
      </tr>
      <tr>
        <td>dataMode</td>
        <td>The type of data provided is whether the tile needs to be parsed or whether tree data has already been generated.</td>
        <td>String</td>
        <td>list, tree</td>
        <td>list</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>Data for tree display</td>
        <td>Array, Function</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>getTotalDatas</td>
        <td>Acquiring data for tree display asynchronously, loading all at once</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>getDatas</td>
        <td>Asynchronously fetches the data for the tree display, each click to get a subset</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
