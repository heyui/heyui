<template>
  <div>
    <p>value: Selected{{value.length}}个</p>
    <p v-width="300">
      <TreePicker config="simple" multiple filterable v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      // 1.17.0+ support this way of definition, use [{ id: 1, title: '1级' }] in other versions
      value: [1, 2]
    };
  },
  methods: {
    change() {
      // Triggered when the selector is closed
    },
    choose(data) {
      log(data);
    },
    select(data) {
      log(data);
    }
  }
};
</script>
