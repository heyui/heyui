<template>
  <p>
    <button class='h-btn' @click="noticeButton()">自定义按钮</button>
    <button class='h-btn' @click="noticeButton(true)">自定义按钮2</button>
  </p>
</template>
<script>
export default {
  methods: {
    noticeButton(hasTitle = false) {
      let info = {
        type: 'info',
        content: `这是一个可以自己关闭的通知`,
        timeout: 0,
        buttons: [ {
          name: '忽略',
          type: 'cancel'
        }, {
          name: '去看看',
          color: 'primary',
          type: 'confirm'
        }],
        events: {
          confirm: (e) => {
            this.$Message('去处理看看');
            e.close();
          },
          cancel: (e) => {
            this.$Message('我已经去忽略了');
            e.close();
          }
        }
      };
      if (hasTitle) {
        info.title = '自定义通知';
      }
      this.$Notice(info);
    }

  }
};
</script>
