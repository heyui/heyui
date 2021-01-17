<style lang="less">
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
    return {};
  }
};
</script>
<style lang="less">

@primary1-color: fade(@primary-color, 88%);
@primary2-color: fade(@primary-color, 80%);

.layout-demo-1-vue {
  .h-layout-header, .h-layout-footer{
     background: @primary2-color;
     color: #fff;
     line-height: 64px;
     height: 64px;
     text-align: center;
  }
  .h-layout-content {
     background: @primary-color;
     color: #fff;
     min-height: 120px;
     line-height: 120px;
     text-align: center;
  }
 .h-layout-sider{
   background: @primary1-color;
   color: #fff;
   text-align: center;
   line-height: 120px;
 }
}
</style>
