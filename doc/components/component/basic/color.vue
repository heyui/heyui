<style lang="less" scoped>
.color-spans>div>div {
  min-height: 80px;
  border-radius: 3px;
  padding: 10px;
}
</style>
<template>
  <div class="doc">
    <h2>Color 色彩</h2>
    <p>HeyUI目前提供一个<code>primary</code>的颜色，并提供基本的颜色模板，以方便在系统开发中统一调用。</p>
    <p>我们将提供统一的var.less调用，关于调用方式请参照<router-link to="/component/themes">更换主题</router-link></p>
    <h3>Primary</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='8'>
      <div v-bg-color:primary  v-color:white>
        <p>@primary-color</p>
      </div>
      </Cell>
    </Row>

    <h3>主色</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='6'>
      <div v-bg-color:blue  v-color:white>
        <p>@blue-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:green  v-color:white>
        <p>@green-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:yellow  v-color:white>
        <p>@yellow-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:red  v-color:white>
        <p>@red-color</p>
      </div>
      </Cell>
    </Row>

    <h3>灰色</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='12'>
      <div v-bg-color:dark  v-color:white>
        <p>@dark-color</p>
      </div>
      </Cell>
      <Cell :width='12'>
      <div v-bg-color:dark1  v-color:white>
        <p>@dark1-color</p>
      </div>
      </Cell>
      <Cell :width='12'>
      <div v-bg-color:dark2  v-color:white>
        <p>@dark2-color</p>
      </div>
      </Cell>
      <Cell :width='12'>
      <div v-bg-color:gray  v-color:white>
        <p>@gray-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:gray1  v-color:dark>
        <p>@gray1-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:gray2  v-color:dark>
        <p>@gray2-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:gray3  v-color:dark>
        <p>@gray3-color</p>
      </div>
      </Cell>
      <Cell :width='6'>
      <div v-bg-color:gray4  v-color:dark>
        <p>@gray4-color</p>
      </div>
      </Cell>
    </Row>

    <h3>文本</h3>
    <div>
      <p v-color:dark v-font='18'>标题@dark-color</p>
      <p v-color:gray>副标题@gray-color</p>
      <p v-color:gray1>描述@gray1-color</p>
      <p><a href="javascript:;">这是一个链接，复用@primary-color</a></p>
      <p><span v-color:red>这是一个错误@red-color</span></p>
    </div>

  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods: {},
  components: {}
};
</script>
