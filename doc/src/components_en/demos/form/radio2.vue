<template>
  <div>
    <div>1. {{value}}</div>
    <div><Radio :value='param[0]' v-model="value">select 1</Radio></div>
    <div><Radio :value='param[1]' v-model="value">select 2</Radio></div>
    <div><Radio :value='param[2]' v-model="value">select 3</Radio></div>
    <div>2. {{value2}}</div>
    <div><Radio :value='param[0].key' v-model="value2">select 1</Radio></div>
    <div><Radio :value='param[1].key' v-model="value2">select 2</Radio></div>
    <div><Radio :value='param[2].key' v-model="value2">select 3</Radio></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      value2: null,
      param: [
        { title: 'select 1', key: 'a1', other: 'Other values' },
        { title: 'select 2', key: 'a2' },
        { title: 'select 3', key: 'a3' }
      ]
    };
  }
};
</script>
