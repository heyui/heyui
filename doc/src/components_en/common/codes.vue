<template>
  <div class="code-box">
    <pre v-highlightjs="sourcecode" class="expand"><code :class="type"></code></pre>
  </div>
</template>
<script>

export default {
  props: ['src', 'type', 'content'],
  data() {
    return {
      sourcecode: ''
    };
  },
  mounted() {
    if (this.src) {
      $.get(`/components_en/demos${this.src}`, (resp) => {
        this.sourcecode = resp;
      });
    } else if (this.content) {
      this.sourcecode = this.content;
    } else if (this.$slots.default) {
      this.sourcecode = this.$slots.default[0].text.trim();
    }
  }
};
</script>
