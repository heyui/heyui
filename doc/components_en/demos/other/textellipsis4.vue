<style lang="less">
.textellipsis-demo4 {
  .text-ellipsis-limit-text {
    white-space: pre-wrap;
  }
}
</style>

<template>
  <TextEllipsis class="textellipsis-demo4" :text="text" :height="100" v-width="200" :isLimitHeight="isLimitHeight">
    <span slot="before" class="h-tag h-tag-red">new</span>
    <template slot="more"><span>...</span><span class="link" @click="isLimitHeight=false">Expand</span></template>
    <span slot="after" class="link" v-if="!isLimitHeight" @click="isLimitHeight=true">Collapse</span>
  </TextEllipsis>
</template>

<script>
export default {
  data() {
    return {
      text: `Washington Freedom Lighthouse" reported a few days ago that \n US Defense Department officials revealed that China has recently conducted the tenth test of the Dongfeng-41 intercontinental missile. This test shot of the Middle East-41 missile projected multiple warheads. Successfully hit the target of the western China shooting range.`,
      isLimitHeight: true
    };
  },
  methods: {}
};
</script>
