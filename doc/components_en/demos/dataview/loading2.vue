<template>
  <div>
    <p>
      <Button @click="pageload">Vue call global loading</Button>
      <Button @click="pageloadJs">Js call global loading</Button>
    </p>
  </div>
</template>
<script>
import heyui from '../../../../src'; // Demo test path
// import heyui from 'heyui'; Actual call

export default {
  methods: {
    pageload() {
      this.$Loading();
      setTimeout(() => {
        this.$Loading.close();
      }, 3000);
    },
    pageloadJs() {
      heyui.$Loading('Loading');
      setTimeout(() => {
        heyui.$Loading.close();
      }, 3000);
    }
  }
};
</script>
