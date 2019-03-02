<template>
  <div>
    <button class="h-btn" @click="show = true">Open full screen popup</button>
    <Modal v-model="show" hasDivider hasCloseIcon fullScreen>
      <div slot="header">title</div>
      <div>
        Test content
      </div>
    </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      show: false
    };
  }
};
</script>
