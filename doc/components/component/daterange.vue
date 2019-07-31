<template>
  <div class="doc">
    <h2>DateRangePicker 日期范围控件</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-datepicker</code>。</p>
    <h3>普通选择日期范围控件</h3>
    <p>数据默认使用{start,end}的对象，同时也可以自定义参数。详情请参考<router-link to="/component/config">全局配置</router-link></p>
    <div>
      <example demo="dataplugins/daterangepicker1"></example>
    </div>
    <h3>日期时间范围禁用</h3>
    <div>
      <example demo="dataplugins/daterangepicker4"></example>
    </div>
    <h3>控件开始结束范围控制</h3>
    <div>
      <example demo="dataplugins/daterangepicker5"></example>
    </div>
    <!-- <h3>选择周控件</h3>
    <div>
      <example demo="dataplugins/daterangepicker7"></example>
    </div> -->
    <h3>快捷方式</h3>
    <p>快捷方式定义与日期控件一致，同时也可以使用全局配置的方式使用。</p>
    <div>
      <example demo="dataplugins/daterangepicker6"></example>
    </div>
    <h3>日期控件单独选择开始结束</h3>
    <p>针对一些可选开始或者结束日期的需求，可以通过start，end参数控制。</p>
    <div>
      <example demo="dataplugins/daterangepicker2"></example>
    </div>
    <h3>选择日期时间范围控件</h3>
    <div>
      <example demo="dataplugins/daterangepicker3"></example>
    </div>

    <h3>DateRangePicker 参数</h3>
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
        <td>option</td>
        <td>配置项，详细参见下面的option说明</td>
        <td>Object</td>
        <td>-</td>
        <td></td>
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
        <td></td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
      <tr>
        <td>placement</td>
        <td>内容显示的位置, 1.24.0+</td>
        <td>Stirng</td>
        <td>
          top, top-start, top-end, <br/>
          bottom, bottom-start, bottom-end, <br/>
          left, left-start, left-end, <br/>
          right, right-start, right-end
        </td>
        <td>bottom-start</td>
      </tr>
    </table>

    <h3>DateRangePicker 事件</h3>
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

<script>

import manba from 'manba';

export default {
  data() {
    return {
      value1: {},
      value2: {},
      value3: {},
      value4: {},
      value7: {},
      value8: {},
      param7: {
        minuteStep: 4
      },
      value6: {},
      param6: {
        hours() {
          let hours = [];
          for (let i = 9; i <= 20; i++) {
            hours.push(i);
          }
          return hours;
        },
        minutes(hour) {
          let minutes = [];
          if (hour < 12) {
            minutes.push(7, 15, 23, 17, 34, 47, 58);
          } else {
            minutes.push(1, 3, 34, 45, 46, 47, 52);
          }
          return minutes;
        }
      },
      value5: {},
      param3: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY)
      },
      param2: {
        shortcuts: [{
          title: '近三天',
          value() {
            return {
              start: manba().add(-3, manba.DAY),
              end: manba()
            };
          }
        }]
      }
    };
  },
  methods: {
    changeParam() {
      this.param.start = '2017-02-01 12:34';
      this.param.end = '2017-06-03 12:34';
    }
  }
};
</script>
