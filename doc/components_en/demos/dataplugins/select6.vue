<template>
  <div>
    <p>Selected value:{{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"  :multiple="true" :limit="2"></Select></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      select: [],
      param: ['Option 1', 'Option 2', 'Choose 3']
    };
  }
};
</script>
