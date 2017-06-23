<template>
  <div>
    <p>选中值：{{select}}</p>
    <div v-width="300"><Select v-model="select" dict="simple" :no-border="true" :null-option="false" placeholder="请选择您的内容"></Select></div>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {
        select: null
      }
    }
  }
</script>
