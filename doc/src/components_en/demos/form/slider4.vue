<template>
  <div>
    <p>Corresponding value：{{value}}</p>
    <Slider v-model="value" :show="show" :range="{start: 1000, end: 2000}"></Slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 1300
    };
  },
  methods: {
    show(value) {
      return `Current value: ${value}`;
    }
  }
};
</script>
