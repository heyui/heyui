<template>
  <div>
    <Button @click.native="visible = true">Hi!</Button>
    <Modal v-model="visible">
      <div>Hello HeyUI!</div>
    </Modal>
  </div>
</template>
<script>
export default {
  data() {
    return {
      visible: false
    };
  }
};
</script>
