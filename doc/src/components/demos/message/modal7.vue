<template>
  <div>
      <Button @click="open">Js调用Modal</Button>
      <Button @click="opened=true">Vue调用Modal</Button>
      <Modal v-model="opened">
        <div slot="header">Vue</div>
        <div >这是使用vue调用的弹出框</div>
        <div slot="footer">
          <Button color="primary" @click="modalConfirm">确认</Button>
          <Button @click="modalClose">关闭</Button>
          <Button color="red" @click="modalDelete">删除</Button>
        </div>
      </Modal>
  </div>
</template>

<script>
export default {
  data() {
    return {
      opened: false
    };
  },
  methods: {
    open() {
      this.$Modal({
        title: 'Js',
        content: '这是使用Js调用的弹出框',
        buttons: [{
          type: 'ok',
          name: '确认',
          color: 'primary'
        }, {
          type: 'cancel',
          name: '关闭'
        }, {
          type: 'delete',
          name: '删除',
          color: 'red'
        }],
        events: {
          $init: (modal) => {
            // trigger when modal inited
          },
          $close: (modal) => {
            // trigger when modal closed
          },
          delete: (modal) => {
            modal.close();
            this.$Message.error('点击了删除按钮');
          },
          ok: (modal) => {
            this.$Message.info('点击了确认按钮');
            modal.close();
          },
          cancel: (modal) => {
            this.$Message.warn('点击了取消按钮');
            modal.close();
          }
        }
      });
    },
    modalConfirm() {
      this.$Message.info('点击了确认按钮');
      this.opened = false;
    },
    modalClose() {
      this.$Message.warn('点击了取消按钮');
      this.opened = false;
    },
    modalDelete() {
      this.$Message.error('点击了删除按钮');
      this.opened = false;
    }
  }
};
</script>
