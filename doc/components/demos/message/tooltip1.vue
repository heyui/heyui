<template>
  <div>
    <button class="h-btn h-btn-text" v-tooltip content="Directive执行">Directive执行</button>
    <button class="h-btn h-btn-text" v-tooltip  theme="white" content="Directive执行|白色风格">Directive执行|白色风格</button>
    <Tooltip content="Component调用"><button class="h-btn h-btn-text">Component调用</button></Tooltip>
    <Tooltip content="Component调用|白色风格"  theme="white"><button class="h-btn h-btn-text">Component调用|白色风格</button></Tooltip>
  </div>
</template>