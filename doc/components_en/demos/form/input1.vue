<template>
  <div>
    <p>input value：{{value}}</p>
    <div>
      <input type="text" v-model="value"/>
    </div>
    <p>textarea value：{{value2}}</p>
    <div>
      <textarea v-model="value2"></textarea>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: '',
      value2: ''
    };
  }
};
</script>
