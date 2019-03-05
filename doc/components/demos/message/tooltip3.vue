<template>
  <div>
    <button class="h-btn h-btn-text" v-tooltip trigger="click" content="这是一个详情">点我一下</button>
    <button class="h-btn h-btn-text" v-tooltip trigger="click" theme="white" content="这是一个详情2">再点我一下</button>
    <Tooltip content="Component调用" trigger="click"><button class="h-btn h-btn-text">Component click 调用</button></Tooltip>
    <Tooltip content="Component调用|白色风格" trigger="click" theme="white"><button class="h-btn h-btn-text">Component click 白色风格</button></Tooltip>
  </div>
</template>
