<template>
  <div class="doc">
    <h2>Uploader 上传</h2>
    <p>HeyUI的上传，将提供一组样式，并提供七牛上传的demo。</p>
    <p>不同的系统可以根据自己的上传实现来开发。</p>
    <p>所有的示例将使用<a href="https://github.com/moxiecode/plupload" target="_blank">plupload</a>配套使用，因为组件已经将拖拽以及上传功能实现，这里也不做扩展了。</p>
    <p>我们将提供一个使用plupload七牛上传的demo，由于大家实现上传的封装都不太一致，所以这里会提供一个<span class="link" @click="goDown">封装示例</span>。</p>

    <h3>单图片上传-file对象</h3>
    <example demo="dataplugins/uploader1"></example>
  
    <h3>多图片上传-file对象数组</h3>
    <p>添加limit参数可以限制上传的总数量</p>
    <example demo="dataplugins/uploader2"></example>

    <h3>单图片上传-url</h3>    
    <example demo="dataplugins/uploader3"></example>

  
    <h3>多图片上传-url数组</h3>
    <example demo="dataplugins/uploader4"></example>

    <h3>单文件上传</h3>
    <example demo="dataplugins/uploader5"></example>
  
    <h3>多文件上传</h3>
    <example demo="dataplugins/uploader6"></example>

  
    <h3>拖拽上传</h3>
    <example demo="dataplugins/uploader7"></example>

    <h3 class="democodes">七牛的通用示例</h3>
    <p>本示例写明了通用的处理方案，如果使用其他上传方式，请参照该文件修改。<a href="https://github.com/heyui/heyui/blob/master/doc/demos/common/qiniu.vue" target="_blank">文件链接</a></p>
    <codes src="/common/qiniu.vue" type="html"></codes>
  </div>
</template>

<script>

export default {
  data () {
    return {
    }
  },
  methods: {
    goDown() {
      this.$ScrollIntoView(this.$el.querySelector('.democodes'), {
        align: {
          top: 0,
          topOffset: 80
        }
      });
    }
  }
}
</script>