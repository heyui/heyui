<template>
  <div>
    <header class="h-notice-header">test</header>
    <div v-padding="15">Passed parameters:{{fruit}}</div>
    <footer class="h-notice-footer">
      <button class="h-btn" @click="close">cancel</button>
      <button class="h-btn h-btn-primary" @click="triggerEvent">open</button>
    </footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value1: 1,
      param1: { 1: 'Option 1', 2: 'Option 2', 3: 'Choose 3' }
    };
  },
  props: {
    fruit: String
  },
  methods: {
    triggerEvent() {
      this.$emit('success', 'test');
      this.close();
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
