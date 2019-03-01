<template>
  <div class="h-collapse-item" :class="{'h-collapse-item-active': isActive}">
    <div class="h-collapse-item-header" @click="toggle">
      <span class=""></span>
      <i class="h-collapse-item-expand h-icon-right"></i>
      <slot name="title">{{title}}</slot>
    </div>
    <h-collapse-transition>
      <div class="h-collapse-item-content" v-show="isActive">
        <div class="h-collapse-item-content-box">
          <slot></slot>
        </div>
      </div>
    </h-collapse-transition>
  </div>
</template>
<script>

export default {
  name: 'hCollapseItem',
  props: {
    name: {
      type: [String, Number]
    },
    title: {
      type: String
    }
  },
  components: {

  },
  data() {
    return {
      isActive: false
    };
  },
  inject: ['collapse'],
  computed: {
  },
  created() {

  },
  methods: {
    toggle() {
      this.collapse.toggle(this.name || this.index);
    }
  }
};
</script>
