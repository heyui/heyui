<template>
  <div class="doc">
    <h2>Circle 进度环</h2>
    <h3>基本调用</h3>

    <div v-width="600">
      <p><h-circle :percent="60"><span >项目1</span></h-circle></p>
      <p><h-circle :percent="99" color="#13CE66"><span>项目2</span></h-circle></p>
      <p><h-circle :percent="12" color="#E11617"><span>项目2</span></h-circle></p>
    </div>

    <h3>组合形式</h3>
    <div v-width="600">
      <p><NumberInput v-model="value" :step="10" :min="0" :max="100"></NumberInput></p>
      <p><h-circle :percent="value" :stroke-width="18" :size="200">
          <p class="gray-color" v-font="28">122,332,98</p>
          <div v-height="5"></div>
          <p class="dark-color" v-font="13">目前达成比例</p>
          <p class="gray-color"><span class="primary-color" v-font="16">{{parseInt(123*value/100)}}</span>/<span>123</span></p>
        </h-circle></p>
      <p><h-circle :percent="value" :stroke-width="8" :size="80"><span v-font="12">占比: {{value}}%</span></h-circle></p>
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
