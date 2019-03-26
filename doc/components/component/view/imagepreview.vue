<template>
  <div class="doc">
    <h2>ImagePreview 图片预览</h2>
    <blockquote>$ImagePreview方法：1.15.0+，ImagePreview组件：1.18.0+</blockquote>

    <h3>基本调用</h3>
    <example demo="imagepreview/imagepreview1"></example>

    <h3>ImagePreview组件</h3>
    <example demo="imagepreview/imagepreview2"></example>

    <h3>$ImagePreview 方法</h3>
    <table class="table">
      <tr>
        <th>方法</th>
        <th>说明</th>
      </tr>
      <tr>
        <td>$ImagePreview</td>
        <td>this.$ImagePreview(urlList:[{url}], index);</td>
      </tr>
    </table>

    <h3>ImagePreview 参数</h3>
    <table class="table">
      <tr>
        <th>参数</th>
        <th>说明</th>
        <th>类型</th>
        <th>可选值</th>
        <th>默认值</th>
      </tr>
      <tr>
        <td>datas</td>
        <td>图片展示列表</td>
        <td>Array, [{thumbUrl, url}]</td>
        <td>-</td>
        <td>-</td>
      </tr>
      <tr>
        <td>width</td>
        <td>图像大小</td>
        <td>Number</td>
        <td>-</td>
        <td>60</td>
      </tr>
      <tr>
        <td>distance</td>
        <td>图片的间距</td>
        <td>Number</td>
        <td>-</td>
        <td>10</td>
      </tr>
      <tr>
        <td>borderRadius</td>
        <td>图片圆边的大小</td>
        <td>Number</td>
        <td>3</td>
        <td></td>
      </tr>
    </table>

    <h3>ImagePreview 事件</h3>
    <table class="table">
      <tr>
        <th>事件</th>
        <th>描述</th>
        <th>返回值</th>
      </tr>
      <tr>
        <td>click</td>
        <td>图片点击事件</td>
        <td>(index, data)</td>
      </tr>
    </table>
  </div>
</template>
