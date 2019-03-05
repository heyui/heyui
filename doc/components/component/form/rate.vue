<template>
  <div class="doc">
    <h2>Rate 评分</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-rate</code>。</p>
    <h3>基本</h3>
    <example demo="form/rate1"></example>

    <h3>只读</h3>
    <p>用于展示</p>
    <example demo="form/rate2"></example>

    <h3>Rate 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>showText</td>
        <td>是否显示星级</td>
        <td>Array,Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>只读，只用于展示</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Rate 事件</h3>
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
