<template>
  <div>
    <header class="h-modal-header">测试</header>
    <div style="padding:15px">
      <Select dict="simple" v-model="value"></Select>
      <p>传递的参数：{{params.a}}, {{param2}}</p>
      <p>vuex传递的值：{{test}}</p>
    </div>
    <footer class="h-modal-footer">
      <button class="h-btn h-btn-primary" @click="triggerEvent">确定</button>
      <button class="h-btn h-btn-blue" @click="go">跳转</button>
      <button class="h-btn" @click="close">关闭</button>
    </footer>
  </div>
</template>

<script>
import store from 'js/store';
import { mapGetters } from 'vuex';
export default {
  props: {
    params: Object,
    param2: String
  },
  data() {
    return {
      value: this.param2
    };
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
      // 向外层触发事件
      this.$emit('event', 'update', this.value);
    },
    go() {
      // 注意：如果使用HeyUI.$Modal的方式调用，将无法使用$router等vue依赖组件。
      this.$router.push({ name: 'Home' });
      this.$emit('close');
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
