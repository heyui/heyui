<template>
  <div>
    <ColorPicker v-model="value" enableAlpha></ColorPicker>
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
