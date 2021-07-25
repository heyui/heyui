<template>
  <div class="h-collapse-item" :class="{ 'h-collapse-item-active': isActive }">
    <div class="h-collapse-item-header" @click="toggle">
      <span class=""></span>
      <i class="h-collapse-item-expand h-icon-right"></i>
      <slot name="title">{{ title }}</slot>
    </div>
    <CollapseTransition>
      <div v-show="isActive" class="h-collapse-item-content">
        <div class="h-collapse-item-content-box">
          <slot></slot>
        </div>
      </div>
    </CollapseTransition>
  </div>
</template>
<script>
import CollapseTransition from './collapsetransition';

export default {
  name: 'HCollapseItem',
  components: {
    CollapseTransition
  },
  inject: ['collapse'],
  props: {
    name: {
      type: [String, Number]
    },
    title: {
      type: String
    }
  },
  data() {
    return {
      isActive: false
    };
  },
  computed: {},
  methods: {
    toggle() {
      this.collapse.toggle(this.name || this.index);
    }
  }
};
</script>
