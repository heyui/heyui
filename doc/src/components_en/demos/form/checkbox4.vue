<template>
  <div>
    <p v-color:gray>{{value}}:{{value | dictMapping('simple')}}</p>
    <div><Checkbox v-model="value" dict="simple"></Checkbox></div>
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
  data() {
    return {
      value: ['1']
    };
  }
};
</script>
