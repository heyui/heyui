<template>
  <div>
    <p>
      <Checkbox v-model="value">{{value}}</Checkbox>
    </p>
    <p>
      <Checkbox v-model="value1" :trueValue="1" :falseValue="2">{{value1}}， true: 1, false: 2</Checkbox>
    </p>
    <p>
      <Checkbox v-model="value2" trueValue="是" falseValue="否">{{value2}}， true: 是, false: 否</Checkbox>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value2: '是',
      value1: 1,
      value: false
    };
  }
};
</script>
