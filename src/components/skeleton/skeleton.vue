<template>
  <div class="h-skeleton" :class="{'h-skeleton-active' : active}">
    <template v-if="loading">
      <div v-if="avatar" class="h-skeleton-avatar">
        <span :class="'h-skeleton-avatar-' + avatarShape" :style="{'width': avatarSize + 'px', 'height': avatarSize + 'px'}"></span>
      </div>
      <div v-if="title || paragraph" class="h-skeleton-content">
        <h3 v-if="title" class="h-skeleton-title" :style="{'width': titleWidth}"></h3>
        <ul v-if="paragraph" class="h-skeleton-paragraph">
          <li v-for="(item, index) in rows" :key="index"></li>
        </ul>
      </div>
    </template>
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
    },
    avatar: {
      type: Boolean,
      default: false
    },
    avatarSize: {
      type: Number,
      default: 48
    },
    avatarShape: {
      type: String,
      default: 'circle'
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
