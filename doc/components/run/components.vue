<style lang="less">
.page-run-page {

}
</style>
<template>
  <div class="page-run-page page-body com-frame">
    <div class="left-frame">

    </div>
    <div class="right-frame">
      <Code ref="codePage"></Code>
      <Preview ref="previewPage" :code="code"></Preview>
    </div>
  </div>
</template>
<script>

import Preview from './components/preview';
import Code from './components/code';

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

    }
  },
  computed: {

  }
};
</script>
