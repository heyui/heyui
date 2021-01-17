<template>
  <div>
    <DropdownCustom ref="dropdown" trigger="manual" @show="showEvent" @hide="hideEvent">
      <textarea v-model="text" @focus="show" v-autosize rows="1"></textarea>
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
    showEvent(event) {
      this.$Message('show');
    },
    hideEvent() {
      this.$Message('hide');
    },
    update() {
      this.$refs.dropdown.update();
    },
    show() {
      this.$refs.dropdown.show();
    },
    hide() {
      this.$refs.dropdown.hide();
    }
  }
};
</script>
