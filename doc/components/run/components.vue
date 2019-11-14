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
    border-bottom: 1px solid #eee;
    padding: 10px 0;
  }

  .code-frame {
    display: flex;
    flex: 1;
    overflow: hidden;
  }

  .split-trigger {
    border: 1px solid #dcdee2;
  }
  .split-trigger-vertical {
    width: 6px;
    // height: 100%;
    background: #f8f8f9;
    border-top: none;
    border-bottom: none;
    cursor: col-resize;
    @media (max-width: 600px) {
      &:not(:last-of-type) {
        display: none;
      }
    }
    display: flex;
    justify-content: center;
    align-items: center;
  }
  .split-trigger-bar-con.vertical {
    display: flex;
    flex-direction: column;
    height: 32px;
  }
  .split-trigger-bar {
    width: 4px;
    height: 1px;
    background: rgba(23, 35, 61, 0.25);
    float: left;
    margin-top: 3px;
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
        <Code ref="codePage" :style="leftStyle"></Code>
        <div @mousedown="splitTriggerDown" class="split-trigger split-trigger-vertical">
          <div class="split-trigger-bar-con vertical">
            <i class="split-trigger-bar"></i>
            <i class="split-trigger-bar"></i>
            <i class="split-trigger-bar"></i>
            <i class="split-trigger-bar"></i>
            <i class="split-trigger-bar"></i>
            <i class="split-trigger-bar"></i>
          </div>
        </div>
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
      code: null,
      is_moving: false,
      leftStyle: {}
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
    },
    splitTriggerDown(e) {
      this.is_moving = true;
      document.addEventListener('mousemove', this.mouseMoveHandler);
      this.mouseDownHandler();
      e.preventDefault();
    },
    mouseDownHandler() {
      document.addEventListener('mouseup', this.mouseUpHandler);
    },
    mouseUpHandler() {
      document.removeEventListener('mousemove', this.mouseMoveHandler);
      document.removeEventListener('mouseup', this.mouseUpHandler);
    },
    mouseMoveHandler(e) {
      if (this.is_moving) {
        const event = e || window.event;
        let leftItemWidth = event.x - 20; // code区域左侧有一定宽度要减掉
        if (leftItemWidth < 100) {
          leftItemWidth = 100;
        } else if (leftItemWidth > document.body.clientWidth - 100) {
          leftItemWidth = document.body.clientWidth - 100;
        }
        this.leftStyle = {
          width: leftItemWidth + 'px'
        };
      }
    }
  },
  computed: {}
};
</script>
