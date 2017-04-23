<template>
  <div>
    <p>选中值：{{select}}  {{select | dictMapping('simple')}}</p>
    <div v-width="300"><Select v-model="select"  dict="simple"></Select></div>
  </div>
</template>
<!-- 
  系统初始化的时候
  HeyUI.initDict({
    simple: { 1: '选择1', 2: '选择2', 3: '选择3' }
  }); 
-->
<script>
  export default {
    data: function () {
      return {
        select: null
      }
    }
  }
</script>
