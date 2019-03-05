<template>
  <div>
      <p>value:{{min}}-{{max}}</p>
      <DatePicker v-model="min" placeholder="Please select a start date" type="datetime" :option="{end:max}"></DatePicker>
      -
      <DatePicker v-model="max" placeholder="Please select an end date" type="datetime" :option="{start:min}"></DatePicker>
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
