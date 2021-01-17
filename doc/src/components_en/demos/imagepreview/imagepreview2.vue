<template>
  <div>
    <p>Single preview support 1.24.2+</p>
    <p><ImagePreview datas="https://lokeshdhakar.com/projects/lightbox2/images/image-4.jpg" @click="openPreview1"/></p>
    <p><ImagePreview :width="70" :borderRadius="4" :datas="datas" @click="openPreview"/></p>
    <p><ImagePreview :width="80" :borderRadius="5" :distance="15" :datas="datas" @click="openPreview"/></p>
  </div>
</template>
<script>
export default {
  data() {
    const link = 'https://lokeshdhakar.com/projects/lightbox2/images/';
    return {
      datas: [
        `${link}image-4.jpg`,
        `${link}image-5.jpg`,
        `${link}image-6.jpg`
      ]
    };
  },
  methods: {
    openPreview(index = 0, data) {
      this.$ImagePreview(this.datas, index);
    },
    openPreview1(data) {
      this.$ImagePreview(data);
    }
  }
};
</script>
