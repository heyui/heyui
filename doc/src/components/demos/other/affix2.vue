<template>
    <Affix :offset-bottom="10" :offset-top="220" @change="onchange"><button class="h-btn"  :class="{'h-btn-red': fixed}">固定在距离底部偏移量10px的位置</button></Affix>
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
