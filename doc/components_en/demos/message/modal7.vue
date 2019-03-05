<template>
  <div>
    <Button @click="open">Js calls Modal</Button>
    <Button @click="opened=true">Vue calls Modal</Button>
    <Modal v-model="opened">
      <div slot="header">Vue</div>
      <div>This is a popup called with vue</div>
      <div slot="footer">
        <Button color="primary" @click="modalConfirm">confirm</Button>
        <Button @click="modalClose">cancel</Button>
        <Button color="red" @click="modalDelete">delete</Button>
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
        content: 'This is a popup called with Js',
        buttons: [
          {
            type: 'ok',
            name: 'confirm',
            color: 'primary'
          },
          {
            type: 'cancel',
            name: 'cancel'
          },
          {
            type: 'delete',
            name: 'delete',
            color: 'red'
          }
        ],
        events: {
          $init: modal => {
            // trigger when modal inited
          },
          $close: modal => {
            // trigger when modal closed
          },
          delete: modal => {
            modal.close();
            this.$Message.error('Clicked the delete button');
          },
          ok: modal => {
            this.$Message.info('Clicked the confirmation button');
            modal.close();
          },
          cancel: modal => {
            this.$Message.warn('Clicked the cancel button');
            modal.close();
          }
        }
      });
    },
    modalConfirm() {
      this.$Message.info('Clicked the confirmation button');
      this.opened = false;
    },
    modalClose() {
      this.$Message.warn('Clicked the cancel button');
      this.opened = false;
    },
    modalDelete() {
      this.$Message.error('Clicked the delete button');
      this.opened = false;
    }
  }
};
</script>
