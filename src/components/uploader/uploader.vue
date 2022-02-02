<template>
  <div :class="uploaderCls">
    <template v-if="displayType == 'image'">
      <!-- 单图片 -->
      <template v-if="!multiple">
        <div v-if="singleFile" class="h-uploader-image">
          <div class="h-uploader-image-background" :style="getBackgroundImage(singleFile)" />
          <div v-if="isUploading(singleFile)" class="h-uploader-progress">
            <Progress v-if="showPercent" :percent="singleFile.percent" :stroke-width="5" />
            <i v-else class="h-icon-spinner" />
          </div>
          <div v-else class="h-uploader-image-operate h-uploader-browse-button" @click="triggerFileChoose">
            <div>{{ showReUploadWord }}</div>
          </div>
        </div>
        <div v-else-if="showUploadButton" class="h-uploader-image-empty h-uploader-browse-button" @click="triggerFileChoose">
          <i class="h-icon-plus" />
        </div>
      </template>

      <!-- 多图片 -->
      <template v-else>
        <div v-if="showUploadButton" class="h-uploader-image-empty h-uploader-browse-button" @click="triggerFileChoose">
          <i class="h-icon-plus" />
        </div>
        <div
          v-for="(file, index) of files"
          :key="file.uid"
          :class="{
            'h-uploader-image': true
          }"
        >
          <div class="h-uploader-image-background" :style="getBackgroundImage(file)" />
          <div v-if="isUploading(file)" class="h-uploader-progress">
            <Progress v-if="showPercent" :percent="file.percent" :stroke-width="5" />
            <i v-else class="h-icon-spinner" />
          </div>
          <div
            v-else
            :class="{
              'h-uploader-image-operate': true,
              'h-uploader-image-operate-pointer': readonly
            }"
            @click="imageClick(index, file)"
          >
            <div>
              <span class="h-uploader-operate" @click="previewImage(index)"><i class="h-icon-fullscreen" /></span>
              <template v-if="!readonly">
                <i class="h-space" style="width: 5px" />
                <span class="h-uploader-operate" @click="deleteFile(index, $event)"><i class="h-icon-trash" /></span>
              </template>
            </div>
          </div>
        </div>
      </template>
    </template>

    <!-- 文件上传 -->
    <template v-if="displayType == 'file'">
      <div
        v-if="$slots.dragdrop"
        class="h-uploader-browse-button h-uploader-drop-element"
        :class="{ 'h-uploader-dragging': isdragging }"
        @dragover="isdragging = true"
        @dragleave="isdragging = false"
        @drop="onDrap"
      >
        <slot name="dragdrop" />
      </div>
      <div v-else>
        <button v-if="showUploadButton" type="button" icon="h-icon-upload" class="h-btn h-uploader-browse-button" @click="triggerFileChoose">
          {{ showUploadWord }}
        </button>
      </div>
      <div class="h-uploader-files">
        <div v-for="(file, index) of files" :key="file.uid" class="h-uploader-file">
          <div v-if="isUploading(file)" class="h-uploader-file-progress">
            <Progress v-if="showPercent" :percent="file.percent" :stroke-width="5">
              <template v-slot:title>
                {{ file.name }}
              </template>
            </Progress>
            <div v-else class="h-uploader-file-loading">
              <span>{{ file.name }}</span
              ><i class="h-icon-spinner" />
            </div>
          </div>
          <div v-else class="h-uploader-file-info h-uploader-file-status-{{file.status}}" @click="fileClick(file, index)">
            <span class="link">{{ file.name }}</span
            ><i v-if="!readonly" class="h-icon-trash middle-right link" @click="deleteFile(index, $event)" />
          </div>
        </div>
      </div>
    </template>
    <input ref="file" type="file" :accept="accept" style="display: none" :multiple="multiple" @change="onFileChange" />
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';
import config from 'heyui/utils/config';
import Locale from 'heyui/mixins/locale';
import ImagePreview from 'heyui/plugins/image-preview';
import Message from 'heyui/plugins/message';

function getObjectURL(file) {
  if (file.type.toLowerCase().indexOf('image/') === -1) return null;
  if (window.createObjectURL != undefined) {
    // basic
    return window.createObjectURL(file);
  } else if (window.URL != undefined) {
    // mozilla(firefox)
    return window.URL.createObjectURL(file);
  } else if (window.webkitURL != undefined) {
    // webkit or chrome
    return window.webkitURL.createObjectURL(file);
  }
  return null;
}

const UPLOAD_STATUS = {
  UPLOADING: 'UPLOADING',
  SUCCESS: 'SUCCESS',
  FAIL: 'FAIL'
};

const toFileObject = url => {
  return {
    name: null,
    size: null,
    type: null,
    status: UPLOAD_STATUS.SUCCESS,
    url: url,
    thumbUrl: url,
    uid: utils.uuid()
  };
};

const prefix = 'h-uploader';

