<template>
  <div v-width="600">
    <p><Progress :percent="60"><span slot="title">Item 1</span><span slot="text"><span class="primary-color">180</span> K</span></Progress></p>
    <p><Progress :percent="99" color="green"><span slot="title">Item 2</span><span slot="text">success</span></Progress></p>
    <p><Progress :percent="12" color="red"><span slot="title">Item 2</span><span slot="text">failure</span></Progress></p>
  </div>
</template>
