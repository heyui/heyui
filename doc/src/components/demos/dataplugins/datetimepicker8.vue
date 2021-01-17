<template>
  <div>
      <p>value:{{value}}  <button class="h-btn h-btn-text" @click="changeParam()">修改范围</button></p>
      <DatePicker v-model="value" type="datetime" :option="param"></DatePicker>
  </div>
</template>

<script>
import manba from 'manba';

export default {
  data() {
    return {
      value: '',
      param: {
        start: manba().add(-1, manba.DAY),
        end: manba().add(46, manba.DAY),
        disabled: (value) => {
          return value.date() % 5 == 0;
        }
      }
    };
  },
  methods: {
    changeParam() {
      this.param.start = '2017-02-01 12:34';
      this.param.end = '2017-06-03 12:34';
      this.$Message(`选择范围变为${this.param.start}至${this.param.end}`, 5000);
    }
  }
};
</script>
