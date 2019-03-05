<template>
  <div>
      <p>value:{{min}}-{{max}}</p>
      <div>
        <DatePicker v-model="min" placeholder="请选择开始日期" :option="{end:max}"></DatePicker>
        -
        <DatePicker v-model="max" placeholder="请选择结束日期" :option="{start:min}"></DatePicker>
      </div>
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
