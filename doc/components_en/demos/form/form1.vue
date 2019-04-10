<template>
  <div v-width="450">
    <Form
      ref="form"
      :validOnChange="validOnChange"
      :showErrorTip="showErrorTip"
      :labelPosition="labelPosition"
      :labelWidth="130"
      :rules="validationRules"
      :model="model"
    >
      <FormItem>
        <SwitchList :datas="labels" v-model="labelPosition" :small="true"></SwitchList>
        <i class="h-split"></i>
        <Checkbox v-model="showErrorTip">Use Message to prompt error messages</Checkbox>
        <i class="h-split"></i>
        <Checkbox v-model="validOnChange">Check after data changes</Checkbox>
      </FormItem>
      <FormItem label="username" prop="name">
        <template v-slot:label><i class="h-icon-user"></i> username</template>
        <input type="text" v-model="model.name">
      </FormItem>
      <FormItem label="password" icon="h-icon-complete" prop="password">
        <input type="password" v-model="model.password">
      </FormItem>
      <FormItem>
        <Button color="primary" :loading="isLoading" @click="submit">submit</Button>&nbsp;&nbsp;&nbsp;
        <Button @click="reset">cancel</Button>
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
        left: 'Label left aligned',
        right: 'Label right aligned'
      },
      model: {
        name: '',
        password: ''
      },
      validationRules: {
        required: ['name', 'password']
      },
      showErrorTip: true,
      validOnChange: true
    };
  },
  methods: {
    submit() {
      this.isLoading = true;
      let validResult = this.$refs.form.valid();
      if (validResult.result) {
        this.$Message('Successful verification');
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
