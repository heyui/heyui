<template>
  <div>
    <Button @click="openPreview1">Preview a single picture</Button>
    <Button @click="openPreview2">Preview multiple pictures</Button>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {
    openPreview1() {
      // compatible 1.24.2+
      this.$ImagePreview(`https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg`);
    },
    openPreview2() {
      this.$ImagePreview([
        `https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg`,
        `https://5b0988e595225.cdn.sohucs.com/images/20170905/f6a2c1dafab944d2a75b9798c8ea0f7d.png`,
        `https://lokeshdhakar.com/projects/lightbox2/images/image-6.jpg`
      ], 0);
    }
  }
};
</script>
