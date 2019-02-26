<template>
  <div>
      <p>value:{{value}}</p>
      <DatePicker v-model="value"></DatePicker>
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