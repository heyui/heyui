<template>
  <div class="doc">
    <h2>Uploader 上传</h2>
    <p>HeyUI的上传，将提供一组样式，并提供七牛上传的demo。</p>
    <p>不同的系统可以根据自己的上传实现来开发。</p>
    <p>所有的示例将使用<a href="https://github.com/moxiecode/plupload" target="_blank">plupload</a>配套使用，因为组件已经将拖拽以及上传功能实现，这里也不做扩展了。</p>
    <p>同时，我们将提供一个使用plupload七牛上传的demo，由于大家实现上传的封装都不太一致，所以这里只直接提供一个封装示例。</p>
    <h3>单图片上传</h3>
    <div>
      <Qiniu :options="options" type="image" data-type="file" v-model="file"></Qiniu>
    </div>
  </div>
</template>

<script>
import qiniu from '../../../common/qiniu';


export default {
  data() {
    return {
      file: null,
      options: {
        mime_types: ['jpg', 'png']
      }
    }
  },
  mounted() {
  },
  methods: {
  },
  components: {
    Qiniu: qiniu
  }
}
</script>
