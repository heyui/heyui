<template>
  <div>
    <ColorPicker v-model="value"></ColorPicker>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null
    };
  }
};
</script>
