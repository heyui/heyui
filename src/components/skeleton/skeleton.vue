<template>
  <div class="h-skeleton">
    <div class="h-skeleton-content" v-if="loading" :class="{'h-skeleton-active' : active}">
      <h3 class="h-skeleton-title" :style="{'width': titleWidth}"></h3>
      <ul class="h-skeleton-paragraph">
        <li v-for="(item, index) in rows" :key="index"></li>
      </ul>
    </div>
    <template v-else>
      <slot></slot>
    </template>
  </div>
</template>
<script>
export default {
  name: 'hSkeleton',
  props: {
    loading: {
      type: Boolean,
      default: false
    },
    active: {
      type: Boolean,
      default: false
    },
    title: {
      type: Boolean,
      default: true
    },
    paragraph: {
      type: Boolean,
      default: true
    },
    titleWidth: {
      type: String,
      default: '38%'
    },
    rows: {
      type: Number,
      default: 3
    }
  },
  data() {
    return {

    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {

    }
  },
  computed: {

  }
};
</script>
