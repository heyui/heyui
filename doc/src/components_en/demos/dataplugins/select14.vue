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
      select: 'Option 1',
      param: [
        { title: 'Group 1', isLabel: true },
        { title: 'Choose 0', key: '23' },
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Group 3', isLabel: true },
        { title: 'Option 2', key: 'a2' },
        { title: 'Group 3', isLabel: true },
        { title: 'Choose 3', key: 'a3' }
      ]
    };
  }
};
</script>
