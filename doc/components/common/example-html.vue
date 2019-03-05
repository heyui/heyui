<template>
  <div class="example-vue">
    <component :is="com" :key="com"></component>
  </div>
</template>
<script>
import components from '../demos/demos';
export default {
  props: ['demo'],
  data() {
    let com = this.$route.query.path;
    let index = com.indexOf('/');
    com = com.replace('/', '');
    com =
      com.substr(0, index) +
      com.charAt(index).toUpperCase() +
      com.substr(index + 1);
    return {
      com
    };
  },
  methods: {},
  mounted() {
  },
  components
};
</script>
