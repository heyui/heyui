<template>
  <div>
    <button class="h-btn" @click="confirm">Confirm</button>
  </div>
</template>

<script>
export default {
  methods: {
    confirm() {
      // heyui.$Confirm Js call can also
      // No head when title is empty
      this.$Confirm('confirm delete?', 'Custom title')
        .then(() => {
          this.$Message.success('confirm delete!');
        })
        .catch(() => {
          this.$Message.error('cancel');
        });
    }
  }
};
</script>
