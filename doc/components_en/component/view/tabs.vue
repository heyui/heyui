<template>
  <div class="doc">
    <h2>Tabs</h2>

    <h3>Basic</h3>
    <p>The Tabs control only supports simple tab generation and click toggle. Default use <code>h-tabs-default</code> class, you can do custom Tabs.</p>
    <p>When tab selected add class <code>h-tabs-selected</code></p>
    <example demo="view/tabs1"></example>

    <h3>Use built-in class 2</h3>
    <example demo="view/tabs2"></example>

    <h3>Use built-in class 3</h3>
    <example demo="view/tabs3"></example>

    <h3>Custom style</h3>
    <example demo="view/tabs4"></example>
    <p>style：</p>
    <codes src="/codes/tabs.txt" type="less"></codes>

    <h3>Custom Tabs</h3>
    <example demo="view/tabs5"></example>

    <h3>Tabs Property</h3>
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
        <td>datas</td>
        <td>Array, Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>dict</td>
        <td>use the globally defined dictionary</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>Key field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>title field name for data</td>
        <td>String</td>
        <td>-</td>
        <td>config <code>dict.titleName</code></td>
      </tr>
    </table>

    <h3>Tabs Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>datas</th>
      </tr>
      <tr>
        <td>change</td>
        <td>Toggle Tab triggered events</td>
      </tr>
      <tr>
        <td>click</td>
        <td>Click Tab triggered event</td>
      </tr>
    </table>

  </div>
</template>