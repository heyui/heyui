<style lang='less'>
.h-collapse{
  display: block;
}
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
      type: [Array, String],
      default() {
        return []
      }
    },
    accordion: {
      type: Boolean,
      default() {
        return false;
      }
    },
  },
  data() {
    return {
      activedKeys: [].concat(this.value),
    }
  },
  provide() {
    return {
      collapse: this
    }
  },
  computed: {
    collapseCls() {
      return `${prefixCls}`
    }
  },
  watch: {

  },
  mounted() {
    this.setActives();
  },
  methods: {
    setActives() {
      this.$children.forEach(($item, index) => {
        let name = $item.name || index;
        $item.isActive = this.activedKeys.includes(name);
        $item.index = index;
        log($item)
      })
    },
    toggle(value) {
      log(value)
      if(this.accordion) {
        this.activedKeys = [...value]
      } else {
        let index = this.activedKeys.indexOf(value)
        if(index > -1){
          this.activedKeys.splice(index, 1)
        } else {
          this.activedKeys.push(value)
        }
      }
      log(this.activedKeys)
      this.setActives();
      this.$emit('input', this.activedKeys);
      this.$emit('change', this.activedKeys);
    },
  },
  components: {
    CollapseItem
  }
}
</script>