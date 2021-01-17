<template>
    <BackTop :target="getTarget" :bottom="100" :right="50" class-name="h-backtop-custom">
      返回顶部
    </BackTop>
</template>

<script>

export default {
  methods: {
    getTarget() {
      return document.querySelector('.right-frame');
    }
  }
};
</script>
