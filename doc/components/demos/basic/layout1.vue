<style lang="less">
  .layout-demo-1-vue {
     .h-layout-header, .h-layout-footer{
        background: #7dbcea;
        color: #fff;
        line-height: 64px;
        text-align: center;
     }
     .h-layout-content {
        background: rgba(16, 142, 233, 1);
        color: #fff;
        min-height: 120px;
        line-height: 120px;
        text-align: center;
     }
  }
</style>
<template>
  <div class="layout-demo-1-vue">
    <Layout>
      <HHeader>Header</HHeader>
      <Content>Content</Content>
      <HFooter>Footer</HFooter>
    </Layout>
    <br/>
    <Layout>
      <HHeader>Header</HHeader>
      <Layout>
        <Sider>Sider</Sider>
        <Content>Content</Content>
      </Layout>
      <HFooter>Footer</HFooter>
    </Layout>
    <br/>
    <Layout>
      <HHeader>Header</HHeader>
      <Layout>
        <Content>Content</Content>
        <Sider>Sider</Sider>
      </Layout>
      <HFooter>Footer</HFooter>
    </Layout>
    <br/>
    <Layout>
      <Sider>Sider</Sider>
      <Layout>
        <HHeader>Header</HHeader>
        <Content>Content</Content>
        <HFooter>Footer</HFooter>
      </Layout>
    </Layout>
  </div>
</template>
<script>
  export default {
    data: function () {
      return {}
    }
  }
</script>
