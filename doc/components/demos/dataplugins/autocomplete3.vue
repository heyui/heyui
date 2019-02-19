<template>
  <div >
    <p>value:{{value}}</p>
    <div v-width="300"><AutoComplete dict="simple" :multiple="true" v-model="value" @change="onChange"></AutoComplete></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: []
    }
  },
  methods: {
    onChange(data, trigger) {
      log(data, trigger);
    },
  }
};
</script>
