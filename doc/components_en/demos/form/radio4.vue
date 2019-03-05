<template>
  <div>
    <p v-color:gray>{{value}}:{{value | dictMapping('simple')}}</p>
    <div><Radio v-model="value" dict="simple"></Radio></div>
  </div>
</template>
<!--
  When the system is initialized
  HeyUI.initDict({
    simple: { 1: 'select 1', 2: 'select 2', 3: 'select 3' }
  });
-->
<script>
export default {
  data() {
    return {
      value: '1'
    };
  }
};
</script>
