<template>
  <div>
    <Uploader :type="type" :files="value" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" :limit="limit"></Uploader>
  </div>
</template>
<script>

import qiniujs from 'qiniu-js-es6';
import pluploadjs from 'plupload-es6';

export default {
  props: {
    options: {
      type: Object,
      default: () => {}
    },
    type: {
      type: String,
      default: 'image'
    },
    dragdrop: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Object, Array]
    },
    limit: Number,
    className: String
  },
  data() {
    return {
      uploadList: []
    }
  },
  mounted() {
    //文档请参考https://developer.qiniu.com/kodo/sdk/1283/javascript
    let that = this;
    this.$nextTick(() => {
      let param = {
        runtimes: 'html5',
        browse_button: this.$refs.uploader.getBrowseButton(),
        get_new_uptoken: true,
        uptoken_url: 'http://demo.heyui.top/api/uptoken',
        domain: 'http://oroc6hc3j.bkt.clouddn.com',
        chunk_size: '4mb',
        unique_names: true,
        auto_start: true,
        init: {
          FilesAdded(up, files) {
            pluploadjs.plupload.each(files, (file) => {
              that.uploadList.push(file);
            });
          },
          BeforeUpload(up, file) {
            if (that.uploadList.length > this.limit) {
              this.$Message.error("你上传的文件超过限制。")
              return false;
            }
            log('BeforeUpload', file.status);
            that.$emit("startUpload");
          },
          UploadProgress(up, file) {
            log(file.progress);
          },
          FileUploaded(up, file, info) {
            log('FileUploaded', file.status);
            let domain = up.getOption('domain');
            let res = JSON.parse(info.response);
            let sourceLink = `${domain}/${res.key}`; //获取上传成功后的文件的Url
            file.url = sourceLink;
          },
          Error(up, err, errTip) {
            log(errTip);
          },
          UploadComplete() {
            that.$emit("completeUpload");
            let fileList = that.$refs.uploader.getFileList();
            that.uploadList.splice(0, this.uploadList - 1);
            that.$emit("input", fileList);
          },
          // Key(up, file) {
          //     // 若想在前端对每个文件的key进行个性化处理，可以配置该函数
          //     // 该配置必须要在unique_names: false，save_key: false时才生效
          //     var key = "";
          //     // do something with key here
          //     return key
          // }
        }
      };
      if (this.dragdrop) {
        param.dragdrop = true;
        param.drop_element = this.$refs.uploader.getDropElement();
      }

      if (this.type == 'files' || this.type == 'images') {
        param.multi_selection = true;
      }
      qiniujs.Qiniu.uploader(param);
    });
  }
}
</script>
