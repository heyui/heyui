<template>
  <div class="com-frame flex">
    <div class="left-frame overflow-y">
      <slot name="left-frame"></slot>
    </div>
    <div class="right-frame flex1 overflow-y">
      <router-view></router-view>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      pass: '',
      error: false
    }
  },
  methods: {},
  mounted() {
  }
}
</script>
