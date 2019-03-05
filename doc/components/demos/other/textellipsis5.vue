<template>
  <div>
    <TextEllipsis v-for="text of texts" :key="text" :text="text" :height="40" v-width="300" useTooltip tooltipTheme="white" placement="right">
      <template slot="more">...</template>
    </TextEllipsis>
  </div>
</template>

<script>

export default {
  data() {
    return {
      texts: [
        '超级长超级长的公司名称超级长超级长超级长超级长',
        '有创意的公司名字'
      ]
    };
  },
  methods: {

  }
};
</script>
