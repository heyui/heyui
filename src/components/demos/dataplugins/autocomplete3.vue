<template>
  <div>
    <p>value:{{value}}</p>
    <AutoComplete dict="simple"
                  :multiple="true"
                  v-model="value" @change="onChange"></AutoComplete>
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
    onChange(data) {
      log(data);
    },
  }
};
</script>
