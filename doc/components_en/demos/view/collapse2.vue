<style lang='less'>
</style>
<template>
  <div class="">
    <Collapse v-model="value" accordion>
      <CollapseItem title="Miles Morales">
        Spider-Man in the ultimate universe was bitten by a radioactive spider and gained super power. Occasionally and other spiders of the universe meet, they will fight against the strongest villains.
      </CollapseItem>
      <CollapseItem title="Peter Parker">
        616 Spider-Man of the Universe, he helped train Miles Morales to face himself, and took the responsibility on his shoulders, and slowly recovered himself during this period.
      </CollapseItem>
      <CollapseItem title="Gwen Stacey">
        I am a very smart, very responsive girl who can travel in a graceful manner like a dancer, the Spider-Man of the world she belongs to.
      </CollapseItem>
    </Collapse>
  </div>
</template>
<script>
export default {
  components: {},
  data() {
    return {
      value: [0]
    };
  },
  computed: {},
  created() {},
  methods: {}
};
</script>
