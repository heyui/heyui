<style lang="less">
.page-run-page {
  .right-frame {
    display: flex;
    flex-direction: column;
    padding-right: 0;
    padding-bottom: 0;
    padding-top: 60px;
  }
  .code-top-menu {
    border-bottom: 1px solid #EEE;
    padding: 10px 0;
  }

  .code-frame {
    display: flex;
    flex: 1;
    overflow: hidden;
  }
}
</style>
<template>
  <div class="page-run-page page-body com-frame">
    <div class="left-frame">

    </div>
    <div class="right-frame">
      <div class="code-top-menu">
        <Button color="primary" @click="run">运行Run</Button>
      </div>
      <div class="code-frame">
        <Code ref="codePage"></Code>
        <Preview ref="previewPage" :code="code"></Preview>
      </div>
    </div>
  </div>
</template>
<script>

import Preview from './components/preview';
import Code from './components/code';
import './js/codemirror.js';
import sample from './js/example';

export default {
  components: {
    Preview,
    Code
  },
  data() {
    return {
      code: null
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      setTimeout(() => {
        this.$refs.codePage.setValue(sample);
      }, 300);
    },
    run() {
      this.code = this.$refs.codePage.getValue();
      this.$refs.previewPage.renderCode();
    }
  },
  computed: {

  }
};
</script>
