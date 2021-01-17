<template>
  <div class="doc">
    <h2>DatePicker 日期控件</h2>
    <p>日期控件使用了基本日期工具<a href="http://manba.ch-un.com" target="_blank">manba</a>，支持option的参数<code>start</code>，<code>end</code>使用manba日期对象。</p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-datepicker</code>。</p>
    <h3>普通选择日期控件</h3>
    <div>
      <example demo="dataplugins/datepicker1"></example>
    </div>
    <h3>日期控件参数</h3>
    <div>
      <example demo="dataplugins/datepicker2"></example>
    </div>
    <!-- <h3>日期格式自定义</h3>
    <div>
      <example demo="dataplugins/datepicker3"></example>
    </div> -->
    <h3>不同类型的选择控件</h3>
    <div>
      <example demo="dataplugins/datepicker5"></example>
    </div>
    <h3>选择周控件</h3>
    <div>
      <example demo="dataplugins/datepicker10"></example>
    </div>
    <!-- <h3>选择季度控件</h3>
    <div>
      <example demo="dataplugins/datepicker11"></example>
    </div> -->
    <h3>快捷方式</h3>
    <div>
      <example demo="dataplugins/datepicker6"></example>
    </div>
    <h3>控件范围控制</h3>
    <div>
      <example demo="dataplugins/datepicker7"></example>
    </div>
    <h3>文本选择</h3>
    <div>
      <example demo="dataplugins/datepicker8"></example>
    </div>
    <h3>Inline模式</h3>
    <div>
      <example demo="dataplugins/datepicker9"></example>
    </div>

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
      <tr>
        <td>startWeek</td>
        <td>选择周的时候，设定星期的开始日</td>
        <td>Number</td>
        <td>1, 2, 3, 4, 5, 6, 7</td>
        <td>全局配置<code>datepicker.startWeek</code>，详情至<router-link to="/component/config">全局配置</router-link></td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>输入框是否只读</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>clearable</td>
        <td>是否有清空按钮, 1.20.0+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>true</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>日期选择器位置</td>
        <td>-</td>
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end</td>
        <td>bottom-start</td>
      </tr>
    </table>

    <h3>DatePicker 事件</h3>
    <table class="table">
      <tr>
        <th>方法名</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>input</td>
        <td>数据产生变化</td>
      </tr>
      <tr>
        <td>change</td>
        <td>数据产生变化</td>
      </tr>
      <tr>
        <td>confirm</td>
        <td>点击确定按钮</td>
      </tr>
      <tr>
        <td>clear</td>
        <td>点击清除按钮</td>
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
    </table>
  </div>
</template>
