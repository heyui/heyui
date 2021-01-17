<template>
  <div>
    <p><h-switch v-model="disabled" :small="true">Disable</h-switch></p>
    <p v-width="300"><Select v-model="select" :datas="param" :disabled = "disabled" placeholder="Please select your content"></Select></p>
    <p v-width="300"><Select v-model="select" filterable :datas="param" :disabled = "disabled" placeholder="Please select your content"></Select></p>
    <p v-width="300"><Select v-model="select1" multiple :datas="param" :disabled = "disabled" placeholder="Please select your content"></Select></p>
    <p v-width="300"><Select v-model="select1" multiple filterable :datas="param" :disabled = "disabled" placeholder="Please select your content"></Select></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: null,
      select1: [],
      param: ['Option 1', 'Option 2', 'Choose 3'],
      disabled: true
    };
  }
};
</script>
