<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value" type="quarter"></DatePicker>
  </div>
</template>

<script>
import manba from 'manba';
export default {
  data() {
    return {
      value: ''
    }
  }
}
</script>