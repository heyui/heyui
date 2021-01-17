<template>
  <div>
    <div>
      <p class="gray-color">You can only upload files in png, jpg, gif format, upload up to 1MB, limited 3 files。</p>
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
          mime_types: [{ title: 'Image files', extensions: 'jpg,gif,png' }]
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
