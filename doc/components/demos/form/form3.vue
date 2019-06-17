<template>
  <div>
    <Form :label-width="110" :mode="mode" :model="data" :rules="validationRules" ref="form" :top="0.2" showErrorTip>
      <FormItem single>
        <SwitchList :datas="modeParam" v-model="mode" :small="true"></SwitchList>
      </FormItem>
      <FormItem label="Input" prop="inputData">
        <input type="text" v-model="data.inputData" placeholder="只能输入15，限制输入30个字" v-wordlimit='30' />
        <template slot="error" slot-scope="props">
          <!-- *type*: base, combine, async -->
          <span class="link" v-if="props.type == 'async'" @click="open">+++++++自定义的错误提示+++++++</span>
        </template>
      </FormItem>
      <FormItem label="Integer" prop="intData">
        <Slider v-model="data.intData"></Slider>
      </FormItem>
      <FormItem label="Integer" prop="intData">
        <NumberInput v-model="data.intData" :min="0" :max="100"></NumberInput>
      </FormItem>
      <FormItem label="Readonly" readonly>只读数据</FormItem>
      <FormItem label="Digital" prop="numberData">
        <NumberInput type="text" v-model="data.numberData" />
      </FormItem>
      <FormItem label="Mail" prop="emailData">
        <input type="text" v-model="data.emailData" />
      </FormItem>
      <FormItem label="URL" prop="urlData">
        <input type="text" v-model="data.urlData" />
      </FormItem>
      <FormItem label="Cellphone " prop="telData">
        <input type="text" v-model="data.telData" />
      </FormItem>
      <FormItem label="Phone" prop="mobileData">
        <input type="text" v-model="data.mobileData" />
      </FormItem>
      <FormItem label="Amount" :required="true" single>
        <div class="h-input-group">
          <div class="h-input-addon">
            <Select v-model="data.select1Data" :datas="param1" :no-border="true" :null-option="false"></Select>
          </div>
          <FormItem prop="money.minData" label="起始金额" :show-label="false">
            <input type="text" placeholder="起始金额" v-model="data.money.minData" />
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="money.maxData" label="结束金额" :show-label="false">
            <input type="text" placeholder="结束金额" v-model="data.money.maxData" />
          </FormItem>
          <span class="h-input-addon">K</span>
        </div>
      </FormItem>
      <FormItem label="Select" prop="select2Data">
        <Select v-model="data.select2Data" dict="simple"></Select>
      </FormItem>
      <FormItem label="Tags" prop="taginputsData">
        <TagInput v-model="data.taginputsData"></TagInput>
      </FormItem>
      <FormItem label="Multiple" prop="select3Data">
        <Select v-model="data.select3Data" dict="simple" :multiple="true"></Select>
      </FormItem>
      <FormItem label="Date" ref="datapicker" prop="dateData">
        <DatePicker v-model="data.dateData"></DatePicker>
      </FormItem>
      <FormItem label="Score" prop="rateData">
        <Rate v-model="data.rateData" :show-text="true"></Rate>
      </FormItem>
      <FormItem label="Textarea" :single="true" prop="textareaData">
        <textarea rows="3" v-autosize v-wordcount="50" v-model="data.textareaData"></textarea>
      </FormItem>
      <FormItem label="Single" prop="radioData">
        <Radio v-model="data.radioData" :datas="dataParam"></Radio>
      </FormItem>
      <FormItem label="Multiple" prop="checkboxData">
        <Checkbox v-model="data.checkboxData" :datas="dataParam"></Checkbox>
      </FormItem>
      <FormItem label="Fuzzy" prop="autocompleteData">
        <AutoComplete v-model="data.autocompleteData" config="simple"></AutoComplete>
      </FormItem>
      <!--
          这里定义的required属性同样适用与验证规则中。
         -->
      <FormItem label="Custom" prop="thingsData[0]" required>
        <input type="text" v-model="data.thingsData[0]" />
      </FormItem>
      <div>
        <FormItem v-for="(item, index) of data.inputsData" :key="index" :label="'Custom'+(index+1)" :prop="'inputsData['+index+'].value'">
          <Row type="flex">
            <Cell class="flex1">
            <input type="text" v-model="item.value" />
            </Cell>
            <Cell class="text-right" v-width="50">
            <Poptip @confirm="remove(index)" content="确定删除？">
              <Button text-color="red" :no-border="true" icon="h-icon-trash"></Button>
            </Poptip>
            </Cell>
          </Row>
        </FormItem>
      </div>
      <FormItem single>
        <Button size="s" text-color="blue" @click="add">添加输入框</Button>
      </FormItem>
      <FormItem :no-padding="true" single>
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
    return {
      mode: 'single',
      data: {
        intData: null,
        numberData: null,
        urlData: null,
        emailData: null,
        telData: null,
        mobileData: null,
        inputData: '',
        textareaData: '测试',
        radioData: 1,
        rateData: null,
        checkboxData: [1],
        select1Data: '人民币',
        select2Data: '',
        select3Data: [],
        taginputsData: [],
        autocompleteData: null,
        money: {
          minData: null,
          maxData: null
        },
        dateData: null,
        inputsData: [],
        thingsData: ['']
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
        twocolumn: '两列一行',
        threecolumn: '三列一行',
        block: '标题独立一行'
      },
      isInputAsyncError: false,
      validationRules: {
        rules: {
          textareaData: {
            maxLen: 50,
            minLen: 10
          },
          inputData: {
            // 这里的判断不会影响最终的valid结果，所以也可以作为一些验证提示
            validAsync(value, next, parent, data) {
              log(value);
              setTimeout(() => {
                if (value == 15) {
                  next();
                } else {
                  next('ID不等于15');
                }
              }, 1000);
            }
          }
        },
        required: [
          'autocompleteData',
          'select2Data',
          'select3Data',
          'inputsData[].value',
          'inputData',
          'radioData',
          'rateData',
          'checkboxData',
          'moneyData',
          'dateData',
          'taginputsData',
          'money.minData',
          'money.maxData',
          'intData',
          'numberData',
          'urlData',
          'emailData',
          'telData',
          'mobileData',
          'textareaData'
        ],
        int: ['intData'],
        number: ['numberData', 'money.minData', 'money.maxData'],
        url: ['urlData'],
        email: ['emailData'],
        tel: ['telData'],
        mobile: ['mobileData'],
        combineRules: [
          {
            parentRef: 'money',
            refs: ['minData', 'maxData'],
            valid: {
              valid: 'lessThan',
              message: '起始金额不能大于结束金额'
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
        this.$Message('验证成功');
      }
    },
    submitAsync() {
      this.isLoading = true;
      this.$refs.form.validAsync().then(result => {
        if (result.result) {
          this.$Message('验证成功');
        }
        this.isLoading = false;
      });
    },
    open() {
      this.$Modal({
        title: '处理',
        content: '我要去做特殊的处理'
      });
    },
    reset() {
      this.isLoading = false;
      this.$refs.form.resetValid();
    },
    resetDatepicker() {
      this.$refs.datapicker.resetValid();
    },
    add() {
      this.data.inputsData.push({ value: '' });
    },
    remove(index) {
      this.data.inputsData.splice(index, 1);
    }
  }
};
</script>
