<template>
  <div class="imagepreview-1-vue">
    <Button @click="openPreview(0)">打开图片预览</Button>
    <p>
      <img v-for="(d, index) of datas" :src="d.thumbUrl" @click="openPreview(index)">
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
        { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
        { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` },
      ]
    }
  },
  methods: {
    openPreview(index = 0) {
      this.$ImagePreview(this.datas, index);
    }
  }
}
</script>
<style lang="less">
.imagepreview-1-vue {
  img {
    width: 60px;
    cursor: pointer;
    margin-right: 10px;
    border-radius: 4px;
    &:hover {
      box-shadow: 0 0 6px rgb(63, 63, 63);
    }
  }
}
</style>
