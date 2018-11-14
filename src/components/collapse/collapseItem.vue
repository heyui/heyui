<style lang='less'>
.h-collapse-item{
  display: block;
  &-header{
    height: 40px;
    line-height: 40px;
    border-top: 1px solid #eee;
    padding: 0 10px;
    font-weight: bold;
    &:hover{
      cursor: pointer;
      color: @primary-color;
    }
  }
  &-arrow{
    float: right;
    margin-top: 13px;
    transform: rotateZ(0deg);
    transition: all .2s;
  }
  &-content{
    display: none;
    padding: 10px;
    padding-bottom: 30px;
  }

  &.h-collapse-item-active{
    .h-collapse-item-header{
      .h-collapse-item-arrow{
        transform: rotateZ(90deg);
      }
    }
    .h-collapse-item-content{
      display: block;
    }
  }
  
}
</style>
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