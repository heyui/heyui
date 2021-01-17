<template>
  <div class="doc">
    <div class="readme"></div>
    <h3>Links</h3>
    <ul class="text-ul">
      <li><a href="https://github.com/heyui/heyui-snippets">github</a></li>
      <li><a href="https://marketplace.visualstudio.com/items?itemName=vvpvvp.heyui-snippets">VS Code Market</a></li>
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
    loadReadMe(this.$el, 'https://raw.githubusercontent.com/heyui/heyui-snippets/master/README.md', this);
  },
  components: {
  }
};
</script>
