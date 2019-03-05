<template>
  <div>
    <blockquote>Basic use</blockquote>
    <p>value: {{value}}</p>
    <div>
      <DateFullRangePicker v-model="value"></DateFullRangePicker>
    </div>
    <blockquote>Set the day of the week as the start of the week</blockquote>
    <p>value: {{value2}}</p>
    <div>
      <DateFullRangePicker v-model="value2" :start-week="7"></DateFullRangePicker>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: {
        start: '2017-01-01',
        end: '2017-08-01'
      },
      value2: null
    };
  }
};
</script>
