<template>
  <div>
      <p><SwitchList v-model="type" :datas="{year: '年', month: '月', quarter: '季度', week: '周', date: '日'}"></SwitchList></p>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" :type="type"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      type: 'date'
    };
  }
};
</script>
