<template>
  <div>
    <p>Selected value: {{select}}  {{select | dictMapping('simple')}}</p>
    <div v-width="300"><Select v-model="select"  dict="simple"></Select></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: null
    };
  }
};
</script>
