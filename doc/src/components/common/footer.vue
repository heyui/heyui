<template>
  <footer class="comm-footer">
    Copyright © {{year}} <a href="http://www.ch-un.com" target="_blank">LAN</a>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<a href="http://www.miitbeian.gov.cn/"
      target="_blank">沪ICP备17010105号-2</a>
  </footer>
</template>

<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear(),
      pass: '',
      error: false
    };
  },
  methods: {}
};
</script>
