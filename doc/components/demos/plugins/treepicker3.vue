<template>
  <div>
    <p>value: 选中了{{value.length}}个</p>
    <p v-width="300">
       <TreePicker config="simple" multiple filterable v-model="value" @change="change" @choose="choose" @select="select"></TreePicker>
    </p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: [1, 2]
    };
  },
  methods: {
    change() {
      // 选择器关闭的时候触发
    },
    choose(data) {
      log(data);
    },
    select(data) {
      log(data);
    }
  }
};
</script>
