<template>
  <div class="doc">
    <h2>TextEllipsis 超出文本省略</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-textellipsis</code>。</p>
    <blockquote>1.2.0+</blockquote>

    <h3>基本调用</h3>
    <example demo="other/textellipsis1"></example>

    <h3>自定义前缀后缀</h3>
    <example demo="other/textellipsis2"></example>

    <h3>自定义更多</h3>
    <example demo="other/textellipsis3"></example>

    <h3>适应换行</h3>
    <example demo="other/textellipsis4"></example>

    <h3>当被隐藏文字的时候，使用tooltip提示</h3>
    <example demo="other/textellipsis5"></example>

    <h3>TextEllipsis 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>text</td>
        <td>需要省略的文本</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>height</td>
        <td>限制的高度</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>isLimitHeight</td>
        <td>是否开启限制</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>useTooltip</td>
        <td>是否使用tooltip</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>tooltipTheme</td>
        <td>tooltip的风格</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>placement</td>
        <td>tooltip的placement</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
    </table>

    <h3>TextEllipsis 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>show</td>
        <td>当isLimitHeight为true，文本全部展示的时候</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>当isLimitHeight为true，文本省略的时候</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
  },
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};
</script>
