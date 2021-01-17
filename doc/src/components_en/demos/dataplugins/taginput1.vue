<template>
  <div>
    <p>value: {{value}}</p>
    <TagInput v-model="value" :limit="10" :wordlimit="20"></TagInput>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['test']
    };
  }
};
</script>
