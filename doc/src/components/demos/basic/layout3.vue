
<template>
  <div class="layout-demo-2-vue">
    <Layout :headerFixed="headerFixed">
      <HHeader theme="dark">
        <div class="layout-logo"></div>
      </HHeader>
      <Layout :siderFixed="siderFixed" :siderCollapsed="siderCollapsed">
        <Sider theme="white">
          <Menu style="margin-top: 40px;" className="h-menu-white" :datas="menuDatas" :inlineCollapsed="siderCollapsed"></Menu>
        </Sider>
        <Content style="padding: 0px 30px;">
          <Breadcrumb :datas="datas" style="margin: 16px 0px;"></Breadcrumb>
          <div style="background: rgb(255, 255, 255); padding: 24px; min-height: 280px;">
            <p>
              <h-switch v-model="headerFixed">固定header</h-switch>
            </p>
            <p>
              <h-switch v-model="siderFixed" :disabled="!headerFixed">固定Sider</h-switch>
            </p>
            <p>
              <h-switch v-model="siderCollapsed">收起菜单</h-switch>
            </p>
          </div>
          <HFooter class="text-center">Copyright © {{year}}
            <a href="http://www.ch-un.com" target="_blank">Lan</a>
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
        { title: '首页', key: 'welcome', icon: 'h-icon-home' },
        { title: '查询', key: 'search', icon: 'h-icon-search' },
        { title: '收藏', key: 'favor', icon: 'h-icon-star', count: 100, children: [{ title: '收藏-1', key: 'favor2-1' }] },
        { title: '任务', icon: 'h-icon-task', key: 'task' }
      ],
      datas: [
        { icon: 'h-icon-home' },
        { title: 'Component', icon: 'h-icon-complete', route: { name: 'Component' } },
        { title: 'Breadcrumb', icon: 'h-icon-star' }
      ]
    };
  },
  watch: {
    headerFixed() {
      if (!this.headerFixed) {
        this.siderFixed = false;
      }
    }
  }
};
</script>

<style lang="less">
.layout-demo-2-vue {
  .h-layout {
    background: #f0f2f5;
  }
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
