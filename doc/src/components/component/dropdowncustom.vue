<template>
  <div class="doc">
    <h2>DropdownCustom 自定义下拉控件</h2>
    <p>DropdownCustom可以添加自定义的<code>className</code>定义各种不同的模式的下拉控件，<code>className</code>将应用在<code>.h-dropdowncustom-show</code>上，该dom为触发下拉的元素，包含自定义的内容以及右侧展示状态的icon。</p>
    <p>提示：系统自带一个<code>h-text-dropdown</code>的样式。</p>
    <p>注意1：如果DropdownCustom在页面最右边，并且显示异常，请给内容设定固定宽度。</p>
    <p>注意2：由于该样式应用在组件中，所以在调用的<code>vue</code>文件中，<code>style</code>的<code>scope</code>属性将无效。</p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-dropdowncustom</code>。</p>

    <h3>基本调用</h3>
    <example demo="plugins/dropdowncustom1"></example>

    <h3>不同样式组合调用</h3>
    <example demo="plugins/dropdowncustom2"></example>

    <h3>是否显示切换的icon</h3>
    <example demo="plugins/dropdowncustom3"></example>

    <h3>内容显示的位置</h3>
    <p><code>placement</code>: top, top-start, top-end, bottom, bottom-start, bottom-end, left, left-start, left-end, right, right-start, right-end</p>
    <example demo="plugins/dropdowncustom4"></example>

    <h3>自定义内容的位置</h3>
    <p>分别控制left, top的位移</p>
    <example demo="plugins/dropdowncustom6"></example>

    <h3>右键触发弹框</h3>
    <example demo="plugins/dropdowncustom7"></example>

    <h3>自定义下拉的控制</h3>
    <example demo="plugins/dropdowncustom5"></example>

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
        <td>click, hover, focus, contextMenu, manual(手动)</td>
        <td>click</td>
      </tr>
      <tr>
        <td>equalWidth</td>
        <td>是否和触发的dom等宽</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
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
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end
        </td>
        <td>bottom-start</td>
      </tr>
      <tr>
        <td>className</td>
        <td>为点击触发的dom添加class</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>offset</td>
        <td>位移</td>
        <td>String, Number</td>
        <td>-</td>
        <td>
          <div>left, top</div>
          <div>10</div>
          <div>'10%'</div>
          <div>'10, 10'</div>
          <div>'10%, 10'</div>
          <div>'10 + 10%'</div>
          <div>'10 - 5vh + 3%'</div>
          <div>'-10px + 5vh, 5px - 6%'</div>
        </td>
      </tr>
      <tr>
        <td>button</td>
        <td>使用按钮的样式调用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>DropdownCustom 方法</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>show</td>
        <td>显示dropdown</td>
      </tr>
      <tr>
        <td>update</td>
        <td>更新dropdown的位置</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>关闭dropdown</td>
      </tr>
    </table>

    <h3>DropdownCustom 事件</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>参数</th>
      </tr>
      <tr>
        <td>show</td>
        <td>打开的时候触发</td>
        <td>event</td>
      </tr>
      <tr>
        <td>hide</td>
        <td>关闭的时候触发</td>
        <td></td>
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
  },
  components: {
  }
};
</script>
