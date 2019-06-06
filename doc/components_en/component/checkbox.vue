<template>
  <div class="doc">
    <h2>Checkbox</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-checkbox</code>. </p>

    <h3>Basic</h3>
    <exampleEn demo="form/checkbox1"></exampleEn>

    <h3>Single Component</h3>
    <p>当使用<code>value</code>属性时，<code>checkbox</code>将作为单个<code>checkbox</code>使用。</p>
    <exampleEn demo="form/checkbox2"></exampleEn>

    <h3>Component</h3>
    <p>It is recommended to use the data mode radio selector, and use js to implement the entire interaction with higher compatibility. </p>
    <p>For the resolution of the object array, the system uses <code>key</code>, <code>title</code> by default. Two parameter names can be modified through global configuration. For details, see <router-link to="/en/component/config">Global Configuration</router-link>.</p>
    <exampleEn demo="form/checkbox3"></exampleEn>

    <h3>Custom Show</h3>
    <exampleEn demo="form/checkbox5"></exampleEn>

    <h3>Use dictionary</h3>
    <p>Hey UI will provide a data dictionary system call, and built-in <code>dictMapping</code>methods to display. For details, go to <router-link to="/en/component/config">Global Configuration</router-link>。</p>
    <exampleEn demo="form/checkbox4"></exampleEn>

    <h3>Checkbox Property</h3>
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
        <td>Data Dictionary</td>
        <td>Array,Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>dict</td>
        <td>Call the configured dictionary library. For details, please go to <router-link to="/en/component/config">Global Configuration</router-link></td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>disabled</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>checked</td>
        <td>checked state</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>indeterminate</td>
        <td>indeterminate state</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
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
      <tr>
        <td>trueValue</td>
        <td>true value, use === compare</td>
        <td>-</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>falseValue</td>
        <td>false value, use === compare</td>
        <td>-</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Radio Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>change</td>
        <td>When data changed</td>
        <td>v-model value</td>
      </tr>
    </table>
  </div>
</template>
