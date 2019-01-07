<template>
  <div class="doc">
    <h2>Grid 栅格</h2>
    <p>我们采用标准的24格布局容器，利用容器完成简单的网络布局。</p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-row</code>, <code>h-col</code>。</p>
    <h3>基本的排版</h3>
    <p>利用基本的class<code>.h-col-{n}</code>进行排版布局。</p>
    <example demo="basic/grid1"></example>
    <h3>组件排版</h3>
    <p>利用组件<code>Row</code>,<code>Col</code>进行排版布局，通过<code>width</code>设定宽度。</p>
    <example demo="basic/grid2"></example>
    <h3>区块间隔</h3>
    <p>通过给<code>Row</code>添加<code>space</code>属性，让<code>Col</code>产生间距。间距可以设置为任意整数数值。</p>
    <p class="tip">我们使用的并非是栅格的排列布局，所以可以对循环的区块做布局。</p>
    <example demo="basic/grid3"></example>
    <h3>横向，竖向区块间隔</h3>
    <p>通过给<code>Row</code>添加<code>space-x</code>,<code>space-y</code>属性，让<code>Col</code>产生间距。</p>
    <example demo="basic/grid4"></example>
    <h3>Flex布局</h3>
    <p>Flex布局主要使用在flex自适应的场景中。</p>
    <example demo="basic/grid5"></example>
    <h3>自适应布局</h3>
    <p>实现响应式设计，利用五个尺寸：xs, sm, md, lg, xl。</p>
    <p>max-768px, 768px, 992px,1200px , min-1800px</p>
    <example demo="basic/grid6"></example>
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
        <td>-</td>
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
