<template>
  <div class="doc">
    <h2>CategoryPicker </h2>
    <blockquote>1.18.0+</blockquote>

    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-categorypicker</code>. </p>

    <h3>Basic</h3>
    <p>This example provides an example of three-level address linkage, file js/locations link: <a href="https://github.com/heyui/heyui/tree/master/doc/js/locations" target="_blank">js/locations</a></p>
    <p>Whether an element can be selected can be controlled by the field selectable, checkable in the datas, or by the method of selectable and checkable in the option parameter.</p>
    <exampleEn demo="categorypicker/categorypicker1"></exampleEn>

    <h3>Config</h3>
    <p>Refer to Specific Configuration <a href="https://github.com/heyui/heyui/blob/master/doc/js/config/heyui-config.js#L102" target="_blank">heyui-config.js</a></p>
    <p>In this configuration, no selectable, checkable controls are added, so all data can be selected.</p>
    <p>This configuration uses the way of asynchronous loading, with better performance.</p>
    <exampleEn demo="categorypicker/categorypicker2"></exampleEn>

    <h3>CategoryPicker Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>type</td>
        <td>type of data</td>
        <td>String</td>
        <td>key,object</td>
        <td>key</td>
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
        <td>multiple</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>limit choose number</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>showAllLevels</td>
        <td>Whether to show all the paths</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>showChildCount</td>
        <td>Whether to show the number of sub-levels</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <!-- <tr>
        <td>filterable</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr> -->
      <tr>
        <td>config</td>
        <td>Using the global configuration parameters</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
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
        <td>Global configuration <code>categoryPicker.default.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>The title field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>categoryPicker.default.titleName</code></td>
      </tr>
      <tr>
        <td>parentName</td>
        <td>The parent field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>categoryPicker.default.parentName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>The children field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>categoryPicker.default.childrenName</code></td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>The children field name</td>
        <td>String</td>
        <td>-</td>
        <td>Global configuration <code>categoryPicker.default.childrenName</code></td>
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
      <tr>
        <td>selectable</td>
        <td>Setting which items can be selected</td>
        <td>Function(data, level)</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checkable</td>
        <td>Setting which items can be choosed</td>
        <td>Function(data, level)</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
