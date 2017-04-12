<template>
  <div class="doc">
    <h2>Tooltip 气泡提示</h2>
    <div>
      <button class="h-btn" v-tooltip content="这是一个测试">测试</button>
      <button class="h-btn" v-tooltip placement="top" content="这是一个测试">测试</button>
      <button class="h-btn" v-tooltip placement="right" trigger="click" content="这是一个测试">点我一下</button>
    </div>
    <br>
    <div>
      <button class="h-btn" v-tooltip ref-el="demo" trigger="click" placement="bottom-end" theme="white">自定义内容</button>
      <button class="h-btn" @click="change()">修改提醒内容</button>
      <div tmpl='demo'><p class="red-color">{{a}}测试测试</p><p>{{a}}测试测试</p><p>{{a}}测试测试</p></div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      a: 1
    }
  },
  methods: {
    change(){
      this.a = this.a+1;
    }
  }
}
</script>
