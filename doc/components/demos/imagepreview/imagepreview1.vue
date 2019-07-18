<template>
  <div>
    <Button @click="openPreview(0)">打开图片预览</Button>
    <p>
      <ImagePreview :datas="datas" @click="openPreview"/>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    const link = 'https://lokeshdhakar.com/projects/lightbox2/images/';
    return {
      datas: [
        { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
        { thumbUrl: `https://5b0988e595225.cdn.sohucs.com/images/20170905/f6a2c1dafab944d2a75b9798c8ea0f7d.png`, url: `https://5b0988e595225.cdn.sohucs.com/images/20170905/f6a2c1dafab944d2a75b9798c8ea0f7d.png` },
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
