<template>
  <div class="doc">
    <h2>Uploader 上传</h2>
    <p>HeyUI的上传，将提供一组样式，并提供七牛上传的demo。</p>
    <p>不同的系统可以根据自己的上传实现来开发。</p>
    <p>所有的示例将使用<a href="https://github.com/moxiecode/plupload" target="_blank">plupload</a>配套使用，因为组件已经将拖拽以及上传功能实现，这里也不做扩展了。</p>
    <p>我们将提供一个使用plupload七牛上传的demo，由于大家实现上传的封装都不太一致，所以这里会提供一个<span class="link" @click="goDown">封装示例</span>。</p>
    <p class="component-name-tip">非 template/render 模式下，请使用 <code>h-uploader</code>。</p>

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

    <h3>只读展示</h3>
    <example demo="dataplugins/uploader8"></example>

    <h3>Uploader 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>type</td>
        <td>文件或者图片的展示模式</td>
        <td>String</td>
        <td>file, image, files, images</td>
        <td>file</td>
      </tr>
      <tr>
        <td>dataType</td>
        <td>file对象或者url的数据模式</td>
        <td>String</td>
        <td>file, url</td>
        <td>file</td>
      </tr>
      <tr>
        <td>uploadList</td>
        <td>正在上传的列表</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>files</td>
        <td>已经上传成功的文件列表</td>
        <td>Array</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>className</td>
        <td>自定义class name</td>
        <td>String</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>readonly</td>
        <td>readonly, 1.5.0+</td>
        <td>Boolean</td>
        <td>-</td>
        <td>false</td>
      </tr>
    </table>

    <h3>Uploader 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>说明</th>
        <th>返回数据</th>
      </tr>
      <tr>
        <td>fileClick</td>
        <td>文件链接点击的时候</td>
        <td>file, index</td>
      </tr>
    </table>

    <h3 class="democodes">上传的通用示例</h3>
    <p>本示例写明了通用的上传处理方案，如果使用自己服务器上传的方式，请参照该文件修改。<a href="https://github.com/heyui/heyui/blob/master/doc/components/demos/common/qiniu.vue" target="_blank">文件链接</a></p>
    <codes src="/codes/uploader.txt" type="javascript"></codes>

    <h3 class="democodes">七牛上传的通用示例</h3>
    <p>本示例写明了七牛上传的处理方案。<a href="https://github.com/heyui/heyui/blob/master/doc/components/demos/common/qiniu.vue" target="_blank">文件链接</a></p>
    <codes src="/common/qiniu.vue" type="html"></codes>
  </div>
</template>

<script>

export default {
  data() {
    return {
    };
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
};
</script>
