<template>
  <div class="doc">
    <h2>ColorPicker </h2>
    <blockquote>1.23.0+</blockquote>

    <p class="component-name-tip">ColorPicker 不默认加载，如果你使用的是按需加载，则无需关注。如果你使用的是全量加载，请使用以下代码：</p>
<codes type="javascript">
import ColorPicker from 'heyui/lib/components/color-picker';
Vue.component('ColorPicker', ColorPicker);
</codes>

    <h3>基本调用</h3>
    <example demo="colorpicker/colorpicker1"></example>

    <h3>透明度</h3>
    <example demo="colorpicker/colorpicker2"></example>

    <h3>预定义颜色</h3>
    <example demo="colorpicker/colorpicker3"></example>

    <h3>ColorPicker 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>useConfirm</td>
        <td>是否使用确认按钮触发变化</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>colorType</td>
        <td>颜色类型</td>
        <td>string</td>
        <td>hex / rgb</td>
        <td>hex（ enableAlpha = false ）/ rgb（ enableAlpha = true ）</td>
      </tr>
      <tr>
        <td>enableAlpha</td>
        <td>是否使用透明度</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>colors</td>
        <td>自定义颜色预设</td>
        <td>Array</td>
        <td>-</td>
        <td>[]</td>
      </tr>
    </table>

    <h3>ColorPicker 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回数据</th>
      </tr>
      <tr>
        <td>change</td>
        <td>当数据产生变动的时候触发</td>
        <td>完整对象</td>
      </tr>
      <tr>
        <td>input</td>
        <td>当数据产生变动的时候触发</td>
        <td>当前绑定的v-model值</td>
      </tr>
    </table>
  </div>
</template>
