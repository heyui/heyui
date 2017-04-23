<template>
  <div>
      <button class="h-btn" @click="confirm">Js调用确认框</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      this.$Confirm("确定删除？").then(() => {
        this.$Message.success('确定删除！');
      })

      //heyui.$Confirm js调用也可以
    }
  }
}
</script>