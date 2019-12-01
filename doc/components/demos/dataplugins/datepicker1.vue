<template>
  <div>
      <p>value:{{value}}</p>
      <p><SwitchList v-model="format" :datas="['YYYY-MM-DD', 'DDMMYYYY', 'YYYYMMDD']" @change="value = null"></SwitchList></p>
      <DatePicker v-model="value" :format="format"></DatePicker>
  </div>
</template>

<script>
export default {
  data() {
    return {
      format: 'YYYY-MM-DD',
      value: '2019-05-02'
    };
  }
};
</script>
