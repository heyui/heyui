<template>
  <div class="doc">
    <div>
      <p><label><span class="h-switch" :checked="check4" @click="check4=!check4"/></span>{{check4}}</label></p>
      <br>
      <p><h-switch v-model="check1">测试</h-switch></p>
      <br>
      <p><h-switch v-model="check2" :small="true">测试</h-switch></p>
      <br>
      <p><h-switch v-model="check3" :disabled="true">测试</h-switch></p>
    </div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      check1: false,
      check2: false,
      check3: true,
      check4: true,
      check5: true
    }
  }
}
</script>
