<style lang="less" scoped>
.h-row>div>div {
  border-radius: 3px;
  padding: 20px 5px;
  text-align: center;
  border: @border;
  font-size: 15px;
  white-space: nowrap;
  overflow: hidden;
  [class^="h-icon-"], [class*=" h-icon-"]{
    font-size: 28px;
  }
  p{
    margin: 10px 0px;
  }
}
</style>
<template>
  <div class="doc">
    <h2>Icon 图标</h2>
    <p>我们采用了一套最基本的icon库。</p>
    <h3>简单的调用</h3>
    <p>利用基本的class<code>.h-icon-{name}</code>进行调用</p>
    <example demo="basic/icon"></example>

    <h3>图标库</h3>
    <Row :space="15">
      <template  v-for='(n, i) of list'>
        <Cell width="24" :key="n" v-if="i == 39">
          <blockquote>1.19.0+</blockquote>
        </Cell>
        <Cell :xs='12' :sm='12' :md='6' :lg='4' :xl='4' :key="n">
          <div>
            <p><i :class="n"></i></p>
            <p>{{n}}</p>
          </div>
        </Cell>
      </template>
    </Row>
  </div>
</template>
<script>
export default {
  data() {
    return {
      list: [
        'h-icon-info',
        'h-icon-warn',
        'h-icon-success',
        'h-icon-error',
        'h-icon-close',
        'h-icon-down',
        'h-icon-left',
        'h-icon-top',
        'h-icon-right',
        'h-icon-inbox',
        'h-icon-outbox',
        'h-icon-plus',
        'h-icon-minus',
        'h-icon-check',
        'h-icon-loading',
        'h-icon-spinner',
        'h-icon-completed',
        'h-icon-refresh',
        'h-icon-home',
        'h-icon-user',
        'h-icon-users',
        'h-icon-task',
        'h-icon-message',
        'h-icon-fullscreen',
        'h-icon-menu',
        'h-icon-link',
        'h-icon-edit',
        'h-icon-trash',
        'h-icon-complete',
        'h-icon-bell',
        'h-icon-search',
        'h-icon-star',
        'h-icon-star-on',
        'h-icon-setting',
        'h-icon-calendar',
        'h-icon-upload',
        'h-icon-github',
        'h-icon-location',
        'h-icon-help',
        'h-icon-help-solid',
        'h-icon-lock',
        'h-icon-angle-left',
        'h-icon-angle-right',
        'h-icon-angle-top',
        'h-icon-angle-down',
        'h-icon-close-min'
      ]
    };
  }
};
</script>
