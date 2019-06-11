<style lang='less'>
</style>
<template>
  <div class="">
    <p>当前主题： theme</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      theme: G.get('GLOBAL_COLOR') || 'default'
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      if (this.theme != 'default') {

      }
    }
  },
  computed: {

  }
};
</script>
