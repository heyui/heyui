<template>
  <p>
    <button class='h-btn' @click="noticeButton()">Custom button</button>
    <button class='h-btn' @click="noticeButton(true)">Custom button 2</button>
  </p>
</template>
<script>
export default {
  methods: {
    noticeButton(hasTitle = false) {
      let info = {
        type: 'info',
        content: `This is a notification that you can turn it off yourself.`,
        timeout: 0,
        buttons: [
          {
            name: 'ignore',
            type: 'cancel'
          },
          {
            name: 'Go and see',
            color: 'primary',
            type: 'confirm'
          }
        ],
        events: {
          confirm: e => {
            this.$Message('Go and take a look');
            e.close();
          },
          cancel: e => {
            this.$Message('I have already ignored it.');
            e.close();
          }
        }
      };
      if (hasTitle) {
        info.title = 'Custom notification';
      }
      this.$Notice(info);
    }
  }
};
</script>
