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
        </div>
      </div>
      <div class="right-frame">
        <div class="theme-show">
          <section class="colors">
            <h3>Primary Color</h3>
            <Row :space="10">
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-primary-color">Primary</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-primary1-color">Primary1</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="dark4-color bg-primary2-color">Primary2</div></Cell>
            </Row>
            <h3>Basic Color</h3>
            <Row :space="10">
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-green-color">Green</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-blue-color">Yellow</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-yellow-color">Warning</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-red-color">Red</div></Cell>
            </Row>
            <h3>Text Color</h3>
            <Row :space="10">
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark-color">Dark</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark1-color">Dark1</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark2-color">Dark2</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark3-color">Dark3</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="white-color bg-dark4-color">Dark4</div></Cell>
            </Row>
            <h3>Background Color</h3>
            <Row :space="10">
              <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray-color">Gray</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray1-color">Gray1</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray2-color">Gray2</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray3-color">Gray3</div></Cell>
              <Cell :width="4" :md='8' :xs="12"><div class="dark-color bg-gray4-color">Gray4</div></Cell>
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
