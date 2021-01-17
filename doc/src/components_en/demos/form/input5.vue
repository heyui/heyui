<template>
  <div>
    <div><Button @click.native="setvalue" color="blue" size="s">Load value</Button><Button @click.native="removevalue" color="red" size="s">Clear value</Button></div>
    <br>
    <div>
        <textarea v-autosize v-model="value" rows=1 placeholder="please enter"></textarea>
        <textarea v-autosize v-model="value" rows=3 placeholder="please enter"></textarea>
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
