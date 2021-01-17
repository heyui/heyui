<template>
  <div v-width="200">
    <div style="position:relative;padding:5px;">
      <span>Menu 1</span>
      <Badge :count="20" position="right"></Badge>
    </div>
    <div style="position:relative;padding:5px;">
      <span>Menu2</span>
      <Badge :count="100" :max-count="99" position="right"></Badge>
    </div>
  </div>
</template>
