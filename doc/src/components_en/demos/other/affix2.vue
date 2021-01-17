<template>
  <Affix :offset-bottom="10" :offset-top="220" @change="onchange"><button class="h-btn" :class="{'h-btn-red': fixed}">Fixed at a distance of 10px from the bottom</button></Affix>
</template>

<script>
export default {
  data() {
    return {
      fixed: false
    };
  },
  methods: {
    onchange(fixed) {
      this.fixed = fixed;
    }
  }
};
</script>
