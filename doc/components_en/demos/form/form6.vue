<template>
  <div>
    <Form :label-width="110" :model="data" ref="form" :rules="rules" showErrorTip>
      <FormItem label="digital" prop="number">
        <input type="text" v-model="data.number" />
      </FormItem>
      <FormItem label="phone" prop="mobile">
        <input type="text" v-model="data.mobile" />
      </FormItem>
      <FormItem>
        <Button @click="validJs('number')">Js verification number</Button>
        <Button @click="validJs('mobile')">Js verification mobile</Button>
          [Do not trigger dom error]
      </FormItem>
      <FormItem>
        <Button @click="valid('number')">Verify number</Button>
        <Button @click="valid('mobile')">Verify mobile</Button>
      </FormItem>
      <FormItem>
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
      data: {
        number: [null],
        mobile: null
      },
      rules: {
        number: ['number'],
        mobile: ['mobile'],
        required: ['number', 'mobile']
      }
    };
  },
  watch: {
    required() {
      this.$refs.form.reset();
    }
  },
  methods: {
    valid(field) {
      let validResult = this.$refs.form.validField(field);
      log(validResult);
      if (validResult.valid) {
        this.$Message('Successful verification');
      } else {
        this.$Message.error(`${validResult.label}${validResult.message}`);
      }
    },
    validJs(field) {
      let validResult = this.$refs.form.validFieldJs(field);
      log(validResult);
      if (validResult.valid) {
        this.$Message('Successful verification');
      } else {
        this.$Message.error(`${validResult.label}${validResult.message}`);
      }
    },
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
