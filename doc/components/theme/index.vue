<style lang="less">
.page-theme {
  .theme-show {
    .colors {
      .h-col > div {
        padding: 30px 0px;
        text-align: center;
        border-radius: 5px;
      }
    }
  }
  .theme-setting {
    padding: 0 25px;
  }
}
</style>

<template>
  <div class="page-theme">
    <com-head></com-head>
    <div class="page-body com-frame">
      <div class="left-frame">
        <div class="theme-setting">
          <input type="color" v-model="color">
          <input type="text" v-model="color">
        </div>
      </div>
      <div class="right-frame">
        <div class="theme-show">
          <h3>Color</h3>
          <section class="colors">
            <Row :space="10">
              <Cell :width="4"><div class="white-color bg-primary-color">Primary</div></Cell>
              <Cell :width="4"><div class="white-color bg-green-color">Green</div></Cell>
              <Cell :width="4"><div class="white-color bg-blue-color">Yellow</div></Cell>
              <Cell :width="4"><div class="white-color bg-yellow-color">Warning</div></Cell>
              <Cell :width="4"><div class="white-color bg-red-color">Red</div></Cell>
            </Row>
          </section>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import comHead from '../common/header.vue';
export default {
  data() {
    return {
      color: null
    };
  },
  methods: {},
  components: {
    comHead
  }
};
</script>
