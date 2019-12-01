<template>
  <div class="doc">
    <h2>Transfer 穿梭框</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-transfer</code>。</p>

    <h3>基础用法</h3>
    <example demo="view/transfer1"></example>
    <h3>搜索</h3>
    <example demo="view/transfer2"></example>
    <h3>自定义</h3>
    <example demo="view/transfer3"></example>

    <h3>Transfer 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>可选择的数据</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>keyName</td>
        <td>用于唯一确定返回值</td>
        <td>String</td>
        <td>-</td>
        <td>key</td>
      </tr>
      <tr>
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>height</td>
        <td>穿梭器高度, 1.25.0+</td>
        <td>Number</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>

    <h3>Transfer 事件</h3>
    <table class="table">
      <tr>
        <th>事件名</th>
        <th>说明</th>
        <th>返回数值</th>
      </tr>
      <tr>
        <td>init</td>
        <td>初始化的时候触发</td>
        <td>左右栏的值</td>
      </tr>
      <tr>
        <td>transfer</td>
        <td>数据穿梭时出发</td>
        <td>穿梭的方向、数据、穿梭前的左右栏的值</td>
      </tr>
    </table>

    <h3>Option 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>filterable</td>
        <td>是否可以输入进行筛选</td>
        <td>Boolean</td>
        <td>true, false</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>筛选占位文案</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>render</td>
        <td>控制item的展示内容</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltHeadText, rtHeadText</td>
        <td>源和目标列表头部文案</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltText, rtText</td>
        <td>切换按钮的文案</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>ltIcon, rtIcon</td>
        <td>切换按钮的Icon</td>
        <td>String</td>
        <td>-</td>
        <td>h-icon-left, h-icon-right</td>
      </tr>
    </table>

    <h3>Slot 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>sourceHeader</td>
        <td>左侧头部数据栏头部样式</td>
      </tr>
      <tr>
        <td>targetHeader</td>
        <td>右侧头部数据栏头部样式</td>
      </tr>
      <tr>
        <td>item</td>
        <td>数据条目的渲染</td>
      </tr>
    </table>
  </div>
</template>
