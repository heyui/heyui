<template>
  <div class="doc">
    <h2>Menu</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-menu</code>. </p>
    <h3>Basic</h3>
    <p>The selected method is mainly focused on <code>vue-router</code> the selection logic of a single page application. </p>
    <example demo="view/menu1"></example>

    <p>code with <code>vue-router</code>：</p>
    <codes src="/codes/menu1.txt" type="javascript"></codes>

    <h3>White Theme</h3>
    <example demo="view/menu2"></example>

    <h3>Customize</h3>
    <p>This style is your own set of class, you can make any adjustments.</p>
    <example demo="view/menu3"></example>
    <p>style：</p>
    <codes src="/codes/menu.txt" type="less"></codes>

    <h3>Menu Property</h3>
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
        <td>Data of menu</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>option</td>
        <td>Configuration items, see the options below for details</td>
        <td>Object</td>
        <td>-</td>
        <td>Global configuration <code>config.menu</code></td>
      </tr>
      <tr>
        <td>className</td>
        <td>Custom class</td>
        <td>string</td>
        <td>-</td>
        <td>h-menu-dark</td>
      </tr>
      <tr>
        <td>accordion</td>
        <td>use accordion mode</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>inlineCollapsed</td>
        <td>use collapsed mode</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Menu Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>click</td>
        <td>Menu click event</td>
      </tr>
      <tr>
        <td>select</td>
        <td>Menu selected event</td>
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
        <td>titleName</td>
        <td>Menu's data titleName</td>
        <td>String</td>
        <td>-</td>
        <td>title</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>Menu's data keyName</td>
        <td>String</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>childrenName</td>
        <td>Menu's data childrenName</td>
        <td>String</td>
        <td>-</td>
        <td>children</td>
      </tr>
    </table>
  </div>
</template>