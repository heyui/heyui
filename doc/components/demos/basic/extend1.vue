<template>
  <div>
    <blockquote>颜色</blockquote>
    <div>
      <div>
        <span class="primary-color">主色系</span>
        <span class="green-color">绿色</span>
        <span class="yellow-color">黄色</span>
        <span class="red-color">红色</span>
        <span class="blue-color">蓝色</span>
      </div>
      <div>
        <span class="dark-color">暗黑</span>
        <span class="gray-color">灰</span>
        <span class="gray1-color">灰1</span>
        <span class="gray2-color">灰2</span>
        <span class="gray3-color">灰3</span>
        <span class="gray4-color">灰4</span>
      </div>
      <div>
        <span class="bg-primary-color white-color">背景主色系</span>
        <span class="bg-green-color white-color">背景绿色</span>
        <span class="bg-yellow-color white-color">背景黄色</span>
        <span class="bg-red-color white-color">背景红色</span>
        <span class="bg-blue-color white-color">背景蓝色</span>
      </div>
      <div>
        <span class="bg-dark-color white-color">背景暗黑</span>
        <span class="bg-gray-color white-color" 背景>灰</span>
        <span class="bg-gray1-color white-color">背景灰1</span>
        <span class="bg-gray2-color">背景灰2</span>
        <span class="bg-gray3-color">背景灰3</span>
        <span class="bg-gray4-color">背景灰4</span>
      </div>
    </div>
    <blockquote>通用调用</blockquote>
    <div>
      <span class="text-hover">可点击文本</span>
      <span class="dark-text-hover">灰色可点击文本</span>
      <span class="link">链接式文本</span>
      <span class="float-right">浮动到右侧</span>
    </div>
    <blockquote>垂直居中对齐</blockquote>
    <div v-height="100" class="relative">
      <i class="middle-right" style="right:5px;"><i class="h-icon-right"></i></i>
      <div class="middle-center">垂直居中对齐</div>
    </div>
    <blockquote>超出内容省略</blockquote>
    <div class="text-ellipsis" v-width="100">超出内容省略超出内容省略</div>
    <blockquote>对齐方式</blockquote>
    <div>
      <div class="text-left">左对齐</div>
      <div class="text-center">居中对齐</div>
      <div class="text-right">右对齐</div>
    </div>
    <blockquote>边框底线</blockquote>
    <div class="bottom-line"></div>
  </div>
</template>
