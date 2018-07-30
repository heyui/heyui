<template>
  <div class="doc">
    <h2>TagInput 标签输入</h2>
    <h3>基本</h3>
    <example demo="dataplugins/taginput1"></example>
    
    <h3>字符串分割</h3>
    <example demo="dataplugins/taginput3"></example>
  
    <h3>只读</h3>
    <example demo="dataplugins/taginput2"></example>
  
    <h3>TagInput 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>readonly</td>
        <td>是否只读</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>limit</td>
        <td>限制输入的长度</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>wordlimit</td>
        <td>限制每个tag的文字输入长度</td>
        <td>Number</td>
        <td>-</td>
        <td>50</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>输入提示</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>type</td>
        <td>数据类型</td>
        <td>String</td>
        <td>Array, String</td>
        <td>Array</td>
      </tr>
      <tr>
        <td>split</td>
        <td>如果数据类型为String,设定的分隔符</td>
        <td>String</td>
        <td>-</td>
        <td>,</td>
      </tr>
    </table>
  </div>
</template>
