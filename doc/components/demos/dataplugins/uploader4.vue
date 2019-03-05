<template>
  <div>
      <Qiniu :options="options" type="images" data-type="url" v-model="file"></Qiniu>
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
      file: []
    };
  },
  components: {
    Qiniu: qiniu
  }
};
</script>
