<style lang="less" scoped>
  .color-spans>div>div {
    min-height: 80px;
    border-radius: 3px;
    padding: 10px;
  }

</style>
<template>
  <div class="doc">
    <h2>Color</h2>
    <p>HeyUI currently provides a <code>primary</code>color, and provides a basic color template to facilitate unified
      calling in system development.</p>
    <p>We will provide global variables in var.less, please refer to the <router-link to="/en/component/themes">Themes</router-link>
    </p>
    <h3>Primary</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='8'>
        <div v-bg-color:primary v-color:white>
          <p>@primary-color</p>
        </div>
      </Cell>
    </Row>

    <h3>Main color</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='6'>
        <div v-bg-color:blue v-color:white>
          <p>@blue-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:green v-color:white>
          <p>@green-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:yellow v-color:white>
          <p>@yellow-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:red v-color:white>
          <p>@red-color</p>
        </div>
      </Cell>
    </Row>

    <h3>Gray</h3>
    <Row :space='20' class="color-spans">
      <Cell :width='12'>
        <div v-bg-color:dark v-color:white>
          <p>@dark-color</p>
        </div>
      </Cell>
      <Cell :width='12'>
        <div v-bg-color:dark1 v-color:white>
          <p>@dark1-color</p>
        </div>
      </Cell>
      <Cell :width='12'>
        <div v-bg-color:dark2 v-color:white>
          <p>@dark2-color</p>
        </div>
      </Cell>
      <Cell :width='12'>
        <div v-bg-color:gray v-color:white>
          <p>@gray-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:gray1 v-color:dark>
          <p>@gray1-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:gray2 v-color:dark>
          <p>@gray2-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:gray3 v-color:dark>
          <p>@gray3-color</p>
        </div>
      </Cell>
      <Cell :width='6'>
        <div v-bg-color:gray4 v-color:dark>
          <p>@gray4-color</p>
        </div>
      </Cell>
    </Row>

    <h3>Text</h3>
    <div>
      <p v-color:dark v-font='18'>Title @dark-color</p>
      <p v-color:gray>Subtitle @gray-color</p>
      <p v-color:gray1>Description @gray1-color</p>
      <p><a href="javascript:;">This is a link, reuse @primary-color</a></p>
      <p><span v-color:red>This is an error @red-color</span></p>
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
