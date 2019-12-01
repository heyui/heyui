<template>
  <Row>
    <Cell :width="4" v-for="f of fits" :key="f">
      <p class="text-center">{{f}}</p>
      <div class="text-center">
        <Avatar :src="src" :width="100" :fit="f" noInfo></Avatar>
      </div>
    </Cell>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      fits: ['fill', 'contain', 'cover', 'none'],
      src: 'https://i1.go2yd.com/image.php?url=0Kvq81cKR1'
    };
  }
};

</script>
