<template>
  <div>
    <p>start of the week: <SwitchList v-model="startWeek" :datas="startWeekDatas" small></SwitchList></p>
    <p>
      Layout: <Checkbox v-model="layout" :datas="layoutDatas"></Checkbox>
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
      startWeekDatas: [{ key: 1, title: 'Monday' }, { key: 7, title: 'Sunday' }],
      layoutDatas: ['year', 'quarter', 'month', 'week', 'date', 'customize']
    };
  }
};
</script>
