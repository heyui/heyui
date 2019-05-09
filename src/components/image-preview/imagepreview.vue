<template>
  <div class="h-image-preview-list" :style="listStyles">
    <div :style="itemStyles(data)" v-for="(data, index) of datas" :key="index" @click="click(index, data)" class="h-image-preview-item"></div>
  </div>
</template>
<script>

export default {
  name: 'hImagePreview',
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
      type: [Array],
      default: () => ([])
    },
    borderRadius: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {
    };
  },
  methods: {
    click(index, value) {
      this.$emit('click', index, value);
    },
    itemStyles(data) {
      return {
        height: `${this.width}px`,
        width: `${this.width}px`,
        'margin-right': `${this.distance}px`,
        'margin-bottom': `${this.distance}px`,
        'border-radius': `${this.borderRadius}px`,
        'background-image': `url(${data.thumbUrl || data.url})`
      };
    }
  },
  computed: {
    listStyles() {
      return {
        'margin-right': `-${this.distance}px`,
        'margin-bottom': `-${this.distance}px`
      };
    }
  }
};
</script>
