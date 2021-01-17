<style lang="less">
.tooltip5-demo{

  &.h-tooltip.h-tooltip-white[x-placement^="top"] {
    .h-tooltip-arrow:after {
      border-top-color: red;
    }
    .h-tooltip-inner{
      border-bottom: 3px solid red;
    }
  }
  &.h-tooltip.h-tooltip-white[x-placement^="bottom"]{
    .h-tooltip-arrow:after {
      border-bottom-color: red;
    }
    .h-tooltip-inner{
      border-top: 3px solid red;
    }
  }
  .h-tooltip-inner-content{
    width: 200px;
    height: 150px;
  }
}
</style>

<template>
  <div>
    <span v-tooltip className="tooltip5-demo" placement="bottom-start" theme="white">自定义样式</span>
    <i class="h-split" v-width="30"></i>
    <Tooltip theme="white" className="tooltip5-demo" placement="bottom-start">
      <span class="text-hover">Component调用</span>
      <div slot="content">
        自定义样式
      </div>
    </Tooltip>
  </div>
</template>
