<template>
  <input type="text" v-model="textVal"
         @input="inputHander"
         @blur="blurHander" v-bind="$attrs" :readonly="isReadonly">
</template>

<script>
  export default {
    name: "Input",
    props:{
      value:String
    },
    inheritAttrs: false,
    inject:["form","formItem"],
    data(){
      return {
        textVal: this.value,
        oldVal: this.value
      }
    },
    computed:{
      isReadonly(){
        return this.$attrs.readonly!==undefined?this.$attrs.readonly:(this.formItem && this.formItem.readonly === true ? this.formItem.readonly : (this.form?this.from.readonly:false));
      }
    },
    methods:{
      inputHander(event){
        this.textVal = event.target.value;
        this.setValue(this.textVal);
      },
      setValue(val){
        if(val!==this.oldVal){
          this.oldVal= val;
          this.$emit("input",val);
        }
      },
      blurHander(event){
        this.$emit("blur",event);
      }
    },
    watch:{
      value(val,old){
        this.textVal = val;
        this.oldVal = old;
      }
    }
  }
</script>

<style scoped>

</style>
