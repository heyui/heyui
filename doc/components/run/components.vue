<style lang="less">
.page-run-page.com-frame {
  .right-frame {
    display: flex;
    flex-direction: column;
    padding-right: 20px;
    padding-bottom: 0;
    padding-top: 60px;
    padding-left: 20px;
    left: 0;
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
    <div class="right-frame">
      <div class="code-top-menu">
        <Button color="primary" @click="run">运行Run</Button>
        <Button @click="copy">复制Copy</Button>
        <Button @click="reset">重置Reset</Button>
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
import './js/codemirror.js';
import sample from './js/example';

export default {
  components: {
    Preview,
    Code: resolve => require(['./components/code'], resolve)
  },
  data() {
    return {
      code: null
    };
  },
  mounted() {
    document.addEventListener('keydown', this.keyDownHandler, false);
    this.init();
  },
  destoryed() {
    document.removeEventListener('keydown', this.keyDownHandler, false);
  },
  methods: {
    init() {
      setTimeout(() => {
        let localCode = Utils.getLocal('RUN_CODE', this.sourcecode);
        this.$refs.codePage.setValue(localCode || sample);
        this.run();
      }, 300);
    },
    run() {
      this.code = this.$refs.codePage.getValue();
      this.$refs.previewPage.renderCode();
    },
    copy() {
      this.$Clipboard({ text: this.$refs.codePage.getValue() });
    },
    reset() {
      this.$refs.codePage.setValue(sample);
      this.run();
    },
    keyDownHandler(e) {
      // 可以判断是不是mac，如果是mac,ctrl变为花键
      // event.preventDefault() 方法阻止元素发生默认的行为。
      if (e.keyCode == 83 && (navigator.platform.match('Mac') ? e.metaKey : e.ctrlKey)) {
        e.preventDefault();
        this.run();
      }
    }
  },
  computed: {

  }
};
</script>
