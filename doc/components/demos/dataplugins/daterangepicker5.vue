<template>
  <div>
      <p>value:{{value}}</p>
      <DateRangePicker v-model="value" :option="param"></DateRangePicker>
  </div>
</template>

<script>
import manba from 'manba';

export default {
  data() {
    return {
      value: {},
      param: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY)
        // disabled: (value) => {
        //   return value.date()%10 == 0;
        // }
      }
    };
  }
};
</script>
