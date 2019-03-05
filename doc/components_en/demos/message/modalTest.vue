<template>
  <div>
    <header class="h-modal-header">test</header>
    <div style="padding:15px">
      <Select dict="simple" v-model="value"></Select>
      <p>Passed parameters:{{params.a}}, {{param2}}</p>
      <p>The value passed by vuex:{{test}}</p>
    </div>
    <footer class="h-modal-footer">
      <button class="h-btn h-btn-primary" @click="triggerEvent">determine</button>
      <button class="h-btn h-btn-blue" @click="go">Jump</button>
      <button class="h-btn" @click="close">shut down</button>
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
      // Trigger event to outer layer
      this.$emit('event', 'update', this.value);
    },
    go() {
      // Note: If you call it using HeyUI.$Modal, you will not be able to use vure dependencies such as $router.
      this.$router.push({ name: 'Home' });
      this.$emit('close');
    },
    close() {
      this.$emit('close');
    }
  }
};
</script>
