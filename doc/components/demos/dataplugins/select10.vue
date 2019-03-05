<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">禁用</h-switch></p>
    <p v-width="300"><Select v-model="select" :datas="param" :disabled = "disabled" placeholder="请选择您的内容"></Select></p>
    <p v-width="300"><Select v-model="select" filterable :datas="param" :disabled = "disabled" placeholder="请选择您的内容"></Select></p>
    <p v-width="300"><Select v-model="select1" multiple :datas="param" :disabled = "disabled" placeholder="请选择您的内容"></Select></p>
    <p v-width="300"><Select v-model="select1" multiple filterable :datas="param" :disabled = "disabled" placeholder="请选择您的内容"></Select></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: null,
      select1: [],
      param: ['选择1', '选择2', '选择3'],
      disabled: true
    };
  }
};
</script>
