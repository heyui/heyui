<template>
  <div>
      <TagInput v-model="value" :readonly="true"></TagInput>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ['Tag 1', 'Tag 2', 'Tag 3', 'Tag 4']
    };
  }
};
</script>
