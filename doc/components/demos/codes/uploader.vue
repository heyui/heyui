<template>
  <div class="uploader-vue">
    <Uploader :type="type" :files="value" :data-type="dataType" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" @deletefile="deletefile" @fileclick="fileclick">
      <div slot="dragdrop" v-if="$slots.dragdrop"><slot name="dragdrop"></slot></div>
    </Uploader>
  </div>
</template>

<script>
import InitUploader from 'js/plugin/uploader/customUploader';
import pluploadjs from 'plupload-es6';
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
    perm: {
      type: String,
      default: 'PRIVATE'
    },
    limit: Number,
    className: String,
    bizType: Number
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
    },
    initUploader() {
      const that = this;
      InitUploader({
        perm: this.perm,
        browserButton: this.$refs.uploader.getBrowseButton(),
        dragdropElement: this.dragdrop && this.$refs.uploader.getDropElement(),
        multiSelection: this.type == 'files' || this.type == 'images',
        overwriteParam: this.options,
        fnFilesAdded(up, files) {
          if (that.value.length + files.length > that.limit) {
            that.$Message.error(`你上传的文件数量已超过${that.limit}个。`);
            return false;
          }
          pluploadjs.plupload.each(files, (file) => {
            file.fileType = file.name.split('.').reverse()[0];
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
        fnBeforeUpload(up, file) {
          // log('BeforeUpload', file.status);
          that.$emit("startUpload");
        },
        // fnUploadProgress: () => {},
        fnFileUploaded(up, file, info) {
          // log('FileUploaded', file.status);
          let domain = up.getOption('domain');
          let res = JSON.parse(info.response);
          let sourceLink = `${domain}${res.key}`; //获取上传成功后的文件的Url
          file.url = sourceLink;
          file.key = res.key;
        },
        fnUploadComplete() {
          that.$emit('completeUpload');
          let fileList = that.$refs.uploader.getFileList();
          if (that.dataType === 'file') {
            fileList = fileList.map((f) => {
              if (f.file) {
                return {
                  key: f.file.key,
                  name: f.name,
                  type: that.bizType,
                  fileType: f.file.fileType,
                  url: f.url,
                };
              } else {
                return f;
              }
            });
          }
          that.$emit('input', fileList);
          that.uploadList.splice(0, that.uploadList.length);
        },
        fnError(up, err, errTip) {
          that.uploadList.splice(0, that.uploadList.length);
          that.$Message.error(errTip);
        },
      });
    },
    fileclick(file) {
      let originalType = file.original.fileType || file.original.file.type;
      if(originalType == "image/jpeg" || originalType == "image/png" || originalType == "png" || originalType == "jpg" || originalType == "jpeg") {
        this.$Modal({
          title: this.options.fileClickModelTitle || '',
          content: `<img style="max-width:900px"  src="${file.url}"></img>`,
          hasCloseIcon: false,
          buttons:[]
        })
      }else if(originalType=='aac'||originalType=='mp3'||originalType=='wav'){
        this.$Modal({
          buttons: [],
          content: `<audio class="audio-play" preload="none" src="${file.url}" controls="controls"></audio>`,
        })
      }
    },
  },
  mounted() {
    //文档请参考https://developer.qiniu.com/kodo/sdk/1283/javascript
    let that = this;
    this.$nextTick(() => {
      that.initUploader();
    });
  }
}
</script>
