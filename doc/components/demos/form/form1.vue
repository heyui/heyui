<template>
  <div v-width="400">
    <div v-height="50">
      <SwitchList :datas="labels" v-model="labelPosition" :small="true"></SwitchList>
    </div>
    <Form ref="form" :label-position="labelPosition" :label-width="90" :rules="validationRules" :model="model">
      <FormItem label="用户名" prop="name">
        <input type="text" v-model="model.name" />
      </FormItem>
      <FormItem label="密码" prop="password">
        <input type="password" v-model="model.password" />
      </FormItem>
      <FormItem>
        <Button color="primary" :loading="isLoading" @click="submit">提交</Button>&nbsp;&nbsp;&nbsp;
        <Button @click="reset">取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      labelPosition: 'left',
      labels: {
        left: 'Label左对齐',
        right: 'Label右对齐'
      },
      model: {
        name: '',
        password: ''
      },
      validationRules: {
        required: [
          'name',
          'password'
        ]
      }
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('验证成功');
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else {
        this.isLoading = false;
      }
    },
    reset() {
      this.$refs.form.reset();
    }
  }
};
</script>
