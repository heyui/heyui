<template>
  <div>
    <p><Rate v-model="value1"></Rate></p>
    <p><Rate v-model="value2" show-text></Rate></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value1: 2,
      value2: 2.3
    };
  }
};
</script>
