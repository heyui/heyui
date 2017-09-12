<template>
  <div>
    <p>对应的值：{{value}}</p>
    <Slider v-model="value" :show="show"></Slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 2,

    }
  },
  methods: {
    show(value) {
      return `现在的值：${value}`;
    }
  }
};
</script>