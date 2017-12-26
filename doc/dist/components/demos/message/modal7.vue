<template>
  <div>
      <button class="h-btn" @click="open">Js调用Modal</button>
  </div>
</template>

<script>
export default {
  methods: {
    open() {
      //默认配置了'ok', 'cancel'两个按钮
      this.$Modal({
        title: '自定义的弹出框2',
        content: '<p>自定义的弹出框测试2</p><p>自定义的弹出框测试2</p>',
        buttons: ['ok', {
          type: 'cancel',
          name: '关闭'
        }, {
          type: 'delete',
          name: '删除',
          color: 'red'
        }],
        events: {
          //默认有close,init的event,请不要定义同名的按钮
          init: (m) => {
            //modal打开
          },
          delete: (m) => {
            m.close();
            this.$Message.error('点击了删除按钮');
          },
          ok: (m) => {
            this.$Message.info('点击了确认按钮');
            m.close();
          },
          cancel: (m) => {
            this.$Message.warn('点击了取消按钮');
            m.close();
          }
        }
      });
      //heyui.$Modal js调用也可以
    }
  }
}
</script>