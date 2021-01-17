<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">Disable</h-switch></p>
    <p><h-switch v-model="readonly" :small="true">Read only</h-switch></p>
    <p><h-switch v-model="clearable" :small="true">Clearable</h-switch></p>
    <p><DatePicker v-model="value" :readonly="readonly" :disabled="disabled" :clearable="clearable"></DatePicker></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2017-01-01',
      disabled: true,
      readonly: true,
      clearable: true
    };
  }
};
</script>
