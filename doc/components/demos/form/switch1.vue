<template>
  <div>
    <label><span class="h-switch" :checked="check" @click="check=!check"/></span>{{check}}</label>
  </div>
</template>

<script>

export default {
  data() {
    return {
      check: false,
    }
  }
}
</script>