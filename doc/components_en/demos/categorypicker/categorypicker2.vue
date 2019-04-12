<template>
  <div>
    <p>Value：{{value}}</p>
    <p v-width="300">
      <CategoryPicker config="citys" v-model="value"></CategoryPicker>
    </p>
    <blockquote>Asynchronous loading</blockquote>
    <p>Value：{{value2}}</p>
    <p v-width="300">
      <CategoryPicker config="locations" v-model="value2"></CategoryPicker>
    </p>
    <p>Value：{{value3}}</p>
    <p v-width="300">
      <CategoryPicker config="locations" multiple v-model="value3"></CategoryPicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: 511800,
      value2: null,
      value3: []
    };
  },
  mounted() {
  }
};
</script>
