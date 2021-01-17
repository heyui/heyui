<template>
  <div>
    <blockquote>v-tooltip</blockquote>
    <p><Button color="primary" v-tooltip content="Prompt">Tooltip</Button></p>

    <blockquote>v-wordcount</blockquote>
    <p class="relative" style="width: 300px"><textarea style="width:100%" rows="3" v-wordcount="300"></textarea></p>

    <blockquote>v-wordlimit</blockquote>
    {{value}}
    <p><input type="text" v-model="value" v-wordlimit="5" placeholder="Limit can only enter 5 strings"></p>

    <blockquote>v-autosize</blockquote>
    <p><textarea style="width:300px" v-autosize placeholder="Adaptive input height"></textarea></p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: ''
    }
  }
};
</script>
