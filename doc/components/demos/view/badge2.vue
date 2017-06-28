<template>
  <div>
    <Badge :count="100" :max-count="99"><div class="text-center">消息</div></Badge>
    <i class="h-split" v-width="40"></i>
    <Badge :count="1000" :max-count="999"><div class="text-center">消息</div></Badge>
  </div>
</template>
