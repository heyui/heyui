<template>
  <div :class="uploaderCls">
    <template v-if="type=='image'">
      <div class="h-uploader-image" v-if="file">
        <div class="h-uploader-image-background" :style="getBackgroundImage(file)"></div>
        <div class="h-uploader-progress" v-if="file.status==2||file.status==1">
          <Progress :percent="file.percent"  :stroke-width="5"></Progress>
        </div>
        <div class="h-uploader-image-operate h-uploader-browse-button" v-else>
          <div>{{showReUploadWord}}</div>
        </div>
      </div>
      <div class="h-uploader-image-empty h-uploader-browse-button" v-else>
        <i class="h-icon-plus"></i>
      </div>
    </template>

    <template v-if="type=='images'">
      <div class="h-uploader-image-empty h-uploader-browse-button" v-if="!readonly">
        <i class="h-icon-plus"></i>
      </div>
      <div v-for="(file, index) in fileList" :key="file.id" class="h-uploader-image">
        <div class="h-uploader-image-background" :style="getBackgroundImage(file)"></div>
        <div class="h-uploader-progress" v-if="file.status==2||file.status==1">
          <Progress :percent="file.percent"  :stroke-width="5"></Progress>
        </div>
        <div class="h-uploader-image-operate" v-else @click="clickImage(index, file)" :class="{'h-uploader-image-operate-pointer': readonly}">
          <div v-if="!readonly">
            <span class="h-uploader-operate" @click="previewImage(index)"><i class="h-icon-fullscreen"></i></span>
            <i class="h-split" v-width="3"></i>
            <span class="h-uploader-operate" @click="deleteFile(index)"><i class="h-icon-trash"></i></span>
          </div>
        </div>
      </div>
    </template>
    <template v-if="type=='file'||type=='files'">
      <div v-if="$slots.dragdrop" class="h-uploader-browse-button h-uploader-drop-element" :class="{'h-uploader-dragging': isdragging}" @dragover="isdragging=true" @dragleave="isdragging=false"  @drop="isdragging=false" ><slot name="dragdrop"></slot></div>
      <div v-else><Button icon="h-icon-upload" class="h-uploader-browse-button" v-show="showUploadButton">{{showUploadWord}}</Button></div>
      <div class="h-uploader-files">
        <div v-for="(file, index) in fileList" :key="file.id" class="h-uploader-file">
          <div class="h-uploader-file-progress" v-if="file.status==2">
            <Progress :percent="file.percent"  :stroke-width="5"><span slot="title">{{file[param.fileName]}}</span></Progress>
          </div>
          <div class="h-uploader-file-info" v-else>
            <span class="link" @click="clickfile(file, index)">{{file.name}}</span><i class="h-icon-trash middle-right link" v-if="!readonly" @click="deleteFile(index)"></i>
          </div>
        </div>
      </div>
    </template>
  </div>
</template>
<script>
import utils from '../../utils/utils';
import config from '../../utils/config';


const prefix = 'h-uploader';

const parse = function (value, param) {
  if (utils.isString(value)) {
    return { url: value, original: { [param.urlName]: value } };
  } else if (utils.isObject(value)) {
    return { url: value[param.urlName], name: value[param.fileName], thumbUrl: value.thumbUrl || param.thumbUrl.call(value), original: value };
  }
}
const dispose = function (value, type, param) {
  if (type == "url") {
    return value.url;
  } else if (utils.isObject(value)) {
    if (value.original) {
      return value.original;
    }
    return { [param.urlName]: value.url, [param.fileName]: value.name, thumbUrl: value.thumbUrl, file: value };
  }
}

export default {
  name: 'hUploader',
  props: {
    type: {
      type: String,
      default: 'file' //files, image, images
    },
    dataType: {
      type: String,
      default: 'file' //url
    },
    uploadList: { 
      type: Array,
      default: () => ([])
    },
    files: {
      type: [Array, Object, String],
      default: () => ([])
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
      previewIndex: -1,
      isdragging: false
    }
  },
  methods: {
    clickfile(file, index) {
      this.$emit('fileclick', file, index);
    },
    clickImage(index, file) {
      if (this.readonly) {
        this.$ImagePreview(this.fileList, index);
      } else {
        this.$emit('imageclick', file);
      }
    },
    previewImage(index) {
      this.$ImagePreview(this.fileList, index);
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
  }
};
</script>
