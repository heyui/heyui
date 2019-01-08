<template>
  <div class="doc">
    <h2>Collapse</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-collapse</code>.</p>

    <h3>Basic</h3>
    <p>Multiple panels can be expanded simultaneously without affecting each other.</p>
    <example demo="view/collapse1"></example>

    <h3>Accordion</h3>
    <p>In this mode, you can only spread one panel each time.</p>
    <example demo="view/collapse2"></example>

    <h3>Custom title</h3>
    <p>Besides using the <code>title</code> attribute, you can customize panel title with named slots, which makes adding custom content, e.g. icons, possible.</p>
    <example demo="view/collapse3"></example>

    <h3>Collapse Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>value</td>
        <td>The name of the activited panel. Use v-model to enable a two-way binding</td>
        <td>Array, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>accordion</td>
        <td>Enable accordion effect or not. In this mode, you can only spread one panel each time</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Collapse Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>change</td>
        <td>Emit when panel is switched. Return the key of the spread panel(s) in an array</td>
        <td>[]</td>
      </tr>
    </table>

    <h3>Collapse Item Property</h3>
    <table class="table">
      <tr>
        <th>Property</th>
        <th>Description</th>
        <th>Type</th>
        <th>Optional</th>
        <th>Default</th>
      </tr>
      <tr>
        <td>name</td>
        <td>The name of current panel, corresponds with <code>value</code> of Collapse. Index value will be used if not filled</td>
        <td>String, Number</td>
        <td>-</td>
        <td>index</td>
      </tr>
      <tr>
        <td>title</td>
        <td>Title of the panel</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>CollapseItem Slot</h3>
    <table class="table">
      <tr>
        <th>Name</th>
        <th>Description</th>
      </tr>
      <tr>
        <td>title</td>
        <td>Header of the panel</td>
      </tr>
      <tr>
        <td>-</td>
        <td>Description content</td>
      </tr>
    </table>
  </div>
</template>