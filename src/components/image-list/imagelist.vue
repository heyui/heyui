<template>
  <div class="h-image-list" :style="listStyles">
    <div v-for="(data, index) of computedList" :key="index" :style="itemStyles(data)" class="h-image-list-item" @click="click(index, data)"></div>
  </div>
</template>
<script>
import utils from 'heyui/utils/utils';
const genObject = function(data) {
  if (utils.isString(data)) {
    return { url: data };
  } else if (utils.isObject(data)) {
    return { url: data.thumbUrl || data.url };
  }
  return { url: null };
};
export default {
  name: 'HImageList',
  emits: ['clickItem'],
  props: {
    width: {
      type: Number,
      default: 60
    },
    distance: {
      type: Number,
      default: 10
    },
    datas: {
      type: [Array, String],
      default: () => []
    },
    borderRadius: {
      type: Number,
      default: 3
    }
  },
  computed: {
    listStyles() {
      return {
        'margin-right': `-${this.distance}px`,
        'margin-bottom': `-${this.distance}px`
      };
    },
    isSingle() {
      return utils.isString(this.datas);
    },
    computedList() {
      if (this.isSingle) {
        return [genObject(this.datas)];
      } else if (utils.isArray(this.datas)) {
        return this.datas.map(item => {
          return genObject(item);
        });
      }
      return [];
    }
  },
  methods: {
    click(index, value) {
      if (this.isSingle) {
        this.$emit('clickItem', this.datas);
      } else {
        this.$emit('clickItem', index, value);
      }
    },
    itemStyles(data) {
      return {
        height: `${this.width}px`,
        width: `${this.width}px`,
        'margin-right': `${this.distance}px`,
        'margin-bottom': `${this.distance}px`,
        'border-radius': `${this.borderRadius}px`,
        'background-image': `url(${data.url})`
      };
    }
  }
};
</script>
