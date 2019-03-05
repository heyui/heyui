<template>
  <div>
    <p><Button @click="copy">Direct copy</Button></p>
    <div class="h-input-group" v-width="300">
      <input type="text" v-model="text" placeholder="内容" /><Button @click="copyText" color="primary">Copy</Button>
    </div>
    <div style="margin-top:10px">
      <textarea v-model="textarea" cols="40" rows="3"></textarea>
      <Button @click="textarea=''">Clear</Button>
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
        text: 'Copy to clipboard text',
        showSuccessTip: 'Copy Success'
      });
    }
  }
};
</script>
