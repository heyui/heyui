<template>
  <div>
      <DatePicker v-model="value" :no-border="true"></DatePicker>
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