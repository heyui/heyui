<template>
  <div class="doc">
    <h2>Table 表格</h2>

    <h3>Columns定义模式</h3>
    <example demo="view/table1"></example>

    <h3>TableItem定义模式</h3>
    <example demo="view/table2"></example>

    <h3>自定义模式</h3>
    <example demo="view/table5"></example>

    <h3>固定的table</h3>
    <p>固定的高度和宽度，内部内容超出时使用scroll。</p>
    <example demo="view/table3"></example>
  
    <h3>固定的列</h3>
    <example demo="view/table4"></example>

    <h3>Table 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>columns</td>
        <td>定义table的header</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>datas</td>
        <td>列表展示需要的数据</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>height</td>
        <td>Table固定的高度</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>checkbox</td>
        <td>是否使用checkbox选择器</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>stripe</td>
        <td>table使用栅格背景</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Table 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>sort</td>
        <td>当排序的时候触发的事件</td>
      </tr>
      <tr>
        <td>select</td>
        <td>当checkbox有变动的时候触发的事件</td>
      </tr>
      <tr>
        <td>selectAll</td>
        <td>当checkbox全选的时候</td>
      </tr>
    </table>

    <h3>Table 方法</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>clearSort</td>
        <td>清空排序</td>
      </tr>
      <tr>
        <td>clearSelection</td>
        <td>清空选中</td>
      </tr>
      <tr>
        <td>setSelection</td>
        <td>设置选中的值</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data() {
    return {
    }
  },
  methods: {
  }
}
</script>
