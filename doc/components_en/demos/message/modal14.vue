<template>
  <div>
    <p>{{value | dictMapping('simple')}}</p>
    <p>
      <Button @click="openSelfDefine()">No background color frame</Button>
      <Button @click="open('right')">Right side of the bullet box (system comes with)</Button>
      <Button @click="open('left')">Left side frame (system comes with)</Button>
    </p>
  </div>
</template>

<script>
import ModalTest from './modalTest';

export default {
  components: {
  },
  data() {
    return {
      value: null
    };
  },
  methods: {
    openSelfDefine() {
      this.$Modal({
        transparent: true, // Transparent background
        content: `<img src='/static/images/demo.png' width='300'/>`,
        buttons: []
      });
    },
    open(place) {
      this.$Modal({
        type: `drawer-${place}`,
        width: 400,
        component: {
          vue: ModalTest,
          data: { a: 'test1' }, // The subcomponent uses the props params parameter to get the data. It is recommended to use datas.
          datas: { param2: this.value } // Subcomponents can be used directly using props, compatibility 1.15.0+
        },
        events: {
          update: (modal, data) => {
            this.value = data;
          }
        }
      });
    }
  }
};
</script>
