<template>
  <div>
    <blockquote>v-tooltip</blockquote>
    <p><Button color="primary" v-tooltip content="提示">Tooltip</Button></p>

    <blockquote>v-wordcount</blockquote>
    <p class="relative" style="width: 300px"><textarea style="width:100%" rows="3" v-wordcount="300"></textarea></p>

    <blockquote>v-wordlimit</blockquote>
    <p><input type="text" v-wordlimit="5" placeholder="限制只能输入5个字符串"></p>

    <blockquote>v-autosize</blockquote>
    <p><textarea style="width:300px" v-autosize placeholder="自适应输入的高度"></textarea></p>
  </div>
</template>

<script>
export default {
};
</script>
