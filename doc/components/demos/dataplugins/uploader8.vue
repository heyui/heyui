<template>
    <div>
      <blockquote>Url list</blockquote>
      <Uploader type="images" dataType="url" :files="images" readonly></Uploader>
      <blockquote>File object list</blockquote>
      <Uploader type="images" dataType="file" :files="imageObjects" readonly></Uploader>
      <blockquote>File object list</blockquote>
      <Uploader type="files" @fileclick="fileclick" dataType="file" :files="attachments" readonly></Uploader>
    </div>
</template>

<script>

export default {
  data() {
    const link = 'https://lokeshdhakar.com/projects/lightbox2/images/';
    return {
      images: [
        `${link}image-1.jpg`,
        `${link}image-2.jpg`,
        `${link}image-3.jpg`
      ],
      imageObjects: [
        { thumbUrl: `${link}thumb-4.jpg`, url: `${link}image-4.jpg` },
        { thumbUrl: `${link}thumb-5.jpg`, url: `${link}image-5.jpg` },
        { thumbUrl: `${link}thumb-6.jpg`, url: `${link}image-6.jpg` },
      ],
      attachments: [
        { url: `${link}image-1.jpg`, name: `文件1.jpg` },
        { url: `${link}image-2.jpg`, name: `文件2.jpg` },
        { url: `${link}image-3.jpg`, name: `文件3.jpg` },
      ]
    }
  },
  methods: {
    fileclick(file, index) {
      this.$ImagePreview(this.attachments, index);
    }
  }
}
</script>