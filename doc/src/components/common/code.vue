<template>
  <div class="code-box">
    <pre v-highlightjs="sourcecode" class="expand"><code :class="type"></code></pre>
  </div>
</template>
<script>

export default {
  props: ['src', 'type'],
  data() {
    return {
      sourcecode: ''
    };
  },
  mounted() {
    $.get(`/components/demos${this.src}`, (resp) => {
      this.sourcecode = resp;
    });
  }
};
</script>
