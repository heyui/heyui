<template>
  <div class="doc">
    <h2>Table 表格</h2>
    <p>主要用于展示大量结构化数据。</p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-table</code>。</p>
<!--
    <h3>Columns定义模式</h3>
    <example demo="view/table11"></example> -->

  <h3>基本</h3>
    <example demo="view/table2"></example>

    <h3>数据渲染</h3>
    <p><code>Table</code>组件内置了一系列的数据渲染模式。</p>
    <ul class="text-ul">
      <li><code>unit</code>: 定义字段的单位</li>
      <li><code>dict</code>: 定义字段使用字典渲染</li>
      <li><code>render</code>: 自定义字段渲染方法</li>
    </ul>
    <example demo="view/table9"></example>

    <h3>排序与加载</h3>
    <p>给<code>Column</code>设置<code>sort</code>为true，则使用自定义排序，根据sort事件对数据做出调整。</p>
    <p>给<code>Column</code>设置<code>sort</code>为<code>auto</code>，则可以默认使用数据排序</p>
    <p>使用<code>loading</code>可以设置数据的加载效果</p>
    <example demo="view/table5"></example>

    <h3>Table open/hide row</h3>
    <p>给行数据 data 的某项设置 <code>_expand</code> 为 true，可以默认展开当前行</p>
    <example demo="view/table6"></example>
<!--
    <h3>自定义模式</h3>
    <example demo="view/table5"></example> -->

    <h3>Table fixed column</h3>
    <p class="tip">固定的高度和宽度，内部内容超出时自动scroll。</p>
    <example demo="view/table3"></example>

    <h3>Table 多选</h3>
    <p>设定<code>selectWhenClickTr</code>属性可以点击整行选中。</p>
    <example demo="view/table4"></example>

    <h3>Table 单选</h3>
    <example demo="view/table10"></example>

    <h3>Table 气泡提示与定义border, stripe样式</h3>
    <example demo="view/table7"></example>

    <h3>自定义表头</h3>
    <example demo="view/table8"></example>

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
        <td>定义table的column</td>
        <td>Array</td>
        <td>-</td>
        <td>[Column]</td>
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
        <td>border</td>
        <td>table是否有竖线分割</td>
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
      <tr>
        <td>selectRow</td>
        <td>单行选中切换</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
      <tr>
        <td>selectWhenClickTr</td>
        <td>当点击tr的时候，触发checkbox选中切换</td>
        <td>Boolean</td>
        <td></td>
        <td>false</td>
      </tr>
    </table>

    <h3>TableItem / Column 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>title</td>
        <td>定义table的header标题</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>width</td>
        <td>定义table每一项宽度</td>
        <td>Number</td>
        <td>-</td>
        <td>[]</td>
      </tr>
      <tr>
        <td>fixed</td>
        <td>是否为固定栏</td>
        <td>String</td>
        <td>-</td>
        <td>left, right</td>
      </tr>
      <tr>
        <td>prop</td>
        <td>按照数据的某个字段渲染数据</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>

      <tr>
        <td>align</td>
        <td>table中的标题对齐方式</td>
        <td>String</td>
        <td>left,right,center</td>
        <td>left</td>
      </tr>
      <tr>
        <td>tooltip</td>
        <td>table中的标题是否使用提示框</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>table中的标题使用提示框的提醒位置</td>
        <td>String</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>content</td>
        <td>table中的标题使用提示框的内容</td>
        <td>String</td>
        <td>-</td>
        <td>默认使用title</td>
      </tr>
      <tr>
        <td>sort</td>
        <td>是否添加排序触发</td>
        <td>Boolean, String</td>
        <td>true/auto</td>
        <td>false</td>
      </tr>
      <tr>
        <td>dict</td>
        <td>字典渲染字段</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>unit</td>
        <td>字段显示单位</td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>render</td>
        <td>自定义字段处理方法</td>
        <td>Function</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>sortProp</td>
        <td>排序字段，当sortProp为空的时候，使用prop字段，<code>1.16.0+新增</code></td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
    </table>

    <h3>Table 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>sort</td>
        <td>当排序的时候触发的事件</td>
        <td>{type: ['asc'|'desc'], prop: String}</td>
      </tr>
      <tr>
        <td>select</td>
        <td>当checkbox有变动的时候触发的事件</td>
        <td>checks</td>
      </tr>
      <tr>
        <td>selectAll</td>
        <td>当checkbox全选的时候</td>
        <td>checks</td>
      </tr>
      <tr>
        <td>trclick</td>
        <td>当tr被点击的时候</td>
        <td>(data, event, index)</td>
      </tr>
      <tr>
        <td>trdblclick</td>
        <td>当tr被双击的时候</td>
        <td>(data, event, index)</td>
      </tr>
      <tr>
        <td>rowSelect</td>
        <td>当tr被单击选中的时候</td>
        <td>data</td>
      </tr>
    </table>

    <h3>Table 方法</h3>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
        <th>参数</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>clearSort</td>
        <td>清空排序</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>clearSelection</td>
        <td>清空选中</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>setSelection</td>
        <td>设置选中的值</td>
        <td>data</td>
        <td>无</td>
      </tr>
      <tr>
        <td>getSelection</td>
        <td>获取选中的值</td>
        <td>无</td>
        <td>checks: Array</td>
      </tr>
      <tr>
        <td>invereSelection</td>
        <td>设置选中的值反选</td>
        <td>无</td>
        <td>无</td>
      </tr>
      <tr>
        <td>triggerSort</td>
        <td>设置排序，triggerType为true的时候触发<code>sort</code>事件，为auto时自动排序，<code>1.16.0+新增</code></td>
        <td>sortStatus: {prop: String, type: String['asc'|'desc'] }, triggerType: true | 'auto' | false</td>
        <td>无</td>
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
  }
};
</script>
