<template>
  <div>
    <p><ImagePreview :datas="datas" @click="openPreview"/></p>
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
        { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
        { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
        { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` }
      ]
    };
  },
  methods: {
    openPreview(index = 0, data) {
      this.$ImagePreview(this.datas, index);
    }
  }
};
</script>
