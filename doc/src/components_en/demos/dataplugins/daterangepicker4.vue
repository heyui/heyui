<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">Disable</h-switch></p>
    <p><DateRangePicker v-model="value" :disabled="disabled"></DateRangePicker></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: {},
      disabled: true
    };
  }
};
</script>
