<template>
  <div>
    <!--header与footer自带modal的样式-->
    <header>测试</header>
    <div style="padding:15px">
      <Select dict="simple"></Select>
      <p>传递的参数：{{params.a}}</p>
      <p>vuex传递的值：{{test}}</p>
    </div>
    <footer>
      <button class="h-btn h-btn-primary" @click="triggerEvent">确定</button>
      <button class="h-btn h-btn-blue" @click="go">跳转</button>
      <button class="h-btn" @click="close">关闭</button>
    </footer>
  </div>
</template>

<script>
import store from 'js/store'
import { mapGetters } from 'vuex'
export default {
  data() {
    return {
      value1: 1,
    }
  },
  props: {
    params: Object
  },
  store,
  computed: {
    ...mapGetters({
      test: 'getTest'
    })
  },
  methods: {
    triggerEvent() {
      this.close();
      this.$emit("event", "fromchild", "测试");
    },
    go() {
      //注意：如果使用HeyUI.$Modal的方式调用，将无法使用$router等vue依赖组件。
      this.$router.push({name: 'home'});
      this.$emit('close');
    },
    close() {
      this.$emit("close");
    }
  }
}
</script>
