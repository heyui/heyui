<template>
  <div id="app">
    <router-view v-if="$route.name != 'home'"></router-view>
    <Home v-if="showed" v-show="$route.name == 'home'"></Home>
  </div>
</template>
<script>
import Home from './components/home.vue'
export default {
  components: {Home},
  watch:{
    '$route.name': function(){
      if (this.$route.name == 'home') {
        this.showed = true;
      }
    }
  },
  data () {
    return {
      showed: false
    }
  },
  mounted() {
    if (this.$route.name == 'home') {
      this.showed = true;
    }
  },
  methods: {}
}
</script>
