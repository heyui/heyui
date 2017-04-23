<template>
  <div>
    <header>测试</header>
    <div style="padding:15px">传递的参数：{{param.a}}</div>
    <footer>
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
      closeModal(){
          this.$emit("close");
      }
  }
}
</script>
