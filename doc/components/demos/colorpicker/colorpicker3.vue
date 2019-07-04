<template>
  <div>
    <p>value: {{value}} </p>
    <ColorPicker v-model="value" :colors="colors"></ColorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      colors: ['#311B92', '#512DA8', '#322F38', 'rgb(255, 120, 0)', 'hsv(51, 100, 98)', '#673AB7', '#9575CD', '#D1C4E9']
    };
  }
};
</script>
