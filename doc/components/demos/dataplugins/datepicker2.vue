<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch></p>
    <p><h-switch v-model="readonly" :small="true">只读</h-switch></p>
    <p><DatePicker v-model="value" :readonly="readonly" :disabled="disabled"></DatePicker></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: '2017-01-01',
      disabled: true,
      readonly: true
    };
  }
};
</script>
