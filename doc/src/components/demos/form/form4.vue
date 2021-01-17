<template>
  <div>
    <Form ref="form" :label-width="150" :rules="rules" :model="data">
      <FormItem label="旧密码" prop="oldpassword">
        <input type="text" v-model="data.oldpassword"/>
      </FormItem>
      <FormItem label="新密码" prop="newpassword1">
        <input type="password" v-model="data.newpassword1"/>
      </FormItem>
      <FormItem label="再次输入新密码" prop="newpassword2">
        <input type="password" v-model="data.newpassword2"/>
      </FormItem>
      <FormItem>
        <Button color="primary"
                :loading="isLoading"
                @click="submit">提交</Button>&nbsp;&nbsp;&nbsp;<Button >取消</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      data: {
        oldpassword: null,
        newpassword1: null,
        newpassword2: null
      },
      rules: {
        required: ['oldpassword', 'newpassword1', 'newpassword2'],
        combineRules: [{
          refs: ['newpassword1', 'newpassword2'],
          valid: {
            valid: 'equal',
            message: '两次输入的密码不一致'
          }
        }]
      }
    };
  },
  methods: {
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('验证成功');
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else {
        this.$Message.error(`还有${validResult.messages.length}个错误未通过验证。`);
      }
    }
  }
};
</script>
