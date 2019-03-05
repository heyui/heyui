<template>
  <div>
    <DropdownCustom ref="dropdown" trigger="click" @show="$Message('show')" @hide="$Message('hide')">
      <textarea v-model="text" v-autosize rows="1"></textarea>
      <div slot="content" v-width="200">
        <div v-padding="20">
          <Button @click="hide">关闭</Button>
        </div>
      </div>
    </DropdownCustom>
  </div>
</template>
<script>
export default {
  data() {
    return {
      text: ''
    };
  },
  watch: {
    text() {
      this.update();
    }
  },
  methods: {
    update() {
      this.$refs.dropdown.update();
    },
    hide() {
      this.$refs.dropdown.hide();
    }
  }
};
</script>
