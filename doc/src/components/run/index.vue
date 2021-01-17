<style lang="less">
.page-run {
}
</style>

<template>
  <div class="page-theme">
    <com-head></com-head>
    <components></components>
  </div>
</template>
<script>
import comHead from '../common/header.vue';
import components from './components.vue';
export default {
  methods: {},
  components: {
    comHead,
    components
  }
};
</script>
