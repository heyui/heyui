<template>
  <div>
    <Form ref="form" :label-width="150" :rules="rules" :model="data">
      <FormItem label="old password" prop="oldpassword">
        <input type="text" v-model="data.oldpassword"/>
      </FormItem>
      <FormItem label="new password" prop="newpassword1">
        <input type="password" v-model="data.newpassword1"/>
      </FormItem>
      <FormItem label="Enter the new password again" prop="newpassword2">
        <input type="password" v-model="data.newpassword2"/>
      </FormItem>
      <FormItem>
        <Button color="primary"
                :loading="isLoading"
                @click="submit">submit</Button>&nbsp;&nbsp;&nbsp;<Button >cancel</Button>
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
        combineRules: [
          {
            refs: ['newpassword1', 'newpassword2'],
            valid: {
              valid: 'equal',
              message: 'Inconsistent password entered twice'
            }
          }
        ]
      }
    };
  },
  methods: {
    submit() {
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('Successful verification');
        this.isLoading = true;
        setTimeout(() => {
          this.isLoading = false;
        }, 1000);
      } else {
        this.$Message.error(
          `and also ${
            validResult.messages.length
          }. The error has not been verified.`
        );
      }
    }
  }
};
</script>
