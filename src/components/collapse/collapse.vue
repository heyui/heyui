<style lang='less'>
</style>
<template>
  <div :class="collapseCls">
    <slot></slot>
  </div>
</template>
<script>
import CollapseItem from './collapseItem'

const prefixCls = 'h-collapse'

export default {
  name: 'hCollapse',
  props: {
    value: {
      type: [Array, String]
    },
    accordion: {
      type: Boolean,
      default: () => {
        return false;
      }
    },
  },
  data() {
    return {
      
    }
  },
  computed: {
    
  },
  watch: {

  },
  created() {
    
  },
  mounted() {

  },
  methods: {
    change() {
      
    },
  },
  components: {
    CollapseItem
  }
}
</script>