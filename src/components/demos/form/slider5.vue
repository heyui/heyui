<template>
  <div>
    <p>对应的值：{{value}}</p>
    <Row><Col :width="18"><Slider v-model="value"></Slider></Col><Col :width="6"><NumberInput v-model="value"></NumberInput></Col></Row>
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