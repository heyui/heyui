<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="time" :option="param"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '',
      param: {
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
      }
    };
  }
};
</script>
