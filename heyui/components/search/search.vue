<template>
  <div class="h-search" :class="{'h-search-searching':searching}">
    <input type="text" v-model="value" @keyup.enter="search"/> <i class="h-icon-search" @click="search"></i><i class="h-icon-close" @click="cancel"></i>
  </div>
</template>
<script>

export default {
  data() {
    return {
      value: "",
      searching: false
    };
  },
  methods: {
    search() {
      this.searching = this.value !== '';
      this.$emit('search', this.value);
    },
    cancel() {
      this.value = '';
      this.searching = false;
      this.$emit('search', this.value);
    }
  }
};
</script>