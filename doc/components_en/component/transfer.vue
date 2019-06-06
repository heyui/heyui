<template>
  <div class="doc">
    <h2>Transfer</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-transfer</code>. </p>

    <h3>Basic use</h3>
    <exampleEn demo="view/transfer1"></exampleEn>
    <h3>Filter</h3>
    <exampleEn demo="view/transfer2"></exampleEn>
    <h3>Custom definition</h3>
    <exampleEn demo="view/transfer3"></exampleEn>

    <h3>Transfer Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>

      <tr>
        <td>datas</td>
        <td>data could be selected in left column</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>Use to unique option</td>
        <td>String</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>Transfer Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Data</th>
      </tr>
      <tr>
        <td>init</td>
        <td>The component inited trigger</td>
        <td>Source data and target data</td>
      </tr>
      <tr>
        <td>transfer</td>
        <td>The transfer happend trigger</td>
        <td>Tranfer direction, source data, target data</td>
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
        <td>filterable</td>
        <td>Whether filter support</td>
        <td>Boolean</td>
        <td>true, false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Placeholder for filter input</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>render</td>
        <td>Determine the source/target display content</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltHeadText, rtHeadText</td>
        <td>Source/target head text</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltText, rtText</td>
        <td>Switch text</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltIcon, rtIcon</td>
        <td>Switch text</td>
        <td>String</td>
        <td>-</td>
        <td>h-icon-left, h-icon-right</td>
      </tr>
    </table>

    <h3>Slot Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>sourceHeader</td>
        <td>Source header</td>
      </tr>
      <tr>
        <td>targetHeader</td>
        <td>Target header</td>
      </tr>
      <tr>
        <td>item</td>
        <td>Source/target item</td>
      </tr>
    </table>
  </div>
</template>
