<template>
  <TextEllipsis :text="text" :height="100" v-width="200" :isLimitHeight="isLimitHeight" @show="show" @hide="hide">
    <span slot="before" class="h-tag h-tag-red">new</span>
    <template slot="more"><span>...</span><span class="link" @click="isLimitHeight=false">Expand</span></template>
    <span slot="after" class="link" v-if="!isLimitHeight" @click="isLimitHeight=true">Collapse</span>
  </TextEllipsis>
</template>

<script>
export default {
  data() {
    return {
      text: `Washington Freedom Lighthouse" reported a few days ago that the US Defense Department official revealed that China has recently carried out the tenth test of the Dongfeng-41 intercontinental missile. This test shot of the Middle East-41 missile projected multiple warheads and successfully hit. China's western shooting range target.`,
      isLimitHeight: true
    };
  },
  methods: {
    show() {
      this.$Message('show');
    },
    hide() {
      this.$Message('hide');
    }
  }
};
</script>
