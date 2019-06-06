<style lang="less" scoped>
.color-spans > div > div {
  border-radius: 3px;
  padding: 25px 20px;
}
</style>
<template>
  <div class="doc">
    <h2>Color 色彩</h2>
    <p>
      HeyUI目前提供一个
      <code>primary</code>的颜色，并提供基本的颜色模板，以方便在系统开发中统一调用。
    </p>
    <p>
      我们将提供统一的var.less调用，关于调用方式请参照
      <router-link to="/component/themes">更换主题</router-link>
    </p>
    <h3>Primary</h3>
    <Row :space="20" class="color-spans">
      <Cell :width="6">
        <div class="bg-primary-color white-color">
          <p>Primary</p>
        </div>
      </Cell>
    </Row>

    <h3>主色</h3>
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

    <h3>文本</h3>
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

    <h3>背景色</h3>
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

    <h3>应用</h3>
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
