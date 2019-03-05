<template>
  <div>
    <Poptip content="Are you sure to delete this section of work experience, is it permanently deleted?" @confirm="confirm"><button class="h-btn h-btn-red">delete</button></Poptip>
    <Poptip content="confirm deletion?" @confirm="confirm"><button class="h-btn h-btn-text-red h-btn-no-border"><i class="h-icon-trash"></i></button></Poptip>
  </div>
</template>
<script>
export default {
  methods: {
    confirm() {
      this.$Message.success('successfully deleted');
    }
  }
};
</script>
