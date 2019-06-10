<template>
  <div>
    <blockquote>Colour</blockquote>
    <div>
      <div>
        <span class="primary-color">Main</span>
        <span class="green-color">Green</span>
        <span class="yellow-color">Yellow</span>
        <span class="red-color">Red</span>
        <span class="blue-color">Blue</span>
      </div>
      <div>
        <span class="dark-color">Dark</span>
        <span class="gray-color">Gray default</span>
        <span class="gray1-color">Gray 1</span>
        <span class="gray2-color">Gray 2</span>
        <span class="gray3-color">Gray 3</span>
        <span class="gray4-color">Gray 4</span>
      </div>
      <div>
        <span class="bg-primary-color white-color">Background primary</span>
        <span class="bg-green-color white-color">Background green</span>
        <span class="bg-yellow-color white-color">Background yellow</span>
        <span class="bg-red-color white-color">Background red</span>
        <span class="bg-blue-color white-color">Background blue</span>
      </div>
      <div>
        <span class="bg-dark-color white-color">Background dark</span>
        <span class="bg-gray-color white-color">Background gray default</span>
        <span class="bg-gray1-color white-color">Background gray 1</span>
        <span class="bg-gray2-color">Background gray 2</span>
        <span class="bg-gray3-color">Background gray 3</span>
        <span class="bg-gray4-color">Background gray 4</span>
      </div>
    </div>
    <blockquote>General call</blockquote>
    <div>
      <span class="text-hover">Clickable text</span>
      <span class="dark-text-hover">Dark clickable text</span>
      <span class="link">Linked text</span>
      <span class="float-right">Floating to the right</span>
    </div>
    <blockquote>Vertical center alignment</blockquote>
    <div v-height="100" class="relative">
      <i class="middle-right" style="right:5px;"><i class="h-icon-right"></i></i>
      <div class="middle-center">Vertical center alignment</div>
    </div>
    <blockquote>Exceeded content omitted</blockquote>
    <div class="text-ellipsis" v-width="100">Exceeded content omitted beyond content omitted</div>
    <blockquote>Alignment</blockquote>
    <div>
      <div class="text-left">Align left</div>
      <div class="text-center">Center alignment</div>
      <div class="text-right">Align right</div>
    </div>
    <blockquote>Bottom line</blockquote>
    <div class="bottom-line"></div>
  </div>
</template>
