<template>
  <div>
    <div v-height="50">
      <SwitchList :datas="modeParam"
                  v-model="mode"
                  :small="true"></SwitchList>
    </div>
    <Form :label-width="100"
          :mode="mode"
          :model="data"
          :rules="validationRules">
      <FormItem label="输入框"
                prop="input">
        <input type="text"
               v-model="data.input" />
      </FormItem>
      <FormItem label="整数"
                prop="int">
        <input type="text"
               v-model="data.int" />
      </FormItem>
      <FormItem label="数字"
                prop="number">
        <input type="text"
               v-model="data.number" />
      </FormItem>
      <FormItem label="邮箱"
                prop="email">
        <input type="text"
               v-model="data.email" />
      </FormItem>
      <FormItem label="网址"
                prop="url">
        <input type="text"
               v-model="data.url" />
      </FormItem>
      <FormItem label="电话"
                prop="tel">
        <input type="text"
               v-model="data.tel" />
      </FormItem>
      <FormItem label="手机号码"
                prop="mobile">
        <input type="text"
               v-model="data.mobile" />
      </FormItem>
      <FormItem label="金额">
        <div class="h-input-group">
          <div class="h-input-addon">
            <Select v-model="data.select1"
                    :datas="param1"
                    :no-border="true"
                    :null-option="false"></Select>
          </div>
          <FormItem prop="money.min"
                    label="起始金额"
                    :show-label="false">
            <input type="text"
                   placeholder="起始金额"
                   v-model="data.money.min" />
          </FormItem>
          <span class="h-input-addon">-</span>
          <FormItem prop="money.max"
                    label="结束金额"
                    :show-label="false">
            <input type="text"
                   placeholder="结束金额"
                   v-model="data.money.max" />
          </FormItem>
          <span class="h-input-addon">K</span>
        </div>
      </FormItem>
      <FormItem label="选择"
                prop="select2">
        <Select v-model="data.select2"
                dict="simple"></Select>
      </FormItem>
      <FormItem label="标签"
                prop="taginputs">
        <TagInput v-model="data.taginputs"></TagInput>
      </FormItem>
      <FormItem label="多选"
                prop="select3">
        <Select v-model="data.select3"
                dict="simple"
                :multiple="true"></Select>
      </FormItem>
      <FormItem label="日期"
                prop="date">
        <DatePicker placeholder="选择日期"
                    v-model="data.date"></DatePicker>
      </FormItem>
      <FormItem label="评分"
                prop="rate">
        <Rate v-model="data.rate"
              :show-text="true"></Rate>
      </FormItem>
      <FormItem label="多文本"
                :single="true"
                prop="textarea">
        <textarea rows="3"
                  v-autosize
                  v-model="data.textarea"></textarea>
      </FormItem>
      <FormItem label="单选"
                prop="radio">
        <Radio v-model="data.radio"
               :datas="dataParam"></Radio>
      </FormItem>
      <FormItem label="多选"
                prop="checkbox">
        <Checkbox v-model="data.checkbox"
                  :datas="dataParam"></Checkbox>
      </FormItem>
      <FormItemList>
        <FormItem v-for="(item, index) of data.inputs"
                  :key="item"
                  :label="'输入框'+(index+1)"
                  :prop="'inputs['+index+'].value'">
          <Col width="18">
          <input type="text"
                 v-model="item.value" />
          </Col>
          <Col width="6"
               class="text-right">
          <Button text-color="red"
                  v-width="'90%'"
                  @click="remove(index)"
                  icon="trash">删除</Button>
          </Col>
        </FormItem>
      </FormItemList>
      <FormItem :single="true">
        <Button size="s"
                text-color="blue"
                @click="add">添加输入框</Button>
      </FormItem>
      <FormItem :no-padding="true">
        <Button color="primary"
                :loading="isLoading"
                @click="isLoading=!isLoading">提交</Button>&nbsp;&nbsp;&nbsp;
        <Button @click="isLoading=!isLoading">取消</Button>
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
        int: null,
        number: null,
        url: null,
        email: null,
        tel: null,
        mobile: null,
        input: '',
        textarea: '',
        radio: 1,
        rate: null,
        checkbox: [1],
        select1: '人民币',
        select2: '',
        select3: [],
        taginputs: [],
        money: {
          min: null,
          max: null
        },
        date: null,
        inputs: []
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
      },
      validationRules: {
        required: [
          'select2',
          'select3',
          'inputs[].value',
          'input',
          'textarea',
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
    add() {
      this.data.inputs.push({ value: '' });
    },
    remove(index) {
      this.data.inputs.splice(index, 1);
    }
  }
};
</script>