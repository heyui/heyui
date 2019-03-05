<template>
  <div v-width="300">
      <Qiniu :options="options" type="file" data-type="file" v-model="file"></Qiniu>
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
      file: null
    };
  },
  components: {
    Qiniu: qiniu
  }
};
</script>
