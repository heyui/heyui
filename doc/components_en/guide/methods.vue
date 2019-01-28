<template>
  <div class="doc">
    <h2>Global Methods</h2>

    <h3>Directive</h3>
    <p><code>v-tooltip</code>: Tips</p>
    <p><code>v-wordcount</code>: word count</p>
    <p><code>v-wordlimit</code>: limit word length</p>
    <p><code>v-autosize</code>: auto setting textarea height</p>

    <example demo="other/directive"></example>

    <h3>$Message,$Notice,$Modal,$Confirm</h3>
    <example demo="message/messageMethods"></example>
    <h3>$Clipboard</h3>
    <example demo="other/clipboard1"></example>
    <h3>$ImagePreview</h3>
    <example demo="imagepreview/imagepreview1"></example>
    <h3>$LoadingBar</h3>
    <example demo="plugins/loadingbar1"></example>
    <h3>$Loading</h3>
    <example demo="dataview/loading2"></example>
    <h3>$ScrollIntoView</h3>
    <example demo="other/scrollintoview1"></example>

    <h3>Global configuration parameters</h3>
    <p>By <code>HeyUI</code> configured globally for some parameters, specific reference configuration items: <a href="https://github.com/heyui/heyui/blob/master/src/utils/config.js" target="_blank">config.js</a></p>
    <ul class="text-ul">
      <li><code>HeyUI.config(key, value)</code>: Set the configuration, which <code>key</code>can be a path mode. Example:<code>tree.default</code></li>
      <li><code>HeyUI.getOption(key)</code>: Get the configuration.</li>
    </ul>

    <h4>Configure the dictionary</h4>
    <p>For the dictionary used in the system, we have two ways to define the dictionary.</p>
    <ul class="text-ul">
      <li><code>HeyUI.initDict({key: value})</code>: Initialize Dictionary Object</li>
      <li><code>HeyUI.addDict(key, value)</code> Add dictionary</li>
      <li><code>HeyUI.getDict(key)</code> get dictionary</li>
    </ul>

    <h4>Application Dictionary</h4>    
    <p>In some of the data shown, we need to use <code>key/keys</code> to get the corresponding text.</p>
    <ul class="text-ul">
      <li>use filter<code v-html="'{{value | dictMapping(key)}}'"></code>: Display Corresponding Text</li>
      <li><code v-html="'HeyUI.dictMapping(value, key, connector)'"></code>: Display Corresponding Text</li>
    </ul>

  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
