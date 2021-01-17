<template>
  <div>
    <p>Selected value:{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  :null-option="false"></Select></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: 'Option 1',
      param: ['Option 1', 'Option 2', 'Choose 3']
    };
  }
};
</script>
