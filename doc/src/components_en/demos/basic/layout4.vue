<template>
  <div class="layout-demo-3-vue">
    <Layout :siderFixed="siderFixed" :siderCollapsed="siderCollapsed">
      <Sider theme="dark">
        <div class="layout-logo"></div>
        <Menu style="margin-top: 20px;" className="h-menu-dark" :datas="menuDatas" :inlineCollapsed="siderCollapsed"></Menu>
      </Sider>
      <Layout :headerFixed="headerFixed">
        <HHeader theme="white">
          <div style="width:100px;float:left;"><Button icon="h-icon-menu" size="l" noBorder style="font-size: 20px" @click="siderCollapsed=!siderCollapsed"></Button></div>
        </HHeader>
        <Content style="padding: 0px 30px;">
          <Breadcrumb :datas="datas" style="margin: 16px 0px;"></Breadcrumb>
          <div style="background: rgb(255, 255, 255); padding: 24px; min-height: 280px;">
            <p><h-switch v-model="siderFixed">Fixed Sider</h-switch></p>
            <p><h-switch v-model="headerFixed" :disabled="!siderFixed">Fixed header</h-switch></p>
            <p><h-switch v-model="siderCollapsed">Collapse menu</h-switch></p>
          </div>
          <HFooter class="text-center">
            Copyright © {{year}} <a href="http://www.ch-un.com" target="_blank">Lan</a>
          </HFooter>
        </Content>
      </Layout>
    </Layout>
  </div>
</template>

<script>
export default {
  data() {
    return {
      year: (new Date()).getFullYear(),
      headerFixed: false,
      siderFixed: false,
      siderCollapsed: false,
      menuDatas: [
        { title: 'Home', key: 'welcome', icon: 'h-icon-home' },
        { title: 'Inquire', key: 'search', icon: 'h-icon-search' },
        {
          title: 'Collection',
          key: 'favor',
          icon: 'h-icon-star',
          count: 100,
          children: [{ title: 'Collection-1', key: 'favor2-1' }]
        },
        { title: 'task', icon: 'h-icon-task', key: 'task' }
      ],
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
  },
  watch: {
    siderFixed() {
      if (!this.siderFixed) {
        this.headerFixed = false;
      }
    }
  }
};
</script>
<style lang="less">
.layout-demo-3-vue {
  .h-layout {
    background: #f0f2f5;
  }

  .layout-logo {
    height: 34px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 24px;
  }

  .h-layout-footer {
    padding: 24px 50px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
  }
}
</style>
