<template>
  <div class="doc">
    <div class="readme"></div>
    <h3>相关链接</h3>
    <ul class="text-ul">
      <li><a href="https://github.com/vvpvvp/model">github</a></li>
      <li><a href="https://www.npmjs.com/package/model">NPM</a></li>
    </ul>
  </div>
</template>

<script>
import loadReadMe from './loadReadMe';

export default {
  data() {
    return {
    };
  },
  methods: {
  },
  mounted() {
    loadReadMe(this.$el, 'https://raw.githubusercontent.com/vvpvvp/model/master/README.md', this);
  },
  components: {
  }
};
</script>
