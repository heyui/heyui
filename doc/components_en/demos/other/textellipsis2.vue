<template>
  <TextEllipsis :text="text" :height="100" v-width="200">
    <template slot="more">...</template>
    <span slot="before" class="h-tag h-tag-red">new</span>
    <span slot="after">[09/14]</span>
  </TextEllipsis>
</template>

<script>
export default {
  data() {
    return {
      text: `Washington Freedom Lighthouse" reported a few days ago that the US Defense Department official revealed that China has recently carried out the tenth test of the Dongfeng-41 intercontinental missile. This test shot of the Middle East-41 missile projected multiple warheads and successfully hit. China's western shooting range target.`
    };
  },
  methods: {}
};
</script>
