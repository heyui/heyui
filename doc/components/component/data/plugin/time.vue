<template>
  <div class="doc">
    <h2>TimePicker 时间控件</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-datepicker</code>。</p>
    <h3>普通选择时间控件</h3>
    <example demo="dataplugins/timepicker1"></example>

    <h3>时间控件禁用</h3>
    <example demo="dataplugins/timepicker2"></example>

    <h3>控件选择范围控制</h3>
    <example demo="dataplugins/timepicker3"></example>

    <h3>DatePicker 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>disabled</td>
        <td>是否禁用</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>type</td>
        <td>类型</td>
        <td>String</td>
        <td>date</td>
        <td>year, month, week, datetime, datehour</td>
      </tr>
      <tr>
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
      </tr>
      <tr>
        <td>format</td>
        <td>自定义数据的格式</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>hasSeconds</td>
        <td>当选择日期时间时，是否自动格式化到秒</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>noBorder</td>
        <td>是否有边框，适用于文字的下拉选择</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placeholder</td>
        <td>展示默认提示语</td>
        <td>String</td>
        <td>-</td>
        <td>请选择</td>
      </tr>
    </table>

    <h3>option 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>start</td>
        <td>开始时间</td>
        <td>Function, Object, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>end</td>
        <td>结束时间</td>
        <td>Function, Object, String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>disabled</td>
        <td>不可选日期配置</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>shortcuts</td>
        <td>自定义快捷方式</td>
        <td>[String, Object]</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>minuteStep</td>
        <td>分钟的间隔</td>
        <td>Number</td>
        <td>-</td>
        <td>5</td>
      </tr>
      <tr>
        <td>hours</td>
        <td>自定义可选的小时</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>minutes</td>
        <td>自定义可选的分钟</td>
        <td>Function</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table>
  </div>
</template>
