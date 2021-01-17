<template>
  <div>
    <div><Button @click.native="setvalue" color="blue" size="s">加载值</Button><Button @click.native="removevalue" color="red" size="s">清除值</Button></div>
    <br>
    <div>
        <textarea v-autosize v-model="value" rows=1 placeholder="请输入"></textarea>
        <textarea v-autosize v-model="value" rows=3 placeholder="请输入"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: ''
    };
  },
  methods: {
    setvalue() {
      this.value = '1\n2\n3\n4\n5\n6';
    },
    removevalue() {
      this.value = '';
    }
  }
};
</script>
