<template>
  <div class="doc">
    <h2>Uploader 上传</h2>
    <p>HeyUI的上传，将提供一组样式，并提供七牛上传的demo。</p>
    <p>不同的系统可以根据自己的上传实现来开发。</p>
    <p>所有的示例将使用<a href="https://github.com/moxiecode/plupload" target="_blank">plupload</a>配套使用，因为组件已经将拖拽以及上传功能实现，这里也不做扩展了。</p>
    <p>同时，我们将提供一个使用plupload七牛上传的demo，由于大家实现上传的封装都不太一致，所以这里会提供一个封装示例。</p>


    <h3>七牛的通用示例</h3>
    <p>本示例写明了通用的处理方案，如果使用其他上传方式，请参照该文件修改。<a href="https://github.com/heyui/heyui/blob/doc/src/components/common/qiniu.vue" target="_blank">示例</a></p>

    <h3>单图片上传</h3>
    <div>
      <Qiniu :options="options" type="image" data-type="file" v-model="file"></Qiniu>
    </div>
  
    <h3>多图片上传-file</h3>
    <div>
      <Qiniu :options="options" type="images" data-type="file" v-model="images"></Qiniu>
    </div>

    <h3>单图片上传-url</h3>
    <div>
      <Qiniu :options="options" type="image" data-type="url" v-model="file2"></Qiniu>
    </div>
  
    <h3>多图片上传-urls</h3>
    <div>
      <Qiniu :options="options" type="images" data-type="url" v-model="images2"></Qiniu>
    </div>
  </div>
</template>

<script>
import qiniu from '../../../common/qiniu';


export default {
  data() {
    return {
      file: null,
      images: [],
      images2: ['http://oroc6hc3j.bkt.clouddn.com/o_1bj4n9g0grc6jr2hs1uni1qdmt.jpg'],
      file2: null,
      options: {
        filters: {
          mime_types: [
            { title: "Image files", extensions: "jpg,gif,png" }
          ]
        }
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
