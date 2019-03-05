<template>
  <div class="doc">
    <h2>SwitchList 选项</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-switchlist</code>。</p>
    <h3>基本</h3>
    <p>使用 <code>v-model</code> 以及 <code>datas</code>参数完成整体的调用。</p>
    <example demo="form/switchlist1"></example>

    <h3>禁用</h3>
    <example demo="form/switchlist2"></example>

    <h3>尺寸更小</h3>
    <p>使用 <code>small</code>参数定义尺寸更小的SwitchList。</p>
    <example demo="form/switchlist3"></example>

    <h3>数据字典调用</h3>
    <p>Hey UI将提供数据字典的调用方式模型，并内置<code>dictMapping</code>方法做展示。详情请至<router-link to="/component/config">全局配置</router-link>。</p>
    <example demo="form/switchlist4"></example>

    <h3>SwitchList 参数</h3>
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
        <td>数据字典</td>
        <td>Array,Object</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>dict</td>
        <td>调用配置好的字典库，详情请至<router-link to="/component/config">全局配置</router-link></td>
        <td>String</td>
        <td></td>
        <td></td>
      </tr>
      <tr>
        <td>small</td>
        <td>尺寸更小</td>
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
        <td>keyName</td>
        <td>自定义数据的key字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.keyName</code></td>
      </tr>
      <tr>
        <td>titleName</td>
        <td>自定义数据的title字段名</td>
        <td>String</td>
        <td>-</td>
        <td>全局config <code>dict.titleName</code></td>
      </tr>
    </table>

    <h3>SwitchList 事件</h3>
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
