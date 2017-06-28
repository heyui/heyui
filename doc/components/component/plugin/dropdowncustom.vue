<template>
  <div class="doc">
    <h2>DropdownCustom 自定义下拉控件</h2>

    <h3>基本调用</h3>
    <example demo="plugins/dropdowncustom1"></example>

    <h3>不同的触发方式</h3>
    <example demo="plugins/dropdowncustom2"></example>

    <h3>是否显示切换的icon</h3>
    <example demo="plugins/dropdowncustom3"></example>

    <h3>下拉显示的位置</h3>
    <p><code>placement</code>: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</p>
    <example demo="plugins/dropdowncustom4"></example>

    <h3>DropdownCustom 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>trigger</td>
        <td>触发方式</td>
        <td>String</td>
        <td>click, hover</td>
        <td>click</td>
      </tr>
      <tr>
        <td>toggleIcon</td>
        <td>是否显示展示状态的icon</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>menu显示的位置</td>
        <td>Stirng</td>
        <td>top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</td>
        <td>bottom-start</td>
      </tr>
    </table>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
  },
  components:{
  }
}
</script>
