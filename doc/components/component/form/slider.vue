<template>
  <div class="doc">
    <h2>Slider 滑块</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-slider</code>。</p>
    <h3>基本调用</h3>
    <example demo="form/slider1"></example>

    <h3>readonly</h3>
    <example demo="form/slider2"></example>

    <h3>step</h3>
    <example demo="form/slider3"></example>

    <h3>自定义展示</h3>
    <example demo="form/slider4"></example>

    <h3>隐藏提示项</h3>
    <example demo="form/slider5"></example>
    
    <h3>Silder 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>step</td>
        <td>每个节点大小</td>
        <td>Number</td>
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
      <tr>
        <td>show</td>
        <td>自定义tip展示的内容</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>showtip</td>
        <td>是否展示tip</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>range</td>
        <td>设置slider的数值范围</td>
        <td>{start: Number, end: Number}</td>
        <td>-</td>
        <td>{start: 0, end: 100}</td>
      </tr>
    </table>

    <h3>Silder 事件</h3>
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