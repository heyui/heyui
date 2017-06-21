<template>
  <div :class="uploaderCls">
    <template v-if="type='image'">
      <div v-if="file" :style="getBackgroundImage(file)">
        <div class="h-uploader-progress" v-if="file.status == 2">
          <Progress :percent="file.percent"></Progress>
        </div>
        <div class="h-uploader-image-operate h-uploader-browse-button" v-else>
          <span>重新上传</span>
        </div>
      </div>
      <div class="h-uploader-image-empty h-uploader-browse-button" v-else>
        <i class="h-icon-plus"></i>
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
    return { url: this.value, original: { [param.urlName]: this.value } };
  } else if (utils.isObject(value)) {
    return { url: value[param.urlName], name: value[param.fileName], original: value };
  }
}
const dispose = function (value, type, param) {
  if (type == "url") {
    return value.url;
  } else if (utils.isObject(value)) {
    if (value.original) {
      return value.original;
    }
    return { [param.urlName]: value.url, [param.fileName]: value.name, file: value };
  }
}

export default {
  props: {
    type: {
      type: String,
      default: 'list'
    },
    dataType: {
      type: String,
      default: 'url' //file
    },
    uploadList: Array,
    files: {
      type: [Array, Object, String],
      default: () => []
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
      param
    }
  },
  mounted() {

  },
  beforeMount() {
  },
  methods: {
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
        return this.file ? dispose(this.file, this.datatype, this.param) : null;
      }

      let list = [];
      for (let f of this.fileList) {
        list.push(dispose(f, this.datatype, this.param));
      }
      return list;
    }
  },
  computed: {
    isSingle() {
      return this.type == 'image' || this.type == 'file';
    },
    uploaderCls() {
      return {
        [prefix]: true,
        [`${prefix}-${this.type}`]: true,
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
