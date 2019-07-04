<template>
  <div class="run-code-vue">
    <textarea class="form-control" id="code"></textarea>
  </div>
</template>

<script>

import CodeMirror from 'codemirror/lib/codemirror.js';

export default {
  data() {
    return {
      myCodeMirror: null,
      value: ''
    };
  },
  mounted() {
    this.initCode();
  },

  methods: {
    initCode() {
      var myCodeMirror = CodeMirror.fromTextArea(document.getElementById('code'), {
        // mode: "htmlmixed", // 支持 vue
        // lineNumbers: true, //显示行号
        // theme: "dracula", //设置主题
        // lineWrapping: true, //代码折叠
        // foldGutter: true,
        // gutters: ["CodeMirror-linenumbers", "CodeMirror-foldgutter"],
        // matchBrackets: true //括号匹配

        mode: 'htmlmixed',
        lineNumbers: true,
        // scrollbarStyle: "simple",
        autoCloseBrackets: true,
        matchBrackets: true,
        showCursorWhenSelecting: true,
        autoCloseTags: true,
        tabSize: 2,
        foldGutter: true,
        gutters: ['CodeMirror-linenumbers', 'CodeMirror-foldgutter', 'CodeMirror-lint-markers'],
        autofocus: true,
        styleActiveLine: true
      });
      // myCodeMirror.setSize("400px", "600px"); //设置代码框的长宽

      // myCodeMirror.setOption("extraKeys", {
      // 		Tab: function(e) {
      // 				var t = Array(e.getOption("indentUnit") + 1).join(" ");
      // 				e.replaceSelection(t)
      // 		}
      // })
      this.myCodeMirror = myCodeMirror;
    },
    getValue() {
      return this.myCodeMirror ? this.myCodeMirror.getValue() : '';
    },
    setValue(value) {
      this.myCodeMirror.setValue(value);
    },
    handleRun: function () {
      this.value = this.getValue();
    }
  }
};
</script>
