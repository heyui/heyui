<template>
  <div class="doc">
    <h2>Progress 进度条</h2>
    <h3>基本调用</h3>

    <div v-width="600">
      <p><Progress :percent="60"><span slot="title">项目1</span><span slot="text"><span class="primary-color">180</span> K</span></Progress></p>
      <p><Progress :percent="99" color="green"><span slot="title">项目2</span><span slot="text">成功</span></Progress></p>
      <p><Progress :percent="12" color="red"><span slot="title">项目2</span><span slot="text">失败</span></Progress></p>
    </div>

    <h3>动态</h3>
    <div v-width="600">
      <p><NumberInput v-model="value" :step="10" :min="0" :max="100"></NumberInput></p>
      <p><Progress :percent="value" :stroke-width="6"><span slot="title">项目1</span><span slot="text">{{value}}%</span></Progress></p>
      <p><Progress :percent="value" :stroke-width="10" color="#ff5500"></Progress></p>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      value: 10
    }
  }
}
</script>
