<template>
  <Modal v-model="value" className="h-image-preview-modal">
    <div class="h-image-preview">
      <span class="h-image-preview-icon h-image-preview-left-icon"><i class="h-icon-left"></i></span>
      <img :src="previewFile.url" class="h-image-preview-image" :alt="previewFile.name"></img>
      <span class="h-image-preview-icon h-image-preview-right-icon"><i class="h-icon-right"></i></span>
    </div>
  </Modal>
</template>
<script>

export default {
  name: 'hImagePreview',
  props: {
    value: {
      type: [Array, Object, String],
      default: () => ([])
    },
    dataType: {
      type: String,
      default: 'file' //url
    },
    uploadList: { 
      type: Array,
      default: () => []
    },
    files: {
      type: [Array, Object, String],
      default: () => []
    },
    limit: Number,
    className: String,
    readonly: {
      type: Boolean,
      default: false
    }
  },
  data() {
    let param = {};
    if (this.config) {
      param = utils.extend({}, config.getOption("uploader"), this.option);
    } else {
      param = utils.extend({}, config.getOption("uploader"), this.option);
    }
    return {
      param,
      preview: false,
      previewFile: {},
      isdragging: false
    }
  },
  methods: {
    clickfile(file) {
      this.$emit('fileclick', file);
    },
    clickImage(file) {
      if (this.readonly) {
        this.preview = true;
        this.previewFile = file;
      } else {
        this.$emit('imageclick', file);
      }
    },
    previewImage(file) {
      this.preview = true;
      this.previewFile = file;
    },
    getBrowseButton() {
      return this.$el.querySelector(".h-uploader-browse-button");
    },
    getDropElement() {
      return this.$el.querySelector(".h-uploader-drop-element");
    },
    getBackgroundImage(file) {
      let param = {};
      if (file.thumbUrl || file.url) {
        param['background-image'] = `url(${file.thumbUrl || file.url})`;
      }
      return param;
    },
    getFileList() {
      if (this.isSingle) {
        return this.file ? dispose(this.file, this.dataType, this.param) : null;
      }

      let list = [];
      for (let f of this.fileList) {
        list.push(dispose(f, this.dataType, this.param));
      }
      return list;
    },
    deleteFile(index) {
      this.$emit("deletefile", index);
    }
  },
  computed: {
    showUploadButton() {
      if(this.readonly) return false;
      return (!this.isSingle && (!this.limit || this.limit > this.files.length)) || (this.isSingle&&!this.files);
    },
    showReUploadWord() {
      return this.t('h.uploader.reUpload');
    },
    showUploadWord() {
      return this.t('h.uploader.upload');
    },
    isSingle() {
      return this.type == 'image' || this.type == 'file';
    },
    uploaderCls() {
      return {
        [prefix]: true,
        [`${prefix}-${this.type}-container`]: true,
        [this.className]: this.className
      }
    },
    fileList() {
      let list = [];
      if (utils.isArray(this.files)) {
        for (let v of this.files) {
          list.push(parse(v, this.param));
        }
      } else if (this.files) {
        list.push(parse(this.files, this.param));
      }

      if (this.uploadList.length > 0) {
        if (this.isSingle) {
          list = [this.uploadList[0]];
        } else {
          list.push(...this.uploadList);
        }
      }
      return list;
    },
    file() {
      return this.fileList.length ? this.fileList[0] : null;
    }
  },
  components: {
    Modal
  }
};
</script>
