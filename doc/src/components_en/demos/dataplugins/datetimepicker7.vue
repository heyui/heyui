<template>
  <div>
      <p>value:{{value}}</p>
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
        shortcuts: [
          {
            title: 'Next round of interviews',
            value() {
              return manba().add(3, manba.DAY);
            }
          }
        ]
      }
    };
  }
};
</script>
