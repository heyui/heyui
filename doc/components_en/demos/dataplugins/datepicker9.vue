<template>
  <div>
    <p>
      value: {{value}}
    </p>
    <DatePicker v-model="value" :inline="true"></DatePicker>
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
