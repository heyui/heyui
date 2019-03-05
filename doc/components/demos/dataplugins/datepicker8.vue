<template>
  <div>
      <DatePicker v-model="value" :no-border="true"></DatePicker>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: ''
    };
  }
};
</script>
