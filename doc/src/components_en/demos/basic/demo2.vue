<template>
  <div>
    <p>value: {{value}} | {{value | dictMapping('simple')}}</p>
    <p><Radio dict="simple" v-model="value"></Radio></p>
    <p v-width="400"><Select dict="simple" v-model="value"></Select></p>

    <p v-height="20"></p>
    <p>value2: {{value2}} | {{value2 | dictMapping('simple')}}</p>
    <p><Checkbox dict="simple" v-model="value2"></Checkbox></p>
    <p v-width="400"><Select dict="simple" v-model="value2" multiple></Select></p>

    <p v-height="20"></p>
    <p>value3: {{value3}} | {{value3 | dictMapping('simple')}}</p>
    <p v-width="400"><Select dict="simple" v-model="value3" type="object"></Select></p>
    <p v-width="400"><AutoComplete dict="simple" v-model="value3" type="object"></AutoComplete></p>

    <p v-height="20"></p>
    <p>value3: {{value4}} | {{value4 | dictMapping('simple')}}</p>
    <p v-width="400"><Select dict="simple" v-model="value4" type="object" multiple></Select></p>
    <p v-width="400"><AutoComplete dict="simple" v-model="value4" type="object" multiple></AutoComplete></p>
  </div>
</template>
<script>
export default {
  data() {
    return {
      value: null,
      value2: [],
      value3: null,
      value4: []
    };
  }
};
</script>
