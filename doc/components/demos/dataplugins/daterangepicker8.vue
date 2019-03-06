<template>
  <div>
    <p>周的开始日期: <SwitchList v-model="startWeek" :datas="startWeekDatas" small></SwitchList></p>
    <p>
      布局设置：<Checkbox v-model="layout" :datas="layoutDatas"></Checkbox>
    </p>
    <p style="height: 30px;"></p>
    <p>value: {{value}}</p>
    <div>
      <DateFullRangePicker v-model="value" :layout="layout" :startWeek="startWeek"></DateFullRangePicker>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {
        start: '2017-01-01',
        end: '2018-01-01',
        type: 'year'
      },
      startWeek: 1,
      layout: ['year', 'quarter', 'month', 'week', 'date', 'customize'],
      startWeekDatas: [{ key: 1, title: '周一' }, { key: 7, title: '周日' }],
      layoutDatas: ['year', 'quarter', 'month', 'week', 'date', 'customize']
    };
  }
};
</script>
