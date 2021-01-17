<template>
  <div>
    <p>value：{{value6}}</p>
    <p>
      <Checkbox v-model="value6" :value="param3[0]">customize1</Checkbox>
      <Checkbox v-model="value6" :value="param3[1]">customize2</Checkbox>
    </p>
    <p>value：{{value7}}</p>
    <p>
      <Checkbox v-model="value7" :value="1">customize1</Checkbox>
      <Checkbox v-model="value7" :value="2">customize2</Checkbox>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      param3: [
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ],
      value6: null,
      value7: null
    };
  }
};
</script>
