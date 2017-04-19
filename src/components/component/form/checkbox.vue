<template>
  <div class="doc">
    <div class="bottom-line"><label><input type="checkbox" value="3" :indeterminate="checks.length>0&&checks.length<3" :checked="checks.length==3"/>全选</label></div>
    <div class="h-checkbox">
      <label><input type="checkbox" value="1" v-model="checks"/>测试1</label>
      <label><input type="checkbox" value="2" v-model="checks"/>测试2</label>
      <label><input type="checkbox" value="3" v-model="checks"/>测试3</label>
    </div>
    <br>
    <div class="h-checkbox" disabled>
      <label><input type="checkbox" disabled value="1" v-model="checks"/>测试1</label>
      <label><input type="checkbox" disabled value="2" v-model="checks"/>测试2</label>
      <label><input type="checkbox" disabled value="3" v-model="checks"/>测试3</label>
    </div>
    <br>
    {{checks}}
    <br>
    <div><Checkbox v-model="value1" :datas="param1" @input="onchange" class="test1111"></Checkbox></div>
    <div><Checkbox v-model="value1" :datas="param1" :disabled="true"></Checkbox></div>
    <p v-color:gray>{{value1}}</p>

    <h3>Dict</h3>
    <p v-color:gray>{{value3}}</p>
    <div><Checkbox v-model="value3" dict="simple"></Checkbox></div>
  </div>
</template>
<script>

export default {
  data() {
    return {
      checks: [],
      value3: [],
      value1: ['选择1'],
      param1: ['选择1', '选择2', '选择3'],
    }
  },
  methods: {
    onchange(value) {
      // console.log(value);
    }
  },
  mounted() {
    this.$nextTick(() => {
      $(".test1111", this.$el).on("setvalue", (event) => {
        log(event.detail);
      })
    });
  }
}
</script>
