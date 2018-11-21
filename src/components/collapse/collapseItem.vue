<template>
  <div :class="collapseItemCls">
    <div :class="collapseItemHeaderCls" @click="toggle">
      <slot name="title">{{title}}</slot>
      <i class="h-collapse-item-arrow h-icon-right"></i>
    </div>
    <div :class="collapseItemContentCls">
      <slot></slot>
    </div>
  </div>
</template>
<script>
const prefix = 'h-collapse-item';

export default {
  name: 'hCollapseItem',
  props: {
    name: {
      type: [String, Number]
    },
    title: {
      type: String
    },
  },
  components: {
      
  },
  data() {
    return {
      isActive: false,
    }
  },
  inject: ['collapse'],
  computed: {
    collapseItemCls() {
      return {
        [`${prefix}`]: true,
        [`${prefix}-active`]: this.isActive,
      }
    },
    collapseItemHeaderCls() {
      return {
        [`${prefix}-header`]: true,
      }
    },
    collapseItemContentCls() {
      return {
        [`${prefix}-content`]: true,
      }
    }
  },
  created() {
    
  },
  methods: {
    toggle() {
      this.collapse.toggle(this.name || this.index)
    }
    // }
  },
}
</script>