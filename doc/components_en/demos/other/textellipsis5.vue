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
        'Super long super long company name super long super long super long super long',
        'Creative company name'
      ]
    };
  },
  methods: {}
};
</script>
