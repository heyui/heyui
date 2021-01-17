<template>
  <div v-width="600">
    <p><Progress :percent="60"><span slot="title">项目1</span><span slot="text"><span class="primary-color">180</span> K</span></Progress></p>
    <p><Progress :percent="99" color="green"><span slot="title">项目2</span><span slot="text">成功</span></Progress></p>
    <p><Progress :percent="12" color="red"><span slot="title">项目2</span><span slot="text">失败</span></Progress></p>
  </div>
</template>
