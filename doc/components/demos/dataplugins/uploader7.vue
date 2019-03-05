<template>
    <div v-width="400">
      <Qiniu :options="options" type="files" v-model="file" dragdrop>
        <div slot="dragdrop">
          <p class="text-center"><i class="h-icon-upload blue-color" v-font="30" ></i></p>
          <p class="text-center">点击或将文件拖拽到这里上传</p>
        </div>
      </Qiniu>
    </div>
</template>

<script>
import qiniu from '../../demos/common/qiniu';

export default {
  data() {
    return {
      options: {
        max_file_size: '1mb'
      },
      file: []
    };
  },
  components: {
    Qiniu: qiniu
  }
};
</script>
