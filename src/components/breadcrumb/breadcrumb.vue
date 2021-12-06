<template>
  <div class="h-breadcrumb">
    <span v-for="(data, index) of datas" :key="data.title" class="h-breadcrumb-item">
      <span v-if="index > 0" class="h-breadcrumb-item-separator">{{ separator }}</span>
      <span
        class="h-breadcrumb-item-title"
        :class="{ 'h-breadcrumb-item-link': data.route, 'h-breadcrumb-item-current': index == datas.length - 1 }"
        @click="trigger(data, index)"
        ><i v-if="data.icon" :class="data.icon" class="h-breadcrumb-item-icon"></i><span class="h-breadcrumb-item-word">{{ data.title }}</span></span
      >
    </span>
  </div>
</template>
<script>
export default {
  name: 'HBreadcrumb',
  emits: ['clickItem'],
  props: {
    datas: {
      Array,
      default: () => ({})
    },
    separator: {
      type: String,
      default: '/'
    },
    selfControl: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {};
  },
  mounted() {},
  methods: {
    trigger(data) {
      if (!this.selfControl && data.route && this.$router) {
        this.$router.push(data.route);
      }
      this.$emit('clickItem', data);
    }
  }
};
</script>
