<template>
  <div>
    <p>value: {{value}}</p>
    <TagInput v-model="value" type="string" split="," placeholder="please input"></TagInput>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: 'test, hi'
    };
  }
};
</script>
