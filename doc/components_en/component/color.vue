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
    <h3>Primary</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-primary-color white-color">
          <p>Primary</p>
        </div>
      </Cell>
    </Row>

    <h3>Main Color</h3>

    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-blue-color white-color">
          <p>Blue</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-green-color white-color">
          <p>Green</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-yellow-color white-color">
          <p>Yellow</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-red-color white-color">
          <p>Red</p>
        </div>
      </Cell>
    </Row>

    <h3>Text Color</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-dark-color white-color">
          <p>Dark</p>
        </div>
      </Cell>
      <Cell :width="18"><div><p>&nbsp;</p></div></Cell>
      <Cell :width="6">
        <div class="bg-dark1-color white-color">
          <p>Dark1</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark2-color white-color">
          <p>Dark2</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark3-color white-color">
          <p>Dark3</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-dark4-color white-color">
          <p>Dark4</p>
        </div>
      </Cell>
    </Row>

    <h3>Background Color</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-gray-color">
          <p>Gray</p>
        </div>
      </Cell>
      <Cell :width="18"><div><p>&nbsp;</p></div></Cell>
      <Cell :width="6">
        <div class="bg-gray1-color">
          <p>Gray1</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray2-color">
          <p>Gray2</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray3-color">
          <p>Gray3</p>
        </div>
      </Cell>
      <Cell :width="6">
        <div class="bg-gray4-color">
          <p>Gray4</p>
        </div>
      </Cell>
    </Row>

    <h3>Demo</h3>
    <div>
      <example demo="basic/color"></example>
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
