<style lang='less'>
</style>
<template>
  <div class="">
    <p>编译出现错误，请检查您的代码是否存在问题。 </p>
    <p>An error occurred in the compilation. Please check if there is a problem with your code.</p>
    <p v-if="err" class="red-color">报错信息 Error Message：</p>
    <pre v-if="err" class="red-color">{{err}}</pre>
    <template v-else>
    <h3>Run系统使用注意事项：</h3>
    <p>Notes for Run System Use:</p>
    <p>1、请确保您在chrome等现代浏览器中执行。 </p>
    <p>Please make sure you execute in modern browsers such as Chrome browser.</p>
    <p>2、编写的代码，请严格按照style, template, script模式编写。</p>
    <p>Write the code in strict accordance with style, template, script mode.</p>

<codes type="html" :content="sample"></codes>
    <p>3、less 中可以使用全局less变量</p>
    <p>具体的参数请参考：<a href="https://www.heyui.top/component/themes#%E5%85%A8%E5%B1%80%E5%8F%98%E9%87%8F%E8%AF%B4%E6%98%8E">主题全局变量</a></p>

    <p class="red-color">请注意，以下情况会导致代码编译错误：</p>
    <p>Note that the following can lead to code compilation errors:</p>

    <p>使用import / Use import</p>
    <codes type="javascript">import jsonp from 'fetch-jsonp';</codes>
</template>
  </div>
</template>
<script>
import sample from '../js/example';
export default {
  props: {
    err: String
  },
  data() {
    return {
      sample
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
