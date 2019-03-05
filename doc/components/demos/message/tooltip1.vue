<template>
  <div>
    <p><h-switch small v-model="enable">开启</h-switch></p>
    <p>
      <Button class="text-hover" v-tooltip="enable" :content="content" @click="content+='1'">Directive调用，点我</Button>
    </p>
    <p>
      <Tooltip :content="content" :disabled="!enable"><Button class="text-hover" @click="content+='1'">Component调用，点我</Button></Tooltip>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      enable: true,
      content: '1'
    };
  }
};
</script>
