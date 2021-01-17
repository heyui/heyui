<template>
  <div>
    <p>Corresponding values: {{value}}</p>
    <Slider v-model="value" readonly></Slider>
    <p>Corresponding values: {{value2}}</p>
    <Slider v-model="value2" multiple readonly></Slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0,
      value2: {
        start: 0,
        end: 20
      }
    };
  }
};
</script>
