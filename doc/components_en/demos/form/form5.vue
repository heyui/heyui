<template>
  <div>
    <Form :label-width="110" :model="data" ref="form" :rules="rules" :showErrorTip="showErrorTip">
      <FormItem>
        <Checkbox v-model="required">Required or not</Checkbox>
        <i class="h-split"></i>
        <Checkbox v-model="showErrorTip">Whether to use the tip prompt error</Checkbox>
      </FormItem>
      <!--
          The required attribute defined here applies to the validation rules and applies to some variability required fields.
         -->
      <FormItem label="Custom array" prop="list[0]" :required="required">
        <input type="text" v-model="data.list[0]" />
      </FormItem>
      <FormItem label="Custom rule" prop="value" :required="required">
        <input type="text" v-model="data.value" />
      </FormItem>
      <FormItem :no-padding="true">
        <Button color="primary" @click="submit">submit</Button>
        <Button @click="reset">Clear verification</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      required: true,
      showErrorTip: true,
      data: {
        list: [null],
        value: null
      },
      rules: {}
    };
  },
  watch: {
    required() {
      this.$refs.form.reset();
    }
  },
  methods: {
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('Successful verification');
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
