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
    <p>编写的代码，请严格按照style, template, script模式编写。</p>
    <p>Write the code in strict accordance with style, template, script mode.</p>
    <p>在script标签中，不允许使用其他的代码方式，只允许使用以下方式定义： </p>
    <p>In script tags, no other code is allowed, only the following ways are allowed to define:</p>
    <codes type="javascript">export default {
    data: function () {
      return {
        loading1:false,
        loading2:false
      }
    }
  }</codes>

    <p>请注意，以下情况会导致代码编译错误：</p>
    <p>Note that the following can lead to code compilation errors:</p>

    <p>使用import / Use import</p>
    <codes type="javascript">import jsonp from 'fetch-jsonp';</codes>

    <p>定义外部Function / Define Function outside</p>

    <codes type="javascript">const loadData = function (filter, callback) {
jsonp(`https://suggest.taobao.com/sug?code=utf-8&q=${filter}`)
  .then(response => response.json())
  .then(d => {
    callback(
      d.result.map(r => {
        return {
          name: r[0],
          code: r[1] + Math.random()
        };
      })
    );
  });
};</codes>
</template>
  </div>
</template>
<script>
export default {
  props: {
    err: String
  },
  data() {
    return {

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
