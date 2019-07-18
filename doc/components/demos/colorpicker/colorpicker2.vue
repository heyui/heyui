<template>
  <div>
    <p><Button size="s" @click="value = 'rgba(64, 168, 165, 0.49)'" color="primary">更新 / Update</Button> value: {{value}} </p>
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
