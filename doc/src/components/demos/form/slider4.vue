<template>
  <div>
    <p>对应的值：{{value}}</p>
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
      return `现在的值：${value}`;
    }
  }
};
</script>
