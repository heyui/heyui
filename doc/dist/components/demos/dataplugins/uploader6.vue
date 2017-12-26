<template>
  <div>
      <Qiniu :options="options" show-type="files" data-type="file" v-model="file"></Qiniu>
  </div>
</template>

<script>
import qiniu from '../../common/qiniu';

export default {
  data() {
    return {
      options: {
        max_file_size: '1mb'
      },
      file: []
    }
  },
  components: {
    Qiniu: qiniu
  }
}
</script>