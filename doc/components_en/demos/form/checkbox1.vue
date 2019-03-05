<template>
  <div>
    <Checkbox v-model="value">{{value}}</Checkbox>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: false
    };
  }
};
</script>
