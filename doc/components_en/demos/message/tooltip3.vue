<template>
  <div>
    <button class="h-btn h-btn-text" v-tooltip trigger="click" content="This is a detail">Click on me</button>
    <button class="h-btn h-btn-text" v-tooltip trigger="click" theme="white" content="This is detail 2">Let me know more.</button>
    <Tooltip content="Component call" trigger="click"><button class="h-btn h-btn-text">Component click transfer</button></Tooltip>
    <Tooltip content="Component call and white style" trigger="click" theme="white"><button class="h-btn h-btn-text">Component click and white style</button></Tooltip>
  </div>
</template>
