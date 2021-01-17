<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  :multiple="true" :limit="2"></Select></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [],
      param: ['选择1', '选择2', '选择3']
    };
  }
};
</script>
