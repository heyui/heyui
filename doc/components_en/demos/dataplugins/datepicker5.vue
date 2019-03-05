<template>
  <div>
      <p><SwitchList v-model="type" :datas="{year: 'year', month: 'month', quarter: 'Quarter', week: 'week', date: 'date'}"></SwitchList></p>
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
