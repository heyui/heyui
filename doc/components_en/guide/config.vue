<template>
  <div class="doc">
    <h2>Configuration</h2>
    <p>Global configuration is the most powerful feature of <code>HeyUI</code>.</p>
    <p>In the process of development, set a complete dictionary library. In business development, you only need to use the key of the dictionary.</p>
    <p>Centralized configuration of autocomplete, tree and other complex components. In the specific page, we only need to use the config key to complete the call.</p>

    <h3>Global dictionary</h3>
    <p>Our overall design is driven by data-driven interaction. In the interactive process of data, simple input inputs are removed, and most of them are dictionary selections.</p>
    <h4>Configure the dictionary</h4>
    <p>For the dictionary used in the system, we have two ways to define the dictionary.</p>
    <ul class="text-ul">
      <li><code>HeyUI.initDict({key: value})</code>: Initialize Dictionary Object</li>
      <li><code>HeyUI.addDict(key, value)</code> Add dictionary</li>
    </ul>

    <p>Correspondingly, we also provide methods for obtaining dictionary values.</p>
    <ul class="text-ul">
      <li><code>HeyUI.getDict(key)</code>: Get dictionary value</li>
    </ul>

    <h4>Application Dictionary</h4>
    <p>In some of the data shown, we need to use <code>key/keys</code> to get the corresponding text.</p>
    <ul class="text-ul">
      <li>use filter<code v-html="'{{value | dictMapping(key)}}'"></code>: Display Corresponding Text</li>
      <li><code v-html="'HeyUI.dictMapping(value, key, connector)'"></code>: Display Corresponding Text</li>
    </ul>

    <h4>Dictionary Apps - Components</h4>
    <p>We standardize the dictionary, controls can be driven by the dictionary's key, and the interaction is nothing more than to select different types of interaction through different amounts of data.</p>
    <ul class="text-ul">
      <li>1~5 options radio: <code>Radio</code>, or <code>Select</code></li>
      <li>1~5 multiple choices: <code>Checkbox</code>, or <code>Select</code>(multiple)</li>
      <li>5~15 options radio/multiple choice: <code>Select</code></li>
      <li>15~40 options radio/multiple choice: <code>Select</code>(filterable), or <code>AutoComplete</code></li>
      <li>More than 40 or need remote fuzzy query: <code>AutoComplete</code></li>
    </ul>

    <h4>Example</h4>
    <exampleEn demo="basic/demo2"></exampleEn>

    <h3>Global configuration parameters</h3>
    <p>By <code>HeyUI</code> configured globally for some parameters, specific reference configuration items: <a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></p>
    <ul class="text-ul">
      <li><code>HeyUI.config(key, value)</code>: Set the configuration, which <code>key</code>can be a path mode. Example:<code>tree.default</code></li>
      <li><code>HeyUI.getOption(key)</code>: Get the configuration.</li>
    </ul>

    <h4>Configure the dict structure</h4>
    <p>Set the global dictionary <code>key</code>,<code>value</code> naming.</p>
<codes type="javascript">HeyUI.config('dict.keyName', "key");
HeyUI.config('dict.titleName', "title");</codes>
    <h4>Example Tree</h4>
    <p>For system configuration, please refer to demo's <a target="_blank" href="https://github.com/heyui/heyui-admin/blob/master/src/js/config/tree-config.js">tree-config.js</a>。</p>
    <exampleEn demo="plugins/tree7"></exampleEn>

    <h4>Example Autocomplete</h4>
    <p>For system configuration, please refer to demo's <a target="_blank" href="https://github.com/heyui/heyui-admin/blob/master/src/js/config/autocomplete-config.js">autocomplete-config.js</a>。</p>
    <exampleEn demo="dataplugins/autocomplete13"></exampleEn>

    <h4>uploader, menu, modal, page, datepicker</h4>
    <p>These components, we have provided some parameters can be configured, please check the <code><a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></code></p>
    <p>In practical applications, please refer to our demo system configuration. For details, please check the <a href="https://github.com/heyui/heyui-admin/tree/master/src/js/config">demo config</a>。</p>

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
  components: {
  }
};
</script>
