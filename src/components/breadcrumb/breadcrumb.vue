<template>
  <div class="h-breadcrumb">
    <span v-for="(data, index) of datas" :key="data.title" class="h-breadcrumb-item">
      <span class="h-breadcrumb-item-separator" v-if="index > 0">{{separator}}</span>
      <span class="h-breadcrumb-item-title" @click="trigger(data, index)" :class="{'h-breadcrumb-item-link': data.route, 'h-breadcrumb-item-current': index==datas.length - 1}"><i :class="data.icon" v-if="data.icon" class="h-breadcrumb-item-icon"></i><span class="h-breadcrumb-item-word">{{data.title}}</span></span>
    </span>
  </div>
</template>
<script>

export default {
  name: 'hBreadcrumb',
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
    return {

    };
  },
  mounted() {
  },
  methods: {
    trigger(data) {
      if (!this.selfControl && data.route && this.$router) {
        this.$router.push(data.route);
      }
      this.$emit('click', data);
    }
  }
};
</script>
