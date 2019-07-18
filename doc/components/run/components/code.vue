<style lang="less">
.run-code-vue{
  width: 50%;
  overflow: auto;
  position: relative;
  font-size: 13px;
}
</style>
<template>
  <div class="run-code-vue" style="width: 50%;position: relative;">
    <textarea class="form-control"></textarea>
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
    setTimeout(() => {
      this.initCode();
    }, 100);
  },

  methods: {
    initCode() {
      var myCodeMirror = CodeMirror.fromTextArea(this.$el.firstChild, {
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
      this.myCodeMirror = myCodeMirror;
    },
    getValue() {
      return this.myCodeMirror ? this.myCodeMirror.getValue() : '';
    },
    setValue(value) {
      if (this.myCodeMirror) {
        this.myCodeMirror.setValue(value);
      }
    },
    handleRun: function () {
      this.value = this.getValue();
    }
  }
};
</script>
