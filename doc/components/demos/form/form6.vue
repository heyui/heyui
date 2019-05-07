<template>
  <div>
    <Form :label-width="110" :model="data" ref="form" :rules="rules" showErrorTip>
      <FormItem label="数字" prop="number">
        <input type="text" v-model="data.number" />
      </FormItem>
      <FormItem label="电话" prop="mobile">
        <input type="text" v-model="data.mobile" />
      </FormItem>
      <FormItem>
        <Button @click="validJs('number')">js验证number</Button>
        <Button @click="validJs('mobile')">js验证mobile</Button>
          【不触发dom报错】
      </FormItem>
      <FormItem>
        <Button @click="valid('number')">验证number</Button>
        <Button @click="valid('mobile')">验证mobile</Button>
      </FormItem>
      <FormItem>
        <Button color="primary" @click="submit">提交</Button>
        <Button @click="reset">清除验证</Button>
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
      this.$refs.form.resetValid();
    }
  },
  methods: {
    valid(field) {
      let validResult = this.$refs.form.validField(field);
      log(validResult);
      if (validResult.valid) {
        this.$Message('验证成功');
      } else {
        this.$Message.error(`${validResult.label}${validResult.message}`);
      }
    },
    validJs(field) {
      let validResult = this.$refs.form.validFieldJs(field);
      log(validResult);
      if (validResult.valid) {
        this.$Message('验证成功');
      } else {
        this.$Message.error(`${validResult.label}${validResult.message}`);
      }
    },
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('验证成功');
      }
    },
    reset() {
      this.$refs.form.resetValid();
    }
  }
};
</script>
