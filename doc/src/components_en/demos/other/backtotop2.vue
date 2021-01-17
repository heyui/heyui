<template>
  <BackTop :target="getTarget" :bottom="100" :right="50" class-name="h-backtop-custom">
    Back to top
  </BackTop>
</template>

<script>
export default {
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};
</script>
