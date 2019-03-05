<template>
  <div>
    <Poptip content="确定删除此段工作经历，是否永久删除？" @confirm="confirm"><button class="h-btn h-btn-red">删除</button></Poptip>
    <Poptip content="确认删除?" @confirm="confirm"><button class="h-btn h-btn-text-red h-btn-no-border"><i class="h-icon-trash"></i></button></Poptip>
  </div>
</template>
<script>
export default {
  methods: {
    confirm() {
      this.$Message.success('删除成功');
    }
  }
};
</script>
