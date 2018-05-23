<template>
  <div>
    <div v-height="50">
      <SwitchList :datas="modeParam" v-model="mode" :small="true"></SwitchList>
    </div>
    <Form :label-width="110" :mode="mode" :model="data" :rules="validationRules" ref="form" :top="0.2">
      <FormItem label="输入框" prop="input">
        <input type="text" v-model="data.input" placeholder="限制输入30个字" v-wordlimit='30' />
        <template slot="error" slot-scope="props">
          <!-- *type*: base, combine, async -->
          <span class="link" v-if="props.type == 'async'">+++++++自定义的错误提示+++++++</span>
        </template>
      </FormItem>
      <FormItem label="整数" prop="int">
        <Slider v-model="data.int"></Slider>
      </FormItem>
      <FormItem label="整数" prop="int">
        <NumberInput v-model="data.int" :min="0" :max="100"></NumberInput>
      </FormItem>
      <FormItem label="只读" readonly>只读数据</FormItem>
      <FormItem label="数字" prop="number">
        <NumberInput type="text" v-model="data.number" />
      </FormItem>
      <FormItem label="邮箱" prop="email">
        <input type="text" v-model="data.email" />
      </FormItem>
      <FormItem label="网址" prop="url">
        <input type="text" v-model="data.url" />
      </FormItem>
      <FormItem label="电话" prop="tel">
        <input type="text" v-model="data.tel" />
      </FormItem>
      <FormItem label="手机号码" prop="mobile">
        <input type="text" v-model="data.mobile" />
      </FormItem>
      <FormItem label="金额" :required="true">
        <div class="h-input-group">
          <div class="h-input-addon">
            <Select v-model="data.select1" :datas="param1" :no-border="true" :null-option="false"></Select>
          </div>
          <FormItem prop="money.min" label="起始金额" :show-label="false">
            <input type="text" placeholder="起始金额" v-model="data.money.min" />
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="money.max" label="结束金额" :show-label="false">
            <input type="text" placeholder="结束金额" v-model="data.money.max" />
          </FormItem>
          <span class="h-input-addon">K</span>
        </div>
      </FormItem>
      <FormItem label="选择" prop="select2">
        <Select v-model="data.select2" dict="simple"></Select>
      </FormItem>
      <FormItem label="标签" prop="taginputs">
        <TagInput v-model="data.taginputs"></TagInput>
      </FormItem>
      <FormItem label="多选" prop="select3">
        <Select v-model="data.select3" dict="simple" :multiple="true"></Select>
      </FormItem>
      <FormItem label="日期" ref="datapicker" prop="date">
        <DatePicker placeholder="选择日期" v-model="data.date"></DatePicker>
      </FormItem>
      <FormItem label="评分" prop="rate">
        <Rate v-model="data.rate" :show-text="true"></Rate>
      </FormItem>
      <FormItem label="多文本" :single="true" prop="textarea">
        <textarea rows="3" v-autosize v-wordcount="50" v-model="data.textarea"></textarea>
      </FormItem>
      <FormItem label="单选" prop="radio">
        <Radio v-model="data.radio" @input="data.textarea += '12'" :datas="dataParam"></Radio>
      </FormItem>
      <FormItem label="多选" prop="checkbox">
        <Checkbox v-model="data.checkbox" :datas="dataParam"></Checkbox>
      </FormItem>
      <FormItem label="模糊匹配" prop="autocomplete">
        <AutoComplete v-model="data.autocomplete" config="simple"></AutoComplete>
      </FormItem>
      <!-- 
          这里定义的required属性同样适用与验证规则中。
         -->
      <FormItem label="自定义规则" prop="things[0]" required>
        <input type="text" v-model="data.things[0]" />
      </FormItem>
      <FormItemList>
        <FormItem v-for="(item, index) of data.inputs" :key="index" :label="'输入框'+(index+1)" :prop="'inputs['+index+'].value'">
          <Row type="flex">
            <Col class="flex1">
            <input type="text" v-model="item.value" />
            </Col>
            <Col class="text-right" v-width="50">
            <Poptip @confirm="remove(index)" content="确定删除？">
              <Button text-color="red" :no-border="true" icon="h-icon-trash"></Button>
            </Poptip>
            </Col>
          </Row>
        </FormItem>
      </FormItemList>
      <FormItem :single="true">
        <Button size="s" text-color="blue" @click="add">添加输入框</Button>
      </FormItem>
      <FormItem :no-padding="true">
        <Button color="primary" :loading="isLoading" @click="submit" v-tooltip content="执行异步验证但是不等待结果">提交</Button>
        <i class="h-split"></i>
        <Button color="green" :loading="isLoading" @click="submitAsync" v-tooltip content="等待所有异步验证都执行完后提交">异步提交</Button>
        <i class="h-split"></i>
        <Button @click="reset">清除验证</Button>
        <Button @click="resetDatepicker">清除日期的验证</Button>
      </FormItem>
    </Form>
  </div>
</template>
<script>
export default {
  data() {
    let that = this;
    return {
      mode: 'single',
      data: {
        int: null,
        number: null,
        url: null,
        email: null,
        tel: null,
        mobile: null,
        input: '',
        textarea: '测试',
        radio: 1,
        rate: null,
        checkbox: [1],
        select1: '人民币',
        select2: '',
        select3: [],
        taginputs: [],
        autocomplete: null,
        money: {
          min: null,
          max: null
        },
        date: null,
        inputs: [],
        things: ['']
      },
      dataParam: {
        1: '男',
        2: '女',
        3: '其他'
      },
      param1: ['美金', '人民币', '卢布'],
      isLoading: false,
      modeParam: {
        single: '一个区块一行',
        block: '标题独立一行',
        twocolumn: '两列一行',
        threecolumn: '三列一行',
      },
      isInputAsyncError: false,
      validationRules: {
        rules: {
          textarea: {
            maxLen: 50,
            minLen: 10
          },
          input: {
            //这里的判断不会影响最终的valid结果，所以也可以作为一些验证提示
            validAsync(value, next, parent, data) {
              setTimeout(() => {
                if (value == 15) {
                  next();
                } else {
                  next("ID不符合要求");
                }
              }, 10);
            }
          }
        },
        required: [
          'autocomplete',
          'select2',
          'select3',
          'inputs[].value',
          'input',
          'radio',
          'rate',
          'checkbox',
          'money',
          'date',
          'taginputs',
          'money.min',
          'money.max',
          'int',
          'number',
          'url',
          'email',
          'tel',
          'mobile',
        ],
        int: ['int'],
        number: ['number', 'money.min', 'money.max'],
        url: ['url'],
        email: ['email'],
        tel: ['tel'],
        mobile: ['mobile'],
        combineRules: [
          {
            parentRef: "money",
            refs: ['min', 'max'],
            valid: {
              valid: 'lessThan',
              message: '起始金额不能大于结束金额'
            }
          }
        ]
      }
    }
  },
  methods: {
    submit() {
      this.isLoading = true;
      let validResult = this.$refs.form.valid();
      // log(validResult.messages);
      if (validResult.result) {
        this.$Message("验证成功");
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
      this.$refs.form.validAsync().then(result=>{
        if (result.result) {
          this.$Message("验证成功");
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
    resetDatepicker() {
      this.$refs.datapicker.reset();
    },
    add() {
      this.data.inputs.push({ value: '' });
    },
    remove(index) {
      this.data.inputs.splice(index, 1);
    }
  }
};
</script>