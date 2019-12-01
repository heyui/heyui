<template>
  <div class="doc">
    <h2>DateFullRangePicker 超级日期范围控件</h2>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-datefullrangepicker</code>。</p>

    <h4>超级日期选择器</h4>
    <example demo="dataplugins/daterangepicker8"></example>

    <h3>DateFullRangePicker 参数</h3>
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
        <td>defaultType</td>
        <td>默认视图</td>
        <td>String</td>
        <td>year, month, week, date</td>
        <td>week</td>
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
        <td>layout</td>
        <td>设置需要选择的类型, 1.17.0+</td>
        <td>Array</td>
        <td> 'year', 'quarter', 'month', 'week', 'date', 'customize'</td>
        <td>[ 'year', 'quarter', 'month', 'week', 'date', 'customize']</td>
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

    <h3>DateFullRangePicker 事件</h3>
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
    <!-- <h3>option 配置</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>shortcuts</td>
        <td>自定义快捷方式</td>
        <td>[String, Object]</td>
        <td>-</td>
        <td>-</td>
      </tr>
    </table> -->
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
