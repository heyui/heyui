<template>
  <div>
      <p>value:{{min}}-{{max}}</p>
      <DatePicker v-model="min" placeholder="请选择开始日期" type="datetime" :option="{end:max}"></DatePicker>
      -
      <DatePicker v-model="max" placeholder="请选择结束日期" type="datetime" :option="{start:min}"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      min: null,
      max: null
    };
  }
};
</script>
