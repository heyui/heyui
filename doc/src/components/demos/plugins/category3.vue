<template>
  <div>
    <p>{{value}}</p>
    <p v-width="300">
      <Category config="simple" type="key" v-model="value"></Category>
    </p>
    <p>{{value2}}</p>
    <p v-width="300">
      <Category config="simple" type="object" v-model="value2" multiple></Category>
    </p>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: 101,
      value2: []
    };
  }
};
</script>
