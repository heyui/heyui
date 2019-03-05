<template>
  <div>
    <p>
      <h-switch small v-model="enable">Open</h-switch>
    </p>
    <p>
      <Button class="text-hover" v-tooltip="enable" :content="content" @click="content+='1'">Directive call, point me</Button>
    </p>
    <p>
      <Tooltip :content="content" :disabled="!enable"><Button class="text-hover" @click="content+='1'">Component call, point me</Button></Tooltip>
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
