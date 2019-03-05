<template>
  <div>
      <button class="h-btn" @click="confirm">Confirm</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      // heyui.$Confirm js调用也可以
      // title为空的时候无头部
      this.$Confirm('确定删除？', '自定义title').then(() => {
        this.$Message.success('确定删除！');
      }).catch(() => {
        this.$Message.error('取消');
      });
    }
  }
};
</script>
