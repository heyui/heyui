<template>
  <div>

    <!-- h-modal-header: default modal header style -->
    <header class="h-modal-header">test</header>
    <div style="padding:15px">
      <Select dict="simple" v-model="value"></Select>
      <p>Passed parameters:{{params.subparam}}, {{fruit}}</p>
      <p>The value passed by vuex:{{test}}</p>
    </div>

    <!-- h-modal-footer: default modal footer style -->
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
    fruit: String
  },
  data() {
    return {
      value: this.fruit
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
      // Trigger event to outer layer, old method
      // this.$emit('event', 'update', this.value);

      // Use emit trigger events method direct，compatibility 1.18.0+
      this.$emit('success', this.value);
      this.close();
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
