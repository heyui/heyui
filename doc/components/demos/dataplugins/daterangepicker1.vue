<template>
  <div>
      <p>value:{{value}}</p>
      <p><SwitchList v-model="format" :datas="['YYYY-MM-DD', 'DDMMYYYY']" @change="value = {}"></SwitchList></p>
      <DateRangePicker v-model="value" :format="format"></DateRangePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      format: 'YYYY-MM-DD',
      value: {}
    };
  }
};
</script>
