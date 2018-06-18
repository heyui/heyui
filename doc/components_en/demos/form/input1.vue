<template>
  <div>
    <div>
      <input type="text" placeholder="请输入" v-model="value"/>
      <textarea placeholder="请输入" v-model="value2"></textarea>
    </div>
    <p>input对应的值：{{value}}</p>
    <p>textarea对应的值：{{value2}}</p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: ''
    }
  }
};
</script>
