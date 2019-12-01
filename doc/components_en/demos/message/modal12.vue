<template>
  <div>
    <Form :labelWidth="150" readonly>
      <FormItem label="Click the mask to close popup">
        <h-switch small v-model="params.closeOnMask">closeOnMask</h-switch>
      </FormItem>
      <FormItem label="full screen">
        <h-switch small v-model="params.fullScreen" @change="revert('middle', 'height')">fullScreen</h-switch>
      </FormItem>
      <FormItem label="close icon">
        <h-switch small v-model="params.hasCloseIcon">hasCloseIcon</h-switch>
      </FormItem>
      <FormItem label="middle popup">
        <h-switch small v-model="params.middle" @change="revert('fullScreen', 'height')">middle</h-switch>
      </FormItem>
      <FormItem label="has mask">
        <h-switch small v-model="params.hasMask" @change="revert('height')">hasMask</h-switch>
      </FormItem>
      <FormItem label="has divider">
        <h-switch small v-model="params.hasDivider">hasDivider</h-switch>
      </FormItem>
      <FormItem label="draggable">
        <h-switch small v-model="params.draggable" @change="revert('fullScreen','hasMask')">draggable，only support JS calls，1.25.0+。</h-switch>
      </FormItem>
      <FormItem label="test large popup">
        <h-switch small v-model="height" @change="revert('fullScreen', 'middle', 'hasMask')"></h-switch>
      </FormItem>
    </Form>
    <p>
      <button class="h-btn" @click="open">Js opens the popup</button>
      <button class="h-btn" @click="opened=true">Vue opens the popup</button>
    </p>
    <Modal v-model="opened" v-bind="params">
      <div slot="header">Vue</div>
      <div :style="{'height': height ? '800px' : 'auto'}">
        <div>This is a custom vue popup</div>
        <div><Select dict="simple" v-width="160"></Select></div>
      </div>
      <div slot="footer">
        <button class="h-btn" @click="close">Cancel</button>
        <button class="h-btn h-btn-primary" @click="confirm">Confirm</button>
      </div>
    </Modal>
  </div>
</template>

<script>
const DEFAULT_VALUE = {
  closeOnMask: true,
  fullScreen: false,
  middle: false,
  hasMask: true,
  hasDivider: false,
  draggable: false
};
export default {
  data() {
    return {
      params: {
        ...DEFAULT_VALUE
      },
      height: false,
      opened: false
    };
  },
  methods: {
    revert(...keys) {
      for (let key of keys) {
        if (key == 'height') {
          this.height = false;
        } else {
          this.params[key] = DEFAULT_VALUE[key];
        }
      }
    },
    open() {
      let params = {
        title: 'Js',
        fullScreen: true,
        content: `<div style="height: ${this.height ? '800px' : 'auto'}">This is a custom js popup</div>`,
        buttons: [
          {
            type: 'cancel',
            name: 'Cancel'
          },
          {
            type: 'confirm',
            name: 'Confirm',
            color: 'primary'
          }
        ],
        events: {
          confirm: modal => {
            this.$Message('Confirm');
            modal.close();
          },
          cancel: modal => {
            modal.close();
          }
        }
      };
      Object.assign(params, this.params);
      this.$Modal(params);
    },
    confirm() {
      this.$Message('Confirm');
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
};
</script>
