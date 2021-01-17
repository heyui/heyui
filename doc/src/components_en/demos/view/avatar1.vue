<template>
  <div>
    <Avatar :src="src">
      <div style="font-size: 18px;">Default size display</div>
      <p class="dark2-color">Description</p>
    </Avatar>
    <br>
    <Avatar :src="src" :width="60" v-width="300" :imageTop="5">
      <div style="font-size: 20px;" class="text-ellipsis">Excessed part omitted, custom size display</div>
      <p class="dark2-color">Description 1</p>
      <p class="dark2-color">Description 2</p>
      <p class="dark2-color">Description 3</p>
    </Avatar>

  </div>
</template>

<script>
export default {
  data() {
    return {
      src: '/static/images/avatar-female.png'
    };
  }
};
</script>
