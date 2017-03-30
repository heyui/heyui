<style lang="less" scoped>
.color-span {
  height: 80px;
  color: @red-color;
}
</style>
<template>
  <div class="doc">
    <h2>Color 色彩</h2>
    <p>HeyUI目前提供一个<code>primary</code>的颜色，并提供基本的颜色模板，以方便在系统开发中统一调用。</p>
    <p>我们将提供统一的var.less调用。</p>
    <h3>Primary</h3>
    <Row>
      <Col :width='8'>
      <div class="color-span">
        @primary-color
      </div>
      </Col>
      <Col :width='8'>
      <div class="color-span">
        @light-primary-color
      </div>
      </Col>
      <Col :width='8'>
      <div class="color-span">
        @light-primary-color
      </div>
      </Col>
    </Row>
    <h3>Row 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>模式</td>
        <td>string</td>
        <td>flex</td>
        <td>-</td>
      </tr>
      <tr>
        <td>space</td>
        <td>区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-x</td>
        <td>横向区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>space-y</td>
        <td>竖向区块间隔</td>
        <td>number</td>
        <td>-</td>
        <td>0</td>
      </tr>
      <tr>
        <td>direction</td>
        <td>flex布局区块方向</td>
        <td>string</td>
        <td>row, column, row-reverse, column-reverse</td>
        <td>row</td>
      </tr>
      <tr>
        <td>justify</td>
        <td>flex布局区块排列方式</td>
        <td>string</td>
        <td>start, end, center, space-around, space-between</td>
        <td>start</td>
      </tr>
      <tr>
        <td>align</td>
        <td>flex布局区块对齐方式</td>
        <td>string</td>
        <td>top, middle, bottom</td>
        <td>top</td>
      </tr>
    </table>
    <h3>Col 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>width</td>
        <td>比例</td>
        <td>number</td>
        <td>1至24</td>
        <td>24(非flex)</td>
      </tr>
      <tr>
        <td>flex</td>
        <td>flex模式下的flex值</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>xs</td>
        <td>自适应模式下大屏幕的显示比例</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>sm</td>
        <td>自适应模式下中大屏幕的显示比例</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>md</td>
        <td>自适应模式下中小屏幕的显示比例</td>
        <td>number</td>
        <td>-</td>
        <td>r-w</td>
      </tr>
      <tr>
        <td>lg</td>
        <td>自适应模式下小屏幕的显示比例</td>
        <td>number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
<script>
export default {
  data() {
      return {}
    },
    methods: {},
    components: {}
}
</script>
