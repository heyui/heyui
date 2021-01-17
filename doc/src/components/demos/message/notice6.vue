<template>
  <p>
    <button class='h-btn' @click="noticeButton()">打开Notice</button>
  </p>
</template>
<script>
import noticeTest from './noticeTest';
export default {
  methods: {
    noticeButton() {
      let info = {
        component: {
          vue: noticeTest,
          datas: {
            fruit: '苹果'
          }
        },
        events: {
          success: (modal, data) => {
            this.$Message(data);
          }
        }
      };
      this.$Notice(info);
    }

  }
};
</script>
