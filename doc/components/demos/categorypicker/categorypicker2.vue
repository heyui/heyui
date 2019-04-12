<template>
  <div>
    <p>值：{{value}}</p>
    <p v-width="300">
      <CategoryPicker config="locations" v-model="value"></CategoryPicker>
    </p>
    <p>值：{{value2}}</p>
    <p v-width="300">
      <CategoryPicker config="locations" multiple v-model="value2"></CategoryPicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 330185,
      value2: [330185]
    };
  },
  mounted() {
  }
};
</script>
