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
      colors: ['#D14949', '#D1C649', '#7BD149', '#49BFD1', '#4959D1', '#B449D1', '#9575CD', '#D1C4E9']
    };
  }
};
</script>
