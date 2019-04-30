<template>
  <div class="doc">
    <h2>Tree</h2>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-tree</code>. </p>
    <h3>Basic</h3>
    <p>The basic data fields: <code>keyName</code>, <code>parentName</code>, <code>titleName</code>。</p>
    <p>Set the data mode: <code>dataMode</code>, When the data passed is a list with key and parent fields, then the <code>list</code>component will automatically calculate the tree model according to the key and parent fields (parent can be an array correspondence). If the data passed is a tree model, Then pass it <code>tree</code>。</p>
    <exampleEn demo="plugins/tree1"></exampleEn>

    <h3>Multiple selection, select mode ALL</h3>
    <p><code>chooseMode</code>: all, only the parent is selected when the subset is selected. If the parent selects, the return data only returns the parent and the subset does not return.</p>
    <exampleEn demo="plugins/tree2"></exampleEn>

    <h3>Multiple choices, the selection mode is SOME</h3>
    <p><code>chooseMode</code>: some, as long as the subset is selected, the parent is selected and the returned data is all the selected data.</p>
    <exampleEn demo="plugins/tree3"></exampleEn>

    <h3>Multiple selections, the selection mode is INDEPENDENT</h3>
    <p><code>chooseMode</code>: independent, The choice of the parent's children is irrelevant, and the selected data is returned in the end.</p>
    <exampleEn demo="plugins/tree8"></exampleEn>

    <h3>Search and customization</h3>
    <exampleEn demo="plugins/tree4"></exampleEn>

    <h3>All data is loaded asynchronously</h3>
    <p>In the passed param parameter, define the field: <code>getTotalDatas</code>, Get the data returned asynchronously, where the data is returned once.</p>
    <exampleEn demo="plugins/tree5"></exampleEn>

    <h3>Step-by-step asynchronous loading</h3>
    <p>In the passed param parameter, define the field: <code>getDatas</code>. Get the data returned asynchronously, where the data belongs to each level returned.</p>
    <p>Asynchronous step-by-step loading is not recommended <code>multiple</code>. For step-by-step asynchronous loading, use a single selection mode.</p>
    <exampleEn demo="plugins/tree6"></exampleEn>

    <h3>Global configuration</h3>
    <exampleEn demo="plugins/tree7"></exampleEn>

    <h3>Tree Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>chooseMode</td>
        <td>Checkbox selection mode</td>
        <td>String</td>
        <td>all, some, independent</td>
        <td>all</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>multiple</td>
        <td>Multiple choice</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>filterable</td>
        <td>filterable</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>config</td>
        <td>Using the global configuration method</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>toggleOnSelect</td>
        <td>Whether to collapse the content when the text is selected</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectOnClick</td>
        <td>Whether to select when clicking on the whole line</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>className</td>
        <td>theme, 1.17.0+</td>
        <td>String</td>
        <td>h-tree-theme-item-selected, h-tree-theme-row-selected</td>
        <td>h-tree-theme-item-selected</td>
      </tr>
    </table>

    <h3>Tree Method</h3>
    <table class="table">
      <tr>
        <th>Method</th>
        <th>Description</th>
        <th>Parameters</th>
        <th>Return</th>
      </tr>
      <tr>
        <td>updateChoose</td>
        <td>Update selected value (multiple selection)</td>
        <td>(keys, updateValue = true)</td>
        <td>none</td>
      </tr>
      <tr>
        <td>getChoose</td>
        <td>Get the selected value (multiple selection)</td>
        <td>none</td>
        <td>[TreeItem]</td>
      </tr>
      <tr>
        <td>updateSelect</td>
        <td>Update selected value (single selection)</td>
        <td>(keys, updateValue = true)</td>
        <td>none</td>
      </tr>
      <tr>
        <td>getSelect</td>
        <td>Get the selected value (single selection)</td>
        <td>none</td>
        <td>TreeItem</td>
      </tr>
      <tr>
        <td>getFullChoose</td>
        <td>Get all selected values (multiple choices)</td>
        <td>none</td>
        <td>[TreeItem]</td>
      </tr>
      <tr>
        <td>chooseAll</td>
        <td>Select all values (multiple choices)</td>
        <td>none</td>
        <td>none</td>
      </tr>
      <tr>
        <td>expandAll</td>
        <td>Open all folds</td>
        <td>none</td>
        <td>none</td>
      </tr>
      <tr>
        <td>expand</td>
        <td>Open folds，1.18.0+</td>
        <td>([keys])</td>
        <td>none</td>
      </tr>
      <tr>
        <td>foldAll</td>
        <td>Collapse all folds</td>
        <td>none</td>
        <td>none</td>
      </tr>
      <tr>
        <td>refresh</td>
        <td>refresh tree</td>
        <td>none</td>
        <td>none</td>
      </tr>
      <tr>
        <td>updateTreeItem</td>
        <td>update TreeItem, 1.17.0+</td>
        <td>(key, { title: '' })</td>
        <td>none</td>
      </tr>
      <tr>
        <td>appendTreeItem</td>
        <td>append TreeItem, 1.17.0+</td>
        <td>(parentkey, { id: '', title: '' })</td>
        <td>none</td>
      </tr>
      <tr>
        <td>removeTreeItem</td>
        <td>remove TreeItem, 1.17.0+</td>
        <td>(key)</td>
        <td>none</td>
      </tr>
    </table>

    <h3>Tree Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>input</td>
        <td>The v-model value changes</td>
      </tr>
      <tr>
        <td>choose</td>
        <td>Checkbox selection change</td>=
      </tr>
      <tr>
        <td>select</td>
        <td>Tree's select change</td>=
      </tr>
      <tr>
        <td>open</td>
        <td>When the tree opens change</td>=
      </tr>
      <tr>
        <td>loadDataSuccess</td>
        <td>When the asynchronous data load is successful.</td>
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
        <td>-</td>
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

    <h3>Slot</h3>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Parameters</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>item</td>
        <td>item：TreeItem data</td>
        <td>content render, 1.17.0+</td>
      </tr>
    </table>
  </div>
</template>
