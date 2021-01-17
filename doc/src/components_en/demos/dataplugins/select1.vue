<template>
  <div>
    <p>Selected value:{{select2}}<i class="h-split"></i>
      <button class="h-btn h-btn-s" @click="update2">Modified value</button>
    </p>
    <div v-width="300">
      <Select v-model="select2" :datas="param2"></Select>
    </div>
    <br/>
    <p>According to the content adaptation length, select the value:{{select3}} <i class="h-split"></i>
      <button class="h-btn h-btn-s" @click="update3">Modified value</button>
    </p>
    <div v-width="300">
      <Select v-model="select3" autosize :datas="param3"></Select>
    </div>
    <p>Custom key, title field</p>
    <div v-width="300">
      <Select v-model="select4" :datas="param4" keyName="code" titleName="name"></Select>
    </div>
  </div>
</template>
<script>
// HeyUI.config('dict.keyName', "code");
// HeyUI.config('dict.titleName', "title");
export default {
  data() {
    return {
      select: null,
      param: ['Option 1', 'Option 2', 'Choose 3'],
      select2: null,
      param2: [
        { title: 'Choose 0', key: 0 },
        { title: 'Disable selection', key: 1, disabled: true },
        { title: 'Option 1', key: 'a1', other: 'Other values' },
        { title: 'Option 2', key: 'a2' },
        { title: 'Choose 3', key: 'a3' }
      ],
      select3: null,
      param3: { 0: 'Choose 0', a1: 'Option 1', a2: 'Option 2', a3: 'Choose 3' },
      select4: null,
      param4: [
        { name: 'Choose 0', code: 0 },
        { name: 'Option 1', code: 'a1', other: 'Other values' },
        { name: 'Option 2', code: 'a2' },
        { name: 'Choose 3', code: 'a3' }
      ]
    };
  },
  methods: {
    update() {
      this.select = 'Option 2';
    },
    update2() {
      this.select2 = 'a2';
    },
    update3() {
      this.select3 = 'a2';
    },
    change(data) {
      log('changeData:', data);
    }
  }
};
</script>
