<template>
  <div>
    <Uploader :type="type" :files="value" :data-type="dataType" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" @deletefile="deletefile"></Uploader>
  </div>
</template>
<script>

import qiniujs from 'qiniu-js-es6';
import pluploadjs from 'plupload-es6';
import utils from 'hey-utils';

export default {
  props: {
    options: {
      type: Object,
      default: () => { }
    },
    type: {
      type: String,
      default: 'image'
    },
    dataType: String,
    dragdrop: {
      type: Boolean,
      default: false
    },
    value: {
      type: [Object, Array, String]
    },
    limit: Number,
    className: String
  },
  data() {
    return {
      uploadList: []
    }
  },
  methods: {
    deletefile(index) {
      this.value.splice(index, 1);
      this.$emit("input", this.value);
    }
  },
  mounted() {
    //文档请参考https://developer.qiniu.com/kodo/sdk/1283/javascript
    let that = this;
    this.$nextTick(() => {
      let param = {
        runtimes: 'html5',
        browse_button: this.$refs.uploader.getBrowseButton(),
        uptoken_url: 'http://demo.heyui.top/api/uptoken',
        domain: 'http://oroc6hc3j.bkt.clouddn.com',
        chunk_size: '4mb',
        unique_names: true,
        auto_start: true,
        filters: {},
        init: {
          FilesAdded(up, files) {
            pluploadjs.plupload.each(files, (file) => {
              if (FileReader) {
                let reader = new FileReader();
                reader.onload = (event) => {
                  file.thumbUrl = event.target.result;
                };
                reader.readAsDataURL(file.getNative());
              }
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
            log(file.percent);
          },
          FileUploaded(up, file, info) {
            log('FileUploaded', file.status);
            let domain = up.getOption('domain');
            let res = JSON.parse(info.response);
            let sourceLink = `${domain}/${res.key}`; //获取上传成功后的文件的Url
            file.url = sourceLink;
          },
          Error(up, err, errTip) {
            that.uploadList.splice(0, that.uploadList.length);
            that.$Message.error(errTip);
          },
          UploadComplete() {
            that.$emit("completeUpload");
            let fileList = that.$refs.uploader.getFileList();
            that.$emit("input", fileList);
            that.uploadList.splice(0, that.uploadList.length);
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


      utils.extend(param, this.options);

      if (this.type == 'files' || this.type == 'images') {
        param.multi_selection = true;
        param.multipart = true;
      }
      qiniujs.Qiniu.uploader(param);
    });
  }
}
</script>
