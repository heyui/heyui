<template>
  <div>
    <Avatar :src="src" @click="click">
      <div style="font-size: 18px;">默认尺寸的显示</div>
      <p class="dark2-color">描述</p>
    </Avatar>
    <br>
    <Avatar :src="src" :width="60" v-width="300" :imageTop="5">
      <div style="font-size: 20px;" class="text-ellipsis">超出部分省略，自定义尺寸的显示</div>
      <p class="dark2-color">描述1</p>
      <p class="dark2-color">描述2</p>
      <p class="dark2-color">描述3</p>
    </Avatar>
  </div>
</template>

<script>
export default {
  data() {
    return {
      src: 'https://i1.go2yd.com/image.php?url=0Kvq81cKR1'
    };
  },
  methods: {
    click(event) {
      log(event);
    }
  }
};

</script>
