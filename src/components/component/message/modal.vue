<template>
  <div class="doc">
    <h2>Modal 弹出框</h2>
    <p><button class="h-btn" @click="open1 = true">打开弹出框</button></p>
    <p><button class="h-btn" @click="open2 = true">打开无遮罩弹出框</button></p>
    <p><button class="h-btn" @click="open3 = true">点击遮罩无法关闭</button></p>
    <p><button class="h-btn" @click="open4 = true">打开居中的弹出框</button></p>
    <p><button class="h-btn" @click="confirm2">使用方法调用Confirm</button></p>
    <p><button class="h-btn" @click="modal">使用方法调用Modal</button></p>
    <p><button class="h-btn" @click="modal2">使用方法调用Modal2</button></p>
    <p><button class="h-btn" @click="modalComponent">调用组件式的Modal</button></p>
    <Modal v-model="open1">
      <div slot="header">标题</div>
      <div >这是一个普通的弹出框</div>
      <div slot="footer"><button class="h-btn h-btn-primary" @click="confirm">确定</button><button class="h-btn" @click="close">取消</button></div>
    </Modal>

    <ModalComponent :component="test" :props-data="{a:1}" v-model="open5"></ModalComponent>


    <Modal v-model="open2" :has-mask="false">
      <div slot="header">标题</div>
      <div >这是一个无遮罩的弹出框</div>
      <div slot="footer"><button class="h-btn h-btn-primary" @click="confirm">确定</button><button class="h-btn" @click="close">取消</button></div>
    </Modal>


    <Modal v-model="open3" :close-on-mask="false">
      <div slot="header">标题</div>
      <div >这是一个点击遮罩无法关闭的弹出框</div>
      <div slot="footer"><button class="h-btn h-btn-primary" @click="confirm">确定</button><button class="h-btn" @click="close">取消</button></div>
    </Modal>

    <Modal v-model="open4" :middle="true">
      <div slot="header">标题</div>
      <div >这是一个居中的弹出框</div>
      <div slot="footer"><button class="h-btn h-btn-primary" @click="confirm">确定</button><button class="h-btn" @click="close">取消</button></div>
    </Modal>
  </div>
</template>

<script>
import test from './modalTest';

export default {
  data() {
    return {
      open1: false,
      open2: false,
      open3: false,
      open4: false,
      open5: false,
      test
    }
  },
  methods: {
    confirm() {
      this.$Message("确定了。");
      this.close();
    },
    close() {
      this.open1 = false;
      this.open2 = false;
      this.open3 = false;
      this.open4 = false;
    },
    confirm2() {
      this.$Confirm("确定删除？").then(() => {
        this.$Message.success('确定删除！');
      })
    },
    modal() {
      this.$Modal({
        title: '自定义的弹出框',
        content: '<p>自定义的弹出框测试</p><p>自定义的弹出框测试</p>',
      });
    },
    modal2() {
      this.$Modal({
        title: '自定义的弹出框2',
        content: '<p>自定义的弹出框测试2</p><p>自定义的弹出框测试2</p>',
        buttons: ['cancel', {
          type: 'delete',
          name: '删除',
          color: 'red'
        }],
        events: {
          delete: (m) => {
            m.close();
            this.$Message.success('确定删除！');
          }
        }
      });
    },
    modalComponent() {
      this.open5 = true;
    }
  }
}
</script>
