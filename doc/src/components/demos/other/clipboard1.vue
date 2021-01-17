<template>
  <div>
    <p><Button @click="copy">直接复制</Button></p>
    <div class="h-input-group" v-width="300">
      <input type="text" v-model="text" placeholder="内容" /><Button @click="copyText" color="primary">复制</Button>
    </div>
    <div style="margin-top:10px">
      <textarea v-model="textarea" cols="40" rows="3"></textarea>
      <Button @click="textarea=''">清空</Button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      text: '',
      textarea: ''
    };
  },
  methods: {
    copyText() {
      this.$Clipboard({
        text: this.text
      });
    },
    copy() {
      this.$Clipboard({
        text: '测试==复制至剪切板的文本==测试',
        showSuccessTip: 'Copy Success'
      });
    }
  }
};
</script>
