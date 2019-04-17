<template>
  <div>
    <Form :labelWidth="150" readonly>
      <FormItem label="点击遮罩可否关闭">
        <h-switch small v-model="params.closeOnMask">closeOnMask</h-switch>
      </FormItem>
      <FormItem label="全屏">
        <h-switch small v-model="params.fullScreen" @change="revert('middle', 'height')">fullScreen</h-switch>
      </FormItem>
      <FormItem label="垂直居中">
        <h-switch small v-model="params.middle" @change="revert('fullScreen', 'height')">middle</h-switch>
      </FormItem>
      <FormItem label="有遮罩">
        <h-switch small v-model="params.hasMask" @change="revert('height')">hasMask</h-switch>
      </FormItem>
      <FormItem label="有分割线">
        <h-switch small v-model="params.hasDivider">hasDivider</h-switch>
      </FormItem>
      <FormItem label="测试超长弹框">
        <h-switch small v-model="height" @change="revert('fullScreen', 'middle', 'hasMask')"></h-switch>
      </FormItem>
    </Form>
    <p>
      <button class="h-btn" @click="open">Js调用全屏Modal</button>
      <button class="h-btn" @click="opened=true">Vue调用全屏Modal</button>
    </p>
    <Modal v-model="opened" v-bind="params">
      <div slot="header">Vue</div>
      <div :style="{'height': height ? '800px' : 'auto'}">
        <div>这是Vue自定义的弹出框</div>
        <div><Select dict="simple" v-width="160"></Select></div>
      </div>
      <div slot="footer">
        <button class="h-btn" @click="close">取消</button>
        <button class="h-btn h-btn-primary" @click="confirm">确定</button>
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
  hasDivider: false
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
        content: `<div style="height: ${this.height ? '800px' : 'auto'}">这是Js自定义的弹出框</div>`,
        buttons: [
          {
            type: 'cancel',
            name: '取消'
          },
          {
            type: 'confirm',
            name: '确认',
            color: 'primary'
          }
        ],
        events: {
          confirm: modal => {
            this.$Message('点击确定了。');
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
      this.$Message('点击确定了。');
      this.close();
    },
    close() {
      this.opened = false;
    }
  }
};
</script>
