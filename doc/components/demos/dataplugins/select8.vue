<template>
  <div>
    <p>选中值：{{select}}  {{select | dictMapping('simple')}}</p>
    <div v-width="300"><Select v-model="select"  dict="simple"></Select></div>
  </div>
</template>
<!--
  系统初始化的时候
  HeyUI.initDict({
    simple: { 1: '苹果', 2: '梨子', 3: '香蕉', 4: '橙子', 5: '樱桃' }
  });
-->
<script>
export default {
  data: function () {
    return {
      select: null
    };
  }
};
</script>
