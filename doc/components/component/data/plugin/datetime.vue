<template>
  <div class="doc">
    <h2>DateTimePicker 日期时间控件</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-datepicker</code>。</p>
    <h3>普通选择日期时间控件</h3>
    <div>
      <example demo="dataplugins/datetimepicker1"></example>
    </div>
    <h3>日期时间控件禁用</h3>
    <div>
      <example demo="dataplugins/datetimepicker2"></example>
    </div>
    <h3>日期格式化自定义</h3>
    <div>
      <example demo="dataplugins/datetimepicker9"></example>
    </div>
    <h3>选择到小时</h3>
    <div>
      <example demo="dataplugins/datetimepicker3"></example>
    </div>
    <h3>日期时间控件,可以到秒</h3>
    <p>这里的秒只是选择到分钟，手动修改秒数。如果有更合适的方案，希望在github上为我们<a href="https://github.com/heyui/heyui/issues/new" target="_blank">提建议</a>。</p>
    <div>
      <example demo="dataplugins/datetimepicker4"></example>
    </div>
    <h3>分钟列表Step自定义</h3>
    <div>
      <example demo="dataplugins/datetimepicker5"></example>
    </div>
    <h3>时间分钟列表展示自定义</h3>
    <div>
      <example demo="dataplugins/datetimepicker6"></example>
    </div>
    <h3>快捷方式</h3>
    <p>可以通过全局定义配置好快捷方式，这里只做key的调用，或者自己定义函数返回。全局配置详情请参考<router-link to="/component/config">全局配置</router-link></p>
    <div>
      <example demo="dataplugins/datetimepicker7"></example>
    </div>
    <h3>控件开始结束范围以及可选范围控制</h3>
    <div>
      <example demo="dataplugins/datetimepicker8"></example>
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
        <td>readonly</td>
        <td>输入框是否只读</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>日期选择器位置</td>
        <td>-</td>
        <td>-</td>
        <td>bottom-start</td>
      </tr>
      <tr>
        <td>startWeek</td>
        <td>选择周的时候，设定星期的开始日</td>
        <td>Number</td>
        <td>1, 2, 3, 4, 5, 6, 7</td>
        <td>全局配置<code>datepicker.startWeek</code>，详情至<router-link to="/component/config">全局配置</router-link></td>
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
