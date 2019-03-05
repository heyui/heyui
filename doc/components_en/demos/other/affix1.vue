<template>
  <div>
    <div>
      <Affix :offset-top="70" @change="onchange1"><button class="h-btn" :class="{'h-btn-green': status.fixed1}">Fixed at 70px offset from the top</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="120" @change="onchange2"><button class="h-btn" :class="{'h-btn-yellow': status.fixed2}">Fixed at a distance of 120px from the top</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="170" @change="onchange3"><button class="h-btn" :class="{'h-btn-blue': status.fixed3}">Fixed at 190px offset from the top</button></Affix>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      status: {
        fixed1: false,
        fixed2: false,
        fixed3: false
      }
    };
  },
  methods: {
    onchange1(fixed) {
      this.status.fixed1 = fixed;
    },
    onchange2(fixed) {
      this.status.fixed2 = fixed;
    },
    onchange3(fixed) {
      this.status.fixed3 = fixed;
    }
  }
};
</script>
