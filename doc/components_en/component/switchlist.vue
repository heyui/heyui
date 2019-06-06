<template>
  <div class="doc">
    <h2>SwitchList</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-switchlist</code>. </p>
    <h3>Basic</h3>
    <p>Use <code>v-model</code> and <code>datas</code> parameters to complete the whole call.</p>
    <exampleEn demo="form/switchlist1"></exampleEn>

    <h3>Disabled</h3>
    <exampleEn demo="form/switchlist2"></exampleEn>

    <h3>Smaller size</h3>
    <p>Use <code>small</code> parameter defines a smaller size SwitchList.</p>
    <exampleEn demo="form/switchlist3"></exampleEn>

    <h3>Data dictionary</h3>
    <p>Hey UI will provide a data dictionary call model, and built-in <code>dictMapping</code> methods to display. For details, go to <router-link to="/en/component/config">Global Configuration</router-link>.</p>
    <exampleEn demo="form/switchlist4"></exampleEn>

    <h3>SwitchList Property</h3>
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
        <td>Call the configured dictionary library. For details, please go to the <router-link to="/en/component/config">Global Configuration</router-link></td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>small</td>
        <td>Smaller size</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
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
    </table>

    <h3>SwitchList Event</h3>
    <table class="table">
      <tr>
        <th>Event</th>
        <th>Description</th>
        <th>Return Value</th>
      </tr>
      <tr>
        <td>change</td>
        <td>When data changed</td>
        <td>total object value</td>
      </tr>
      <tr>
        <td>input</td>
        <td>When data changed</td>
        <td>v-model value</td>
      </tr>
    </table>
  </div>
</template>
