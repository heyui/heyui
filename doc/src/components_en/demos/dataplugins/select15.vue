<template>
  <div>
    <p>Selected value: {{select}}</p>
    <div v-width="300"><Select v-model="select" :datas="param"></Select></div>
  </div>
</template>
<script>
export default {
  data: function () {
    return {
      select: 'a1',
      param: [
        { title: 'Grouping bar', isLabel: true },
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Choose 3', key: 'a2' },
        { title: 'Disable selection', key: 'a3', disabled: true },
        { title: 'Hide selection', key: 'a4', hidden: true }
      ]
    };
  }
};
</script>
