<template>
  <div>
    <p v-height="40"><h-switch v-model="loading">change loading</h-switch></p>
    <div>
      <div style="padding:100px 0;" v-bg-color:gray4  class="text-center">
        content
      </div>
      <Loading text="Loading" :loading="loading"></Loading>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: false
    };
  }
};
</script>
