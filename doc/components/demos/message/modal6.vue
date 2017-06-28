<template>
  <div>
      <button class="h-btn" @click="open">Js调用Modal</button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      this.$Modal({
        title: '自定义的弹出框',
        content: '<p>自定义的弹出框测试</p><p>自定义的弹出框测试</p>',
      });
      //heyui.$Modal js调用也可以
    }
  }
}
</script>