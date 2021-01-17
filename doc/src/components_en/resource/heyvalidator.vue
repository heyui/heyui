<template>
  <div class="doc">
    <div class="readme"></div>
    <h3>Links</h3>
    <ul class="text-ul">
      <li><a href="https://github.com/heyui/hey-validator">github</a></li>
      <li><a href="https://www.npmjs.com/package/hey-validator">NPM</a></li>
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
    loadReadMe(this.$el, 'https://raw.githubusercontent.com/heyui/hey-validator/master/README.md', this);
  },
  components: {
  }
};
</script>
