<template>
  <div v-width="680">
    <Form label-position="left" :label-width="90" :rules="validationRules" :model="model" ref="form">
      <FormItem label="用户名" prop="name">
        <input type="text" v-model="model.name">
      </FormItem>
      <FormItem label="电话" prop="mobile" ref="mobile">
        <input type="text" v-model="model.mobile">
      </FormItem>
      <FormItem label="密码" prop="password">
        <input type="password" v-model="model.password" placeholder="必须大小写数字特殊字符混合，6-16位">
      </FormItem>
      <FormItem label="金额" single :required="true">
        <div class="h-input-group">
          <FormItem prop="money.min" label="起始金额" :show-label="false">
            <input type="text" placeholder="起始金额" v-model="model.money.min">
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="money.max" label="结束金额" :show-label="false">
            <input type="text" placeholder="结束金额" v-model="model.money.max">
          </FormItem>
          <span class="h-input-addon">K</span>
        </div>
      </FormItem>
      <FormItem label="日期" single>
        <div class="h-input-group">
          <FormItem prop="date.starttime" label="开始日期" :show-label="false">
            <DatePicker v-model="model.date.starttime"></DatePicker>
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="date.endtime" label="结束日期" :show-label="false">
            <DatePicker v-model="model.date.endtime"></DatePicker>
          </FormItem>
        </div>
      </FormItem>
      <FormItem label="Textarea" :single="true" prop="textarea">
        <textarea rows="3" v-autosize v-wordcount="50" v-model="model.textarea" placeholder="请输入10-50个字"></textarea>
      </FormItem>
      <FormItem>
        <Button color="primary" :loading="isLoading" @click="submit">校验</Button>&nbsp;&nbsp;&nbsp;
        <Button @click="reset">清除验证</Button>
        <Button color="primary" :loading="isLoading" @click="submitAsync">异步校验</Button>&nbsp;&nbsp;&nbsp;【异步校验等待2秒后返回电话信息后执行结果】
      </FormItem>
      <FormItem>
        <Button color="primary" :loading="isLoading" @click="valid('mobile')">单独验证电话</Button>&nbsp;&nbsp;&nbsp;
        <Button @click="resetMobilepicker">清除电话验证</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    return {
      isLoading: false,
      model: {
        name: null,
        password: null,
        mobile: null,
        money: {
          min: null,
          max: null
        },
        date: {
          starttime: null,
          endtime: null
        },
        textarea: null
      },
      validationRules: {
        rules: {
          password: {
            // 这里的判断不会影响最终的valid结果，所以也可以作为一些验证提示
            valid(value) {
              let patrn = /^.*(?=.{6,16})(?=.*\d)(?=.*[A-Z]{1,})(?=.*[a-z]{1,})(?=.*[!@#$%^&*?\(\)]).*$/;
              if (patrn.exec(value)) {
                return true;
              } else {
                return '必须大小写数字特殊字符混合，6-16位';
              }
            }
          },
          mobile: {
            validAsync(value, next, parent, data) {
              setTimeout(() => {
                // 这边可以写ajax异步调用判断手机是否已存在
                next('手机号码已被注册');
              }, 2000);
            }
          },
          textarea: {
            maxLen: 50,
            minLen: 10
          }
        },
        combineRules: [
          {
            parentRef: 'money',
            refs: ['min', 'max'],
            valid: {
              valid: 'lessThan',
              message: '起始金额不能大于结束金额'
            }
          },
          {
            parentRef: 'date',
            refs: ['starttime', 'endtime'],
            valid(value1, value2) {
              if (value1 > value2) {
                return '开始时间必须小于结束时间';
              } else {
                return true;
              }
            }
          }
        ],
        mobile: ['mobile'],
        number: ['money.min', 'money.max'],
        required: ['name', 'mobile', 'password', 'money.min', 'money.max']
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
        this.$Message.error(`还有${validResult.messages.length}个错误未通过验证。`);
        this.isLoading = false;
      }
    },
    submitAsync() {
      this.isLoading = true;
      this.$refs.form.validAsync().then(result => {
        if (result.result) {
          this.$Message('验证成功');
          setTimeout(() => {
            this.isLoading = false;
          }, 1000);
        } else {
          this.$Message.error(`还有${result.messages.length}个错误未通过验证。`);
          this.isLoading = false;
        }
      });
    },
    reset() {
      this.isLoading = false;
      this.$refs.form.reset();
    },
    resetMobilepicker() {
      this.$refs.mobile.reset();
    },
    valid(field) {
      let validResult = this.$refs.form.validField(field);
      if (validResult.valid) {
        this.$Message('验证成功');
      } else {
        this.$Message.error(`${validResult.label}${validResult.message}`);
      }
    }
  }
};
</script>
