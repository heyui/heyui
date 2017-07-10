<template>
  <div>
    <Uploader :type="type" :files="value" :data-type="dataType" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" @deletefile="deletefile">
      <div slot="dragdrop" v-if="$slots.dragdrop"><slot name="dragdrop"></slot></div>
    </Uploader>
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
      let value = utils.copy(this.value).splice(index, 1);
      this.$emit("input", value);
    },
    init() {
      let that = this;
      //文档请参考https://developer.qiniu.com/kodo/sdk/1283/javascript
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
            files.forEach((file) => {
              if (that.limit && (that.uploadList.length + that.value.length >= that.limit)) {
                that.$Message.error("你上传的文件超过限制。")
                return false;
              }
              file.isUpload = true;
              if (FileReader) {
                let reader = new FileReader();
                reader.onload = (event) => {
                  file.thumbUrl = event.target.result;
                };
                reader.readAsDataURL(file.getNative());
              }
              that.uploadList.push(file);
            });
            // that.$emit("startUpload");
          },
          BeforeUpload(up, file) {
            if (!file.isUpload) {
              return false;
            }
          },
          UploadProgress(up, file) {
            // log(file.percent);
          },
          FileUploaded(up, file, info) {
            // log('FileUploaded', file.status);
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
      let muti = this.type == 'files' || this.type == 'images';
      param.multi_selection = muti;
      param.multipart = muti;
      qiniujs.Qiniu.uploader(param);
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  }
}
</script>
