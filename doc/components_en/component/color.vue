<style lang="less" scoped>
  .color-spans>div>div {
    min-height: 80px;
    border-radius: 3px;
    padding: 10px;
  }

</style>
<template>
  <div class="doc">
    <h2>Color</h2>
    <p>HeyUI currently provides a <code>primary</code>color, and provides a basic color template to facilitate unified
      calling in system development.</p>
    <p>We will provide global variables in var.less, please refer to the <router-link to="/en/component/themes">Themes</router-link>
    </p>

    <h3>Color</h3>
    <div>
      <example demo="basic/color1"></example>
    </div>

    <h3>Demo</h3>
    <div>
      <example demo="basic/color2"></example>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};

</script>
