<template>
  <div>
    <p><Rate v-model="value" readonly show-text></Rate></p>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 2.5
    };
  }
};
</script>
