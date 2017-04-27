<template>
  <div>
    <header>测试</header>
    <div style="padding:15px">传递的参数：{{param.a}}</div>
    <footer>
      <button class="h-btn h-btn-primary" @click="triggerEvent">通知父级调用</button>
      <button class="h-btn" @click="closeModal">关闭</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    param: Object
  },
  methods: {
    triggerEvent() {
      this.$emit("close");
      this.$emit("event", "toparent", "测试");
    },
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>
