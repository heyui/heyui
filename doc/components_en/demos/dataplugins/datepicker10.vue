<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="week"></DatePicker>

      <p>Sunday is the beginning of the week and the default is Monday.</p>
      <p>value:{{value2}}</p>
      <DatePicker v-model="value2" type="week" :start-week="7"></DatePicker>

  </div>
</template>

<script>
import manba from 'manba';
export default {
  data() {
    return {
      value: manba().format(),
      value2: null
    };
  }
};
</script>
