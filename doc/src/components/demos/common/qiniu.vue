<template>
  <div>
    <Uploader @fileclick="fileclick" :type="type" :files="value" :data-type="dataType" :limit="limit" :uploadList="uploadList" ref="uploader" :dragdrop="dragdrop" :class-name="className" @deletefile="deletefile">
      <div slot="dragdrop" v-if="$slots.dragdrop"><slot name="dragdrop"></slot></div>
    </Uploader>
  </div>
</template>
<script>

// 由于七牛和plupload的封装不是es6模式的，所以我们自己封装了两个对应的es6包
import qiniujs from 'qiniu-js-es6';
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
      // 七牛文档请参考https://developer.qiniu.com/kodo/sdk/1283/javascript
      // uploader文档请参考http://www.cnblogs.com/2050/p/3913184.html
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
            if (that.limit && (files.length + that.value.length > that.limit)) {
              that.$Message.error(`你上传的文件超过${that.limit}个。`);
              return;
            }
            files.forEach((file) => {
              if (FileReader) {
                let reader = new FileReader();
                reader.onload = (event) => {
                  file.thumbUrl = event.target.result;
                };
                reader.readAsDataURL(file.getNative());
              }
              if (that.type == 'files' || that.type == 'images') {
                that.uploadList.push(file);
              } else {
                that.uploadList = [file];
              }
            });
            // that.$emit("startUpload");
            up.start();
          },
          BeforeUpload(up, file) {

          },
          UploadProgress(up, file) {
            // log(file.percent);
          },
          FileUploaded(up, file, info) {
            // log('FileUploaded', file.status);
            let domain = up.getOption('domain');
            let res = JSON.parse(info.response);
            let sourceLink = `${domain}/${res.key}`; // 获取上传成功后的文件的Url
            file.url = sourceLink;
          },
          Error(up, err, errTip) {
            that.uploadList.splice(0, that.uploadList.length);
            that.$Message.error(errTip);
          },
          UploadComplete() {
            that.$emit('completeUpload');
            let fileList = that.$refs.uploader.getFileList();
            // log(fileList);
            //   fileList.map(item=>{
            //     // 对返回的数据做最后的组装
            //     // item.type = 5;
            //     // item.fileType = ...
            //   })
            that.$emit('input', fileList);
            if (that.type == 'files' || that.type == 'images') {
              that.uploadList.splice(0, that.uploadList.length);
            }
          }
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
      qiniujs.Qiniu.uploader(param);
    },
    fileclick(file) {
      this.$Modal({
        title: '预览或者下载',
        content: `自定义处理文件预览或者下载`
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
