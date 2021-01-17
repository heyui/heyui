<template>
  <div>
    <div>
      <Affix :offset-top="70" @change="onchange1"><button class="h-btn" :class="{'h-btn-green': status.fixed1}">固定在距离顶部偏移量70px的位置</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="120" @change="onchange2"><button class="h-btn" :class="{'h-btn-yellow': status.fixed2}">固定在距离顶部偏移量120px的位置</button></Affix>
    </div>
    <div v-height="10"></div>
    <div>
      <Affix :offset-top="170" @change="onchange3"><button class="h-btn" :class="{'h-btn-blue': status.fixed3}">固定在距离顶部偏移量190px的位置</button></Affix>
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