export default {
  name: 'HUploader',
  mixins: [Locale],
  emits: ['delete', 'click', 'update:modelValue'],
  props: {
    accept: String,
    modelValue: {
      type: [Array, Object, String]
    },
    displayType: {
      type: String,
      default: 'file' // file, image
    },
    dataType: {
      type: String,
      default: 'object'
    },
    multiple: {
      type: Boolean,
      default: false
    },
    limit: Number,
    readonly: {
      type: Boolean,
      default: false
    },
    showPercent: {
      type: Boolean,
      default: false
    },
    option: {
      type: Object,
      default: () => {}
    }
  },
  data() {
    return {
      preview: false,
      previewIndex: -1,
      isdragging: false,
      stashFiles: [],
      stashValue: null
    };
  },
  watch: {
    modelValue(value) {
      if (value !== this.stashValue) {
        this.stashFiles = [];
      }
    }
  },
  computed: {
    files() {
      if (this.stashFiles.length) return this.stashFiles;
      if (this.dataType === 'url') {
        if (this.multiple) {
          return (this.modelValue || []).map(item => toFileObject(item));
        } else {
          return this.modelValue ? [toFileObject(this.modelValue)] : [];
        }
      } else {
        if (this.multiple) {
          return this.modelValue || [];
        } else {
          return this.modelValue ? [this.modelValue] : [];
        }
      }
    },
    singleFile() {
      return this.files.length ? this.files[0] : null;
    },
    showUploadButton() {
      if (this.readonly) return false;
      return (this.multiple && (!this.limit || this.limit > this.files.length)) || (!this.multiple && !this.files.length);
    },
    showReUploadWord() {
      return this.hlang('h.uploader.reUpload');
    },
    showUploadWord() {
      return this.hlang('h.uploader.upload');
    },
    showOverLimit() {
      return this.hlang('h.uploader.overLimit');
    },
    uploaderCls() {
      return {
        [prefix]: true,
        [`${prefix}-${this.displayType}-container`]: true
      };
    }
  },
  methods: {
    isUploading(file) {
      return file.status === UPLOAD_STATUS.UPLOADING;
    },
    triggerFileChoose() {
      this.$refs.file.value = null;
      this.$refs.file.click();
    },
    onDrag(event) {
      this.isdragging = false;
      var files = event.dataTransfer.files;
      this.onFileUpload(files);
    },
    async onFileUpload(files) {
      if (files.length === 0) return;
      if (this.multiple) {
        if (files.length + this.files.length > this.limit) {
          Message.error(this.showOverLimit);
          return;
        }
      }
      const valueList = [...files]
        .filter(item => {
          return !this.option.onBeforeUpload || this.option.onBeforeUpload(item) !== false;
        })
        .map(item => {
          return {
            name: item.name,
            size: item.size,
            type: item.type,
            status: UPLOAD_STATUS.UPLOADING,
            url: null,
            thumbUrl: null,
            uid: utils.uuid(),
            file: item
          };
        });
      if (valueList.length === 0) return;
      if (this.multiple) {
        this.stashFiles = [...this.files, ...valueList];
      } else {
        this.stashFiles = [valueList[0]];
      }
      for (const info of valueList) {
        this.option.onChange &&
          this.option
            .onChange(info.file, info)
            .then(url => {
              this.update({ ...info, status: UPLOAD_STATUS.SUCCESS, url });
            })
            .catch(e => {
              this.update({ ...info, status: UPLOAD_STATUS.FAIL });
            });
      }
    },
    update(info) {
      if (!info) return;
      const value = [...this.files];
      const index = value.findIndex(item => item.uid === info.uid);
      if (index > -1) {
        if (info.status === UPLOAD_STATUS.FAIL) {
          value.splice(index, 1);
        } else {
          value.splice(index, 1, info);
        }
      } else {
        value.push(info);
      }
      this.updateModelValue(value);
    },
    updateModelValue(value) {
      this.stashFiles = value;
      let resultValue = null;
      if (this.dataType === 'url') {
        if (this.multiple) {
          resultValue = value.map(item => item.url);
        } else {
          resultValue = value.length ? value[0].url : [];
        }
      } else {
        if (this.multiple) {
          resultValue = value;
        } else {
          resultValue = value.length ? value[0] : null;
        }
      }
      this.stashValue = resultValue;
      this.$emit('update:modelValue', resultValue);
    },
    onFileChange() {
      const files = this.$refs.file.files;
      this.onFileUpload(files);
    },
    fileClick(file, index) {
      this.$emit('click', file, index);
    },
    imageClick(index, file) {
      this.$emit('click', file, index);
    },
    previewImage(index) {
      ImagePreview(this.files, index);
    },
    getBackgroundImage(file) {
      let param = {};
      if (file.thumbUrl || file.url) {
        param['background-image'] = `url(${file.thumbUrl || file.url})`;
      }
      return param;
    },
    deleteFile(index, event) {
      if (event) {
        event.stopPropagation();
      }
      this.$emit('delete', this.files[index], index);
      const value = [...this.files];
      value.splice(index, 1);
      this.updateModelValue(value);
    }
  }
};
</script>
