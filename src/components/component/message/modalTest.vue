<template>
  <div>
    <header>测试</header>
    <div>{{param.a}}</div>
    <footer></footer>
  </div>
</template>

<script>
export default {
  data() {
    return {
    }
  },
  props: {
    param: Object
  }
}
</script>
