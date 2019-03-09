<template>
  <div>
    <Uploader @fileclick="fileclick" :type="type" :files="value" :data-type="dataType" :limit="limit" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" @deletefile="deletefile">
      <div slot="dragdrop" v-if="$slots.dragdrop"><slot name="dragdrop"></slot></div>
    </Uploader>
  </div>
</template>
<script>
// Since the package of Qi Niu and plupload is not es6 mode, we have encapsulated two corresponding es6 packages.
import qiniujs from 'qiniu-js-es6';
import utils from 'hey-utils';

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
    };
  },
  methods: {
    deletefile(index) {
      let value = null;
      if (this.type == 'images' || this.type == 'files') {
        value = utils.copy(this.value);
        value.splice(index, 1);
      } else {
        value = null;
        this.uploadList = [];
      }
      this.$emit('input', value);
    },
    init() {
      let that = this;
      // Seven cattle documents please refer to https://developer.qiniu.com/kodo/sdk/1283/javascript
      // Uploader documentation please refer to http://www.cnblogs.com/2050/p/3913184.html
      let param = {
        runtimes: 'html5',
        browse_button: this.$refs.uploader.getBrowseButton(),
        uptoken_url: 'https://www.heyui.top/api/uptoken',
        domain: '//img.heyui.top',
        chunk_size: '4mb',
        unique_names: true,
        auto_start: false,
        filters: {},
        init: {
          FilesAdded(up, files) {
            if (that.limit && files.length + that.value.length > that.limit) {
              that.$Message.error(`You uploaded more than ${that.limit}个。`);
              return;
            }
            files.forEach(file => {
              if (FileReader) {
                let reader = new FileReader();
                reader.onload = event => {
                  file.thumbUrl = event.target.result;
                };
                reader.readAsDataURL(file.getNative());
              }
              that.uploadList.push(file);
            });
            // that.$emit("startUpload");
            up.start();
          },
          BeforeUpload(up, file) {},
          UploadProgress(up, file) {
            // log(file.percent);
          },
          FileUploaded(up, file, info) {
            // log('FileUploaded', file.status);
            let domain = up.getOption('domain');
            let res = JSON.parse(info.response);
            let sourceLink = `${domain}/${res.key}`; // Get the Url of the file after successful upload
            file.url = sourceLink;
          },
          Error(up, err, errTip) {
            that.uploadList.splice(0, that.uploadList.length);
            that.$Message.error(errTip);
          },
          UploadComplete() {
            that.$emit('completeUpload');
            let fileList = that.$refs.uploader.getFileList();
            //   fileList.map(item=>{
            //     // Final assembly of the returned data
            //     // item.type = 5;
            //     // item.fileType = ...
            //   })
            that.$emit('input', fileList);
            if (that.type == 'files' || that.type == 'images') {
              that.uploadList.splice(0, that.uploadList.length);
            }
          }
          // Key(up, file) {
          //     // If you want to personalize the key of each file in the front end, you can configure this function.
          //     // This configuration must be in unique_names: false，save_key: false Only take effect
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
      qiniujs.Qiniu.uploader(param);
    },
    fileclick(file) {
      this.$Modal({
        title: 'Preview or download',
        content: `Customize file preview or download`
      });
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.init();
    });
  }
};
</script>
