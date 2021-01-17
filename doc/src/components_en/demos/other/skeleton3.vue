<style lang='less'>
.skeleton-demo-3-vue {
  .h-list {
    .h-list-item {
      padding: 16px 0;
      &:not(:last-child){
        border-bottom: 1px solid #e8e8e8;
      }
      .h-list-item-meta {
        margin-bottom: 16px;
      }
      .h-list-item-title {
        margin-bottom: 12px;
        color: rgba(0,0,0,0.85);
        font-size: 16px;
        line-height: 24px;
      }
      .h-list-item-desc {
        color: rgba(0,0,0,0.45);
        font-size: 14px;
        line-height: 22px;
      }
    }
  }
}
  
</style>
<template>
  <div class="skeleton-demo-3-vue">
    <p><h-switch v-model="loading"></h-switch></p>
    <div class="h-list">
        <div class="h-list-item" v-for="(item,index) in listData" :key="index">
          <Skeleton active :loading="loading">
            <div class="h-list-item-meta">
              <h4 class="h-list-item-title">Heyui part {{index}}</h4>
              <div class="h-list-item-desc">HeyUI provides a complete solution, all components provide a global configurable mode.</div>
              HeyUI is a set of UI components and widgets built on Vue.js 2.0，mainly serves some middle and back end products.HeyUI is a set of UI components and widgets built on Vue.js 2.0，mainly serves some middle and back end products.
            </div>
          </Skeleton>
        </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      listData: []
    };
  },
  mounted() {
    this.init();
  },
  methods: {
    init() {
      this.listData = [{},{},{}];
    }
  },
  computed: {

  }
};
</script>
