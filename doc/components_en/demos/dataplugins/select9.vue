<template>
  <div>
    <p>Selected value: {{select}}</p>
    <div><Select v-model="select" dict="simple" :no-border="true" :equal-width="false" :null-option="false" placeholder="Please select your content"></Select></div>
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
