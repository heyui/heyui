<template>
  <div class="doc">
    <h2>Select</h2>
    <p class="component-name-tip">In non-string templates，it is necessary to use <code>h-select</code>. </p>
    <h3>Normal</h3>
    <p>For the resolution of the object array, the system uses <code>key</code>, <code>title</code> by default. Two parameter names can be modified through global configuration. For details, see <router-link to="/en/component/config">Global Configuration</router-link>.</p>
    <blockquote>Note: If datas is passed with <code>{ 1:'a', 2:'b' }</code>this number key, the selected key value will be converted to String. It is recommended to use the <code>[{ key: 1, title: 'a' }]</code>object data mode.</blockquote>
    <exampleEn demo="dataplugins/select1"></exampleEn>

    <h3>Custom style</h3>
    <p>Define<code>className</code> parameter.</p>
    <exampleEn demo="dataplugins/select13"></exampleEn>

    <h3>Special options</h3>
    <exampleEn demo="dataplugins/select15"></exampleEn>

    <h3>Select Group</h3>
    <exampleEn demo="dataplugins/select14"></exampleEn>

    <h3>Custom content</h3>
    <exampleEn demo="dataplugins/select7"></exampleEn>

    <h3>Disabled</h3>
    <exampleEn demo="dataplugins/select10"></exampleEn>

    <h3>There is no default "Please select" option</h3>
    <exampleEn demo="dataplugins/select2"></exampleEn>

    <h3>Multiple</h3>
    <exampleEn demo="dataplugins/select3"></exampleEn>

    <h3>Select object value</h3>
    <exampleEn demo="dataplugins/select4"></exampleEn>

    <h3>Multiple choice object values</h3>
    <exampleEn demo="dataplugins/select5"></exampleEn>

    <h3>Limit</h3>
    <p>Up to 2 selected</p>
    <exampleEn demo="dataplugins/select6"></exampleEn>

    <h3>Filterable</h3>
    <exampleEn demo="dataplugins/select11"></exampleEn>

    <h3>Filterable Multiple choice</h3>
    <exampleEn demo="dataplugins/select12"></exampleEn>

    <h3>Use dictionary</h3>
    <p>Hey UI will provide a data dictionary system call, and built-in <code>dictMapping</code>methods to display. For details, go to <router-link to="/en/component/config">Global Configuration</router-link>。</p>
    <exampleEn demo="dataplugins/select8"></exampleEn>

    <h3>Text Style</h3>
    <exampleEn demo="dataplugins/select9"></exampleEn>

    <h3>Select Property</h3>
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
        <td>multiple</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>The format of the data</td>
        <td>String</td>
        <td>key, object</td>
        <td>key</td>
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
        <td>limit</td>
        <td>Limit how many can only be selected</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>nullOption</td>
        <td>Is there a "Please select" option</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>nullOptionText</td>
        <td>"Please select" text option</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
      <tr>
        <td>filterable</td>
        <td>filterable</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>autosize</td>
        <td>Whether to adapt the width according to the text</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>optionRender</td>
        <td>Dropdown menu display customization</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>Show the default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>please choose</td>
      </tr>
      <!-- <tr>
        <td>searchPlaceHolder</td>
        <td>Search default prompt</td>
        <td>String</td>
        <td>-</td>
        <td>请输入筛选文本</td>
      </tr> -->
      <tr>
        <td>equalWidth</td>
        <td>Whether the width of the dropdown is consistent with the input box</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>className</td>
        <td>Custom className</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>emptyContent</td>
        <td>No prompt for search value</td>
        <td>String</td>
        <td>-</td>
        <td>no results found</td>
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

    <h3>Select Event</h3>
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

    <h3>Select slot</h3>
    <table class="table">
      <tr>
        <th>name</th>
        <th>说明</th>
        <th>传递值</th>
      </tr>
      <tr>
        <td>show</td>
        <td>Custom value show, 1.20.0+</td>
        <td>{ value }</td>
      </tr>
      <tr>
        <td>top</td>
        <td>Custom header</td>
        <td></td>
      </tr>
      <tr>
        <td>bottom</td>
        <td>Custom footer</td>
        <td></td>
      </tr>
      <tr>
        <td>item</td>
        <td>Custom list item</td>
        <td>{ item }</td>
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
  },
  components: {}
};
</script>
