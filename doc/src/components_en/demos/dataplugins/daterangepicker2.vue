<template>
  <div>
      <p>value:{{min}}-{{max}}</p>
      <div>
        <DatePicker v-model="min" placeholder="Please select a start date" :option="{end:max}"></DatePicker>
        -
        <DatePicker v-model="max" placeholder="Please select an end date" :option="{start:min}"></DatePicker>
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
