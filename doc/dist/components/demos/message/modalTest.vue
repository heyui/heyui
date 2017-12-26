<template>
  <div>
    <!--header与footer自带modal的样式-->
    <header>测试</header>
    <div style="padding:15px">
      <SwitchList v-model="value1" :datas="param1"></SwitchList>
      <Select dict="simple"></Select>
      <p>传递的参数：{{params.a}}</p>
    </div>
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
      value1: 1,
      param1: { 1: '选择1', 2: '选择2', 3: '选择3' }
    }
  },
  props: {
    params: Object
  },
  methods: {
    triggerEvent() {
      this.$emit("close");
      this.$emit("event", "fromchild", "测试");
    },
    closeModal() {
      this.$emit("close");
    }
  }
}
</script>
