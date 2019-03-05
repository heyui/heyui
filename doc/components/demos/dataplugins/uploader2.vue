<template>
  <div>
    <div>
      <p class="gray-color">您只可以上传png, jpg, gif格式的文件，上传大小最大1MB，最多可上传3张。</p>
      <Qiniu :options="options" type="images" data-type="file" v-model="images" :limit="3"></Qiniu>
    </div>
  </div>
</template>

<script>
import qiniu from '../../demos/common/qiniu';

export default {
  data() {
    return {
      options: {
        max_file_size: '1mb',
        filters: {
          mime_types: [
            { title: 'Image files', extensions: 'jpg,gif,png' }
          ]
        }
      },
      images: []
    };
  },
  components: {
    Qiniu: qiniu
  }
};
</script>
