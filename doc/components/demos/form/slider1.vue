<template>
  <div>
    <p>对应的值：{{value}}</p>
    <Slider v-model="value"></Slider>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 0
    }
  }
};
</script>