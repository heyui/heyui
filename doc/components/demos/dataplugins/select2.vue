<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  :null-option="false"></Select></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: '选择1',
      param: ['选择1', '选择2', '选择3']
    };
  }
};
</script>
