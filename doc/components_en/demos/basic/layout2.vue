<template>
  <Layout :headerFixed="headerFixed" class="layout-demo-2-vue">
    <HHeader theme="dark">
      <div class="layout-logo"></div>
    </HHeader>
    <Content style="padding: 0px 50px;">
      <Breadcrumb :datas="datas" style="margin: 16px 0px;"></Breadcrumb>
      <div style="background: rgb(255, 255, 255); padding: 24px; min-height: 380px;">
        <p><h-switch v-model="headerFixed">Fixed header</h-switch></p>
      </div>
    </Content>
    <HFooter class="text-center">
      Copyright © 2019 <a href="http://www.ch-un.com" target="_blank">Lan</a>
    </HFooter>
  </Layout>
</template>

<script>
export default {
  data: function () {
    return {
      headerFixed: false,
      datas: [
        { icon: 'h-icon-home' },
        {
          title: 'Component',
          icon: 'h-icon-complete',
          route: { name: 'Component' }
        },
        { title: 'Breadcrumb', icon: 'h-icon-star' }
      ]
    };
  }
};
</script>
<style lang="less">
.layout-demo-2-vue {
  background: #f0f2f5;
  .layout-logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px 16px 0;
    float: left;
  }

  .h-layout-header {
    padding: 0 50px;
  }
  .h-layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
}
</style>
