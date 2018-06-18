<template>
  <div>
    <!--header与footer自带notice的样式-->
    <header>测试</header>
    <div v-padding="15">传递的参数：{{params.a}}</div>
    <footer>
      <button class="h-btn" @click="close">关闭</button>
      <button class="h-btn h-btn-primary" @click="triggerEvent">去处理</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      param1: { 1: '选择1', 2: '选择2', 3: '选择3' }
    }
  },
  props: {
    params: Object
  },
  methods: {
    triggerEvent() {
      this.close();
      this.$emit("event", "fromchild", "测试");
    },
    close() {
      this.$emit("close");
    }
  }
}
</script>
